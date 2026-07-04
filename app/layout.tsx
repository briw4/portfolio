import "./globals.css";

export const metadata = {
  title: 'Portfolio',
  description: 'Welcome to my portfolio website!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-black dark:bg-neutral-950 dark:text-slate-400 overflow-y-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <nav className="fixed top-0 left-0 w-full dark:bg-zinc-950 shadow-sm">
          <div className="max-w-4xl mx-auto px-6 py-4 flex justify-center gap-6">
            <a href="#home" className="transition-shadow duration-300 hover:[text-shadow:0_0_10px_rgba(34,211,238,0.8)] hover:text-cyan-300">Home</a>
            <a href="#about" className="transition-shadow duration-300 hover:[text-shadow:0_0_10px_rgba(34,211,238,0.8)] hover:text-cyan-300">About</a>
            <a href="#projects" className="transition-shadow duration-300 hover:[text-shadow:0_0_10px_rgba(34,211,238,0.8)] hover:text-cyan-300">Projects</a>
            <a href="#contact" className="transition-shadow duration-300 hover:[text-shadow:0_0_10px_rgba(34,211,238,0.8)] hover:text-cyan-300">Contact</a>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>   
      </body>
    </html>
  );
} 