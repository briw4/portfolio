"use client"
import {useEffect, useState} from "react";

export default function Typewriter({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!visible) {
      const t = setTimeout(() => { setCount(0); setVisible(true); }, 600);
      return () => clearTimeout(t);
    }
    if (count < words.length) {
      const t = setTimeout(() => setCount((c) => c + 1), 110);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setVisible(false), 2500);
    return () => clearTimeout(t);
  }, [count, visible, words.length]);

  return (
    <span className={className}>
      {words.slice(0, count).join(" ")}
      {count < words.length && <span className="animate-pulse text-cyan-400">▌</span>}
    </span>
  );
}