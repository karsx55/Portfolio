import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const editorial = localFont({
  src: [
    { path: "./fonts/fraunces-regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/fraunces-bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/fraunces-italic.ttf", weight: "500", style: "italic" },
  ],
  variable: "--font-editorial",
  display: "swap",
});
const sans = localFont({
  src: [
    { path: "./fonts/dm-sans.ttf", weight: "400", style: "normal" },
    { path: "./fonts/dm-sans-semibold.ttf", weight: "600", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});
const mono = localFont({
  src: "./fonts/plex-mono.ttf",
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kartik Dev Works — AI & Backend Engineer",
  description:
    "The portfolio of Kartik Verma. Explore AI agents, voice systems, retrieval pipelines, and the backend engineering behind them.",
  openGraph: {
    title: "Kartik Dev Works — Kartik Verma",
    description:
      "Intelligent systems. Thoughtfully engineered. The work and notes of an AI & backend engineer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${editorial.variable} ${sans.variable} ${mono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
