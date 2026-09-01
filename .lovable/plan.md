# Nicole Woodman — Realtor One-Pager

A single premium page: human-centered minimalism, asymmetric Bento composition, selective liquid glass. Off White #F5F2ED (60%), Black #0B0B0B (30%), Crimson #8B0D1A (10%).

## Typography

Primary: **Archivo / Archivo Expanded** — a strong modern grotesk with real width and weight range. Body: **Hind** for calm, readable paragraphs. No serif headings, no italic-word tricks. Hierarchy comes from scale jumps, weight (400 vs 800), expanded tracking on eyebrow labels, tight negative tracking on display lines, and deliberate line breaks.

## Sections (in order)

1. **Hero** — no portrait. A generated modern North Carolina coastal residence image anchors an asymmetric golden-ratio split (roughly 62/38), with the image cropped past the viewport edge. One headline, one supporting sentence, two CTAs (Browse Homes, Let's Connect). A single floating glass panel overlaps the image edge with her service region + brokerage line.
2. **About + Areas Served** — one portrait cropped from the supplied character sheet inside an irregular Bento group: tall portrait block, offset short text block, and a wide low-height county block. Counties listed as typographic lines, not chips: Brunswick, Harnett, Pender, Onslow, New Hanover, Robeson, plus broader North Carolina.
3. **Featured Listings** — 3 listings: one dominant block (large, tall, offset) plus two smaller supporting blocks of unequal size. Each listing opens an image slideshow of exterior + interior shots with arrow/dot controls and a glass caption overlay.
4. **Social Proof** — typography-led. Oversized numerals: 197K Facebook followers, Keller Williams Innovate affiliation, 7 counties served, years licensed (placeholder, flagged for you to confirm). No icon cards.
5. **Testimonials** — three short quotes, quiet type, generous space, no cards or avatars.
6. **Footer / Contact** — substantial closing section: short form (name, phone/email, message), direct calls to +1 910-258-9676 and nicoleowenshall@gmail.com, and Facebook / WhatsApp / Instagram actions. WhatsApp deep-links to the same number; Facebook goes to facebook.com/NicoleOwensHall. Instagram handle needed — I'll leave it pointing at a clearly marked placeholder until you supply it.

## Interaction

Restrained: gentle image scale on hover for listings, glass panels catching a soft highlight on pointer move, one-time fade/rise reveals per section, slideshow crossfades. Bento reflows to a single stacked column on mobile with proportions preserved where possible.

## Technical notes

- Rewrite `src/routes/index.tsx` as the whole page, with section components under `src/components/`.
- Tokens (colors, radii, fonts, glass surface variables) defined in `src/styles.css` `@theme inline`; no hardcoded color utilities.
- Fonts loaded via `<link>` in `src/routes/__root.tsx`; route `head()` gets Nicole-specific title, description, og/twitter tags, plus RealEstateAgent JSON-LD.
- Portrait cropped from the uploaded character sheet; property imagery generated (exterior + interiors per listing) and uploaded as CDN asset pointers.
- Contact form is presentational-only for now (validates and shows a confirmation) — no backend. Say the word if you want submissions stored or emailed and I'll add Cloud.

## Placeholders to confirm later

Years licensed, listing addresses/prices, Instagram URL, testimonial attributions.
