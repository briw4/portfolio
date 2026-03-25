import Typewriter from "@/components/ui/Typewriter";

export default function About(){

  return (
    
<section 
        id="about"
        className="h-screen flex flex-col justify-center px-6 max-w-4xl mx-auto"> 

        <h2 className="text-5xl font-semibold dark:text-white mb-3">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-5">
        <p className="text-slate-400 mb-3 ">
          <Typewriter text= "I secure systems. I build things. I never stop learning."/>
        </p>
      
        <a href ="/cv.pdf">
          <button className="bg-sky-950 dark:text-cyan-200 rounded-lg px-3 py-2">
            Resume
          </button>
          </a>
          </div>
          <div className="space-y-4">
            {["Network Security", "System Infrastructure", "Web Development", "Problem Solving", "Linux & Bash"].map((skill) => (
              <div key={skill} className="border dark:border-sky-950 rounded-xl px-5 py-3 shadow-sm">
                <span className="dark:text-cyan-200 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
  );

}