"use client";
import { useRef } from "react";

export default function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)`;
  };
    return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ transition: "transform 0.15s ease-out", willChange: "transform" }}
    >
      {children}
    </div>
  );
}