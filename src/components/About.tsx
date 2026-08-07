"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={ref} className="py-48 px-8 md:px-16 relative overflow-hidden bg-background">
      {/* Dynamic Background Typography */}
      <motion.div 
        style={{ x: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]) }}
        className="absolute top-1/2 left-0 -translate-y-1/2 text-[30vw] font-display font-black text-transparent opacity-5 pointer-events-none whitespace-nowrap"
        style={{ WebkitTextStroke: "2px var(--foreground)" }}
        aria-hidden="true"
      >
        CREATIVE CODING
      </motion.div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24 items-center relative z-10">
        
        <div className="w-full md:w-1/2 flex flex-col gap-12">
          <div className="overflow-hidden">
            <motion.h2 
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="font-display text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9]"
            >
              Code with <br /> <span className="text-accent italic font-medium tracking-tight">Purpose.</span>
            </motion.h2>
          </div>
          
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
              className="text-lg md:text-xl text-foreground/70 font-light leading-relaxed space-y-8"
            >
              <p>
                I'm a full-stack developer experienced in building production-grade web and mobile applications using the MERN stack.
              </p>
              <p>
                With a strong foundation in Data Structures, Algorithms, and System Design, I focus on building scalable systems, real-time applications, and integrating AI APIs to solve real-world problems.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-[70vh] relative overflow-hidden rounded-2xl group">
          <motion.div style={{ y, opacity }} className="w-full h-[120%] absolute -top-[10%] left-0 bg-muted/20 dark:bg-neutral-900 flex items-center justify-center">
            <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-white dark:from-neutral-800 dark:to-black opacity-80" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay grayscale group-hover:grayscale-0 transition-all duration-1000" />
          </motion.div>
        </div>

      </div>
    </section>
  );
};
