import Typewriter from "@/components/ui/Typewriter";
import { SKILLS } from "@/lib/data";

export default function About(){

  return (

<section
        id="about"
        className="min-h-screen flex flex-col justify-center px-6 max-w-4xl mx-auto">

        <h2 className="text-5xl font-semibold text-[var(--heading)] mb-3">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5">
        <p className="text-2xl text-[var(--fg)] mb-3 ">
          <Typewriter text= "I secure systems. I build things. I never stop learning."/>
        </p>

        <a href ="/cv.pdf">
          <button className="bg-[var(--btn-bg)] text-[var(--btn-text)] rounded-lg px-3 py-2 transition-shadow duration-300 hover:shadow-[0_0_16px_4px_rgb(var(--accent)/0.55)]">
            Resume
          </button>
          </a>

          <div className="grid grid-cols-5 gap-4 pt-4">
            {SKILLS.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-2 border border-[var(--card-border)] rounded-xl p-3 shadow-sm transition-shadow duration-300 hover:shadow-[0_0_14px_3px_rgb(var(--accent)/0.5)] hover:border-[var(--accent-text)]"
              >
                <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                <span className="text-xs text-[var(--accent-text)] font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
          </div>
          <div className="space-y-4">
            {["Network Security", "System Infrastructure", "Web Development", "Problem Solving", "Linux & Bash"].map((skill) => (
              <div key={skill} className="border border-[var(--card-border)] rounded-xl px-5 py-3 shadow-sm transition-shadow duration-300 hover:shadow-[0_0_16px_4px_rgb(var(--accent)/0.55)] hover:border-[var(--accent-text)]">
                <span className="text-[var(--accent-text)] font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

  );

}
