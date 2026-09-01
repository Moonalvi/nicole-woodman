import { useReveal } from "@/hooks/use-reveal";

const QUOTES = [
  {
    quote:
      "She told us to wait two weeks on our offer. That advice saved us eleven thousand dollars.",
    who: "Marcus & Dee",
    where: "Leland",
  },
  {
    quote: "Listed Thursday, under contract Monday. She answered every text the same hour.",
    who: "Karen H.",
    where: "Hampstead",
  },
  {
    quote: "First-time buyers. Nothing felt rushed and nothing was hidden from us.",
    who: "The Alvarez family",
    where: "Jacksonville",
  },
];

export function Testimonials() {
  const reveal = useReveal<HTMLDivElement>();

  return (
    <section className="px-6 py-28 sm:py-40 lg:px-10">
      <div
        ref={reveal.ref}
        className={`${reveal.className} mx-auto grid max-w-[1100px] gap-14 md:grid-cols-3 md:gap-10`}
      >
        {QUOTES.map((q, i) => (
          <figure
            key={q.who}
            className={i === 1 ? "md:pt-16" : i === 2 ? "md:pt-6" : undefined}
          >
            <blockquote className="display-thin text-xl leading-snug">“{q.quote}”</blockquote>
            <figcaption className="eyebrow mt-6 text-ink-soft">
              {q.who} — {q.where}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
