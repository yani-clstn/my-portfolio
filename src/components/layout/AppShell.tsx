import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import RightSidebar from "./RightSidebar";

export default function AppShell({ children }: { children: ReactNode }) {
  const location = useLocation();

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0">
        <Topbar />
        <main className="flex-1 overflow-y-auto bg-paper-100 dark:bg-base-800">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="max-w-3xl mx-auto px-6 py-8"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
      <RightSidebar />
    </div>
  );
}
