import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/Hero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/Reveal";
import workshop from "@/assets/workshop.jpg";
import install from "@/assets/install.jpg";
import audio from "@/assets/audio.jpg";
import carplay from "@/assets/carplay.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Get Radio Pro - Car Audio & Infotainment Specialists" },
      {
        name: "description",
        content:
          "Our story, our standards and why installation quality matters more than the box on the shelf. Meet the Get Radio Pro workshop.",
      },
      { property: "og:title", content: "About Get Radio Pro" },
      {
        property: "og:description",
        content: "A technology-first car audio workshop obsessed with factory-clean installation.",
      },
    ],
  }),
  component: About,
});

const STATS = [
  ["12", "Years in the bay"],
  ["6,400+", "Vehicles upgraded"],
  ["48", "Supported vehicle brands"],
  ["4.9", "Average owner rating"],
];

const PRINCIPLES = [
  {
    title: "Quality installation is the product",
    body: "A great head unit fitted badly is a worse car. Every loom is soldered and heat-shrunk, every panel comes off with trim tools, and every job ends with a full function test - reverse trigger, chimes, wheel controls, the lot.",
    image: install,
    alt: "Technician carefully fitting a touchscreen head unit into a dashboard",
  },
  {
    title: "Technology chosen, not sold",
    body: "We keep a short list of hardware we genuinely trust and spec from it. If your car only needs a Bluetooth module and better door speakers, that's what we'll quote - the upsell isn't the business model.",
    image: carplay,
    alt: "Touchscreen showing a connected phone projection interface",
  },
  {
    title: "Tuned for the cabin it lives in",
    body: "Glass angles, seat foam and door skins all change what you hear. Every audio build finishes with measurement and DSP time alignment so the stage sits where the windscreen is, not behind your knees.",
    image: audio,
    alt: "Component speaker installed in a luxury car door panel",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={
          <>
            Obsessed with
            <br />
            the <span className="text-primary">details.</span>
          </>
        }
        lead="Get Radio Pro started in a two-bay garage with one rule: an upgrade should feel like the car left the factory that way."
        image={workshop}
        alt="Professional car audio workshop at night with a dark sedan under focused lighting"
        overlay="side"
      />

      <section className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <Reveal>
            <p className="eyebrow">Est. 2014</p>
            <h2 className="display mt-6 text-4xl sm:text-5xl">
              We fix the gap between
              <br />
              your car and your phone.
            </h2>
          </Reveal>
          <Reveal delay={120} className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              The average car on the road is over twelve years old. It was engineered before
              wireless projection, before high-resolution reverse cameras, before anyone expected a
              dashboard to sync with a phone the moment you sat down.
            </p>
            <p>
              We spent a decade learning how to close that gap without damaging what the
              manufacturer got right - the ergonomics, the trim fit, the way the steering controls
              fall under your thumb. Every build starts with the vehicle's own wiring diagram, not a
              universal harness.
            </p>
            <p>
              Today the workshop runs four bays and a dedicated fabrication bench, and the rule
              hasn't changed. If the install can be spotted from the driver's seat, it isn't
              finished.
            </p>
          </Reveal>
        </div>

        <ul className="mt-20 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map(([n, l], i) => (
            <Reveal as="li" key={l} delay={i * 90} className="bg-background">
              <div className="p-8 lg:p-10">
                <p className="display text-5xl text-primary lg:text-6xl">{n}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  {l}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="border-y border-border bg-surface/30">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
          <SectionHeading
            eyebrow="How we work"
            title={
              <>
                Three standards we
                <br />
                <span className="text-primary">refuse to bend.</span>
              </>
            }
          />
          <div className="mt-16 space-y-14 lg:space-y-24">
            {PRINCIPLES.map((p, i) => (
              <div key={p.title} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                <Reveal
                  className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2 lg:col-start-6" : ""}`}
                >
                  <div className="group overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.alt}
                      loading="lazy"
                      width={1440}
                      height={1088}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                  </div>
                </Reveal>
                <Reveal delay={120} className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="font-display text-xs tracking-[0.3em] text-primary">
                    0{i + 1}
                  </span>
                  <h3 className="display mt-4 text-3xl sm:text-4xl">{p.title}</h3>
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground">{p.body}</p>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Build Yours Next."
        lead="Tell us the vehicle and how you drive it. We'll come back with a spec, a price and a date."
      />
    </>
  );
}
