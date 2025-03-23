"use client";
import React, { useEffect, useState, useRef, useMemo } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

type CategoryType = "all" | "languages" | "frontend" | "backend" | "database" | "devops" | "tools" | "aiml";

interface TechStack {
  name: string;
  src: string;
  category: CategoryType[];
}

const TechStackSection = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("all");
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 50,
    });
  }, []);

  const groupedTechStacks = useMemo(() => {
    if (activeCategory === "all") {
      return {
        "Programming Languages": techStacks.filter(tech => 
          tech.category.includes("languages")
        ),
        "Frontend Technologies": techStacks.filter(tech => 
          tech.category.includes("frontend")
        ),
        "Backend Technologies": techStacks.filter(tech => 
          tech.category.includes("backend") && !tech.category.includes("aiml")
        ),
        "AI & ML": techStacks.filter(tech => 
          tech.category.includes("aiml") && !["ChatGPT", "Claude", "DeepSeek", "GitHub Copilot", "Gemini", "Cursor"].includes(tech.name)
        ),
        "Generative AI Tools": techStacks.filter(tech => 
          ["ChatGPT", "Claude", "DeepSeek", "GitHub Copilot", "Gemini", "Cursor"].includes(tech.name)
        ),
        "Databases & Data Store": techStacks.filter(tech => 
          tech.category.includes("database")
        ),
        "DevOps & Cloud": techStacks.filter(tech => 
          tech.category.includes("devops")
        ),
        "Development Tools": techStacks.filter(tech => 
          tech.category.includes("tools") && !["ChatGPT", "Claude", "DeepSeek", "GitHub Copilot", "Gemini"].includes(tech.name)
        ),
      };
    }

    const filteredTechStacks = techStacks.filter(tech => 
      tech.category.includes(activeCategory)
    );
    
    const groups: Record<string, TechStack[]> = {};
    
    if (activeCategory === "languages") {
      groups["Programming Languages"] = filteredTechStacks.filter(
        tech => !tech.category.includes("frontend") && !tech.category.includes("backend")
      );
      groups["Frontend Languages"] = filteredTechStacks.filter(
        tech => tech.category.includes("frontend")
      );
      groups["Backend Languages"] = filteredTechStacks.filter(
        tech => tech.category.includes("backend")
      );
    } else if (activeCategory === "frontend") {
      groups["UI Frameworks"] = filteredTechStacks.filter(
        tech => ["react.js", "vue.js", "next.js"].some(name => 
          tech.name.toLowerCase().includes(name.toLowerCase())
        )
      );
      groups["UI Libraries & CSS"] = filteredTechStacks.filter(
        tech => tech.name.toLowerCase().includes("css") || tech.name.toLowerCase().includes("tailwind")
      );
      groups["Mobile Frameworks"] = filteredTechStacks.filter(
        tech => tech.name.toLowerCase().includes("native") || tech.name.toLowerCase().includes("flutter")
      );
      groups["Other Frontend Tools"] = filteredTechStacks.filter(
        tech => !Object.values(groups).flat().includes(tech)
      );
    } else if (activeCategory === "backend") {
      groups["Backend Frameworks"] = filteredTechStacks.filter(
        tech => ["express", "nest", "laravel", "codeigniter", "fiber", ".net"].some(name => 
          tech.name.toLowerCase().includes(name.toLowerCase())
        )
      );
      groups["API & Data Tools"] = filteredTechStacks.filter(
        tech => ["graphql", "trpc", "prisma", "orm"].some(name => 
          tech.name.toLowerCase().includes(name.toLowerCase())
        )
      );
      groups["AI & Machine Learning"] = filteredTechStacks.filter(
        tech => ["tensorflow", "keras", "scikit"].some(name => 
          tech.name.toLowerCase().includes(name.toLowerCase())
        )
      );
      groups["Other Backend Tools"] = filteredTechStacks.filter(
        tech => !Object.values(groups).flat().includes(tech)
      );
    } else if (activeCategory === "database") {
      groups["SQL Databases"] = filteredTechStacks.filter(
        tech => ["mysql", "postgresql", "sql", "mariadb", "cockroach"].some(name => 
          tech.name.toLowerCase().includes(name.toLowerCase())
        )
      );
      groups["NoSQL Databases"] = filteredTechStacks.filter(
        tech => ["mongodb", "firebase"].some(name => 
          tech.name.toLowerCase().includes(name.toLowerCase())
        )
      );
      groups["Database Tools"] = filteredTechStacks.filter(
        tech => ["prisma", "orm", "supabase"].some(name => 
          tech.name.toLowerCase().includes(name.toLowerCase())
        )
      );
      groups["Other Database Technologies"] = filteredTechStacks.filter(
        tech => !Object.values(groups).flat().includes(tech)
      );
    } else if (activeCategory === "devops") {
      groups["Cloud Platforms"] = filteredTechStacks.filter(
        tech => ["aws", "gcp", "azure", "vercel", "heroku", "netlify"].some(name => 
          tech.name.toLowerCase().includes(name.toLowerCase())
        )
      );
      groups["Containerization & Orchestration"] = filteredTechStacks.filter(
        tech => ["docker", "kubernetes", "helm"].some(name => 
          tech.name.toLowerCase().includes(name.toLowerCase())
        )
      );
      groups["CI/CD & Monitoring"] = filteredTechStacks.filter(
        tech => ["terraform", "datadog", "kafka"].some(name => 
          tech.name.toLowerCase().includes(name.toLowerCase())
        )
      );
      groups["Other DevOps Tools"] = filteredTechStacks.filter(
        tech => !Object.values(groups).flat().includes(tech)
      );
    } else if (activeCategory === "tools") {
      groups["Version Control"] = filteredTechStacks.filter(
        tech => ["git", "github", "gitlab", "bitbucket"].some(name => 
          tech.name.toLowerCase().includes(name.toLowerCase())
        )
      );
      groups["Design & Collaboration"] = filteredTechStacks.filter(
        tech => ["figma", "trello", "slack", "clockify"].some(name => 
          tech.name.toLowerCase().includes(name.toLowerCase())
        )
      );
      groups["Testing & API"] = filteredTechStacks.filter(
        tech => ["jest", "postman"].some(name => 
          tech.name.toLowerCase().includes(name.toLowerCase())
        )
      );
      groups["Other Tools"] = filteredTechStacks.filter(
        tech => !Object.values(groups).flat().includes(tech)
      );
    } else if (activeCategory === "aiml") {
      groups["AI & ML Libraries"] = techStacks.filter(
        tech => tech.category.includes("aiml") && 
        ["TensorFlow", "Keras", "scikit-learn"].some(name => 
          tech.name.toLowerCase().includes(name.toLowerCase())
        )
      );
      
      groups["Generative AI Tools"] = techStacks.filter(
        tech => tech.category.includes("aiml") && 
        ["ChatGPT", "Claude", "DeepSeek", "GitHub Copilot", "Gemini"].includes(tech.name)
      );
      
      groups["Other AI & ML Technologies"] = techStacks.filter(
        tech => tech.category.includes("aiml") && 
        !Object.values(groups).flat().includes(tech)
      );
    }
    
    Object.keys(groups).forEach(key => {
      if (groups[key].length === 0) {
        delete groups[key];
      }
    });
    
    return groups;
  }, [activeCategory]);

  const categories: {id: CategoryType, name: string}[] = [
    { id: "all", name: "All Technologies" },
    { id: "languages", name: "Languages" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "database", name: "Databases & Data Store" },
    { id: "aiml", name: "AI & ML" },
    { id: "devops", name: "DevOps" },
    { id: "tools", name: "Tools" }
  ];

  const categoryDescriptions: Record<string, string> = {
    "Programming Languages": "Languages I've mastered for building robust and efficient software solutions.",
    "Frontend Technologies": "Tools and frameworks I use to create responsive, interactive user interfaces.",
    "Backend Technologies": "Technologies I leverage to build scalable server-side applications and APIs.",
    "Databases & Data Store": "Database systems I'm proficient in for managing and optimizing data storage.",
    "DevOps & Cloud": "Cloud platforms and tools I use for deployment, CI/CD, and infrastructure management.",
    "Development Tools": "Utilities and platforms that enhance my development workflow and productivity.",
    "AI & Machine Learning": "Libraries and frameworks I use for data science, artificial intelligence, and machine learning.",
    "UI Frameworks": "Modern frameworks I use to build component-based, reactive user interfaces.",
    "UI Libraries & CSS": "Styling tools and libraries for creating beautiful, responsive designs.",
    "Mobile Frameworks": "Technologies I use for cross-platform mobile app development.",
    "Backend Frameworks": "Server-side frameworks powering my API and application backends.",
    "API & Data Tools": "Tools for API development, data validation, and client-server communication.",
    "SQL Databases": "Relational database systems I work with for structured data storage.",
    "NoSQL Databases": "Non-relational databases I use for flexible, scalable data solutions.",
    "Cloud Platforms": "Cloud services I leverage for hosting and scaling applications.",
    "Containerization & Orchestration": "Tools I use for containerizing and managing application deployments.",
    "Version Control": "Systems I use for code versioning and collaboration.",
    "Design & Collaboration": "Tools that support my design process and team collaboration.",
    "Generative AI Tools": "Advanced AI assistants and tools I use to enhance productivity and problem-solving capabilities.",
    "AI & ML Libraries": "Frameworks I use for machine learning model development and data analysis.",
    "Other AI & ML Technologies": "Additional AI technologies I leverage for various computational tasks.",
  };

  return (
    <section className="mt-24 px-4 sm:px-6 lg:px-8" id="tech_stacks">
      <div className="mb-16 relative" data-aos="fade-up">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2/3 h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-20"></div>
        </div>
        <h2 className="text-center relative z-10">
          <span className="bg-[#121212] px-6 inline-flex flex-col items-center">
            <span className="text-sm uppercase tracking-widest text-gray-400 font-medium mb-2">What I Work With</span>
            <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white relative">
              Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">Stacks</span> & Tools
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></span>
            </span>
          </span>
        </h2>
      </div>
      
      <div 
        className="mb-8 overflow-x-auto pb-4 scrollbar-hide" 
        data-aos="fade-up" 
        data-aos-delay="100"
        ref={containerRef}
      >
        <div className="flex space-x-3 justify-center min-w-max">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                activeCategory === category.id
                  ? "bg-red-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        {Object.entries(groupedTechStacks).map(([groupName, techs], groupIndex) => (
          <div key={groupName} className="mb-16">
            <div className="mb-8">
              <div className="flex items-center mb-2" data-aos="fade-up" data-aos-delay={groupIndex * 100}>
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
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-4 xl:gap-6 justify-items-center"
              data-aos="fade-up"
              data-aos-delay={groupIndex * 100 + 100}
            >
              {techs.map((tech, index) => (
                <TechIcon 
                  key={tech.name} 
                  name={tech.name} 
                  src={tech.src} 
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

const TechIcon = ({ 
  name, 
  src, 
  delay = 0 
}: { 
  name: string; 
  src: string; 
  delay?: number;
}) => {
  const [imageError, setImageError] = useState(false);
  
  const getSimpleIconUrl = (techName: string) => {
    const formattedName = techName.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/\./g, '-')
      .replace(/\+/g, 'plus')
      .replace(/#/g, 'sharp');
    
    return `https://cdn.simpleicons.org/${formattedName}`;
  };
  
  const iconMap: Record<string, string> = {
    "C++": "cplusplus",
    "C#": "csharp",
    "Python": "python",
    "Go": "go",
    "Dart": "dart",
    "Haskell": "haskell",
    "Java": "java",
    "JavaScript": "javascript",
    "TypeScript": "typescript",
    "PHP": "php",
    ".NET Core": "dotnet",
    "Node.js": "nodedotjs",
    "Next.js": "nextdotjs",
    "Express.js": "express",
    "Vue.js": "vuedotjs",
    "React.js": "react",
    "Nest.js": "nestjs",
    "React Native": "react",
    "Laravel": "laravel",
    "CodeIgniter": "codeigniter",
    "Flutter": "flutter",
    "Tailwind CSS": "tailwindcss",
    "GraphQL": "graphql",
    "Jest": "jest",
    "TensorFlow": "tensorflow",
    "Keras": "keras",
    "tRPC": "trpc",
    "Inertia.js": "inertiajs",
    "MySQL": "mysql",
    "PostgreSQL": "postgresql",
    "MariaDB": "mariadb",
    "SQLite": "sqlite",
    "MS SQL Server": "microsoftsqlserver",
    "MongoDB": "mongodb",
    "Redis": "redis",
    "Supabase": "supabase",
    "Cockroach DB": "cockroachlabs",
    "Firebase": "firebase",
    "AWS": "amazonaws",
    "GCP": "googlecloud",
    "Azure": "microsoftazure",
    "Vercel": "vercel",
    "Heroku": "heroku",
    "Netlify": "netlify",
    "Docker": "docker",
    "Kubernetes": "kubernetes",
    "Helm Charts": "helm",
    "Terraform": "terraform",
    "Datadog": "datadog",
    "Apache Kafka": "apachekafka",
    "Git": "git",
    "GitHub": "github",
    "GitLab": "gitlab",
    "Bitbucket": "bitbucket",
    "Figma": "figma",
    "Postman": "postman",
    "Trello": "trello",
    "Slack": "slack",
    "Jupyter Notebook": "jupyter",
    "GORM": "go",
    "TypeORM": "typeorm",
    "Prisma": "prisma",
    "scikit-learn": "scikitlearn",
    "DatoCMS": "datocms",
    "GraphiQL": "graphql",
    "Gofiber": "go",
    "Clockify": "clockify",
    "Filament": "filament",
    "VS Code": "visualstudiocode",
    "ChatGPT": "openai",
    "DeepSeek": "openai",
    "Claude": "claude",
    "GitHub Copilot": "githubcopilot",
    "Cursor": "cursor",
    "Gemini": "google",
  };
  
  const getCustomIconUrl = (techName: string) => {
    if (iconMap[techName]) {
      return `https://cdn.simpleicons.org/${iconMap[techName]}`;
    }
    
    if (techName.includes("ORM")) {
      return `https://cdn.simpleicons.org/database`;
    }
    
    if (techName.includes("SQL")) {
      return `https://cdn.simpleicons.org/database`;
    }
    
    return null;
  };

  return (
    <div 
      className="relative group w-20 h-20 sm:w-24 sm:h-24 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl select-none shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-red-600/20 hover:-translate-y-1 border border-gray-700"
      data-aos="zoom-in"
      data-aos-delay={delay}
    >
      <div className="absolute inset-[1px] bg-gray-900 rounded-[10px] flex items-center justify-center overflow-hidden">
        {!imageError ? (
          <Image
            src={src}
            alt={name}
            className="w-3/5 h-3/5 object-contain transition-transform duration-300 group-hover:scale-110 filter brightness-110 contrast-110"
            width={60}
            height={60}
            onError={() => setImageError(true)}
          />
        ) : (
          <img
            src={getCustomIconUrl(name) || getSimpleIconUrl(name)}
            alt={name}
            className="w-3/5 h-3/5 object-contain transition-transform duration-300 group-hover:scale-110 filter brightness-110 contrast-110"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              const container = e.currentTarget.parentElement;
              if (container) {
                const textEl = document.createElement("div");
                textEl.className = "text-red-500 font-bold text-center text-sm";
                textEl.textContent = name.substring(0, 2).toUpperCase();
                container.appendChild(textEl);
              }
            }}
          />
        )}
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
        <p className="text-white text-center text-sm font-medium px-2">{name}</p>
      </div>
    </div>
  );
};

const techStacks: TechStack[] = [
  { name: "Python", src: "/tech_stacks/python.svg", category: ["languages", "backend"] },
  { name: "Haskell", src: "/tech_stacks/haskell.svg", category: ["languages"] },
  { name: "C", src: "/tech_stacks/c.svg", category: ["languages"] },
  { name: "Java", src: "/tech_stacks/java.svg", category: ["languages", "backend"] },
  { name: "HTML", src: "/tech_stacks/html.svg", category: ["frontend"] },
  { name: "CSS", src: "/tech_stacks/css.svg", category: ["frontend"] },
  { name: "Tailwind CSS", src: "/tech_stacks/tailwindcss.svg", category: ["frontend"] },
  { name: "JavaScript", src: "/tech_stacks/javascript.svg", category: ["languages", "frontend", "backend"] },
  { name: "TypeScript", src: "/tech_stacks/typescript.svg", category: ["languages", "frontend", "backend"] },
  { name: "PHP", src: "/tech_stacks/php.svg", category: ["languages", "backend"] },
  { name: "Go", src: "/tech_stacks/go.svg", category: ["languages", "backend"] },
  { name: "GraphQL", src: "/tech_stacks/graphql.svg", category: ["backend"] },
  { name: "SQL", src: "/tech_stacks/sql.svg", category: ["database"] },
  { name: "Node.js", src: "/tech_stacks/node.svg", category: ["backend"] },
  { name: "Express.js", src: "/tech_stacks/express.svg", category: ["backend"] },
  { name: "React.js", src: "/tech_stacks/react.svg", category: ["frontend"] },
  { name: "Next.js", src: "/tech_stacks/next.svg", category: ["frontend", "backend"] },
  { name: "Vue.js", src: "/tech_stacks/vue.svg", category: ["frontend"] },
  { name: "CodeIgniter", src: "/tech_stacks/codeigniter.svg", category: ["backend"] },
  { name: "Laravel", src: "/tech_stacks/laravel.svg", category: ["backend"] },
  { name: "Nest.js", src: "/tech_stacks/nest.svg", category: ["backend"] },
  { name: "Gofiber", src: "/tech_stacks/fiber.svg", category: ["backend"] },
  { name: "MySQL", src: "/tech_stacks/mysql.svg", category: ["database"] },
  { name: "PostgreSQL", src: "/tech_stacks/postgresql.svg", category: ["database"] },
  { name: "MariaDB", src: "/tech_stacks/mariadb.svg", category: ["database"] },
  { name: "SQLite", src: "/tech_stacks/sqlite.svg", category: ["database"] },
  { name: "MongoDB", src: "/tech_stacks/mongodb.svg", category: ["database"] },
  { name: "Supabase", src: "/tech_stacks/supabase.svg", category: ["database", "backend"] },
  { name: "Cockroach DB", src: "/tech_stacks/cockroachdb1.svg", category: ["database"] },
  { name: "AWS", src: "/tech_stacks/aws.svg", category: ["devops"] },
  { name: "GCP", src: "/tech_stacks/gcp.svg", category: ["devops"] },
  { name: "Azure", src: "/tech_stacks/azure.svg", category: ["devops"] },
  { name: "Firebase", src: "/tech_stacks/firebase.svg", category: ["devops", "database"] },
  { name: "Vercel", src: "/tech_stacks/vercel.svg", category: ["devops"] },
  { name: "Heroku", src: "/tech_stacks/heroku.svg", category: ["devops"] },
  { name: "Netlify", src: "/tech_stacks/netlify.svg", category: ["devops"] },
  { name: "Docker", src: "/tech_stacks/docker.svg", category: ["devops"] },
  { name: "Git", src: "/tech_stacks/git.svg", category: ["tools"] },
  { name: "GitHub", src: "/tech_stacks/github.svg", category: ["tools"] },
  { name: "GitLab", src: "/tech_stacks/gitlab.svg", category: ["tools"] },
  { name: "Bitbucket", src: "/tech_stacks/bitbucket.svg", category: ["tools"] },
  { name: "React Native", src: "/tech_stacks/react_native.svg", category: ["frontend"] },
  { name: "TensorFlow", src: "/tech_stacks/tensorflow.svg", category: ["aiml"] },
  { name: "Keras", src: "/tech_stacks/keras.svg", category: ["aiml"] },
  { name: "scikit-learn", src: "/tech_stacks/scikit-learn.svg", category: ["aiml"] },
  { name: "Jest", src: "/tech_stacks/jest.svg", category: ["tools"] },
  { name: "Postman", src: "/tech_stacks/postman.svg", category: ["tools"] },
  { name: "Figma", src: "/tech_stacks/figma.svg", category: ["tools"] },
  { name: "Trello", src: "/tech_stacks/trello.svg", category: ["tools"] },
  { name: "Slack", src: "/tech_stacks/slack.svg", category: ["tools"] },
  { name: "C++", src: "/tech_stacks/cpp.png", category: ["languages"] },
  { name: "C#", src: "/tech_stacks/csharp.png", category: ["languages"] },
  { name: "Dart", src: "/tech_stacks/dart.svg", category: ["languages"] },
  { name: ".NET Core", src: "/tech_stacks/dotnet.svg", category: ["backend"] },
  { name: "GORM", src: "/tech_stacks/gorm.png", category: ["backend", "database"] },
  { name: "Prisma", src: "/tech_stacks/prisma.svg", category: ["backend", "database"] },
  { name: "MS SQL Server", src: "/tech_stacks/msserver.png", category: ["database"] },
  { name: "DatoCMS", src: "/tech_stacks/datocms.svg", category: ["tools", "backend"] },
  { name: "GraphiQL", src: "/tech_stacks/graphiql.svg", category: ["tools"] },
  { name: "tRPC", src: "/tech_stacks/trpc.svg", category: ["backend"] },
  { name: "TypeORM", src: "/tech_stacks/typeorm.png", category: ["backend", "database"] },
  { name: "Inertia.js", src: "/tech_stacks/inertiajs.png", category: ["frontend"] },
  { name: "Filament", src: "/tech_stacks/filament.png", category: ["backend"] },
  { name: "Flutter", src: "/tech_stacks/flutter.svg", category: ["frontend"] },
  { name: "Kubernetes", src: "/tech_stacks/kubernetes.svg", category: ["devops"] },
  { name: "Helm Charts", src: "/tech_stacks/helm.svg", category: ["devops"] },
  { name: "Terraform", src: "/tech_stacks/terraform.svg", category: ["devops"] },
  { name: "Datadog", src: "/tech_stacks/datadog.svg", category: ["devops", "tools"] },
  { name: "Apache Kafka", src: "/tech_stacks/kafka.svg", category: ["backend", "devops"] },
  { name: "Jupyter Notebook", src: "/tech_stacks/jupyter.svg", category: ["tools"] },
  { name: "Clockify", src: "/tech_stacks/clockify.svg", category: ["tools"] },
  { name: "Redis", src: "/tech_stacks/redis.svg", category: ["database", "backend"] },
  { name: "VS Code", src: "/tech_stacks/vscode.png", category: ["tools"] },
  { name: "ChatGPT", src: "/tech_stacks/chatgpt.svg", category: ["tools", "aiml"] },
  { name: "DeepSeek", src: "/tech_stacks/deepseek.png", category: ["tools", "aiml"] },
  { name: "Claude", src: "/tech_stacks/claude.svg", category: ["tools", "aiml"] },
  { name: "GitHub Copilot", src: "/tech_stacks/github-copilot.svg", category: ["tools", "aiml"] },
  { name: "Cursor", src: "/tech_stacks/cursor.svg", category: ["tools", "aiml"] },
  { name: "Gemini", src: "/tech_stacks/gemini.svg", category: ["tools", "aiml"] },
];

export default TechStackSection;
