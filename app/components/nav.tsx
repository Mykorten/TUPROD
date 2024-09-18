"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const navigation = [
  { name: "NOTRE TRAVAIL", href: "/montravail/artsculinaires", hiddenPath: "montravail" },
  { name: "CONTACT", href: "/contact", hiddenPath: "contact" },
];

const mobileNavigation = [
	{ name: "NOTRE TRAVAIL", href: "/montravail/artsculinaires", hiddenPath: "montravail" },
	{ name: "ARTS CULINAIRES", href: "/montravail/artsculinaires", hiddenPath: "contact", hiddenAbsolutePath: "/" },
	{ name: "COURTS METRAGES", href: "/montravail/courtsmetrages", hiddenPath: "contact", hiddenAbsolutePath: "/" },
	{ name: "DOCUMENTAIRES", href: "/montravail/documentaires", hiddenPath: "contact", hiddenAbsolutePath: "/" },
	{ name: "PUBLICITES", href: "/montravail/publicites", hiddenPath: "contact", hiddenAbsolutePath: "/" },
	{ name: "CONTACT", href: "/contact", hiddenPath: "contact" },
]

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [currentPath, setCurrentPath] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setCurrentPath(window.location.pathname);
		}
	}, []);

	return (
		<>
			<header className="w-screen flex items-center justify-between fixed top-0 px-0 md:px-24 h-24 bg-black-alpha-95 backdrop-blur-2xl z-50" ref={ref}>
				<Link href="/">
					<img className="w-36 cursor-pointer mx-8 md:mx-0" src="/logo.png" alt="Logo" />
				</Link>

				<nav className="my-16 animate-fade-in">
					<ul className="hidden md:flex items-center justify-center gap-8">
						{navigation.map((item) => {
							if (currentPath.includes(item.hiddenPath)) {
								return null;
							}
							return (
								<li key={item.href}>
									<Link href={item.href} className={`${currentPath === "/" ? "text-md" : "text-sm"} duration-500 text-zinc-500 hover:text-zinc-300`}>{item.name}</Link>
								</li>
							);
						})}
					</ul>
					<button className="md:hidden text-white mx-8 md:mx-0 w-10 h-10 flex items-center justify-end" onClick={() => setIsMenuOpen(!isMenuOpen)}>
						<Menu />
					</button>
				</nav>
			</header>

			{isMenuOpen && (
				<AnimatePresence>
					<motion.div
						key={isMenuOpen ? "open" : "closed"}
						initial={{ opacity: 0, y: -25 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -25 }}
						transition={{ duration: 0.1 }}
						className="fixed top-0 left-0 w-screen h-screen bg-black-alpha-70 backdrop-blur-2xl z-50"
					>
					<button className="absolute top-8 right-1 md:right-0 mx-8 md:mx-0 w-10 h-10 flex items-center justify-end" onClick={() => setIsMenuOpen(!isMenuOpen)}>
						<X className="text-white" />
					</button>
					<ul className="flex flex-col items-center justify-center h-full">
						{mobileNavigation.map((item) => {
							if (item.hiddenPath && currentPath.includes(item.hiddenPath)) {
								return null;
							}

							if (currentPath === item.hiddenAbsolutePath) {
								return null;
							}

							return (
								<li key={item.href}>
									<Link
										href={item.href}
										style={{ fontSize: "1.15rem", fontFamily: "Phonk, sans-serif" }}
										className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
									>
										{item.name}
									</Link>
								</li>
							)
						})}
					</ul>
					</motion.div>
				</AnimatePresence>
			)}
		</>
	);
};
