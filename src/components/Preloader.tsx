"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scroll during preloader
    document.body.style.overflow = "hidden";
    
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 15) + 1;
      
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = ""; // Restore scroll
        }, 600); // Wait a beat at 100%
      }
      
      setProgress(currentProgress);
    }, 100);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isLoading ? 0 : "-100vh" }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background text-foreground"
      aria-hidden="true"
    >
      <div className="flex flex-col items-center">
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display text-[15vw] leading-none font-black tracking-tighter"
          >
            {progress}%
          </motion.h1>
        </div>
        <div className="w-[15vw] h-1 bg-muted/20 mt-4 overflow-hidden rounded-full">
          <motion.div 
            className="h-full bg-accent"
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.1 }}
          />
        </div>
      </div>
    </motion.div>
  );
};
