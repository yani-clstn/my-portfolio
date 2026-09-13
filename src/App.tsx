import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import AppShell from "./components/layout/AppShell";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Terminal from "./pages/Terminal";
import LiveChat from "./pages/LiveChat";

// Quick placeholder so routing works end-to-end — replace each with a real
// page built the same way as Home.tsx (chat-message style content).
function Placeholder({ title }: { title: string }) {
  return (
    <div className="text-sm text-paper-400 dark:text-base-400 font-mono">
      #{title} — channel coming soon
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppShell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Placeholder title="skills" />} />
          <Route path="/taiwan-plan" element={<Placeholder title="taiwan-plan" />} />
          <Route path="/blog" element={<Placeholder title="blog" />} />
          <Route path="/terminal" element={<Terminal />} />
          <Route path="/live-chat" element={<LiveChat />} />
          <Route path="/contact" element={<Placeholder title="contact" />} />
        </Routes>
      </AppShell>
    </ThemeProvider>
  );
}
