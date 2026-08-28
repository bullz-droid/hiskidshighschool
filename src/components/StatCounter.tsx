"use client";
import React, { useEffect, useState, useRef } from "react";

interface StatItemProps {
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
  subtext?: string;
  accentColor?: "green" | "maroon" | "brown" | "gold";
}

export const StatCounter: React.FC<StatItemProps> = ({
  target,
  suffix = "",
  prefix = "",
  label,
  subtext,
  accentColor = "maroon"
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1600;
          const startTime = performance.now();

          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeProgress * target));

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  const getColorClass = () => {
    switch (accentColor) {
      case "green":
        return "text-brand-green-mid";
      case "gold":
        return "text-brand-gold-dark";
      case "brown":
        return "text-brand-brown";
      case "maroon":
      default:
        return "text-brand-maroon";
    }
  };

  return (
    <div
      ref={elementRef}
      className="p-6 bg-brand-beige/50 border border-brand-beige-border rounded-xl transition-all duration-300 hover:shadow-subtle hover:border-brand-maroon/40"
    >
      <div className={`font-mono text-3xl sm:text-4xl md:text-5xl font-bold ${getColorClass()}`}>
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="font-semibold text-brand-ink text-base md:text-lg mt-2">
        {label}
      </div>
      {subtext && (
        <div className="text-xs md:text-sm text-brand-ink-muted mt-1 leading-relaxed">
          {subtext}
        </div>
      )}
    </div>
  );
};
