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
      "[National] Top 5 Web Development Competition Informatics Festival 2023",
    date: "October 2023",
    description:
      "Successfully secured top 5 in the Web Development Competition at the 2023 Informatics Festival by UNPAD. Competing against numerous teams, my team successfully qualified and demonstrated skills in web development. Danain is the name of our website.",
  },
  {
    title: "[National] Best Idea SLASHCOM x HACKATHON Competition 2023",
    date: "June 2023",
    description:
      'Granted as the team with the Best Idea in Slashcom x Hackathon Competition 2023. Issued by Universitas Pembangunan Nasional "Veteran" Jakarta (UPNVJ).',
  },
  {
    title: "[National] Semifinalist at Hackfest 2023",
    date: "March 2023",
    description:
      "Successfully qualified as a semi-finalist at the Hackathon competition that have a objective to solve SDGs problem. My team (4 people including me) developed an IT-based solution for connecting organizations seeking IT product development with individuals looking to enhance their IT career experience. We call it Skillective. Aimed at overcoming SDG 4 (Quality Education) and SDG 8 (Decent Work and Economic Growth) problems.",
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
    <section className="mt-12 px-4 sm:px-6 lg:px-8">
      <h2
        className="text-white text-3xl font-extrabold text-center mb-8"
        data-aos="fade-up"
      >
        Awards
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
