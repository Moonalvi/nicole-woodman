import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { AboutAreas } from "@/components/about-areas";
import { Listings } from "@/components/listings";
import { Proof } from "@/components/proof";
import { Testimonials } from "@/components/testimonials";
import { ContactFooter } from "@/components/contact-footer";

const TITLE = "Nicole Woodman | North Carolina Realtor";
const DESCRIPTION =
  "Nicole Woodman, REALTOR® with Keller Williams Innovate — buying and selling homes across Brunswick, New Hanover, Pender, Onslow, Harnett and Robeson counties.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          name: "Nicole Woodman",
          telephone: "+1-910-258-9676",
          email: "nicoleowenshall@gmail.com",
          worksFor: { "@type": "Organization", name: "Keller Williams Innovate" },
          areaServed: [
            "Brunswick County, NC",
            "New Hanover County, NC",
            "Pender County, NC",
            "Onslow County, NC",
            "Harnett County, NC",
            "Robeson County, NC",
            "North Carolina",
          ],
          sameAs: ["https://www.facebook.com/NicoleOwensHall"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <SiteNav />
      <Hero />
      <AboutAreas />
      <Listings />
      <Proof />
      <Testimonials />
      <ContactFooter />
    </main>
  );
}
