import TiltCard from "@/components/ui/TiltCard";
import { PROJECTS } from "@/lib/data";


export default function Project(){
    return (
  <section
        id="projects"
        className="min-h-screen flex flex-col justify-center px-6 max-w-4xl mx-auto">
        <div className="w-full">
          <h2 className="text-5xl font-semibold text-center mb-12 text-[var(--heading)]">Projects</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {PROJECTS.map((project) => (
              <TiltCard
                key={project.title}
                className="overflow-hidden rounded-2xl border border-[var(--card-border)] shadow-sm transition-shadow duration-300 hover:shadow-[0_0_25px_6px_rgb(var(--accent)/0.6)] hover:border-[var(--accent-text)]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-40 w-full object-cover bg-[var(--nav-bg)]"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[var(--heading)]">{project.title}</h3>
                  <p className="mt-2 text-sm text-[var(--fg)] line-clamp-3">{project.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium border border-[var(--card-border)] text-[var(--accent-text)] rounded-full px-2.5 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 flex gap-4">
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-sm underline text-[var(--accent-text)]">
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
