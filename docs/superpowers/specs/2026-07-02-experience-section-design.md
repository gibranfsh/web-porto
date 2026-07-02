# Experience Section Redesign — Design Spec

**Date:** 2026-07-02  
**Project:** web-porto  
**Section:** `#experiences`

## Goal

Match the cyber HUD visual language used in Tech Stacks and Awards while improving scanability via impact highlights and expandable role cards.

## Layout

- Cyber HUD section header (eyebrow, gradient title, red divider)
- Vertical timeline with centered rail on desktop, left rail on mobile
- Alternating cards on `md+`; full-width stacked cards on mobile
- Filter tabs: All | Leadership | Internships

## Interaction

- Each card shows 3–4 highlights when collapsed
- Tech tags visible in collapsed state
- "View full details" / "Collapse" toggle per card (`btn-cyber btn-cyber-ghost`)
- First role (Saakuru) expanded by default; others collapsed
- No hover translate — border/glow only

## Filter Mapping

| Filter | Roles |
|--------|-------|
| All | All 5 roles |
| Leadership | Saakuru Labs, Inkubator IT |
| Internships | Grab, Central Bank of Indonesia, DOT Indonesia |

## Highlight Mappings

### Saakuru Labs & SiloTech.xyz (leadership)

1. Lead a team of 3 international software engineers, providing technical direction.
2. Architect and implement scalable AI-agent systems across backend, frontend, and AI integration.
3. Pioneered the company's agentic AI infrastructure for scalable, production-ready AI solutions.
4. Contributed to the AI Agents Marketplace ecosystem across Saakuru, SiloTech, and Mind Extension.

**Technologies:** LLM, AI Agents, Prompt Engineering

### Grab (internship)

1. Selected as 1 of 50 interns from 19,700+ applicants (0.25% acceptance rate).
2. Reduced daily duplicate-transaction failures from ~1,500–2,000 to zero.
3. Eliminated ~3,000 potential daily error logs by fixing Kafka and Redis issues.
4. Decommissioned 10 deprecated services, reducing GrabKios operational costs.

**Technologies:** Kubernetes, Helm, Terraform, AWS, Kafka, Redis, Docker, Datadog, MariaDB

### Central Bank of Indonesia (internship)

1. Developed BI-Presence internal face recognition presence management system.
2. Engineered RESTful API endpoints using .NET Core with repository pattern.
3. Designed system architecture spanning frontend, backend, ML, camera, and storage.
4. Integrated frontend, backend, and ML components through seamless API connections.

**Technologies:** .NET Core, C#, TypeScript, Vue.js, Machine Learning, MS SQL Server

### DOT Indonesia (internship)

1. Migrated internal HRIS from Laravel/Inertia to Laravel/Filament for ~110 employees.
2. Created database documentation for General Secretariat of DPR RI website revamp.
3. Implemented secure APIs with high scalability and low-cost queries.

**Technologies:** Laravel, PHP, Vue.js, Filament, MariaDB, Inertia

### Inkubator IT HMIF ITB (leadership)

1. Completed 5 website development projects for external clients during undergraduate studies.
2. Collaborated with UI/UX designers, PMs, and frontend developers across domains.
3. Built websites for mental health, village services, dormitories, and language courses.

**Technologies:** TypeScript, Next.js, Prisma, MongoDB, PostgreSQL, AWS, GCP, Docker

## Accessibility

- `aria-expanded` on expand buttons
- `h3` per role title
- Timeline rail decorative (`aria-hidden`)
- `prefers-reduced-motion`: disable parallax and pulse

## Files

- `app/data/experiences.ts`
- `app/components/experience/ExperienceCard.tsx`
- `app/components/ExperienceSection.tsx`
- `app/globals.css` (experience cyber utilities)
