"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Colonel Patil&apos;s dedication to environmental conservation is truly inspiring. His work has transformed the way we think about water management in Pune.",
    author: "Dr. Anjali Deshmukh",
    title: "Environmental Scientist",
  },
  {
    quote:
      "The impact of Colonel Patil&apos;s initiatives on local communities is immeasurable. He has not only conserved water but also empowered people.",
    author: "Rajesh Patel",
    title: "Local Farmer",
  },
  {
    quote:
      "Colonel Patil&apos;s innovative approach to the Khadakwasla Dam project sets a new standard for environmental conservation efforts across India.",
    author: "Priya Sharma",
    title: "Government Official",
  },
];

export function TestimonialsSection() {
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
    <section className="bg-green-50 py-12 rounded-lg">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-green-800 mb-8 text-center"
      >
        Testimonials
      </motion.h2>
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Quote className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <p className="text-xl text-gray-700 mb-6">
            &quot;{testimonials[currentIndex].quote}&quot;
          </p>
          <p className="font-semibold text-gray-800">
            {testimonials[currentIndex].author}
          </p>
          <p className="text-green-600">{testimonials[currentIndex].title}</p>
        </motion.div>
        <div className="flex justify-center mt-8 space-x-4">
          <Button onClick={prevTestimonial} variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button onClick={nextTestimonial} variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
