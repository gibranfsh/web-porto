"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const TechStackSection = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 50,
    });
  });

  return (
    <section className="mt-12 px-4 sm:px-6 lg:px-8" id="tech_stacks">
      <h2
        className="text-white text-3xl font-extrabold text-center mb-8"
        data-aos="fade-up"
      >
        Tech Stacks & Tools
      </h2>
      <div
        className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        {techStacks.map((tech) => (
          <TechIcon key={tech.name} name={tech.name} src={tech.src} />
        ))}
      </div>
    </section>
  );
};

const TechIcon = ({ name, src }: { name: string; src: string }) => {
  return (
    <div className="relative group w-16 h-16 sm:w-20 sm:h-20 overflow-hidden bg-gray-900 rounded-lg select-none">
      <Image
        src={src}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover transition duration-300 transform group-hover:scale-110"
        layout="fill"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
        <p className="text-white text-center text-sm">{name}</p>
      </div>
    </div>
  );
};

const techStacks = [
  { name: "Python", src: "/tech_stacks/python.svg" },
  { name: "Haskell", src: "/tech_stacks/haskell.svg" },
  { name: "C", src: "/tech_stacks/c.svg" },
  { name: "Java", src: "/tech_stacks/java.svg" },
  { name: "HTML", src: "/tech_stacks/html.svg" },
  { name: "CSS", src: "/tech_stacks/css.svg" },
  { name: "Tailwind CSS", src: "/tech_stacks/tailwindcss.svg" },
  { name: "JavaScript", src: "/tech_stacks/javascript.svg" },
  { name: "TypeScript", src: "/tech_stacks/typescript.svg" },
  { name: "PHP", src: "/tech_stacks/php.svg" },
  { name: "Go", src: "/tech_stacks/go.svg" },
  { name: "GraphQL", src: "/tech_stacks/graphql.svg" },
  { name: "SQL", src: "/tech_stacks/sql.svg" },
  { name: "Node.js", src: "/tech_stacks/node.svg" },
  { name: "Express.js", src: "/tech_stacks/express.svg" },
  { name: "React.js", src: "/tech_stacks/react.svg" },
  { name: "Next.js", src: "/tech_stacks/next.svg" },
  { name: "Vue.js", src: "/tech_stacks/vue.svg" },
  { name: "CodeIgniter", src: "/tech_stacks/codeigniter.svg" },
  { name: "Laravel", src: "/tech_stacks/laravel.svg" },
  { name: "Nest.js", src: "/tech_stacks/nest.svg" },
  { name: "Gofiber", src: "/tech_stacks/fiber.svg" },
  { name: "MySQL", src: "/tech_stacks/mysql.svg" },
  { name: "PostgreSQL", src: "/tech_stacks/postgresql.svg" },
  { name: "MariaDB", src: "/tech_stacks/mariadb.svg" },
  { name: "SQLite", src: "/tech_stacks/sqlite.svg" },
  { name: "MongoDB", src: "/tech_stacks/mongodb.svg" },
  { name: "Supabase", src: "/tech_stacks/supabase.svg" },
  { name: "Cockroach DB", src: "/tech_stacks/cockroachdb1.svg" },
  { name: "AWS", src: "/tech_stacks/aws.svg" },
  { name: "GCP", src: "/tech_stacks/gcp.svg" },
  { name: "Azure", src: "/tech_stacks/azure.svg" },
  { name: "Firebase", src: "/tech_stacks/firebase.svg" },
  { name: "Vercel", src: "/tech_stacks/vercel.svg" },
  { name: "Heroku", src: "/tech_stacks/heroku.svg" },
  { name: "Netlify", src: "/tech_stacks/netlify.svg" },
  { name: "Docker", src: "/tech_stacks/docker.svg" },
  { name: "Git", src: "/tech_stacks/git.svg" },
  { name: "GitHub", src: "/tech_stacks/github.svg" },
  { name: "GitLab", src: "/tech_stacks/gitlab.svg" },
  { name: "Bitbucket", src: "/tech_stacks/bitbucket.svg" },
  { name: "React Native", src: "/tech_stacks/react_native.svg" },
  { name: "TensorFlow", src: "/tech_stacks/tensorflow.svg" },
  { name: "Keras", src: "/tech_stacks/keras.svg" },
  { name: "scikit-learn", src: "/tech_stacks/scikit-learn.svg" },
  { name: "Jest", src: "/tech_stacks/jest.svg" },
  { name: "Postman", src: "/tech_stacks/postman.svg" },
  { name: "Figma", src: "/tech_stacks/figma.svg" },
  { name: "Trello", src: "/tech_stacks/trello.svg" },
  { name: "Slack", src: "/tech_stacks/slack.svg" },
];

export default TechStackSection;
