"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useGlitch, GlitchHandle } from "react-powerglitch";

interface Project {
  name: string;
  description: string;
  imageUrl: string;
  techStacks: string[];
  url: string[];
}

const projects: Project[] = [
  {
    name: "Bersama Ashwa",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sapiente voluptatem consectetur debitis reprehenderit nobis minima ipsum eaque atque? Velit aliquam sapiente itaque explicabo deserunt fugit temporibus non quia similique!",
    imageUrl: "/projects/bersamaashwa.png",
    techStacks: [
      "React.js",
      "Javascript",
      "CSS",
      "Express.js",
      "MongoDB",
      "GCP",
    ],
    url: ["https://bersamaashwa.com"],
  },
  {
    name: "Help Pals Therapy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sapiente voluptatem consectetur debitis reprehenderit nobis minima ipsum eaque atque? Velit aliquam sapiente itaque explicabo deserunt fugit temporibus non quia similique!",
    imageUrl: "/projects/helppals.png",
    techStacks: ["Next.js 12", "Javascript", "Tailwind CSS", "MongoDB"],
    url: ["https://helppalstherapy.com"],
  },
  {
    name: "Karangsalam Lor Village",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sapiente voluptatem consectetur debitis reprehenderit nobis minima ipsum eaque atque? Velit aliquam sapiente itaque explicabo deserunt fugit temporibus non quia similique!",
    imageUrl: "/projects/desa.png",
    techStacks: [
      "Next.js 12",
      "Typescript",
      "Tailwind CSS",
      "Prisma",
      "MongoDB",
    ],
    url: ["https://www.wisatakarangsalam.com"],
  },
  {
    name: "SPARTA 2022",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sapiente voluptatem consectetur debitis reprehenderit nobis minima ipsum eaque atque? Velit aliquam sapiente itaque explicabo deserunt fugit temporibus non quia similique!",
    imageUrl: "/projects/sparta.png",
    techStacks: [
      "Next.js 13",
      "Typescript",
      "Tailwind CSS",
      "Prisma",
      "MongoDB",
      "AWS S3",
      "AWS Amplify",
    ],
    url: ["https://www.sparta22hmif.com"],
  },
  {
    name: "Danain",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sapiente voluptatem consectetur debitis reprehenderit nobis minima ipsum eaque atque? Velit aliquam sapiente itaque explicabo deserunt fugit temporibus non quia similique!",
    imageUrl: "/projects/danain.png",
    techStacks: [
      "Next.js 13",
      "Typescript",
      "Tailwind CSS",
      "Prisma",
      "Postgresql",
      "AWS S3",
      "AWS RDS",
      "AWS Amplify",
      "Socket.io",
    ],
    url: ["https://www.danain.site"],
  },
  {
    name: "Klugee",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sapiente voluptatem consectetur debitis reprehenderit nobis minima ipsum eaque atque? Velit aliquam sapiente itaque explicabo deserunt fugit temporibus non quia similique!",
    imageUrl: "/projects/klugee.png",
    techStacks: [
      "Next.js 13",
      "Typescript",
      "Tailwind CSS",
      "Prisma",
      "MongoDB",
      "AWS S3",
      "AWS Amplify",
    ],
    url: ["https://www.klugee.co.id"],
  },
  {
    name: "Ar-Raudah Laundry",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sapiente voluptatem consectetur debitis reprehenderit nobis minima ipsum eaque atque? Velit aliquam sapiente itaque explicabo deserunt fugit temporibus non quia similique!",
    imageUrl: "/projects/arraudah.png",
    techStacks: [
      "Next.js 13",
      "Typescript",
      "Tailwind CSS",
      "Prisma",
      "MongoDB",
      "uploadthing",
      "Vercel",
    ],
    url: ["https://www.arraudah-laundry.store"],
  },
  {
    name: "GIN Hotel and Hoteloka",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sapiente voluptatem consectetur debitis reprehenderit nobis minima ipsum eaque atque? Velit aliquam sapiente itaque explicabo deserunt fugit temporibus non quia similique!",
    imageUrl: "/images/project2.jpg",
    techStacks: [
      "CodeIgniter",
      "PHP",
      "TailwindCSS",
      "Bootstrap",
      "MySQL",
      "Docker",
      "Microsoft Azure",
    ],
    url: [
      "https://hotel-provider-system.azurewebsites.net",
      "https://hotel-system.azurewebsites.net",
    ],
  },
  {
    name: "SEA Cinema",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sapiente voluptatem consectetur debitis reprehenderit nobis minima ipsum eaque atque? Velit aliquam sapiente itaque explicabo deserunt fugit temporibus non quia similique!",
    imageUrl: "/images/project2.jpg",
    techStacks: ["Laravel", "React.js", "PHP", "Javascript", "SQLite"],
    url: ["https://github.com/your-username/project2"],
  },
];

const ProjectSection = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 50,
    });
  }, []);

  return (
    <section className="mt-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-white text-3xl font-extrabold text-center mb-8">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const glitch: GlitchHandle = useGlitch({
    playMode: "hover",
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 250,
      iterations: 1,
    },
    glitchTimeSpan: {
      start: 0,
      end: 1,
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
    <div
      className="bg-gray-900 rounded-lg shadow-md overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={(index + 1) * 200}
    >
      <div className="w-[350px] h-[225px] overflow-hidden group relative">
        <div className="image-container rounded-lg">
          <Image
            src={project.imageUrl}
            alt={project.name}
            className="object-cover"
            width={350}
            height={225}
          />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white mb-2">
          {project.name}
        </h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStacks.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-700 text-white px-2 py-1 rounded-md text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          {project.url.map((url, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition duration-300"
              ref={glitch.ref}
            >
              View Website {project.url.length > 1 ? index + 1 : ""}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
