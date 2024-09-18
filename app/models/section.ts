export interface Section {
	name: string;
	href: string;
	videoSrc: string;
}

export const sections: Section[] = [
  { name: "ARTS CULINAIRES", href: "/montravail/artsculinaires", videoSrc: "PUBADRIEN.m4v" },
  { name: "DOCUMENTAIRES", href: "/montravail/documentaires", videoSrc: "jbmoreno.m4v" },
  { name: "COURTS METRAGES", href: "/montravail/courtsmetrages", videoSrc: "HumainVF.m4v" },
  { name: "PUBLICITES", href: "/montravail/publicites", videoSrc: "black-outFINAL.m4v" },
];