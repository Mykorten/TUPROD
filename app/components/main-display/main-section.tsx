import { useEffect, useRef, useState } from "react";
import { Section } from "../../models/section";
import { CLOUD_SOURCE } from "../../constants/video-source";
import Link from "next/link";
import { MainTitle } from "./main-title";

interface SectionProps {
	section: Section;
	onVideoLoaded: () => void;
}

export function MainSection({ section, onVideoLoaded }: SectionProps) {
	const [hoveredTitle, setHoveredTitle] = useState<string | null>(null);
	const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

	useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-20% 0px -35% 0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVideoVisible(true);
          videoRef.current?.play().catch(error => {
            console.error("Error attempting to play", error);
          });
        } else {
          setIsVideoVisible(false);
          videoRef.current?.pause();
        }
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

	useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoad = () => {
				if (!hasLoaded) {
					setHasLoaded(true);
					onVideoLoaded();
				}
      };

      video.addEventListener('loadeddata', handleLoad);

      // Check if the video is already loaded
      if (video.readyState >= 2) {
        handleLoad();
      }

      return () => {
        video.removeEventListener('loadeddata', handleLoad);
      };
    }
  }, [onVideoLoaded]);

	return (
		<Link key={section.href} href={section.href}>
			<div
				className="hidden md:flex relative"
				onMouseEnter={() => {
					setHoveredTitle(section.name);
				}}
				onMouseLeave={() => {
					setHoveredTitle(null);
				}}
			>
				<MainTitle title={section.name} />

				{hoveredTitle === section.name && (
					<video
						className="fixed top-0 left-0 snap-center w-full h-auto min-h-screen z-0 opacity-50 animate-fade-in"
						src={`${CLOUD_SOURCE}/${section.videoSrc}`}
						autoPlay
						muted
					>
						{section.name}
					</video>
				)}
			</div>

			<div className={`flex relative md:hidden`} >
				<div className={`w-full h-[350px] z-0 ${hasLoaded ? 'opacity-75' : 'opacity-0'} transition-all duration-500`}>
					<video
						className={`w-full h-full z-0 ${isVideoVisible ? 'blur-none' : 'blur-sm'} transition-all duration-300 object-cover`}
						src={`${CLOUD_SOURCE}/${section.videoSrc}`}
						playsInline
						muted
						loop
						preload="auto"
						ref={videoRef}
					>
						{section.name}
					</video>
				</div>

				<div className="absolute inset-0 flex items-center justify-center">
					<MainTitle title={section.name} /> 
				</div>
			</div>
		</Link>
	);
}