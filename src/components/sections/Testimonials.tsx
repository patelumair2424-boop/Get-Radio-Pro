import { Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/sections/SectionHeading";

const REVIEWS = [
  {
    name: "Marcus Whelan",
    vehicle: "2016 Toyota Tacoma",
    quote:
      "Wireless CarPlay in a truck that shipped with a CD player. The screen looks like it came from the factory - no gaps, no rattle, steering controls all still work.",
  },
  {
    name: "Priya Raman",
    vehicle: "2014 Honda Civic",
    quote:
      "They talked me out of the expensive option and specced what my car actually needed. Reverse camera and new speakers, done in a day.",
  },
  {
    name: "Dev Karlsson",
    vehicle: "2018 Ford F-150",
    quote:
      "The DSP tuning is the part nobody else offered. Vocals sit dead centre now and the road noise finally stopped drowning everything out.",
  },
];

export function Testimonials() {
  return (
    <section className="border-y border-border bg-surface/30">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          eyebrow="Owner Reviews"
          title={
            <>
              Rated by the people
              <br />
              <span className="text-primary">who drive it daily.</span>
            </>
          }
        />
        <ul className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal as="li" key={r.name} delay={i * 110} className="bg-background">
              <div className="flex h-full flex-col p-8 transition-colors duration-500 hover:bg-surface lg:p-10">
                <div className="flex gap-1" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mt-6 flex-1 text-base leading-relaxed text-foreground/85">
                  “{r.quote}”
                </p>
                <div className="mt-8 border-t border-border pt-5">
                  <p className="font-display text-lg font-semibold uppercase tracking-wide">
                    {r.name}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {r.vehicle}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
