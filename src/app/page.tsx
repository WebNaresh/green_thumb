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
    "Green Thumb Foundation | Water Conservation & Khadakwasla Dam Restoration",
  description:
    "Join Green Thumb Foundation in our mission to restore Khadakwasla Dam, Pune's lifeline. Learn about our water conservation efforts, dam desilting projects, and how you can contribute to securing Pune's water future.",
  keywords: [
    "Khadakwasla Dam",
    "water conservation",
    "Pune water security",
    "dam desilting",
    "environmental conservation",
    "Green Thumb Foundation",
  ],
  openGraph: {
    title: "Green Thumb Foundation | Restoring Khadakwasla Dam",
    description:
      "Join our mission to secure Pune's water future through Khadakwasla Dam restoration and water conservation efforts.",
    images: ["/export.png"],
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
