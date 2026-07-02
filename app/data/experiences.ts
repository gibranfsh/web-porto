export type ExperienceType = "leadership" | "internship";

export type Experience = {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  type: ExperienceType;
  highlights: string[];
  description: string[];
  technologies: string[];
  logoUrl: string;
};

export const experiences: Experience[] = [
  {
    id: "saakuru",
    title: "Lead Full Stack AI Engineer",
    company: "Saakuru Labs & SiloTech.xyz",
    location: "Singapore, Singapore",
    period: "July 2025 - Present",
    type: "leadership",
    highlights: [
      "Lead a team of 3 international software engineers, providing technical direction.",
      "Architect and implement scalable AI-agent systems across backend, frontend, and AI integration.",
      "Pioneered the company's agentic AI infrastructure for scalable, production-ready AI solutions.",
      "Contributed to the AI Agents Marketplace ecosystem across Saakuru, SiloTech, and Mind Extension.",
    ],
    description: [
      "Lead a team of 3 international software engineers (consisting of mid-level and senior software engineers), providing technical directions.",
      "Architect and implement scalable AI-agent systems across backend, frontend, and AI integration.",
      "Drive end-to-end development, from system design to deployment and optimization.",
      "Ensure reliability, performance, and scalability of AI-driven applications.",
      "Collaborate cross-functionally to align engineering outcomes with business goals.",
      "Designed and optimized system prompts and LLM integrations, boosting response accuracy and contextual reliability across AI agents.",
      "Collaborated on building and scaling agentic AI architectures and memory systems, enabling agents to retain context across sessions and deliver more human-like interactions.",
      "Developed agent configuration workflows (prompt design, behavioral tuning, accuracy refinement), improving overall agent performance and adaptability.",
      "Delivered frontend and backend features that made AI capabilities accessible to end users, ensuring seamless product integration.",
      "Pioneered the company's agentic AI infrastructure, laying the foundation for scalable, production-ready AI solutions.",
      "Contributed directly to the success of the AI Agents Marketplace ecosystem, accelerating Saakuru Labs', SiloTech.xyz's, and Mind Extension's product innovation and market differentiation.",
    ],
    technologies: ["LLM", "AI Agents", "Prompt Engineering"],
    logoUrl: "/work_experiences/saakurulabs_logo.jpeg",
  },
  {
    id: "grab",
    title: "Software Engineer Intern",
    company: "Grab",
    location: "Jakarta, Indonesia",
    period: "September 2024 - December 2024",
    type: "internship",
    highlights: [
      "Selected as 1 of 50 interns from 19,700+ applicants (0.25% acceptance rate).",
      "Reduced daily duplicate-transaction failures from ~1,500–2,000 to zero.",
      "Eliminated ~3,000 potential daily error logs by fixing Kafka and Redis issues.",
      "Decommissioned 10 deprecated services, reducing GrabKios operational costs.",
    ],
    description: [
      "Selected as one of the 50 interns out of over 19,700 applicants, with an acceptance rate of 0.25%.",
      "Chosen as the GCAP Brand Ambassador of Tech Engineering 2024, acting as a point of contact between tech engineering interns and the HR Team.",
      "Successfully reduced daily failed transactions due to duplicate transactions from approximately 1,500-2,000 to zero, achieving a 100% error log elimination.",
      "Eliminated around 3,000 potential daily error logs across three services by fixing disconnected Apache Kafka issues and resolved ciphertext errors caused by Redis.",
      "Decommissioned 10 deprecated services, reducing annual operational costs for GrabKios. Utilized Kubernetes (k8s), Helm Charts, Terraform, AWS services, Datadog, MariaDB, CI/CD, Docker, and Apache Kafka.",
      "Designed and developed the Status Checking for Biller Recharge History feature from scratch, including building engineering specifications.",
    ],
    technologies: [
      "Kubernetes",
      "Helm",
      "Terraform",
      "AWS",
      "Kafka",
      "Redis",
      "Docker",
      "Datadog",
      "MariaDB",
    ],
    logoUrl: "/work_experiences/grab.png",
  },
  {
    id: "bi",
    title: "Software Engineer Intern",
    company: "Central Bank of Indonesia",
    location: "Jakarta, Indonesia",
    period: "June 2024 - August 2024",
    type: "internship",
    highlights: [
      "Developed BI-Presence internal face recognition presence management system.",
      "Engineered RESTful API endpoints using .NET Core with repository pattern.",
      "Designed system architecture spanning frontend, backend, ML, camera, and storage.",
      "Integrated frontend, backend, and ML components through seamless API connections.",
    ],
    description: [
      "Developed an internal presence management system using a face recognition algorithm called \"BI-Presence\".",
      "Engineered robust RESTful API endpoints using the .NET Core framework with a repository pattern.",
      "Designed the system architecture encompassing front-end, back-end, machine learning, camera integration, database, and storage.",
      "Integrated front-end, back-end, and machine learning components through seamless API connections.",
      "Utilized technologies like C#, .NET Core, Typescript, Vue.js, Tailwind CSS, Machine Learning, and MSQL Server.",
    ],
    technologies: [
      ".NET Core",
      "C#",
      "TypeScript",
      "Vue.js",
      "Machine Learning",
      "MS SQL Server",
    ],
    logoUrl: "/work_experiences/bi.jpg",
  },
  {
    id: "dot",
    title: "Backend Engineer Intern",
    company: "DOT Indonesia",
    location: "Bandung, Indonesia",
    period: "December 2023 - April 2024",
    type: "internship",
    highlights: [
      "Migrated internal HRIS from Laravel/Inertia to Laravel/Filament for ~110 employees.",
      "Created database documentation for General Secretariat of DPR RI website revamp.",
      "Implemented secure APIs with high scalability and low-cost queries.",
    ],
    description: [
      "Created database documentation for revamped General Secretariat of DPR RI website.",
      "Mirrored internal HRIS website from Laravel/Inertia to Laravel/Filament (Fullstack) that serves for ±110 employees.",
      "Implemented secure APIs with high scalability and low cost queries.",
      "Utilized technologies like Laravel, PHP, Vue.js, Inertia, MariaDB, Filament, TailwindCSS, and Postman API.",
    ],
    technologies: ["Laravel", "PHP", "Vue.js", "Filament", "MariaDB", "Inertia"],
    logoUrl: "/work_experiences/dot.jpg",
  },
  {
    id: "inkubator-it",
    title: "Software Engineer",
    company: "Inkubator IT HMIF ITB",
    location: "Bandung, Indonesia",
    period: "December 2022 - January 2024",
    type: "leadership",
    highlights: [
      "Completed 5 website development projects for external clients during undergraduate studies.",
      "Collaborated with UI/UX designers, PMs, and frontend developers across domains.",
      "Built websites for mental health, village services, dormitories, and language courses.",
    ],
    description: [
      "Successfully completed 5 website development projects for external clients/stakeholders during undergraduate studies.",
      "Collaborated with UI/UX designers, project managers, and frontend developers on projects in various domains.",
      "Developed websites for mental health services, village services, dormitories, and English language courses.",
      "Utilized technologies like TypeScript, Next.js, Prisma ORM, MongoDB, PostgreSQL, MySQL, AWS, GCP, Docker, and Postman.",
    ],
    technologies: [
      "TypeScript",
      "Next.js",
      "Prisma",
      "MongoDB",
      "PostgreSQL",
      "AWS",
      "GCP",
      "Docker",
    ],
    logoUrl: "/work_experiences/inkubatorit.png",
  },
];

export type ExperienceFilter = "all" | "leadership" | "internship";

export const experienceFilters = [
  { id: "all" as const, label: "All" },
  { id: "leadership" as const, label: "Leadership" },
  { id: "internship" as const, label: "Internships" },
];

export function filterExperiences(filter: ExperienceFilter): Experience[] {
  if (filter === "all") return experiences;
  return experiences.filter((exp) => exp.type === filter);
}
