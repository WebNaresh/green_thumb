"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Aditya Patel",
    role: "Local Resident",
    image: "/placeholder.svg?height=100&width=100",
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
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
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
      const intervalId = setInterval(nextTestimonial, 5000);
      return () => clearInterval(intervalId);
    }
  }, [isVisible, isPaused, nextTestimonial]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prevTestimonial();
      } else if (event.key === "ArrowRight") {
        nextTestimonial();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextTestimonial, prevTestimonial]);

  return (
    <section
      className="py-16 px-8 bg-gradient-to-b from-gray-50 to-white"
      id="testimonial-section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Voices of Impact
          </h2>
          <p className="text-lg text-gray-600">
            Hear from those who have witnessed the change firsthand
          </p>
        </motion.div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-8 md:p-12"
            >
              <Quote
                className="text-green-500 w-12 h-12 mb-6"
                aria-hidden="true"
              />
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-6">
                &quot;{testimonials[currentIndex].quote}&quot;
              </blockquote>
              <div className="flex items-center justify-center md:justify-start">
                <Image
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt=""
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div className="text-left">
                  <p className="font-semibold text-gray-800">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-green-600">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Share Your Story
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
