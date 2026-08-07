"use client";

import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Works } from "@/components/Works";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader";
import { useEffect } from "react";

export default function Home() {
  // Ensure smooth scroll doesn't get stuck at top if reloaded mid-page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Preloader />
      <Hero />
      <About />
      <Works />
      <Services />
      <Footer />
    </>
  );
}
