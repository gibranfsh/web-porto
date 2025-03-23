"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { BriefcaseIcon, CalendarIcon } from "@heroicons/react/24/outline";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  logoUrl: string;
}

const experiences: Experience[] = [
  {
    title: "Software Engineer Intern",
    company: "Grab",
    location: "Jakarta, Indonesia",
    period: "September 2024 - December 2024",
    description: [
      "Selected as one of the 50 interns out of over 19,700 applicants, with an acceptance rate of 0.25%.",
      "Chosen as the GCAP Brand Ambassador of Tech Engineering 2024, acting as a point of contact between tech engineering interns and the HR Team.",
      "Successfully reduced daily failed transactions due to duplicate transactions from approximately 1,500-2,000 to zero, achieving a 100% error log elimination.",
      "Eliminated around 3,000 potential daily error logs across three services by fixing disconnected Apache Kafka issues and resolved ciphertext errors caused by Redis.",
      "Decommissioned 10 deprecated services, reducing annual operational costs for GrabKios. Utilized Kubernetes (k8s), Helm Charts, Terraform, AWS services, Datadog, MariaDB, CI/CD, Docker, and Apache Kafka.",
      "Designed and developed the Status Checking for Biller Recharge History feature from scratch, including building engineering specifications."
    ],
    logoUrl: "/work_experiences/grab.png"
  },
  {
    title: "Software Engineer Intern",
    company: "Central Bank of Indonesia",
    location: "Jakarta, Indonesia",
    period: "June 2024 - August 2024",
    description: [
      "Developed an internal presence management system using a face recognition algorithm called \"BI-Presence\".",
      "Engineered robust RESTful API endpoints using the .NET Core framework with a repository pattern.",
      "Designed the system architecture encompassing front-end, back-end, machine learning, camera integration, database, and storage.",
      "Integrated front-end, back-end, and machine learning components through seamless API connections.",
      "Utilized technologies like C#, .NET Core, Typescript, Vue.js, Tailwind CSS, Machine Learning, and MSQL Server."
    ],
    logoUrl: "/work_experiences/bi.jpg"
  },
  {
    title: "Backend Engineer Intern",
    company: "DOT Indonesia",
    location: "Bandung, Indonesia",
    period: "December 2023 - April 2024",
    description: [
      "Created database documentation for revamped General Secretariat of DPR RI website.",
      "Mirrored internal HRIS website from Laravel/Inertia to Laravel/Filament (Fullstack) that serves for ±110 employees.",
      "Implemented secure APIs with high scalability and low cost queries.",
      "Utilized technologies like Laravel, PHP, Vue.js, Inertia, MariaDB, Filament, TailwindCSS, and Postman API."
    ],
    logoUrl: "/work_experiences/dot.jpg"
  },
  {
    title: "Software Engineer",
    company: "Inkubator IT HMIF ITB",
    location: "Bandung, Indonesia",
    period: "December 2022 - January 2024",
    description: [
      "Successfully completed 5 website development projects for external clients/stakeholders during undergraduate studies.",
      "Collaborated with UI/UX designers, project managers, and frontend developers on projects in various domains.",
      "Developed websites for mental health services, village services, dormitories, and English language courses.",
      "Utilized technologies like TypeScript, Next.js, Prisma ORM, MongoDB, PostgreSQL, MySQL, AWS, GCP, Docker, and Postman."
    ],
    logoUrl: "/work_experiences/inkubatorit.png"
  }
];

const ExperienceSection = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 50,
    });
  }, []);

  return (
    <section className="mt-24 px-4 sm:px-6 lg:px-8" id="experiences">
      <div className="relative mb-16" data-aos="fade-up">
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-2">
            <BriefcaseIcon className="h-6 w-6 text-red-500 mr-2" />
            <span className="text-sm uppercase tracking-widest text-gray-400 font-medium">Career Path</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">Experience</span>
          </h2>
          <div className="flex items-center gap-4">
            <div className="w-12 h-0.5 bg-red-600"></div>
            <div className="w-4 h-4 rounded-full bg-red-600 animate-pulse"></div>
            <div className="w-12 h-0.5 bg-red-600"></div>
          </div>
        </div>
      </div>
      
      <div className="relative max-w-5xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-red-600 transform -translate-x-1/2"></div>
        
        {/* Experience items */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              data-aos-duration="800"
              data-aos-delay={index * 100}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-red-600 rounded-full transform -translate-x-1/2 flex items-center justify-center z-10">
                <BriefcaseIcon className="h-4 w-4 text-white" />
              </div>
              
              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                <div className="bg-gray-800 rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:shadow-red-600/20 hover:-translate-y-1 border border-gray-700 hover:border-red-600/30">
                  {/* Company and title section */}
                  <div className="flex items-center mb-4">
                    <div className="relative w-12 h-12 mr-4 rounded-md overflow-hidden bg-gray-700 flex items-center justify-center flex-shrink-0">
                      {exp.logoUrl ? (
                        <Image
                          src={exp.logoUrl}
                          alt={exp.company}
                          fill
                          className="object-contain p-1"
                          sizes="48px"
                        />
                      ) : (
                        <BriefcaseIcon className="h-6 w-6 text-white" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-red-500 font-medium">{exp.company}</p>
                    </div>
                  </div>
                  
                  {/* Period and location with better spacing */}
                  <div className="mb-4">
                    <div className="flex items-center text-gray-400 text-sm mb-1">
                      <CalendarIcon className="h-4 w-4 mr-2 flex-shrink-0" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  {/* Description with improved line spacing and bullet points */}
                  <ul className="space-y-2.5 text-gray-300 text-sm sm:text-base">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex">
                        <span className="text-red-500 mr-2 mt-1 flex-shrink-0">▹</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
