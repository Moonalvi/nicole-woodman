import portrait from "@/assets/nicole-portrait.jpg.asset.json";
import { COUNTIES } from "@/lib/contact";
import { useReveal } from "@/hooks/use-reveal";

export function AboutAreas() {
  const reveal = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="px-6 py-32 sm:py-44 lg:px-10">
      <div
        ref={reveal.ref}
        className={`${reveal.className} mx-auto grid max-w-[1200px] gap-6 md:grid-cols-12`}
      >
        {/* Tall portrait, cropped and offset */}
        <div className="md:col-span-5 md:row-span-2 md:-mt-10">
          <img
            src={portrait.url}
            loading="lazy"
            width={756}
            height={1096}
            alt="Nicole Woodman, North Carolina realtor"
            className="h-[420px] w-full object-cover object-top grayscale-[15%] md:h-[560px]"
          />
        </div>

        {/* Short intro, offset right */}
        <div className="md:col-span-6 md:col-start-7 md:pt-6">
          <p className="eyebrow text-crimson">About Nicole</p>
          <h2 className="display mt-6 text-[clamp(2rem,3.6vw,3.2rem)]">
            A local agent who
            <br />
            answers the phone.
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
            Nicole Woodman helps families buy and sell across coastal and central North
            Carolina. Her work is simple: understand what you actually need, show you what
            the market really is, and stay reachable from first showing to closing table.
          </p>
        </div>

        {/* Wide, low county block with cropped edge */}
        <div className="border-t border-hairline bg-paper-deep px-6 py-8 md:col-span-7 md:col-start-6 md:-ml-16 md:px-10">
          <p className="eyebrow text-ink-soft">Areas served</p>
          <ul className="mt-6 grid gap-x-10 gap-y-2 sm:grid-cols-2">
            {COUNTIES.map((c) => (
              <li
                key={c}
                className="display-thin text-lg transition-colors hover:text-crimson"
              >
                {c}
              </li>
            ))}
            <li className="display-thin text-lg text-ink-soft">
              …and broader North Carolina
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
