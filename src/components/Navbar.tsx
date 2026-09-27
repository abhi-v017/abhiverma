"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <>
      <header className="sticky top-0 w-full py-2 px-8 md:px-16 flex justify-around items-center z-50 bg-cream/40 backdrop-blur-xl border-b border-ink/5 shadow-sm">
        <Link href="/" className="font-serif font-bold text-xl tracking-tight relative z-50">
          Abhishek Verma<span className="text-accent">.</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-light relative z-50">
          <Link href="/" className={`${pathname === '/' ? 'text-accent' : 'text-ink'} hover:text-accent transition-colors`}>Home</Link>
          <Link href="/about" className={`${pathname === '/about' ? 'text-accent' : 'text-ink'} hover:text-accent transition-colors`}>About & Works</Link>
          <Link href="/notes" className={`${pathname === '/notes' ? 'text-accent' : 'text-ink'} hover:text-accent transition-colors`}>Resources</Link>
          {/* <Link href="/blog" className={`${pathname === '/blog' ? 'text-accent' : 'text-ink'} hover:text-accent transition-colors`}>Blog</Link> */}
          <Link href="/contact" className="btn ml-4">Work with me</Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden relative z-50 p-2 text-ink"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5 items-end">
            <span className={`h-0.5 bg-ink transition-all duration-300 ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
            <span className={`h-0.5 bg-ink transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
            <span className={`h-0.5 bg-ink transition-all duration-300 ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`}></span>
          </div>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-paper flex flex-col justify-center items-center p-8 animate-in fade-in duration-200" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.12\'/%3E%3C/svg%3E")' }}>
          
          <div className="tape p-8 mb-12 transform -rotate-2">
            <h2 className="font-serif text-3xl font-bold">Menu</h2>
          </div>

          <nav className="flex flex-col items-center gap-8 font-hand text-4xl">
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/" className={`${pathname === '/' ? 'text-accent' : 'text-ink'} hover:-translate-y-1 transition-transform rotate-1`}>Home</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/about" className={`${pathname === '/about' ? 'text-accent' : 'text-ink'} hover:-translate-y-1 transition-transform -rotate-2`}>About & Works</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/notes" className={`${pathname === '/notes' ? 'text-accent' : 'text-ink'} hover:-translate-y-1 transition-transform rotate-2`}>Resources</Link>
          </nav>
          
          <div className="mt-16">
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/contact" className="btn shadow-md text-xl font-hand px-8 py-3 rotate-2">Work with me ✨</Link>
          </div>
        </div>
      )}
    </>
  );
};
