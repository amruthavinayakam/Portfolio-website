import Section from "./Section";
import { certifications } from "@/lib/content";

export default function Certifications() {
  return (
    <Section id="certifications" eyebrow="05 — Certifications" title="Credentials">
      <ul className="divide-y divide-line rounded-xl border border-line bg-surface">
        {certifications.map((cert) => (
          <li
            key={cert.name}
            className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-5 py-4"
          >
            <div>
              {cert.url ? (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener"
                  className="text-sm font-medium transition-colors hover:text-accent"
                >
                  {cert.name}
                </a>
              ) : (
                <p className="text-sm font-medium">{cert.name}</p>
              )}
              <p className="mt-0.5 text-xs text-faint">{cert.issuer}</p>
            </div>
            <p className="font-mono text-xs text-faint">{cert.year}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
