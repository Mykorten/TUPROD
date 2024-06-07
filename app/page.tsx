"use client";

import Link from "next/link";
import React from "react";

const navigation = [
  { name: "Notre travail", href: "/montravail/artsculinaires" },
  { name: "Contact", href: "/contact" },
];

const words = [
  { name: "ARTS CULINAIRES", href: "/montravail/artsculinaires" },
  { name: "COURTS METRAGES", href: "/montravail/courtsmetrages" },
  { name: "DOCUMENTAIRES", href: "/montravail/documentaires" },
  { name: "PUBLICITES", href: "/montravail/publicites" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen overflow-hidden bg-black from-black via-zinc-600/20 to-black relative">
      <style jsx global>{`
        body {
          font-family: 'Phonk';
        }
      `}</style>

      <header className="w-screen flex items-center justify-between fixed top-0 px-24 h-24">
        <Link href="/">
          <img className="w-36 cursor-pointer" src="/logo.png" alt="Logo" />
        </Link>

        <nav className="my-16 animate-fade-in">
          <ul className="flex items-center justify-center gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  style={{ fontSize: "1.15rem", fontFamily: "Phonk, sans-serif" }}
                  className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div className="z-10 flex flex-col items-center justify-center mt-72 space-y-60 mb-16">
        {words.map((item) => (
          <Link key={item.href} href={item.href}>
            <div className="relative">
              <h1
                className="text-4xl text-gray-200 duration-500 font-display sm:text-6xl md:text-7xl hover:text-gray-300 relative"
                style={{ fontFamily: "Phonk, sans-serif" }}
              >
                {item.name}
                <span
                  className="absolute top-0 left-0 w-full h-full text-6xl text-gray-700 opacity-20"
                  style={{ fontFamily: "Phonk, sans-serif", zIndex: -1 }}
                >
                  artiste
                </span>
              </h1>
            </div>
          </Link>
        ))}
      </div>

      <footer className="w-screen flex items-center justify-between px-24 h-24 bg-black text-zinc-500">
        <h2 className="text-sm" style={{ fontSize: "1.15rem", fontFamily: "Phonk, sans-serif" }}>
          The Productive production
        </h2>
        <Link
          href="/contact"
          className="text-sm duration-500 hover:text-zinc-300"
          style={{ fontSize: "1.15rem", fontFamily: "Phonk, sans-serif" }}
        >
          Contactez nous
        </Link>
      </footer>
    </div>
  );
}
