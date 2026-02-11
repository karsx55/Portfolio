"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionOne: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (textElement) {
      const lines = textElement.querySelectorAll("div");
      lines.forEach((line, index) => {
        gsap.fromTo(
          line,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: line,
              start: "top 80%",
              end: "top 30%",
              scrub: true,
            },
            delay: index * 0.2, // Stagger the animations
          }
        );
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-4 relative z-10">
      <div className="text-2xl md:text-6xl font-bold text-center leading-tight max-w-5xl" ref={textRef}>
        <div className="mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-white/50">
          Building scalable AI automation systems by blending Voice AI Agents,
        </div>
        <div className="mb-4 text-white/90">
          LLM-based AI solutions, and backend expertise using FastAPI,
        </div>
        <div className="mb-4 text-white/80">
          Langgraph, Langchain and Azure. Specialized in creating data-driven,
        </div>
        <div className="mb-4 text-white/70">
          autonomous solutions that optimize efficiency and drive innovation.
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
