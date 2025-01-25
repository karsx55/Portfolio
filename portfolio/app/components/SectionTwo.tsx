import React from "react";

interface Project {
  name: string;
  link: string;
}

interface PageProps {
  projects: Project[];
}

export default function Page({ projects }: PageProps) {
  return (
    <div className="relative">
      <div className="flex flex-col items-center justify-center h-screen bg-white text-black gap-16">
        <div className="flex flex-row items-center justify-center">
          <h1 className="text-[150%] font-bold text-gray-400">Recent Work</h1>
        </div>
        <hr className="border-t-2 border-black w-[50%]" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[90%] max-w-4xl">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-100 rounded-2xl p-4 shadow-md"
            >
              <span className="font-medium text-lg text-black">
                {project.name}
              </span>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-800 transition duration-200"
              >
                Visit
              </a>
            </div>
          ))}
        </div>
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
          ></path>
        </svg>
      </div>
    </div>
  );
}
