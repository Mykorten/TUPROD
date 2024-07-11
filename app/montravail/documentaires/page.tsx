import Link from "next/link";
import React from "react";
import { ProjectLayout } from "../components/project-layout";
import { Footer } from "@/app/components/footer";
import { CLOUD_SOURCE } from "@/app/constants/video-source";

const previoustitle = "COURTS METRAGES";
const nexttitle = "PUBLICITES";
const nextVisible = true;
const previousVisible = true;

const title = "DOCUMENTAIRES";
const videos = [
    { src: "jbmoreno.m4v", legende: "ARTISTES" },
];

export default function ProjectsPage() {
    return (
        <div>
            <ProjectLayout
                title={title}
                source={CLOUD_SOURCE}
                videos={videos}
            />
            <Footer
                previoustitle={previoustitle}
                previousLink="/montravail/courtsmetrages"
                nexttitle={nexttitle} nextLink="/montravail/publicites"
                nextVisible={nextVisible}
                previousVisible={previousVisible}
            />
        </div>
    );
}
