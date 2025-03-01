"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Button } from "@heroui/react";

interface Project {
  name: string;
  link: string;
}

interface PageProps {
  projects: Project[];
}

export default function Project({ projects }: PageProps) {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    projectRefs.current.forEach((projectRef, index) => {
      if (projectRef) {
        gsap.fromTo(
          projectRef,
          { scale: 1 },
          {
            scale: 1.05,
            duration: 0.3,
            paused: true,
            ease: "power1.inOut",
            onReverseComplete: () => {
              gsap.set(projectRef, { clearProps: "all" });
              return void 0;
            },
          }
        );

        projectRef.addEventListener("mouseenter", () => {
          gsap.to(projectRef, { scale: 1.05, duration: 0.3 });
        });

        projectRef.addEventListener("mouseleave", () => {
          gsap.to(projectRef, { scale: 1, duration: 0.3 });
        });
      }
    });
  }, [projects]);

  return (
    <div className="relative">
      <div className="flex flex-col items-center justify-center h-screen bg-white text-black gap-10">
        <div className="flex items-center justify-center">
          <h1 className="text-[150%] font-bold text-gray-600">Recent Work</h1>
        </div>
        <hr className="border-t-2 border-black w-[50%]" />
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <React.Fragment key={index}>
              <div
                ref={(el) => {
                  projectRefs.current[index] = el;
                }}
                className="flex justify-between w-[110%] items-center"
              >
                <h2 className="text-[150%] font-bold text-black">
                  {project.name}
                </h2>
                <a
                  href={project.link}
                  className="rounded-full p-2 bg-gray-500 hover:bg-black transition duration-200"
                >
                  <Image
                    src="arrow.svg"
                    alt="arrow"
                    style={{ transform: "rotate(270deg)" }}
                    height={25}
                    width={25}
                  />
                </a>
              </div>
              <hr className="border-t-2 border-gray-200 w-[110%]" />
            </React.Fragment>
          ))}
        </div>
        <Button
          color="primary"
          variant="bordered"
          className="border-2 border-black px-4 py-2 rounded-md md:px-6 md:py-3 hover:bg-black hover:text-white transition duration-200"
        >
          More Work
        </Button>
      </div>
      <div
        className="svgContainer"
        style={{ width: "100%", height: "100%", aspectRatio: "inherit" }}
      >
        <svg
          style={{ width: "100%, height: 100%" }}
          viewBox="0 0 1440 137"
          preserveAspectRatio="none"
          width="100%"
          height="100%"
        >
          <path
            d="M0,0 C480,120 960,120 1440,0 L1440,137 L0,137 Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
}
