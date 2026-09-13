import { Hand, Download } from "lucide-react";
import ChatMessage from "../components/ChatMessage";

interface SkillGroup {
  label: string;
  tint: string; // tailwind bg class for the category header chip
  tags: string[];
}

const skillGroups: SkillGroup[] = [
  { label: "Languages", tint: "bg-sky-500/10 text-sky-500", tags: ["JavaScript", "TypeScript", "HTML"] },
  { label: "Frontend", tint: "bg-pink/10 text-pink", tags: ["React", "Vite"] },
  { label: "Styling", tint: "bg-amber-500/10 text-amber-500", tags: ["CSS", "Tailwind CSS"] },
  { label: "Backend & Data", tint: "bg-violet-500/10 text-violet-500", tags: ["Hono", "Supabase", "Neon Postgres"] },
  { label: "Tools", tint: "bg-emerald-500/10 text-emerald-500", tags: ["Git", "VS Code", "Figma", "Vercel"] },
];

export default function About() {
  return (
    <div className="space-y-8">
      <div className="space-y-5">
        <ChatMessage time="Today at 10:02">
          <span className="inline-flex items-center gap-1.5">
            Hey again <Hand size={14} className="text-pink" />
          </span>{" "}
          — since you're in #about, here's the longer version.
        </ChatMessage>

        <ChatMessage time="Today at 10:03">
          I'm a CS student who leans frontend but ends up touching the whole
          stack anyway — because most of my projects start as "I just need a
          UI for this" and end with me writing the backend too.
        </ChatMessage>

        <ChatMessage time="Today at 10:04">
          Right now I'm building toward a frontend/software engineering role
          in Taiwan by 2027 — this portfolio, Offerly (my job tracker), and a
          few other projects are part of that plan.
        </ChatMessage>

        <ChatMessage time="Today at 10:05">
          <div className="flex items-center gap-2">
            <span>Here's my resume if you want the short version:</span>
          </div>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-1.5 mt-2 text-xs px-3 py-1.5 rounded-md bg-pink/10 text-pink hover:bg-pink/20 transition-colors"
          >
            <Download size={12} /> Download Resume
          </a>
        </ChatMessage>
      </div>

      {/* Skills, grouped like server role categories */}
      <div className="pt-2">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-paper-400 dark:text-base-400 mb-3">
          Skills
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-lg border border-paper-300 dark:border-base-600 p-3"
            >
              <span
                className={`inline-block text-[11px] font-semibold px-2 py-0.5 rounded-full mb-2 ${group.tint}`}
              >
                {group.label}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {group.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-md bg-paper-200 dark:bg-base-800 text-paper-900/80 dark:text-base-100/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
