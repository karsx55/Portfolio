"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import React from "react";
import { Link } from "@heroui/react";

export default function Contact() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Header />
            <main className="flex-grow flex flex-col items-center justify-center p-8">
                <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-8">
                    Get in Touch
                </h1>
                <p className="text-xl md:text-2xl text-center max-w-2xl text-gray-400 mb-12">
                    I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                </p>

                <div className="flex flex-col gap-6 w-full max-w-md">
                    <div className="flex flex-col gap-2 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                        <h2 className="text-2xl font-bold">Email</h2>
                        <Link
                            href="mailto:kartikvermaaa01@gmail.com"
                            className="text-lg text-gray-300 hover:text-primary transition-colors"
                        >
                            kartikvermaaa01@gmail.com
                        </Link>
                    </div>

                    <div className="flex flex-col gap-2 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                        <h2 className="text-2xl font-bold">Phone</h2>
                        <Link
                            href="tel:+917417193304"
                            className="text-lg text-gray-300 hover:text-primary transition-colors"
                        >
                            +91 74171 93304
                        </Link>
                    </div>

                    <div className="flex flex-col gap-2 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                        <h2 className="text-2xl font-bold">Socials</h2>
                        <div className="flex flex-col gap-2">
                            <Link
                                href="https://www.linkedin.com/in/kartik555"
                                isExternal
                                className="text-lg text-gray-300 hover:text-primary transition-colors"
                            >
                                LinkedIn
                            </Link>
                            <Link
                                href="https://github.com/kartik-555"
                                isExternal
                                className="text-lg text-gray-300 hover:text-primary transition-colors"
                            >
                                GitHub
                            </Link>
                            <Link
                                href="https://www.instagram.com/thecodedox/"
                                isExternal
                                className="text-lg text-gray-300 hover:text-primary transition-colors"
                            >
                                Instagram
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
