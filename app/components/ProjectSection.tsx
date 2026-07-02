"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectCard, { type Project } from "./ProjectCard";

const projects: Project[] = [
  {
    name: "Mind Extension - AI-Powered Development Workspace",
    description: "A multi-tenant AI-powered workspace combining real-time chat, document collaboration, and agentic automation. Features streaming AI responses, tenant-isolated PostgreSQL backends, multi-provider LLM orchestration, RAG-powered knowledge retrieval, and Stripe billing infrastructure.",
    imageUrl: "/projects/mindextension.png",
    techStacks: [
      "Agentic LLM Orchestration",
      "RAG Pipeline",
      "SSE Streaming",
      "OpenAI",
      "Gemini",
      "Anthropic",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Redis",
      "React",
      "React Native",
      "Stripe",
    ],
    url: "https://mindextension.me",
    status: "live",
    type: "Full Stack",
  },
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
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Consolidated parallax — fewer MotionValues
  const bgY1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [50, -150]);
  const bgRotate = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.5, 0.5, 0]);

  // Show all projects
  const filteredProjects = projects;

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-gray-950/30 to-transparent relative overflow-hidden" id="projects">
      {/* Parallax Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-red-600/5 to-transparent rounded-full blur-3xl pointer-events-none"
        style={{ y: bgY1, opacity: bgOpacity }}
      />
      <motion.div
        className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-bl from-red-500/5 to-transparent rounded-full blur-3xl pointer-events-none"
        style={{ y: bgY2, opacity: bgOpacity }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-32 h-32 border border-red-600/10 rounded-full pointer-events-none"
        style={{ y: bgY1, rotate: bgRotate, opacity: bgOpacity }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-20 h-20 border border-red-500/10 rotate-45 pointer-events-none"
        style={{ y: bgY2, rotate: bgRotate, opacity: bgOpacity }}
      />
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
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
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

export default ProjectSection;
