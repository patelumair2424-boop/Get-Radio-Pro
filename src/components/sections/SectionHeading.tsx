import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      {eyebrow && (
        <p className="eyebrow flex items-center gap-3">
          {align === "center" && <span className="h-px w-8 bg-primary/60" />}
          {eyebrow}
          <span className="h-px w-8 bg-primary/60" />
        </p>
      )}
      <h2 className="display mt-5 text-4xl sm:text-5xl lg:text-6xl">{title}</h2>
      {lead && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{lead}</p>
      )}
    </Reveal>
  );
}
