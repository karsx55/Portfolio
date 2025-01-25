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
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <div className="text-[300%] font-bold text-center" ref={textRef}>
        <div className="mb-4">
          Creating impactful products by blending user insights,
        </div>
        <div className="mb-4">
          machine learning, LLM integration, chatbot development,
        </div>
        <div className="mb-4">
          and backend expertise using Django, TensorFlow,
        </div>
        <div className="mb-4">
          and PyTorch for innovative, data-driven solutions.
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
