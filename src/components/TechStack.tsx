"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  Code2, 
  Layers, 
  ArrowUpRight, 
  CheckCircle2, 
  X,
  Cpu,
  Flame,
  Terminal,
  Database,
  GitBranch,
  Smartphone,
  Globe,
  Cloud,
  Server,
  Zap,
  Palette
} from "lucide-react";

export interface TechSkill {
  id: string;
  name: string;
  size: "lg" | "md" | "sm";
  category: "frontend" | "backend" | "database" | "ai" | "cloud" | "tools";
  categoryLabel: string;
  tagline: string;
  description: string;
  highlights: string[];
  role: string;
  tilt: string;
  associatedProject?: {
    name: string;
    url?: string;
  };
  accentColor: string;
}

const ALL_SKILLS: TechSkill[] = [
  // --- Hero / Large Size Skills ---
  {
    id: "ai-rag",
    name: "AI & RAG / LLMs",
    size: "lg",
    category: "ai",
    categoryLabel: "AI Engineering",
    tagline: "Gemini 1.5, Local ML & Cosine Search",
    description: "Pragmatic AI architectures combining hosted foundation models with local on-device ML inference. Built an end-to-end fitness protocol with local Vision Transformers (@xenova/transformers food101) alongside Gemini 1.5 Flash structured reasoning and in-memory cosine vector RAG.",
    highlights: [
      "Retrieval-Augmented Generation (RAG) cosine search",
      "Local on-device Vision Transformers (food101 inference)",
      "Gemini 1.5 Flash structured JSON schema validation",
      "Conversational context memory & Web Speech API"
    ],
    role: "Modern AI Protocol",
    tilt: "rotate-[-1.5deg]",
    associatedProject: { name: "Aesthetix AI Protocol", url: "https://github.com/abhi-v017/aesthetix" },
    accentColor: "#EC4899"
  },
  {
    id: "react",
    name: "React",
    size: "lg",
    category: "frontend",
    categoryLabel: "Frontend & UI Systems",
    tagline: "Component Trees, Hooks & Motion",
    description: "Extensive production experience crafting responsive, accessible, and reactive single-page applications with clean component trees, custom hooks, and tactile Framer Motion physics.",
    highlights: [
      "Custom Hooks & Context architectures",
      "Optimistic UI updates & state caching",
      "Framer Motion physics & layout transitions",
      "Tailwind CSS design token integration"
    ],
    role: "Core Frontend",
    tilt: "rotate-[1deg]",
    associatedProject: { name: "howudoin & Blynk" },
    accentColor: "#61DAFB"
  },
  {
    id: "nextjs",
    name: "Next.js",
    size: "lg",
    category: "frontend",
    categoryLabel: "Full-Stack Web",
    tagline: "App Router, Server Components & Edge SSR",
    description: "Standard foundation for high-performance web applications. Leverages Server Components for zero-bundle data fetching, dynamic route handlers, metadata SEO, and edge caching.",
    highlights: [
      "Next.js 14/15 App Router architecture",
      "React Server Components (RSC) & Server Actions",
      "Edge routing & middleware pipelines",
      "Optimized image loading & font pipelines"
    ],
    role: "Full-Stack Framework",
    tilt: "rotate-[-1deg]",
    associatedProject: { name: "Blynk & Portfolio", url: "https://github.com/abhi-v017/blynk" },
    accentColor: "#F97316"
  },
  {
    id: "python",
    name: "Python",
    size: "lg",
    category: "backend",
    categoryLabel: "Backend & Systems",
    tagline: "Distributed Systems, gRPC & Concurrency",
    description: "Primary choice for systems engineering, concurrency experiments, and automated data processing. Built a fault-tolerant MapReduce engine utilizing Python's multiprocessing and gRPC stubs.",
    highlights: [
      "gRPC & Protocol Buffers serialization",
      "Multiprocessing & heartbeat fault-tolerance",
      "Fast data parsing & benchmarking scripts",
      "Object-oriented & clean scripting"
    ],
    role: "Systems & Scripting",
    tilt: "rotate-[1.5deg]",
    associatedProject: { name: "Distributed MapReduce", url: "https://github.com/abhi-v017/-distributed-mapreduce" },
    accentColor: "#38BDF8"
  },

  // --- Medium Size Skills ---
  {
    id: "tailwind",
    name: "Tailwind CSS",
    size: "md",
    category: "frontend",
    categoryLabel: "Styling & Design Tokens",
    tagline: "Utility Systems, Dark Mode & Neumorphism",
    description: "Design-system engineering with pure utility classes, custom design tokens, responsive breakpoints, fluid typography, and dark mode transitions via CSS variables.",
    highlights: [
      "CSS Variable theming (Light / Dark Mode)",
      "Neumorphic & tactile paper shadow styling",
      "Responsive fluid layouts & custom animations",
      "Tailwind v3 & v4 modern configurations"
    ],
    role: "Design Engine",
    tilt: "rotate-[-1deg]",
    associatedProject: { name: "All Projects" },
    accentColor: "#38BDF8"
  },
  {
    id: "node",
    name: "Node.js",
    size: "md",
    category: "backend",
    categoryLabel: "Backend Runtime",
    tagline: "Non-Blocking Event Loops & WebSockets",
    description: "Engineered scalable backend gateways, WebSocket brokers, and background automation tasks. Proficient with asynchronous event loops, stream processing, and JWT authentication.",
    highlights: [
      "Event-driven non-blocking I/O",
      "WebSocket duplex channels with Socket.io",
      "Stateless JWT auth & refresh mechanisms",
      "File streaming & buffer transformations"
    ],
    role: "Backend Runtime",
    tilt: "rotate-[1deg]",
    associatedProject: { name: "howudoin & Aesthetix" },
    accentColor: "#4ADE80"
  },
  {
    id: "javascript",
    name: "JavaScript",
    size: "md",
    category: "frontend",
    categoryLabel: "Core Language",
    tagline: "ES6+, Async Architecture & V8 Runtime",
    description: "Deep mastery of the JavaScript language: closures, prototypal inheritance, promise orchestration, event delegation, and browser performance optimization.",
    highlights: [
      "Event Loop & Macro/Microtask queues",
      "Async/Await, Promises & Fetch API",
      "DOM manipulation & event delegation",
      "Modular ESNext code architecture"
    ],
    role: "Daily Driver",
    tilt: "rotate-[-2deg]",
    associatedProject: { name: "howudoin & Blynk" },
    accentColor: "#FACC15"
  },
  {
    id: "react-native",
    name: "React Native",
    size: "md",
    category: "frontend",
    categoryLabel: "Mobile Engineering",
    tagline: "Cross-Platform iOS & Android Apps",
    description: "Building native-feeling mobile applications with shared codebases, fluid gesture handlers, offline-first local storage, and responsive platform-specific components.",
    highlights: [
      "Expo CLI & Native Module integration",
      "Fluid touch interactions & gesture handling",
      "Offline storage & async caching",
      "Consistent cross-platform layouts"
    ],
    role: "Mobile Framework",
    tilt: "rotate-[1deg]",
    associatedProject: { name: "Streax Mobile" },
    accentColor: "#0284C7"
  },
  {
    id: "mongodb",
    name: "MongoDB",
    size: "md",
    category: "database",
    categoryLabel: "NoSQL Database",
    tagline: "Document Schemas & Aggregation Pipelines",
    description: "Designing flexible NoSQL schemas for messaging, users, and content. Experienced in aggregation pipelines, compound indexes, and atomic updates.",
    highlights: [
      "Mongoose ODM schema validation",
      "Compound indexing for query optimization",
      "Aggregation pipelines & subdocument modeling",
      "Atlas cloud cluster deployment"
    ],
    role: "Document Store",
    tilt: "rotate-[-1deg]",
    associatedProject: { name: "howudoin" },
    accentColor: "#22C55E"
  },
  {
    id: "firebase",
    name: "Firebase",
    size: "md",
    category: "database",
    categoryLabel: "Realtime & Auth",
    tagline: "Firestore Transactions & Admin SDK",
    description: "Leveraging Firebase for instant auth, atomic Firestore transactions, and background notifications. Architecturally strict: keeps database credentials isolated server-side via the Admin SDK.",
    highlights: [
      "Firestore transactions for atomic username claims",
      "Server-Side Admin SDK isolation (0 exposed DB credentials)",
      "Firebase Authentication (Email/Password, OAuth)",
      "Firebase Cloud Messaging (FCM) notifications"
    ],
    role: "Cloud Platform",
    tilt: "rotate-[2deg]",
    associatedProject: { name: "Blynk & howudoin" },
    accentColor: "#F59E0B"
  },
  {
    id: "aws",
    name: "AWS",
    size: "md",
    category: "cloud",
    categoryLabel: "Cloud Infrastructure",
    tagline: "S3 Object Storage, EC2 & IAM Security",
    description: "Configuring cloud infrastructure primitives for asset storage, static hosting, virtual server instances, and security policies.",
    highlights: [
      "Amazon S3 buckets & CORS asset hosting",
      "EC2 Linux instance setup & process monitoring",
      "IAM access policies & security credentials",
      "CloudWatch monitoring & log diagnostics"
    ],
    role: "Cloud Services",
    tilt: "rotate-[-1deg]",
    associatedProject: { name: "Cloud Deployments" },
    accentColor: "#FF9900"
  },

  // --- Small / Compact Utility Skills ---
  {
    id: "cloudinary",
    name: "Cloudinary",
    size: "sm",
    category: "cloud",
    categoryLabel: "Media Cloud",
    tagline: "Media CDN & Dynamic Auto-Cropping",
    description: "Offloading media storage and processing from the application server. Automated face-centered avatar cropping and chat photo/video validation.",
    highlights: [
      "Automatic face-centered square cropping",
      "On-the-fly media transformations & CDN caching",
      "MIME type validation for chat attachments",
      "Stateless server media delivery"
    ],
    role: "Media CDN",
    tilt: "rotate-[1deg]",
    associatedProject: { name: "howudoin" },
    accentColor: "#0284C7"
  },
  {
    id: "express",
    name: "Express.js",
    size: "sm",
    category: "backend",
    categoryLabel: "REST Framework",
    tagline: "Route Handlers & Middlewares",
    description: "Constructing structured REST APIs with modular router trees, input validation, rate limiting, and centralized error-handling middlewares.",
    highlights: [
      "Robust middleware pipelines & CORS control",
      "Bearer token auth & cookie validation",
      "Route controllers & service separation",
      "Zero-overhead endpoint routing"
    ],
    role: "REST API",
    tilt: "rotate-[-1.5deg]",
    associatedProject: { name: "howudoin" },
    accentColor: "#94A3B8"
  },
  {
    id: "sql",
    name: "SQL",
    size: "sm",
    category: "database",
    categoryLabel: "Relational DB",
    tagline: "Relational Schemas & ACID Joins",
    description: "Solid foundation in relational database management, schema normalization, multi-table joins, transactions, and indexing strategies.",
    highlights: [
      "ACID transaction guarantees",
      "Relational schema design & foreign keys",
      "Multi-table joins & subqueries",
      "B-Tree index optimization"
    ],
    role: "Relational Store",
    tilt: "rotate-[1deg]",
    associatedProject: { name: "Core Fundamentals" },
    accentColor: "#60A5FA"
  },
  {
    id: "c-basics",
    name: "C (Basics)",
    size: "sm",
    category: "backend",
    categoryLabel: "Systems Foundation",
    tagline: "Pointers, Structs & Memory Layout",
    description: "Foundational understanding of low-level systems programming, pointer arithmetic, manual memory allocation (malloc/free), and stack vs. heap architectures.",
    highlights: [
      "Pointer arithmetic & reference dereferencing",
      "Dynamic memory allocation (malloc/calloc/free)",
      "Structs, memory layouts & byte alignments",
      "Building intuition for compiler internals"
    ],
    role: "Systems Core",
    tilt: "rotate-[-1deg]",
    associatedProject: { name: "Language & Compiler" },
    accentColor: "#A8B9CC"
  },
  {
    id: "git",
    name: "Git",
    size: "sm",
    category: "tools",
    categoryLabel: "Source Control",
    tagline: "Branching, Rebasing & Commits",
    description: "Rigorous source control practices: atomic commits, semantic commit messages, feature branching, merge conflict resolution, and interactive rebasing.",
    highlights: [
      "Interactive rebasing & squashing",
      "Branch isolation & Git-flow discipline",
      "Cherry-picking & reflog recovery",
      "Clean semantic commit conventions"
    ],
    role: "Version Control",
    tilt: "rotate-[1.5deg]",
    associatedProject: { name: "All Projects" },
    accentColor: "#F97316"
  },
  {
    id: "github",
    name: "GitHub",
    size: "sm",
    category: "tools",
    categoryLabel: "DevOps & CI/CD",
    tagline: "Actions CI/CD & Open Source",
    description: "Maintaining open-source repositories with polished documentation, README assets, issue tracking, and automated CI/CD deployment pipelines.",
    highlights: [
      "GitHub Actions workflows & automation",
      "Open-source releases & semver tagging",
      "PR reviews & branch protections",
      "Markdown project dossiers"
    ],
    role: "Collaboration",
    tilt: "rotate-[-1deg]",
    associatedProject: { name: "github.com/abhi-v017", url: "https://github.com/abhi-v017" },
    accentColor: "#A855F7"
  }
];

// Track 1 Items (Moving Left)
const TRACK_ONE_IDS = ["react", "tailwind", "python", "cloudinary", "nextjs", "aws", "javascript", "sql"];
// Track 2 Items (Moving Right)
const TRACK_TWO_IDS = ["ai-rag", "node", "c-basics", "mongodb", "react-native", "firebase", "github", "express", "git"];

export const TechStack = () => {
  const [selectedSkill, setSelectedSkill] = useState<TechSkill | null>(ALL_SKILLS[0]); // default to AI & RAG

  const trackOneSkills = TRACK_ONE_IDS.map(id => ALL_SKILLS.find(s => s.id === id)!).filter(Boolean);
  const trackTwoSkills = TRACK_TWO_IDS.map(id => ALL_SKILLS.find(s => s.id === id)!).filter(Boolean);

  return (
    <section id="tech-stack" className="py-20 px-4 sm:px-8 md:px-16 max-w-6xl mx-auto overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-10">
        <span className="font-hand text-2xl text-terra dark:text-coral -rotate-2 inline-block mb-1">
          dynamic tape deck 📼
        </span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink dark:text-white">
          Technical Arsenal & Tooling
        </h2>
        <p className="text-ink-soft dark:text-neutral-200 mt-3 max-w-xl mx-auto text-base sm:text-lg">
          A kinetic collection of 17 languages, runtimes, and cloud primitives I build with every day.
        </p>
        <span className="font-hand text-lg text-terra dark:text-coral inline-block mt-2 rotate-1">
          hover any tape badge to pause · click to inspect its dossier 🔍
        </span>
      </div>

      {/* Dual Kinetic Marquee Ticker Deck */}
      <div className="relative mb-10">
        {/* Top Washi Tape Corner Pins - perfectly pinning the top of Track 1 */}
        <div
          className="absolute -top-3.5 left-8 sm:left-14 w-28 h-6 rotate-[-3deg] shadow-sm pointer-events-none z-20"
          style={{
            background:
              "repeating-linear-gradient(45deg, rgba(224,169,81,.7) 0 6px, rgba(224,169,81,.35) 6px 12px)",
          }}
        />
        <div
          className="absolute -top-3.5 right-8 sm:right-14 w-24 h-6 rotate-[2deg] shadow-sm pointer-events-none z-20"
          style={{
            background:
              "repeating-linear-gradient(-45deg, rgba(169,184,158,.7) 0 6px, rgba(169,184,158,.35) 6px 12px)",
          }}
        />

        <div className="space-y-3.5">
          {/* Track 1: Scrolling Left */}
          <div className="relative overflow-hidden py-2 rounded-2xl bg-[#E8DCC8]/70 dark:bg-[#201D1A]/80 border border-ink/15 dark:border-white/10 shadow-inner">
            <div className="animate-marquee gap-4 sm:gap-6 items-center select-none py-1.5 px-2">
              {trackOneSkills.concat(trackOneSkills).map((skill, index) => (
                <BadgeCard 
                  key={`t1-${skill.id}-${index}`} 
                  skill={skill} 
                  isSelected={selectedSkill?.id === skill.id}
                  onSelect={() => setSelectedSkill(skill)}
                />
              ))}
            </div>
          </div>

          {/* Track 2: Scrolling Right (Reverse) */}
          <div className="relative overflow-hidden py-2 rounded-2xl bg-[#E8DCC8]/70 dark:bg-[#201D1A]/80 border border-ink/15 dark:border-white/10 shadow-inner">
            <div className="animate-marquee-reverse gap-4 sm:gap-6 items-center select-none py-1.5 px-2">
              {trackTwoSkills.concat(trackTwoSkills).map((skill, index) => (
                <BadgeCard 
                  key={`t2-${skill.id}-${index}`} 
                  skill={skill} 
                  isSelected={selectedSkill?.id === skill.id}
                  onSelect={() => setSelectedSkill(skill)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Tech Spotlight Dossier Card */}
      <AnimatePresence mode="wait">
        {selectedSkill && (
          <motion.div
            key={selectedSkill.id}
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ type: "spring", damping: 25, stiffness: 320 }}
            className="relative p-6 sm:p-8 rounded-3xl bg-[#FAF7F2] dark:bg-[#201D1A] border border-terra/40 dark:border-coral/40 shadow-xl text-ink dark:text-white my-6"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.16\'/%3E%3C/svg%3E")',
            }}
          >
            {/* Top Washi Tape - perfectly overlapping the card border */}
            <div
              className="absolute -top-3.5 left-10 sm:left-14 w-32 h-7 -rotate-2 shadow-sm pointer-events-none z-20"
              style={{
                background:
                  "repeating-linear-gradient(45deg, rgba(224,169,81,.75) 0 6px, rgba(224,169,81,.4) 6px 12px)",
              }}
            />

            {/* Corner Stamp */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <span className="font-hand text-xs text-terra dark:text-coral border border-terra/30 px-3 py-1 rounded-full bg-paper dark:bg-[#2A2622] rotate-1">
                active dossier 📌
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start mt-2">
              {/* Left Column: Tech Identity */}
              <div className="md:col-span-5 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl shadow-sm shrink-0"
                    style={{ backgroundColor: `${selectedSkill.accentColor}25`, color: selectedSkill.accentColor }}
                  >
                    <TechIcon id={selectedSkill.id} />
                  </div>
                  <div>
                    <span className="font-hand text-sm text-terra dark:text-coral block">
                      {selectedSkill.categoryLabel} · [{selectedSkill.role}]
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-ink dark:text-white">
                      {selectedSkill.name}
                    </h3>
                  </div>
                </div>

                <p className="text-sm font-sans text-ink-soft dark:text-neutral-200 leading-relaxed">
                  {selectedSkill.description}
                </p>

                {selectedSkill.associatedProject && (
                  <div className="mt-2 p-3 rounded-xl bg-paper/70 dark:bg-[#26221E] border border-ink/10 dark:border-white/10 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-terra dark:text-coral block">
                        Featured in project
                      </span>
                      <span className="font-serif font-bold text-ink dark:text-white">
                        {selectedSkill.associatedProject.name}
                      </span>
                    </div>

                    {selectedSkill.associatedProject.url && (
                      <a
                        href={selectedSkill.associatedProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn ghost text-xs py-1 px-3 inline-flex items-center gap-1"
                      >
                        <span>View</span>
                        <ArrowUpRight size={12} />
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Right Column: Architectural Highlights */}
              <div className="md:col-span-7">
                <span className="text-xs uppercase tracking-wider font-bold text-accent dark:text-coral block mb-3">
                  Core Engineering Capabilities & Paradigms
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  {selectedSkill.highlights.map((item, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-xl bg-paper/60 dark:bg-[#26221E] border border-ink/10 dark:border-white/10 flex items-start gap-2.5 text-xs text-ink/90 dark:text-neutral-200 leading-snug"
                    >
                      <CheckCircle2 size={15} className="text-terra dark:text-coral shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Quick Selector Pills for All 17 Skills */}
                <div className="pt-3 border-t border-dashed border-ink/10 dark:border-white/10">
                  <span className="font-hand text-xs text-ink-soft dark:text-neutral-300 block mb-2">
                    quick switch tech dossier:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {ALL_SKILLS.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setSelectedSkill(s)}
                        className={`text-[11px] px-2.5 py-1 rounded-full font-sans transition-all cursor-pointer ${
                          selectedSkill.id === s.id
                            ? "bg-terra text-white font-medium shadow-sm scale-105"
                            : "bg-paper dark:bg-[#2A2622] text-ink-soft dark:text-neutral-300 hover:text-ink dark:hover:text-white border border-ink/10 dark:border-white/10"
                        }`}
                      >
                        {s.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/* Individual Tactile Badge Card with Varied Sizes                            */
/* -------------------------------------------------------------------------- */

const BadgeCard = ({ 
  skill, 
  isSelected, 
  onSelect 
}: { 
  skill: TechSkill; 
  isSelected: boolean; 
  onSelect: () => void; 
}) => {
  // Render based on custom size: LG, MD, or SM
  if (skill.size === "lg") {
    return (
      <div
        onClick={onSelect}
        className={`px-5 py-3 rounded-2xl flex items-center gap-3.5 transition-all duration-300 cursor-pointer shrink-0 border ${skill.tilt} ${
          isSelected
            ? "bg-white dark:bg-[#2E2A26] border-terra dark:border-coral shadow-lg scale-105 ring-2 ring-terra/30"
            : "bg-[#FDFCF8] dark:bg-[#282420] border-ink/15 dark:border-white/15 hover:scale-105 hover:shadow-md hover:border-terra/50"
        }`}
      >
        <div 
          className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg shadow-sm shrink-0"
          style={{ backgroundColor: `${skill.accentColor}20`, color: skill.accentColor }}
        >
          <TechIcon id={skill.id} />
        </div>

        <div className="text-left">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-base sm:text-lg text-ink dark:text-white">
              {skill.name}
            </span>
            <span className="text-[10px] font-hand px-2 py-0.5 rounded-full bg-paper dark:bg-[#1A1816] text-terra dark:text-coral border border-terra/20">
              {skill.role}
            </span>
          </div>
          <span className="text-xs text-ink-soft dark:text-neutral-300 font-sans block">
            {skill.tagline}
          </span>
        </div>
      </div>
    );
  }

  if (skill.size === "md") {
    return (
      <div
        onClick={onSelect}
        className={`px-4 py-2.5 rounded-xl flex items-center gap-3 transition-all duration-300 cursor-pointer shrink-0 border ${skill.tilt} ${
          isSelected
            ? "bg-white dark:bg-[#2E2A26] border-terra dark:border-coral shadow-lg scale-105 ring-2 ring-terra/30"
            : "bg-[#FDFCF8] dark:bg-[#282420] border-ink/15 dark:border-white/15 hover:scale-105 hover:shadow-md hover:border-terra/50"
        }`}
      >
        <div 
          className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shadow-sm shrink-0"
          style={{ backgroundColor: `${skill.accentColor}20`, color: skill.accentColor }}
        >
          <TechIcon id={skill.id} />
        </div>

        <div className="text-left">
          <span className="font-serif font-bold text-sm sm:text-base text-ink dark:text-white block">
            {skill.name}
          </span>
          <span className="text-[11px] text-ink-soft dark:text-neutral-300 font-sans">
            {skill.role}
          </span>
        </div>
      </div>
    );
  }

  // Small / Compact Badge
  return (
    <div
      onClick={onSelect}
      className={`px-3.5 py-2 rounded-full flex items-center gap-2 transition-all duration-300 cursor-pointer shrink-0 border ${skill.tilt} ${
        isSelected
          ? "bg-white dark:bg-[#2E2A26] border-terra dark:border-coral shadow-lg scale-105 ring-2 ring-terra/30"
          : "bg-[#FDFCF8] dark:bg-[#282420] border-ink/15 dark:border-white/15 hover:scale-105 hover:shadow-md hover:border-terra/50"
      }`}
    >
      <div 
        className="w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs shrink-0"
        style={{ color: skill.accentColor }}
      >
        <TechIcon id={skill.id} />
      </div>

      <span className="font-serif font-bold text-xs sm:text-sm text-ink dark:text-white">
        {skill.name}
      </span>
      <span className="text-[10px] font-hand text-terra dark:text-coral opacity-80">
        #{skill.category}
      </span>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* Inline Vector Icons for all 17 Technologies                                */
/* -------------------------------------------------------------------------- */

const TechIcon = ({ id }: { id: string }) => {
  switch (id) {
    case "javascript":
      return (
        <span className="font-mono font-black text-sm tracking-tighter">JS</span>
      );

    case "python":
      return (
        <Terminal size={18} />
      );

    case "react":
      return (
        <svg className="w-5 h-5 animate-[spin_10s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );

    case "nextjs":
      return (
        <span className="font-serif font-black text-base">N</span>
      );

    case "tailwind":
      return (
        <Palette size={18} />
      );

    case "react-native":
      return (
        <Smartphone size={18} />
      );

    case "node":
      return (
        <Cpu size={18} />
      );

    case "express":
      return (
        <span className="font-mono font-bold text-xs">ex</span>
      );

    case "ai-rag":
      return (
        <Sparkles size={18} className="text-pink-500 fill-pink-500/20" />
      );

    case "mongodb":
      return (
        <Database size={18} />
      );

    case "firebase":
      return (
        <Flame size={18} className="fill-amber-500/30" />
      );

    case "aws":
      return (
        <Cloud size={18} />
      );

    case "cloudinary":
      return (
        <Cloud size={18} className="text-sky-500" />
      );

    case "sql":
      return (
        <Layers size={18} />
      );

    case "c-basics":
      return (
        <span className="font-mono font-black text-sm">C</span>
      );

    case "git":
      return (
        <GitBranch size={18} />
      );

    case "github":
      return (
        <Globe size={18} />
      );

    default:
      return <Code2 size={18} />;
  }
};
