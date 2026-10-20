"use client";

import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Github, 
  ExternalLink, 
  Sparkles, 
  Terminal, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  ArrowRight,
  Code2,
  Images,
  Flame,
  MessageSquare
} from "lucide-react";

export interface ProjectData {
  id: number;
  icon: string;
  title: string;
  tagline: string;
  desc: string;
  longDesc?: string;
  tech: string;
  tags: string[];
  features: string[];
  architecture?: string;
  link: string;
  liveUrl?: string;
  tape: string;
  inProgress: boolean;
  image?: StaticImageData;
  screenshots?: { url: string; label: string }[];
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [activeTab, setActiveTab] = useState<"preview" | "architecture">("preview");
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState(0);

  // Handle ESC key press & lock body scroll when modal is open
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [project, onClose]);

  // Reset states when active project changes
  useEffect(() => {
    setActiveTab("preview");
    setActiveScreenshotIdx(0);
  }, [project]);

  if (!project) return null;

  const currentScreenshot = project.screenshots && project.screenshots[activeScreenshotIdx];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0 bg-ink/60 dark:bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: "spring", damping: 26, stiffness: 320 }}
          className="relative z-10 w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#EBDFC9] dark:bg-[#25221F] border border-ink/15 dark:border-cream/10 shadow-2xl p-5 sm:p-8 md:p-10 text-ink dark:text-cream"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.16\'/%3E%3C/svg%3E")',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Washi Tape Strip */}
          <div
            className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-36 h-7 -rotate-1 shadow-sm pointer-events-none z-20"
            style={{
              background:
                "repeating-linear-gradient(45deg, rgba(224,169,81,.6) 0 8px, rgba(224,169,81,.4) 8px 16px)",
            }}
          />

          {/* Top Corner Tape Accent */}
          <div
            className="hidden sm:block absolute -top-2.5 right-12 w-20 h-5 rotate-12 shadow-sm pointer-events-none opacity-80"
            style={{
              background:
                "repeating-linear-gradient(-45deg, rgba(169,184,158,.55) 0 6px, rgba(169,184,158,.35) 6px 12px)",
            }}
          />

          {/* Modal Header */}
          <div className="flex items-start justify-between gap-4 mb-6 pt-2">
            <div>
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <span className="font-hand text-2xl text-terra dark:text-coral -rotate-2 inline-block">
                  project dossier 📁
                </span>
                {project.inProgress ? (
                  <span className="font-hand text-sm px-3 py-0.5 rounded-full bg-paper dark:bg-[#1C1A18] text-terra border border-terra/30 shadow-sm rotate-1">
                    🚧 In Making
                  </span>
                ) : (
                  <span className="font-hand text-sm px-3 py-0.5 rounded-full bg-[#A9B89E]/20 text-[#546b43] dark:text-[#a5c28e] border border-[#A9B89E]/40 shadow-sm -rotate-1">
                    ✓ Shipped & Open
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3">
                <span className="text-4xl md:text-5xl">{project.icon}</span>
                <div>
                  <h2 className="text-2xl sm:text-4xl font-serif font-bold tracking-tight">
                    {project.title}
                  </h2>
                  <p className="text-ink-soft dark:text-cream/70 text-sm sm:text-base font-sans">
                    {project.tagline}
                  </p>
                </div>
              </div>
            </div>

            {/* Vintage Close Button */}
            <button
              onClick={onClose}
              aria-label="Close project dossier"
              className="group p-2 sm:px-3 sm:py-1.5 rounded-full bg-paper/80 dark:bg-[#1E1B18] border border-ink/15 dark:border-cream/15 text-ink-soft hover:text-ink dark:text-cream/80 dark:hover:text-cream transition-all hover:scale-105 active:scale-95 shadow-sm flex items-center gap-1.5"
            >
              <span className="hidden sm:inline font-hand text-sm">esc</span>
              <X size={18} className="transition-transform group-hover:rotate-90" />
            </button>
          </div>

          {/* Tab Controls for Creative Media Showcase */}
          <div className="flex items-center gap-2 mb-6 border-b border-dashed border-ink/15 dark:border-cream/15 pb-3 flex-wrap">
            <button
              onClick={() => setActiveTab("preview")}
              className={`px-4 py-1.5 rounded-full font-hand text-lg transition-all flex items-center gap-2 ${
                activeTab === "preview"
                  ? "bg-terra text-white shadow-sm -rotate-1"
                  : "bg-paper/60 dark:bg-[#1E1B18] text-ink-soft dark:text-cream/70 hover:text-ink"
              }`}
            >
              <Sparkles size={16} /> Visual Showcase & Screenshots
            </button>
            <button
              onClick={() => setActiveTab("architecture")}
              className={`px-4 py-1.5 rounded-full font-hand text-lg transition-all flex items-center gap-2 ${
                activeTab === "architecture"
                  ? "bg-terra text-white shadow-sm rotate-1"
                  : "bg-paper/60 dark:bg-[#1E1B18] text-ink-soft dark:text-cream/70 hover:text-ink"
              }`}
            >
              <Layers size={16} /> Architecture & Pipeline
            </button>
          </div>

          {/* Main Content Grid: Visual Showcase & Dossier Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Visual Showcase (7 cols on desktop) */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {activeTab === "preview" ? (
                <div className="relative">
                  {/* Polaroid Frame Container */}
                  <div className="relative p-3.5 sm:p-5 rounded-2xl bg-white dark:bg-[#1C1A18] shadow-md border border-ink/10 dark:border-cream/10 transition-transform">
                    {/* Corner Washi Tape */}
                    <div
                      className="absolute -top-3 -left-3 w-20 h-6 -rotate-12 shadow-sm pointer-events-none z-10"
                      style={{
                        background:
                          "repeating-linear-gradient(45deg, rgba(232,183,168,.7) 0 6px, rgba(232,183,168,.4) 6px 12px)",
                      }}
                    />

                    {/* Screenshot Viewer (if multiple screenshots exist) */}
                    {project.screenshots && project.screenshots.length > 0 ? (
                      <div>
                        <div className="relative w-full aspect-video sm:aspect-[16/10] overflow-hidden rounded-lg bg-[#0F0E0D] border border-ink/10 flex items-center justify-center">
                          <img
                            src={currentScreenshot?.url}
                            alt={currentScreenshot?.label || project.title}
                            className="w-full h-full object-contain sm:object-cover object-top hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>

                        {/* Screenshot Switcher Pills */}
                        {project.screenshots.length > 1 && (
                          <div className="flex items-center gap-1.5 mt-3 flex-wrap">
                            <span className="font-hand text-xs text-ink-soft dark:text-cream/60 mr-1 flex items-center gap-1">
                              <Images size={12} /> views:
                            </span>
                            {project.screenshots.map((s, idx) => (
                              <button
                                key={s.label}
                                onClick={() => setActiveScreenshotIdx(idx)}
                                className={`text-xs px-2.5 py-1 rounded-full transition-all font-sans ${
                                  activeScreenshotIdx === idx
                                    ? "bg-terra text-white font-medium shadow-xs"
                                    : "bg-paper dark:bg-[#25221F] text-ink-soft dark:text-cream/70 hover:text-ink border border-ink/10 dark:border-cream/10"
                                }`}
                              >
                                {s.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : project.image ? (
                      /* Local Static Image Asset (e.g. Blynk) */
                      <div className="relative w-full aspect-video sm:aspect-[16/10] overflow-hidden rounded-lg bg-[#0F0E0D] border border-ink/5">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover object-top hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      /* Creative Interactive & Themed Visual Mockup */
                      <CreativeMockup project={project} />
                    )}

                    {/* Polaroid Bottom Caption */}
                    <div className="mt-3 flex items-center justify-between text-xs sm:text-sm font-hand text-ink-soft dark:text-cream/70 pt-1 border-t border-dashed border-ink/10 dark:border-cream/10">
                      <span>{currentScreenshot?.label || project.title} · live artifact</span>
                      <span className="text-terra dark:text-coral">scrapbook preview ✍️</span>
                    </div>
                  </div>
                </div>
              ) : (
                /* Architecture & Flow Card */
                <div className="relative p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#1C1A18] shadow-md border border-ink/10 dark:border-cream/10 font-mono text-xs sm:text-sm">
                  <div
                    className="absolute -top-3 left-8 w-24 h-5 rotate-2 shadow-sm pointer-events-none"
                    style={{
                      background:
                        "repeating-linear-gradient(45deg, rgba(169,184,158,.7) 0 6px, rgba(169,184,158,.4) 6px 12px)",
                    }}
                  />
                  <div className="flex items-center gap-2 mb-4 text-terra dark:text-coral font-bold font-sans">
                    <Terminal size={16} />
                    <span>System Data Flow & Topology</span>
                  </div>

                  <div className="p-4 rounded-xl bg-paper/60 dark:bg-[#121110] border border-ink/10 dark:border-cream/10 leading-relaxed text-ink/90 dark:text-cream/90 overflow-x-auto">
                    <pre className="whitespace-pre font-mono text-xs">
{project.architecture || `[Client UI] ──(REST/Events)──> [Backend Node Engine]
      │                                │
      ▼                                ▼
[React Components]             [Data Layer / Cache]`}
                    </pre>
                  </div>

                  <div className="mt-4 space-y-2 font-sans text-sm text-ink-soft dark:text-cream/80">
                    <p className="flex items-start gap-2">
                      <span className="text-terra font-bold">→</span>
                      <span><strong>State Integrity:</strong> Clear separation of concerns with atomic operations.</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-terra font-bold">→</span>
                      <span><strong>Reliability:</strong> Fail-safe fallbacks preventing single points of failure.</span>
                    </p>
                  </div>
                </div>
              )}

              {/* Tech Stack Pills */}
              <div className="mt-2">
                <span className="text-xs uppercase tracking-wider font-bold text-accent block mb-2">
                  Built with & Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-paper dark:bg-[#1C1A18] border border-ink/10 dark:border-cream/15 text-ink/80 dark:text-cream/80"
                    >
                      #{tag}
                    </span>
                  ))}
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-terra/15 text-terra border border-terra/30">
                    {project.tech}
                  </span>
                </div>
              </div>
            </div>

            {/* Dossier Details & Actions (5 cols on desktop) */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-accent block mb-2">
                  Overview & Engineering Notes
                </span>
                <p className="text-ink/90 dark:text-cream/90 leading-relaxed font-sans text-sm sm:text-base mb-6">
                  {project.longDesc || project.desc}
                </p>

                {/* Key Features Bullet List */}
                <span className="text-xs uppercase tracking-wider font-bold text-accent block mb-2.5">
                  Core Highlights
                </span>
                <ul className="space-y-2.5 text-sm text-ink-soft dark:text-cream/80">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-snug">
                      <CheckCircle2
                        size={16}
                        className="text-terra dark:text-coral shrink-0 mt-0.5"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-dashed border-ink/15 dark:border-cream/15 space-y-3">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn w-full text-center flex items-center justify-center gap-2 group shadow-md"
                  >
                    <Github size={18} />
                    <span>Explore on GitHub</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </a>
                ) : (
                  <div className="w-full text-center py-2.5 px-4 rounded-full bg-paper/60 dark:bg-[#1E1B18] border border-dashed border-terra/40 text-terra font-hand text-lg">
                    ⚡ Codebase being polished · Coming soon!
                  </div>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn ghost w-full text-center flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={16} />
                    <span>Open Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

/* -------------------------------------------------------------------------- */
/* Creative Themed Visual Mockups for Projects without static screenshots     */
/* -------------------------------------------------------------------------- */

const CreativeMockup = ({ project }: { project: ProjectData }) => {
  switch (project.id) {
    case 5: // Compiler from Scratch
      return (
        <div className="w-full aspect-video sm:aspect-[16/10] rounded-lg bg-[#11100F] text-[#38BDF8] p-4 flex flex-col justify-between font-mono text-[11px] sm:text-xs border border-ink/20">
          <div className="flex items-center justify-between border-b border-white/10 pb-2 text-neutral-400">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 font-mono text-[11px] text-neutral-300">
                compiler@dev:~/lang$
              </span>
            </div>
            <span className="text-amber-400 font-bold text-[10px]">VM EXECUTION</span>
          </div>

          <div className="space-y-1.5 py-1 text-neutral-300 font-mono">
            <p className="text-white">
              $ <span className="text-emerald-400">./compiler run script.txt</span>
            </p>
            <p className="text-neutral-400">[Lexer] Emitted 48 tokens (0 errors)</p>
            <p className="text-neutral-300">
              [Parser] AST constructed · Depth: 6 · Nodes: 24
            </p>
            <p className="text-amber-300">
              [Compiler] Generated 18 Bytecode Instructions
            </p>
            <p className="text-emerald-400 font-bold">
              [VM] Stack Evaluated: RESULT = 42 (0.04ms)
            </p>
          </div>

          <div className="flex items-center justify-between text-[10px] text-neutral-400 pt-2 border-t border-white/10">
            <span>Recursive-Descent Parser</span>
            <span className="text-emerald-400">Stack Bytecode VM</span>
          </div>
        </div>
      );

    case 6: // Streax (Habit Tracker Startup)
      return (
        <div className="w-full aspect-video sm:aspect-[16/10] rounded-lg bg-[#FAF7F2] dark:bg-[#141312] p-4 flex flex-col justify-between border border-ink/10 dark:border-cream/10 font-sans">
          <div className="flex items-center justify-between border-b border-ink/10 dark:border-cream/10 pb-2">
            <div className="flex items-center gap-2">
              <Flame size={18} className="text-terra fill-terra" />
              <span className="font-serif font-bold text-sm text-ink dark:text-cream">
                Streax · Momentum Engine
              </span>
            </div>
            <span className="font-hand text-lg text-terra font-bold rotate-2">
              42 Days Streak 🔥
            </span>
          </div>

          {/* Weekly Heatmap Stamps */}
          <div className="py-2">
            <span className="text-[11px] text-ink-soft dark:text-cream/60 block mb-2 font-medium">
              Daily Code Sessions & Goals
            </span>
            <div className="grid grid-cols-7 gap-2">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                <div
                  key={day}
                  className="flex flex-col items-center p-2 rounded-xl bg-paper dark:bg-[#201D1A] border border-ink/10 dark:border-cream/10"
                >
                  <span className="text-[10px] text-ink-soft dark:text-cream/50 mb-1">
                    {day}
                  </span>
                  <Flame size={14} className="text-terra fill-terra" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-ink-soft dark:text-cream/70 pt-2 border-t border-dashed border-ink/10 dark:border-cream/10">
            <span>Milestone: 50 Days (84%)</span>
            <span className="font-hand text-terra text-sm">never break the chain! ✍️</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full aspect-video sm:aspect-[16/10] rounded-lg bg-paper dark:bg-[#1E1C1A] p-6 flex flex-col items-center justify-center text-center border border-ink/10 dark:border-cream/10">
          <Code2 size={36} className="text-terra mb-2" />
          <h4 className="font-serif font-bold text-base mb-1">{project.title}</h4>
          <p className="text-xs text-ink-soft dark:text-cream/60 max-w-xs">
            {project.desc}
          </p>
        </div>
      );
  }
};
