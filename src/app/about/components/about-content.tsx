"use client";

import { motion } from "framer-motion";
import { AchievementsSection } from "./achievements-section";
import { ApproachSection } from "./approach-section";
import { CTASection } from "./cta-section";
import { MissionSection } from "./mission-section";
import { PhilosophySection } from "./philosophy-section";
import { TeamSection } from "./team-section";
import { VisionSection } from "./vision-section";

export function AboutContent() {
  return (
    <div className="min-h-screen flex justify-center bg-gradient-to-b from-green-50 to-white">
      <div className="container py-12">
        <motion.h1
          className="text-4xl font-bold text-center text-gray-800 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Green Thumb Foundation
        </motion.h1>

        <MissionSection />
        <VisionSection />
        <AchievementsSection />
        <PhilosophySection />
        <ApproachSection />
        <TeamSection />
        <CTASection />
      </div>
    </div>
  );
}
