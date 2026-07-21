import Section from "./Section";
import { about } from "@/lib/content";

export default function About() {
  return (
    <Section id="about" eyebrow="01 — About" title="A little background">
      <div className="space-y-4 text-base leading-relaxed text-muted sm:text-lg">
        {about.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
