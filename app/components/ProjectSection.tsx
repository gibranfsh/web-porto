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
  url: string;
}

const projects: Project[] = [
  {
    name: "EpidemIT",
    description:
      "An inclusive IT education platform, integrated AI for enhanced learning and helps people with disabilities, provided financial support, utilized gamification for engagement, advanced global social and economic inclusion (SDGs 4, 8, and 10).",
    imageUrl: "/projects/epidemit.png",
    techStacks: [
      "Go",
      "GoFiber",
      "GORM",
      "CockroachDB",
      "PostgreSQL",
      "DatoCMS",
      "Next.js 13.5.6",
      "Typescript",
      "Tailwind CSS",
      "Flask",
      "Python",
      "Sci-kit Learn",
      "Tensorflow",
      "AWS",
      "GCP",
      "Docker",
    ],
    url: "https://main.d1iex298jj9b2k.amplifyapp.com",
  },
  {
    name: "Danain",
    description:
      "Danain is a web platform connecting investors with startup companies. We firmly believe that innovation deserves adequate funding, and we are committed to facilitating its journey.",
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
    url: "https://www.danain.site",
  },
  {
    name: "SPARTA 2022",
    description:
      "A digital platform tailored for the orientation activities of a student organization's recruitment of new members, accommodating over 400 users. It provides functionalities including assignment and material specifications, along with a daily journal feature.",
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
    url: "https://www.sparta22hmif.com",
  },
  {
    name: "Karangsalam Lor Village",
    description:
      "Wisata Karangsalam Lor is a platform dedicated to providing information about the Karangsalam Lor Village, offering insights into its attractions and features. Additionally, it facilitates homestay bookings and enhances visitors' understanding of the village's culture and lifestyle.",
    imageUrl: "/projects/desa.png",
    techStacks: [
      "Next.js 12",
      "Typescript",
      "Tailwind CSS",
      "Prisma",
      "MongoDB",
    ],
    url: "https://www.wisatakarangsalam.com",
  },
  {
    name: "Help Pals Therapy",
    description:
      "Help Pals Therapy is a platform designed to assist individuals in managing their mental well-being by monitoring daily emotions. Additionally, it offers the capability to evaluate mental health status and provide recommendations for enhancing overall mental wellness.",
    imageUrl: "/projects/helppals.png",
    techStacks: ["Next.js 12", "Javascript", "Tailwind CSS", "MongoDB"],
    url: "https://helppalstherapy.com",
  },
  {
    name: "Bersama Ashwa",
    description:
      "A Mental Health Service, meticulously designed to facilitate a deeper understanding of oneself. Through the quiz-based testing system, individuals can gain invaluable insights into various aspects of their mental well-being.",
    imageUrl: "/projects/bersamaashwa.png",
    techStacks: [
      "React.js",
      "Javascript",
      "CSS",
      "Express.js",
      "MongoDB",
      "GCP",
    ],
    url: "https://bersamaashwa.com",
  },
  {
    name: "Ar-Raudah Laundry",
    description:
      "Ar-Raudah Laundry is an integrated website designed to streamline the process of ordering, monitoring, and paying for laundry services through conventional laundry outlets.",
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
    url: "https://www.arraudah-laundry.store",
  },
  {
    name: "Hoteloka",
    description:
      "A hotel provider system (like Traveloka, but for hotel) that allows hotel owners to manage their hotel, room, and booking data. Document Link : https://bit.ly/3OU1tae",
    imageUrl: "/projects/hoteloka.jpg",
    techStacks: [
      "CodeIgniter",
      "PHP",
      "TailwindCSS",
      "Bootstrap",
      "MySQL",
      "Docker",
      "Microsoft Azure",
    ],
    url: "https://hotel-provider-system.azurewebsites.net",
  },
  {
    name: "GIN Hotel",
    description:
      "A hotel system for managing hotel bookings, room availability, and customer data. This system is designed to be user-friendly and easy to use. Document Link : https://bit.ly/3OU1tae",
    imageUrl: "/projects/ginhotel.jpg",
    techStacks: [
      "CodeIgniter",
      "PHP",
      "TailwindCSS",
      "Bootstrap",
      "MySQL",
      "Docker",
      "Microsoft Azure",
    ],
    url: "https://hotel-provider-system.azurewebsites.net",
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
    <section className="mt-12 px-4 sm:px-6 lg:px-8" id="projects">
      <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-8">
        My <span className="text-red-600">Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
      className="bg-gray-900 rounded-lg shadow-md overflow-hidden w-full flex flex-col"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={(index + 1) * 100}
    >
      <div className=" h-[225px] overflow-hidden">
        <div className="image-container rounded-lg relative overflow-hidden w-full h-full">
          <Image
            src={project.imageUrl}
            alt={project.name}
            fill={true}
            className="w-full h-full object-cover object-top hover:object-bottom transition-all duration-1000"
          />
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col items-start">
        <h3 className="text-xl font-semibold text-white mb-2">
          {project.name}
        </h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-auto">
          {project.techStacks.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-700 text-white px-2 py-1 rounded-md text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          key={index}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition duration-300"
          ref={glitch.ref}
        >
          View Website
        </a>
      </div>
    </div>
  );
};

export default ProjectSection;
