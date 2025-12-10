import { ColonelPatilSection } from "@/components/colonel-patil-section";
import { HeroSection } from "@/components/hero-section";
import { ImpactComparison } from "@/components/impact-comparison";
import { StatsSection } from "@/components/stats-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { TestimonialVideoSection } from "@/components/testimonial-video-section";

import { VideoSection } from "@/components/video-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Home | Green Thumb Foundation - Restoring Pune's Water Lifeline",
  description:
    "We are revitalizing Khadakwasla Dam through desilting and afforestation. Join Colonel Suresh Patil and thousands of Green Warriors to secure water for future generations.",
  keywords: [
    "Pune Water Crisis Solution",
    "Volunteer Opportunities Pune",
    "Donate for Water Conservation",
    "Environmental Restoration Projects",
    "NGO for Water",
  ],
  openGraph: {
    title: "Green Thumb Foundation: Saving Khadakwasla, Saving Pune",
    description:
      "Witness the transformation of Khadakwasla Dam. See how we are turning barren land into green cover and boosting water capacity.",
    images: ["/og-home.jpg"],
    url: "https://www.greenthumbfoundation.org",
  },
  alternates: {
    canonical: "https://www.greenthumbfoundation.org",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <ImpactComparison />
      <StatsSection />
      <ColonelPatilSection />
      {/* <CollaborationSection />
      <TrusteesSection /> */}
      <TestimonialSection />
      <TestimonialVideoSection />
    </>
  );
}
