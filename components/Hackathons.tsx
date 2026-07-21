import Section from "./Section";
import { hackathons } from "@/lib/content";

export default function Hackathons() {
  return (
    <Section id="hackathons" eyebrow="06 — Hackathons" title="Built under pressure">
      <ul className="space-y-4">
        {hackathons.map((hack) => (
          <li
            key={`${hack.name}-${hack.year}`}
            className="flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-xl border border-line bg-surface px-5 py-4"
          >
            <span className="rounded-md bg-accent-soft px-2 py-0.5 font-mono text-[11px] font-medium text-accent">
              {hack.result}
            </span>
            <h3 className="text-sm font-semibold">
              {hack.url ? (
                <a
                  href={hack.url}
                  target="_blank"
                  rel="noopener"
                  className="transition-colors hover:text-accent"
                >
                  {hack.name}
                </a>
              ) : (
                hack.name
              )}
            </h3>
            <span className="font-mono text-xs text-faint">{hack.year}</span>
            <p className="w-full text-sm leading-relaxed text-muted">
              {hack.description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
