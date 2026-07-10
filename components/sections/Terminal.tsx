"use client"
import { useEffect, useRef, useState } from "react";
import { PROJECTS } from "@/lib/data";

const BANNER = String.raw`$$\                 $$\
$$ |                \__|
$$$$$$$\   $$$$$$\  $$\ $$\  $$\  $$\  $$$$$$\
$$  __$$\ $$  __$$\ $$ |$$ | $$ | $$ | \____$$\
$$ |  $$ |$$ |  \__|$$ |$$ | $$ | $$ | $$$$$$$ |
$$ |  $$ |$$ |      $$ |$$ | $$ | $$ |$$  __$$ |
$$$$$$$  |$$ |      $$ |\$$$$$\$$$$  |\$$$$$$$ |
\_______/ \__|      \__| \_____\____/  \_______|`;

const SOCIALS = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/maroia-baani-896498244" },
  { name: "GitHub", url: "https://github.com/briw4" },
  { name: "Discord", url: "https://discord.com/channels/@me" },
];

type Line = { id: number; content: React.ReactNode };
type Mode = "command" | "knock1" | "knock2" | "knock3" | "off";

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<Mode>("command");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const knockName = useRef("");
  const nextId = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const print = (...contents: React.ReactNode[]) => {
    setLines((prev) => [
      ...prev,
      ...contents.map((content) => ({ id: nextId.current++, content })),
    ]);
  };

  const printWelcome = () => {
    print(
      <pre className="text-[var(--accent-text)] text-[10px] sm:text-xs leading-tight">{BANNER}</pre>,
      "",
      "Welcome to your Portfolio Management System!",
      "For the list of available commands, type 'help'.",
    );
  };

  useEffect(() => {
    printWelcome();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [lines]);

  const runCommand = (command: string) => {
    switch (command) {
      case "":
        print("No command entered. Please enter a command or type 'help' for assistance.");
        break;
      case "help":
        print(
          " whois         who is Briwa?",
          " whoami        who are you?",
          " social        Briwa's social media links",
          " projects      Briwa's projects",
          " help          you obviously know what this does",
          " clear         clear the terminal screen",
          " exit          exit the terminal",
        );
        break;
      case "whois":
        print("hey I am Briwa! A passionate computer science student");
        break;
      case "whoami":
        print("Knock Knock!");
        setMode("knock1");
        break;
      case "social":
        SOCIALS.forEach((s) =>
          print(
            <span>
              {s.name.padEnd(13, " ")}
              <a href={s.url} target="_blank" rel="noreferrer" className="underline text-[var(--accent-text)] hover:[text-shadow:0_0_10px_rgb(var(--accent)/0.8)]">
                {s.url}
              </a>
            </span>,
          ),
        );
        break;
      case "projects":
        print("Here are some of my projects:");
        PROJECTS.forEach((p) =>
          print(
            <span>
              {"- "}
              <a href={p.link} target="_blank" rel="noreferrer" className="underline text-[var(--accent-text)] hover:[text-shadow:0_0_10px_rgb(var(--accent)/0.8)]">
                {p.title}
              </a>
              {"  [" + p.tags.join(", ") + "]"}
            </span>,
          ),
        );
        print("Scroll down (or type nothing and just swipe) to see them in full!");
        break;
      case "clear":
        setLines([]);
        break;
      case "exit":
        print("logout", "Session ended. Press Enter to start a new session.");
        setMode("off");
        break;
      default:
        print(`Command '${command}' not found. Type 'help' for a list of available commands.`);
    }
  };

  const handleEnter = () => {
    const value = input;
    setInput("");

    if (mode === "off") {
      setLines([]);
      setMode("command");
      printWelcome();
      return;
    }

    if (mode === "command") {
      print(<span><span className="text-[var(--accent-text)]">portfolio&gt;</span> {value}</span>);
      const command = value.trim();
      if (command) {
        setHistory((prev) => [...prev, command]);
      }
      setHistoryIndex(-1);
      runCommand(command);
      return;
    }

    // knock-knock joke steps (whoami)
    print(<span><span className="text-[var(--accent-text)]">&gt;</span> {value}</span>);
    if (mode === "knock1") {
      print("Who's there?");
      setMode("knock2");
    } else if (mode === "knock2") {
      knockName.current = value.trim() || "...";
      print(`${knockName.current} who?`);
      setMode("knock3");
    } else if (mode === "knock3") {
      print(`Haha! You are ${knockName.current} ${value.trim()}! Nice to meet you!`);
      setMode("command");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleEnter();
    } else if (e.key === "ArrowUp" && mode === "command") {
      e.preventDefault();
      if (history.length === 0) return;
      const idx = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(idx);
      setInput(history[idx]);
    } else if (e.key === "ArrowDown" && mode === "command") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const idx = historyIndex + 1;
      if (idx >= history.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(idx);
        setInput(history[idx]);
      }
    }
  };

  const prompt = mode === "command" ? "portfolio>" : mode === "off" ? "" : ">";

  return (
    <section
      id="terminal"
      className="min-h-screen flex flex-col justify-center px-6 max-w-4xl mx-auto"
    >
      <h2 className="text-5xl font-semibold text-[var(--heading)] mb-3">Terminal</h2>
      <p className="text-[var(--fg)] mb-6">
        Prefer the command line? Explore this portfolio the hacker way — type <span className="text-[var(--accent-text)] font-mono">help</span> to get started.
      </p>

      <div
        onClick={() => inputRef.current?.focus()}
        className="rounded-xl overflow-hidden border border-[var(--card-border)] shadow-lg cursor-text transition-shadow duration-300 hover:shadow-[0_0_16px_4px_rgb(var(--accent)/0.55)] hover:border-[var(--accent-text)]"
      >
        <div className="flex items-center gap-2 px-4 py-2.5 bg-[#161b22] border-b border-[#30363d]">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          <span className="ml-3 text-xs text-gray-400 font-mono">briwa@portfolio: ~</span>
        </div>

        <div
          ref={bodyRef}
          className="bg-[#0d1117] text-gray-200 font-mono text-sm p-4 h-80 sm:h-96 overflow-y-auto [scrollbar-width:thin]"
        >
          {lines.map((line) => (
            <div key={line.id} className="whitespace-pre-wrap break-words leading-relaxed min-h-[1.25rem]">
              {line.content}
            </div>
          ))}
          <div className="flex items-center leading-relaxed">
            {prompt && <span className="text-[var(--accent-text)] mr-2">{prompt}</span>}
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none border-none text-gray-200 font-mono caret-[var(--accent-text)]"
              spellCheck={false}
              autoComplete="off"
              aria-label="Terminal input"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
