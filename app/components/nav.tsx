"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = {
  "/": {
    name: "home",
    external: false,
  },
  "/values": {
    name: "values",
    external: false,
  },
  "/portfolio": {
    name: "portfolio",
    external: false,
  },
  "/memories": {
    name: "memories",
    external: false,
  },
  "/inspiration": {
    name: "inspiration",
    external: false,
  },
  // "/reading": {
  //   name: "reading",
  //   external: false,
  // },
  "/blog": {
    name: "thoughts",
    external: false,
  },
  "https://open.spotify.com/artist/3K49G6Qf78adI7KG77Wr5i?si=64l-2L5YT9aD3G6OIIIRUg":
    {
      name: "music",
      external: true,
    },
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="-ml-[8px] mb-8 tracking-tight">
      <div className="lg:sticky lg:top-20">
        {/* Mobile burger menu button */}
        <button
          className="md:hidden p-2 focus:outline-none relative w-8 h-8"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div
            className="w-6 h-0.5 bg-black absolute top-3 left-1 transition-all duration-300"
            style={{
              transform: isOpen ? "rotate(45deg)" : "translateY(-4px)",
            }}
          />
          <div
            className="w-6 h-0.5 bg-black absolute top-3 left-1 transition-all duration-300"
            style={{ opacity: isOpen ? 0 : 1 }}
          />
          <div
            className="w-6 h-0.5 bg-black absolute top-3 left-1 transition-all duration-300"
            style={{
              transform: isOpen ? "rotate(-45deg)" : "translateY(4px)",
            }}
          />
        </button>

        {/* Mobile menu */}
        <nav
          className={`md:hidden transition-all duration-300 ${
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="flex flex-col space-y-2 pt-4">
            {Object.entries(navItems).map(([path, { name, external }]) => {
              return external ? (
                <a
                  key={path}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-1 px-2"
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </a>
              ) : (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-1 px-2"
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Desktop menu */}
        <nav
          className="hidden md:flex flex-row items-start relative px-0 pb-0 fade overflow-auto scroll-pr-6 relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name, external }]) => {
              return external ? (
                <a
                  key={path}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </a>
              ) : (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
