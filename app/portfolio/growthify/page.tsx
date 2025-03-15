import React from "react";

function Growthify() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Growthify: Track Personal Growth
      </h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/C21eqBE0Wg8?si=ZvlBGD4YblTeDwRl"
        title="YouTube video player"
      ></iframe>
      <h1 className="text-2xl font-bold mt-4">Links</h1>
      <ul className="font-sm flex flex-col space-x-0 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0">
        <li>
          <a
            className="flex items-center transition-all hover:text-blue-500"
            rel="noopener noreferrer"
            target="_blank"
            href="https://growthify.fly.dev/home/"
          >
            <p className="h-7">Landing Page</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-blue-500"
            rel="noopener noreferrer"
            target="_blank"
            href="https://growthify.fly.dev/app"
          >
            <p className="h-7">App</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-blue-500 "
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/marsxiang5902/habit_tracker"
          >
            <p className="h-7">Github</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Growthify;
