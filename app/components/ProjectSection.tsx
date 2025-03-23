"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useGlitch, GlitchHandle } from "react-powerglitch";
import { 
  ArrowTopRightOnSquareIcon, 
  FolderIcon, 
  StarIcon 
} from "@heroicons/react/24/outline";

interface Project {
  name: string;
  description: string;
  imageUrl: string;
  techStacks: string[];
  url: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    name: "ICEE 2025 Main Website",
    description:
      "The ITB Civil Engineering Expo (ICEE) is an annual event organized by the Civil Engineering Student Association (HMS) of ITB. It provides a platform for collaboration, innovation, and creativity among students, focusing on civil engineering challenges through competitions and conferences. My Contributions: • Developed the ICEE 2025 website as a Fullstack Engineer. • Created sections for Basic Information, Competitions, Events, Past Events, Sponsors, and Media Partners on the landing page. • Handled file uploading during the registration process using Google Cloud Platform, specifically the Google Spreadsheet API and Google Drive API. • Implemented Contentful CMS to upload Sponsors and Media Partners images. • Deployed the website using Vercel.",
    imageUrl: "/projects/iceeitbfullpage.png",
    techStacks: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Google Cloud Platform",
      "Google Drive API",
      "Google Spreadsheet API",
      "Contentful CMS",
      "Vercel",
      "Figma"
    ],
    url: "https://www.iceeitb.co",
  },
  {
    name: "PT Persada Dua Rajawali Subsidiaries Websites",
    description:
      "Developing and managing websites for six subsidiaries under PT Persada Dua Rajawali, each tailored to specific business needs. These websites aim to enhance user experience, streamline operations, and improve digital engagement for diverse audiences.",
    imageUrl: "/projects/bungarampai.png",
    techStacks: [
      "Next.js",
      "TypeScript",
      "Strapi CMS",
      "RESTful API",
      "Database Design",
      "ERD",
      "Logging Systems",
      "API Testing"
    ],
    url: "https://bungarampai.restaurant",
  },
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
    name: "Klugee",
    description:
      "A comprehensive English language learning platform tailored specifically for children. This encompassed the creation of promotional materials as well as the administrative and course-related (Computer-Based Training) websites for the company.",
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
    url: "https://www.klugee.co.id",
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

  // Show all projects without filtering
  const filteredProjects = projects;

  // Keep featured projects logic
  const featuredProjects = filteredProjects.filter(project => project.featured);
  const regularProjects = filteredProjects.filter(project => !project.featured);

  return (
    <section className="mt-24 px-4 sm:px-6 lg:px-8" id="projects">
      <div className="text-center relative mb-16" data-aos="fade-up">
        <div className="inline-block">
          <span className="text-sm text-gray-400 uppercase tracking-widest font-medium block mb-2">Selected Work</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold relative inline-block">
            <span className="absolute -left-8 top-1/2 transform -translate-y-1/2 text-5xl lg:text-6xl text-red-600/20">{`{`}</span>
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">Projects</span>
            <span className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-5xl lg:text-6xl text-red-600/20">{`}`}</span>
          </h2>
          <div className="flex justify-center mt-4">
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
          </div>
        </div>
      </div>
      
      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <div className="mb-12">
          <h3 className="text-white text-2xl font-bold mb-6 flex items-center" data-aos="fade-up">
            <StarIcon className="h-5 w-5 text-yellow-500 mr-2" />
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <FeaturedProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      )}
      
      {/* Regular Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {regularProjects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

const FeaturedProjectCard = ({ 
  project, 
  index 
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
      className="group relative bg-gray-900 rounded-xl overflow-hidden shadow-xl h-[500px] transition-all duration-500 border border-gray-800 hover:border-red-600/40"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={(index + 1) * 100}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90 opacity-70 group-hover:opacity-90 transition-opacity duration-500 z-10"></div>
      
      <div className="relative h-full w-full overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.name}
          fill
          className="object-cover object-top group-hover:object-bottom group-hover:scale-110"
          style={{ 
            transition: "all 2s ease-in-out" 
          }}
          priority
        />
      </div>
      
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
        <p className="text-gray-300 mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStacks.slice(0, 6).map((tech, i) => (
            <span
              key={i}
              className="bg-red-900/60 backdrop-blur-sm text-white px-2 py-1 rounded-md text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.techStacks.length > 6 && (
            <span className="bg-gray-800/80 text-white px-2 py-1 rounded-md text-xs">
              +{project.techStacks.length - 6} more
            </span>
          )}
        </div>
        
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition duration-300 w-fit"
          ref={glitch.ref}
        >
          View Project
          <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
        </a>
      </div>
    </div>
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
      amplitudeX: 2,
      amplitudeY: 2,
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
      className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-2 hover:shadow-red-600/20 border border-gray-800 hover:border-red-600/30"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={(index % 4 + 1) * 100}
    >
      <div className="h-[225px] overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity z-10"></div>
        <Image
          src={project.imageUrl}
          alt={project.name}
          fill={true}
          className="w-full h-full object-cover object-top group-hover:object-bottom group-hover:scale-110"
          style={{ 
            transition: "all 2s ease-in-out" 
          }}
        />
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-2 flex items-center">
          <FolderIcon className="h-5 w-5 text-red-500 mr-2" />
          {project.name}
        </h3>
        
        <p className="text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-auto">
          {project.techStacks.slice(0, 5).map((tech, i) => (
            <span
              key={i}
              className="bg-gray-800 text-gray-300 px-2 py-1 rounded-md text-xs"
            >
              {tech}
            </span>
          ))}
          {project.techStacks.length > 5 && (
            <span className="bg-gray-800 text-gray-400 px-2 py-1 rounded-md text-xs">
              +{project.techStacks.length - 5}
            </span>
          )}
        </div>
        
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white mt-4 py-1 px-4 rounded-lg transition duration-300 w-fit"
          ref={glitch.ref}
        >
          Visit Website
          <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2" />
        </a>
      </div>
    </div>
  );
};

export default ProjectSection;
