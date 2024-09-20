"use client";

import React from "react";
import { ProjectLayout } from "../components/project-layout";
import { Footer } from "@/app/components/footer";
import { CLOUD_SOURCE } from "@/app/constants/video-source";
import { PageDisplay } from "@/app/components/page-display";
import { useIsMobile } from "@/app/hooks/use-is-mobile";

const previoustitle = "COURTS METRAGES";
const nexttitle = "PUBLICITES";
const nextVisible = true;
const previousVisible = true;

const title = "DOCUMENTAIRES";
const videos = [
    { src: "jbmoreno.m4v", legende: "ARTISTES" },
];

export default function ProjectsPage() {
    const isMobile = useIsMobile();

    return (
        <PageDisplay footer={
            <Footer
                previoustitle={previoustitle}
                previousLink="/montravail/courtsmetrages"
                nexttitle={nexttitle}
                nextLink="/montravail/publicites"
                nextVisible={nextVisible}
                previousVisible={previousVisible}
            />
        }>
            <ProjectLayout
                title={title}
                source={CLOUD_SOURCE}
                videos={videos}
                legendPlacement={isMobile ? "bottom" : "overlay"}
                bandMainVideo={true}
            />
        </PageDisplay>
    );
}
