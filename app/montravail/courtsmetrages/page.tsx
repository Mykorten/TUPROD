import Link from "next/link";
import React from "react";
import { ProjectLayout } from "../components/project-layout";
import { Footer } from "@/app/components/footer";

const previoustitle = "Arts Culinaires";
const nexttitle = "Documentaires";
const nextVisible = true;
const previousVisible = true;

const title = "Courts Metrages";
const videos = [
    { src: "HumainVF.mov", legende: "Un court métrage captivant" },
];

export default function ProjectsPage() {
    return (
        <div>
            <ProjectLayout title={title} source="/montravail/courtsmetrages" videos={videos} />
            <Footer previoustitle={previoustitle} previousLink="/montravail/artsculinaires" nexttitle={nexttitle} nextLink="/montravail/documentaires" nextVisible={nextVisible} previousVisible={previousVisible} />
        </div>
    );
}
