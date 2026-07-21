import Section from "./Section";
import { skills } from "@/lib/content";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="04 — Skills" title="What I work with">
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.group}>
            <h3 className="font-mono text-xs font-medium tracking-widest text-faint uppercase">
              {group.group}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-lg border border-line bg-surface px-3 py-1.5 text-sm text-muted transition-colors hover:border-accent/40 hover:text-foreground"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
