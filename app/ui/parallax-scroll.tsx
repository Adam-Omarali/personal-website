"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export interface ParallaxProps {
  images: Array<{
    src: string;
    title?: string;
    description?: string;
  }>;
}

export function ParallaxScroll({ images }: ParallaxProps) {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const columns = [
    images.slice(0, Math.ceil(images.length / 3)),
    images.slice(
      Math.ceil(images.length / 3),
      Math.ceil((2 * images.length) / 3)
    ),
    images.slice(Math.ceil((2 * images.length) / 3)),
  ];

  return (
    <section className="relative w-full" ref={gridRef}>
      <div className="max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map((column, i) => (
            <motion.div
              key={i}
              style={{
                y:
                  i === 0
                    ? translateFirst
                    : i === 1
                    ? translateSecond
                    : translateThird,
              }}
              className="flex flex-col gap-6"
            >
              {column.map((image, j) => (
                <div
                  key={j}
                  className="relative h-[400px] group overflow-hidden rounded-xl"
                >
                  <Image
                    src={image.src}
                    alt={image.title || "Gallery image"}
                    fill
                    className="object-cover transition-all duration-500 group-hover:brightness-65"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={j < 6}
                  />
                  {(image.title || image.description) && (
                    <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center p-6 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      {image.title && (
                        <h3 className="text-xl font-semibold mb-3 text-center">
                          {image.title}
                        </h3>
                      )}
                      {image.description && (
                        <p className="text-sm text-gray-100 text-center leading-relaxed max-w-prose">
                          {image.description}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
      {/* Responsive spacer div */}
      {/* <div className="h-16 md:h-[100px]" /> */}
    </section>
  );
}
