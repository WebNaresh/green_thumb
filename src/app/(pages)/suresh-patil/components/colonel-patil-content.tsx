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
    <div className="min-h-screen bg-stone-50">
      <HeroSection />

      {/* Quote Section */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="bg-white p-12 rounded-2xl shadow-xl border-t-4 border-green-600 max-w-4xl mx-auto text-center relative">
          <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white rounded-full p-4 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-quote"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" /><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" /></svg>
          </span>
          <p className="text-2xl md:text-3xl text-gray-800 font-serif italic leading-relaxed pt-6">
            "We must treat nature with the same discipline and dedication as we do in the army. Protecting our water is protecting our nation."
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="h-1 w-12 bg-green-200 rounded-full"></div>
            <span className="text-xs font-bold tracking-widest text-green-700 uppercase">Colonel Suresh Patil</span>
            <div className="h-1 w-12 bg-green-200 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Split Content Section */}
      <div className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-20">
            <IntroVideoSection />
            <WorkSection />
          </div>

          {/* Right Sticky Column */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="sticky top-28 space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="font-bold text-xl mb-6 text-green-900 flex items-center gap-2">
                  <div className="w-1 h-6 bg-green-500 rounded-full"></div> Career Highlights
                </h3>
                <ul className="space-y-4">
                  {[
                    "Commissioned into the Maratha Light Infantry.",
                    "Served in critical operations including 1971 War.",
                    "Retired as a Colonel after decades of service.",
                    "Founded Green Thumb in 1993 post-retirement.",
                    "Pioneered the concept of 'Green Warriors'."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 text-gray-600 group">
                      <span className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center text-green-600 text-xs font-bold shrink-0 group-hover:bg-green-600 group-hover:text-white transition-colors">{i + 1}</span>
                      <span className="text-sm leading-relaxed pt-0.5 group-hover:text-green-900 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <TestimonialsSection />
            </div>
          </div>
          {/* Mobile Testimonials */}
          <div className="lg:hidden col-span-1">
            <TestimonialsSection />
          </div>
        </div>
      </div>

      {/* Full Width Galleries */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 space-y-24">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Video Gallery</h3>
            <VideoGallery />
          </div>
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">Photo Gallery</h3>
            <PhotoGallery />
          </div>
        </div>
      </section>

    </div>
  );
}
