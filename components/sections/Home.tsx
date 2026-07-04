import TiltCard from "@/components/ui/TiltCard";
import Typewriter from "../ui/Typewriter";

export default function Home(){
  return (
      <section 
        id="home" 
        className="min-h-screen flex items-center px-6 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-10 items-center w-full">
          <div>
        <h1 className="text-5xl font-bold mb-12 dark:text-white transition-shadow duration-300 hover:[text-shadow:0_0_16px_rgba(34,211,238,0.8)]">Maroia Baani</h1>
        <p className="text-2xl mb-3">
          <Typewriter text= "Cybersecurity & Networking Student focused on secure systems and modern infrastructure."/>
          </p>

        <div className="inline-flex items-center gap-2 border dark:border-sky-950 rounded-full px-4 py-1.5 mt-2 transition-shadow duration-300 hover:shadow-[0_0_14px_3px_rgba(34,211,238,0.5)] hover:border-cyan-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm dark:text-cyan-200">Open for apprenticeship</span>
        </div>

        <div className="flex gap-4 mt-6">
          <a href="#projects">
            <button className="bg-sky-950 dark:text-cyan-200 rounded-lg px-3 py-2 transition-shadow duration-300 hover:shadow-[0_0_16px_4px_rgba(34,211,238,0.55)]">
                view Projects
            </button>
          </a>
          <a href="#about">
          <button className="bg-sky-950 dark:text-cyan-200 rounded-lg px-3 py-2 transition-shadow duration-300 hover:shadow-[0_0_16px_4px_rgba(34,211,238,0.55)]">
            More
          </button>
          </a>
        </div>

        <div className="flex gap-3 mt-6">
          <a
            href="https://www.linkedin.com/in/maroia-baani-896498244/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex items-center justify-center w-10 h-10 border dark:border-sky-950 rounded-full transition-shadow duration-300 hover:shadow-[0_0_14px_3px_rgba(34,211,238,0.5)] hover:border-cyan-400"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 dark:text-cyan-200" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="https://github.com/briw4"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex items-center justify-center w-10 h-10 border dark:border-sky-950 rounded-full transition-shadow duration-300 hover:shadow-[0_0_14px_3px_rgba(34,211,238,0.5)] hover:border-cyan-400"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 dark:text-cyan-200" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href="mailto:marwabaani@gmail.com"
            aria-label="Email"
            className="flex items-center justify-center w-10 h-10 border dark:border-sky-950 rounded-full transition-shadow duration-300 hover:shadow-[0_0_14px_3px_rgba(34,211,238,0.5)] hover:border-cyan-400"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 dark:text-cyan-200" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
        </div>
        
        <div className="flex justify-center md:justify-end">
          <TiltCard className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 dark:border-sky-950 cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_30px_8px_rgba(34,211,238,0.6)]">
            <img
              src="/profile.jpg"
              alt="Profile Picture"
              className="w-full h-full object-cover"
            />
          </TiltCard>
        </div>
         </div>
      </section>
  );
}