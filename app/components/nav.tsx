"use client";  // Ajoutez cette ligne

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${isIntersecting
					? "bg-zinc-900/0 border-transparent"
					: "bg-zinc-900/500 border-zinc-800"
					}`}
			>
				<div className="w-screen flex items-center justify-between fixed top-0 px-24 h-24 mx-auto">
					<Link href="/">
						<img className="w-36 cursor-pointer" src="/logo.png" alt="Logo" />
					</Link>
					<nav className="animate-fade-in">
						<ul className="flex items-center justify-center gap-8">
							<Link
								href="/montravail/artsculinaires"
								className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
								style={{ fontSize: "1.15rem", fontFamily: "Phosphate, sans-serif" }}
							>
								Mon travail
							</Link>
							<Link
								href="/contact"
								className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
								style={{ fontSize: "1.15rem", fontFamily: "Phosphate, sans-serif" }}
							>
								Contact
							</Link>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};
