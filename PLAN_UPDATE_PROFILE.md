# Plan: Update Profile with New Position & Features

## Changes Required

### 0. Add New Achievement - Alibaba Cloud GenAI Hackathon 2025
**File:** `app/components/AwardSection.tsx`

**Add new entry to `awards` array:**
- **Title:** Honorable Mention at Alibaba Cloud GenAI Hackathon 2025 Indonesia
- **Date:** May 2025
- **Type:** national
- **Description:**
  - Participated in the Alibaba Cloud GenAI Hackathon 2025 Indonesia, a 24-hour hackathon open-to-public national-scale competition with ~2000 participants, organized by Alibaba Cloud in collaboration with GoTo Group. My team of four secured Honorable Mention (Top 4) out of hundreds of submitted projects.
  - Developed GoShield, an AI-powered safety intelligence system for transport rides, focused on a passenger-centered care approach to detect and respond to threats in real time using cloud-based LLM infrastructure.
  - Utilized ~99% Alibaba Cloud tech stack, including Qwen Plus (Tongyi Qianwen) for Risk Assessment Agent and Summarizer Agent, STT (Intelligent Speech Interaction), PAI-EAS, PAI-DSW, OSS, ApsaraDB RDS (PostgreSQL), and AnalyticDB.
  - Built with modern tech: FastAPI + Python + SSE + LangGraph (backend), and Next.js + Capacitor + TailwindCSS + TypeScript (frontend), deployed using Alibaba ECS.
  - Contributed as a brainstormer, fullstack engineer, and cloud system integrator.

### 1. Add New Experience - Saakuru Labs & SiloTech.xyz
**File:** `app/components/ExperienceSection.tsx`

**Add as first entry in `experiences` array:**
- **Title:** Lead Full Stack AI Engineer (current) + Full Stack AI Engineer (previous)
- **Company:** Saakuru Labs & SiloTech.xyz
- **Location:** Singapore, Singapore
- **Period:** July 2025 - Present (6 mos)
- **Description:**
  - Lead a team of 3 international software engineers (mid-level and senior), providing technical directions
  - Architect and implement scalable AI-agent systems across backend, frontend, and AI integration
  - Drive end-to-end development, from system design to deployment and optimization
  - Ensure reliability, performance, and scalability of AI-driven applications
  - Collaborate cross-functionally to align engineering outcomes with business goals
  - Designed and optimized system prompts and LLM integrations, boosting response accuracy and contextual reliability across AI agents
  - Collaborated on building and scaling agentic AI architectures and memory systems, enabling agents to retain context across sessions
  - Developed agent configuration workflows (prompt design, behavioral tuning, accuracy refinement)
  - Delivered frontend and backend features that made AI capabilities accessible to end users
  - Pioneered the company's agentic AI infrastructure, laying the foundation for scalable, production-ready AI solutions
  - Contributed directly to the success of the AI Agents Marketplace ecosystem

**Logo:** Need to add Saakuru Labs logo to `/public/work_experiences/`

### 2. Update Hero Section - Current Status
**File:** `app/components/HeroSection.tsx`

**Changes:**
- Remove "ACTIVELY LOOKING FOR A JOB!" status
- Change to: "Lead Fullstack AI Engineer @ Saakuru Labs & SiloTech.xyz"
- Change "Final Year Information System and Technology" to "Graduated IST Student @ Institut Teknologi Bandung"

### 3. Files to Modify
1. `app/components/ExperienceSection.tsx` - Add new experience entry
2. `app/components/HeroSection.tsx` - Update current status section

### 4. Implementation Order
- [ ] Step 1: Update ExperienceSection.tsx with new Saakuru Labs & SiloTech.xyz position
- [ ] Step 2: Update HeroSection.tsx - Change job status to current role
- [ ] Step 3: Update HeroSection.tsx - Change education status to Graduated

## Notes
- The new position should be at the TOP of the experiences array (most recent first)
- Combine both roles (Lead Full Stack AI Engineer + Full Stack AI Engineer) into one entry showing progression
- Logo file path: `/work_experiences/saakuru.png` (will need to be added manually)
- New award should be at the TOP of the awards array (most recent first)

---

## Parallax Design Analysis

### Current State
Your portfolio currently uses:
- **tsparticles** - Interactive particle background (already a nice effect)
- **AOS (Animate On Scroll)** - Fade animations on scroll
- **Framer Motion** - Component animations

### Parallax Implementation Options

#### Option A: Subtle Section Parallax (Recommended)
**Complexity:** Low | **Impact:** High | **Performance:** Good

Add parallax speed differences between sections:
- Background elements move slower than foreground
- Section backgrounds have slight parallax offset
- Hero image moves at different speed than text

**Implementation:**
```tsx
// Using framer-motion's useScroll + useTransform
const { scrollYProgress } = useScroll();
const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
```

#### Option B: Layer-Based Parallax
**Complexity:** Medium | **Impact:** Very High | **Performance:** Good

Create depth layers:
- Layer 1: Deep background (particles - already have)
- Layer 2: Section backgrounds with shapes/gradients
- Layer 3: Content (normal scroll)
- Layer 4: Floating decorative elements

**Best Sections for Parallax:**
1. **Hero Section** - Samurai image parallax against text
2. **Tech Stack Section** - Floating tech icons in background
3. **Projects Section** - Cards with depth effect
4. **Section Dividers** - Gradient waves/shapes

#### Option C: Full Parallax Scrolling (Not Recommended)
**Complexity:** High | **Performance:** Can be poor on mobile

Full-page parallax like Apple product pages - too heavy for portfolio.

### Recommended Parallax Enhancements

1. **Hero Section**
   - Samurai image moves slower on scroll (parallax effect)
   - Text fades/moves up faster
   - Particles already provide depth

2. **Section Backgrounds**
   - Add subtle gradient shapes that move on scroll
   - Floating geometric elements (circles, lines)

3. **Project Cards**
   - 3D tilt effect on hover (already partially there)
   - Staggered parallax on scroll

4. **Decorative Elements**
   - Add floating red accent shapes between sections
   - These move at different speeds creating depth

### Files to Modify for Parallax
1. `app/page.tsx` - Add scroll context provider
2. `app/components/HeroSection.tsx` - Add parallax to samurai image
3. `app/components/TechStackSection.tsx` - Add floating background elements
4. `app/components/ProjectSection.tsx` - Add section parallax
5. `app/globals.css` - Add parallax utility classes

### Implementation Priority
- [ ] Step 1: Add Framer Motion scroll hooks to Hero (samurai parallax)
- [ ] Step 2: Add floating decorative elements between sections
- [ ] Step 3: Add subtle background parallax to major sections
- [ ] Step 4: Add 3D depth effect to project cards on scroll

### Performance Considerations
- Use `will-change: transform` for parallax elements
- Use `transform: translate3d()` for GPU acceleration
- Reduce parallax intensity on mobile (or disable)
- Keep particle count lower on mobile
