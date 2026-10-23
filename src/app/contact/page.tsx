"use client";

import { useState } from "react";
import { 
  Mail, 
  Copy, 
  Check, 
  ArrowUpRight, 
  MapPin, 
  Clock, 
  Briefcase
} from "lucide-react";
import { Footer } from "@/components/Footer";

// Inline Platform Vector Icons
const GitHubIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const XIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function ContactPage() {
  const [isCopiedEmail, setIsCopiedEmail] = useState(false);
  const [isCopiedPhone, setIsCopiedPhone] = useState(false);

  // Copy helpers
  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setIsCopiedEmail(true);
      setTimeout(() => setIsCopiedEmail(false), 2200);
    } else {
      setIsCopiedPhone(true);
      setTimeout(() => setIsCopiedPhone(false), 2200);
    }
  };

  const directChannels = [
    {
      name: "Direct Email",
      handle: "vermabhi.017@gmail.com",
      url: "mailto:vermabhi.017@gmail.com",
      icon: Mail,
      accent: "#C96F4C",
      badge: "⚡ < 2h Response",
      description: "Best for role discussions, engineering briefs & formal introductions.",
      canCopy: true,
      copyValue: "vermabhi.017@gmail.com",
      tilt: "rotate-[-1deg]"
    },
    {
      name: "WhatsApp Direct",
      handle: "+91 8923675163",
      url: "https://wa.me/8923675163?text=Hi%20Abhishek%2C%20saw%20your%20portfolio%20and%20wanted%20to%20connect!",
      icon: WhatsAppIcon,
      accent: "#25D366",
      badge: "💬 Rapid Chat",
      description: "Quick questions, informal syncs, or instant ping directly to my phone.",
      canCopy: true,
      copyValue: "+918923675163",
      tilt: "rotate-[1deg]"
    },
    {
      name: "LinkedIn",
      handle: "in/vermabhi017",
      url: "https://linkedin.com/in/vermabhi017",
      icon: LinkedInIcon,
      accent: "#0A66C2",
      badge: "💼 Professional",
      description: "Career trajectory, recommendations, endorsements & professional network.",
      canCopy: false,
      tilt: "rotate-[-1.5deg]"
    },
    {
      name: "GitHub",
      handle: "@abhi-v017",
      url: "https://github.com/abhi-v017",
      icon: GitHubIcon,
      accent: "#8B5CF6",
      badge: "💻 Open Source",
      description: "Explore 150+ DSA solutions, custom compilers, and public code repositories.",
      canCopy: false,
      tilt: "rotate-[1.5deg]"
    },
    {
      name: "X (Twitter)",
      handle: "@iamabek",
      url: "https://x.com/iamabek",
      icon: XIcon,
      accent: "#E2E8F0",
      badge: "⚡ Public Dev",
      description: "Engineering thoughts, AI protocol insights, builds & developer discussions.",
      canCopy: false,
      tilt: "rotate-[-1deg]"
    },
    {
      name: "Instagram",
      handle: "@abekdev.exe",
      url: "https://www.instagram.com/abekdev.exe/",
      icon: InstagramIcon,
      accent: "#E4405F",
      badge: "📸 Visuals & Setup",
      description: "Behind-the-scenes engineering, workspace setup & creative lifestyle.",
      canCopy: false,
      tilt: "rotate-[1deg]"
    }
  ];

  return (
    <>
      <main className="pt-20 md:pt-28 pb-16 px-4 sm:px-8 md:px-16 max-w-5xl mx-auto">
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-paper dark:bg-[#201D1A] border border-terra/30 text-terra dark:text-coral font-hand text-lg -rotate-2 mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>available immediately · full-time & remote roles</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-ink dark:text-white tracking-tight mb-4">
            Let's build something <span className="text-terra dark:text-coral italic font-normal">purposeful.</span>
          </h1>

          <p className="text-base sm:text-lg text-ink-soft dark:text-neutral-200 leading-relaxed font-sans max-w-2xl mx-auto">
            Whether you have an ambitious open role, need architectural guidance, or want to collaborate on high-performance web systems and AI — my desk is open. Pick your preferred channel below.
          </p>
        </div>

        {/* Availability & Logistics Strip / Sticky Note */}
        <div className="relative p-6 sm:p-8 rounded-3xl bg-[#FAF7F2] dark:bg-[#201D1A] border border-terra/30 dark:border-coral/30 shadow-md mb-12">
          {/* Center Top Washi Tape */}
          <div
            className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-32 h-7 -rotate-1 shadow-xs pointer-events-none z-20"
            style={{
              background:
                "repeating-linear-gradient(45deg, rgba(224,169,81,.75) 0 6px, rgba(224,169,81,.35) 6px 12px)",
            }}
          />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-dashed border-ink/10 dark:border-white/10">
            <div>
              <span className="font-hand text-2xl text-terra dark:text-coral block -rotate-1">
                availability & logistics memo 📌
              </span>
              <span className="text-xs text-ink-soft dark:text-neutral-300">
                Current status, preferred arrangements, and turnaround times
              </span>
            </div>
            <span className="font-hand text-sm px-3 py-1 rounded-full bg-paper dark:bg-[#2A2622] text-terra dark:text-coral border border-terra/20 rotate-1">
              updated for 2026 🗓️
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-ink/90 dark:text-neutral-200">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-terra/10 dark:bg-terra/20 text-terra dark:text-coral flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                <Briefcase size={17} />
              </div>
              <div>
                <span className="font-bold block text-ink dark:text-white mb-0.5">Role Preferences</span>
                <span className="text-ink-soft dark:text-neutral-300 leading-relaxed">
                  Full-time Software Engineer (Frontend, Backend, or Full-Stack). Open to high-impact contracts.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                <MapPin size={17} />
              </div>
              <div>
                <span className="font-bold block text-ink dark:text-white mb-0.5">Location & Timezone</span>
                <span className="text-ink-soft dark:text-neutral-300 leading-relaxed">
                  India (IST / UTC+5:30) · Smooth daily sync overlap with US, UK, and European teams.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                <Clock size={17} />
              </div>
              <div>
                <span className="font-bold block text-ink dark:text-white mb-0.5">Turnaround Time</span>
                <span className="text-ink-soft dark:text-neutral-300 leading-relaxed">
                  Direct emails and WhatsApp messages answered usually within 2 hours.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Direct Channels Section */}
        <div className="mb-14">
          <div className="text-center mb-6">
            <span className="font-hand text-2xl sm:text-3xl text-terra dark:text-coral -rotate-1 inline-block">
              direct reach channels ⚡
            </span>
            <p className="text-xs sm:text-sm text-ink-soft dark:text-neutral-300 mt-1">
              Choose whatever medium fits your workflow — 1-click copy or instant link
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {directChannels.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.name}
                  className={`p-5 rounded-3xl bg-[#FAF7F2] dark:bg-[#201D1A] border border-ink/15 dark:border-white/10 shadow-xs hover:shadow-md hover:border-terra/40 transition-all duration-200 flex flex-col justify-between gap-4 ${item.tilt}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 shadow-xs"
                        style={{ backgroundColor: `${item.accent}18`, color: item.accent }}
                      >
                        <IconComp />
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-serif font-bold text-base text-ink dark:text-white">
                            {item.name}
                          </h3>
                          <span className="text-[10px] font-sans px-2 py-0.5 rounded-full bg-paper dark:bg-[#2A2622] text-terra dark:text-coral border border-terra/20 shrink-0">
                            {item.badge}
                          </span>
                        </div>
                        <span className="text-xs sm:text-sm font-mono text-ink-soft dark:text-neutral-300 block">
                          {item.handle}
                        </span>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      {item.canCopy && (
                        <button
                          onClick={() => handleCopy(item.copyValue!, item.name.includes("Email") ? "email" : "phone")}
                          title="Copy to clipboard"
                          className="p-2.5 rounded-xl bg-paper dark:bg-[#2A2622] text-ink-soft dark:text-neutral-300 hover:text-terra dark:hover:text-coral border border-ink/10 dark:border-white/10 transition-colors cursor-pointer"
                        >
                          {(item.name.includes("Email") && isCopiedEmail) || (item.name.includes("WhatsApp") && isCopiedPhone) ? (
                            <Check size={16} className="text-emerald-500" />
                          ) : (
                            <Copy size={16} />
                          )}
                        </button>
                      )}

                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Open ${item.name}`}
                        className="p-2.5 rounded-xl bg-terra text-white hover:bg-coral transition-colors flex items-center justify-center cursor-pointer shadow-xs"
                      >
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </div>

                  <p className="text-xs text-ink-soft dark:text-neutral-300 leading-relaxed font-sans border-t border-dashed border-ink/10 dark:border-white/10 pt-3">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Conversation Starters / FAQ Strip */}
        <div className="p-6 sm:p-8 rounded-3xl bg-paper/60 dark:bg-[#201D1A]/70 border border-dashed border-ink/20 dark:border-white/20">
          <div className="text-center mb-6">
            <span className="font-hand text-2xl text-terra dark:text-coral -rotate-1 inline-block">
              how we can collaborate 💡
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-ink dark:text-white mt-1">
              Popular Conversation Starters
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-2xl bg-[#FAF7F2] dark:bg-[#26221E] border border-ink/10 dark:border-white/10">
              <span className="font-hand text-lg text-terra dark:text-coral block mb-1">01. Engineering Roles</span>
              <p className="text-ink-soft dark:text-neutral-300 leading-relaxed">
                Looking for a full-stack engineer who writes clean TypeScript, builds resilient microservices, and cares deeply about UI craftsmanship? Let's interview.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] dark:bg-[#26221E] border border-ink/10 dark:border-white/10">
              <span className="font-hand text-lg text-terra dark:text-coral block mb-1">02. Modern AI & RAG</span>
              <p className="text-ink-soft dark:text-neutral-300 leading-relaxed">
                Need to integrate Gemini 1.5, in-memory cosine vector search, or on-device Vision Transformers without exploding cloud bills? Let's collaborate.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] dark:bg-[#26221E] border border-ink/10 dark:border-white/10">
              <span className="font-hand text-lg text-terra dark:text-coral block mb-1">03. Systems & Distributed</span>
              <p className="text-ink-soft dark:text-neutral-300 leading-relaxed">
                Curious about custom language compilers, multiprocessing concurrency, or gRPC fault-tolerance? I love geeking out over deep engineering.
              </p>
            </div>
          </div>
        </div>

      </main>

      {/* Footer without the redundant social handles rolodex */}
      <Footer showSocials={false} />
    </>
  );
}
