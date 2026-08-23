import { GitHubCalendar } from "react-github-calendar";

interface Props {
  username: string;
}

const pinkTheme = {
  light: [
    "#f2f3f5",
    "#fbcfe8",
    "#f472b6",
    "#db2777",
    "#831843",
  ],
  dark: [
    "#2b2d31",
    "#5c2a44",
    "#a13d72",
    "#d9599e",
    "#ff6fb5",
  ],
};

export default function GitHubPinkCalendar({ username }: Props) {
  return (
    
      <a
      href={`https://github.com/${username}`}
      target="_blank"
      rel="noreferrer"
      className="inline-block"
      >
      <GitHubCalendar
        username={username}
        theme={pinkTheme}
        blockSize={10}
        blockMargin={4}
        fontSize={12}
      />
      </a>
  );
}