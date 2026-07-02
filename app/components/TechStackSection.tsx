"use client";
import React, { useState, useMemo, memo } from "react";
import FilterButton, { FilterButtonGroup } from "./ui/FilterButton";
import {
  AI_DEVELOPER_TOOLS,
  techStacks,
  type CategoryType,
  type TechStack,
} from "../data/techStacks";
import { techBrandIcons, getIconRenderOptions } from "./techBrandIcons";

const isAiDeveloperTool = (name: string): boolean =>
  (AI_DEVELOPER_TOOLS as readonly string[]).includes(name);

const TechStackSection = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("all");

  const groupedTechStacks = useMemo(() => {
    if (activeCategory === "all") {
      return {
        "Programming Languages": techStacks.filter((tech) =>
          tech.category.includes("languages")
        ),
        "Frontend Technologies": techStacks.filter((tech) =>
          tech.category.includes("frontend")
        ),
        "Backend Technologies": techStacks.filter(
          (tech) =>
            tech.category.includes("backend") && !tech.category.includes("aiml")
        ),
        "AI & ML": techStacks.filter(
          (tech) =>
            tech.category.includes("aiml") && !isAiDeveloperTool(tech.name)
        ),
        "AI Developer Tools": techStacks.filter((tech) =>
          isAiDeveloperTool(tech.name)
        ),
        "Databases & Data Store": techStacks.filter((tech) =>
          tech.category.includes("database")
        ),
        "DevOps & Cloud": techStacks.filter((tech) =>
          tech.category.includes("devops")
        ),
        "Development Tools": techStacks.filter(
          (tech) =>
            tech.category.includes("tools") && !isAiDeveloperTool(tech.name)
        ),
      };
    }

    const filteredTechStacks = techStacks.filter((tech) =>
      tech.category.includes(activeCategory)
    );

    const groups: Record<string, TechStack[]> = {};

    if (activeCategory === "languages") {
      groups["Programming Languages"] = filteredTechStacks.filter(
        (tech) =>
          !tech.category.includes("frontend") &&
          !tech.category.includes("backend")
      );
      groups["Frontend Languages"] = filteredTechStacks.filter((tech) =>
        tech.category.includes("frontend")
      );
      groups["Backend Languages"] = filteredTechStacks.filter((tech) =>
        tech.category.includes("backend")
      );
    } else if (activeCategory === "frontend") {
      groups["UI Frameworks"] = filteredTechStacks.filter((tech) =>
        ["react.js", "vue.js", "next.js"].some((name) =>
          tech.name.toLowerCase().includes(name.toLowerCase())
        )
      );
      groups["UI Libraries & CSS"] = filteredTechStacks.filter(
        (tech) =>
          tech.name.toLowerCase().includes("css") ||
          tech.name.toLowerCase().includes("tailwind")
      );
      groups["Mobile Frameworks"] = filteredTechStacks.filter(
        (tech) =>
          tech.name.toLowerCase().includes("native") ||
          tech.name.toLowerCase().includes("flutter")
      );
      groups["Other Frontend Tools"] = filteredTechStacks.filter(
        (tech) => !Object.values(groups).flat().includes(tech)
      );
    } else if (activeCategory === "backend") {
      groups["Backend Frameworks"] = filteredTechStacks.filter((tech) =>
        ["express", "nest", "laravel", "codeigniter", "fiber", ".net"].some(
          (name) => tech.name.toLowerCase().includes(name.toLowerCase())
        )
      );
      groups["API & Data Tools"] = filteredTechStacks.filter((tech) =>
        ["graphql", "trpc", "prisma", "orm"].some((name) =>
          tech.name.toLowerCase().includes(name.toLowerCase())
        )
      );
      groups["AI & Machine Learning"] = filteredTechStacks.filter((tech) =>
        ["tensorflow", "keras", "scikit"].some((name) =>
          tech.name.toLowerCase().includes(name.toLowerCase())
        )
      );
      groups["Other Backend Tools"] = filteredTechStacks.filter(
        (tech) => !Object.values(groups).flat().includes(tech)
      );
    } else if (activeCategory === "database") {
      groups["SQL Databases"] = filteredTechStacks.filter((tech) =>
        ["mysql", "postgresql", "sql", "mariadb", "cockroach"].some((name) =>
          tech.name.toLowerCase().includes(name.toLowerCase())
        )
      );
      groups["NoSQL Databases"] = filteredTechStacks.filter((tech) =>
        ["mongodb", "firebase"].some((name) =>
          tech.name.toLowerCase().includes(name.toLowerCase())
        )
      );
      groups["Database Tools"] = filteredTechStacks.filter((tech) =>
        ["prisma", "orm", "supabase"].some((name) =>
          tech.name.toLowerCase().includes(name.toLowerCase())
        )
      );
      groups["Other Database Technologies"] = filteredTechStacks.filter(
        (tech) => !Object.values(groups).flat().includes(tech)
      );
    } else if (activeCategory === "devops") {
      groups["Cloud Platforms"] = filteredTechStacks.filter((tech) =>
        ["aws", "gcp", "azure", "vercel", "heroku", "netlify"].some((name) =>
          tech.name.toLowerCase().includes(name.toLowerCase())
        )
      );
      groups["Containerization & Orchestration"] = filteredTechStacks.filter(
        (tech) =>
          ["docker", "kubernetes", "helm"].some((name) =>
            tech.name.toLowerCase().includes(name.toLowerCase())
          )
      );
      groups["CI/CD & Monitoring"] = filteredTechStacks.filter((tech) =>
        ["terraform", "datadog", "kafka"].some((name) =>
          tech.name.toLowerCase().includes(name.toLowerCase())
        )
      );
      groups["Other DevOps Tools"] = filteredTechStacks.filter(
        (tech) => !Object.values(groups).flat().includes(tech)
      );
    } else if (activeCategory === "tools") {
      groups["Version Control"] = filteredTechStacks.filter((tech) =>
        ["git", "github", "gitlab", "bitbucket"].some((name) =>
          tech.name.toLowerCase().includes(name.toLowerCase())
        )
      );
      groups["Design & Collaboration"] = filteredTechStacks.filter((tech) =>
        ["figma", "trello", "slack", "clockify"].some((name) =>
          tech.name.toLowerCase().includes(name.toLowerCase())
        )
      );
      groups["Testing & API"] = filteredTechStacks.filter((tech) =>
        ["jest", "postman"].some((name) =>
          tech.name.toLowerCase().includes(name.toLowerCase())
        )
      );
      groups["Other Tools"] = filteredTechStacks.filter(
        (tech) => !Object.values(groups).flat().includes(tech)
      );
    } else if (activeCategory === "aiml") {
      groups["AI & ML Libraries"] = techStacks.filter(
        (tech) =>
          tech.category.includes("aiml") &&
          ["TensorFlow", "Keras", "scikit-learn"].some((name) =>
            tech.name.toLowerCase().includes(name.toLowerCase())
          )
      );

      groups["AI Developer Tools"] = techStacks.filter(
        (tech) => tech.category.includes("aiml") && isAiDeveloperTool(tech.name)
      );

      groups["Other AI & ML Technologies"] = techStacks.filter(
        (tech) =>
          tech.category.includes("aiml") &&
          !Object.values(groups).flat().includes(tech)
      );
    }

    Object.keys(groups).forEach((key) => {
      if (groups[key].length === 0) {
        delete groups[key];
      }
    });

    return groups;
  }, [activeCategory]);

  const categories: { id: CategoryType; name: string }[] = [
    { id: "all", name: "All Technologies" },
    { id: "languages", name: "Languages" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "database", name: "Databases & Data Store" },
    { id: "aiml", name: "AI & ML" },
    { id: "devops", name: "DevOps" },
    { id: "tools", name: "Tools" },
  ];

  const categoryDescriptions: Record<string, string> = {
    "Programming Languages":
      "Languages I've mastered for building robust and efficient software solutions.",
    "Frontend Technologies":
      "Tools and frameworks I use to create responsive, interactive user interfaces.",
    "Backend Technologies":
      "Technologies I leverage to build scalable server-side applications and APIs.",
    "Databases & Data Store":
      "Database systems I'm proficient in for managing and optimizing data storage.",
    "DevOps & Cloud":
      "Cloud platforms and tools I use for deployment, CI/CD, and infrastructure management.",
    "Development Tools":
      "Utilities and platforms that enhance my development workflow and productivity.",
    "AI & Machine Learning":
      "Libraries and frameworks I use for data science, artificial intelligence, and machine learning.",
    "UI Frameworks":
      "Modern frameworks I use to build component-based, reactive user interfaces.",
    "UI Libraries & CSS":
      "Styling tools and libraries for creating beautiful, responsive designs.",
    "Mobile Frameworks":
      "Technologies I use for cross-platform mobile app development.",
    "Backend Frameworks":
      "Server-side frameworks powering my API and application backends.",
    "API & Data Tools":
      "Tools for API development, data validation, and client-server communication.",
    "SQL Databases":
      "Relational database systems I work with for structured data storage.",
    "NoSQL Databases":
      "Non-relational databases I use for flexible, scalable data solutions.",
    "Cloud Platforms":
      "Cloud services I leverage for hosting and scaling applications.",
    "Containerization & Orchestration":
      "Tools I use for containerizing and managing application deployments.",
    "Version Control":
      "Systems I use for code versioning and collaboration.",
    "Design & Collaboration":
      "Tools that support my design process and team collaboration.",
    "AI Developer Tools":
      "AI coding assistants and agentic tools I use to enhance productivity and problem-solving.",
    "AI & ML Libraries":
      "Frameworks I use for machine learning model development and data analysis.",
    "Other AI & ML Technologies":
      "Additional AI technologies I leverage for various computational tasks.",
  };

  return (
    <section
      className="mt-24 px-4 sm:px-6 lg:px-8 overflow-x-hidden overflow-y-visible scroll-mt-[var(--nav-height)]"
      id="tech_stacks"
    >
      <div className="mb-16 relative overflow-hidden" data-aos="fade-up">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-20"></div>
        </div>
        <h2 className="text-center relative z-10">
          <span className="px-6 inline-flex flex-col items-center">
            <span className="text-sm uppercase tracking-widest text-gray-400 font-medium mb-2">
              What I Work With
            </span>
            <span className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white relative whitespace-normal">
              Tech{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
                Stacks
              </span>{" "}
              & Tools
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></span>
            </span>
          </span>
        </h2>
      </div>

      <div className="mb-8 overflow-hidden" data-aos="fade-up" data-aos-delay="100">
        <FilterButtonGroup className="mb-2">
          {categories.map((category) => (
            <FilterButton
              key={category.id}
              selected={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </FilterButton>
          ))}
        </FilterButtonGroup>
      </div>

      <div
        className="overflow-x-hidden overflow-y-visible"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        {Object.entries(groupedTechStacks).map(([groupName, techs], groupIndex) => (
          <div
            key={groupName}
            className="mb-16 overflow-x-hidden overflow-y-visible"
          >
            <div className="mb-8">
              <div
                className="flex items-center mb-2"
                data-aos="fade-up"
                data-aos-delay={groupIndex * 100}
              >
                <div className="h-1 w-6 bg-red-600 rounded mr-3"></div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {groupName}
                </h3>
                <div className="h-1 bg-red-600 rounded ml-3 flex-grow opacity-20"></div>
              </div>

              {categoryDescriptions[groupName] && (
                <p
                  className="text-gray-400 ml-9 text-sm md:text-base max-w-3xl"
                  data-aos="fade-up"
                  data-aos-delay={groupIndex * 100 + 50}
                >
                  {categoryDescriptions[groupName]}
                </p>
              )}
            </div>

            <div
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-3 xl:gap-6 justify-items-center overflow-visible"
              data-aos="fade-up"
              data-aos-delay={groupIndex * 100 + 100}
            >
              {techs.map((tech, index) => (
                <TechIcon
                  key={tech.name}
                  name={tech.name}
                  thesvgSlug={tech.thesvgSlug}
                  delay={index % 10 * 50}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const TechIcon = memo(
  ({
    name,
    thesvgSlug,
    delay = 0,
  }: {
    name: string;
    thesvgSlug: string;
    delay?: number;
  }) => {
    const Icon = techBrandIcons[thesvgSlug];
    const { variant, tileClassName } = getIconRenderOptions(thesvgSlug);
    const initials = name
      .replace(/[^a-zA-Z0-9]/g, "")
      .substring(0, 2)
      .toUpperCase();

    return (
      <div
        className="relative group z-0 hover:z-30 focus-within:z-30 overflow-visible w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 outline-none"
        tabIndex={0}
        aria-label={name}
        data-aos="zoom-in"
        data-aos-delay={delay}
      >
        <div className="tech-icon-cyber h-full w-full">
          {Icon ? (
            <Icon
              {...(variant ? { variant } : {})}
              className={["h-[60%] w-[60%] shrink-0", tileClassName]
                .filter(Boolean)
                .join(" ")}
              aria-hidden
            />
          ) : (
            <span className="font-mono text-sm font-bold text-red-400">
              {initials}
            </span>
          )}
        </div>
        <div
          className="pointer-events-none absolute left-1/2 bottom-full mb-2 -translate-x-1/2 z-50
                     whitespace-nowrap rounded-sm border bg-black/95 px-2 py-1 font-mono text-xs text-zinc-100
                     opacity-0 transition-opacity duration-200
                     group-hover:opacity-100 group-focus-within:opacity-100"
          style={{ borderColor: "rgba(220, 38, 38, 0.35)" }}
          role="tooltip"
        >
          {name}
        </div>
      </div>
    );
  }
);

TechIcon.displayName = "TechIcon";

export default TechStackSection;
