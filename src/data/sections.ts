export interface Section {
  id: string;
  label: string;
  path: string;
  icon: string; // single letter/emoji shown in the "server" pill
}

export const sections: Section[] = [
  { id: "home", label: "home", path: "/", icon: "🏠" },
  { id: "about", label: "about", path: "/about", icon: "👤" },
  { id: "projects", label: "projects", path: "/projects", icon: "📁" },
  { id: "skills", label: "skills", path: "/skills", icon: "🛠" },
  { id: "taiwan-plan", label: "taiwan-plan", path: "/taiwan-plan", icon: "🇹🇼" },
  { id: "blog", label: "blog", path: "/blog", icon: "📝" },
  { id: "terminal", label: "terminal", path: "/terminal", icon: ">_" },
  { id: "contact", label: "contact", path: "/contact", icon: "✉️" },
];
