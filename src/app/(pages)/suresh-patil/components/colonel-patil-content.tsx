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
    <div className="min-h-screen bg-white">
      <HeroSection />

      <div className="container mx-auto px-4 py-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-widest text-green-600 uppercase mb-3">The Man Behind the Movement</h2>
          <p className="text-2xl md:text-3xl text-gray-700 font-serif italic leading-relaxed">
            "We must treat nature with the same discipline and dedication as we do in the army. Protecting our water is protecting our nation."
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Content Column */}
          <div className="lg:col-span-8 space-y-24">
            <IntroVideoSection />
            <WorkSection />
            <VideoGallery />
            <PhotoGallery />
          </div>

          {/* Right Sticky Column (Bio or Highlights) */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-32 space-y-8">
              <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
                <h3 className="font-bold text-xl mb-4 text-green-900">Career Highlights</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-sm text-gray-700">
                    <span className="w-2 h-2 mt-2 rounded-full bg-green-500 shrink-0" />
                    <span>Commissioned into the Maratha Light Infantry.</span>
                  </li>
                  <li className="flex gap-3 text-sm text-gray-700">
                    <span className="w-2 h-2 mt-2 rounded-full bg-green-500 shrink-0" />
                    <span>Served in critical operations including 1971 War.</span>
                  </li>
                  <li className="flex gap-3 text-sm text-gray-700">
                    <span className="w-2 h-2 mt-2 rounded-full bg-green-500 shrink-0" />
                    <span>Founded Green Thumb in 1993 post-retirement.</span>
                  </li>
                </ul>
              </div>
              <TestimonialsSection />
            </div>
          </div>

          {/* Mobile View Testimonials fallback */}
          <div className="lg:hidden col-span-12">
            <TestimonialsSection />
          </div>
        </div>
      </div>
    </div>
  );
}
