import React from "react";

function BDC() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        How City Design Affects Demographics and Educational Performance
      </h1>
      <p className="mb-4">
        Used Maps based APIs and ArcGIS to fetch proximity to ammenities and
        demographic data for a given address. Cleaned and analyzed the data used
        pandas, numpy and matplotlib. Wrote a statistical analysis of the data
        in a paper.
      </p>
      <iframe
        className="w-full md:w-[560px] aspect-video"
        src="https://www.youtube.com/embed/SSu8a05wwQI?si=xYpfQqPxLbvpbnwy"
        title="YouTube video player"
      ></iframe>
      <h1 className="text-2xl font-bold mt-4">
        <a
          href="https://drive.google.com/file/d/1W6KpbaKJIoUmjZyF8LJMpAjRyxWwZtlT/view?usp=sharing"
          target="_blank"
          className="text-blue-500 underline"
        >
          Paper
        </a>
      </h1>
    </div>
  );
}

export default BDC;
