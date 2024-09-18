"use client";

import { Navigation } from "@/app/components/nav";
import { useIsMobile } from "@/app/hooks/use-is-mobile";
import React, { useEffect, useRef, useState } from "react";

interface Video {
    src: string;
    cloudSrc?: string;
    legende?: string;
}

interface ProjectLayoutProps {
    title: string;
    source: string;
    videos: Video[];
    legendPlacement?: "overlay" | "bottom";
    orientation?: "horizontal" | "vertical";
}

const MOBILE_BREAKPOINT = 640;

export const ProjectLayout: React.FC<ProjectLayoutProps> = ({ title, source, videos, legendPlacement = "overlay", orientation = "horizontal" }) => {
    const [allVideosLoaded, setAllVideosLoaded] = useState(false);
    const [videosLoadedCount, setVideosLoadedCount] = useState(0);
    const [activeVideoSrc, setActiveVideoSrc] = useState<string | null>(null);
    const [hoveredVideoSrc, setHoveredVideoSrc] = useState<string | null>(null);
    const isMobile = useIsMobile();
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
    const isUniqueVideo = videos.length === 1;

    // Calculate the width class based on the number of videos
    const getWidthClass = (numVideos: number) => {
        if (numVideos === 1) return "w-full";
        return `md:w-1/${numVideos}`; // Pour plus d'une vidéo
    };

    const widthClass = getWidthClass(videos.length);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            if (!allVideosLoaded) {
                setAllVideosLoaded(videosLoadedCount === videos.length);
            }
        }, 500);
        return () => clearTimeout(timeOut);
    }, [videosLoadedCount, videos])

    useEffect(() => {
        const videoElements: HTMLCollectionOf<HTMLMediaElement> = document.getElementsByClassName("project-layout-video") as HTMLCollectionOf<HTMLMediaElement>;
        [...videoElements].forEach((video: HTMLMediaElement) => {
            video.load();
        });

        const resetScrollPosition = () => {
            if (window.innerWidth <= 640 && containerRef.current) {
                containerRef.current.scrollLeft = 0;
            }
        };

        resetScrollPosition();
        window.addEventListener('resize', resetScrollPosition);

        return () => {
            window.removeEventListener('resize', resetScrollPosition);
        };
    }, [videos]);

    useEffect(() => {
        if (!isMobile) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const videoSrc = entry.target.getAttribute('data-src');
                    if (entry.isIntersecting && videoSrc) {
                        setActiveVideoSrc(videoSrc);
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.6,
            }
        );

        videos.forEach((video) => {
            const videoElement = videoRefs.current[video.src];
            if (videoElement) {
                observer.observe(videoElement);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, [videos, isMobile]);

    useEffect(() => {
        videos.forEach((video) => {
            const videoElement = videoRefs.current[video.src];
            if (videoElement) {
                const isActive = isMobile ? video.src === activeVideoSrc : video.src === hoveredVideoSrc;
                videoElement.muted = !isActive;

                if (isActive) {
                    videoElement.play().catch(error => console.error("Error playing video:", error));
                } else {
                    videoElement.pause();
                }
            }
        });
    }, [activeVideoSrc, hoveredVideoSrc, videos, isMobile]);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            const handleWheel = (e: WheelEvent) => {
                if (window.innerWidth <= 768) {  // Mobile breakpoint
                    e.preventDefault();
                    container.scrollLeft += e.deltaY;
                }
            };
            container.addEventListener('wheel', handleWheel, { passive: false });
            return () => container.removeEventListener('wheel', handleWheel);
        }
    }, []);

    return (
        <div className="bg-black min-h-fit md:min-h-screen text-white mb-8">
            <Navigation />

            <div className="flex flex-col items-center justify-center mt-32 mb-8 md:mb-16 px-8 relative z-10">
                <h1
                    className="text-4xl text-zinc-100 duration-500 font-display sm:text-6xl md:text-7xl"
                    style={{ fontFamily: "Phonk" }}
                >
                    {title}
                </h1>
            </div>

            <div ref={containerRef} className="relative z-0 flex items-center justify-start md:justify-center space-x-4 overflow-x-auto snap-x snap-mandatory">
                {videos.map((video) => {
                    return (
                        <div    
                            key={video.src} 
                            className={`video-container relative w-screen ${(isUniqueVideo || orientation === "horizontal") ? 'px-0' : 'px-16'} md:px-0 flex ${legendPlacement === "bottom" ? 'flex-col' : ''} flex-shrink-0 md:flex-shrink md:min-w-0 ${widthClass} h-auto`}
                            onMouseEnter={() => !isMobile && setHoveredVideoSrc(video.src)}
                            onMouseLeave={() => !isMobile && setHoveredVideoSrc(null)}
                        >
                            <video
                                className={`object-cover w-full h-full project-layout-video ${allVideosLoaded ? "opacity-100" : "opacity-0"} transition duration-500 ${
                                    isMobile ? (activeVideoSrc === video.src ? '' : 'blur-sm') : (hoveredVideoSrc === video.src ? '' : 'blur-sm')
                                }`} 
                                ref={(el) => videoRefs.current[video.src] = el}
                                data-src={video.src}
                                src={`${source}/${video.src}`}
                                muted
                                loop
                                playsInline
                                preload="auto"
                                onLoadedData={() => setVideosLoadedCount(count => count + 1)}
                            />
                            {legendPlacement === "overlay" && video.legende ? (
                                <div className="p-8 caption absolute bottom-0 left-0 right-0 bg-opacity-75 text-white p-2 text-right text-2xl opacity-100 md:opacity-0 transition-opacity duration-300"
                                    style={{ fontFamily: "Futura" }}
                                >
                                    {video.legende}
                                </div>
                            ) : null}
                            {legendPlacement === "bottom" && video.legende ? (
                                <div className="p-8 caption text-white p-2 text-right text-2xl opacity-100"
                                    style={{ fontFamily: "Futura" }}
                                >
                                    {video.legende}
                                </div>
                            ) : null}
                        </div>
                    )
                })}
            </div>

            <style jsx>{`
                .video-container {
                    position: relative;
                }
                .video-container:hover .caption {
                    opacity: 1;
                }
                @media (max-width: 640px) {
                    .video-container {
                        scroll-snap-align: center;
                    }
                }
            `}</style>
        </div>
    );
};
