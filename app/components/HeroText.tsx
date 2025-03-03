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
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row items-center justify-center h-screen">
        <div className="ml-[10%] mb-[5%]">
          <Image src="/image.webp" alt="me" height={800} width={800} />
        </div>
        <div className="flex flex-col container-hero mt-[-10%]">
          <h1 id="text-anim" className="text-[700%]" ref={textRef1}>
            Hello,
          </h1>
          <h1 id="text-anim" className="text-[500%]" ref={textRef2}>
            I'm Kartik Verma
          </h1>
          <div className="flex flex-row items-center gap-4  mt-[15%]">
            <div className="flex flex-col justify-center items-center">
              <Image
                src="arrow.svg"
                alt="arrow"
                style={{ transform: "rotate(45deg)" }}
                height={50}
                width={50}
              />
              <p className="text-[200%]">
                Freelance
                <br />
                Developer
              </p>
              <div className="flex flex-row items-center  mt-4">
                <span className="icon--pulsing"></span> <p>Open To Work</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 ml-[150]">
            <a href="https://www.instagram.com/1kartik.verma/" target="_blank" rel="noopener noreferrer">
            <button className="rounded-full p-2 bg-gray-200 hover:bg-gray-300">
              <Image src="insta.svg" alt="Instagram" height={20} width={20} />
            </button>
            </a>
            <a href="https://www.linkedin.com/in/kartik555" target="_blank" rel="noopener noreferrer">
              <button className="rounded-full p-2 bg-gray-200 hover:bg-gray-300">
                <Image src="linkedin.svg" alt="LinkedIn" height={20} width={20} />
              </button>
            </a>
            <a href="https://github.com/kartik-555?tab=repositories" target="_blank" rel="noopener noreferrer">
              <button className="rounded-full p-2 bg-gray-200 hover:bg-gray-300">
                <Image src="github.svg" alt="GitHub" height={20} width={20} />
              </button>
            </a>
            </div>
          </div>
        </div>
      </div>
      <HeroBanner />
    </div>
  );
};

export default HeroText;
