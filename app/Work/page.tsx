"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
import React from "react";

export default function Work() {
    const projects = [
        { name: "AI Receptionist", link: "https://github.com/kartik-555/AI_receptionist" },
        { name: "WebSocket Conversation", link: "https://github.com/kartik-555/FastAgent-WS" },
        { name: "AI-Powered-Knowledge-Base-Assistant", link: "https://github.com/kartik-555/AI-Powered-Knowledge-Base-Assistant" },
        { name: "TimeSeriesAnalysis_LSTM_RNN", link: "https://github.com/kartik-555/TimeSeriesAnalysis_LSTM_RNN" },
        { name: "Fake_Account_Detection", link: "https://github.com/kartik-555/Fake_Account_Detection" },
    ];

    return (
        <div>
            <Header />
            <main className="min-h-screen pt-20">
                <section className="flex flex-col items-center justify-center py-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-10">My Work</h1>
                    {/* Reusing Projects component but passing the list. 
               The Projects component has its own internal styling and title "Recent Work", 
               Layout might need adjustment if I want to remove "Recent Work" title from the component or just accept it.
               For now, I'll accept it or I might need to refactor Projects.tsx to accept a title prop.
           */}
                    <Projects projects={projects} />
                </section>
            </main>
            <Footer />
        </div>
    );
}
