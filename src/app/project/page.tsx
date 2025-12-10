import type { Metadata } from "next";
import { ProjectContent } from "./components/project-content";
import { ProjectGallery } from "./components/project-gallery";

export const metadata: Metadata = {
  title: "Our Projects | Khadakwasla Dam Rejuvenation & More",
  description:
    "Explore our flagship Desilting Project at Khadakwasla Dam. See how we are increasing water storage capacity, planting green belts, and empowering farmers.",
  keywords: [
    "Khadakwasla Dam Project",
    "Silt Removal Pune",
    "Aggressive Afforestation",
    "River Rejuvenation Projects",
    "Water Body Restoration",
  ],
  openGraph: {
    title: "Impact in Action: Restoring Pune's Water Lifeline",
    description:
      "Detailed insights into our mechanical desilting operations and mass tree plantation drives. See the numbers that matter.",
    url: "https://www.greenthumbfoundation.org/project",
    images: ["/project-og.jpg"],
  },
  alternates: {
    canonical: "https://www.greenthumbfoundation.org/project",
  },
};

import Script from "next/script";

export default function ProjectPage() {
  return (
    <>
      <Script
        id="project-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Project",
            "name": "Khadakwasla Dam Rejuvenation",
            "description": "A massive desilting and afforestation project to restore water storage capacity for Pune City.",
            "organizer": {
              "@type": "NGO",
              "name": "Green Thumb Foundation",
              "url": "https://www.greenthumbfoundation.org"
            },
            "location": {
              "@type": "Place",
              "name": "Khadakwasla Dam",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              }
            },
            "status": "Active"
          }),
        }}
      />
      <ProjectContent />
      <ProjectGallery />
    </>
  );
}
