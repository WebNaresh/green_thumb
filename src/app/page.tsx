import { CollaborationSection } from "@/components/collaboration-section";
import { ColonelPatilSection } from "@/components/colonel-patil-section";
import { HeroSection } from "@/components/hero-section";
import { ImpactComparison } from "@/components/impact-comparison";
import { StatsSection } from "@/components/stats-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { TrusteesSection } from "@/components/trustees-section";
import { VideoSection } from "@/components/video-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <ImpactComparison />
      <StatsSection />
      <ColonelPatilSection />
      {/* <CollaborationSection /> */}
      <TrusteesSection />
      <TestimonialSection />
    </>
  );
}
