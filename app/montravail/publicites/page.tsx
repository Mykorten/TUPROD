"use client";

import Link from "next/link";
import React from "react";
import { ProjectLayout } from "../components/project-layout";
import { Footer } from "@/app/components/footer";

const previoustitle = "DOCUMENTAIRES";
const nextVisible = false;
const previousVisible = true;

const title = "PUBLICITES";
const videos = [
    { src: "black-outFINAL.mov", legende: "BLACKOUT CONCEPT" },
    { src: "OSTUFFFINFIN.mp4", legende: "NOUVELLE COLLECTION OSTUFF" },
];

export default function ProjectsPage() {
    return (
        <div>
            <ProjectLayout title={title} source="/montravail/publicites" videos={videos} />
            <Footer previoustitle={previoustitle} nexttitle="" nextLink="" previousLink="/montravail/documentaires" nextVisible={nextVisible} previousVisible={previousVisible} />

            <style jsx>{`
                .video-container {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                }
                .video-container video {
                    width: 100%;
                    height: auto;
                    max-height: 100px;
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
