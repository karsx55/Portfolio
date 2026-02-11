"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Elastic } from "gsap";
import Image from "next/image";
import HeroBanner from "./HeroBanner";

const HeroText = () => {
  const textRef1 = useRef<HTMLHeadingElement>(null);
  const textRef2 = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const animationText = (element: HTMLElement) => {
      if (element) {
        const originalText = element.innerText;
        let newText = "";
        for (let i = 0; i < originalText.length; i++) {
          newText += `<div style="display: inline-block;">`;
          if (originalText[i] === " ") {
            newText += "&nbsp;";
          } else {
            newText += originalText[i];
          }
          newText += "</div>";
        }
        element.innerHTML = newText;
        const targetsDiv = element.querySelectorAll("div");
        gsap.fromTo(
          targetsDiv,
          { opacity: 0, y: 90 },
          {
            opacity: 1,
            y: 0,
            ease: Elastic.easeOut.config(1.2, 0.5),
            stagger: 0.03,
            duration: 2,
          }
        );
      }
    };

    const animateTexts = () => {
      if (textRef1.current) {
        animationText(textRef1.current);
      }
      if (textRef2.current) {
        animationText(textRef2.current);
      }
    };

    animateTexts();
    const interval = setInterval(animateTexts, 5000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen w-full relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto px-4 gap-10 md:gap-0">

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1 mt-6 md:mt-0">
            <div className="relative w-[200px] h-[200px] md:w-[500px] md:h-[500px] rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-primary/20 transition-all duration-300">
              <Image
                src="/me.jpeg"
                alt="Kartik Verma"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center z-10 order-1 md:order-2 text-center md:text-left">
            <div className="flex flex-col">
              <h1 className="text-5xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50" ref={textRef1}>
                Hello,
              </h1>
              <h1 className="text-3xl md:text-7xl font-bold text-white/80 mt-2" ref={textRef2}>
                I&apos;m Kartik Verma
              </h1>
            </div>

            <div className="flex flex-col gap-6 mt-6 md:mt-10 items-center md:items-start">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="p-3 bg-white/5 rounded-full backdrop-blur-sm border border-white/10 hidden md:block">
                  <Image
                    src="arrow.svg"
                    alt="arrow"
                    className="rotate-45 opacity-70"
                    height={30}
                    width={30}
                  />
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <p className="text-xl md:text-3xl font-light text-white">
                    AI Automation engineer
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="icon--pulsing"></span>
                    <span className="text-sm font-medium text-green-400 tracking-wide uppercase">Open To Work</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-4">
                {[
                  { icon: "insta.svg", link: "https://www.instagram.com/thecodedox/" },
                  { icon: "linkedin.svg", link: "https://www.linkedin.com/in/kartik555" },
                  { icon: "github.svg", link: "https://github.com/kartik-555?tab=repositories" }
                ].map((social, index) => (
                  <a key={index} href={social.link} target="_blank" rel="noopener noreferrer"
                    className="p-3 bg-white/5 hover:bg-white/20 rounded-full transition-all duration-300 border border-white/10 hover:scale-110">
                    <Image src={social.icon} alt="social" height={24} width={24} className="invert" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full">
          <HeroBanner />
        </div>
      </div >
    </>
  );
};

export default HeroText;
