import { motion, AnimatePresence } from "framer-motion";
import { X, User, Mail, Code2, GraduationCap, MapPin } from "lucide-react";
import { FaGithub} from "react-icons/fa";

interface ProfileCardProps { 
    open: boolean;
    onClose: () => void;
}

const PROFILE = {
    name: "Althea",
    tag: "@yani-cltsn",
    bio: "CS student building my way toward Software Engineering.",
    badges: [
    { icon: GraduationCap, label: "CS Student" },
    { icon: Code2, label: "Backend" },
    { icon: MapPin, label: "Philippines" },
  ],
  links: [
    { icon: FaGithub, label: "GitHub", href: "https://github.com/yani-clstn" },
    { icon: Mail, label: "Email", href: "mailto:altheanicolekabigting@gmail.com" },
  ],
};

export default function ProfileCard({ open, onClose }: ProfileCardProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ duration: 0.15 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm rounded-xl overflow-hidden bg-paper-100 dark:bg-base-700 border border-paper-300 dark:border-base-600 shadow-2xl"
          >
            <div className="h-20 bg-gradient-to-r from-pink to-pink-muted relative">
              <button
                onClick={onClose}
                aria-label="Close profile"
                className="absolute top-2 right-2 p-1 rounded-full bg-black/20 hover:bg-black/30 text-white transition-colors"
              >
                <X size={14} />
              </button>
            </div>

            <div className="px-4 pb-4">
              <div className="relative -mt-8 mb-2">
                <div className="w-16 h-16 rounded-full bg-pink/20 border-4 border-paper-100 dark:border-base-700 flex items-center justify-center text-pink">
                  <User size={28} />
                </div>
                <span className="absolute bottom-0.5 left-11 w-4 h-4 rounded-full bg-online border-2 border-paper-100 dark:border-base-700" />
              </div>

              <p className="font-semibold text-base">{PROFILE.name}</p>
              <p className="text-xs text-paper-400 dark:text-base-400 font-mono">{PROFILE.tag}</p>
        
              <div className="flex flex-wrap gap-1.5 mt-3">
                {PROFILE.badges.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded-full bg-pink/10 text-pink"
                  >
                    <Icon size={12} />
                    {label}
                  </span>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-paper-300 dark:border-base-600">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-paper-400 dark:text-base-400 mb-1">
                  About Me
                </p>
                <p className="text-sm leading-relaxed">{PROFILE.bio}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-paper-300 dark:border-base-600 space-y-1">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-paper-400 dark:text-base-400 mb-1">
                  Connections
                </p>
                {PROFILE.links.map(({ icon: Icon, label, href }) => (
                  <a
                  key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm px-2 py-1.5 rounded-md hover:bg-paper-300/60 dark:hover:bg-base-600 transition-colors"
                    >                 
                    <Icon size={14} className="text-paper-400 dark:text-base-400" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

