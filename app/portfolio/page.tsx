"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
};

const projects: Project[] = [
  {
    id: "bracket",
    title: "Bracket Bot",
    description: "Programming a 5ft robot",
    image: "/images/projects/bracket-bot.avif",
    tags: ["engineering", "embedded systems", "software", "ai"],
  },
  {
    id: "bdc",
    title: "Big Data Challenge",
    description: "Analysis of city design through proximity to ammenities",
    image:
      "https://storeys.com/media-library/toronto-best-city-expats.jpg?id=34014893&width=1245&height=700&quality=90&coordinates=0%2C31%2C0%2C31",
    tags: ["software", "data science"],
  },
  {
    id: "physics",
    title: "Physics Experiments",
    description: "Quantum, E&M, Mechanics",
    image:
      "https://res.cloudinary.com/duikxb1ch/image/upload/v1737512402/IMG_4759_xxisy1.jpg",
    tags: ["physics", "hardware"],
  },
  {
    id: "frc",
    title: "FRC Robotics",
    description: "PID, Intake, Scouting App Lead",
    image: "/images/projects/frc-2023.jpeg",
    tags: ["engineering", "embedded systems", "software"],
  },
  {
    id: "utat",
    title: "Aerospace Design Team",
    description: "Aircraft design and construction",
    image:
      "https://res.cloudinary.com/duikxb1ch/image/upload/v1737869396/IMG_4767_ujviwp.jpg",
    tags: ["engineering", "hardware", "software", "cad"],
  },
  {
    id: "feynman",
    title: "Feynman",
    description: "Retain what you learn",
    image: "/images/projects/feynman.png",
    tags: ["webdev", "software"],
  },
  {
    id: "x",
    title: "X, The Moonshot Factory",
    description: "Photochromic shirt that changes design",
    image: "/images/projects/x.jpeg",
    tags: ["engineering"],
  },
  {
    id: "civ",
    title: "Bridge Design",
    description: "Designed and built a 1.2m bridge that supports 510N",
    image:
      "https://res.cloudinary.com/duikxb1ch/image/upload/v1737512953/IMG_3646_gyouhh.png",
    tags: ["engineering", "hardware", "software"],
  },
  {
    id: "zephyr",
    title: "AI Agent Video Editor",
    description: "Summarize videos with AI agents",
    image: "/images/projects/zephyr.png",
    tags: ["software", "ai"],
  },
  {
    id: "basemint",
    title: "Hackathon Winner",
    description: "Near powered NFT E-Sports store",
    image: "/images/projects/basemint.png",
    tags: ["webdev", "software"],
  },
  {
    id: "bridge",
    title: "Bridge",
    description: "Create voice commands for any application",
    image: "/images/projects/bridge.jpg",
    tags: ["software", "webdev", "ai"],
  },
  {
    id: "robotics",
    title: "Embedded Devices",
    description: "Compilation of small embedded systems projects",
    image:
      "https://res.cloudinary.com/duikxb1ch/image/upload/v1737512401/IMG_4570_msxeu0.jpg",
    tags: ["engineering", "hardware", "software", "embedded systems", "cad"],
  },
  {
    id: "medical",
    title: "Medical Errors",
    description: "A root cause analysis of medical errors",
    image: "/images/projects/MedicalErrors.png",
    tags: ["deep dives"],
  },
  {
    id: "growthify",
    title: "Growthify",
    description: "Track personal growth and run experiments on yourself",
    image: "/images/projects/Growthify.png",
    tags: ["webdev", "software"],
  },
  {
    id: "bio",
    title: "Biotech",
    description: "CRISPR, Car T cells, Polygenic risk scoring, Alzheimer's",
    image: "/images/projects/polymerase.jpg",
    tags: ["deep dives"],
  },
  {
    id: "praxis",
    title: "Ferry Dock Design ",
    description: "Engineering design to remove ice from the ferry dock",
    image:
      "https://res.cloudinary.com/duikxb1ch/image/upload/v1737512957/IMG_3977_swuxig.png",
    tags: ["engineering"],
  },
  {
    id: "consulting",
    title: "Consulting",
    description: "Helping XPrize get 300+ quality teams",
    image: "/images/projects/xprize.png",
    tags: ["consulting"],
  },
  // Add more projects here
];

function Portfolio() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get unique tags from all projects
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  ).sort();

  // Filter projects based on selected tag
  const filteredProjects = selectedTag
    ? projects.filter((project) => project.tags.includes(selectedTag))
    : projects;

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tighter mb-4">
        what i'm building
      </h1>

      {/* Tags section */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setSelectedTag(null)}
          className={`px-3 py-1 rounded-full text-sm transition-colors ${
            selectedTag === null
              ? "bg-gray-800 text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          all
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              selectedTag === tag
                ? "bg-gray-800 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[2400px] mx-auto">
        {filteredProjects.map((project) => (
          <Link
            href={`/portfolio/${project.id}`}
            key={project.id}
            className="group relative aspect-4/5 overflow-hidden rounded-lg"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-all duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 95vw, (max-width: 1024px) 47vw, 32vw"
              priority
            />
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-60" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-4 text-center">
              <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
              <p className="text-base mb-2">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {!selectedTag ? (
        <div>
          <p className="mt-8 text-xl font-semibold">misc. projects</p>
          <ul className="list-disc ml-5 mt-2">
            <li>
              division in verilog -{" "}
              <a
                href="https://github.com/Adam-Omarali/engsci/blob/main/ECE253/lab5/part3.sv"
                className="text-blue-500"
                target="_blank"
              >
                github
              </a>
            </li>
            <li>
              led counter with button{" "}
              <a
                href="https://github.com/Adam-Omarali/engsci/blob/main/ECE253/lab8/part3.s"
                className="text-blue-500"
                target="_blank"
              >
                I/O polling
              </a>{" "}
            </li>
            <li>
              hex display counter with button interrupts in RISC-V -{" "}
              <a
                href="https://github.com/Adam-Omarali/engsci/blob/main/ECE253/lab9/part2.s"
                className="text-blue-500"
                target="_blank"
              >
                github
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default Portfolio;
