"use client";

import Link from "next/link";
import React from "react";
import { ProjectLayout } from "../components/project-layout";
import { Footer } from "@/app/components/footer";
import { CLOUD_SOURCE } from "@/app/constants/video-source";

const previoustitle = "DOCUMENTAIRES";
const nextVisible = false;
const previousVisible = true;

const title = "PUBLICITES";
const videos = [
    { src: "black-outFINAL.mov", legende: "BLACKOUT CONCEPT" },
];

export default function ProjectsPage() {
    return (
        <div>
            <ProjectLayout title={title} source={CLOUD_SOURCE} videos={videos} />
            <div className="relative z-0 space-x-4 flex flex-row items-center bg-black">
                <div className="video-container relative h-auto">
                    <video className="object-cover" autoPlay muted loop>
                        <source src={`${CLOUD_SOURCE}/OSTUFFFINFIN.mp4`} type="video/mp4" />
                    </video>

                    <div className="caption absolute bottom-0 left-0 right-0 bg-opacity-75 text-white p-16 text-right text-3xl opacity-0 transition-opacity duration-300"
                        style={{ fontFamily: "Futura" }}
                    >
                        NOUVELLE COLLECTION OSTUFF
                    </div>
                </div>
            </div>
            <Footer previoustitle={previoustitle} nexttitle="" nextLink="" previousLink="/montravail/documentaires" nextVisible={nextVisible} previousVisible={previousVisible} />

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
}
