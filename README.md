# Amrutha Vinayakam — Portfolio

Personal portfolio site: **Next.js (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion**, fully static export, PostHog + Vercel Analytics, Formspree contact form.

---

## Run it locally

```bash
npm install     # first time only
npm run dev     # → http://localhost:3000
```

Production build (outputs a fully static site to `out/`):

```bash
npm run build
```

---

## Editing content — one file only

**Everything on the site lives in [`lib/content.ts`](lib/content.ts).** Name, tagline, about text, jobs, projects, skills, certs, hackathons, links, and API keys. You never need to touch a component.

> **Search the file for `// PLACEHOLDER`** — every spot that still needs your real content is marked with that comment.

### Add / remove a project

In `lib/content.ts`, add or delete an object in the `projects` array:

```ts
{
  title: "My New Project",
  description: "One or two sentences about what it does.",
  tags: ["Python", "AWS"],
  github: "https://github.com/amruthavinayakam/my-new-project",
  demo: "https://myproject.com",   // optional — delete this line to hide the demo link
},
```

The card grid updates automatically. Same pattern for `experience`, `skills`, `certifications`, and `hackathons`.

### Swap the resume PDF

Replace `public/resume.pdf` with your real resume (keep the filename `resume.pdf`). That's it — the "View Resume" and "Download Resume" buttons already point at it.

---

## Contact form (Formspree)

1. Sign up free at [formspree.io](https://formspree.io) → **New Form**.
2. Set the form's email to the inbox where you want submissions.
3. Copy the endpoint (looks like `https://formspree.io/f/abcdwxyz`).
4. Paste it into `config.formspreeEndpoint` in `lib/content.ts`.

Until you do this, form submissions will show the error state (the site still works otherwise).

---

## Analytics (PostHog)

1. Sign up free at [posthog.com](https://posthog.com) → create a project.
2. **Settings → Project → Project API key** (starts with `phc_`).
3. Paste it into `config.posthogKey` in `lib/content.ts`. If you chose the EU region, also change `posthogHost` to `https://eu.i.posthog.com`.

Visitors see a small consent notice. If they decline, they're still counted but nothing is stored on their device (cookieless mode). No personal profiles are created either way.

### Reading the PostHog dashboard

- **Web Analytics** (left sidebar) — pageviews, visitors, **referrers/traffic sources, countries, devices, session duration**. This answers "who came, from where, on what."
- **Activity** — the live feed of raw events as they happen.
- **Custom events fired by this site** (find them under *Activity* or build insights from them in *Product Analytics → New insight*):
  | Event | Meaning |
  |---|---|
  | `section_viewed` | A section scrolled into view (property `section`: about, experience, projects…) |
  | `scroll_depth` | Visitor reached 25 / 50 / 75 / 100% of the page |
  | `resume_download` | Clicked View/Download Resume (property `location`: hero or contact) |
  | `github_click` / `linkedin_click` / `email_click` | Clicked those links |
  | `project_github_click` / `project_demo_click` | Clicked a project link (property `project`: which one) |
  | `contact_form_submitted` | Someone sent you a message |

  Useful starter insight: a bar chart of `section_viewed` broken down by `section` shows exactly how far down the page recruiters actually get.

### UTM tags — know which outreach each visit came from

When you share your link, append UTM parameters:

```
https://yoursite.com/?utm_source=linkedin&utm_medium=dm&utm_campaign=google-recruiter
https://yoursite.com/?utm_source=email&utm_medium=coldmail&utm_campaign=meta-apply
```

- `utm_source` — where you shared it (linkedin, email, twitter, resume)
- `utm_medium` — how (dm, coldmail, post, application)
- `utm_campaign` — which specific outreach (company name works well)

PostHog captures these automatically — in **Web Analytics** filter by UTM, or break any insight down by `utm_source` / `utm_campaign` to see which outreach actually drove visits (and which visitors downloaded the resume).

**Vercel Analytics** is also enabled as a lightweight backup — it appears automatically in your Vercel dashboard under the project's **Analytics** tab once deployed (nothing to configure).

---

## Deploy free on Vercel

1. Push this folder to a GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/amruthavinayakam/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) → sign up with GitHub (free Hobby plan).
3. **Add New → Project** → import the `portfolio` repo.
4. Leave every setting at its default (Vercel auto-detects Next.js) → **Deploy**.
5. ~1 minute later you get a live URL like `https://portfolio-xyz.vercel.app`.

Every future `git push` to `main` redeploys automatically.

> After deploying, put your real URL into `site.url` in `lib/content.ts` so link previews (Open Graph) point at the right domain.

### Connect a custom domain

1. Buy a domain anywhere (Namecheap, Cloudflare, Porkbun — ~$10/yr).
2. In Vercel: your project → **Settings → Domains** → **Add** → type the domain.
3. Vercel shows you the DNS records to set. At your registrar's DNS panel add:
   - `A` record for `@` → `76.76.21.21`
   - `CNAME` record for `www` → `cname.vercel-dns.com`
   (Vercel shows the exact current values — use those if they differ.)
4. Wait a few minutes for DNS to propagate. Vercel provisions HTTPS automatically.

---

## Project structure

```
lib/content.ts        ← ALL site content & config (edit this)
lib/analytics.ts      ← event-tracking helper + list of all event names
app/layout.tsx        ← fonts, meta/OG tags, theme script, analytics mounts
app/page.tsx          ← section order
app/globals.css       ← color palette & design tokens
components/           ← one component per section + Nav, ThemeToggle, etc.
public/resume.pdf     ← your resume (replace the placeholder)
```
