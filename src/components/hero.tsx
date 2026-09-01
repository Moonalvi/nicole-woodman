import heroImg from "@/assets/hero-residence.jpg";
import { CONTACT } from "@/lib/contact";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40">
      {/* Golden-ratio split: text 61.8%, cropped architecture 38.2% */}
      <div className="mx-auto grid max-w-[1500px] gap-12 px-6 lg:grid-cols-[1.618fr_1fr] lg:gap-0 lg:px-10">
        <div className="flex flex-col justify-center lg:py-28 lg:pr-16">
          <p className="eyebrow text-crimson">North Carolina Real Estate</p>
          <h1 className="display mt-8 text-[clamp(2.9rem,7.4vw,6.6rem)]">
            Coastal homes,
            <br />
            <span className="display-thin block">handled with</span>
            care.
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-ink-soft">
            Buying and selling across Brunswick, New Hanover, Pender and beyond — with
            straight answers, local knowledge and zero pressure.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <a
              href="#listings"
              className="eyebrow rounded-full bg-ink px-8 py-4 text-paper transition-transform duration-300 hover:-translate-y-0.5 hover:bg-crimson"
            >
              Browse Homes
            </a>
            <a
              href="#contact"
              className="eyebrow glass glass-sheen rounded-full px-8 py-4 text-ink transition-transform duration-300 hover:-translate-y-0.5"
            >
              Sell Your Home
            </a>
          </div>
        </div>

        <div className="relative -mr-6 lg:-mr-10">
          <img
            src={heroImg}
            width={1408}
            height={1760}
            alt="Modern coastal North Carolina residence at golden hour"
            className="h-[62vh] w-full object-cover object-left lg:h-[86vh]"
          />
          <div className="glass-dark absolute bottom-6 left-0 -translate-x-6 rounded-2xl px-6 py-5 lg:-translate-x-16">
            <p className="eyebrow opacity-70">Serving</p>
            <p className="display mt-2 text-lg leading-tight">
              6 counties + <br />
              broader North Carolina
            </p>
            <p className="mt-3 text-sm opacity-70">{CONTACT.brokerage}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
