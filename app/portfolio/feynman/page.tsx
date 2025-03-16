import React from "react";

function Feynman() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Feynman: Retain What You Learn
      </h1>
      <iframe
        className="w-full md:w-[560px] aspect-video"
        src="https://www.youtube.com/embed/WqdKqSpYPGA?si=vfXe-5CB8YIG3HWZ"
        title="YouTube video player"
      ></iframe>
      <h1 className="text-2xl font-bold mt-4">Links</h1>
      <ul className="font-sm flex flex-col space-x-0 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0">
        <li>
          <a
            className="flex items-center transition-all hover:text-blue-500"
            rel="noopener noreferrer"
            target="_blank"
            href="https://feynmanmethod.vercel.app"
          >
            <p className="h-7">App</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-blue-500 "
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Adam-Omarali/feynman"
          >
            <p className="h-7">Github</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Feynman;
