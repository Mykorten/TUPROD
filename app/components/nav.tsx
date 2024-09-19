"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useIsMobile } from "../hooks/use-is-mobile";

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
	const pathname = usePathname();
	const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
	const [isNavigating, setIsNavigating] = useState(false);

	const handleScroll = useCallback(() => {
		if (isNavigating) return;
		
		const currentScrollY = window.scrollY;
		if (currentScrollY > lastScrollY) {
			setIsScrollingDown(true);
		} else if (currentScrollY < lastScrollY) {
			setIsScrollingDown(false);
		}
		setLastScrollY(currentScrollY);
	}, [lastScrollY, isNavigating]);

	useEffect(() => {
		setIsNavigating(true);
		if (pathname !== "/") {
			setIsScrollingDown(true);
			setLastScrollY(0);
			window.scrollTo(0, 0);
		}
		// Use a timeout to ensure navigation is complete before re-enabling scroll handling
		const timer = setTimeout(() => setIsNavigating(false), 100);
		return () => clearTimeout(timer);
	}, [pathname]);

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", handleScroll);
			return () => window.removeEventListener("scroll", handleScroll);
		}
	}, [handleScroll]);

	return (
		<>
			<header className={`w-screen flex items-center justify-between sticky top-0 px-0 md:px-24 h-24 bg-black-alpha-95 backdrop-blur-2xl z-50 transition-all duration-500 ${
          isScrollingDown ? "transform -translate-y-24 opacity-0 h-12" : "transform translate-y-0"
        }`} ref={ref}>
				<Link className="max-h-10 flex items-center mx-8 md:mx-0 animate-fade-in" href="/">
					<img className="w-36 cursor-pointer" src="/logo.png" alt="Logo" />
				</Link>

				<nav className="my-16 animate-fade-in">
					<ul className="hidden md:flex items-center justify-center gap-8">
						{navigation.map((item) => {
							if (pathname.includes(item.hiddenPath)) {
								return null;
							}
							return (
								<li key={item.href}>
									<Link href={item.href} className={`${pathname === "/" ? "text-md" : "text-sm"} duration-500 text-zinc-500 hover:text-zinc-300`}>{item.name}</Link>
								</li>
							);
						})}
					</ul>
					<button className="md:hidden text-white mx-8 md:mx-0 w-10 h-10 pb-1 flex items-center justify-end" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
					<button className="absolute top-6 right-1 md:right-0 mx-8 md:mx-0 w-10 h-10 flex items-center justify-end" onClick={() => setIsMenuOpen(!isMenuOpen)}>
						<X className="text-white" />
					</button>
					<ul className="flex flex-col items-center justify-center h-full">
						{mobileNavigation.map((item) => {
							if (item.hiddenPath && currentPath.includes(item.hiddenPath)) {
								return null;
							}

							if (pathname === item.hiddenAbsolutePath) {
								return null;
							}

							return (
								<li key={item.href}>
									<Link
										href={item.href}
										style={{ fontSize: "1.15rem", fontFamily: "Phonk, sans-serif" }}
										className="text-sm duration-500 text-zinc-200 hover:text-zinc-100"
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
