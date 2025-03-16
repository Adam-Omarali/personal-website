import ParallaxGallery from "../components/ParallaxGallery";

export default function MemoriesPage() {
  return (
    <main className="min-h-screen">
      <h1 className="text-2xl font-semibold highlight-base highlight-nohover highlight-magenta mb-4">
        memories
      </h1>
      <div className="w-full md:w-[150%] mb-50 relative md:right-1/4">
        <ParallaxGallery />
      </div>
      {/* <Gallery /> */}
    </main>
  );
}
