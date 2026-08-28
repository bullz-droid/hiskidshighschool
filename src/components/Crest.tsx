import React from "react";

interface CrestProps {
  className?: string;
  size?: number;
  variant?: "full" | "monochrome" | "light";
}

export const Crest: React.FC<CrestProps> = ({ className = "w-10 h-10", size, variant = "full" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="His Kids High School Crest"
    >
      {/* Outer Shield with Gold / Maroon Border */}
      <path
        d="M50 4 C24 4 12 12 12 36 C12 66 38 88 50 96 C62 88 88 66 88 36 C88 12 76 4 50 4 Z"
        fill={variant === "light" ? "#fbf8f2" : "#143d2b"}
        stroke="#781d2c"
        strokeWidth="3.5"
      />
      {/* Inner Accent Ring */}
      <path
        d="M50 9 C28 9 17 16 17 38 C17 64 40 83 50 90 C60 83 83 64 83 38 C83 16 72 9 50 9 Z"
        fill="none"
        stroke="#d4a338"
        strokeWidth="1.5"
        strokeDasharray="4 2"
      />
      
      {/* Quadrant Divider */}
      <line x1="50" y1="18" x2="50" y2="82" stroke="#d4a338" strokeWidth="1.5" opacity="0.6"/>
      <line x1="22" y1="48" x2="78" y2="48" stroke="#d4a338" strokeWidth="1.5" opacity="0.6"/>

      {/* Top Center: The Flame of Wisdom / Torch */}
      <g transform="translate(42, 16) scale(0.8)">
        <path d="M10 2 C10 2 3 9 3 15 A7 7 0 0 0 17 15 C17 9 10 2 10 2 Z" fill="#d4a338" />
        <path d="M10 6 C10 6 6 11 6 15 A4 4 0 0 0 14 15 C14 11 10 6 10 6 Z" fill="#781d2c" />
        <rect x="7" y="16" width="6" height="5" rx="1" fill="#d4a338"/>
      </g>

      {/* Top Left: Open Book / Knowledge */}
      <g transform="translate(25, 26) scale(0.65)">
        <path d="M2 8 C6 6 14 6 18 9 V26 C14 23 6 23 2 25 Z" fill="#f4ede2" stroke="#781d2c" strokeWidth="1.5"/>
        <path d="M34 8 C30 6 22 6 18 9 V26 C22 23 30 23 34 25 Z" fill="#f4ede2" stroke="#781d2c" strokeWidth="1.5"/>
        <line x1="6" y1="13" x2="14" y2="13" stroke="#143d2b" strokeWidth="1"/>
        <line x1="6" y1="17" x2="14" y2="17" stroke="#143d2b" strokeWidth="1"/>
        <line x1="22" y1="13" x2="30" y2="13" stroke="#143d2b" strokeWidth="1"/>
        <line x1="22" y1="17" x2="30" y2="17" stroke="#143d2b" strokeWidth="1"/>
      </g>

      {/* Top Right: Agriculture / Sheaf of Grain */}
      <g transform="translate(57, 26) scale(0.65)">
        <path d="M10 28 Q12 18 18 8 Q12 14 10 28 Z" fill="#d4a338"/>
        <path d="M10 28 Q8 18 2 8 Q8 14 10 28 Z" fill="#d4a338"/>
        <path d="M10 28 V4" stroke="#d4a338" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="10" cy="8" r="2.5" fill="#f4ede2"/>
        <circle cx="6" cy="14" r="2" fill="#f4ede2"/>
        <circle cx="14" cy="14" r="2" fill="#f4ede2"/>
      </g>

      {/* Bottom Left: Craftsmanship / Carpentry Square & Scissors */}
      <g transform="translate(27, 54) scale(0.65)">
        <path d="M4 6 H10 V20 H24 V26 H4 Z" fill="#d4a338" stroke="#781d2c" strokeWidth="1"/>
      </g>

      {/* Bottom Right: Sports Ball / Athletics */}
      <g transform="translate(57, 54) scale(0.65)">
        <circle cx="14" cy="14" r="11" fill="#f4ede2" stroke="#781d2c" strokeWidth="1.5"/>
        <path d="M14 3 V25 M3 14 H25" stroke="#143d2b" strokeWidth="1"/>
        <circle cx="14" cy="14" r="5" fill="#781d2c"/>
      </g>

      {/* Bottom Banner Ribbon */}
      <g transform="translate(18, 76)">
        <path
          d="M0 6 L10 0 L54 0 L64 6 L54 12 L10 12 Z"
          fill="#781d2c"
          stroke="#d4a338"
          strokeWidth="1"
        />
        <text
          x="32"
          y="8"
          fill="#fbf8f2"
          fontSize="4.5"
          fontFamily="sans-serif"
          fontWeight="bold"
          textAnchor="middle"
          letterSpacing="0.4"
        >
          HIS KIDS HIGH
        </text>
      </g>
    </svg>
  );
};
