"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [currentPath, setCurrentPath] = useState<string>("");

	useEffect(() => {
		if (typeof window !== "undefined") {
			setCurrentPath(window.location.pathname);
		}
	}, []);

	return (
		<header ref={ref}>
			<div className="fixed inset-x-0 top-0 z-50 bg-black">
				<div className="w-screen flex items-center justify-between px-24 h-24 mx-auto">
					<Link href="/">
						<img className="w-36 cursor-pointer" src="/logo.png" alt="Logo" />
					</Link>
					<nav className="animate-fade-in">
						<ul className="flex items-center justify-center gap-8">
							{currentPath !== "/montravail/artsculinaires" &&
								currentPath !== "/montravail/courtsmetrages" &&
								currentPath !== "/montravail/publicites" &&
								currentPath !== "/montravail/documentaires" && (
									<Link
										href="/montravail/artsculinaires"
										className="text-sm duration-100 text-zinc-300 hover:text-zinc-100"
										style={{ fontSize: "1.15rem", fontFamily: "Phonk", opacity: 0.6 }}
									>
										NOTRE TRAVAIL
									</Link>
								)}
							{currentPath !== "/contact" && (
								<Link
									href="/contact"
									className="text-sm duration-100 text-zinc-300 hover:text-zinc-100"
									style={{ fontSize: "1.15rem", fontFamily: "Phonk", opacity: 0.6 }}
								>
									CONTACT
								</Link>
							)}
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};
