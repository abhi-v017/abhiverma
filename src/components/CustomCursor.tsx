"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useVelocity, useTransform } from "framer-motion";

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState("");
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // High stiffness for immediate snapping, high damping to prevent wobble
  const springConfig = { damping: 25, stiffness: 400, mass: 0.2 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Stretchy cursor physics based on velocity
  const velocityX = useVelocity(cursorXSpring);
  const velocityY = useVelocity(cursorYSpring);
  
  // Calculate a combined absolute velocity
  const scaleX = useTransform(velocityX, [-1000, 0, 1000], [1.5, 1, 1.5]);
  const scaleY = useTransform(velocityY, [-1000, 0, 1000], [1.5, 1, 1.5]);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const linkOrButton = target.closest("a") || target.closest("button") || target.classList.contains("hoverable");
      const projectHover = target.closest(".project-card");

      if (projectHover) {
        setIsHovering(true);
        setHoverText("VIEW");
      } else if (linkOrButton) {
        setIsHovering(true);
        setHoverText("");
      } else {
        setIsHovering(false);
        setHoverText("");
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  const size = isHovering ? (hoverText ? 80 : 60) : 16;
  const opacity = isHovering ? (hoverText ? 1 : 0.8) : 1;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center overflow-hidden"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
        scaleX,
        scaleY,
        width: size,
        height: size,
        backgroundColor: hoverText ? "var(--foreground)" : "var(--foreground)",
        opacity,
        mixBlendMode: "difference", // This ensures maximum contrast always
      }}
    >
      <motion.span 
        initial={{ opacity: 0 }}
        animate={{ opacity: hoverText ? 1 : 0 }}
        className="text-[10px] font-bold text-background uppercase tracking-widest pointer-events-none mix-blend-normal"
      >
        {hoverText}
      </motion.span>
    </motion.div>
  );
};
