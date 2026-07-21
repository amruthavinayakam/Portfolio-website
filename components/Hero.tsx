"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/content";
import { track } from "@/lib/analytics";

const buttonBase =
  "inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors";

export default function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
  });

  return (
    <section id="top" className="mx-auto max-w-3xl px-6 pt-24 pb-16 sm:pt-36 sm:pb-24">
      <motion.p
        {...fadeUp(0)}
        className="font-mono text-sm font-medium tracking-widest text-accent uppercase"
      >
        {site.title}
      </motion.p>

      <motion.h1
        {...fadeUp(0.08)}
        className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-6xl"
      >
        {site.name.split(" ")[0]}{" "}
        <span className="font-serif italic font-normal text-muted">
          {site.name.split(" ").slice(1).join(" ")}
        </span>
      </motion.h1>

      <motion.p
        {...fadeUp(0.16)}
        className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
      >
        {site.tagline}
      </motion.p>

      <motion.div {...fadeUp(0.24)} className="mt-9 flex flex-wrap gap-3">
        <a
          href={site.links.resume}
          target="_blank"
          rel="noopener"
          onClick={() => track("resume_download", { location: "hero" })}
          className={`${buttonBase} bg-accent text-accent-contrast hover:bg-accent-hover`}
        >
          View Resume
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 17L17 7M9 7h8v8" />
          </svg>
        </a>
        <a
          href={site.links.github}
          target="_blank"
          rel="noopener"
          onClick={() => track("github_click", { location: "hero" })}
          className={`${buttonBase} border border-line text-foreground hover:border-accent hover:text-accent`}
        >
          GitHub
        </a>
        <a
          href={site.links.linkedin}
          target="_blank"
          rel="noopener"
          onClick={() => track("linkedin_click", { location: "hero" })}
          className={`${buttonBase} border border-line text-foreground hover:border-accent hover:text-accent`}
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${site.links.email}`}
          onClick={() => track("email_click", { location: "hero" })}
          className={`${buttonBase} border border-line text-foreground hover:border-accent hover:text-accent`}
        >
          Email
        </a>
      </motion.div>
    </section>
  );
}
