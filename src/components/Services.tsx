"use client";

import { motion } from "framer-motion";

const SERVICES = [
  "Full Stack Development",
  "React & Next.js",
  "Node.js & Express",
  "MongoDB & Redis",
  "React Native (Expo)",
  "REST API & WebRTC",
  "Tailwind CSS",
  "AI Integration"
];

export const Services = () => {
  return (
    <section id="services" className="py-24 md:py-48 bg-accent text-background overflow-hidden relative" aria-label="My Services">
      <div className="flex border-y border-background/20 py-8">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          className="flex whitespace-nowrap"
        >
          {/* Double the array for seamless loop */}
          {[...SERVICES, ...SERVICES].map((service, index) => (
            <div 
              key={index} 
              className="flex items-center"
              aria-hidden={index >= SERVICES.length ? "true" : "false"}
            >
              <span className="font-display text-4xl md:text-7xl font-black uppercase px-8 md:px-12 tracking-tighter">
                {service}
              </span>
              <span className="text-2xl md:text-4xl opacity-50">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
