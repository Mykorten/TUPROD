"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Navigation } from "./components/nav";
import { MainSection } from "./components/main-display/main-section";
import { sections } from "./models/section";
import { MainLoadingScreen } from "./components/main-display/main-loading";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  const [videosLoadedCount, setVideosLoadedCount] = useState(0);
  const [allVideosLoaded, setAllVideosLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const videoElement = document.getElementById("background-video");
      if (videoElement) {
        videoElement.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  useEffect(() => {
    if (videosLoadedCount >= 1) {
      setAllVideosLoaded(true);
    }
  }, [videosLoadedCount]);

  const handleVideoLoaded = () => {
    setVideosLoadedCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="flex flex-col items-center relative justify-center w-screen min-h-screen overflow-hidden bg-black relative">
      {!allVideosLoaded && <MainLoadingScreen progress={videosLoadedCount / sections.length * 100} />}
      <style jsx global>{`
        body {
          font-family: 'Phonk';
        }
        @keyframes drawIn {
          0% {
            stroke-dashoffset: 10000;
            fill: transparent;
          }
          75% {
            stroke-dashoffset: 0;
            fill: transparent;
          }
          100% {
            fill: white;
          }
        }
        .mask-path {
          stroke: white;
          stroke-dasharray: 10000;
          animation: drawIn 2.5s ease forwards;
        }
      `}</style>

      {allVideosLoaded && <Navigation />}
  
      <div className={`flex flex-col items-center justify-center mt-48 space-y-8 md:space-y-60 mb-48 ${allVideosLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
        {sections.map((section) => (
          <MainSection key={section.href} section={section} onVideoLoaded={() => {
            handleVideoLoaded();
          }} />
        ))}
      </div>
    </div>
  );
}
