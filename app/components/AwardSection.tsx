"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { TrophyIcon, CalendarIcon } from "@heroicons/react/24/outline";

interface Award {
  title: string;
  date: string;
  description: string;
  type: "national" | "international" | "university";
}

const awards: Award[] = [
  {
    title: "2nd Place Winner at Garuda Hacks 5.0 Hackathon 2024",
    date: "July 2024",
    description: `• Participated in Garuda Hacks 5.0, a 36-hour international hackathon, where my team of four secured 2nd Place out of 105 teams (364 participants) in the "Strongest Together" path. We also received The Wolfram Award (awarded to the top 5 hackathon submissions from all tracks). Participants came from various countries, including the USA, Canada, India, Singapore, United Kingdom, and Indonesia.\n
• Our innovation, IRIS, is an advanced IoT-based mobile application designed to enhance security and user convenience using AI solutions. IRIS focuses on preventing and responding to domestic violence and sexual assault by offering a comprehensive safety and evidence collection approach.\n
• Served as Hustler, UI/UX Designer, and Fullstack Engineer, contributing to IRIS's design and development.`,
    type: "international",
  },
  {
    title: "1st Winner ITB Online Hackathon Pra-Gemastik XVII: Software Engineering Competition",
    date: "June 2024",
    description: `• Led a team of three to win first place in the ITB Pra-Gemastik XVII Software Engineering competition, demonstrating strong technical leadership and collaborative skills.\n
• Developed a comprehensive software solution that addressed real-world challenges while adhering to competition requirements for innovation, usability, and technical implementation.\n
• Showcased expertise in software architecture, coding practices, and problem-solving under time constraints.`,
    type: "university",
  },
  {
    title: "Top 5 SLASHCOM x HACKATHON Competition 2024",
    date: "May 2024",
    description: "• Successfully qualified as one of the Top 5 teams out of 20 participating teams, bringing new innovations and implementations using IT knowledge.\n• Demonstrated problem-solving skills, technical expertise, and collaborative teamwork throughout the competitive hackathon environment.",
    type: "national",
  },
  {
    title:
      "Top 5 Web Development Competition Informatics Festival 2023 by Padjajaran University",
    date: "October 2023",
    description: `• Received recognition in a Hackathon focused on real-world economic issues, demonstrating adeptness in addressing economic challenges and fostering entrepreneurship by developing a website platform called "Danain", connecting startups with investors.\n• As a Backend Engineer, I played a pivotal role in architecting and developing the backend infrastructure, ensuring robust functionality and seamless integration with frontend components. This involved designing database schemas, implementing RESTful API endpoints, and optimizing server-side processes for optimal performance and scalability.`,
    type: "national",
  },
  {
    title:
      "Best Idea SLASHCOM x HACKATHON Competition 2023 by UPNVJ",
    date: "June 2023",
    description: `• Propose a startup that supports SDGs 4 and 8, focusing on the quality of education and economic growth, by addressing the challenges faced by students in direct learning through real projects\n
• As a full stack engineer, I spearheaded the development of both backend and some of the frontend components for our proposed startup project, ensuring robust communication between client and server interfaces.\nIssued by Universitas Pembangunan Nasional "Veteran" Jakarta (UPNVJ).`,
    type: "national",
  },
];

const AwardsSection = () => {
  const [filter, setFilter] = useState<"all" | "national" | "international" | "university">("all");
  
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 50,
    });
  }, []);

  const filteredAwards = filter === "all" 
    ? awards 
    : awards.filter(award => award.type === filter);

  return (
    <section className="mt-24 px-4 sm:px-6 lg:px-8" id="awards">
      <div className="text-center mb-16 relative" data-aos="fade-up">
        <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2">
          <div className="flex justify-center">
            <div className="text-8xl font-bold text-gray-800/10">AWARDS</div>
          </div>
        </div>
        <div className="relative z-10">
          <span className="inline-block px-4 py-1 bg-red-600/20 rounded-full text-red-500 text-sm font-medium mb-4">Recognition</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-2">
            My <span className="text-red-600">Achievements</span>
          </h2>
          <p className="text-gray-400 max-w-md mx-auto">Accolades and honors received throughout my academic and professional journey</p>
        </div>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 mb-8" data-aos="fade-up">
        <button 
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            filter === "all" 
              ? "bg-red-600 text-white" 
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          All
        </button>
        <button 
          onClick={() => setFilter("national")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            filter === "national" 
              ? "bg-red-600 text-white" 
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          National
        </button>
        <button 
          onClick={() => setFilter("international")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            filter === "international" 
              ? "bg-red-600 text-white" 
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          International
        </button>
        <button 
          onClick={() => setFilter("university")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            filter === "university" 
              ? "bg-red-600 text-white" 
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          University
        </button>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredAwards.map((award, index) => (
          <AwardCard key={index} award={award} index={index} />
        ))}
      </div>
    </section>
  );
};

const AwardCard = ({ award, index }: { award: Award; index: number }) => {
  return (
    <div
      className="bg-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-red-600/20 hover:-translate-y-1 border border-gray-800 hover:border-red-600/40"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay={(index + 1) * 100}
    >
      <div className="p-1 bg-gradient-to-r from-red-600 to-red-800">
        <div className="bg-gray-900 px-3 py-1">
          <span className="text-xs font-medium uppercase tracking-wider text-red-500">
            {award.type}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start mb-4">
          <TrophyIcon className="h-6 w-6 text-red-500 flex-shrink-0 mr-3 mt-1" />
          <h3 className="text-xl font-bold text-white leading-tight">{award.title}</h3>
        </div>
        
        <div className="flex items-center text-gray-400 mb-4">
          <CalendarIcon className="h-4 w-4 mr-2" />
          <span className="text-sm">{award.date}</span>
        </div>
        
        <div className="text-gray-300 whitespace-pre-line">
          {award.description.split('\n').map((item, i) => (
            <p key={i} className="mb-2">{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardsSection;
