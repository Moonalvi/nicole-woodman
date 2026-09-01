import { CONTACT } from "@/lib/contact";
import { useReveal } from "@/hooks/use-reveal";

export function Proof() {
  const reveal = useReveal<HTMLDivElement>();

  return (
    <section className="bg-ink text-paper">
      <div
        ref={reveal.ref}
        className={`${reveal.className} mx-auto max-w-[1200px] px-6 py-28 sm:py-40 lg:px-10`}
      >
        <p className="eyebrow text-crimson">Why people trust her</p>

        <div className="mt-16 grid gap-x-10 gap-y-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="numeral text-[clamp(4.5rem,13vw,10rem)]">197K</p>
            <p className="mt-5 max-w-sm text-lg leading-relaxed text-paper/65">
              Followers on Facebook — a community she has built by showing up daily, not by
              advertising.
            </p>
          </div>

          <div className="md:col-span-5 md:pt-14">
            <p className="numeral text-[clamp(3rem,7vw,5.5rem)]">6+</p>
            <p className="mt-4 text-lg text-paper/65">
              Counties covered, plus broader North Carolina.
            </p>
          </div>

          <div className="border-t border-paper/15 pt-8 md:col-span-5 md:col-start-2">
            <p className="display text-2xl">{CONTACT.brokerage}</p>
            <p className="mt-3 text-paper/60">
              Brokerage support, marketing reach and referral network behind every listing.
            </p>
          </div>

          <div className="border-t border-paper/15 pt-8 md:col-span-4 md:col-start-8">
            <p className="display text-2xl">Licensed since 2019</p>
            <p className="mt-3 text-paper/60">
              Placeholder date — send the correct licence year and it goes straight in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
