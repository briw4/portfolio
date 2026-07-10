"use client";

import { useEffect, useState } from "react";

export default function StyleToggle() {
  const [isPixel, setIsPixel] = useState(false);

  useEffect(() => {
    // Reads the class the inline style script already applied pre-hydration;
    // the server can't know this, so syncing here (not deriving it) is required.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsPixel(document.documentElement.classList.contains("pixel"));
    // The theme toggle can also remove the pixel class — keep the icon in sync.
    const observer = new MutationObserver(() => {
      setIsPixel(document.documentElement.classList.contains("pixel"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  function toggle() {
    const next = !isPixel;
    setIsPixel(next);
    document.documentElement.classList.toggle("pixel", next);
    localStorage.setItem("style", next ? "pixel" : "classic");
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle pixel style"
      className="flex items-center justify-center w-9 h-9 border border-[var(--card-border)] rounded-full transition-shadow duration-300 hover:shadow-[0_0_14px_3px_rgb(var(--accent)/0.5)]"
    >
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M7 6a5 5 0 0 0-5 5v4a3 3 0 0 0 3 3c1.06 0 2.04-.55 2.6-1.45L8.87 15h6.26l1.27 1.55A3.06 3.06 0 0 0 19 18a3 3 0 0 0 3-3v-4a5 5 0 0 0-5-5H7zm1 3h2v2h2v2h-2v2H8v-2H6v-2h2V9zm9 .5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zm-2.5 3a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
      </svg>
    </button>
  );
}
