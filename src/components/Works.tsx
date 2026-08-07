"use client";

import { motion, useScroll, useTransform, useVelocity, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

import blyncImg from "@/assets/blync.png";
import sniplinkImg from "@/assets/sniplink.png";
import dsaexplainerImg from "@/assets/dsaexplainer.png";

const PROJECTS = [
  {
    id: 1,
    title: "Blynk",
    category: "Link-in-bio Canvas / Full Stack",
    image: blyncImg,
    link: "https://blynk.page",
  },
  {
    id: 2,
    title: "Sniplink",
    category: "URL Shortener / AI Analytics",
    image: sniplinkImg,
    link: "https://github.com/vermabhi",
  },
  {
    id: 3,
    title: "DSA Explainer",
    category: "Interview Prep / Visualization",
    image: dsaexplainerImg,
    link: "https://github.com/vermabhi",
  },
];

export const Works = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const scrollVelocity = useVelocity(scrollYProgress);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const skewVelocity = useTransform(smoothVelocity, [-0.5, 0.5], [15, -15]);
  // Add dynamic blur based on velocity (mimicking motion blur)
  const blurVelocity = useTransform(smoothVelocity, [-0.5, 0, 0.5], ["blur(8px)", "blur(0px)", "blur(8px)"]);

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

  return (
    <section id="works" ref={targetRef} className="relative h-[400vh] bg-background">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        <div className="absolute top-24 md:top-32 left-8 md:left-16 z-20 pointer-events-none mix-blend-difference">
          <h2 className="font-display text-4xl md:text-8xl font-black uppercase tracking-tighter text-foreground">
            Selected Works
          </h2>
        </div>

        <motion.div style={{ x, filter: blurVelocity }} className="flex gap-8 md:gap-32 px-8 md:px-[20vw] h-[60vh] md:h-[70vh] w-[300vw]">
          {PROJECTS.map((project) => {
            const innerX = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

            return (
              <motion.div 
                key={project.id} 
                style={{ skewX: skewVelocity }}
                className="w-[85vw] md:w-[60vw] h-full flex-shrink-0 flex flex-col justify-center project-card group origin-bottom"
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full h-full relative overflow-hidden bg-muted/10 dark:bg-neutral-900 cursor-none hoverable rounded-lg md:rounded-2xl block">
                  <motion.div style={{ x: innerX, width: "130%", left: "-15%" }} className="absolute top-0 h-full">
                    <div className="w-full h-full transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-105 opacity-80 group-hover:opacity-100 relative">
                      <Image 
                        src={project.image}
                        alt={`Preview of ${project.title}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 85vw, 60vw"
                        priority={project.id === 1}
                      />
                    </div>
                  </motion.div>
                </a>
                
                <div className="mt-6 md:mt-10 flex justify-between items-start">
                  <div className="overflow-hidden">
                    <motion.h3 
                      initial={{ y: "100%" }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                      className="font-display text-3xl md:text-6xl font-black uppercase tracking-tighter transition-colors"
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-foreground/50 text-[10px] md:text-xs mt-2 md:mt-4 uppercase tracking-[0.3em] font-medium">
                      {project.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
