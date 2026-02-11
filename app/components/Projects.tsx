"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
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
    projectRefs.current.forEach((projectRef) => {
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
    <div className="relative w-full">
      <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground gap-8 md:gap-12 py-10 md:py-20 px-4">
        <div className="flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Recent Work</h1>
        </div>


        <div className="flex flex-col gap-8 w-full max-w-4xl">
          {projects.map((project, index) => (
            <React.Fragment key={index}>
              <div
                ref={(el) => {
                  projectRefs.current[index] = el;
                }}
                className="flex justify-between w-full items-center p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group cursor-pointer"
              >
                <h2 className="text-lg md:text-4xl font-bold text-white group-hover:text-primary transition-colors">
                  {project.name.replace(/-/g, " ")}
                </h2>
                <a
                  href={project.link}
                  className="rounded-full p-3 bg-white/10 hover:bg-primary hover:text-white transition-all duration-300 transform group-hover:rotate-45"
                >
                  <Image
                    src="arrow.svg"
                    alt="arrow"
                    className="invert"
                    height={24}
                    width={24}
                  />
                </a>
              </div>
              <div className="w-full border-t border-white/5" />
            </React.Fragment>
          ))}
        </div>

        <Link href="/Work">
          <Button
            color="primary"
            variant="shadow"
            className="px-8 py-6 text-lg font-bold rounded-full mt-10"
          >
            More Work
          </Button>
        </Link>
      </div>
    </div>
  );
}
