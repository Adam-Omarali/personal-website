import Image from "next/image";
import React from "react";

function Civ() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Civil Engineering: Bridge Design
      </h1>
      <p className="mb-4">
        As a final project for{" "}
        <a
          href="https://engineering.calendar.utoronto.ca/course/civ102h1"
          target="_blank"
          className="underline hover:text-blue-500"
        >
          CIV102
        </a>
        , I designed a 1.2m long bridge out of matboard.
      </p>
      <p className="mb-4">Our bridge is the first yellow one!</p>
      <iframe
        className="w-full md:w-[560px] aspect-video"
        src="https://www.youtube.com/embed/PQ8FPqUQtPY?si=c0zbLPSwvDju8utS"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <p className="my-4">
        To iterate on our design, it was necessary to simulate the bridge
        performance given different loading conditions and solve for the stress
        at each point along the bridge for each train position.
      </p>
      <Image
        src="/images/projects/bridge-diagrams.png"
        alt="Bridge Iteration 9"
        width={700}
        height={500}
      />
      <p className="mb-4">
        I wrote a{" "}
        <a
          href="https://github.com/Adam-Omarali/engsci/blob/main/CIV102/Iterations/Bridge_Iteration_9/Bridge_9.mlx"
          target="_blank"
          className="underline hover:text-blue-500"
        >
          script in MATLAB
        </a>{" "}
        to solve for the failure loads of each bridge given the material
        properties, geometry, and the given SFD and BMDs. This allowed us to
        identify the failure mode and make design changes according to the
        relevant equations. For example, adding more layers of matboard on the
        top reduced the bending stress.
      </p>
      <Image
        src="/images/projects/bridge-loads.png"
        alt="Bridge Stress"
        width={700}
        height={500}
      />
      <p className="mt-4">
        You can read about our design decisions in our{" "}
        <a
          href="https://drive.google.com/file/d/17LacvE3RpzSEQuh4-g_zdd4hGXHFX9sx/view?usp=sharing"
          className="underline hover:text-blue-500"
          target="_blank"
        >
          report
        </a>
        .
      </p>
    </div>
  );
}

export default Civ;
