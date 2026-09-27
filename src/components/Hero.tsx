"use client";

import Image from "next/image";
import Link from "next/link";
import aboutImg from "@/assets/about.png";

export const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto px-8 md:px-16 pt-12 pb-24 flex flex-col md:flex-row items-center gap-12">
      <div className="w-full md:w-[55%] flex flex-col items-start pt-8">
        <span className="font-hand text-3xl text-terra rotate-[-2deg] mb-1">hi, I'm</span>
        <h1 className="text-5xl sm:text-6xl md:text-[5.5rem] font-serif font-bold mb-6 tracking-tight text-ink flex flex-wrap items-end gap-x-3 gap-y-1">
          Abhishek 
          <span className="relative inline-block z-10 text-terra after:content-[''] after:absolute after:bottom-2 md:after:bottom-3 after:-left-2 after:w-[110%] after:h-[35%] after:bg-[#ECBCA8] after:-z-10">Verma</span>
        </h1>
        
        <div className="inline-block border border-dashed border-terra rounded-[2rem] px-4 md:px-5 py-1.5 md:py-2 font-hand text-ink text-xl md:text-[1.4rem] mb-6 md:mb-8 bg-paper/50 rotate-[-1deg] shadow-sm">
          Full stack developer, built in the real world
        </div>
        
        <p className="font-sans font-light text-ink-soft mb-8 leading-[1.8] text-base md:text-[1.1rem] max-w-lg">
          I build production-grade web and mobile applications using the MERN stack. No buzzwords, just solid engineering, scalable systems, and clean code that actually solves real-world problems.
        </p>
        
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-6 w-full sm:w-auto">
          <Link href="/contact" className="btn text-center">Join the waitlist</Link>
          <a href="/notes" className="btn ghost text-center">Browse free guides</a>
        </div>
        
        <span className="font-hand text-terra text-2xl rotate-[-2deg] mt-2 mb-4 inline-block">
          p.s. actively exploring open source &rarr;
        </span>
        
        <div className="flex flex-wrap gap-3 mt-2 max-w-lg">
          <div className="bg-paper/50 px-5 py-2 rounded-full flex items-center gap-1.5 border border-ink/20 font-hand text-xl">
            <span className="text-terra">150+</span> <span className="text-ink">DSA Problems Solved</span>
          </div>
          <div className="bg-paper/50 px-5 py-2 rounded-full flex items-center gap-1.5 border border-ink/20 font-hand text-xl">
            <span className="text-terra">MERN</span> <span className="text-ink">Stack Expert</span>
          </div>
          <div className="bg-paper/50 px-5 py-2 rounded-full flex items-center gap-1.5 border border-ink/20 font-hand text-xl">
            <span className="text-terra">2+</span> <span className="text-ink">Production Apps</span>
          </div>
        </div>
      </div>
      
      <div className="w-full md:w-[45%] flex justify-center mt-16 md:mt-0">
        <div className="polaroid tape-pink rotate-[4deg]">
          <div className="relative w-[280px] h-[350px]">
            <Image 
              src={aboutImg} 
              alt="Abhishek Verma" 
              fill 
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-4 -left-6 bg-[#A9B89E] text-white font-hand text-xl px-4 py-1 rounded-lg -rotate-6 shadow-md border border-white/20 z-20">AI obsessed ✨</div>
        </div>
      </div>
    </section>
  );
};
