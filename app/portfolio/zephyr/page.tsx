import React from "react";

function Zephyr() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        AI Agent Video Editor - Hackathon Finalist
      </h1>
      <iframe
        className="w-full md:w-[560px] aspect-video"
        src="https://www.youtube.com/embed/jTQoXdVIk5M?si=dh-lsYm8ELNVwjUO"
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
            href="https://github.com/agent-zephyr/zephyr-bot"
          >
            <p className="h-7">Github</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Zephyr;
