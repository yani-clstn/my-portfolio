import { motion } from "framer-motion";
import { Pin, User, Hand } from "lucide-react";
import GithubPinkCalendar from "../components/GithubPinkCalendar";

function Message({
  time,
  children,
}: {
  time: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3 group">
      <div className="w-8 h-8 rounded-full bg-pink/15 flex items-center justify-center text-pink shrink-0 mt-0.5">
        <User size={16} />
      </div>
      <div className="min-w-0">
        <div className="flex items-baseline gap-2">
          <span className="font-semibold text-sm">Althea</span>
          <span className="text-[11px] text-paper-400 dark:text-base-400 font-mono">
            {time}
          </span>
        </div>
        <div className="text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="rounded-xl border border-pink/30 bg-pink/5 p-4"
      >
        <p className="flex items-center gap-1.5 text-[11px] font-mono text-pink uppercase tracking-wide mb-2">
          <Pin size={12} /> pinned — hero project
        </p>
        <div className="aspect-video w-full rounded-lg bg-paper-300 dark:bg-base-700 flex items-center justify-center text-paper-400 dark:text-base-400 text-sm font-mono">
          [ demo video / gif goes here ]
        </div>
        <p className="mt-3 text-sm">
          <span className="font-semibold">Offerly</span> — a job application
          tracker I built end-to-end (React, Hono, Neon Postgres) to manage my
          own Taiwan job search.
        </p>
      </motion.div>

      <div className="space-y-5">
        <Message time="Today at 09:14">
          <span className="inline-flex items-center gap-1.5">
            Hey, I'm Althea <Hand size={14} className="text-pink" />
          </span>{" "}
          — CS student building my way toward a tech career in Taiwan.
        </Message>
        <Message time="Today at 09:15">
          This portfolio is itself a project — Discord-themed because it's
          the UI I stare at every day, and pink because, well, it's my color.
        </Message>
        <Message time="Today at 09:16">
          <div className="flex items-center gap-3">
            <span>Here's my GitHub activity:</span>
          </div>
          <div className="mt-2">
            <GithubPinkCalendar username="yani-clstn" />
          </div>
        </Message>
      </div>
    </div>
  );
}