import { ColonelPatilSection } from "@/components/colonel-patil-section";
import { HeroSection } from "@/components/hero-section";
import { ImpactComparison } from "@/components/impact-comparison";
import { StatsSection } from "@/components/stats-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { TestimonialVideoSection } from "@/components/testimonial-video-section";
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
      {/* <TrusteesSection /> */}
      <TestimonialSection />
      <TestimonialVideoSection />
    </>
  );
}
