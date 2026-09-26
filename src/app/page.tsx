"use client";

import { Hero } from "@/components/Hero";
import Link from "next/link";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      
      <section className="py-24 px-8 md:px-16 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="font-hand text-2xl text-accent block mb-4">the short version</span>
          <h2 className="text-4xl font-serif font-bold mb-6">I turn complex ideas into robust systems.</h2>
          <p className="text-ink-soft text-lg mb-8">
            From architecture and API design to UI development and deployment, I specialize in building end-to-end products that perform flawlessly.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/about" className="btn">See my work & skills</Link>
          </div>
        </div>
      </section>
      
      <div className="px-8 mb-8 mt-12">
        <div className="tape max-w-2xl mx-auto relative group cursor-pointer hover:-translate-y-1 transition-transform">
          <span className="font-hand text-3xl text-accent block mb-2 -rotate-2">let's talk</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Have an idea? Let's build it.</h2>
          <p className="text-ink-soft mb-8 max-w-md mx-auto text-lg">
            I'm currently available for full-time roles, freelance projects, and open-source collaborations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="btn">Get in touch</Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
