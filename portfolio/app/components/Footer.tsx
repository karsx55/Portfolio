"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@heroui/react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row mt-[10%] gap-16">
          <Image
            src="/profile.png"
            alt="logo"
            width={200}
            height={200}
            className=""
          />
          <h1 className="text-[300%]">
            Great things can happen with
            <br /> a simple "hello!"
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        <hr className="my-8 border-t border-gray-200 w-3/4" />
      </div>
      <div className="flex flex-row items-center justify-center gap-[15%]">
        <div className="flex flex-col justify-center gap-10">
          <h1>kartik.</h1>
          <h1>Sec-127 Mohali, India</h1>
          <h1>kartikvermaaa01@gmail.com</h1>
        </div>
        <div className="flex flex-col justify-center gap-10">
          <a href="#about" className="text-white hover:underline">
            About
          </a>
          <a href="#work" className="text-white hover:underline">
            Work
          </a>
          <a href="#contact" className="text-white hover:underline">
            Contact
          </a>
        </div>
        <div className="flex flex-col justify-center gap-10">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-[8%]">
        <hr className="my-8 border-t border-gray-200 w-3/4" />
      </div>
      <div className="flex flex-col items-center">
        <h1>©2025 KARTIK COMPANY. ALL RIGHT RESERVED</h1>
      </div>
    </footer>
  );
};

export default Footer;
