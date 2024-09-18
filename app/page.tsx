"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CLOUD_SOURCE } from "./constants/video-source";
import { Navigation } from "./components/nav";
import { MainSection } from "./components/main-display/main-section";
import { sections } from "./models/section";


const words = [
  { name: "ARTS CULINAIRES", href: "/montravail/artsculinaires", videoSrc: "PUBADRIEN.m4v" },
  { name: "DOCUMENTAIRES", href: "/montravail/documentaires", videoSrc: "jbmoreno.m4v" },
  { name: "COURTS METRAGES", href: "/montravail/courtsmetrages", videoSrc: "HumainVF.m4v" },
  { name: "PUBLICITES", href: "/montravail/publicites", videoSrc: "black-outFINAL.m4v" },
];

export default function Home() {
  const [hoveredTitle, setHoveredTitle] = useState<string | null>(null);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

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

  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen overflow-hidden bg-black relative">
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

      <Navigation />

      <div className="flex flex-col items-center justify-center mt-48 space-y-8 md:space-y-60 mb-32">
        {sections.map((section) => (
          <MainSection key={section.href} section={section} />
        ))}
      </div>
    </div>
  );
}
