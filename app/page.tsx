"use client";

import Header from "./components/Header";
import HeroText from "./components/HeroText";
import Footer from "./components/Footer";
import SectionOne from "./components/SectionOne";
import Projects from "./components/Projects";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const projects = [
    {
      name: "AI-Powered-Knowledge-Base-Assistant",
      link: "https://github.com/kartik-555/AI-Powered-Knowledge-Base-Assistant",
    },
    { name: "TimeSeriesAnalysis_LSTM_RNN", link: "https://github.com/kartik-555/TimeSeriesAnalysis_LSTM_RNN" },
    { name: "Fake_Account_Detection", link: "https://github.com/kartik-555/Fake_Account_Detection" },
    { name: "TogertherWeCan", link: "https://github.com/kartik-555/TogertherWeCan" },
  ];

  const heroRef = useRef(null);
  const sectionOneRef = useRef(null);

  useEffect(() => {
    gsap.to(heroRef.current, {
      scrollTrigger: {
        trigger: sectionOneRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: heroRef.current,
        pinSpacing: false,
      },
    });
  }, []);

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <section ref={heroRef}>
          <HeroText />
        </section>
        <section ref={sectionOneRef}>
          <SectionOne />
        </section>
        <section>
          <Projects projects={projects} />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
