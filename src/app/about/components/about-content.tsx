"use client";

import { motion } from "framer-motion";
import { AchievementsSection } from "./achievements-section";
import { CTASection } from "./cta-section";

import { MissionSection } from "./mission-section";

import { TeamSection } from "./team-section";

import { ImpactSection } from "./impact-section";
import { RecentActivitiesSection } from "./recent-activities-section";
import { TimelineSection } from "./timeline-section";
import { VisionSection } from "./vision-section";

export function AboutContent() {
  return (
    <div className="min-h-screen flex justify-center bg-gradient-to-b from-green-50 to-white">
      <div className="container py-12 px-4 md:px-8">
   

        <MissionSection />
        <VisionSection />
        <AchievementsSection />
        <TimelineSection />
        <ImpactSection />
        <RecentActivitiesSection />
        <TeamSection />
        <CTASection />
      </div>
    </div>
  );
}
