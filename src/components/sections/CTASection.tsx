import { ButtonLink } from "@/components/ActionButton";
import { Reveal } from "@/components/Reveal";
import nightDrive from "@/assets/night-drive.jpg";

export function CTASection({
  title = "Your Drive Deserves Better.",
  lead = "Book a free consultation and we'll spec the exact system for your vehicle — no guesswork, no upselling.",
  label = "Get Started",
}: {
  title?: string;
  lead?: string;
  label?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={nightDrive}
        alt="Night drive with an illuminated dashboard"
        loading="lazy"
        width={1920}
        height={1088}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-background/78" aria-hidden="true" />
      <div className="mx-auto max-w-[1400px] px-5 py-24 text-center sm:px-8 lg:py-36">
        <Reveal>
          <p className="eyebrow justify-center">Ready when you are</p>
          <h2 className="display mx-auto mt-6 max-w-4xl text-[clamp(2.5rem,7vw,5.5rem)]">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">{lead}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink to="/contact">{label}</ButtonLink>
            <ButtonLink to="/services" variant="outline">
              Explore Services
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
