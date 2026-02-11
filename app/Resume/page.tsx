"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@heroui/react";
import React from "react";

import Image from "next/image";

export default function Resume() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Header />
            <main className="flex-grow flex flex-col items-center justify-center p-4 md:p-8 gap-8 pt-20">
                <div className="w-full max-w-4xl flex flex-col gap-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                            My Resume
                        </h1>
                        <Button
                            as="a"
                            href="/Kartik_verma_resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            download="Kartik_verma_resume.pdf"
                            color="primary"
                            variant="shadow"
                            className="font-bold text-lg px-8 py-6"
                        >
                            Download PDF
                        </Button>
                    </div>

                    {/* Intro Section */}
                    <section className="flex flex-col md:flex-row items-center gap-10 mt-10">
                        <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-white/20 shrink-0">
                            <Image
                                src="/me.jpeg"
                                alt="Kartik Verma"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <h2 className="text-3xl font-bold">AI Solution Backend Developer</h2>
                            <p className="text-xl text-gray-400">
                                AI Solution Backend Developer with 2 year of hands-on experience building production-grade
                                AI systems using Python, FastAPI, Azure, and LLMs. Specialized in agentic AI sys-
                                tems, Retrieval-Augmented Generation (RAG), LangChain/LangGraph, and cloud-
                                native backend architectures. Proven ability to design, deploy, and optimize AI-driven interview
                                and automation solutions with real-world constraints like latency, scalability, and reliability.
                            </p>
                        </div>
                    </section>

                    {/* Technical Skills */}
                    <section className="mt-10">
                        <h2 className="text-3xl font-bold mb-6 border-b border-white/10 pb-2">Technical Skills</h2>
                        <div className="flex flex-wrap gap-4">
                            {[
                                { title: "Languages", desc: "Python, JavaScript, HTML, CSS" },
                                { title: "Backend & APIs", desc: "FastAPI, Django, Django REST Framework" },
                                { title: "LLMs & AI", desc: "LangChain, LangGraph, OpenAI API, Hugging Face Transformers, RAG, Prompt Engineering, Agentic AI" },
                                { title: "ML/DL", desc: "TensorFlow, Keras, PyTorch, Scikit-learn, YOLO, OpenCV" },
                                { title: "Vector Search", desc: "FAISS, VectorDB concepts" },
                                { title: "Cloud & DevOps", desc: "Azure (Service Bus, Blob Storage), Docker, Git" },
                                { title: "Data", desc: "MongoDB, NumPy, Pandas, Data Preprocessing" }
                            ].map((skill, index) => (
                                <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10 w-full md:w-[calc(50%-0.5rem)] hover:bg-white/10 transition-colors">
                                    <h3 className="text-xl font-bold text-primary mb-2">{skill.title}</h3>
                                    <p className="text-gray-400">{skill.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Experience */}
                    <section className="mt-10">
                        <h2 className="text-3xl font-bold mb-6 border-b border-white/10 pb-2">Experience</h2>
                        <div className="flex flex-col gap-6">
                            <div className="bg-white/5 p-5 md:p-8 rounded-xl border border-white/10">
                                <div className="flex justify-between items-start mb-4 flex-col md:flex-row gap-2 md:gap-0">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold">Full-Stack Backend / AI Engineer</h3>
                                        <p className="text-lg text-primary">Athmick.ai | Remote</p>
                                    </div>
                                    <span className="text-gray-500">April 2025 – Present</span>
                                </div>
                                <ul className="list-disc list-inside text-gray-400 space-y-2 mt-4">
                                    <li>Designed and developed AI-driven interview platforms using FastAPI with agentic workflows powered by LangChain and LangGraph.</li>
                                    <li>Built and deployed LLM-based agents capable of multi-step reasoning, tool usage, memory handling, and dynamic prompt orchestration.</li>
                                    <li>Implemented Retrieval-Augmented Generation (RAG) pipelines including document ingestion, chunking strategies, embeddings, and vector-based retrieval.</li>
                                    <li>Integrated Azure cloud services including Azure Service Bus, Blob Storage, and secure secret management.</li>
                                    <li>Optimized prompt engineering, agent execution flows, and response latency while minimizing hallucinations.</li>
                                    <li>Collaborated closely with product and frontend teams to translate business requirements into reliable AI-backed backend services.</li>
                                </ul>
                            </div>

                            <div className="bg-white/5 p-5 md:p-8 rounded-xl border border-white/10">
                                <div className="flex justify-between items-start mb-4 flex-col md:flex-row gap-2 md:gap-0">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold">Junior Python Developer</h3>
                                        <p className="text-lg text-primary">Spark Brains Pvt. Ltd. | Chandigarh</p>
                                    </div>
                                    <span className="text-gray-500">Jul 2024 – Dec 2024</span>
                                </div>
                                <ul className="list-disc list-inside text-gray-400 space-y-2 mt-4">
                                    <li>Developed backend systems using Django, FastAPI, PostgreSQL, and Django REST Framework.</li>
                                    <li>Built and delivered multiple production projects including an Employee Management System and FNTX Trading Platform.</li>
                                    <li>Applied AI techniques such as transfer learning, time-series forecasting, and object detection using TensorFlow, Keras, and YOLO.</li>
                                    <li>Followed clean code practices, modular architecture, and REST API best practices.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Education */}
                    <section className="mt-10">
                        <h2 className="text-3xl font-bold mb-6 border-b border-white/10 pb-2">Education</h2>
                        <div className="flex flex-col gap-4">
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                                <h3 className="text-xl font-bold">B.E. in Computer Science and Engineering</h3>
                                <p className="text-gray-500">Chandigarh University, Mohali | May 2024</p>
                                <p className="text-gray-400">CGPA: 7.75/10</p>
                            </div>
                        </div>
                    </section>

                    {/* Certifications */}
                    <section className="mt-10 mb-10">
                        <h2 className="text-3xl font-bold mb-6 border-b border-white/10 pb-2">Certifications</h2>
                        <div className="flex flex-col gap-4">
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                                <p className="text-gray-300">Machine Learning, Coursera (Stanford University)</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                                <p className="text-gray-300">Introduction to TensorFlow for AI, ML, and Deep Learning (DeepLearning.AI)</p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
