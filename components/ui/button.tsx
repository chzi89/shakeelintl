import React from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "outline" | "ghost";
type ButtonSize = "sm" | "lg";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantClasses: Record<ButtonVariant, string> = {
  default:
    "bg-foreground text-background shadow-sm hover:bg-foreground/90 dark:bg-white dark:text-black dark:hover:bg-white/90",
  outline:
    "border border-zinc-200 bg-background text-foreground shadow-sm hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-900",
  ghost:
    "text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-900",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 rounded-md px-3 text-sm",
  lg: "h-11 rounded-md px-6 text-base",
};

export function Button({
  asChild = false,
  variant = "default",
  size = "sm",
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-zinc-300",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (asChild && React.isValidElement<{ className?: string }>(children)) {
    return React.cloneElement(children, {
      className: cn(classes, children.props.className),
    });
  }

  return (
    <button
      className={classes}
      type={type}
      {...props}>
      {children}
    </button>
  );
}
