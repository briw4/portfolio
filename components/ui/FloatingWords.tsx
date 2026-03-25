"use client";
import {useEffect, useState} from "react";
import { BG_WORDS } from "@/lib/data";


export default function FloatingWords() {
  const [words, setWords] = useState<{ id: number; word: string; x: number; y: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 28 }, (_, i) => ({
      id: i,
      word: BG_WORDS[i % BG_WORDS.length],
      x: Math.random() * 95,
      y: Math.random() * 95,
      delay: Math.random() * 8,
      duration: 4 + Math.random() * 6,
    }));
    setWords(generated);
  }, []);

    return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {words.map((w) => (
        <span
          key={w.id}
          className="absolute text-xs font-mono font-semibold text-sky-900/30 dark:text-sky-400/10"
          style={{
            left: `${w.x}%`,
            top: `${w.y}%`,
            animation: `floatWord ${w.duration}s ease-in-out ${w.delay}s infinite alternate`,
          }}
        >
          {w.word}
        </span>
      ))}
      <style>{`
        @keyframes floatWord {
          0%   { opacity: 0; transform: translateY(8px) scale(0.95); }
          40%  { opacity: 1; }
          100% { opacity: 0.4; transform: translateY(-8px) scale(1.05); }
        }
      `}</style>
    </div>
   );
}
