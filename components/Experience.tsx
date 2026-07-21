import Section from "./Section";
import { experience } from "@/lib/content";

/** Vertical timeline: a hairline rail with a dot per role. */
export default function Experience() {
  return (
    <Section id="experience" eyebrow="02 — Experience" title="Where I've worked">
      <ol className="relative border-l border-line">
        {experience.map((job) => (
          <li key={`${job.company}-${job.role}`} className="relative pb-12 pl-8 last:pb-0">
            {/* timeline dot */}
            <span
              aria-hidden="true"
              className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full border-2 border-accent bg-background"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-base font-semibold tracking-tight">
                {job.role}
                <span className="font-normal text-muted"> · {job.company}</span>
              </h3>
              <p className="font-mono text-xs text-faint">{job.dates}</p>
            </div>
            {job.location && (
              <p className="mt-0.5 text-xs text-faint">{job.location}</p>
            )}
            <ul className="mt-3 space-y-2">
              {job.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                  <span aria-hidden="true" className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {bullet}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
