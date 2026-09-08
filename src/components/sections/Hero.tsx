import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  alt,
  actions,
  height = "tall",
  overlay = "veil",
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  image: string;
  alt: string;
  actions?: ReactNode;
  height?: "tall" | "full";
  overlay?: "veil" | "side";
  children?: ReactNode;
}) {
  return (
    <section
      className={`relative isolate flex items-end overflow-hidden ${
        height === "full" ? "min-h-[92svh]" : "min-h-[72svh]"
      }`}
    >
      <img
        src={image}
        alt={alt}
        width={1920}
        height={1088}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        className={`absolute inset-0 -z-10 ${overlay === "veil" ? "veil" : "veil-side"}`}
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 hairline-grid opacity-40" aria-hidden="true" />

      <div className="mx-auto w-full max-w-[1400px] px-5 pb-16 pt-32 sm:px-8 sm:pb-24 lg:pb-28">
        <div className="max-w-4xl">
          {eyebrow && (
            <p className="eyebrow animate-fade-in flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              {eyebrow}
            </p>
          )}
          <h1 className="display animate-fade-in mt-6 text-[clamp(2.75rem,9vw,7.5rem)]">{title}</h1>
          {lead && (
            <p className="animate-fade-in mt-6 max-w-xl text-base leading-relaxed text-foreground/75 sm:text-lg">
              {lead}
            </p>
          )}
          {actions && <div className="mt-9 flex flex-wrap gap-4">{actions}</div>}
        </div>
        {children}
      </div>
    </section>
  );
}
