import React from "react";

function Bridge() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Bridge - Voice Commands for Any Application
      </h1>
      <iframe
        className="w-full md:w-[560px] aspect-video"
        src="https://www.youtube.com/embed/-WAq_vkbNWE?si=wrYfuZyVmcxdP2LE"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <ul className="font-sm flex flex-col space-x-0 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 mt-4">
        <li>
          <a
            className="flex items-center transition-all hover:text-blue-500 "
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Adam-Omarali/bridge"
          >
            <p className="h-7">Github</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Bridge;
