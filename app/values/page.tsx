import React from "react";

const values = [
  {
    title: "get obsessed about something",
    description:
      "this value encompasses so much. it shows you've found something you genuinely care about. it encourages dedication, focus and following your biggest curiosity. everybody who is extraordinary got obsessed at some point. why? because it trains you to get to the edge of a field and work on long-term problems. people who get obsessed about something are naturally interesting.",
  },
  {
    title: "experiment and seek understanding",
    description:
      "have a hypothesis or a cool demo and try to make it. you'll learn a lot more along the way and have better chances of remembering what you've learned. but don't treat projects like checkboxes. take the time to understand why things work the way they do because it's compounding.",
  },
  {
    title: "humble self-belief",
    description:
      "hold with conviction that you can do anything you set your mind to. when you say you're going to do something, you actually do it. but don't brag about what you're capable of. the only person self-belief matters for is yourself.",
  },
  {
    title: "seek discomfort",
    description:
      "live for the butterflies, the clenching teeth, the every so often illogical thought. to become more than who you are now, you have to do things you've never done. failure is inevitable.",
  },
  {
    title: "create what is missing",
    description:
      "when you see a gap in the world, a right to be wrong, a pain, you activate the change. you can bend the world to your will.",
  },
  {
    title: "make magic",
    description:
      "push the boundaries. you're an extraordinary person meant to do extraordinary things. don't shoot down ideas. you can make magic.",
  },
  {
    title: "be present",
    description:
      "enjoy what is in front of you. to be present, you have to do things you genuinely want to do. practice like its a game because if you don't try to be the best, you won't even be great.",
  },
  {
    title: "change your eye-level",
    description:
      "just when you think you know something, seek another perspective. form beliefs and share them with people you value. perspective is the most powerful way to expand what you're mind thinks is reality.",
  },
  {
    title: "do more with less",
    description:
      "all you need is duct-tape and bubble gum. prototype the most unbelievable part of your idea in the simplest way. find the beauty in the little things.",
  },
];

const colors = ["blue", "yellow", "magenta"];

function Values() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 highlight-base highlight-blue">
        values
      </h1>
      <div className="space-y-8">
        {values.map((value, index) => (
          <div key={value.title} className="group">
            <h2
              className={`text-xl font-semibold mb-2 highlight-base highlight-${
                colors[index % colors.length]
              } highlight-hover`}
            >
              {value.title}
            </h2>
            <p className="text-neutral-700">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Values;
