"use client";

import Image from "next/image";
import blyncImg from "@/assets/blync.png";
import sniplinkImg from "@/assets/sniplink.png";
import dsaexplainerImg from "@/assets/dsaexplainer.png";

const PROJECTS = [
  {
    id: 1,
    icon: "🔗",
    title: "Sniplink",
    desc: "URL Shortener with AI-based Analytics. Engineered with Google OAuth, token verification, and an interactive click analytics dashboard.",
    tech: "React, Node.js, Express, Firebase",
    image: sniplinkImg,
    link: "https://github.com/vermabhi",
    tape: "tape-blue",
  },
  {
    id: 2,
    icon: "🧠",
    title: "DSA Explainer",
    desc: "Full-Stack DSA interview prep app. Step-by-step visualizations, multi-language code solutions, and per-user progress tracking.",
    tech: "React, Node.js, Express, Firebase",
    image: dsaexplainerImg,
    link: "https://github.com/vermabhi",
    tape: "tape-pink",
  },
  {
    id: 3,
    icon: "🎨",
    title: "Blynk",
    desc: "A beautiful link-in-bio canvas giving creators a real, customizable space. Backgrounds, typography, buttons, and live previews.",
    tech: "Next.js, Tailwind, Framer Motion",
    image: blyncImg,
    link: "https://blynk.page",
    tape: "tape-yellow",
  },
];

export const Works = () => {
  return (
    <section id="works" className="py-24 px-8 md:px-16 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="text-accent uppercase tracking-widest text-sm font-bold mb-2 block">selected works</span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold">Projects I've shipped</h2>
        <p className="text-ink-soft mt-4 max-w-xl mx-auto text-lg">
          Production-grade applications built from scratch, from architecture and API design to UI development and deployment.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
        {PROJECTS.map((project) => (
          <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className={`fcard ${project.tape} flex flex-col group mt-2`}>
            <div className="text-4xl mb-4">{project.icon}</div>
            <h3 className="font-serif font-bold text-2xl mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
            <p className="text-ink-soft mb-4 flex-grow">{project.desc}</p>
            <div className="text-sm font-medium text-ink/50 bg-ink/5 inline-block py-1 px-3 rounded self-start">
              {project.tech}
            </div>
          </a>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <a href="https://github.com/vermabhi" target="_blank" rel="noopener noreferrer" className="btn">See all on GitHub</a>
      </div>
    </section>
  );
};
