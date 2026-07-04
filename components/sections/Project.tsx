import TiltCard from "@/components/ui/TiltCard";
import { PROJECTS } from "@/lib/data";


export default function Project(){
    return (
  <section
        id="projects"
        className="min-h-screen flex flex-col justify-center px-6 max-w-4xl mx-auto">
        <div className="w-full">
          <h2 className="text-5xl font-semibold text-center mb-12 dark:text-white">Projects</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <TiltCard
                key={project.title}
                className="overflow-hidden rounded-2xl border dark:border-sky-950 shadow-sm transition-shadow duration-300 hover:shadow-[0_0_25px_6px_rgba(34,211,238,0.6)] hover:border-cyan-400"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-40 w-full object-cover bg-slate-900"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold dark:text-white">{project.title}</h3>
                  <p className="mt-2 text-sm text-gray-700 dark:text-slate-400 line-clamp-3">{project.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium border dark:border-sky-950 dark:text-cyan-200 rounded-full px-2.5 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 flex gap-4">
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-sm underline dark:text-cyan-200">
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
