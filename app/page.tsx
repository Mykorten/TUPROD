"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navigation = [
  { name: "NOTRE TRAVAIL", href: "/montravail/artsculinaires" },
  { name: "CONTACT", href: "/contact" },
];

const words = [
  { name: "ARTS CULINAIRES", href: "/montravail/artsculinaires", videoSrc: "/montravail/artsculinaires/PUBADRIEN.mp4" },
  { name: "DOCUMENTAIRES", href: "/montravail/documentaires", videoSrc: "/montravail/documentaires/jbmoreno.mov" },
  { name: "COURTS METRAGES", href: "/montravail/courtsmetrages", videoSrc: "/montravail/courtsmetrages/HumainVF.mov" },
  { name: "PUBLICITES", href: "/montravail/publicites", videoSrc: "/montravail/publicites/black-outFINAL.mov" },
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

      <header className="w-screen flex items-center justify-between fixed top-0 px-24 h-24 bg-black z-50">
        <Link href="/">
          <img className="w-36 cursor-pointer" src="/logo.png" alt="Logo" />
        </Link>

        <nav className="my-16 animate-fade-in">
          <ul className="flex items-center justify-center gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  style={{ fontSize: "1.15rem", fontFamily: "Phonk, sans-serif" }}
                  className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>


      <div className="flex flex-col items-center justify-center mt-48 space-y-60 mb-16">
        {words.map((item) => (
          <Link key={item.href} href={item.href}>
            <div
              className="relative"
              onMouseEnter={() => {
                setHoveredTitle(item.name);
                setVideoSrc(item.videoSrc);
              }}
              onMouseLeave={() => {
                setHoveredTitle(null);
                setVideoSrc(null);
              }}
            >
              <h1
                className="text-4xl text-gray-200 duration-500 font-display sm:text-6xl md:text-7xl hover:text-gray-300 relative z-10"
                style={{ fontFamily: "Phonk" }}
              >
                {item.name}
                {item.name === "DOCUMENTAIRES" && (
                  <span
                    className="absolute left-1/2 transform -translate-x-1/2 bottom-[-3rem] text-[6rem] text-gray-700 opacity-100"
                    style={{ fontFamily: "Bellibish", zIndex: -1 }}
                  >
                    <svg width="500" height="100">
                      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Bellibish" fontSize="6rem" fill="none" stroke="white" className="mask-path">ARTISTES</text>
                    </svg>
                  </span>
                )}
              </h1>

              {hoveredTitle === item.name && videoSrc && (
                <motion.div
                  className="fixed top-0 left-0 snap-center w-full h-auto min-h-screen z-0"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      type: "spring",
                      damping: 5,
                      stiffness: 100,
                      restDelta: 0.001
                    }
                  }} >
                  <video
                    className=""
                    src={videoSrc}
                    autoPlay
                    muted
                  ></video>
                </motion.div>

              )}
            </div>
          </Link>
        ))}
      </div>

      <div className="w-screen flex items-center justify-between px-24 h-24 bg-black text-zinc-500">
      </div>
    </div>
  );
}
