import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 px-6 py-8 text-xs text-faint">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>Built with Next.js · Deployed on Vercel</p>
      </div>
    </footer>
  );
}
