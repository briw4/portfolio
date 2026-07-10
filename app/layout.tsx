import "./globals.css";
import ThemeToggle from "@/components/ui/ThemeToggle";

export const metadata = {
  title: 'Portfolio',
  description: 'Welcome to my portfolio website!',
};

const themeInitScript = `
  try {
    const stored = localStorage.getItem('theme');
    const dark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', dark);
  } catch (e) {}
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-[var(--bg)] text-[var(--fg)] overflow-y-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <nav className="fixed top-0 left-0 w-full bg-[var(--nav-bg)] shadow-sm">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-center gap-6">
            <a href="#home" className="transition-shadow duration-300 hover:[text-shadow:0_0_10px_rgb(var(--accent)/0.8)] hover:text-[var(--accent-text)]">Home</a>
            <a href="#about" className="transition-shadow duration-300 hover:[text-shadow:0_0_10px_rgb(var(--accent)/0.8)] hover:text-[var(--accent-text)]">About</a>
            <a href="#terminal" className="transition-shadow duration-300 hover:[text-shadow:0_0_10px_rgb(var(--accent)/0.8)] hover:text-[var(--accent-text)]">Terminal</a>
            <a href="#projects" className="transition-shadow duration-300 hover:[text-shadow:0_0_10px_rgb(var(--accent)/0.8)] hover:text-[var(--accent-text)]">Projects</a>
            <a href="#contact" className="transition-shadow duration-300 hover:[text-shadow:0_0_10px_rgb(var(--accent)/0.8)] hover:text-[var(--accent-text)]">Contact</a>
            <ThemeToggle />
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}