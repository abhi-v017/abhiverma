"use client";

import Image from "next/image";
import aboutImg from "@/assets/about.jpeg";

export const About = () => {
  return (
    <section id="about" className="py-24 px-8 md:px-16">
      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16">
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="polaroid -rotate-3 w-full max-w-[380px]">
              <div className="relative w-full aspect-[4/5]">
                <Image 
                  src={aboutImg} 
                  alt="Abhishek Verma" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="text-center font-hand text-2xl mt-4 text-ink">hi again 👋</div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <span className="text-accent uppercase tracking-widest text-sm font-bold mb-2 block">about me</span>
            <h2 className="text-4xl font-serif font-bold mb-6">A developer who loves solving problems</h2>
            <div className="text-ink-soft space-y-4 leading-relaxed text-lg">
              <p>
                I'm a full-stack developer with a deep passion for building things from scratch. I don't just write code; I architect systems that can scale.
              </p>
              <p>
                With a strong foundation in Data Structures, Algorithms, and System Design, I've independently designed, built, and deployed production-grade applications. Whether it's integrating real-time WebSockets, designing REST APIs, or exploring the latest AI tools, I'm always looking for the most efficient way to solve real-world problems.
              </p>
            </div>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn ghost mt-8">Connect on LinkedIn</a>
          </div>
          
        </div>
      </section>
  );
};
