import { User } from "lucide-react";

interface ChatMessageProps {
  time: string;
  author?: string;
  children: React.ReactNode;
}

export default function ChatMessage({ time, author = "Althea", children }: ChatMessageProps) {
  return (
    <div className="flex gap-3 group">
      <div className="w-8 h-8 rounded-full bg-pink/15 flex items-center justify-center text-pink shrink-0 mt-0.5">
        <User size={16} />
      </div>
      <div className="min-w-0">
        <div className="flex items-baseline gap-2">
          <span className="font-semibold text-sm">{author}</span>
          <span className="text-[11px] text-paper-400 dark:text-base-400 font-mono">
            {time}
          </span>
        </div>
        <div className="text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}