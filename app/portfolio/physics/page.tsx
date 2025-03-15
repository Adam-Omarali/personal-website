import { ArrowIcon } from "app/components/footer";
import Image from "next/image";
import React from "react";

function Physics() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4">
        Pendulum Experiment:{"  "}
        <a
          href="https://github.com/Adam-Omarali/engsci/blob/main/PHY180/Pendulum/Report_3.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          Paper
        </a>
      </h1>
      <p className="mb-4">
        First year physics lab was my first introduction to rigorous
        experimentation. I learned how to minimize uncertainty in experimental
        setups, perform elementary error and uncertainty analysis, and create
        best fit functions for experimental data.
      </p>
      <div className="flex flex-row gap-4 justify-center">
        <Image
          src="/images/projects/pendulum-graph.png"
          alt="Pendulum"
          width={400}
          height={200}
        />
      </div>
      <div className="flex flex-row gap-4">
        <Image
          src="/images/projects/pendulum-v1.png"
          alt="Pendulum"
          width={400}
          height={200}
        />
        <Image
          src="/images/projects/pendulum-v2.png"
          alt="Pendulum"
          width={500}
          height={200}
        />
      </div>
      <p className="my-4">
        On the left is the initial pendulum setup created. Using only one string
        allows for movement in and out of the camera frame, leading to energy
        loses which effects the period of the pendulum. On the right is the
        second setup, where the pendulum is held by two strings, ensuring
        movement only occurs along two axes.
      </p>

      <h1 className="text-xl font-bold mb-4">
        Canadian Young Physicist Tournament
      </h1>
      <p className="mb-4">
        I participated in CaYPT in 2023, where I was in charge of designing
        experiments to observe two phenomenons and presenting the relevant
        theory. Our team received a bronze medal.
      </p>
      <h1 className="font-bold mb-4">Oscillating Sphere</h1>
      <p className="mb-4">
        Described how a magnetic field affects the motion of an oscillating
        conducting sphere rotating about its z-axis. Key physics involved the
        damped harmonic oscillator to describe the motion of the oscillating
        sphere on its own. Introducing a magnetic field in the presence of a
        conductor induces eddy currents by Faraday's law. Lenz's law states
        these moving currents induce a magnetic field that opposes the motion of
        the sphere, leading to magnetic braking by converting kinetic to thermal
        energy.
      </p>
      <p className="mb-4">
        This experiment taught me how to design experiments that enable data
        collection. For example, I placed a black dot on the rotating sphere and
        used tracker software to measure its angular position. I also had to
        learn new branches of physics alone.
      </p>
      <Image
        src="/images/projects/sphere_setup.png"
        alt="Oscillating Sphere"
        width={400}
        height={200}
      />
      <Image
        src="/images/projects/sphere_graph.png"
        alt="Oscillating Sphere"
        width={500}
        height={300}
      />
      <h1 className="font-bold my-4">Euler's Pendulum</h1>
      <p className="mb-4">
        Described how a tower of neodymium magnets rotates when spun about its
        z-axis. This experiment involved identifying relevant variables to
        adjust (magnetic strength, initial velocity of pendulum, height of
        release, distance between top magnet and magnetic tower). I also used
        Euler's method to solve the second order ODE given by Newton's second
        law.
      </p>
      <iframe
        src="https://drive.google.com/file/d/1etq6ZHfuYE9h476Wpv-QDyJ5wQLz3rka/preview?t=27s"
        width="640"
        height="480"
        allow="autoplay"
      ></iframe>
      <h1 className="text-xl font-bold my-4">
        Pulses in Cables:{"   "}
        <a
          href="https://github.com/Adam-Omarali/engsci/blob/main/PHY293/Pulses_in_Cables/Pulses_AdamO_ErikK.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          Paper
        </a>
      </h1>
      <p className="mb-4">
        Investigated how pulses travelling through a transmission line can be
        modeled as a wave. Finding a characteristic impedence to minimize wave
        reflection, the pulse velocity, and attenuation factor of a cable were
        the main objectives.
      </p>
      <p className="mb-4">
        This experiment developed my ability to analyze fits with goodness of
        fit parameters, uncertainty propogation formula, and systematically
        identify sources of error.
      </p>
      <img
        src="https://github.com/Adam-Omarali/engsci/blob/main/PHY293/Pulses_in_Cables/img/ideal_line.png?raw=true"
        alt="Ideal Line"
        width={1000}
        height={200}
      />

      <h1 className="text-xl font-bold my-4">
        Electron Spin Resonance:{"   "}
        <a
          href="https://github.com/Adam-Omarali/engsci/blob/main/PHY294/ESR/Electron%20Spin%20Resonance%20Adam%20Omarali.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          Paper
        </a>
      </h1>
      <p className="mb-4">
        We know electrons can have two quantized spin states. What is the energy
        difference between these states? To find this energy difference, we must
        excite the electron with a specific amount of energy.
      </p>
      <p className="mb-4">
        This experiment involved generating a magnetic field using helmholtz
        coils, and using an RF coil containing some sample to excite. The RF
        coil generates a perpendicular magnetic field, and has energy
        proportional to its frequency. By adjusting the frequency or strength of
        the magnetic field, we can cause an electron to absorb energy.
      </p>
      <img
        src="https://res.cloudinary.com/duikxb1ch/image/upload/v1737512402/IMG_4759_xxisy1.jpg"
        alt="ESR Setup"
        width={1000}
        height={200}
      />
    </div>
  );
}

export default Physics;
