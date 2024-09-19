import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

interface FooterProps {
    previoustitle: string;
    previousLink: string;
    previousVisible: boolean;
    nexttitle: string;
    nextLink: string;
    nextVisible: boolean;
}

export const Footer: React.FC<FooterProps> = ({ previoustitle, previousLink, nexttitle, nextLink, previousVisible, nextVisible }) => {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(!pathname.includes("artsculinaires"));

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollThreshold = 100; // Adjust this value to change when the footer appears

            setIsVisible(documentHeight - (scrollPosition + windowHeight) < scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call once to set initial state
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <footer className={`fixed bottom-0 z-50 left-0 right-0 bg-black-alpha-50 backdrop-blur-lg text-zinc-100 max-h-48 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none translate-y-28'}`}>
            <div className="bottom-4 md:bottom-24 left-0 right-0 flex flex-col md:flex-row justify-between items-center px-2 md:px-24 py-4 md:py-8">
                {previousVisible && (
                    <div className="p-2 flex items-center">
                        <Link href={previousLink} scroll={false} className={`${nextVisible ? 'text-lg' : 'text-2xl'} md:text-4xl hover:drop-shadow-main-title duration-500 hover:text-zinc-300 flex items-center leading-8`} style={{ fontFamily: "Phonk" }}>
                            <ChevronLeft size={50} /> {previoustitle}
                        </Link>
                    </div>
                )}
                <div className="flex-grow"></div>
                {nextVisible && (
                    <div className="p-2 flex items-center">
                        <Link href={nextLink} scroll={false} className={`${previousVisible ? 'text-lg' : 'text-2xl'} md:text-4xl hover:drop-shadow-main-title duration-500 hover:text-zinc-300 flex items-center leading-8`} style={{ fontFamily: "Phonk" }}>
                            {nexttitle} <ChevronRight size={50} />
                        </Link>
                    </div>
                )}
            </div>
        </footer>
    );
};
