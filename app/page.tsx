import ContactForm from "@/components/ContactForm";

const projects = [
  {
    title: "Project 1",
    description: "Description of project 1",
    image: "/project1.jpg",
    link: "https://github.com/briw4/clicker_game"
  },
  {
    title: "Project 2",
    description: "Description of project 2",
    image: "/project2.jpg",
    link: "https://github.com/briw4/Terminal_portfolio"
  },
];
export default function Home(){
  return (
    <div>
      <section 
        id="home" 
        className="h-screen flex items-center px-6 max-w-4xl mx-auto"> 
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-10 items-center w-full">
          <div>
        <h1 className="text-5xl font-bold">Maroia Baani</h1>
        <p className="text-xl">Cybersecurity and networking student</p>
        </div>
       
        <div className="flex justify-center md:justify-end">
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-black shadow-lg">
             <img
              src="/profile.jpg"
              alt="Profile Picture"
              className="w-full h-full object-cover"
            />
          </div>  
         </div>
        </div>
      </section>
      <section 
        id="about"
        className="h-screen flex flex-col justify-center px-6 max-w-4xl mx-auto"> 
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="mt-4">I am a cybersecurity and networking student.</p>
      </section>


      <section 
        id="projects"
        className="h-screen flex flex-col justify-center px-6 max-w-4xl mx-auto"> 
        <div className="w-full">
          <h2 className="text-3xl font-semibold text-center mb-12">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => ( 
              <article
                key={project.title}
                className="overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-sm"
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
              </article>
            ))}
          </div>
        </div>
      </section>


      <section 
        id="contact"
        className="h-screen flex flex-col justify-center px-6 max-w-4xl mx-auto">
        <div className="w-full">
        <h2 className="text-3xl font-semibold text-center mb-12">Contact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-300 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Send a message</h3>
              <ContactForm />
            </div>
            <div className="flex flex-col gap-4">
              <div className="border border-gray-300 rounded-2xl p-5 shadow-sm">
                <p className="text-sm text-gray">Email</p>
                <a
                  href="mailto:marwabaani@gmail.com"
                  className="text-lg font-medium underline"
                >
                  marwabaani@gmail.com
                </a>
              </div>
              <div className="border border-gray-300 rounded-2xl p-5 shadow-sm">
                <p className="text-sm text-gray-500">LinkedIn</p>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  className="text-lg font-medium underline"
                >
                  View profile
                </a>
              </div>

              <div className="border border-gray-300 rounded-2xl p-5 shadow-sm">
                <p className="text-sm text-gray-500">GitHub</p>
                <a
                  href="https://github.com"
                  target="_blank"
                  className="text-lg font-medium underline"
                >
                  View repositories
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}