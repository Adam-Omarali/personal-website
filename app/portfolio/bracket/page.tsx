function Page() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Bracket Bot</h1>
      <div className="flex flex-col gap-4 mt-4">
        <p>
          Hooked the robot up to GPT-4 + function calling, eleven labs, and
          whisper to perform actions given voice commands. Used multithreading
          to execute physical commands while running inference or waiting for
          user input on a seperate thread.
        </p>
        <iframe
          className="w-full md:w-[426px] aspect-[9/16]"
          src="https://www.youtube.com/embed/6J1issVvxiQ"
          title="bracket bot imitates tars and bumps around"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
        <p>
          Attatched arms to the robot designed and controlled by{" "}
          <a href="https://kyumlee.com/" className="underline" target="_blank">
            Kyum Lee
          </a>
          . Used roboflow to fine-tune Yolov8 to recognize open vs closed
          elevator doors and navigate towards them.
        </p>
        <iframe
          className="w-full md:w-[426px] aspect-[9/16]"
          src="https://www.youtube.com/embed/bSC1gGKfigg"
          title="delivery robot picks up amazon package"
        />
        <p>
          Continued working on autonomous navigation using Yolov8. Wrote a
          simple homing script to continiously move towards a bottle. Also added
          a webfeed to display images from the camera in realtime.
        </p>
        <iframe
          className="w-full md:w-[500px] aspect-video"
          src="https://www.youtube.com/embed/7KDEcsefSfo"
          title="bracket bot is attracted to a water bottle"
        />
      </div>
    </div>
  );
}

export default Page;
