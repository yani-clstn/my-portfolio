import ChatMessage from "../components/ChatMessage";
import ProjectCard from "../components/ProjectCard";
import type { Project } from "../components/ProjectCard";

// Fill in real repo/live URLs as each project goes public
const projects: Project[] = [
  {
    name: "Offerly",
    status: "personal project",
    description:
      "A job application tracker I built end-to-end — status pipeline, notes, deadline reminders, and resume/cover letter versions — to manage my own Taiwan job search.",
    tags: ["React", "Vite", "Hono", "Neon Postgres", "TypeScript"],
    repo: "https://github.com/yani-clstn/Offerly",
    live: "https://offerly-job-tracker.vercel.app",
  },
  {
    name: "STRAY SAFE",
    status: "IoT · group project",
    description:
      "An Arduino/ESP32-based solar-powered automated feeding station for stray animals, paired with a web dashboard tracking food/water levels, visits, and solar usage.",
    tags: ["Arduino", "ESP32", "IoT", "Web Dashboard"],
    repo: "https://github.com/yani-clstn/STRAY-SAFE",
    live: "https://stray-safe-telemetry.vercel.app",
  },
  {
    name: "QuizHero",
    status: "software engineering · group project",
    description:
      "An AI-powered study and quiz platform for CvSU-Imus students — teachers generate flashcards/quizzes from course materials, students get spaced-repetition review scheduling.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Gemini API"],
  },
  {
    name: "Koolest",
    status: "Business · personal project",
    description:
      "A landing page with booking and feedback form for Koolest Aircon Cleaning Services.",
    tags: ["HTML", "Tailwind CSS", "PostgreSQL", "zod", "Vercel"],
    repo: "https://github.com/yani-clstn/Koolest",
    live: "https://koolest.vercel.app",
  },
];

export default function Projects() {
  return (
    <div className="space-y-8">
      <ChatMessage time="Today at 11:00">
        Here's what I've been building — a mix of personal projects, school
        work, and org tooling.
      </ChatMessage>

      <div className="grid sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
