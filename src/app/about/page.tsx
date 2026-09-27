"use client";

import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Works } from "@/components/Works";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <div className="pt-12">
        <About />
      </div>
      <Services />
      <Works />
      
      <div className="divider"></div>
      
      <div className="px-8 mb-8 mt-12">
        <div className="tape max-w-2xl mx-auto relative group cursor-pointer hover:-translate-y-1 transition-transform">
          <span className="font-hand text-3xl text-accent block mb-2 rotate-2">hire me</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Like what you see?</h2>
          <p className="text-ink-soft mb-8 max-w-md mx-auto text-lg">
            I'm actively looking for a team that values clean architecture, scalable systems, and pixel-perfect UIs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="btn">Let's talk</Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
