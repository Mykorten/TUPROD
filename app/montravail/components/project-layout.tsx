"use client";

import { Navigation } from "@/app/components/nav";
import React from "react";

interface Video {
    src: string;
    legende?: string;
}

interface ProjectLayoutProps {
    title: string;
    source: string;
    videos: Video[];
}

export const ProjectLayout: React.FC<ProjectLayoutProps> = ({ title, source, videos }) => {
    // Calculate the width class based on the number of videos
    const getWidthClass = (numVideos: number) => {
        if (numVideos === 1) return "w-full";
        return `w-1/${numVideos}`; // Pour plus d'une vidéo
    };

    const widthClass = getWidthClass(videos.length);

    return (
        <div style={{ backgroundColor: "black", color: "white", minHeight: "100vh" }}>
            <Navigation />

            <div className="flex flex-col items-center justify-center mt-32 mb-16 relative z-10">
                <h1
                    className="text-4xl text-zinc-100 duration-500 font-display sm:text-6xl md:text-7xl"
                    style={{ fontFamily: "Phonk" }}
                >
                    {title}
                </h1>
            </div>

            <div className="relative z-0 flex items-center justify-center space-x-4">
                {videos.map((video) => (
                    <div key={video.src} className={`video-container relative ${widthClass} h-auto`}>
                        <video className="object-cover w-full" autoPlay muted loop>
                            <source src={`${source}/${video.src}`} type="video/mp4" />
                        </video>
                        {video.legende ? (
                            <div className="p-8 caption absolute bottom-0 left-0 right-0 bg-opacity-75 text-white p-2 text-right text-2xl opacity-0 transition-opacity duration-300"
                                style={{ fontFamily: "Futura" }}
                            >
                                {video.legende}
                            </div>
                        ) : null}
                    </div>
                ))}
            </div>

            <style jsx>{`
                .video-container {
                    position: relative;
                }
                .video-container:hover video {
                    filter: blur(5px);
                }
                .video-container:hover .caption {
                    opacity: 1;
                }
            `}</style>
        </div>
    );
};
