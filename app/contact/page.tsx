"use client";
import { Instagram, Mail, Youtube } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";

const socials = [
	{
		icon: <Instagram size={20} />,
		href: "https://www.instagram.com/theunproductiveproduction?igsh=MXZncnFpcmV5bXZrZA==",
		label: "Instagram",
		handle: "theunprodproduction",
	},
	{
		icon: <Youtube size={20} />,
		href: "https://patreon.com/TheUnproductiveProduction?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink",
		label: "Patreon",
		handle: "TuProd",
	},
	{
		icon: <Mail size={16} />,
		href: "mailto:theunprodproduction@gmail.com",
		label: "Mail",
		handle: "Email",
	},
];

export default function Example() {
	return (
		<div className="bg-black from-zinc-900/0 via-zinc-900 to-zinc-900/0"
			style={{ fontFamily: "Phonk" }}
		>
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{socials.map((s, index) => (
						<Link
							key={index}
							href={s.href}
							target={s.label === "Email" ? "_self" : "_blank"}
							className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
						>
							<span
								className="absolute w-px h-1/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
								aria-hidden="true"
							/>
							<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 bg-zinc-900 drop-shadow-orange">
								{s.icon}
							</span>
							<div className="z-10 flex flex-col items-center">
								<span className="lg:text-xl font-medium duration-150 xl:text-xl text-zinc-200 group-hover:text-white ">
									{s.handle}
								</span>
								<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200"
								>
									{s.label}
								</span>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
