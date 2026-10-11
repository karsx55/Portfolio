"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  email,
  github,
  linkedin,
  projects,
  skills,
  type Project,
} from "../data";

type Edition = "home" | "work" | "resume" | "contact";

function Arrow() {
  return (
    <span aria-hidden="true" className="arrow">
      ↗
    </span>
  );
}

function Star({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M50 0 57 32 79 10 68 41 100 35 73 53 94 78 63 68 60 100 47 73 22 94 32 63 0 60 28 47 6 22 38 32Z" />
    </svg>
  );
}

function Masthead({ edition }: { edition: Edition }) {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    try {
      const saved = localStorage.getItem("dispatch-ink") === "night";
      setDark(saved);
      document.documentElement.dataset.ink = saved ? "night" : "day";
    } catch {
      /* The default edition also works without browser storage. */
    }
  }, []);

  function toggleInk() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.ink = next ? "night" : "day";
    try {
      localStorage.setItem("dispatch-ink", next ? "night" : "day");
    } catch {
      /* Storage is optional. */
    }
  }

  return (
    <header className="masthead" id="top">
      <div className="topline mono">
        <span>INDEPENDENT THINKING. INTELLIGENT BUILDING.</span>
        <button
          onClick={toggleInk}
          className="ink-toggle"
          aria-label={
            dark ? "Switch to day edition" : "Switch to night edition"
          }
        >
          <span aria-hidden="true">{dark ? "☀" : "◐"}</span>{" "}
          {dark ? "DAY EDITION" : "NIGHT EDITION"}
        </button>
      </div>
      <div className="masthead-title">
        <span className="masthead-side mono">
          EST. IN CURIOSITY
          <br />
          BUILT WITH INTENT
        </span>
        <Link href="/" aria-label="The Kartik Dispatch, home">
          <span className="masthead-the">The</span> Kartik Dispatch
          <span className="masthead-dot">.</span>
        </Link>
        <span className="masthead-side mono masthead-right">
          AI & BACKEND
          <br />
          THE PERSONAL EDITION
        </span>
      </div>
      <div className="edition-line mono">
        <span>INDIA · AVAILABLE WORLDWIDE</span>
        <span>VOL. 01 — THE ENGINEERING EDITION</span>
        <span>A LITTLE CODE. A LOT OF CURIOSITY.</span>
      </div>
      <nav className="navigation" aria-label="Main navigation">
        <Link className="nav-name" href="/">
          KARTIK VERMA <span className="nav-star">✳</span>
        </Link>
        <div className="nav-links">
          <Link href={edition === "home" ? "#work" : "/Work"}>
            Selected work <sup>05</sup>
          </Link>
          <Link href={edition === "home" ? "#about" : "/#about"}>
            The person
          </Link>
          <Link href={edition === "home" ? "#toolkit" : "/#toolkit"}>
            The toolkit
          </Link>
          <Link href="/Resume">
            Résumé <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <Link
          href={edition === "home" ? "#contact" : "/Contact"}
          className="nav-contact"
        >
          LET’S TALK <Arrow />
        </Link>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="section-kicker mono">
        <span>
          <span className="red-dot" /> FRONT PAGE / THE BIG PICTURE
        </span>
        <span>FILED UNDER: APPLIED INTELLIGENCE</span>
      </div>
      <div className="hero-grid">
        <div className="hero-story">
          <div className="story-eyebrow mono">
            MEET THE ENGINEER BEHIND THE SYSTEMS
          </div>
          <h1 id="hero-title">
            Making machines
            <br />a little more
            <br />
            <em>human.</em>
            <Star className="headline-star" />
          </h1>
          <p className="hero-description">
            I’m Kartik. An AI & backend engineer turning complex problems into
            thoughtful, useful systems. From the first conversation to the last
            API call.
          </p>
          <div className="hero-actions">
            <a href="#work" className="button button-dark">
              EXPLORE THE WORK <Arrow />
            </a>
            <a href="#about" className="text-link">
              A little about me <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="byline mono">
            <span className="byline-rule" /> PYTHON AT HEART. BUILDER BY NATURE.
          </div>
        </div>
        <figure className="hero-portrait">
          <div className="portrait-frame">
            <Image
              src="/me.jpeg"
              alt="Kartik Verma outdoors in the mountains"
              width={720}
              height={717}
              priority
              sizes="(max-width: 700px) 100vw, 40vw"
            />
            <div className="portrait-grain" />
            <span className="portrait-corner mono">FIG. 01</span>
            <div className="portrait-stamp">
              HUMAN
              <br />
              <span>behind the AI</span>
              <br />
              VERIFIED ✓
            </div>
          </div>
          <figcaption className="mono">
            <span>THE SUBJECT, AWAY FROM HIS TERMINAL.</span>
            <span>↗ INDIA</span>
          </figcaption>
        </figure>
        <aside className="desk-notes">
          <span className="mono red-text">A NOTE FROM THE DESK</span>
          <h2>
            Good ideas.
            <br />
            Better systems.
          </h2>
          <p>
            I build the things behind the things. The agents, APIs, and
            infrastructure that make an experience work.
          </p>
          <div className="small-rule" />
          <span className="mono">CURRENTLY EXPLORING</span>
          <div className="note-topics">
            <span>Agentic AI</span>
            <span>Voice experiences</span>
            <span>Reliable backends</span>
          </div>
          <a
            href="/Kartik_verma_resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="desk-resume"
          >
            The full résumé <Arrow />
          </a>
          <div className="desk-signature">Kartik.</div>
        </aside>
      </div>
      <div className="dispatch-wire mono">
        <span className="wire-label">
          ON THE WIRE <span aria-hidden="true">↗</span>
        </span>
        <span>VOICE AI</span>
        <span className="wire-star">✳</span>
        <span>AGENTIC WORKFLOWS</span>
        <span className="wire-star">✳</span>
        <span>BACKEND ENGINEERING</span>
        <span className="wire-star">✳</span>
        <span>IDEAS INTO SYSTEMS</span>
      </div>
    </section>
  );
}

function ProjectVisual({ type }: { type: Project["visual"] }) {
  return (
    <div className={`project-visual visual-${type}`} aria-hidden="true">
      <div className="visual-label mono">
        SYSTEM SKETCH /{" "}
        {type === "voice"
          ? "01"
          : type === "knowledge"
            ? "02"
            : type === "socket"
              ? "03"
              : type === "forecast"
                ? "04"
                : "05"}
      </div>
      {type === "voice" && (
        <>
          <div className="voice-orbit">
            <span className="voice-center">✳</span>
            <span className="orbit-dot" />
          </div>
          <div className="waveform">
            {[
              12, 20, 34, 22, 46, 66, 38, 76, 92, 52, 34, 60, 84, 42, 26, 48,
              64, 30, 16, 28, 12,
            ].map((h, i) => (
              <span
                key={i}
                style={{ height: `${h}px`, animationDelay: `${i * 0.07}s` }}
              />
            ))}
          </div>
          <div className="visual-bottom mono">
            <span>VOICE IN</span>
            <span>INTELLIGENCE OUT ↗</span>
          </div>
        </>
      )}
      {type === "knowledge" && (
        <>
          <svg className="knowledge-lines" viewBox="0 0 400 240">
            <path
              d="M65 75 200 125 335 65M200 125 90 190M200 125 315 190M200 125 200 30"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="4 5"
            />
          </svg>
          <div className="knowledge-node node-one">DOCUMENTS</div>
          <div className="knowledge-node node-two">CONTEXT</div>
          <div className="knowledge-node node-three">RETRIEVE</div>
          <div className="knowledge-node node-four">ANSWER ↗</div>
          <div className="knowledge-core">
            K<span>knowledge</span>
          </div>
          <div className="visual-bottom mono">
            <span>CONNECT THE DOTS</span>
            <span>RAG / LLM</span>
          </div>
        </>
      )}
      {type === "socket" && (
        <>
          <div className="terminal">
            <div className="terminal-top">
              <span />
              <span />
              <span />
              <b className="mono">conversation.ws</b>
            </div>
            <div className="terminal-body mono">
              <p>
                <span>→</span> connection.open()
              </p>
              <p>
                <span>←</span> agent.ready
              </p>
              <p>
                <span>→</span> “Let’s build something.”
              </p>
              <p>
                <span>←</span> listening
                <span className="terminal-cursor">_</span>
              </p>
            </div>
          </div>
          <div className="visual-bottom mono">
            <span>CLIENT ⇄ AGENT</span>
            <span>STAY CONNECTED</span>
          </div>
        </>
      )}
      {type === "forecast" && (
        <>
          <svg className="forecast-graph" viewBox="0 0 400 220">
            <path
              className="graph-grid"
              d="M20 50H380M20 100H380M20 150H380M80 25V190M160 25V190M240 25V190M320 25V190"
              fill="none"
              stroke="currentColor"
              strokeOpacity=".15"
            />
            <path
              d="M20 165 55 145 80 157 115 100 150 124 185 85 215 103 245 55 280 76"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            />
            <path
              d="m280 76 30-35 35 13 35-34"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="3"
              strokeDasharray="5 5"
            />
            <circle cx="280" cy="76" r="5" fill="var(--accent)" />
          </svg>
          <div className="visual-bottom mono">
            <span>PAST PATTERNS</span>
            <span>FUTURE SIGNALS ↗</span>
          </div>
        </>
      )}
      {type === "detect" && (
        <>
          <div className="account-grid">
            {Array.from({ length: 12 }, (_, i) => (
              <span key={i} className={i === 6 ? "flagged" : ""}>
                <svg viewBox="0 0 40 40">
                  <circle
                    cx="20"
                    cy="14"
                    r="6"
                    fill="none"
                    stroke="currentColor"
                  />
                  <path
                    d="M8 34c0-15 24-15 24 0"
                    fill="none"
                    stroke="currentColor"
                  />
                </svg>
              </span>
            ))}
          </div>
          <div className="visual-bottom mono">
            <span>SPOT THE PATTERN</span>
            <span>CLASSIFY / DETECT</span>
          </div>
        </>
      )}
    </div>
  );
}

function ProjectDossier({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (project && !ref.current?.open) ref.current?.showModal();
    if (!project && ref.current?.open) ref.current.close();
  }, [project]);
  return (
    <dialog
      ref={ref}
      className="dossier"
      aria-labelledby="dossier-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {project && (
        <div className="dossier-inner">
          <div className="dossier-top mono">
            <span>THE PROJECT DOSSIER / NO. {project.id}</span>
            <button
              onClick={onClose}
              aria-label="Close project details"
              className="close-dialog"
            >
              ×
            </button>
          </div>
          <ProjectVisual type={project.visual} />
          <span className="mono red-text">{project.type}</span>
          <h2 id="dossier-title">{project.title}</h2>
          <p>{project.detail}</p>
          <div className="dossier-focus">
            <span className="mono">AREAS OF EXPLORATION</span>
            <p>{project.focus}</p>
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="button button-dark"
          >
            EXPLORE THE SOURCE <Arrow />
          </a>
        </div>
      )}
    </dialog>
  );
}

function Work({ full = false }: { full?: boolean }) {
  const Heading = full ? "h1" : "h2";
  const [filter, setFilter] = useState("All work");
  const [selected, setSelected] = useState<Project | null>(null);
  const visible = projects.filter(
    (project) => filter === "All work" || project.category === filter,
  );
  return (
    <section
      id="work"
      className="work-section section-block"
      aria-labelledby="work-heading"
    >
      <div className="section-header">
        <div>
          <span className="mono red-text">01 / FROM THE BUILD LOG</span>
          <Heading id="work-heading">
            Selected work<span className="heading-period">.</span>
          </Heading>
        </div>
        <p>
          A few ideas that made it
          <br />
          out of the notebook and into code.
        </p>
        <span className="section-index mono">
          THE PROJECT ARCHIVE
          <br />
          05 EXPLORATIONS
        </span>
      </div>
      <div className="work-toolbar">
        <div className="work-filters" role="group" aria-label="Filter projects">
          {["All work", "Agents & AI", "Machine learning"].map((name) => (
            <button
              key={name}
              aria-pressed={filter === name}
              onClick={() => setFilter(name)}
              className={filter === name ? "active" : ""}
            >
              {name}
              {name === "All work" && <sup>05</sup>}
            </button>
          ))}
        </div>
        <span className="mono toolbar-note">
          IDEAS, EXPERIMENTS & THINGS THAT WORK ↙
        </span>
      </div>
      <div className={`project-grid ${full ? "project-grid-full" : ""}`}>
        {visible.map((project) => (
          <article className="project-card" key={project.id}>
            <button
              className="visual-button"
              onClick={() => setSelected(project)}
              aria-label={`Read ${project.title} project details`}
            >
              <ProjectVisual type={project.visual} />
              <span className="visual-open">
                <Arrow />
              </span>
            </button>
            <div className="project-meta mono">
              <span>{project.type}</span>
              <span>NO. {project.id}</span>
            </div>
            <h3>
              <button onClick={() => setSelected(project)}>
                {project.title}
              </button>
            </h3>
            <p>{project.description}</p>
            <div className="project-tags mono">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <button
              className="project-read"
              onClick={() => setSelected(project)}
            >
              Open the dossier <Arrow />
            </button>
          </article>
        ))}
      </div>
      <div className="work-foot">
        <span className="mono">EVERY PROJECT STARTS WITH A QUESTION.</span>
        <a href={github} target="_blank" rel="noreferrer" className="text-link">
          More from the workbench <Arrow />
        </a>
      </div>
      <ProjectDossier project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="about-section section-block"
      aria-labelledby="about-heading"
    >
      <div className="about-title">
        <span className="mono red-text">
          02 / THE PERSON BEHIND THE PROCESS
        </span>
        <h2 id="about-heading">
          Curiosity is
          <br />
          the starting point.
          <br />
          <em>Building is the rest.</em>
        </h2>
        <Star className="about-star" />
        <span className="about-caption mono">
          A BUILDER’S MIND.
          <br />A HUMAN POINT OF VIEW.
        </span>
      </div>
      <div className="about-copy">
        <p className="about-lead">
          Hello again. I’m Kartik Verma, an AI solution & backend developer
          based in India.
        </p>
        <p>
          I work at the intersection of language models, automation, and backend
          engineering. My focus is on making AI useful in the real world:
          conversations that flow, agents that act, and services that hold
          everything together.
        </p>
        <p>
          My experience includes AI-driven interview platforms, retrieval
          pipelines, and cloud-native services. I enjoy working through the
          details — latency, reliability, and the small decisions that turn an
          idea into a working product.
        </p>
        <div className="about-note">
          <span className="mono red-text">MY APPROACH, IN ONE LINE</span>
          <p>
            Think deeply. Build simply.
            <br />
            <em>Keep the human in the loop.</em>
          </p>
        </div>
        <Link href="/Resume" className="text-link">
          Read the professional record <Arrow />
        </Link>
      </div>
    </section>
  );
}

function Toolkit() {
  const [active, setActive] = useState(0);
  return (
    <section
      id="toolkit"
      className="toolkit-section section-block"
      aria-labelledby="toolkit-heading"
    >
      <div className="section-header">
        <div>
          <span className="mono red-text">03 / TOOLS OF THE TRADE</span>
          <h2 id="toolkit-heading">
            Under the hood<span className="heading-period">.</span>
          </h2>
        </div>
        <p>
          The right tool for the right problem.
          <br />
          Here’s what’s on my workbench.
        </p>
      </div>
      <div className="toolkit-layout">
        <div className="toolkit-list">
          {skills.map((skill, i) => (
            <button
              key={skill.number}
              onClick={() => setActive(i)}
              aria-expanded={active === i}
              aria-controls="skill-detail"
              className={`toolkit-row ${active === i ? "active" : ""}`}
            >
              <span className="mono">{skill.number}</span>
              <span>{skill.name}</span>
              <span aria-hidden="true">{active === i ? "↗" : "+"}</span>
            </button>
          ))}
        </div>
        <div id="skill-detail" className="toolkit-detail" aria-live="polite">
          <span className="mono">WORKBENCH NOTE / {skills[active].number}</span>
          <Star className="toolkit-star" />
          <span className="mono red-text">{skills[active].label}</span>
          <h3>{skills[active].name}</h3>
          <p>{skills[active].text}</p>
          <div className="toolkit-detail-foot mono">
            SELECT A TOOL. LOOK A LITTLE CLOSER. ↖
          </div>
        </div>
      </div>
    </section>
  );
}

function Career({ full = false }: { full?: boolean }) {
  return (
    <section
      id="record"
      className="career-section section-block"
      aria-labelledby="career-heading"
    >
      <div className="section-header">
        <div>
          <span className="mono red-text">04 / THE PROFESSIONAL RECORD</span>
          <h2 id="career-heading">
            The story so far<span className="heading-period">.</span>
          </h2>
        </div>
        <a
          href="/Kartik_verma_resume.pdf"
          className="button button-outline"
          download
        >
          DOWNLOAD RÉSUMÉ <span aria-hidden="true">↓</span>
        </a>
      </div>
      <div className="career-row">
        <div className="mono career-date">
          APR 2025 — PRESENT
          <span className="career-dot" />
        </div>
        <div>
          <h3>Full-Stack Backend / AI Engineer</h3>
          <span className="career-company">
            Athmick.ai <span>· Remote</span>
          </span>
        </div>
        <p>
          AI-driven interview systems, agentic workflows, retrieval pipelines,
          and Azure-backed services. Connecting product ideas with reliable
          backend engineering.
        </p>
      </div>
      <div className="career-row">
        <div className="mono career-date">DEC 2023 — DEC 2024</div>
        <div>
          <h3>Junior Python Developer</h3>
          <span className="career-company">
            Spark Brains Pvt. Ltd. <span>· Chandigarh</span>
          </span>
        </div>
        <p>
          Backend development with Django and FastAPI, alongside applied ML
          projects in forecasting, transfer learning, and object detection.
        </p>
      </div>
      {full && (
        <>
          <div className="career-row">
            <div className="mono career-date">MAY 2024</div>
            <div>
              <h3>B.E. Computer Science & Engineering</h3>
              <span className="career-company">
                Chandigarh University <span>· Mohali</span>
              </span>
            </div>
            <p>
              CGPA: 7.75 / 10. A foundation in computer science, followed by a
              continuing interest in AI and practical software engineering.
            </p>
          </div>
          <div className="certifications">
            <span className="mono red-text">CONTINUING EDUCATION</span>
            <p>Machine Learning — Coursera / Stanford University</p>
            <p>
              Introduction to TensorFlow for AI, ML, and Deep Learning —
              DeepLearning.AI
            </p>
          </div>
        </>
      )}
    </section>
  );
}

function Contact({ full = false }: { full?: boolean }) {
  const Heading = full ? "h1" : "h2";
  const [copyState, setCopyState] = useState("COPY EMAIL");
  const [draftReady, setDraftReady] = useState(false);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyState("COPIED ✓");
    } catch {
      setCopyState("USE THE EMAIL LINK ↗");
    }
  }
  function prepareDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(String(data.get("subject")));
    const body = encodeURIComponent(
      `Hello Kartik,\n\n${data.get("message")}\n\n${data.get("name")}\n${data.get("email")}`,
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setDraftReady(true);
  }
  return (
    <section
      id="contact"
      className={`contact-section ${full ? "contact-full" : ""}`}
      aria-labelledby="contact-heading"
    >
      <div className="contact-top mono">
        <span>05 / LETTERS TO THE EDITOR</span>
        <span>GOOD CONVERSATIONS START HERE.</span>
      </div>
      <div className="contact-layout">
        <div className="contact-story">
          <Heading id="contact-heading">
            Have a good
            <br />
            <em>“what if”?</em>
            <Star className="contact-star" />
          </Heading>
          <p>
            A project, an opportunity, or an interesting problem.
            <br />
            I’d love to hear what you’re thinking.
          </p>
          <a className="contact-email" href={`mailto:${email}`}>
            {email} <Arrow />
          </a>
          <button
            onClick={copyEmail}
            className="copy-email mono"
            aria-live="polite"
          >
            {copyState}
          </button>
          <div className="contact-socials">
            <a href={github} target="_blank" rel="noreferrer">
              GitHub <Arrow />
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer">
              LinkedIn <Arrow />
            </a>
            <a href="tel:+917417193304">
              Call me <Arrow />
            </a>
          </div>
        </div>
        <form className="letter-form" onSubmit={prepareDraft}>
          <div className="form-heading">
            <span className="mono">A NOTE TO KARTIK</span>
            <span aria-hidden="true">↙</span>
          </div>
          <div className="form-double">
            <label>
              Your name
              <input
                name="name"
                autoComplete="name"
                placeholder="The person behind the idea"
                required
                maxLength={120}
              />
            </label>
            <label>
              Your email
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@somewhere.com"
                required
                maxLength={254}
              />
            </label>
          </div>
          <label>
            What’s on your mind?
            <input
              name="subject"
              placeholder="A project, a role, a wild idea…"
              required
              maxLength={200}
            />
          </label>
          <label>
            The story
            <textarea
              name="message"
              placeholder="Tell me a little about it."
              required
              rows={3}
              maxLength={5000}
            />
          </label>
          <div className="form-foot">
            <p className="mono">
              {draftReady
                ? "DRAFT READY. SEND IT IN YOUR EMAIL APP."
                : "DELIVERED THROUGH YOUR EMAIL APP."}
            </p>
            <button type="submit" className="button button-dark">
              OPEN EMAIL DRAFT <Arrow />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-name">
        The Kartik Dispatch<span>.</span>
      </div>
      <div className="footer-bottom mono">
        <span>
          © {new Date().getFullYear()} KARTIK VERMA · CRAFTED WITH CURIOSITY
        </span>
        <span>END OF THIS EDITION. THE STORY CONTINUES.</span>
        <a href="#top">BACK TO THE TOP ↑</a>
      </div>
    </footer>
  );
}

export default function Portfolio({ edition = "home" }: { edition?: Edition }) {
  return (
    <div className="paper">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Masthead edition={edition} />
      <main id="main">
        {edition === "home" && (
          <>
            <Hero />
            <Work />
            <About />
            <Toolkit />
            <Career />
            <Contact />
          </>
        )}
        {edition === "work" && <Work full />}
        {edition === "resume" && (
          <>
            <div className="resume-intro">
              <span className="mono red-text">THE RÉSUMÉ EDITION</span>
              <h1>
                Kartik Verma<span>.</span>
              </h1>
              <p>
                AI solution & backend developer. Building useful intelligence
                with Python, FastAPI, and language models.
              </p>
            </div>
            <Career full />
            <Toolkit />
          </>
        )}
        {edition === "contact" && <Contact full />}
      </main>
      <Footer />
    </div>
  );
}
