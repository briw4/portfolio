
export default function Home(){
  return (
    <main className="scroll-smooth">
      <section 
        id="home" 
        className="min-h-screen flex flex-col justify-center px-6 max-w-4xl mx-auto"> 
        <h1 className="text-4xl font-bold">Maroia Baani</h1>
        <p className="mt-4 text-lg">Cybersecurity and networking student</p>
      </section>
      <section 
        id="about"
        className="min-h-screen flex flex-col justify-center px-6 max-w-4xl mx-auto"> 
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="mt-4">I am a cybersecurity and networking student.</p>
      </section>
      <section 
        id="projects"
        className="min-h-screen flex flex-col justify-center px-6 max-w-4xl mx-auto"> 
        <h2 className="text-3xl font-semibold">Projects</h2>
        <p className="mt-4">i will add a projects cards here after I complete them.</p>
      </section>
      <section 
        id="contact"
        className="min-h-screen flex flex-col justify-center px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold">Contact</h2>
        <p className="mt-4">You can reach me at{" "}
          <a href="mailto:marwabaani@gmail.com" className="text-blue-500 hover:underline">marwabaani@gmail.com</a>
          {" "}or connect with me on {" "}
          <a href="https://www.linkedin.com/in/maroia-baani-896498244" className="text-blue-500 hover:underline">LinkedIn</a>.
        </p>
      </section>
    </main>
  )
}