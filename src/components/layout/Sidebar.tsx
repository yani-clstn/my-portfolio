import { useState } from "react";
import { NavLink } from "react-router-dom";
import { User } from "lucide-react";
import { sections } from "../../data/sections";
import ProfileCard from "../ProfileCard";

export default function Sidebar() {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <aside className="hidden md:flex flex-col w-60 shrink-0 bg-paper-200 dark:bg-base-900 border-r border-paper-300 dark:border-base-600">
      <div className="px-4 py-4 border-b border-paper-300 dark:border-base-600">
        <p className="font-mono text-xs text-paper-400 dark:text-base-400 tracking-wide">
          PORTFOLIO SERVER
        </p>
        <p className="font-semibold text-sm mt-0.5">Elijah's workspace</p>
      </div>

      <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-0.5">
        <p className="px-2 text-[11px] font-semibold uppercase tracking-wider text-paper-400 dark:text-base-400 mb-1">
          Channels
        </p>
        {sections.map((s) => {
          const Icon = s.icon;
          return (
            <NavLink
              key={s.id}
              to={s.path}
              className={({ isActive }) =>
                `flex items-center gap-2 px-2 py-1.5 rounded-md text-sm transition-colors ${
                  isActive
                    ? "bg-pink/15 text-pink font-medium"
                    : "text-paper-900/70 dark:text-base-100/70 hover:bg-paper-300/60 dark:hover:bg-base-700"
                }`
              }
            >
              <Icon size={14} className="shrink-0" />
              {s.label}
            </NavLink>
          );
        })}
      </nav>

      <button
        onClick={() => setProfileOpen(true)}
        className="px-3 py-3 border-t border-paper-300 dark:border-base-600 flex items-center gap-2 hover:bg-paper-300/60 dark:hover:bg-base-700 transition-colors text-left"
      >
        <div className="relative">
          <div className="w-8 h-8 rounded-full bg-pink/20 flex items-center justify-center text-pink">
            <User size={16} />
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-online border-2 border-paper-200 dark:border-base-900" />
        </div>
        <div className="text-xs leading-tight">
          <p className="font-medium">Elijah</p>
          <p className="text-paper-400 dark:text-base-400">Open to work</p>
        </div>
      </button>

      <ProfileCard open={profileOpen} onClose={() => setProfileOpen(false)} />
    </aside>
  );
}