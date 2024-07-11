"use client";
import React from "react";
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
    return (
        <div>
            <ProjectLayout
                title={title}
                source={CLOUD_SOURCE}
                videos={videos}
            />

            <div className="relative z-0 space-x-4 flex flex-row items-center bg-black">
                <div className="video-container container mx-auto relative  h-auto">
                    <video className="object-cover" autoPlay muted loop>
                        <source src={`${CLOUD_SOURCE}/PUBADRIEN.m4v`} type="video/m4v" />
                    </video>

                    <div className="caption absolute bottom-0 left-0 right-0 bg-opacity-75 text-white p-16 text-right text-3xl opacity-0 transition-opacity duration-300"
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
                .video-container:hover video {
                    filter: blur(5px);
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
