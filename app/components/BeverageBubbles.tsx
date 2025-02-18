"use client";
import React from "react";
import { Memory, memories } from "../data/memories";

const BeverageBubbles: React.FC = () => {
  const [activeId, setActiveId] = React.useState<number | null>(null);
  const activeMemory = memories.find((m) => m.id === activeId);

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-semibold tracking-tighter highlight-base highlight-blue">
        memories
      </h1>
      <div className="relative flex items-center w-full">
        <div className="flex flex-wrap gap-5 p-5 justify-center mx-auto">
          {memories.map((memory) => (
            <div
              key={memory.id}
              className="relative"
              onMouseEnter={() => setActiveId(memory.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              <div
                className={`w-20 h-20 rounded-full overflow-hidden shadow-md 
                          transition-all duration-300 ease-in-out 
                          hover:scale-250 cursor-pointer relative
                          ${activeId === memory.id ? "z-10" : "z-0"}`}
                style={{
                  transformOrigin: "center center",
                }}
              >
                <img
                  src={memory.image}
                  alt={memory.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute left-[calc(50%+300px)] w-64 pointer-events-none">
          {activeMemory && (
            <div className="transition-all duration-300 opacity-100">
              <h3 className="font-medium mb-1">{activeMemory.name}</h3>
              <p className="text-sm text-gray-600">
                {activeMemory.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BeverageBubbles;
