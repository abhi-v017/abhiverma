"use client";

import { useState } from "react";
import { ProjectModal, ProjectData } from "./ProjectModal";
import blyncImg from "@/assets/blync.png";
import { ArrowUpRight } from "lucide-react";

const PROJECTS: ProjectData[] = [
  {
    id: 1,
    icon: "💬",
    title: "howudoin",
    tagline: "Full-Stack Anonymous 1:1 Real-Time Chat Engine",
    desc: "A secure messaging platform where users discover and connect via random 6-character UIDs with zero public directories.",
    longDesc: "howudoin is a production-grade real-time messaging platform solving the hard problem of anonymous user discovery. Instead of exposed user directories, users share unguessable 6-character UIDs (Discord/Signal pattern). Built with an authenticated Express & Socket.io gateway, Firebase Realtime Database locked behind server-side Admin SDK rules, Cloudinary media CDN for face-cropped avatars & media, and 6 custom theme presets.",
    tech: "React 18, Node.js, Express, Socket.io, Firebase, Cloudinary",
    tags: ["Real-Time", "WebSockets", "JWT Auth", "Cloudinary CDN"],
    features: [
      "Anonymous discovery via collision-checked 6-character alphanumeric UIDs",
      "Instant message delivery via Socket.io authenticated with stateless JWTs",
      "Multi-device & multi-tab synchronization via personal Socket rooms",
      "Server-side Admin SDK isolation: Firebase rules locked (read/write: false to public)",
      "In-chat media & photo sharing with Cloudinary transformations (25MB limit)",
      "6 instant switchable color themes with zero flash persisted to localStorage"
    ],
    architecture: `[Browser Client (React 18 + Tailwind)]
        │  ▲
        │  │ (Duplex WebSocket via Socket.io with JWT)
        ▼  │
[Node.js + Express API Gateway]
        │
        ├─► [Firebase Realtime DB (Server-Side Admin SDK only)]
        │    (Rules: .read/.write: false everywhere)
        │
        └─► [Cloudinary CDN (Face-Crop Avatars, Chat Photos & Videos)]`,
    link: "https://github.com/abhi-v017/howudoin",
    tape: "tape-blue",
    inProgress: false,
    screenshots: [
      {
        url: "https://raw.githubusercontent.com/abhi-v017/howudoin/main/docs/dark-chat-screen.png",
        label: "Dark Chat UI"
      },
      {
        url: "https://raw.githubusercontent.com/abhi-v017/howudoin/main/docs/search-user-UID.png",
        label: "UID Discovery"
      },
      {
        url: "https://raw.githubusercontent.com/abhi-v017/howudoin/main/docs/login.png",
        label: "Auth Screen"
      },
      {
        url: "https://raw.githubusercontent.com/abhi-v017/howudoin/main/docs/profile.png",
        label: "Profile & Media"
      },
      {
        url: "https://raw.githubusercontent.com/abhi-v017/howudoin/main/docs/mobile-view.png",
        label: "Mobile View"
      }
    ]
  },
  {
    id: 2,
    icon: "⚡",
    title: "Aesthetix",
    tagline: "AI-Forged Fitness & Nutrition Protocol with Local ML",
    desc: "A brutalist, dark-mode fitness app combining local on-device ML Vision with Gemini AI for RAG-grounded coaching.",
    longDesc: "Aesthetix combines on-device machine learning with Google Gemini 1.5 Flash to eliminate generic fitness advice. Features a local Vision Transformer (@xenova/transformers running food101) to classify meals with zero API costs, Gemini-powered portion reasoning, Retrieval-Augmented Generation (RAG) for scientific diet protocols, and a voice-enabled coaching assistant with speech recognition.",
    tech: "React, Vite, Node.js, Express, Gemini AI, Local ML, Firebase",
    tags: ["Local ML / ViT", "Google Gemini API", "RAG Pipeline", "Web Speech API"],
    features: [
      "Local ML Food Scanner: On-device Vision Transformer (food101) classifies food with 0 API costs",
      "Pragmatic AI: Gemini reasoning estimates exact calories & macros from portion text",
      "Diet RAG Pipeline: In-memory cosine vector search grounding meal plans in nutrition science",
      "Voice-Enabled AI Coach: Contextual chat assistant searching user Firestore workout logs",
      "BMR/TDEE calculation engine generating tailored 4-day resistance splits",
      "Brutalist, dark neumorphic aesthetic with weekly streak & consistency analytics"
    ],
    architecture: `[React / Vite Client (Neumorphic Dark UI)]
        │
        ▼ (REST / Voice-to-Text Audio Web Speech API)
[Node.js & Express API Server]
        │
        ├─► [Local ML: @xenova/transformers (ViT Vision + MiniLM Embeddings)]
        ├─► [Google Gemini 1.5 Flash API (Portion Reasoning & Workout Planner)]
        ├─► [Firebase Firestore & Firebase Auth]
        └─► [node-cron (Scheduled Habit Reminders & Push Notifications)]`,
    link: "https://github.com/abhi-v017/aesthetix",
    tape: "tape-pink",
    inProgress: false,
    screenshots: [
      {
        url: "https://raw.githubusercontent.com/abhi-v017/aesthetix/main/docs/dashboard.png",
        label: "Dashboard"
      },
      {
        url: "https://raw.githubusercontent.com/abhi-v017/aesthetix/main/docs/diet.png",
        label: "Diet RAG Plan"
      },
      {
        url: "https://raw.githubusercontent.com/abhi-v017/aesthetix/main/docs/scanner.png",
        label: "Food Scanner"
      },
      {
        url: "https://raw.githubusercontent.com/abhi-v017/aesthetix/main/docs/coach.png",
        label: "AI Coach Chat"
      }
    ]
  },
  {
    id: 3,
    icon: "🎨",
    title: "Blynk",
    tagline: "Customizable Link-in-Bio Creator Canvas with Live Preview",
    desc: "A tactile link-in-bio platform with full control over typography, backgrounds, buttons, and real-time previews.",
    longDesc: "Unlike rigid one-column link lists, Blynk treats the creator profile as an expressive, customizable canvas. Engineered with Next.js 15 and Tailwind v4, it features an in-memory Zustand draft store, atomic username claiming via Firestore transactions, drag-and-drop link reordering (@dnd-kit), and a unified ProfileRenderer engine guaranteeing preview/publish parity.",
    tech: "Next.js 15, TypeScript, Tailwind v4, Zustand, Firebase",
    tags: ["Next.js 15", "Design System", "Zustand Store", "Firestore Trans."],
    features: [
      "Atomic username claiming: Firestore transaction guarantees 0 duplicate claims",
      "Unified ProfileRenderer engine ensuring 100% visual parity between preview & live page",
      "In-memory Zustand draft store with debounced ~700ms autosaving to Cloud Firestore",
      "Drag-and-drop link reordering powered by @dnd-kit with instant optimistic layout",
      "5 built-in aesthetic themes (Midnight Ember, Paper & Ink, Citrus Pop, Glass Grid, Mono)",
      "Full styling control: Google Fonts pairing, button shapes (sharp/soft/pill), and animations"
    ],
    architecture: `[Dashboard Editor (profile / links / theme)] ──► [Zustand Draft Store (in-memory)]
                                                           │
                                                           ▼ (renders instant pixels)
                                                 [ProfileRenderer Engine]
                                                           │
                                        ┌──────────────────┴──────────────────┐
                                        ▼                                     ▼
                           [Live Preview (Phone Frame)]             [Public Page /{username}]
                                        │
                         (Debounced ~700ms writes)
                                        ▼
                                 [Cloud Firestore]`,
    link: "https://github.com/abhi-v017/blynk",
    liveUrl: "https://blynk.page",
    tape: "tape-yellow",
    inProgress: false,
    image: blyncImg,
  },
  {
    id: 4,
    icon: "⚙️",
    title: "Distributed MapReduce",
    tagline: "Fault-Tolerant Distributed Data Processing Framework",
    desc: "A from-scratch MapReduce engine over gRPC with worker heartbeat tracking and crash resilience.",
    longDesc: "Modeled after Google's MapReduce architecture, this framework distributes large-scale data processing jobs across worker processes over gRPC with Protocol Buffers. It features a central Coordinator managing task queues, deterministic intermediate hashing, a 10-second worker heartbeat timeout with automatic task reassignment, and proven benchmarks on 300,000+ line corpora.",
    tech: "Python 3, gRPC, Protocol Buffers, Concurrency, Matplotlib",
    tags: ["Distributed Systems", "gRPC", "Fault Tolerance", "Protobuf"],
    features: [
      "Coordinator process managing map/reduce task assignment to worker processes over gRPC",
      "Automatic Fault Tolerance: 10s worker timeout triggers instant reassignment to healthy nodes",
      "Pluggable job architecture: supports WordCount and Inverted-Index without coordinator changes",
      "Benchmarked on 300,000-line corpora: 1 worker (13.69s) to 8 workers (6.62s) sublinear speedup",
      "Deterministic partition hashing: M map tasks produce R partition buckets cleanly",
      "Automated multi-process launcher (run_demo.py) generating per-worker diagnostic logs"
    ],
    architecture: `[Input Text Corpus] ──► [Coordinator Process (coordinator.py)]
                                  │
                  gRPC RPC calls  ▼ (Heartbeat check with 10s timeout)
            ┌─────────────────────┼─────────────────────┐
            ▼                     ▼                     ▼
     [Worker Process 1]    [Worker Process 2]    [Worker Process 3]
       (Map Phase)           (Map Phase)           (Reduce Phase)
            │                     │                     │
            └──────────────┬──────┴─────────────────────┘
                           ▼
            [mr-out-*.txt (word <TAB> count / inverted index)]`,
    link: "https://github.com/abhi-v017/-distributed-mapreduce",
    tape: "tape-blue",
    inProgress: false,
    screenshots: [
      {
        url: "https://raw.githubusercontent.com/abhi-v017/-distributed-mapreduce/main/benchmark.png",
        label: "Benchmark Speedup Chart"
      }
    ]
  },
  {
    id: 5,
    icon: "⚡",
    title: "Language & Compiler",
    tagline: "Bytecode Compiler & Virtual Machine from Scratch",
    desc: "A custom programming language featuring a handwritten lexer, recursive-descent parser, and stack VM.",
    longDesc: "Built to master language engineering and low-level compilation pipelines. Includes a handwritten scanner emitting typed token streams, an AST-generating recursive-descent parser, an intermediate bytecode generator, and an efficient stack-based virtual machine evaluating bytecode instructions.",
    tech: "C++ / Systems, Lexer, Parser, AST, Bytecode VM",
    tags: ["Compilers", "Systems Programming", "AST", "Virtual Machine"],
    features: [
      "Handwritten lexical scanner emitting zero-dependency token streams with line-column tracking",
      "Recursive-descent parser constructing typed Abstract Syntax Trees with error recovery",
      "Bytecode compiler translating AST nodes into compact, high-efficiency opcodes",
      "Stack-based virtual machine executing bytecode with register emulation and memory checks"
    ],
    architecture: `[Source Code (.txt)] ──► [Lexer (Token Stream)]
                               │
                               ▼
                   [Recursive Descent Parser]
                               │
                               ▼
                   [Abstract Syntax Tree (AST)]
                               │
                               ▼
                   [Bytecode Compiler & OpCodes]
                               │
                               ▼
                   [Stack-Based Virtual Machine (VM Execution)]`,
    link: "",
    tape: "tape-yellow",
    inProgress: true,
  },
  {
    id: 6,
    icon: "🔥",
    title: "Streax",
    tagline: "Behavioral Momentum & Habit Consistency Startup",
    desc: "A proprietary startup platform designed around behavioral momentum, streak retention, and social accountability.",
    longDesc: "Habit formation is fundamentally about psychological momentum. Streax implements the 'never miss twice' principle with tactile visual check-ins, heatmap visualizations, streak freeze mechanics, and progress analytics to help developers and creators stay consistent.",
    tech: "Next.js, React Native, Supabase, Tailwind CSS",
    tags: ["Startup", "Gamification", "Habit Science", "Mobile & Web"],
    features: [
      "Tactile paper-style check-in mechanics with streak retention soundscapes & animations",
      "Interactive 365-day consistency heatmap tracking weekly and monthly habit momentum",
      "Streak Shield & Freeze mechanics forgiving single-day accidental lapses",
      "Offline-first sync engine with optimistic client updates and cloud persistence"
    ],
    architecture: `[User Habit Engine] ──► [Optimistic Behavioral State Machine]
                                  │
            ┌─────────────────────┴─────────────────────┐
            ▼                                           ▼
[Offline-first PWA / Local Storage]            [Milestone & Streak Freezes]
            │                                           │
            └─────────────────────┬─────────────────────┘
                                  ▼
                    [Consistency Analytics & Sync]`,
    link: "",
    tape: "tape-pink",
    inProgress: true,
  },
];

export const Works = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <section id="works" className="py-24 px-6 md:px-16 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-accent uppercase tracking-widest text-sm font-bold mb-2 block">
          selected works
        </span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold">Projects I'm building</h2>
        <p className="text-ink-soft dark:text-cream/70 mt-4 max-w-xl mx-auto text-lg">
          A mix of production applications, distributed systems, and experimental tools I'm currently working on.
        </p>
        <span className="font-hand text-xl text-terra dark:text-coral inline-block mt-3 -rotate-1">
          click any project to open its dossier & preview ✨
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            onClick={() => setSelectedProject(project)}
            className={`fcard ${project.tape} flex flex-col group mt-2 relative cursor-pointer hover:-translate-y-1.5 transition-all duration-300 hover:shadow-lg`}
          >
            {/* Top Row: Icon & Status Badge */}
            <div className="text-4xl mb-4 flex justify-between items-start">
              <span>{project.icon}</span>
              {project.inProgress ? (
                <span className="text-sm font-hand bg-paper dark:bg-[#1C1A18] px-3 py-1 rounded-full border border-ink/10 dark:border-cream/10 shadow-sm text-terra dark:text-coral rotate-2">
                  🚧 In Making
                </span>
              ) : (
                <span className="text-xs font-hand bg-[#A9B89E]/20 text-[#546b43] dark:text-[#a5c28e] px-2.5 py-0.5 rounded-full border border-[#A9B89E]/30 -rotate-1">
                  ✓ Shipped
                </span>
              )}
            </div>
            
            {/* Project Title */}
            <h3 className="font-serif font-bold text-2xl mb-1 group-hover:text-accent transition-colors flex items-center justify-between">
              <span>{project.title}</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-terra dark:text-coral text-lg font-hand">
                dossier ↗
              </span>
            </h3>

            {/* Tagline / Subtitle */}
            <span className="text-xs text-ink-soft dark:text-cream/60 font-sans mb-3 block">
              {project.tagline}
            </span>
            
            {/* Short Description */}
            <p className="text-ink-soft dark:text-cream/80 mb-6 flex-grow text-sm leading-relaxed">
              {project.desc}
            </p>
            
            {/* Tech Badge */}
            <div className="mb-6">
              <span className="text-xs font-medium text-ink/70 dark:text-cream/70 bg-ink/5 dark:bg-cream/10 py-1.5 px-3 rounded-md">
                {project.tech}
              </span>
            </div>
            
            {/* Bottom Row: Direct Link / Status & Inspect Dossier trigger */}
            <div className="flex items-center justify-between pt-3 border-t border-dashed border-ink/10 dark:border-cream/10 text-sm">
              <div className="font-hand text-lg">
                {project.link ? (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={(e) => e.stopPropagation()}
                    className="text-terra dark:text-coral hover:text-coral dark:hover:text-terra inline-flex items-center gap-1 group/link"
                  >
                    <span>View Code</span>
                    <span className="transition-transform group-hover/link:translate-x-0.5">&rarr;</span>
                  </a>
                ) : (
                  <span className="text-ink-soft/60 dark:text-cream/40 cursor-default">
                    Code coming soon
                  </span>
                )}
              </div>

              {/* Explicit Click Affordance */}
              <span className="font-hand text-base text-terra dark:text-coral underline underline-offset-4 decoration-dashed opacity-80 group-hover:opacity-100 flex items-center gap-0.5">
                <span>preview</span>
                <ArrowUpRight size={14} />
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-16">
        <a 
          href="https://github.com/abhi-v017" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn shadow-md"
        >
          See all on GitHub
        </a>
      </div>

      {/* Taped Project Dossier Gallery Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};
