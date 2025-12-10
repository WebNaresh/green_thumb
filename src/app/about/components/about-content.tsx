"use client";

import { AchievementsSection } from "./achievements-section";
import { CTASection } from "./cta-section";
import { MissionSection } from "./mission-section";
import { TeamSection } from "./team-section";
import { ImpactSection } from "./impact-section";
import { RecentActivitiesSection } from "./recent-activities-section";
import { TimelineSection } from "./timeline-section";
import { VisionSection } from "./vision-section";
import { motion } from "framer-motion";

export function AboutContent() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat fixed-bg"
          style={{ backgroundImage: "url('/img/hero.png')" }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Restoring Nature, <br />
              <span className="text-green-400">Reviving Lives</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              The story of Green Thumb Foundation &apos;s 25+ year journey in water conservation and ecological restoration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Some sections manage their own containers for full-width backgrounds */}
      <div className="space-y-0">
        <div className="container mx-auto px-4 py-16 space-y-24">
          <MissionSection />
          <VisionSection />
        </div>

        {/* Achievements usually looks good full width or contained. Let's contain it for now in the main flow or give it a bg */}
        <div className="bg-green-50 py-16">
          <div className="container mx-auto px-4">
            <AchievementsSection />
          </div>
        </div>

        <TimelineSection />
        <ImpactSection />

        <div className="container mx-auto px-4 py-16 space-y-24">
          <RecentActivitiesSection />
          <TeamSection />
          <CTASection />
        </div>
      </div>
    </div>
  );
}
