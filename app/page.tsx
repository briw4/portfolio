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
    <>
      <section 
        id="home" 
        className="h-screen flex items-center px-6 max-w-4xl mx-auto"> 
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-10 items-center w-full">
          <div>
        <h1 className="text-5xl font-bold mb-12 dark:text-white">Maroia Baani</h1>
        <p className="text-xl mb-3">Cybersecurity & Networking Student focused on secure systems and modern infrastructure.</p>
        <div className="flex gap-4 mt-6">
          <a href="#projects">
            <button className="bg-sky-950 dark:text-cyan-200 rounded-lg px-3 py-2">
                view Projects
            </button>
          </a>
          <a href="#about">
          <button className="bg-sky-950 dark:text-cyan-200 rounded-lg px-3 py-2">
            More
          </button>
          </a>
        </div>
        </div>
        
        <div className="flex justify-center md:justify-end">
          <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 dark:border-sky-950 cursor-pointer">
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

        <h2 className="text-5xl font-semibold dark:text-white">About Me</h2>
        <p className="text-slate-400 mb-4">I am a cybersecurity and networking student passionate about building secure and reliable systems.</p>
        <p className="text-slate-400 mb-4">My interests include network security, system infrastructure, and modern web technologies. I enjoy learning how systems work and how to protect them.</p>
        <p className="text-slate-400 mb-4">Currently, I am working on projects to strengthen my skills in cybersecurity, development, and problem-solving.</p>
        <a href ="/cv.pdf">
          <button className="bg-sky-950 dark:text-cyan-200 rounded-lg px-3 py-2">
            Resume
          </button>
          </a>
      </section>


      <section 
        id="projects"
        className="h-screen flex flex-col justify-center px-6 max-w-4xl mx-auto"> 
        <div className="w-full">
          <h2 className="text-5xl font-semibold text-center mb-12 dark:text-white">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => ( 
              <article
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
              </article>
            ))}
          </div>
        </div>
      </section>


      <section 
        id="contact"
        className="h-screen flex flex-col justify-center px-6 max-w-4xl mx-auto">
        <div className="w-full">
        <h2 className="text-5xl font-semibold text-center mb-12 dark:text-white">Contact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border dark:border-sky-950 rounded-2xl p-6 shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">Send a message</h3>
              <ContactForm />
            </div>
            <div className="flex flex-col gap-4">
              <div className="border dark:border-sky-950 rounded-2xl p-5 shadow-sm">
                <p className="text-sm text-gray">Email</p>
                <a
                  href="mailto:marwabaani@gmail.com"
                  className="text-lg font-medium underline"
                >
                  marwabaani@gmail.com
                </a>
              </div>
              <div className="border dark:border-sky-950 rounded-2xl p-5 shadow-sm">
                <p className="text-sm text-gray-500">LinkedIn</p>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  className="text-lg font-medium underline"
                >
                  View profile
                </a>
              </div>

              <div className="border dark:border-sky-950 rounded-2xl p-5 shadow-sm">
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
    </>
  )
}