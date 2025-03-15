"use client";

import { memories } from "../data/memories";
import Image from "next/image";
import { useState } from "react";

export default function Gallery() {
  const [hoveredMemory, setHoveredMemory] = useState<number | null>(null);

  // Function to determine height class
  const getHeightClass = (id: number) => {
    // Vary the heights for different images
    if ([2, 7, 15, 20].includes(id)) {
      return "h-[500px]"; // Taller images
    } else if ([4, 10, 18, 23].includes(id)) {
      return "h-[350px]"; // Shorter images
    }
    return "h-[400px]"; // Default height
  };

  return (
    <div className="relative max-w-7xl">
      {/* Gallery grid */}
      <div className="columns-1 md:columns-2 gap-6">
        {memories.map((memory) => (
          <div
            key={memory.id}
            className={`break-inside-avoid mb-6 cursor-pointer relative group ${getHeightClass(
              memory.id
            )}`}
            onMouseEnter={() => setHoveredMemory(memory.id)}
            onMouseLeave={() => setHoveredMemory(null)}
          >
            <div className="w-full h-full relative rounded-xl overflow-hidden">
              <Image
                src={memory.image}
                alt={memory.name}
                fill
                className="object-cover transition-all duration-500"
                sizes="(max-width: 768px) 90vw, 45vw"
              />
              {/* Text overlay on image */}
              <div
                className={`absolute inset-0 bg-black/60 flex flex-col justify-center items-center p-6 text-white transition-all duration-500 ${
                  hoveredMemory === memory.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <h3 className="text-xl font-semibold mb-3 text-center">
                  {memory.name}
                </h3>
                <p className="text-sm text-gray-100 text-center leading-relaxed max-w-prose">
                  {memory.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
