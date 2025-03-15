"use client";

import { memories } from "../data/memories";
import { ParallaxScroll } from "../ui/parallax-scroll";

export default function ParallaxGallery() {
  // Transform memories data to match ParallaxScroll props format
  const parallaxImages = memories.map((memory) => ({
    src: memory.image,
    title: memory.name,
    description: memory.description,
  }));

  return <ParallaxScroll images={parallaxImages} />;
}
