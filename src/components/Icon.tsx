import type { FeatureIcon } from "../content/siteContent";

type IconName = FeatureIcon | "check" | "shield" | "lock" | "cpu" | "key" | "arrow" | "download" | "sparkle";

// Simple 24px stroke icons, drawn to match the app's icon set.
const PATHS: Record<IconName, string[]> = {
  mail: ["M4 6h16v12H4z", "m4 7 8 6 8-6"],
  calendar: ["M5 5h14v15H5z", "M5 10h14", "M9 3v4", "M15 3v4"],
  folder: ["M3 7h6l2 2h10v10H3z"],
  monitor: ["M3 4h18v12H3z", "M8 20h8", "M12 16v4"],
  mic: ["M12 3a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3z", "M5 11a7 7 0 0 0 14 0", "M12 18v3"],
  repeat: ["M17 2l3 3-3 3", "M4 11V9a4 4 0 0 1 4-4h12", "M7 22l-3-3 3-3", "M20 13v2a4 4 0 0 1-4 4H4"],
  plug: ["M9 2v6", "M15 2v6", "M6 8h12v3a6 6 0 0 1-12 0z", "M12 17v5"],
  brain: [
    "M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V5a2 2 0 0 0-3-1z",
    "M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1",
  ],
  book: ["M4 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4z", "M20 4h-6", "M20 4v14h-6"],
  sun: ["M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z", "M12 2v2", "M12 20v2", "M4.9 4.9l1.4 1.4", "M17.7 17.7l1.4 1.4", "M2 12h2", "M20 12h2", "M4.9 19.1l1.4-1.4", "M17.7 6.3l1.4-1.4"],
  check: ["m5 12 5 5 9-10"],
  shield: ["M12 3 5 6v6c0 4 3 7.5 7 9 4-1.5 7-5 7-9V6z", "m9 12 2 2 4-4"],
  lock: ["M6 11h12v10H6z", "M8 11V8a4 4 0 0 1 8 0v3"],
  cpu: ["M7 7h10v10H7z", "M10 10h4v4h-4z", "M9 3v4", "M15 3v4", "M9 17v4", "M15 17v4", "M3 9h4", "M3 15h4", "M17 9h4", "M17 15h4"],
  key: ["M14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0z", "m13 13 8 8", "m18 18 2-2", "m16 16 2-2"],
  arrow: ["M5 12h14", "m13 6 6 6-6 6"],
  download: ["M12 4v11", "m7 10 5 5 5-5", "M5 20h14"],
  sparkle: ["M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"],
};

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
  strokeWidth?: number;
};

function Icon({ name, size = 22, className, strokeWidth = 1.8 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {PATHS[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}

export default Icon;
