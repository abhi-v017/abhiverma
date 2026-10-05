"use client";

import { Footer } from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

export default function NotesPage() {
  const [activeTab, setActiveTab] = useState<'notes' | 'roadmaps'>('notes');

  const NOTES = [
    {
      id: "c",
      icon: "⚙️",
      title: "C Programming",
      desc: "Memory management, pointers, and systems programming basics.",
      tags: ["Systems", "Available"],
      rotation: "-rotate-1",
      link: "https://drive.google.com/file/d/13KgmHR0Fa7YYxfqFiUnFz1sSKgfV6svw/view?usp=drive_link"
    },
    {
      id: "cpp",
      icon: "🚀",
      title: "C++",
      desc: "Object-oriented programming, STL, and competitive programming.",
      tags: ["OOP", "Coming Soon"],
      rotation: "rotate-2",
    },
    {
      id: "java",
      icon: "☕",
      title: "Java",
      desc: "Enterprise architecture, multithreading, and the JVM.",
      tags: ["Backend", "Coming Soon"],
      rotation: "-rotate-2",
    },
    {
      id: "python",
      icon: "🐍",
      title: "Python",
      desc: "Data structures, scripting, and automation cheat codes.",
      tags: ["Scripting", "Coming Soon"],
      rotation: "rotate-1",
    },
    {
      id: "javascript",
      icon: "💛",
      title: "JavaScript",
      desc: "Event loop, closures, promises, and the weird parts of JS.",
      tags: ["Web", "Coming Soon"],
      rotation: "-rotate-1",
    },
    {
      id: "dsa",
      icon: "🧠",
      title: "Data Structures & Algorithms",
      desc: "Trees, graphs, dynamic programming, and patterns.",
      tags: ["Interview Prep", "Coming Soon"],
      rotation: "rotate-2",
    },
  ];

  const ROADMAPS = [
    {
      id: "web-dev",
      icon: "🌐",
      title: "Web Development",
      desc: "From HTML/CSS to full-stack scalable MERN applications.",
      tags: ["Frontend", "Backend"],
      rotation: "rotate-1",
      link: "https://drive.google.com/file/d/1AxPPDEVPoN60PVDjZWwecpCTNRAEcYcH/view?usp=drive_link"
    },
    {
      id: "app-dev",
      icon: "📱",
      title: "App Development",
      desc: "Building cross-platform mobile experiences with React Native.",
      tags: ["Mobile",],
      rotation: "-rotate-2",
      link: "https://drive.google.com/file/d/1pOue8-NVX60E34QUsAKTZihwNW3Qu9aY/view?usp=drive_link"
    },
    {
      id: "game-dev",
      icon: "🎮",
      title: "Game Development",
      desc: "Game loops, physics, and rendering engines.",
      tags: ["Gaming"],
      rotation: "rotate-2",
      link:"https://drive.google.com/file/d/1ERTrF0Jon_gY6cW9mq2iQew0m_xrfhke/view?usp=drive_link"
    },
    {
      id: "DevOps",
      icon: "⚙️",
      title: "DevOps",
      desc: "CI/CD, containerization, and cloud infrastructure.",
      tags: ["Cloud"],
      rotation: "-rotate-1",
      link:"https://drive.google.com/file/d/14YwIAuM_g_J0Q7ZExBZ0Xm8PDwUFLmJS/view?usp=drive_link"
    },
    {
      id: "Software-Engineering",
      icon: "💻",
      title: "Software Engineering",
      desc: "System design, architecture patterns, and scalable solutions.",
      tags: ["Engineering"],
      rotation: "rotate-2",
      link:"https://drive.google.com/file/d/1xh3sdLRMv5SthX9eTZRJNdz5gq5pBENy/view?usp=drive_link"
    },
    {
      id: "data-analytics",
      icon: "📊",
      title: "Data Analytics",
      desc: "SQL, data visualization, and extracting insights from noise.",
      tags: ["Data"],
      rotation: "-rotate-1",
      link:"https://drive.google.com/file/d/1UsvQ2Yd_5rDVHA1gKaK-uFfqUTuIvubQ/view?usp=drive_link"
    },
    {
      id: "data-science",
      icon: "🔬",
      title: "Data Science",
      desc: "Statistics, predictive modeling, and data pipelines.",
      tags: ["Math"],
      rotation: "rotate-1",
      link:"https://drive.google.com/file/d/1HFhvwgyVpv_Rb4I6wIT34wB3_hQWAx5s/view?usp=drive_link"
    },
    {
      id: "ai-ml",
      icon: "🤖",
      title: "AI/ML Engineer",
      desc: "Neural networks, LLMs, and building intelligent systems.",
      tags: ["AI",],
      rotation: "-rotate-2",
      link:"https://drive.google.com/file/d/1l_6z4adQGtwn1vGhvPUx7AT1F9JKHiV8/view?usp=drive_link"
    },
    {
      id: "cybersecurity",
      icon: "🤖",
      title: "Cybersecurity Specialist",
      desc: "Network security, ethical hacking, and protecting digital assets.",
      tags: ["Security"],
      rotation: "-rotate-2",
      link:"https://drive.google.com/file/d/17hYDwF0S3yTDiFvxOkZJ52q9w4mzQTWq/view?usp=drive_link"
    }
  ];

  return (
    <>
      <section className="pt-24 pb-12 px-6 md:px-16 max-w-6xl mx-auto min-h-[75vh]">
        <div className="text-center mb-12">
          <span className="font-hand text-3xl text-accent block mb-2 -rotate-2">free guides</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-6">Resources Library</h1>
          <p className="text-ink-soft text-base md:text-lg max-w-2xl mx-auto mb-10">
            I'm constantly learning and documenting. Here is where I drop my personal notes, cheatsheets, deep dives, and learning roadmaps.
          </p>
          
          <div className="relative z-10 inline-flex flex-wrap justify-center bg-paper/50 p-1.5 rounded-full border border-ink/10 shadow-sm cursor-pointer">
            <button 
              type="button"
              onClick={() => setActiveTab('notes')}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-sans font-medium transition-all duration-300 ${activeTab === 'notes' ? 'bg-terra text-white shadow-md' : 'text-ink-soft hover:text-ink'}`}
            >
              Dev Notes
            </button>
            <button 
              type="button"
              onClick={() => setActiveTab('roadmaps')}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-sans font-medium transition-all duration-300 ${activeTab === 'roadmaps' ? 'bg-terra text-white shadow-md' : 'text-ink-soft hover:text-ink'}`}
            >
              Roadmaps
            </button>
          </div>
        </div>
        
        {activeTab === 'notes' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {NOTES.map((note) => (
              <div key={note.id} className={`fcard flex flex-col group relative overflow-hidden mt-2 ${note.rotation}`}>
                <div className="text-4xl mb-4">{note.icon}</div>
                <h3 className="font-serif font-bold text-2xl mb-2">{note.title}</h3>
                <p className="text-ink-soft mb-8 flex-grow leading-relaxed">{note.desc}</p>
                
                <div className="flex gap-2 flex-wrap mb-8">
                  {note.tags.map((tag, idx) => (
                    <span 
                      key={tag} 
                      className={`px-3 py-1 text-sm font-hand rounded-full ${idx === 1 ? 'bg-terra text-white' : 'bg-paper text-terra border border-terra/10'}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {(note as any).link ? (
                  <a href={(note as any).link} target="_blank" rel="noopener noreferrer" className="font-hand text-terra text-xl hover:text-coral transition-colors inline-block">
                    Read guide &rarr;
                  </a>
                ) : (
                  <div className="font-hand text-terra text-xl opacity-50 cursor-not-allowed inline-block">
                    Read guide &rarr;
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'roadmaps' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {ROADMAPS.map((roadmap) => (
              <div key={roadmap.id} className={`fcard flex flex-col group relative overflow-hidden mt-2 ${roadmap.rotation}`}>
                <div className="text-4xl mb-4">{roadmap.icon}</div>
                <h3 className="font-serif font-bold text-2xl mb-2">{roadmap.title}</h3>
                <p className="text-ink-soft mb-8 flex-grow leading-relaxed">{roadmap.desc}</p>
                
                <div className="flex gap-2 flex-wrap mb-8">
                  {roadmap.tags.map((tag, idx) => (
                    <span 
                      key={tag} 
                      className={`px-3 py-1 text-sm font-hand rounded-full ${idx === 1 ? 'bg-terra text-white' : 'bg-paper text-terra border border-terra/10'}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {roadmap.link ? (
                  <a href={roadmap.link} target="_blank" rel="noopener noreferrer" className="font-hand text-terra text-xl hover:text-coral transition-colors inline-block">
                    View roadmap &rarr;
                  </a>
                ) : (
                  <div className="font-hand text-terra text-xl opacity-50 cursor-not-allowed inline-block">
                    View roadmap &rarr;
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
      
      <div className="divider"></div>
      
      <div className="px-8 mb-8 mt-12">
        <div className="tape max-w-2xl mx-auto relative group cursor-pointer hover:-translate-y-1 transition-transform">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-[104px] h-[28px] bg-paper shadow-sm rotate-3" style={{ background: "repeating-linear-gradient(45deg, rgba(169,184,158,.5) 0 7px, rgba(169,184,158,.32) 7px 14px)" }}></div>
          <span className="font-hand text-3xl text-accent block mb-2 -rotate-1">collaborate?</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Want to talk code?</h2>
          <p className="text-ink-soft mb-8 max-w-md mx-auto text-lg">
            Whether you want to discuss system design, algorithms, or just geek out over a new framework, my inbox is open!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="btn">Say hello</Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
