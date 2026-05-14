import React from "react";

import { cn } from "@/lib/utils";

type ProgressiveBlurProps = {
  className?: string;
  direction?: "left" | "right";
  blurIntensity?: number;
};

export function ProgressiveBlur({
  className,
  direction = "left",
  blurIntensity = 1,
}: ProgressiveBlurProps) {
  const gradient =
    direction === "left"
      ? "linear-gradient(to right, black, transparent)"
      : "linear-gradient(to left, black, transparent)";

  return (
    <div
      className={cn("absolute", className)}
      style={{
        backdropFilter: `blur(${blurIntensity * 8}px)`,
        WebkitBackdropFilter: `blur(${blurIntensity * 8}px)`,
        maskImage: gradient,
        WebkitMaskImage: gradient,
      }}
    />
  );
}
