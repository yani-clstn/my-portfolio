import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Moon, Sun, Hash } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { sections } from "../../data/sections";

export default function Topbar() {
  const { theme, toggle } = useTheme();
  const navigate = useNavigate();
  const [cmd, setCmd] = useState("");
  const [open, setOpen] = useState(false);

  // Cmd/Ctrl+K opens the command bar, like most dev tools + Discord's quick switcher
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const runCommand = (raw: string) => {
    const query = raw.trim().replace(/^\//, "").toLowerCase();
    const match = sections.find((s) => s.id === query || s.label === query);
    if (match) {
      navigate(match.path);
      setCmd("");
      setOpen(false);
    }
  };

  return (
    <header className="h-14 shrink-0 flex items-center justify-between px-4 border-b border-paper-300 dark:border-base-600 bg-paper-100/80 dark:bg-base-800/80 backdrop-blur">
      <div className="flex items-center gap-2 text-sm">
        <span className="font-semibold">Althea</span>
        <span className="text-paper-400 dark:text-base-400">·</span>
        <span className="w-2 h-2 rounded-full bg-online inline-block" />
        <span className="text-paper-400 dark:text-base-400">Online · Philippines</span>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => setOpen(true)}
          className="hidden sm:flex items-center gap-2 text-xs px-3 py-1.5 rounded-md border border-paper-300 dark:border-base-600 text-paper-400 dark:text-base-400 hover:border-pink/50 hover:text-pink transition-colors font-mono"
        >
          <Hash size={12} /> type /about … <kbd className="ml-1 opacity-60">⌘K</kbd>
        </button>

        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className="p-2 rounded-md hover:bg-paper-300/60 dark:hover:bg-base-700 transition-colors"
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/40 flex items-start justify-center pt-32 z-50"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-paper-100 dark:bg-base-700 rounded-lg shadow-xl border border-paper-300 dark:border-base-600 p-2"
          >
            <input
              autoFocus
              value={cmd}
              onChange={(e) => setCmd(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && runCommand(cmd)}
              placeholder="/about, /projects, /contact …"
              className="w-full bg-transparent px-3 py-2 font-mono text-sm outline-none placeholder:text-paper-400 dark:placeholder:text-base-400"
            />
            <div className="border-t border-paper-300 dark:border-base-600 mt-1 pt-1">
              {sections
                .filter((s) => s.label.includes(cmd.replace(/^\//, "").toLowerCase()))
                .map((s) => (
                  <button
                    key={s.id}
                    onClick={() => runCommand(s.id)}
                    className="w-full text-left px-3 py-1.5 text-sm rounded-md hover:bg-pink/10 hover:text-pink font-mono"
                  >
                    /{s.label}
                  </button>
                ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
