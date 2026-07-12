"use client";

import { useEffect, useState } from "react";

type Mode = "cyber" | "dark" | "light";

const nextMode: Record<Mode, Mode> = {
  cyber: "dark",
  dark: "light",
  light: "cyber",
};

export default function ModeToggle() {
  const [mode, setMode] = useState<Mode>("cyber");

  useEffect(() => {
    // Reads the classes the inline init script already applied pre-hydration;
    // the server can't know this, so syncing here (not deriving it) is required.
    const root = document.documentElement.classList;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMode(root.contains("pixel") ? "cyber" : root.contains("dark") ? "dark" : "light");
  }, []);

  function cycle() {
    const next = nextMode[mode];
    setMode(next);
    document.documentElement.classList.toggle("pixel", next === "cyber");
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("mode", next);
  }

  return (
    <button
      onClick={cycle}
      aria-label={`Switch to ${nextMode[mode]} mode`}
      title={`Switch to ${nextMode[mode]} mode`}
      className="flex items-center justify-center w-9 h-9 border border-[var(--card-border)] rounded-full transition-shadow duration-300 hover:shadow-[0_0_14px_3px_rgb(var(--accent)/0.5)]"
    >
      {mode === "cyber" ? (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
          <path d="M7 6a5 5 0 0 0-5 5v4a3 3 0 0 0 3 3c1.06 0 2.04-.55 2.6-1.45L8.87 15h6.26l1.27 1.55A3.06 3.06 0 0 0 19 18a3 3 0 0 0 3-3v-4a5 5 0 0 0-5-5H7zm1 3h2v2h2v2h-2v2H8v-2H6v-2h2V9zm9 .5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zm-2.5 3a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
        </svg>
      ) : mode === "dark" ? (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
          <path d="M20.354 15.354A9 9 0 0 1 8.646 3.646 9.003 9.003 0 1 0 20.354 15.354z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="4" />
          <path
            strokeLinecap="round"
            d="M12 2v2M12 20v2M4 12H2M22 12h-2M5.6 5.6 4.2 4.2M19.8 19.8l-1.4-1.4M5.6 18.4 4.2 19.8M19.8 4.2l-1.4 1.4"
          />
        </svg>
      )}
    </button>
  );
}
