import { useEffect, useState } from "react";

interface Line {
  type: "command" | "output";
  text: string;
}

const SCRIPT: Line[] = [
  { type: "command", text: "cd projects" },
  { type: "output", text: "offerly/  lychee-focus/  discord-portfolio/" },
  { type: "command", text: "cat resume.txt" },
  {
    type: "output",
    text: "althea — CS student. Frontend leaning full-stack. Building toward Taiwan, 2027.",
  },
  { type: "command", text: "cat status.txt" },
  { type: "output", text: "open to work · always learning · comfort color: pink" },
];

const TYPE_SPEED = 28;

export default function Terminal() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [rendered, setRendered] = useState<Line[]>([]);

  useEffect(() => {
    if (lineIndex >= SCRIPT.length) return;
    const current = SCRIPT[lineIndex];

    if (charIndex <= current.text.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), TYPE_SPEED);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setRendered((r) => [...r, current]);
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      }, current.type === "command" ? 250 : 500);
      return () => clearTimeout(t);
    }
  }, [lineIndex, charIndex]);

  const activeLine = SCRIPT[lineIndex];

  return (
    <div className="rounded-lg bg-[#0d0e10] text-[#d4d4d8] font-mono text-sm p-5 min-h-[320px] shadow-inner">
      {rendered.map((line, i) => (
        <div key={i} className="mb-1.5">
          {line.type === "command" ? (
            <span>
              <span className="text-pink">user@althea</span>
              <span className="text-paper-400">:~$ </span>
              {line.text}
            </span>
          ) : (
            <span className="text-paper-400 pl-1">{line.text}</span>
          )}
        </div>
      ))}

      {activeLine && (
        <div className="mb-1.5">
          {activeLine.type === "command" ? (
            <span>
              <span className="text-pink">user@althea</span>
              <span className="text-paper-400">:~$ </span>
              {activeLine.text.slice(0, charIndex)}
            </span>
          ) : (
            <span className="text-paper-400 pl-1">
              {activeLine.text.slice(0, charIndex)}
            </span>
          )}
          <span className="inline-block w-2 h-4 bg-pink ml-0.5 animate-blink align-middle" />
        </div>
      )}

      {lineIndex >= SCRIPT.length && (
        <div>
          <span className="text-pink">user@althea</span>
          <span className="text-paper-400">:~$ </span>
          <span className="inline-block w-2 h-4 bg-pink ml-0.5 animate-blink align-middle" />
        </div>
      )}
    </div>
  );
}
