"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();
  
  return (
    <header className="w-full py-6 px-8 md:px-16 flex justify-between items-center z-50">
      <Link href="/" className="font-serif font-bold text-2xl tracking-tight">
        Abhishek Verma<span className="text-accent">.</span>
      </Link>
      
      <nav className="hidden md:flex items-center gap-8 font-medium">
        <Link href="/" className={`${pathname === '/' ? 'text-accent' : 'text-ink'} hover:text-accent transition-colors`}>Home</Link>
        <Link href="/about" className={`${pathname === '/about' ? 'text-accent' : 'text-ink'} hover:text-accent transition-colors`}>About & Works</Link>
        <Link href="/notes" className={`${pathname === '/notes' ? 'text-accent' : 'text-ink'} hover:text-accent transition-colors`}>Dev Notes</Link>
        {/* <Link href="/blog" className={`${pathname === '/blog' ? 'text-accent' : 'text-ink'} hover:text-accent transition-colors`}>Blog</Link> */}
        <Link href="/contact" className="btn ml-4">Work with me</Link>
      </nav>
    </header>
  );
};
