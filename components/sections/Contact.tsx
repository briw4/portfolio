import ContactForm from "@/components/ContactForm";

export default function ContactSection() {
  return (
      <section 
        id="contact"
        className="min-h-screen flex flex-col justify-center px-6 max-w-4xl mx-auto">
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
  );
}