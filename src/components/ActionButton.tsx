import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "group relative inline-flex items-center justify-center gap-2 font-display uppercase tracking-[0.16em] text-sm font-semibold px-7 py-4 rounded-xs transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60";

const variants = {
  primary:
    "bg-primary text-primary-foreground hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)]",
  outline:
    "border border-border text-foreground hover:border-primary hover:text-primary hover:-translate-y-0.5 bg-transparent",
  ghost: "text-foreground/80 hover:text-primary px-0 py-1 tracking-[0.24em]",
} as const;

type Variant = keyof typeof variants;

export function ButtonLink({
  to,
  variant = "primary",
  className,
  children,
}: {
  to: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link to={to} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ComponentProps<"button"> & { variant?: Variant }) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
