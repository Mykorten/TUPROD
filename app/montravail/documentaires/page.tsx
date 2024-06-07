import Link from "next/link";
import React from "react";
import { ProjectLayout } from "../components/project-layout";
import { Footer } from "@/app/components/footer";

const previoustitle = "Courts Metrages";
const nexttitle = "Publicites";
const nextVisible = true;
const previousVisible = true;

const title = "Documentaires";
const videos = [
    { src: "jbmoreno.mov", legende: "Une série de documentaires fascinante" },
];

export default function ProjectsPage() {
    return (
        <div>
            <ProjectLayout title={title} source="/montravail/documentaires" videos={videos} />
            <Footer previoustitle={previoustitle} previousLink="/montravail/courtsmetrages" nexttitle={nexttitle} nextLink="/montravail/publicites" nextVisible={nextVisible} previousVisible={previousVisible} />
        </div>
    );
}
