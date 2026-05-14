import React from "react";

import { cn } from "@/lib/utils";

type InfiniteSliderProps = {
  children: React.ReactNode;
  speed?: number;
  speedOnHover?: number;
  gap?: number;
  className?: string;
};

export function InfiniteSlider({
  children,
  speed = 40,
  speedOnHover,
  gap = 64,
  className,
}: InfiniteSliderProps) {
  const duration = `${speed}s`;
  const hoverDuration = `${speedOnHover ?? speed}s`;

  return (
    <div
      className={cn("overflow-hidden", className)}
      style={
        {
          "--slider-gap": `${gap}px`,
          "--slider-duration": duration,
          "--slider-hover-duration": hoverDuration,
        } as React.CSSProperties
      }>
      <div className="slider-track flex w-max items-center gap-[var(--slider-gap)] hover:[animation-duration:var(--slider-hover-duration)]">
        <div className="flex items-center gap-[var(--slider-gap)]">{children}</div>
        <div
          className="flex items-center gap-[var(--slider-gap)]"
          aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
