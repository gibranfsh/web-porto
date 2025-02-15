"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface Award {
  title: string;
  date: string;
  description: string;
}

const awards: Award[] = [
  {
    title:
      "[National] Top 5 Web Development Competition Informatics Festival 2023 by Padjajaran University",
    date: "October 2023",
    description: `• Received recognition in a Hackathon focused on real-world economic issues, demonstrating adeptness in addressing economic challenges and fostering entrepreneurship by developing a website platform called "Danain", connecting startups with investors.\n• As a Backend Engineer, I played a pivotal role in architecting and developing the backend infrastructure, ensuring robust functionality and seamless integration with frontend components. This involved designing database schemas, implementing RESTful API endpoints, and optimizing server-side processes for optimal performance and scalability.`,
  },
  {
    title:
      "[National] Top 5 Web Development Competition Informatics Festival 2023 by Padjajaran University",
    date: "October 2023",
    description: `• Received recognition in a Hackathon focused on real-world economic issues, demonstrating adeptness in addressing economic challenges and fostering entrepreneurship by developing a website platform called "Danain", connecting startups with investors.\n• As a Backend Engineer, I played a pivotal role in architecting and developing the backend infrastructure, ensuring robust functionality and seamless integration with frontend components. This involved designing database schemas, implementing RESTful API endpoints, and optimizing server-side processes for optimal performance and scalability.`,
  },
  {
    title:
      "[National] Best Idea SLASHCOM x HACKATHON Competition 2023 by UPNVJ",
    date: "June 2023",
    description: `• Propose a startup that supports SDGs 4 and 8, focusing on the quality of education and economic growth, by addressing the challenges faced by students in direct learning through real projects\n
• As a full stack engineer, I spearheaded the development of both backend and some of the frontend components for our proposed startup project, ensuring robust communication between client and server interfaces.\nIssued by Universitas Pembangunan Nasional "Veteran" Jakarta (UPNVJ).`,
  },
];

const AwardsSection = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 50,
    });
  }, []);

  return (
    <section className="mt-12 px-4 sm:px-6 lg:px-8" id="awards">
      <h2
        className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-8"
        data-aos="fade-up"
      >
        Awards (outdated)
      </h2>
      <div className="grid gap-8">
        {awards.map((award, index) => (
          <AwardCard key={index} award={award} index={index} />
        ))}
      </div>
    </section>
  );
};

const AwardCard = ({ award, index }: { award: Award; index: number }) => {
  return (
    <div
      className="bg-gray-900 rounded-lg shadow-md p-6"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={(index + 1) * 100}
    >
      <h3 className="text-xl font-semibold text-white mb-2">{award.title}</h3>
      <p className="text-gray-400 text-lg mb-2">{award.date}</p>
      <p className="text-gray-400">{award.description}</p>
    </div>
  );
};

export default AwardsSection;
