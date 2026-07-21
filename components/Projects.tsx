"use client";

import Section from "./Section";
import { projects } from "@/lib/content";
import { track } from "@/lib/analytics";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="03 — Projects" title="Things I've built">
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group relative flex flex-col rounded-xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-black/5"
          >
            <h3 className="text-base font-semibold tracking-tight group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
              {project.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-faint"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex gap-4 border-t border-line pt-4 text-sm font-medium">
              {/* ::after stretches this link over the whole card, so clicking
                  anywhere on the card opens the repo — one real anchor rather
                  than nesting the demo link inside a card-wide <a>. */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener"
                onClick={() => track("project_github_click", { project: project.title })}
                className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent after:absolute after:inset-0 after:rounded-xl after:content-['']"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49l-.01-1.73c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9l-.01 2.81c0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
                </svg>
                Code
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener"
                  onClick={() => track("project_demo_click", { project: project.title })}
                  className="relative z-10 inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
