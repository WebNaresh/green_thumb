"use client";

import { motion } from "framer-motion";
import { HeroSection } from "./hero-section";
import { IntroVideoSection } from "./intro-video-section";
import { PhotoGallery } from "./photo-gallery";
import { TestimonialsSection } from "./testimonials-section";
import { VideoGallery } from "./video-gallery";
import { WorkSection } from "./work-section";

export function ColonelPatilContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <HeroSection />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-24"
      >
        <IntroVideoSection />
        <div className="container mx-auto px-4 space-y-24">
          {/* <BiographySection /> */}
          <WorkSection />
          <VideoGallery />
          <PhotoGallery />
          {/* <AchievementsSection /> */}
          <TestimonialsSection />
        </div>
      </motion.div>
    </div>
  );
}
