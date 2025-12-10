"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight, Play } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Mrs. Vandana Chavan",
    title: "Member of Parliament",
    videoId: "yPlu2FcTxQI",
    description:
      "Discussing the critical impact of Green Thumb's Khadakwasla Dam Rejuvenation Project on the region.",
    thumbnail: "https://img.youtube.com/vi/yPlu2FcTxQI/maxresdefault.jpg" // Using YouTube thumbnail
  },
  {
    name: "Mrs. Parimal Chaudhari",
    title: "Environmental Activist",
    videoId: "2ikivFuw6_4",
    description:
      "Sharing insights on community mobilization and the tangible environmental benefits achieved so far.",
    thumbnail: "https://img.youtube.com/vi/2ikivFuw6_4/sddefault.jpg"
  },
  {
    name: "Mr. Girish Bapat",
    title: "Political Leader",
    videoId: "IqRdTijCjg8",
    description:
      "Highlighting the importance of public-private partnership in solving Pune's water crisis.",
    thumbnail: "https://img.youtube.com/vi/IqRdTijCjg8/sddefault.jpg"
  },
];

export function TestimonialVideoSection() {
  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Public Figures Speak Out</h2>
            <p className="text-lg text-gray-600">
              Leading voices in policy and environment endorse the Khadakwasla mission.
            </p>
          </motion.div>
        </div>

        {/* Video Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.videoId}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col group"
            >
              {/* Video Thumbnail Wrapper */}
              <div className="relative aspect-video bg-gray-900 overflow-hidden">
                {/* 
                    Using an iframe directly can be heavy. 
                    Ideally, we'd use a thumbnail image with a play button that loads the iframe on click.
                    For this implementation, we will stick to the iframe but style it.
                 */}
                <iframe
                  src={`https://www.youtube.com/embed/${testimonial.videoId}`}
                  title={testimonial.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                    {testimonial.name}
                  </h3>
                  <p className="text-green-600 font-medium text-sm uppercase tracking-wide">
                    {testimonial.title}
                  </p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {testimonial.description}
                </p>

                {/* Visual decoration */}
                <div className="pt-4 border-t border-gray-100 flex items-center text-green-700 font-semibold text-sm">
                  <Play className="w-4 h-4 mr-2 fill-current" />
                  Watch Interview
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" className="rounded-full px-8 hover:bg-green-50 text-gray-700 border-gray-300">
            View All Endorsements <ChevronRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

      </div>
    </section>
  );
}
