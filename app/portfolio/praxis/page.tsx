import Image from "next/image";
import React from "react";

function Praxis() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Praxis: Engineering Design for Dock Ice Build Up
      </h1>
      <p className="mb-4">
        For ESC102, as a team of 4 we had to find a community, talk to them and
        discover potential opportunities, select an opportunity, create an{" "}
        <a
          href="https://drive.google.com/file/d/1IaKK4DyvbA0tPd5nHur8prATlTbXUFeb/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600"
        >
          RFP
        </a>
        , and then ideate a solution. The main purpose of this project is to
        frame a valid opportunity accurately using engineering requirements. By
        looking at reference designs and research, we identified what traits the
        ideal solution has, and specified them through requirements. We used a
        variety of converging and diverging tools to evaluate many designs.
      </p>
      <p className="mb-4">
        This involved scaling down the dock and our prototypes. The video below
        shows a water pump prototype for pushing ice out of the docking area.
      </p>
      <iframe
        src="https://drive.google.com/file/d/1sCz5BFKWJF62-AlYK0Rbtr1QYrUWGwm2/preview"
        width="300"
        height="400"
      ></iframe>
      <p className="my-4">
        A lot of tools I used are documented in my{" "}
        <a
          href="https://adamsengineeringhandbook.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600"
        >
          engineering handbook
        </a>
      </p>
      <h1 className="text-xl font-bold mb-4">One Pager</h1>

      <Image
        src="/images/projects/praxis-1.png"
        alt="Praxis"
        width={500}
        height={500}
      />
      <Image
        src="/images/projects/praxis-2.png"
        alt="Praxis"
        width={500}
        height={500}
      />
    </div>
  );
}

export default Praxis;
