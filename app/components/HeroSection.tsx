"use client";
import Image from "next/image";
import { useGlitch, GlitchHandle } from "react-powerglitch";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  const glitch: GlitchHandle = useGlitch({
    playMode: "always",
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 2350,
    },
    glitchTimeSpan: {
      start: 0,
      end: 0.1,
    },
    shake: {
      velocity: 15,
      amplitudeX: 0.2,
      amplitudeY: 0.2,
    },
    slice: {
      count: 6,
      velocity: 15,
      minHeight: 0.02,
      maxHeight: 0.15,
      hueRotate: true,
    },
    pulse: false,
  });

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl mb-4">
            <span className="text-transparent bg-clip-text bg-red-600">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Gibran Fasha Ghazanfar",
                1000,
                "Software Engineer",
                1000,
                "Fullstack Engineer",
                1000,
                "Backend Engineer",
                1000,
                "Frontend Engineer",
                1000,
                "Ex-Pro Valorant",
                1000,
                "Ex-Pro CS:GO/CS2",
                1000,
              ]}
              wrapper="span"
              speed={35}
              repeat={Infinity}
            />
          </h1>
          <p className="text-white text-base sm:text-lg lg:text-xl mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            accusantium ea! Sequi velit alias cupiditate impedit consequuntur
            placeat? Beatae aperiam odit accusantium vel earum mollitia eveniet
            explicabo animi voluptatibus ipsum?
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-16 lg:mt-0">
          <div
            className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative"
            ref={glitch.ref}
          >
            <Image
              src="/images/gijax_samurai.svg"
              alt="Samurai"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
