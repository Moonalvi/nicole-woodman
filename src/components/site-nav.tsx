import { CONTACT } from "@/lib/contact";

export function SiteNav() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6">
      <nav className="glass glass-sheen pointer-events-auto mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-full px-5 py-3 sm:px-7">
        <a href="#top" className="min-w-0">
          <span className="display block truncate text-[0.95rem] sm:text-base">
            Nicole Woodman
          </span>
          <span className="eyebrow mt-1 block text-ink-soft">{CONTACT.brokerage}</span>
        </a>
        <div className="flex shrink-0 items-center gap-6">
          <a
            href="#listings"
            className="eyebrow hidden text-ink-soft transition-colors hover:text-crimson md:inline"
          >
            Listings
          </a>
          <a
            href="#about"
            className="eyebrow hidden text-ink-soft transition-colors hover:text-crimson md:inline"
          >
            About
          </a>
          <a
            href="#contact"
            className="eyebrow rounded-full bg-ink px-4 py-2.5 text-paper transition-colors hover:bg-crimson"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
