export type CategoryType =
  | "all"
  | "languages"
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "tools"
  | "aiml";

export type TechStack = {
  name: string;
  thesvgSlug: string;
  category: CategoryType[];
};

export const AI_DEVELOPER_TOOLS = [
  "ChatGPT",
  "Codex",
  "Claude",
  "Claude Code",
  "DeepSeek",
  "GitHub Copilot",
  "Gemini",
  "Cursor",
  "Antigravity",
] as const;

export type AiDeveloperTool = (typeof AI_DEVELOPER_TOOLS)[number];

export const techStacks: TechStack[] = [
  { name: "Python", thesvgSlug: "python", category: ["languages", "backend"] },
  { name: "Haskell", thesvgSlug: "haskell", category: ["languages"] },
  { name: "C", thesvgSlug: "c", category: ["languages"] },
  { name: "Java", thesvgSlug: "java", category: ["languages", "backend"] },
  { name: "HTML", thesvgSlug: "html5", category: ["frontend"] },
  { name: "CSS", thesvgSlug: "css3", category: ["frontend"] },
  { name: "Tailwind CSS", thesvgSlug: "tailwind-css", category: ["frontend"] },
  { name: "JavaScript", thesvgSlug: "javascript", category: ["languages", "frontend", "backend"] },
  { name: "TypeScript", thesvgSlug: "typescript", category: ["languages", "frontend", "backend"] },
  { name: "PHP", thesvgSlug: "php", category: ["languages", "backend"] },
  { name: "Go", thesvgSlug: "go", category: ["languages", "backend"] },
  { name: "GraphQL", thesvgSlug: "graphql", category: ["backend"] },
  { name: "SQL", thesvgSlug: "sql", category: ["database"] },
  { name: "Node.js", thesvgSlug: "nodedotjs", category: ["backend"] },
  { name: "Express.js", thesvgSlug: "express", category: ["backend"] },
  { name: "React.js", thesvgSlug: "react", category: ["frontend"] },
  { name: "Next.js", thesvgSlug: "nextdotjs", category: ["frontend", "backend"] },
  { name: "Vue.js", thesvgSlug: "vuedotjs", category: ["frontend"] },
  { name: "CodeIgniter", thesvgSlug: "codeigniter", category: ["backend"] },
  { name: "Laravel", thesvgSlug: "laravel", category: ["backend"] },
  { name: "Nest.js", thesvgSlug: "nestjs", category: ["backend"] },
  { name: "Gofiber", thesvgSlug: "gofiber", category: ["backend"] },
  { name: "MySQL", thesvgSlug: "mysql", category: ["database"] },
  { name: "PostgreSQL", thesvgSlug: "postgresql", category: ["database"] },
  { name: "MariaDB", thesvgSlug: "mariadb", category: ["database"] },
  { name: "SQLite", thesvgSlug: "sqlite", category: ["database"] },
  { name: "MongoDB", thesvgSlug: "mongodb", category: ["database"] },
  { name: "Supabase", thesvgSlug: "supabase", category: ["database", "backend"] },
  { name: "Cockroach DB", thesvgSlug: "cockroach-labs", category: ["database"] },
  { name: "AWS", thesvgSlug: "amazon-web-services", category: ["devops"] },
  { name: "GCP", thesvgSlug: "google-cloud", category: ["devops"] },
  { name: "Azure", thesvgSlug: "microsoft-azure", category: ["devops"] },
  { name: "Firebase", thesvgSlug: "firebase", category: ["devops", "database"] },
  { name: "Vercel", thesvgSlug: "vercel", category: ["devops"] },
  { name: "Heroku", thesvgSlug: "heroku", category: ["devops"] },
  { name: "Netlify", thesvgSlug: "netlify", category: ["devops"] },
  { name: "Docker", thesvgSlug: "docker", category: ["devops"] },
  { name: "Git", thesvgSlug: "git", category: ["tools"] },
  { name: "GitHub", thesvgSlug: "github", category: ["tools"] },
  { name: "GitLab", thesvgSlug: "gitlab", category: ["tools"] },
  { name: "Bitbucket", thesvgSlug: "bitbucket", category: ["tools"] },
  { name: "React Native", thesvgSlug: "reactnative", category: ["frontend"] },
  { name: "TensorFlow", thesvgSlug: "tensorflow", category: ["aiml"] },
  { name: "Keras", thesvgSlug: "keras", category: ["aiml"] },
  { name: "scikit-learn", thesvgSlug: "scikit-learn", category: ["aiml"] },
  { name: "Jest", thesvgSlug: "jest", category: ["tools"] },
  { name: "Postman", thesvgSlug: "postman", category: ["tools"] },
  { name: "Figma", thesvgSlug: "figma", category: ["tools"] },
  { name: "Trello", thesvgSlug: "trello", category: ["tools"] },
  { name: "Slack", thesvgSlug: "slack", category: ["tools"] },
  { name: "C++", thesvgSlug: "cplusplus", category: ["languages"] },
  { name: "C#", thesvgSlug: "csharp", category: ["languages"] },
  { name: "Dart", thesvgSlug: "dart", category: ["languages"] },
  { name: ".NET Core", thesvgSlug: "dotnet", category: ["backend"] },
  { name: "GORM", thesvgSlug: "gorm", category: ["backend", "database"] },
  { name: "Prisma", thesvgSlug: "prisma", category: ["backend", "database"] },
  { name: "MS SQL Server", thesvgSlug: "microsoft-sql-server", category: ["database"] },
  { name: "DatoCMS", thesvgSlug: "datocms", category: ["tools", "backend"] },
  { name: "GraphiQL", thesvgSlug: "graphql", category: ["tools"] },
  { name: "tRPC", thesvgSlug: "trpc", category: ["backend"] },
  { name: "TypeORM", thesvgSlug: "typeorm", category: ["backend", "database"] },
  { name: "Inertia.js", thesvgSlug: "inertiajs", category: ["frontend"] },
  { name: "Filament", thesvgSlug: "filament", category: ["backend"] },
  { name: "Flutter", thesvgSlug: "flutter", category: ["frontend"] },
  { name: "Kubernetes", thesvgSlug: "kubernetes", category: ["devops"] },
  { name: "Helm Charts", thesvgSlug: "helm", category: ["devops"] },
  { name: "Terraform", thesvgSlug: "terraform", category: ["devops"] },
  { name: "Datadog", thesvgSlug: "datadog", category: ["devops", "tools"] },
  { name: "Apache Kafka", thesvgSlug: "apache-kafka", category: ["backend", "devops"] },
  { name: "Jupyter Notebook", thesvgSlug: "jupyter", category: ["tools"] },
  { name: "Clockify", thesvgSlug: "clockify", category: ["tools"] },
  { name: "Redis", thesvgSlug: "redis", category: ["database", "backend"] },
  { name: "VS Code", thesvgSlug: "visual-studio-code", category: ["tools"] },
  { name: "ChatGPT", thesvgSlug: "openai-chatgpt", category: ["tools", "aiml"] },
  { name: "Codex", thesvgSlug: "codex-openai", category: ["tools", "aiml"] },
  { name: "DeepSeek", thesvgSlug: "deepseek", category: ["tools", "aiml"] },
  { name: "Claude", thesvgSlug: "claude", category: ["tools", "aiml"] },
  { name: "Claude Code", thesvgSlug: "claude-code", category: ["tools", "aiml"] },
  { name: "GitHub Copilot", thesvgSlug: "github-copilot", category: ["tools", "aiml"] },
  { name: "Cursor", thesvgSlug: "cursor", category: ["tools", "aiml"] },
  { name: "Gemini", thesvgSlug: "google-gemini", category: ["tools", "aiml"] },
  { name: "Antigravity", thesvgSlug: "antigravity-google", category: ["tools", "aiml"] },
];
