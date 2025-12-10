import type { Metadata } from "next";
import { ColonelPatilContent } from "./components/colonel-patil-content";

export const metadata: Metadata = {
  title: "Colonel Suresh Patil | The Soldier Who Wages War on Drought",
  description:
    "Meet the visionary founder of Green Thumb. A retired army officer who traded his gun for a shovel to save Pune from water scarcity. Read his inspiring journey.",
  keywords: [
    "Colonel Suresh Patil",
    "Green Thumb Founder",
    "Water Man of Pune",
    "Khadakwasla Dam Hero",
    "Eco-Warrior Biography",
  ],
  openGraph: {
    title: "Colonel Suresh Patil: Protecting the Nation's Resources",
    description:
      "From the battlefield to the catchment area. Discover how Col. Patil's leadership transformed a dying dam into a thriving ecosystem.",
    url: "https://www.greenthumbfoundation.org/suresh-patil",
    images: ["/colonel-og.png"],
  },
  alternates: {
    canonical: "https://www.greenthumbfoundation.org/suresh-patil",
  },
};

import Script from "next/script";

export default function ColonelPatilPage() {
  return (
    <>
      <Script
        id="colonel-patil-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Colonel Suresh Patil",
            "jobTitle": "Founder",
            "affiliation": {
              "@type": "Organization",
              "name": "Green Thumb Foundation"
            },
            "url": "https://www.greenthumbfoundation.org/suresh-patil",
            "image": "https://www.greenthumbfoundation.org/colonel-og.png",
            "description": "Retired army officer and environmentalist known for the Khadakwasla Dam desilting project.",
            "nationality": "Indian",
            "honorificPrefix": "Colonel"
          }),
        }}
      />
      <ColonelPatilContent />
    </>
  );
}
