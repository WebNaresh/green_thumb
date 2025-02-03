"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function VideoSection() {
  return (
    <section className="py-16 bg-gray-50 flex justify-center">
      <div className="container px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Watch Our Mission in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we&apos;re making a difference in the community.
          </p>
        </motion.div>
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Video Column */}
          <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900 shadow-xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/nxHxwyPykXo?si=syw7PmymKBpB9nbE?autoplay=1"
              title="GreenThumb Projects Overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Content Column */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-green-600 font-semibold tracking-wide uppercase">
                Our Impact
              </h2>
              <h3 className="text-3xl font-bold tracking-tight">
                Transforming Environmental Challenges into Community Solutions
              </h3>
            </div>

            <p className="text-gray-600 text-lg">
              At GreenThumb, we are dedicated to creating sustainable
              environmental solutions that benefit both nature and communities.
              Our projects span across water conservation, ecosystem
              restoration, and community engagement.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">Dam Desilting</h4>
                <p className="text-sm text-gray-600">
                  Restoring water capacity through innovative desilting
                  solutions.
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">Community Engagement</h4>
                <p className="text-sm text-gray-600">
                  Fostering community participation in environmental
                  conservation.
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2">Ecosystem Restoration</h4>
                <p className="text-sm text-gray-600">
                  Revitalizing habitats and promoting biodiversity through
                  targeted interventions.
                </p>
              </div>
            </div>

            <Button className="bg-green-600 hover:bg-green-700">
              Learn More About Our Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
