"use client";
import React from "react";
import { ProjectLayout } from "../components/project-layout";
import { Footer } from "@/app/components/footer";

const previoustitle = "";
const nexttitle = "COURTS METRAGES";
const nextVisible = true;
const previousVisible = false;

const title = "ARTS CULINAIRES";
const videos = [
    { src: "JAFARWOK.mp4", legende: "Legende art" },
    { src: "JAFARBOEUF1.m4v", legende: "Viande marinée" },
    { src: "JAFARBOEUF2.m4v", legende: "La cuisine" },
    { src: "JAFARVELOUTE.m4v", legende: "Bien manger" },
];

export default function ProjectsPage() {
    return (
        <div>
            <ProjectLayout title={title} source="/montravail/artsculinaires" videos={videos} />

            <div className="relative z-0 space-x-4 flex flex-row items-center bg-black">
                <div className="video-container container mx-auto relative  h-auto">
                    <video className="object-cover" autoPlay muted loop>
                        <source src="/montravail/artsculinaires/PUBADRIEN.mp4" type="video/mp4" />
                    </video>

                    <div className="caption absolute bottom-0 left-0 right-0 bg-opacity-75 text-white p-2 text-right text-3xl opacity-0 transition-opacity duration-300"
                        style={{ fontFamily: "Futura" }}
                    >
                        Pub culinaire Adrien
                    </div>
                </div>
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
            <Footer previousLink="" previoustitle={previoustitle} nexttitle={nexttitle} nextLink="/montravail/courtsmetrages" nextVisible={nextVisible} previousVisible={previousVisible} />
        </div>
    );
}
