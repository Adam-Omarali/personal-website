import React from "react";

function Medical() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        World's Biggest Problem Research: Medical Errors
      </h1>
      <p className="mb-4">
        I spent 7 months trying to understand why ~200,000 people in the US
        alone are medically harmed due to mistakes. I talked to doctors,
        patients, safety experts, and performed root cause analysis to identify
        how the problem can be solved. I learned how to methodically understand
        a complex ambigious problem.
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/gKWGUSIbW2E?si=tXEfU0I-ohvbCz6u"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="mt-4"></div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ZgUzGw79DuI?si=R3-dUh3kbSHUHt4Z"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <div className="mt-4"></div>
      <iframe
        src="https://adam-omarali.notion.site/ebd/216cfac56be249239342a3178526e22d?v=22d561751f0b449596d5d4af87cb28a7"
        width="100%"
        height="600"
      />
    </div>
  );
}

export default Medical;
