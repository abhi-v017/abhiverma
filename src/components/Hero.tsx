"use client";

import Image from "next/image";
import Link from "next/link";
import aboutImg from "@/assets/about.jpeg";

export const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto px-8 md:px-16 pt-12 pb-24 flex flex-col md:flex-row items-center gap-12">
      <div className="w-full md:w-3/5 flex flex-col items-start">
        <span className="font-hand text-3xl text-ink-soft rotate-[-2deg] mb-2">hi, I'm</span>
        <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6">
          Abhishek <span className="underline decoration-accent decoration-4 underline-offset-4">Verma</span>
        </h1>
        
        <span className="text-xl md:text-2xl font-serif text-ink-soft mb-6 block">
          Full stack developer & AI enthusiast
        </span>
        
        <p className="text-lg text-ink-soft mb-8 leading-relaxed max-w-lg">
          I build production-grade web and mobile applications using the MERN stack. No buzzwords, just solid engineering, scalable systems, and clean code that actually solves real-world problems.
        </p>
        
        <div className="flex flex-wrap gap-4 mb-4">
          <Link href="/contact" className="btn">Work with me</Link>
          <a href="https://github.com/vermabhi" target="_blank" rel="noopener noreferrer" className="btn ghost">Browse GitHub</a>
        </div>
        
        <span className="font-hand text-accent text-2xl rotate-[-2deg] mt-2 inline-block">
          p.s. actively exploring open source →
        </span>
        
        <div className="flex gap-8 mt-12 pt-8 border-t border-ink/10">
          <div><b className="block text-xl">150+</b> <span className="text-sm text-ink-soft">DSA Problems Solved</span></div>
          <div><b className="block text-xl">MERN</b> <span className="text-sm text-ink-soft">Stack Expert</span></div>
          <div><b className="block text-xl">2+</b> <span className="text-sm text-ink-soft">Production Apps</span></div>
        </div>
      </div>
      
      <div className="w-full md:w-2/5 flex justify-center mt-12 md:mt-0">
        <div className="polaroid rotate-3">
          <div className="relative w-64 h-80">
            <Image 
              src={aboutImg} 
              alt="Abhishek Verma" 
              fill 
              className="object-cover"
              priority
            />
          </div>
          <div className="text-center font-hand text-2xl mt-4 text-ink">Coding always ✨</div>
        </div>
      </div>
    </section>
  );
};
