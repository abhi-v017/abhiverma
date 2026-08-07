"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 40, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x * 100);
      mouseY.set(y * 100);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const titleLines = ["Software", "Engineer", "& Developer"];

  // Clip-path reveal for ultimate editorial feel
  const splitToChars = (word: string) => {
    return word.split("").map((char, index) => (
      <motion.span
        key={index}
        initial={{ y: "110%", rotate: 5 }}
        animate={{ y: 0, rotate: 0 }}
        transition={{
          duration: 1.2,
          ease: [0.76, 0, 0.24, 1], // dramatic easing
          delay: 1.5 + index * 0.02,
        }}
        className="inline-block origin-top-left"
        aria-hidden={true}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));
  };

  return (
    <section 
      className="relative min-h-[100vh] flex flex-col justify-center items-center px-8 md:px-16 overflow-hidden"
    >
      {/* Mesmerizing Multi-color Mesh Gradient Glow */}
      <motion.div 
        style={{ x: springX, y: springY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] pointer-events-none opacity-40 mix-blend-screen" 
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-accent via-[#7000FF] to-transparent blur-[120px] rounded-full animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute inset-0 bg-gradient-to-bl from-[#FF0055] via-transparent to-transparent blur-[100px] rounded-full animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </motion.div>

      <div className="z-10 text-center flex flex-col items-center w-full">
        <div className="overflow-hidden mb-8">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: [0.76, 0, 0.24, 1] }}
            className="text-accent uppercase tracking-[0.4em] text-xs md:text-sm font-semibold"
          >
            Full Stack Web Developer
          </motion.p>
        </div>
        
        <h1 className="font-display font-black text-[15vw] md:text-[10vw] leading-[0.85] tracking-tighter uppercase flex flex-col items-center" aria-label="Software Engineer & Developer">
          {titleLines.map((line, i) => (
            <div key={i} className="overflow-hidden flex" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
              {splitToChars(line)}
            </div>
          ))}
        </h1>

        <div className="overflow-hidden mt-16 max-w-md mx-auto">
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 2.2, ease: [0.76, 0, 0.24, 1] }}
            className="text-foreground/70 text-sm md:text-base font-light tracking-wide leading-relaxed"
          >
            <p>
              I build production-grade web and mobile applications using the MERN stack. Let's build something unforgettable.
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-muted pointer-events-none"
        aria-hidden="true"
      >
        <span>Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-muted to-transparent overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
};
