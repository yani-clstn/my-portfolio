const stack = ["React", "TypeScript", "Tailwind", "Node.js", "Python"];
const tools = ["Git", "Figma", "VS Code", "Vercel", "PostgreSQL", "Next.js", "Framer Motion"];

function MemberRow({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2 px-2 py-1 rounded-md hover:bg-paper-300/60 dark:hover:bg-base-700 text-sm">
      <div className="relative">
        <div className="w-6 h-6 rounded-full bg-pink/15 flex items-center justify-center text-[10px] font-mono text-pink">
          {name.slice(0, 2).toUpperCase()}
        </div>
        <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-online border border-paper-100 dark:border-base-800" />
      </div>
      <span className="text-paper-900/80 dark:text-base-100/80">{name}</span>
    </div>
  );
}

export default function RightSidebar() {
  return (
    <aside className="hidden lg:flex flex-col w-56 shrink-0 border-l border-paper-300 dark:border-base-600 px-2 py-4 overflow-y-auto">
      <p className="px-2 text-[11px] font-semibold uppercase tracking-wider text-paper-400 dark:text-base-400 mb-1">
        Online — {stack.length}
      </p>
      <div className="space-y-0.5 mb-4">
        {stack.map((s) => (
          <MemberRow key={s} name={s} />
        ))}
      </div>

      <p className="px-2 text-[11px] font-semibold uppercase tracking-wider text-paper-400 dark:text-base-400 mb-1">
        Also know — {tools.length}
      </p>
      <div className="space-y-0.5 opacity-60">
        {tools.map((t) => (
          <MemberRow key={t} name={t} />
        ))}
      </div>
    </aside>
  );
}
