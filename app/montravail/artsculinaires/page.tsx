import Link from "next/link";
import React from "react";
import { ProjectLayout } from "../components/project-layout";
import { Footer } from "@/app/components/footer";

const previoustitle = "";
const nexttitle = "Courts Metrages";
const nextVisible = true;
const previousVisible = false;

const title = "Arts Culinaires";
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

            <Footer previousLink="" previoustitle={previoustitle} nexttitle={nexttitle} nextLink="/montravail/courtsmetrages" nextVisible={nextVisible} previousVisible={previousVisible} />
        </div>
    );
}
