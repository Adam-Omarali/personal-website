import { BlogPosts } from "app/components/posts";
import Link from "next/link";
import BeverageBubbles from "app/components/BeverageBubbles";

const images = [
  "https://res.cloudinary.com/duikxb1ch/image/upload/v1742079735/DSC01205_3_e7vsa2.jpg",
  "https://res.cloudinary.com/duikxb1ch/image/upload/v1737511289/bracket_ppgbqw.jpg",
  "https://res.cloudinary.com/duikxb1ch/image/upload/v1737512402/IMG_4759_xxisy1.jpg",
  "https://res.cloudinary.com/duikxb1ch/image/upload/v1737512400/IMG_4401_oiz2cp.jpg",
];

export default function Page() {
  return (
    <section>
      <h1 className="text-2xl font-semibold tracking-tighter mb-4 highlight-base highlight-nohover highlight-magenta">
        hey i'm adam omarali
      </h1>
      <p className="mb-4">
        i'm currently studying{" "}
        <a
          className="underline hover:text-(--link-hover) transition-colors"
          href="https://engineering.calendar.utoronto.ca/section/Engineering-Science"
        >
          engineering science
        </a>{" "}
        at uoft because i like understanding things from first principles. i
        crave the feeling of creating something out of nothing. you can read
        about my engineering process{" "}
        <a
          href="https://adamsengineeringhandbook.vercel.app"
          className="underline"
          target="_blank"
        >
          here
        </a>
        .
      </p>
      <p className="mb-4">
        i like to write code, build embedded devices, do physics experiments,
        produce music, and{" "}
        <a
          href="https://open.spotify.com/show/23f5eTJKWR8DEgBb9tYxf8?si=4d632a1a85314e72"
          className="underline"
        >
          philosophize.
        </a>
      </p>
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-row gap-4 overflow-x-auto">
          {images.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`${index + 1}`}
              className="object-cover w-32 h-32"
            />
          ))}
        </div>
      </div>
      <p className="mb-4">
        {`i just wanna say that websites are really hard. 100% of your perception of me will be based on a site i took a fraction of my life to make but here it goes 😀.`}
      </p>

      <section>
        <h1 className="text-2xl font-semibold tracking-tighter mb-4 highlight-base highlight-nohover highlight-blue">
          what i'm up to
        </h1>
        <ul>
          <li>
            <p className="mb-4">
              <Link href="/portfolio/bracket" className="underline">
                bracket bot
              </Link>{" "}
              - i write code to move a 5ft pole attatched to a sageway. it can
              talk like tars, bump around, and be controlled with a joystick.
            </p>
          </li>
          <li>
            <p className="mb-4">
              <Link href="/portfolio/meraki" className="underline">
                meraki
              </Link>{" "}
              - i host weekly meetups for creatives and hackers to build what
              they're most passionate about. we're a toronto socratica node and
              i co-host with{" "}
              <a
                href="https://www.linkedin.com/in/minhanhdongnguyen/"
                className="underline"
              >
                anh
              </a>
              .
            </p>
          </li>
          <li>
            <p className="mb-4">
              <Link href="/portfolio/utat" className="underline">
                uoft aerospace team
              </Link>{" "}
              - i work on flight dynamics for a model aircraft performing
              dynamic stability simulations, cad for elevator design and
              prototyping structures to test flight controls.
            </p>
          </li>
        </ul>
      </section>

      <section>
        <h1 className="text-2xl font-semibold tracking-tighter mb-4 highlight-base highlight-nohover highlight-yellow">
          previously
        </h1>
        <ul>
          <li>
            <p className="mb-4">
              <Link href="/portfolio/iris" className="underline">
                iris
              </Link>{" "}
              - i spent a summer in miami at an amazing startup fellowship
              called{" "}
              <a href="https://telora.com" className="underline">
                telora
              </a>
              . i crashed weddings, wrote handwritten letters and cold
              approached studios to talk to 300+ users and find promising
              problems.
            </p>
          </li>
          <li>
            <p className="mb-4">
              <Link href="/portfolio/feynman" className="underline">
                feynman
              </Link>{" "}
              - i built an app to help me teach my future self. it's a custom
              vault of resources that makes relearning a topic easiar.{" "}
              <a href="https://feynmanmethod.vercel.app" className="underline">
                use it.
              </a>
            </p>
          </li>
          <li>
            <p className="mb-4">
              <Link href="/portfolio/google" className="underline">
                google x
              </Link>{" "}
              - i was selected for a summer fellowship where i used 10x thinking
              to design a single-textile that uses photochromic dye to change
              design.
            </p>
          </li>
          <li>
            <p className="mb-4">
              hackathons - i've done 15+ hackathons. they're a blast.
            </p>
          </li>
          <li>
            <p className="mb-4">
              made an{" "}
              <a
                href="https://open.spotify.com/artist/3K49G6Qf78adI7KG77Wr5i?si=64l-2L5YT9aD3G6OIIIRUg"
                className="underline"
              >
                album
              </a>
            </p>
          </li>
        </ul>
        <iframe
          width="500"
          height="281"
          src="https://www.youtube.com/embed/kA20y0fKgFQ"
          title="What I&#39;ve Been Building"
        ></iframe>
      </section>
    </section>
  );
}
