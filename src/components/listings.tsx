import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import l1a from "@/assets/listing1-a.jpg";
import l1b from "@/assets/listing1-b.jpg";
import l1c from "@/assets/listing1-c.jpg";
import l2a from "@/assets/listing2-a.jpg";
import l2b from "@/assets/listing2-b.jpg";
import l2c from "@/assets/listing2-c.jpg";
import l3a from "@/assets/listing3-a.jpg";
import l3b from "@/assets/listing3-b.jpg";
import l3c from "@/assets/listing3-c.jpg";
import { useReveal } from "@/hooks/use-reveal";

type Listing = {
  title: string;
  place: string;
  price: string;
  facts: string;
  images: { src: string; label: string }[];
};

const LISTINGS: [Listing, Listing, Listing] = [
  {
    title: "Tidewater House",
    place: "Wilmington · New Hanover County",
    price: "$1,145,000",
    facts: "4 bed · 3.5 bath · 3,210 sqft",
    images: [
      { src: l1a, label: "Waterfront elevation" },
      { src: l1b, label: "Living room" },
      { src: l1c, label: "Kitchen" },
    ],
  },
  {
    title: "Magnolia Row",
    place: "Leland · Brunswick County",
    price: "$639,000",
    facts: "4 bed · 3 bath · 2,480 sqft",
    images: [
      { src: l2a, label: "Front porch" },
      { src: l2b, label: "Dining" },
      { src: l2c, label: "Primary bedroom" },
    ],
  },
  {
    title: "Pine Ridge Cottage",
    place: "Hampstead · Pender County",
    price: "$475,000",
    facts: "3 bed · 2 bath · 1,870 sqft",
    images: [
      { src: l3a, label: "Exterior" },
      { src: l3b, label: "Entry" },
      { src: l3c, label: "Screened porch" },
    ],
  },
];

function Slides({ listing, tall }: { listing: Listing; tall?: boolean }) {
  const [i, setI] = useState(0);
  const total = listing.images.length;
  const go = (d: number) => setI((p) => (p + d + total) % total);

  return (
    <article className="group relative overflow-hidden bg-ink">
      <div className={tall ? "h-[52vh] md:h-[74vh]" : "h-[34vh] md:h-[36vh]"}>
        {listing.images.map((img, idx) => (
          <img
            key={img.src}
            src={img.src}
            loading="lazy"
            width={1600}
            height={1100}
            alt={`${listing.title} — ${img.label}`}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.03] ${
              idx === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="glass-dark absolute inset-x-3 bottom-3 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 rounded-xl px-4 py-3.5 sm:inset-x-4 sm:bottom-4 sm:px-5">
        <div className="min-w-0">
          <p className="eyebrow opacity-65">{listing.place}</p>
          <h3 className={`display mt-1.5 truncate ${tall ? "text-2xl sm:text-3xl" : "text-xl"}`}>
            {listing.title}
          </h3>
          <p className="mt-1 text-sm opacity-70">
            {listing.price} · {listing.facts}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          <button
            type="button"
            aria-label="Previous photo"
            onClick={() => go(-1)}
            className="grid size-9 place-items-center rounded-full border border-paper/25 transition-colors hover:bg-paper/15"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={() => go(1)}
            className="grid size-9 place-items-center rounded-full border border-paper/25 transition-colors hover:bg-paper/15"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>

      <div className="absolute right-4 top-4 flex gap-1.5">
        {listing.images.map((img, idx) => (
          <button
            key={img.src}
            type="button"
            aria-label={`Show ${img.label}`}
            onClick={() => setI(idx)}
            className={`h-0.5 w-7 transition-colors ${
              idx === i ? "bg-crimson" : "bg-paper/45 hover:bg-paper/80"
            }`}
          />
        ))}
      </div>
    </article>
  );
}

export function Listings() {
  const reveal = useReveal<HTMLDivElement>();

  return (
    <section id="listings" className="px-6 pb-32 sm:pb-44 lg:px-10">
      <div ref={reveal.ref} className={`${reveal.className} mx-auto max-w-[1300px]`}>
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6 border-t border-hairline pt-8">
          <div className="min-w-0">
            <p className="eyebrow text-crimson">Featured</p>
            <h2 className="display mt-5 text-[clamp(2rem,4vw,3.4rem)]">Currently on market</h2>
          </div>
          <p className="hidden max-w-56 pb-2 text-sm leading-relaxed text-ink-soft sm:block">
            A short, curated list. Ask about anything else in the MLS.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-12">
          <div className="md:col-span-7">
            <Slides listing={LISTINGS[0]} tall />
          </div>
          <div className="grid gap-5 md:col-span-5 md:pt-16">
            <Slides listing={LISTINGS[1]} />
            <div className="md:-ml-14">
              <Slides listing={LISTINGS[2]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
