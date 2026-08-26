import { useEffect, useRef, useState } from "react";
import { User, Send } from "lucide-react";
import { supabase } from "../lib/supabase";
import type { ChatMessage } from "../lib/supabase";

function formatTimestamp(iso: string) {
  const date = new Date(iso);
  const now = new Date();
  const isToday = date.toDateString() === now.toDateString();

  const time = date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });

  if (isToday) return `Today at ${time}`;

  const isThisYear = date.getFullYear() === now.getFullYear();
  const dateStr = date.toLocaleDateString([], {
    month: "short",
    day: "numeric",
    year: isThisYear ? undefined : "numeric",
  });
  return `${dateStr} at ${time}`;
}

export default function LiveChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Initial load
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .order("created_at", { ascending: true })
        .limit(200);

      if (!cancelled) {
        if (error) setError(error.message);
        else setMessages(data ?? []);
        setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // Realtime subscription — new messages push in live for every visitor
  useEffect(() => {
    const channel = supabase
      .channel("messages-feed")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "messages" },
        (payload) => {
          setMessages((prev) => [...prev, payload.new as ChatMessage]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedAuthor = author.trim();
    const trimmedContent = content.trim();
    if (!trimmedAuthor || !trimmedContent) return;

    setSending(true);
    setError(null);
    const { error } = await supabase
      .from("messages")
      .insert({ author: trimmedAuthor, content: trimmedContent });
    setSending(false);

    if (error) {
      setError(error.message);
    } else {
      setContent("");
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-4">
        <p className="text-xs font-mono text-paper-400 dark:text-base-400 uppercase tracking-wide">
          #live-chat
        </p>
        <p className="text-sm text-paper-400 dark:text-base-400">
          Leave a message — visible to everyone who visits, live.
        </p>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 pr-1">
        {loading && (
          <p className="text-sm text-paper-400 dark:text-base-400 font-mono">
            loading messages…
          </p>
        )}

        {!loading && messages.length === 0 && (
          <p className="text-sm text-paper-400 dark:text-base-400 font-mono">
            No messages yet — be the first to say hi 👋
          </p>
        )}

        {messages.map((m) => (
          <div key={m.id} className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-pink/15 flex items-center justify-center text-pink shrink-0 mt-0.5">
              <User size={16} />
            </div>
            <div className="min-w-0">
              <div className="flex items-baseline gap-2">
                <span className="font-semibold text-sm">{m.author}</span>
                <span className="text-[11px] text-paper-400 dark:text-base-400 font-mono">
                  {formatTimestamp(m.created_at)}
                </span>
              </div>
              <p className="text-sm leading-relaxed break-words">{m.content}</p>
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {error && (
        <p className="text-xs text-red-400 font-mono mt-2">Error: {error}</p>
      )}

      <form
        onSubmit={handleSend}
        className="mt-4 pt-3 border-t border-paper-300 dark:border-base-600 flex flex-col gap-2"
      >
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Your name"
          maxLength={30}
          className="text-sm px-3 py-2 rounded-md bg-paper-200 dark:bg-base-800 border border-paper-300 dark:border-base-600 outline-none focus:border-pink/50"
        />
        <div className="flex gap-2">
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Message #live-chat"
            maxLength={500}
            className="flex-1 text-sm px-3 py-2 rounded-md bg-paper-200 dark:bg-base-800 border border-paper-300 dark:border-base-600 outline-none focus:border-pink/50"
          />
          <button
            type="submit"
            disabled={sending || !author.trim() || !content.trim()}
            className="px-3 py-2 rounded-md bg-pink text-white disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
          >
            <Send size={16} />
          </button>
        </div>
      </form>
    </div>
  );
}
