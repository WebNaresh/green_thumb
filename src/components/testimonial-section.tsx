"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, MessageCircle } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Aditya Patel",
    role: "Local Resident",
    image: "/placeholder.svg?height=100&width=100", // Would be better with real placeholders if available
    quote:
      "GreenThumb's desilting project has brought hope back to our community. We can already see the positive impact on our water supply.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Environmental Activist",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The dedication and expertise of the GreenThumb team is commendable. Their work is crucial for the long-term sustainability of our water resources.",
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    role: "Farmer",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "As a farmer, I've seen firsthand how the increased water capacity has benefited our crops. GreenThumb's efforts are truly making a difference.",
  },
];

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("testimonial-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && !isPaused) {
      const intervalId = setInterval(nextTestimonial, 8000); // 8s for readability
      return () => clearInterval(intervalId);
    }
  }, [isVisible, isPaused, nextTestimonial]);

  return (
    <section
      className="py-24 bg-white relative overflow-hidden"
      id="testimonial-section"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60 translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-bold uppercase mb-4">
            <MessageCircle className="w-3 h-3" />
            <span>Community Voices</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hear from Those Who witnessed Change
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from the people whose lives have been touched by the water rejuvenation efforts.
          </p>
        </motion.div>

        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Card */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-16 relative">
            <Quote className="absolute top-8 left-8 text-green-100 w-24 h-24 -z-0 rotate-180" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 flex flex-col md:flex-row gap-10 items-center"
              >
                {/* Image */}
                <div className="shrink-0 relative">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-green-50 shadow-lg relative">
                    <div className="absolute inset-0 bg-gray-200 animate-pulse" /> {/* Placeholder fallback */}
                    <Image
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-green-600 text-white p-2 rounded-full shadow-md">
                    <Quote className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center md:text-left space-y-6">
                  <blockquote className="text-xl md:text-3xl font-medium text-gray-800 leading-relaxed italic font-serif">
                    &quot;{testimonials[currentIndex].quote}&quot;
                  </blockquote>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-green-600 font-medium">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Overlay */}
            <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-20 hidden md:block">
              <Button variant="outline" size="icon" className="rounded-full w-12 h-12 bg-white shadow-lg hover:bg-green-50 border-gray-200" onClick={prevTestimonial}>
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </Button>
            </div>
            <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-20 hidden md:block">
              <Button variant="outline" size="icon" className="rounded-full w-12 h-12 bg-white shadow-lg hover:bg-green-50 border-gray-200" onClick={nextTestimonial}>
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-4 mt-8 md:hidden">
            <Button variant="outline" size="icon" className="rounded-full" onClick={prevTestimonial}>
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full" onClick={nextTestimonial}>
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? "bg-green-600 w-8" : "bg-gray-300 hover:bg-green-400"}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 rounded-full shadow-lg hover:shadow-green-500/20 transition-all">
            Share Your Own Story
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
