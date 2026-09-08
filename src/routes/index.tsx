import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Cpu, Gauge, Wrench, Layers } from "lucide-react";
import { PageHero } from "@/components/sections/Hero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";
import { ButtonLink } from "@/components/ActionButton";
import { PhoneCallDialog } from "@/components/PhoneDialog";
import { Reveal } from "@/components/Reveal";
import { SERVICES } from "@/data/services";
import hero from "@/assets/hero-dashboard.jpg";
import workshop from "@/assets/workshop.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Get Radio Pro - Car Radio & Infotainment Upgrades" },
      {
        name: "description",
        content:
          "Modern car radio, touchscreen, CarPlay and audio upgrades installed to factory standard. Upgrade your drive with Get Radio Pro.",
      },
      { property: "og:title", content: "Get Radio Pro - Upgrade Your Drive" },
      {
        property: "og:description",
        content:
          "Premium car radio, infotainment and audio upgrades with professional installation.",
      },
    ],
  }),
  component: Home,
});

const VALUES = [
  {
    icon: Cpu,
    title: "Modern Technology",
    body: "Current-generation head units, wireless projection and DSP processing - specced for your exact vehicle, never a one-size box.",
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    body: "Soldered looms, trim-safe removal and torque-checked reassembly. Nothing cut, nothing crimped, nothing left rattling.",
  },
  {
    icon: Layers,
    title: "Seamless Integration",
    body: "Steering controls, chimes, reverse triggers and factory cameras all retained. It behaves like the car shipped this way.",
  },
  {
    icon: Gauge,
    title: "Better Driving Experience",
    body: "Faster boot, clearer calls, sharper navigation and sound that finally matches the road in front of you.",
  },
];

function Home() {
  return (
    <>
      <PhoneCallDialog />
      <PageHero
        height="full"
        eyebrow="Car Radio · Infotainment · Audio"
        title={
          <>
            Upgrade
            <br />
            Your <span className="text-primary">Drive.</span>
          </>
        }
        lead="We rebuild the way your car sounds and connects - modern touchscreens, wireless CarPlay and Android Auto, and audio engineered around your cabin."
        image={hero}
        alt="Premium car interior at night with a glowing touchscreen infotainment display"
        actions={
          <>
            <ButtonLink to="/contact">Get Started</ButtonLink>
            <ButtonLink to="/services" variant="outline">
              Explore Services
            </ButtonLink>
          </>
        }
      >
        <div className="pointer-events-none mt-14 hidden max-w-md items-end gap-6 md:flex">
          <div className="glass-plate flex items-end gap-1.5 px-5 py-4" aria-hidden="true">
            {[0.2, 0.5, 0.9, 0.4, 0.7, 1, 0.35, 0.6].map((h, i) => (
              <span
                key={i}
                className="wave-bar w-1.5 bg-primary"
                style={{ height: `${h * 34 + 8}px`, animationDelay: `${i * 0.11}s` }}
              />
            ))}
          </div>
          <div className="glass-plate relative overflow-hidden px-5 py-4">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Signal
            </p>
            <p className="display mt-1 text-2xl">
              98.6 <span className="text-primary">FM</span>
            </p>
            <span className="sweep-line absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
          </div>
        </div>
      </PageHero>

      {/* Why Get Radio Pro */}
      <section className="relative mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-32">
        <SectionHeading
          eyebrow="Why Get Radio Pro"
          title={
            <>
              Built for the car
              <br />
              <span className="text-primary">you already own.</span>
            </>
          }
          lead="Most cars on the road were sold before wireless projection existed. We close that gap without touching what already works."
        />

        <ul className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
          {VALUES.map((v, i) => (
            <Reveal as="li" key={v.title} delay={i * 90} className="bg-background">
              <div className="group flex h-full flex-col gap-5 p-8 transition-colors duration-500 hover:bg-surface lg:p-12">
                <div className="flex items-center gap-4">
                  <v.icon className="h-7 w-7 shrink-0 text-primary transition-transform duration-500 group-hover:-translate-y-1" />
                  <span className="font-display text-xs tracking-[0.3em] text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="display text-2xl sm:text-3xl">{v.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Featured services */}
      <section className="border-y border-border bg-surface/30">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-end">
            <SectionHeading
              eyebrow="Featured Services"
              title={
                <>
                  Six upgrades that
                  <br />
                  change the cabin.
                </>
              }
            />
            <Reveal delay={100} className="lg:justify-self-end">
              <ButtonLink to="/services" variant="outline">
                All Services <ArrowUpRight className="h-4 w-4" />
              </ButtonLink>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 100} className="bg-background">
                <Link
                  to="/services"
                  className="group relative flex h-full min-h-[340px] flex-col justify-end overflow-hidden"
                >
                  <img
                    src={s.image}
                    alt={s.alt}
                    loading="lazy"
                    width={1440}
                    height={1088}
                    className="absolute inset-0 h-full w-full object-cover opacity-60 transition-all duration-[1200ms] ease-out group-hover:scale-110 group-hover:opacity-80"
                  />
                  <div className="veil absolute inset-0" aria-hidden="true" />
                  <div className="relative p-8">
                    <span className="font-display text-xs tracking-[0.3em] text-primary">
                      {s.index}
                    </span>
                    <h3 className="display mt-3 text-2xl sm:text-3xl">{s.title}</h3>
                    <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-muted-foreground opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                      {s.summary}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience section */}
      <section className="relative isolate overflow-hidden">
        <img
          src={workshop}
          alt="Dark sedan being fitted with a new audio system in a professional workshop"
          loading="lazy"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="veil-side absolute inset-0 -z-10" aria-hidden="true" />
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:py-40">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">The Transformation</p>
            <h2 className="display mt-6 text-[clamp(2.25rem,6vw,4.75rem)]">
              From a dead dash
              <br />
              to a <span className="text-primary">connected cockpit.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-foreground/80 sm:text-lg">
              A worn-out single-DIN radio, a tangle of aux cables and a phone wedged in a vent -
              that's where most builds start. We strip it back, plan the fitment around your dash,
              and hand back a cabin that reads your maps, your calls and your music the second the
              door closes.
            </p>
            <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
              {[
                ["Before", "Faded display, no projection, blown door speakers"],
                ["During", "Dash mapped, looms soldered, DSP tuned to the cabin"],
                ["After", "Wireless CarPlay, reverse camera, full-range sound"],
              ].map(([k, v]) => (
                <div key={k} className="bg-background/90 p-6 backdrop-blur-sm">
                  <p className="font-display text-xs uppercase tracking-[0.28em] text-primary">
                    {k}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Testimonials />
      <CTASection />
    </>
  );
}
