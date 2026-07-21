import posthog from "posthog-js";

/**
 * Central event-tracking helper. Every custom event on the site goes
 * through here, so the full list of event names lives in one place:
 *
 *   section_viewed        { section }          — user scrolled a section into view
 *   scroll_depth          { depth }            — 25 / 50 / 75 / 100 (% of page)
 *   resume_download       { location }         — clicked View/Download Resume
 *   github_click          { location }         — clicked a GitHub profile link
 *   linkedin_click        { location }         — clicked a LinkedIn link
 *   email_click           { location }         — clicked an email link
 *   project_github_click  { project }          — clicked a project's Code link
 *   project_demo_click    { project }          — clicked a project's Live Demo link
 *   contact_form_submitted {}                  — contact form sent successfully
 *
 * `location` distinguishes where the click happened (hero / contact / footer).
 */
export function track(event: string, properties?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (!posthog.__loaded) return; // not initialized yet (no key, or before consent)
  posthog.capture(event, properties);
}
