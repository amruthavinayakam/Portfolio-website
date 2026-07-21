"use client";

import { useState } from "react";
import Section from "./Section";
import { site, config } from "@/lib/content";
import { track } from "@/lib/analytics";

type Status = "idle" | "sending" | "success" | "handoff" | "error";

// Formspree is what actually delivers submissions to the inbox. Until an
// endpoint is configured, hand the message off to the visitor's mail client so
// it still reaches site.links.email instead of disappearing.
const formspreeReady = !config.formspreeEndpoint.includes("YOUR_FORM_ID");

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    // Client-side validation with per-field messages
    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      nextErrors.email = "Please enter a valid email address.";
    if (message.length < 10)
      nextErrors.message = "Message should be at least 10 characters.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    if (!formspreeReady) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${site.links.email}?subject=${subject}&body=${body}`;
      setStatus("handoff");
      track("contact_form_submitted");
      form.reset();
      return;
    }

    // Formspree reads these to shape the notification email: a readable
    // subject line, and Reply-To set to the sender so hitting reply in Gmail
    // goes to them rather than to Formspree.
    data.set("_subject", `Portfolio enquiry from ${name}`);
    data.set("_replyto", email);

    setStatus("sending");
    try {
      const res = await fetch(config.formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
      setStatus("success");
      track("contact_form_submitted");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass = (field: string) =>
    `w-full rounded-lg border bg-surface px-3.5 py-2.5 text-sm placeholder:text-faint transition-colors focus:border-accent focus:outline-none ${
      errors[field] ? "border-red-500" : "border-line"
    }`;

  return (
    <Section id="contact" eyebrow="07 — Contact" title="Let's talk">
      <div className="grid gap-12 sm:grid-cols-[1fr_auto]">
        {/* Form */}
        <div className="max-w-md">
          <p className="text-sm leading-relaxed text-muted">
            Recruiting, collaborating, or just want to compare notes on ML?
            Drop a message — it goes straight to my inbox.
          </p>

          {status === "success" || status === "handoff" ? (
            <div
              role="status"
              className="mt-6 rounded-xl border border-accent/30 bg-accent-soft p-5 text-sm text-foreground"
            >
              {status === "success" ? (
                <>
                  <p className="font-semibold text-accent">Message sent ✓</p>
                  <p className="mt-1 text-muted">
                    Thanks for reaching out — I&apos;ll get back to you soon.
                  </p>
                </>
              ) : (
                <>
                  <p className="font-semibold text-accent">Almost there</p>
                  <p className="mt-1 text-muted">
                    Your email app should have opened with the message ready to
                    send. If it didn&apos;t, write to{" "}
                    <a href={`mailto:${site.links.email}`} className="underline">
                      {site.links.email}
                    </a>
                    .
                  </p>
                </>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Jane Recruiter"
                  className={inputClass("name")}
                  aria-invalid={!!errors.name}
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="jane@company.com"
                  className={inputClass("email")}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Hi Amrutha — we have a role that…"
                  className={inputClass("message")}
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast transition-colors hover:bg-accent-hover disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
              {status === "error" && (
                <p role="alert" className="text-xs text-red-500">
                  Something went wrong — please email me directly at{" "}
                  <a href={`mailto:${site.links.email}`} className="underline">
                    {site.links.email}
                  </a>
                  .
                </p>
              )}
            </form>
          )}
        </div>

        {/* Direct links */}
        <div className="space-y-3 text-sm">
          <h3 className="font-mono text-xs font-medium tracking-widest text-faint uppercase">
            Elsewhere
          </h3>
          <a
            href={`mailto:${site.links.email}`}
            onClick={() => track("email_click", { location: "contact" })}
            className="block text-muted transition-colors hover:text-accent"
          >
            {site.links.email}
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener"
            onClick={() => track("linkedin_click", { location: "contact" })}
            className="block text-muted transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener"
            onClick={() => track("github_click", { location: "contact" })}
            className="block text-muted transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={site.links.resume}
            download
            onClick={() => track("resume_download", { location: "contact" })}
            className="mt-2 inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 font-medium transition-colors hover:border-accent hover:text-accent"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </Section>
  );
}
