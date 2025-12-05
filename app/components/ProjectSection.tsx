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
  status?: 'live' | 'archived' | 'private';
  type: 'Full Stack' | 'Frontend' | 'Backend' | 'Mobile' | 'Data Science' | 'DevOps' | 'CMS';
  githubUrl?: string;
  caseStudyUrl?: string;
}

const projects: Project[] = [
  {
    name: "ICEE 2025 Main Website",
    description: "The ITB Civil Engineering Expo (ICEE) website featuring registration with GCP integration, Contentful CMS for sponsors/media partners, and comprehensive information sections for this annual engineering event.",
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
    status: "live",
    type: "Full Stack",
  },
  {
    name: "PT Persada Dua Rajawali Subsidiaries Websites",
    description: "Developing websites for six subsidiaries with features including table reservations, event bookings, rental management systems, and centralized logging with enhanced security and error handling.",
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
    status: "live",
    type: "Full Stack",
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
    status: "archived",
    type: "Backend",
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
    status: "live",
    type: "Backend",
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
    status: "archived",
    type: "Backend",
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
    status: "archived",
    type: "Backend",
    githubUrl: "https://github.com/sparta-hmif/Web-Sparta-2022",
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
    status: "archived",
    type: "Backend",
  },
  {
    name: "Help Pals Therapy",
    description:
      "Help Pals Therapy is a platform designed to assist individuals in managing their mental well-being by monitoring daily emotions. Additionally, it offers the capability to evaluate mental health status and provide recommendations for enhancing overall mental wellness.",
    imageUrl: "/projects/helppals.png",
    techStacks: ["Next.js 12", "Javascript", "Tailwind CSS", "MongoDB"],
    url: "https://helppalstherapy.com",
    status: "archived",
    type: "Backend",
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
    status: "archived",
    type: "Backend",
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
    status: "archived",
    type: "Full Stack",
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
    status: "archived",
    type: "Backend",
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
    status: "archived",
    type: "Backend",
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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-gray-950/30 to-transparent" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center relative mb-20" data-aos="fade-up">
          <div className="inline-block">
            <span className="text-sm text-red-400 uppercase tracking-[0.3em] font-semibold block mb-3 opacity-90">
              Portfolio Showcase
            </span>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black relative inline-block tracking-tight">
              <span className="absolute -left-12 top-1/2 transform -translate-y-1/2 text-6xl lg:text-7xl text-red-600/10 font-mono">{`<`}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300">
                Featured
              </span>
              <br className="block sm:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-orange-400 ml-4">
                Projects
              </span>
              <span className="absolute -right-12 top-1/2 transform -translate-y-1/2 text-6xl lg:text-7xl text-red-600/10 font-mono">{`/>`}</span>
            </h2>
            <div className="flex justify-center mt-6">
              <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"></div>
            </div>
            <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
              A curated collection of full-stack applications, showcasing expertise in modern web technologies, 
              scalable architectures, and user-centric design principles.
            </p>
          </div>
        </div>
        
        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center justify-center mb-12" data-aos="fade-up">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-yellow-500"></div>
                <StarIcon className="h-6 w-6 text-yellow-400" />
                <h3 className="text-3xl font-bold text-white tracking-wide">Featured Work</h3>
                <StarIcon className="h-6 w-6 text-yellow-400" />
                <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-yellow-500"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <FeaturedProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </div>
        )}
        
        {/* Regular Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {regularProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-20" data-aos="fade-up" data-aos-delay="200">
          <div className="inline-flex items-center space-x-2 text-gray-400 text-sm">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-red-500/50"></div>
            <span>Additional projects on GitHub • Mostly private repositories due to client confidentiality</span>
            <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-red-500/50"></div>
          </div>
        </div>
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
      duration: 300,
      iterations: 1,
    },
    glitchTimeSpan: {
      start: 0,
      end: 1,
    },
    shake: {
      velocity: 10,
      amplitudeX: 0.1,
      amplitudeY: 0.1,
    },
    slice: {
      count: 8,
      velocity: 12,
      minHeight: 0.02,
      maxHeight: 0.12,
      hueRotate: true,
    },
    pulse: false,
  });

  return (
    <div
      className="group relative bg-gradient-to-br from-gray-900/90 via-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 border border-gray-800/50 hover:border-red-500/40 hover:shadow-red-500/20"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={(index + 1) * 150}
    >
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(239, 68, 68, 0.1) 0%, transparent 25%), 
                           radial-gradient(circle at 75% 75%, rgba(239, 68, 68, 0.1) 0%, transparent 25%)`
        }}></div>
      </div>
      
      {/* Image Container */}
      <div className="relative h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
        <Image
          src={project.imageUrl}
          alt={project.name}
          fill
          className="object-cover object-top group-hover:object-bottom group-hover:scale-105 will-change-transform"
          style={{ 
            transition: "all 1.5s cubic-bezier(0.4, 0.0, 0.2, 1)",
            backfaceVisibility: "hidden",
            transform: "translateZ(0)"
          }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={85}
        />
        {/* Project Type Badge */}
        <div className="absolute top-4 left-4 z-20">
          <div className="bg-red-600/90 backdrop-blur-sm rounded-lg px-3 py-1.5">
            <span className="text-white text-xs font-semibold">
              {project.type}
            </span>
          </div>
        </div>
        {/* Tech Stack Overlay */}
        <div className="absolute top-4 right-4 z-20">
          <div className="bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1.5">
            <span className="text-red-400 text-xs font-semibold">
              {project.techStacks.length} Technologies
            </span>
          </div>
        </div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-20 p-8 space-y-6">
        {/* Project Title */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
            {project.name}
          </h3>
          <div className="w-12 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
        </div>
        
        {/* Description - Always Fully Visible */}
        <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700/50">
          <p className="text-gray-300 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>
        
        {/* Tech Stack */}
        <div className="space-y-3">
          <h4 className="text-white font-semibold text-sm uppercase tracking-wide">Tech Stack</h4>
          <div className="flex flex-wrap gap-2 relative">
            {project.techStacks.map((tech, i) => (
              <span
                key={i}
                className="bg-gradient-to-r from-red-900/60 to-red-800/60 backdrop-blur-sm text-red-100 px-3 py-1.5 rounded-full text-xs font-medium border border-red-700/30 hover:border-red-500/50 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Action Button */}
        <div className="pt-4 flex justify-center w-full">
          {project.status === 'live' ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 px-6 rounded-xl transition-all duration-300 font-semibold text-sm shadow-lg hover:shadow-red-500/25 transform hover:-translate-y-0.5 w-full max-w-xs"
              ref={glitch.ref}
            >
              <span>View Live Site</span>
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </a>
          ) : project.status === 'archived' ? (
            <div className="flex flex-col items-center space-y-2 w-full max-w-xs">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-xl transition-all duration-300 font-semibold text-sm w-full"
                  ref={glitch.ref}
                >
                  <span>View Source Code</span>
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                </a>
              ) : (
                <button
                  disabled
                  className="inline-flex items-center justify-center space-x-2 bg-gray-600 text-gray-300 py-3 px-6 rounded-xl font-semibold text-sm cursor-not-allowed w-full"
                >
                  <span>Deployment Archived</span>
                  <FolderIcon className="h-4 w-4" />
                </button>
              )}
              <p className="text-gray-500 text-xs text-center">Live demo temporarily unavailable</p>
            </div>
          ) : (
            <button
              disabled
              className="inline-flex items-center justify-center space-x-2 bg-gray-700 text-gray-400 py-3 px-6 rounded-xl font-semibold text-sm cursor-not-allowed w-full max-w-xs"
            >
              <span>Private Repository</span>
              <FolderIcon className="h-4 w-4" />
            </button>
          )}
        </div>
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
      velocity: 8,
      amplitudeX: 1,
      amplitudeY: 1,
    },
    slice: {
      count: 6,
      velocity: 12,
      minHeight: 0.02,
      maxHeight: 0.12,
      hueRotate: true,
    },
    pulse: false,
  });

  return (
    <div
      className="group bg-gradient-to-br from-gray-900/95 via-gray-900 to-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-600/10 border border-gray-800/60 hover:border-red-600/40"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={(index % 3 + 1) * 100}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 30% 40%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>
      
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60 z-10"></div>
        <Image
          src={project.imageUrl}
          alt={project.name}
          fill
          className="object-cover object-top group-hover:object-bottom group-hover:scale-110 will-change-transform"
          style={{ 
            transition: "all 1.5s cubic-bezier(0.4, 0.0, 0.2, 1)",
            backfaceVisibility: "hidden",
            transform: "translateZ(0)"
          }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={80}
        />
        {/* Project Type Badge */}
        <div className="absolute top-4 left-4 z-20">
          <div className="bg-red-600/90 backdrop-blur-sm rounded-lg px-3 py-1">
            <span className="text-white text-xs font-semibold">
              {project.type}
            </span>
          </div>
        </div>
      </div>
      
      {/* Content Container */}
      <div className="relative p-6 space-y-4">
        {/* Title */}
        <div className="flex items-start space-x-3">
          <FolderIcon className="h-6 w-6 text-red-500 mt-0.5 flex-shrink-0" />
          <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300 leading-tight">
            {project.name}
          </h3>
        </div>
        
        {/* Description - Expandable */}
        <div className="bg-gray-800/40 rounded-lg p-4 border border-gray-700/30">
          <p className="text-gray-300 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>
        
        {/* Tech Stack */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span className="text-gray-400 text-xs uppercase tracking-wide font-medium">
              Technologies Used
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5 relative">
            {project.techStacks.slice(0, 8).map((tech, i) => (
              <span
                key={i}
                className="bg-gray-800/60 hover:bg-gray-700/60 text-gray-300 px-2.5 py-1 rounded-lg text-xs font-medium transition-colors duration-200 border border-gray-700/50"
              >
                {tech}
              </span>
            ))}
            {project.techStacks.length > 8 && (
              <div className="relative group">
                <span className="bg-red-900/40 text-red-300 px-2.5 py-1 rounded-lg text-xs font-medium border border-red-700/50 cursor-help">
                  +{project.techStacks.length - 8} more
                </span>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
                  <div className="bg-gray-900 border border-gray-700 rounded-lg p-3 shadow-xl min-w-max">
                    <div className="flex flex-wrap gap-1.5 max-w-xs">
                      {project.techStacks.slice(8).map((tech, i) => (
                        <span
                          key={i}
                          className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {/* Arrow */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-700"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Action Button */}
        <div className="pt-2">
          {project.status === 'live' ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-2.5 px-5 rounded-xl transition-all duration-300 text-sm font-semibold w-full shadow-lg hover:shadow-red-500/20 transform hover:-translate-y-0.5"
              ref={glitch.ref}
            >
              <span>View Live Demo</span>
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </a>
          ) : project.status === 'archived' ? (
            <div className="space-y-2">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white py-2.5 px-5 rounded-xl transition-all duration-300 text-sm font-semibold w-full"
                  ref={glitch.ref}
                >
                  <span>View Source Code</span>
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                </a>
              ) : (
                <button
                  disabled
                  className="inline-flex items-center justify-center space-x-2 bg-gray-600 text-gray-300 py-2.5 px-5 rounded-xl text-sm font-semibold w-full cursor-not-allowed"
                >
                  <span>Demo Archived</span>
                  <FolderIcon className="h-4 w-4" />
                </button>
              )}
              <p className="text-gray-500 text-xs text-center">Deployment temporarily down</p>
            </div>
          ) : (
            <button
              disabled
              className="inline-flex items-center justify-center space-x-2 bg-gray-700 text-gray-400 py-2.5 px-5 rounded-xl text-sm font-semibold w-full cursor-not-allowed"
            >
              <span>Private Project</span>
              <FolderIcon className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
