import { Link } from "@tanstack/react-router";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      to="/"
      aria-label="Get Radio Pro home"
      className="group flex min-w-0 items-center gap-2.5"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7 shrink-0 text-primary"
        aria-hidden="true"
        fill="none"
      >
        <path
          d="M8 22a9 9 0 0 1 0-12"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="square"
        />
        <path
          d="M14 26a15 15 0 0 1 0-20"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="square"
          opacity="0.55"
        />
        <rect x="19" y="13" width="6" height="6" fill="currentColor" />
      </svg>
      <span className="display flex min-w-0 items-baseline gap-1.5 text-xl tracking-tight sm:text-2xl">
        {!compact && <span className="text-foreground/70">Get</span>}
        <span className="text-foreground">Radio</span>
        <span className="bg-primary px-1.5 text-primary-foreground transition-transform duration-300 group-hover:translate-x-0.5">
          Pro
        </span>
      </span>
    </Link>
  );
}
