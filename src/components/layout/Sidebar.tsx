import { NavLink } from "react-router-dom";
import { sections } from "../../data/sections";
import { User } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-60 shrink-0 bg-paper-200 dark:bg-base-900 border-r border-paper-300 dark:border-base-600">
      <div className="px-4 py-4 border-b border-paper-300 dark:border-base-600">
        <p className="font-mono text-xs text-paper-400 dark:text-base-400 tracking-wide">
          PORTFOLIO SERVER
        </p>
        <p className="font-semibold text-sm mt-0.5">Althea's workspace</p>
      </div>

      <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-0.5">
        <p className="px-2 text-[11px] font-semibold uppercase tracking-wider text-paper-400 dark:text-base-400 mb-1">
          Channels
        </p>
        {sections.map((s) => (
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
            <span className="text-paper-400 dark:text-base-400 text-xs w-4 text-center">
              #
            </span>
            {s.label}
          </NavLink>
        ))}
      </nav>

      <div className="px-3 py-3 border-t border-paper-300 dark:border-base-600 flex items-center gap-2">
        <div className="relative">
          <div className="w-8 h-8 rounded-full bg-pink/20 flex items-center justify-center text-pink">
            <User size={16} />
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-online border-2 border-paper-200 dark:border-base-900" />
        </div>
        <div className="text-xs leading-tight">
          <p className="font-medium">Althea</p>
          <p className="text-paper-400 dark:text-base-400">Open to work</p>
        </div>
      </div>
    </aside>
  );
}
