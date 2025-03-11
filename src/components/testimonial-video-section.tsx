"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Mrs. Vandana Chavan",
    title: "Member of Parliament",
    videoId: "yPlu2FcTxQI", // Replace with actual YouTube video ID
    description:
      "Mrs. Vandana Chavan (MP) on Green Thumb's Khadakwasla Dam Rejuvenation Project",
  },
  {
    name: "Mrs. Parimal Chaudhari",
    title: "Environmental Activist",
    videoId: "2ikivFuw6_4", // Replace with actual YouTube video ID
    description:
      "Mrs. Parimal Chaudhari on Green Thumb's Khadakwasla Dam Rejuvenation Project",
  },
  {
    name: "Mr. Girish Bapat",
    title: "Political Leader",
    videoId: "IqRdTijCjg8", // Replace with actual YouTube video ID
    description:
      "Mr. Girish Bapat on Green Thumb's Khadakwasla Dam Rejuvenation",
  },
];

export function TestimonialVideoSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center text-green-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Testimonials from Public Figures
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.videoId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${index !== currentIndex ? "hidden lg:block" : ""}`}
            >
              <div className="aspect-w-16 aspect-h-9 mb-6">
                <iframe
                  src={`https://www.youtube.com/embed/${testimonial.videoId}`}
                  title={testimonial.description}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg shadow-lg"
                ></iframe>
              </div>
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold text-green-700 mb-2 mt-4">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600 mb-3">{testimonial.title}</p>
                <p className="text-gray-700">{testimonial.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12 space-x-4 lg:hidden">
          <Button
            variant="outline"
            size="lg"
            onClick={prevTestimonial}
            className="rounded-full"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 mr-2" />
            Previous
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={nextTestimonial}
            className="rounded-full"
            aria-label="Next testimonial"
          >
            Next
            <ChevronRight className="h-6 w-6 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
