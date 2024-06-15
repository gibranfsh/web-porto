"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

interface WorkExperience {
  company: string;
  image: string;
  position: string;
  duration: string;
  description: string;
}

const workExperiences: WorkExperience[] = [
  {
    company: "Bank Indonesia",
    image: "/work_experiences/bi.jpg",
    position: "Software Engineer Intern",
    duration: "June 2024 - Present",
    description:
      "Currently developing an internal presence management system using a face recognition algorithm for employees called BI-Presence, with a team of 4 including me. Utilizing cutting edge techologies, such as C#, .NET Core, Javascript, Vue.js, Python, TensorFlow, Scikit-Learn, Convolutional Neural Networks (CNN), Deep Learning, Tailwind CSS, Machine Learning, and Microsoft SQL Server",
  },
  {
    company: "DOT Indonesia",
    image: "/work_experiences/dot.jpg",
    position: "Backend Engineer Intern",
    duration: "Dec 2023 - April 2024",
    description:
      "I have contributed to various projects, including creating database documentation for the revamped website of the General Secretariat of the Indonesian House of Representatives (DPR RI), developing an API for retrieving employees' overtime hours by specific projects, and designing a user interface (Frontend) while implementing corresponding functionality (Backend) to enable time entity filtering, along with an export feature to Excel. Additionally, I am currently working on Dotify, an HRIS website for DOT Indonesia. These projects involved the utilization of cutting-edge technologies such as Laravel, Vue.js, Inertia.js, MariaDB, DBeaver, Laragon, Filament, and TailwindCSS.",
  },
  {
    company: "Inkubator IT",
    image: "/work_experiences/inkubatorit.png",
    position: "Software Engineer",
    duration: "March 2023 - Present",
    description:
      "During my undergraduate studies, I successfully completed 5 website development projects for external clients/stakeholders. These projects span various domains, including mental health, village services, dormitories, and English language courses. Collaborating with UI/UX designers, project managers, and frontend developers, I ensured seamless project execution. Assigned by the IT Incubator of the HMIF ITB, these projects held a total value exceeding ±50 million Indonesian Rupiah. Leveraging technologies such as HTML, CSS, TailwindCSS, JavaScript, TypeScript, Express.js, React.js, Next.js, Prisma ORM, MongoDB, PostgreSQL, MySQL, AWS, GCP, Virtual Machine, Linux/Bash, Git, Docker, and Postman, I delivered robust and innovative solutions to meet client requirements.",
  },
  {
    company: "BIST League 2023",
    image: "/work_experiences/bistleague.jpg",
    position: "Backend Developer",
    duration: "October 2023 - December 2023",
    description:
      "I contributed to the backend development of the BIST League 2023 website, enhancing its information services. This involved developing Team Information and Team Submission API Endpoints, as well as SQL queries, while also fulfilling the role of website maintainer. Leveraging technologies such as Go, GoFiber, PostgreSQL, CockroachDB, Docker, and Postman, I ensured the smooth operation and optimization of the platform.",
  },
  {
    company: "ITB October Graduation Parade 2023",
    image: "/work_experiences/paradewisuda.png",
    position: "Backend Developer",
    duration: "September 2023 - October 2023",
    description:
      "I contributed to the backend development of the Parade Wisuda Oktober ITB 2023 website, enhancing its information services. Additionally, I developed WisokFess, a platform enabling anonymous messaging between users, thereby fostering community interaction. Leveraging cutting-edge technologies such as Typescript, Next.js, Prisma, PostgreSQL, and Postman API, I ensured the robustness and efficiency of both projects.",
  },
  {
    company: "SPARTA 2022 HMIF ITB",
    image: "/work_experiences/sparta2022hmifitb.ico",
    position: "Backend Developer",
    duration: "June 2023 - July 2023",
    description:
      "I contributed to the backend system development of a website offering organizational orientation program services for HMIF ITB, catering to over 400 participants. This involved implementing Authentication using Next-Auth, creating schemas using Prisma and MongoDB, securing existing pages, and designing, creating, and testing API endpoints with a REST structure. Leveraging cutting-edge technologies such as Typescript, Next.js, Postman, AWS Amplify, and S3, I ensured the platform's functionality, security, and scalability met the project's requirements.",
  },
  {
    company: "IEEE ITB Student Branch",
    image: "/work_experiences/ieeeitb.jpg",
    position: "Backend Developer",
    duration: "June 2023 - May 2024",
    description:
      "I implemented DatoCMS models and GraphQL queries to efficiently manage and display content on the website. Additionally, I integrated a real-time updates management system using DatoCMS, enabling administrators to effortlessly create, update, and organize various events and news, ensuring seamless communication and engagement with users.",
  },
];

const ExperienceSection = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 50,
    });
  });

  return (
    <section className="mt-12 px-4 sm:px-6 lg:px-8" id="experiences">
      <h2
        className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-8"
        data-aos="fade-up"
      >
        Work <span className="text-red-600">Experiences</span>
      </h2>
      <div className="grid gap-8">
        {workExperiences.map((experience, index) => (
          <WorkExperienceCard
            key={index}
            experience={experience}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

const WorkExperienceCard = ({
  experience,
  index,
}: {
  experience: WorkExperience;
  index: number;
}) => {
  return (
    <div
      className="flex flex-col sm:flex-row gap-8 bg-gray-900 rounded-lg shadow-md p-6"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={(index + 1) * 100}
    >
      <div className="flex justify-center items-center w-32 h-32">
        <Image
          src={experience.image}
          alt={experience.company}
          width={300}
          height={300}
          className="rounded-lg"
        />
      </div>
      <div className="w-full flex flex-col justify-between">
        <h3 className="text-xl font-semibold text-white mb-2">
          {experience.company}
        </h3>
        <p className="text-gray-400 text-lg mb-2">{experience.position}</p>
        <p className="text-gray-400 mb-2">{experience.duration}</p>
        <p className="text-gray-400">{experience.description}</p>
      </div>
    </div>
  );
};

export default ExperienceSection;
