"use client";

import { useEffect, useState, useCallback } from "react";
import posthog from "posthog-js";
import { config } from "@/lib/content";
import { track } from "@/lib/analytics";

const CONSENT_KEY = "analytics-consent"; // "accepted" | "declined"

function initPostHog(cookieless: boolean) {
  if (!config.posthogKey || config.posthogKey.includes("PLACEHOLDER")) return;
  if (posthog.__loaded) return;
  posthog.init(config.posthogKey, {
    api_host: config.posthogHost,
    // Privacy: anonymized visitors only — no person profiles are created,
    // so you see aggregate behavior (device, country, referrer) without
    // identifying individuals.
    person_profiles: "identified_only",
    autocapture: false, // we fire deliberate, named events instead
    capture_pageview: true,
    capture_pageleave: true, // enables accurate session-duration stats
    // If the visitor declined cookies we still count them, but state lives
    // only in memory — nothing is written to their device.
    persistence: cookieless ? "memory" : "localStorage+cookie",
  });
}

/** Fires scroll-depth events at 25/50/75/100% of the page, once each. */
function useScrollDepth() {
  useEffect(() => {
    const fired = new Set<number>();
    const onScroll = () => {
      const scrollable = document.body.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const pct = ((window.scrollY + 1) / scrollable) * 100;
      for (const mark of [25, 50, 75, 100]) {
        if (pct >= mark && !fired.has(mark)) {
          fired.add(mark);
          track("scroll_depth", { depth: mark });
        }
      }
      if (fired.size === 4) window.removeEventListener("scroll", onScroll);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}

export default function AnalyticsProvider() {
  const [showBanner, setShowBanner] = useState(false);

  useScrollDepth();

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (consent === "accepted") initPostHog(false);
    else if (consent === "declined") initPostHog(true);
    else setShowBanner(true);
  }, []);

  const decide = useCallback((accepted: boolean) => {
    localStorage.setItem(CONSENT_KEY, accepted ? "accepted" : "declined");
    setShowBanner(false);
    initPostHog(!accepted);
  }, []);

  if (!showBanner) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-md rounded-xl border border-line bg-surface p-4 shadow-lg shadow-black/5 sm:inset-x-auto sm:right-6 sm:bottom-6"
    >
      <p className="text-sm text-muted">
        This site uses privacy-friendly, anonymized analytics to understand
        which sections visitors find useful. No personal data is collected.
      </p>
      <div className="mt-3 flex gap-2">
        <button
          onClick={() => decide(true)}
          className="rounded-lg bg-accent px-3.5 py-1.5 text-sm font-medium text-accent-contrast transition-colors hover:bg-accent-hover"
        >
          Accept
        </button>
        <button
          onClick={() => decide(false)}
          className="rounded-lg border border-line px-3.5 py-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
