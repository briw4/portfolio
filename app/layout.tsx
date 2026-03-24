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
      <body className="text-black dark:bg-neutral-950 dark:text-slate-400 ">
          <nav className="fixed top-0 left-0 w-full dark:bg-zinc-950 shadow-sm">
          <div className="max-w-4xl mx-auto px-6 py-4 flex gap-6">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>   
      </body>
    </html>
  );
} 