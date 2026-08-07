"use client";

import { motion } from "framer-motion";
import { Magnetic } from "@/components/Magnetic";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-background pt-64 pb-16 px-8 md:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <p className="text-accent uppercase tracking-[0.3em] text-xs mb-12 font-medium">Have an idea?</p>
        
        <Magnetic>
          <motion.a 
            href="mailto:vermabhi.017@gmail.com"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="font-display text-[12vw] md:text-[10vw] font-black uppercase leading-none tracking-tighter hover:text-accent transition-colors hoverable text-center relative z-10 block p-8 -m-8"
          >
            Let's Talk
          </motion.a>
        </Magnetic>

        <div className="w-full h-px bg-muted/20 my-24" />

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 text-xs uppercase tracking-[0.2em] text-foreground/70">
          <div className="flex gap-8">
            <Magnetic><a href="https://github.com/abhi-v017" className="hover:text-accent transition-colors hoverable p-4 -m-4 block">GitHub</a></Magnetic>
            <Magnetic><a href="https://www.linkedin.com/in/vermabhi017/" className="hover:text-accent transition-colors hoverable p-4 -m-4 block">LinkedIn</a></Magnetic>
            <Magnetic><a href="mailto:vermabhi.017@gmail.com" className="hover:text-accent transition-colors hoverable p-4 -m-4 block">Mail</a></Magnetic>
            <Magnetic><a href="https://wa.me/918923675163" className="hover:text-accent transition-colors hoverable p-4 -m-4 block">Whatsapp</a></Magnetic>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>Available for freelance</span>
          </div>

          <div>
            &copy; {new Date().getFullYear()} Abhishek Verma.
          </div>
        </div>
      </div>
      
      {/* Huge subtle background text */}
      <div className="absolute bottom-[-10vw] left-1/2 -translate-x-1/2 text-[35vw] font-display font-black text-white/[0.015] pointer-events-none whitespace-nowrap tracking-tighter">
        PORTFOLIO
      </div>
    </footer>
  );
};
