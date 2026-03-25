import TiltCard from "@/components/ui/TiltCard";
import { PROJECTS } from "@/lib/data";


export default function Project(){
    return (
  <section 
        id="projects"
        className="h-screen flex flex-col justify-center px-6 max-w-4xl mx-auto"> 
        <div className="w-full">
          <h2 className="text-5xl font-semibold text-center mb-12 dark:text-white">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {PROJECTS.map((project) => ( 
              <TiltCard
                key={project.title}
                className="overflow-hidden rounded-2xl border dark:border-sky-950 shadow-sm"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-150 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-3 text-sm text-gray-700">{project.description}</p>
                  <div className="mt-4 flex gap-4">
                    <a href={project.link} target="_blank" rel="noreferrer" className="underline">
                      View project
                    </a>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>
    );
}