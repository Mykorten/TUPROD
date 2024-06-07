"use client";
import React from "react";
import { ProjectLayout } from "../components/project-layout";
import { Footer } from "@/app/components/footer";

const previoustitle = "ARTS CULINAIRES";
const nexttitle = "DOCUMENTAIRES";
const nextVisible = true;
const previousVisible = true;

const title = "COURTS METRAGES";
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
