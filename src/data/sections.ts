import {
  Home,
  User,
  FolderOpen,
  Wrench,
  MapPin,
  NotebookPen,
  Terminal,
  MessageCircle,
  Mail,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export interface Section {
  id: string;
  label: string;
  path: string;
  icon: LucideIcon;
}

export const sections: Section[] = [
  { id: "home", label: "home", path: "/", icon: Home },
  { id: "about", label: "about", path: "/about", icon: User },
  { id: "projects", label: "projects", path: "/projects", icon: FolderOpen },
  { id: "skills", label: "skills", path: "/skills", icon: Wrench },
  { id: "taiwan-plan", label: "taiwan-plan", path: "/taiwan-plan", icon: MapPin },
  { id: "blog", label: "blog", path: "/blog", icon: NotebookPen },
  { id: "terminal", label: "terminal", path: "/terminal", icon: Terminal },
  { id: "live-chat", label: "live-chat", path: "/live-chat", icon: MessageCircle },
  { id: "contact", label: "contact", path: "/contact", icon: Mail },
];