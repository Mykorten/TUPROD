"use client";
import React, { useState } from "react";
import { ProjectLayout } from "../components/project-layout";
import { Footer } from "@/app/components/footer";
import { CLOUD_SOURCE } from "@/app/constants/video-source";

const previoustitle = "";
const nexttitle = "COURTS METRAGES";
const nextVisible = true;
const previousVisible = false;

const title = "ARTS CULINAIRES";
const videos = [
    { src: "JAFARWOK.m4v", legende: "LE WOK EXPRESS" },
    { src: "JAFARBOEUF1.m4v", legende: "COTE DE BOEUF DE GALLICE" },
    { src: "JAFARBOEUF2.m4v", legende: "ENTRECOTE DE BOEUF DE GALLICE" },
    { src: "JAFARVELOUTE.m4v", legende: "VELOUTE DE COURGE" },
];

export default function ProjectsPage() {
    const [hovered, setHovered] = useState<boolean>();

    return (
        <div className="bg-black">
            <ProjectLayout
                title={title}
                source={CLOUD_SOURCE}
                videos={videos}
                orientation="vertical"
            />

            <div className="relative z-0 space-x-4 flex flex-row items-center bg-black w-full mb-16">
                <div
                    className="video-container container mx-auto relative h-auto w-full"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <video
                        className={`object-cover w-full ${hovered ? 'blur-none' : 'blur-sm'}`}
                        src={`${CLOUD_SOURCE}/PUBADRIEN.m4v`}
                        autoPlay
                        muted={!hovered}
                        loop
                    />

                    <div className="caption absolute bottom-0 left-0 backdrop-blur-sm right-0 bg-opacity-75 text-white p-4 md:p-16 text-right text-md md:text-3xl opacity-1 md:opacity-0 transition-opacity duration-300"
                        style={{ fontFamily: "Futura" }}
                    >
                        PRESENTATION DE FORMATION DE PATISSERIE POUR ADRIEN TORNIER
                    </div>
                </div>
            </div>
            <style jsx>{`
                .video-container {
                    position: relative;
                }
                .video-container:hover .caption {
                    opacity: 1;
                }
            `}</style>
            <Footer
                previousLink=""
                previoustitle={previoustitle}
                nexttitle={nexttitle}
                nextLink="/montravail/courtsmetrages"
                nextVisible={nextVisible}
                previousVisible={previousVisible}
            />
        </div>
    );
}
