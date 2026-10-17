"use client";

import React from "react";
import Image from "next/image";
// Button removed

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="flex flex-col items-center justify-center px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-10 text-center md:text-left">
          <Image
            src="/profile.png"
            alt="logo"
            width={100}
            height={100}
            className="rounded-full border border-white/10"
          />
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Great things can happen with
            <br /> <span className="text-secondary">a simple &quot;hello!&quot;</span>
          </h1>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-12 w-full">
        <div className="w-3/4 border-t border-white/10" />
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-10 md:gap-32 mt-12 px-10 md:px-0 w-full max-w-6xl mx-auto">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-xl">kartik.</h1>
          <p className="text-gray-400">Sec-127 Mohali, India</p>
          <a href="mailto:kartik.dev.works@gmail.com" className="text-gray-400 hover:text-white transition-colors">kartik.dev.works@gmail.com</a>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-lg text-white/50">Explore</h2>
          <a href="/Work" className="text-white hover:text-primary transition-colors">Work</a>
          <a href="/Contact" className="text-white hover:text-primary transition-colors">Contact</a>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-lg text-white/50">Socials</h2>
          <a href="https://www.instagram.com/thecodedox/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">Instagram</a>
          <a href="https://www.linkedin.com/in/kartik555" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">LinkedIn</a>
          <a href="https://github.com/kartik-555" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">GitHub</a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-16 w-full">
        <div className="w-3/4 border-t border-white/10" />
      </div>

      <div className="flex flex-col items-center mt-8 text-center px-4">
        <p className="text-sm text-gray-500">© 2026 KARTIK. ALL RIGHT RESERVED</p>
      </div>
    </footer>
  );
};

export default Footer;
