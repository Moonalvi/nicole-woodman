import { useState } from "react";

import { CONTACT } from "@/lib/contact";

const CHANNELS = [
  { label: "Facebook", href: CONTACT.facebook, note: "197K community" },
  { label: "WhatsApp", href: CONTACT.whatsapp, note: "Fastest reply" },
  { label: "Instagram", href: CONTACT.instagram, note: "Listings & tours" },
];

export function ContactFooter() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", contact: "", message: "" });

  const valid = form.name.trim().length > 1 && form.contact.trim().length > 4;

  return (
    <section id="contact" className="relative overflow-hidden bg-paper-deep">
      <div className="mx-auto max-w-[1300px] px-6 py-28 sm:py-40 lg:px-10">
        <div className="grid gap-16 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-6">
            <p className="eyebrow text-crimson">Let's connect</p>
            <h2 className="display mt-6 text-[clamp(2.4rem,5.6vw,4.8rem)]">
              Tell her what
              <br />
              you're looking for.
            </h2>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-ink-soft">
              Buying, selling, or just testing the water — a short message is enough to
              start.
            </p>

            <div className="mt-12 space-y-1">
              <a
                href={CONTACT.phoneHref}
                className="display block text-2xl transition-colors hover:text-crimson sm:text-3xl"
              >
                {CONTACT.phoneDisplay}
              </a>
              <a
                href={CONTACT.emailHref}
                className="display-thin block break-all text-xl transition-colors hover:text-crimson"
              >
                {CONTACT.email}
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              {CHANNELS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="glass glass-sheen rounded-2xl px-5 py-4 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <span className="eyebrow block">{c.label}</span>
                  <span className="mt-2 block text-sm text-ink-soft">{c.note}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-5 md:col-start-8 md:pt-10">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (valid) setSent(true);
              }}
              className="glass rounded-3xl p-6 sm:p-8"
            >
              {sent ? (
                <div className="py-10 text-center">
                  <p className="display text-2xl">Message noted.</p>
                  <p className="mt-3 text-ink-soft">
                    Nicole will follow up shortly. For anything urgent, call{" "}
                    {CONTACT.phoneDisplay}.
                  </p>
                </div>
              ) : (
                <>
                  <label className="eyebrow block text-ink-soft" htmlFor="cf-name">
                    Your name
                  </label>
                  <input
                    id="cf-name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-3 w-full border-b border-input bg-transparent pb-2 text-lg outline-none focus:border-crimson"
                    autoComplete="name"
                  />

                  <label className="eyebrow mt-8 block text-ink-soft" htmlFor="cf-contact">
                    Phone or email
                  </label>
                  <input
                    id="cf-contact"
                    value={form.contact}
                    onChange={(e) => setForm({ ...form, contact: e.target.value })}
                    className="mt-3 w-full border-b border-input bg-transparent pb-2 text-lg outline-none focus:border-crimson"
                  />

                  <label className="eyebrow mt-8 block text-ink-soft" htmlFor="cf-message">
                    What do you need?
                  </label>
                  <textarea
                    id="cf-message"
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-3 w-full resize-none border-b border-input bg-transparent pb-2 text-lg outline-none focus:border-crimson"
                  />

                  <button
                    type="submit"
                    disabled={!valid}
                    className="eyebrow mt-10 w-full rounded-full bg-ink px-6 py-4 text-paper transition-colors hover:bg-crimson disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Send message
                  </button>
                </>
              )}
            </form>
          </div>
        </div>

        <footer className="mt-24 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6 border-t border-hairline pt-8">
          <div className="min-w-0">
            <p className="display truncate text-lg">Nicole Woodman</p>
            <p className="mt-2 text-sm text-ink-soft">
              REALTOR® · {CONTACT.brokerage} · North Carolina
            </p>
          </div>
          <p className="eyebrow shrink-0 text-ink-soft">
            © {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </section>
  );
}
