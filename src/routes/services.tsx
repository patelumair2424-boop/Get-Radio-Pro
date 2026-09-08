import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/Hero";
import { ServiceShowcase } from "@/components/sections/ServiceShowcase";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/Reveal";
import { SERVICES } from "@/data/services";
import carplay from "@/assets/carplay.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services - Car Radio, CarPlay & Audio Upgrades | Get Radio Pro" },
      {
        name: "description",
        content:
          "Radio upgrades, touchscreen systems, Apple CarPlay, Android Auto, backup cameras, steering wheel controls and professional installation.",
      },
      { property: "og:title", content: "Get Radio Pro Services" },
      {
        property: "og:description",
        content:
          "Eight upgrade paths for a modern, connected cabin - installed to factory standard.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title={
          <>
            Everything behind
            <br />
            the <span className="text-primary">dashboard.</span>
          </>
        }
        lead="Eight upgrade paths, one standard of installation. Mix them into a single build or start with the one that bothers you most."
        image={carplay}
        alt="Modern car touchscreen running phone projection with maps and media"
        overlay="side"
      />

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] gap-px border-x border-border bg-border px-0 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Free", "Fitment consultation"],
            ["1 Day", "Typical turnaround"],
            ["2 Years", "Workmanship warranty"],
            ["100%", "Factory controls retained"],
          ].map(([n, l], i) => (
            <Reveal key={l} delay={i * 80} className="bg-background">
              <div className="px-6 py-8 sm:px-8">
                <p className="display text-3xl text-primary">{n}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  {l}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="divide-y divide-border">
        {SERVICES.map((s, i) => (
          <ServiceShowcase key={s.slug} service={s} flip={i % 2 === 1} />
        ))}
      </div>

      <CTASection
        title="Not Sure Where To Start?"
        lead="Send us your make, model and year. We'll tell you exactly what fits and what it changes."
        label="Request an Upgrade"
      />
    </>
  );
}
