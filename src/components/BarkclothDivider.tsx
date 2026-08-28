import React from "react";

interface DividerProps {
  theme?: "on-cream" | "on-green" | "on-maroon" | "on-beige";
  height?: number;
}

export const BarkclothDivider: React.FC<DividerProps> = ({ theme = "on-cream", height = 36 }) => {
  const getColors = () => {
    switch (theme) {
      case "on-green":
        return {
          bg: "#143d2b",
          primary: "#d4a338",
          secondary: "#781d2c",
          dot: "#143d2b",
          chevron: "#8c6d53",
        };
      case "on-maroon":
        return {
          bg: "#781d2c",
          primary: "#d4a338",
          secondary: "#143d2b",
          dot: "#781d2c",
          chevron: "#f4ede2",
        };
      case "on-beige":
        return {
          bg: "#f4ede2",
          primary: "#781d2c",
          secondary: "#143d2b",
          dot: "#f4ede2",
          chevron: "#8c6d53",
        };
      case "on-cream":
      default:
        return {
          bg: "#fbf8f2",
          primary: "#781d2c",
          secondary: "#1c5236",
          dot: "#fbf8f2",
          chevron: "#b89d82",
        };
    }
  };

  const colors = getColors();

  return (
    <div
      className="w-full overflow-hidden select-none"
      style={{ height: `${height}px`, backgroundColor: colors.bg }}
      aria-hidden="true"
    >
      <svg
        width="100%"
        height={height}
        viewBox="0 0 640 36"
        preserveAspectRatio="repeat-x"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <pattern id={`barkcloth-${theme}`} width="64" height="36" patternUnits="userSpaceOnUse">
          <rect width="64" height="36" fill={colors.bg} />
          {/* Main Diamond */}
          <path d="M32 4 L48 18 L32 32 L16 18 Z" fill={colors.primary} />
          <circle cx="32" cy="18" r="3.5" fill={colors.dot} />
          {/* Side Chevron Elements */}
          <path d="M0 18 L8 11 L16 18 L8 25 Z" fill={colors.secondary} />
          <path d="M48 18 L56 11 L64 18 L56 25 Z" fill={colors.secondary} />
          {/* Subtle Accent Trim */}
          <line x1="0" y1="1" x2="64" y2="1" stroke={colors.chevron} strokeWidth="1" strokeDasharray="4 2" opacity="0.4" />
          <line x1="0" y1="35" x2="64" y2="35" stroke={colors.chevron} strokeWidth="1" strokeDasharray="4 2" opacity="0.4" />
        </pattern>
        <rect width="100%" height="100%" fill={`url(#barkcloth-${theme})`} />
      </svg>
    </div>
  );
};
