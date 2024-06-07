import Link from "next/link";
import React from "react";
import { ProjectLayout } from "../components/project-layout";
import { Footer } from "@/app/components/footer";

const previoustitle = "DOCUMENTAIRES";
const nextVisible = false;
const previousVisible = true;

const title = "PUBLICITES";
const videos = [
    { src: "black-outFINAL.mov", legende: "Une publicité captivante" },
    { src: "OSTUFFFINFIN.mp4", legende: "Une autre publicité impressionnante" },
];

export default function ProjectsPage() {
    return (
        <div>
            <ProjectLayout title={title} source="/montravail/publicites" videos={videos} />
            <Footer previoustitle={previoustitle} nexttitle="" nextLink="" previousLink="/montravail/documentaires" nextVisible={nextVisible} previousVisible={previousVisible} />
        </div>
    );
}
