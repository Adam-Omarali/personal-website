import React from "react";

function FRC() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">FRC</h1>
      <p className="mb-4">
        Led a team of 10+ students to build a scouting app to track 100+ robots
        across 300+ matches and present data in a dashboard using NextJS and
        Neo4J. Deployed using Digital Ocean.
      </p>
      <p className="mb-4">
        Wrote code to make quick and accurate 90 degree turns using a gyro PID
        controller. Used finite state machines to create an autonomous intake
        system.
      </p>
      <iframe
        className="w-full md:w-[560px] aspect-video"
        src="https://www.youtube.com/embed/CSu-fwy-tuE"
        title="FRC"
      ></iframe>
    </div>
  );
}

export default FRC;
