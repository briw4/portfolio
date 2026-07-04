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