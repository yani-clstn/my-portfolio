import { Pin, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export interface Project {
  name: string;
  status: string;
  description: string;
  tags: string[];
  repo?: string;
  live?: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-xl border border-pink/30 bg-pink/5 p-4 flex flex-col">
      <p className="flex items-center gap-1.5 text-[11px] font-mono text-pink uppercase tracking-wide mb-2">
        <Pin size={12} /> {project.status}
      </p>

      <p className="font-semibold text-sm">{project.name}</p>
      <p className="text-sm mt-1 text-paper-900/80 dark:text-base-100/80 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-3">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] px-2 py-1 rounded-md bg-paper-200 dark:bg-base-800 text-paper-900/70 dark:text-base-100/70"
          >
            {tag}
          </span>
        ))}
      </div>

      {(project.repo || project.live) && (
        <div className="flex gap-3 mt-4 pt-3 border-t border-pink/20">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-paper-400 dark:text-base-400 hover:text-pink transition-colors"
            >
              <FaGithub size={13} /> Repo
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-paper-400 dark:text-base-400 hover:text-pink transition-colors"
            >
              <ExternalLink size={13} /> Live
            </a>
          )}
        </div>
      )}
    </div>
  );
}
