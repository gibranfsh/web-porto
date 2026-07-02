export type AwardType = "national" | "international" | "university";

export type Award = {
  id: string;
  title: string;
  date: string;
  type: AwardType;
  placement: string;
  highlights: string[];
  description: string[];
  technologies: string[];
};

export const awards: Award[] = [
  {
    id: "alibaba-genai-2025",
    title: "Honorable Mention at Alibaba Cloud GenAI Hackathon 2025 Indonesia",
    date: "May 2025",
    type: "national",
    placement: "Honorable Mention (Top 4)",
    highlights: [
      "Secured Honorable Mention (Top 4) out of ~2000 participants in a 24-hour national hackathon.",
      "Developed GoShield, an AI-powered safety intelligence system for transport rides.",
      "Utilized ~99% Alibaba Cloud stack including Qwen Plus, PAI-EAS, OSS, and ApsaraDB RDS.",
      "Contributed as brainstormer, fullstack engineer, and cloud system integrator.",
    ],
    description: [
      "Participated in the Alibaba Cloud GenAI Hackathon 2025 Indonesia, a 24-hour hackathon open-to-public national-scale competition with ~2000 participants, organized by Alibaba Cloud in collaboration with GoTo Group. My team of four secured Honorable Mention (Top 4) out of hundreds of submitted projects.",
      "Developed GoShield, an AI-powered safety intelligence system for transport rides, focused on a passenger-centered care approach to detect and respond to threats in real time using cloud-based LLM infrastructure.",
      "Utilized ~99% Alibaba Cloud tech stack, including Qwen Plus (Tongyi Qianwen) for Risk Assessment Agent and Summarizer Agent, STT (Intelligent Speech Interaction), PAI-EAS, PAI-DSW, OSS, ApsaraDB RDS (PostgreSQL), and AnalyticDB.",
      "Built with modern tech: FastAPI + Python + SSE + LangGraph (backend), and Next.js + Capacitor + TailwindCSS + TypeScript (frontend), deployed using Alibaba ECS.",
      "Contributed as a brainstormer, fullstack engineer, and cloud system integrator.",
    ],
    technologies: ["Qwen", "FastAPI", "LangGraph", "Next.js", "PostgreSQL"],
  },
  {
    id: "garuda-hacks-2024",
    title: "2nd Place Winner at Garuda Hacks 5.0 Hackathon 2024",
    date: "July 2024",
    type: "international",
    placement: "2nd Place",
    highlights: [
      "2nd Place out of 105 teams (364 participants) in the \"Strongest Together\" path.",
      "Received The Wolfram Award (top 5 submissions across all tracks).",
      "Built IRIS, an IoT-based mobile app for safety and evidence collection using AI.",
      "Served as Hustler, UI/UX Designer, and Fullstack Engineer.",
    ],
    description: [
      "Participated in Garuda Hacks 5.0, a 36-hour international hackathon, where my team of four secured 2nd Place out of 105 teams (364 participants) in the \"Strongest Together\" path. We also received The Wolfram Award (awarded to the top 5 hackathon submissions from all tracks). Participants came from various countries, including the USA, Canada, India, Singapore, United Kingdom, and Indonesia.",
      "Our innovation, IRIS, is an advanced IoT-based mobile application designed to enhance security and user convenience using AI solutions. IRIS focuses on preventing and responding to domestic violence and sexual assault by offering a comprehensive safety and evidence collection approach.",
      "Served as Hustler, UI/UX Designer, and Fullstack Engineer, contributing to IRIS's design and development.",
    ],
    technologies: ["IoT", "AI", "Mobile"],
  },
  {
    id: "itb-pra-gemastik-2024",
    title: "1st Winner ITB Online Hackathon Pra-Gemastik XVII: Software Engineering Competition",
    date: "June 2024",
    type: "university",
    placement: "1st Winner",
    highlights: [
      "Led a team of three to win first place in the Software Engineering competition.",
      "Developed a comprehensive software solution addressing real-world challenges.",
      "Demonstrated expertise in software architecture and problem-solving under time constraints.",
    ],
    description: [
      "Led a team of three to win first place in the ITB Pra-Gemastik XVII Software Engineering competition, demonstrating strong technical leadership and collaborative skills.",
      "Developed a comprehensive software solution that addressed real-world challenges while adhering to competition requirements for innovation, usability, and technical implementation.",
      "Showcased expertise in software architecture, coding practices, and problem-solving under time constraints.",
    ],
    technologies: ["Software Engineering"],
  },
  {
    id: "slashcom-2024",
    title: "Top 5 SLASHCOM x HACKATHON Competition 2024",
    date: "May 2024",
    type: "national",
    placement: "Top 5",
    highlights: [
      "Qualified as one of the Top 5 teams out of 20 participating teams.",
      "Brought new innovations and implementations using IT knowledge.",
      "Demonstrated problem-solving, technical expertise, and collaborative teamwork.",
    ],
    description: [
      "Successfully qualified as one of the Top 5 teams out of 20 participating teams, bringing new innovations and implementations using IT knowledge.",
      "Demonstrated problem-solving skills, technical expertise, and collaborative teamwork throughout the competitive hackathon environment.",
    ],
    technologies: [],
  },
  {
    id: "informatics-festival-2023",
    title: "Top 5 Web Development Competition Informatics Festival 2023 by Padjajaran University",
    date: "October 2023",
    type: "national",
    placement: "Top 5",
    highlights: [
      "Top 5 in web development competition focused on real-world economic issues.",
      "Developed \"Danain\", a platform connecting startups with investors.",
      "Architected backend infrastructure, RESTful APIs, and database schemas as Backend Engineer.",
    ],
    description: [
      "Received recognition in a Hackathon focused on real-world economic issues, demonstrating adeptness in addressing economic challenges and fostering entrepreneurship by developing a website platform called \"Danain\", connecting startups with investors.",
      "As a Backend Engineer, I played a pivotal role in architecting and developing the backend infrastructure, ensuring robust functionality and seamless integration with frontend components. This involved designing database schemas, implementing RESTful API endpoints, and optimizing server-side processes for optimal performance and scalability.",
    ],
    technologies: ["REST API", "Database"],
  },
  {
    id: "slashcom-2023",
    title: "Best Idea SLASHCOM x HACKATHON Competition 2023 by UPNVJ",
    date: "June 2023",
    type: "national",
    placement: "Best Idea",
    highlights: [
      "Best Idea award for startup supporting SDGs 4 and 8 (education and economic growth).",
      "Addressed challenges faced by students in direct learning through real projects.",
      "Spearheaded fullstack development ensuring robust client–server communication.",
    ],
    description: [
      "Propose a startup that supports SDGs 4 and 8, focusing on the quality of education and economic growth, by addressing the challenges faced by students in direct learning through real projects.",
      "As a full stack engineer, I spearheaded the development of both backend and some of the frontend components for our proposed startup project, ensuring robust communication between client and server interfaces.",
      "Issued by Universitas Pembangunan Nasional \"Veteran\" Jakarta (UPNVJ).",
    ],
    technologies: ["Laravel", "Fullstack"],
  },
];

export type AwardFilter = "all" | AwardType;

export const awardFilters = [
  { id: "all" as const, label: "All" },
  { id: "national" as const, label: "National" },
  { id: "international" as const, label: "International" },
  { id: "university" as const, label: "University" },
];

export function filterAwards(filter: AwardFilter): Award[] {
  if (filter === "all") return awards;
  return awards.filter((award) => award.type === filter);
}
