"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Magnetic } from "@/components/Magnetic";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 1 }} // delayed for preloader
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex justify-between items-center px-8 md:px-16 py-6 ${
        scrolled ? "bg-background/80 backdrop-blur-md py-4" : "bg-transparent"
      }`}
    >
      <Magnetic>
        <Link href="/" className="text-xl font-display font-bold uppercase tracking-widest hover:text-accent transition-colors hoverable p-4 -m-4 block">
          A. Verma
        </Link>
      </Magnetic>
      
      <div className="hidden md:flex gap-12 text-xs uppercase tracking-[0.2em] font-medium">
        <Magnetic>
          <Link href="#about" className="hover:text-accent transition-colors hoverable p-4 -m-4 block text-foreground/80 hover:text-accent">About</Link>
        </Magnetic>
        <Magnetic>
          <Link href="#works" className="hover:text-accent transition-colors hoverable p-4 -m-4 block text-foreground/80 hover:text-accent">Works</Link>
        </Magnetic>
        <Magnetic>
          <Link href="#services" className="hover:text-accent transition-colors hoverable p-4 -m-4 block text-foreground/80 hover:text-accent">Services</Link>
        </Magnetic>
        <Magnetic>
          <Link href="#contact" className="hover:text-accent transition-colors hoverable p-4 -m-4 block text-foreground/80 hover:text-accent">Contact</Link>
        </Magnetic>
        <ThemeToggle />
      </div>
    </motion.nav>
  );
};
