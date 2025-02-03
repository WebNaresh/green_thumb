"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Leaf, Lightbulb, Users } from "lucide-react";
import { useState } from "react";

const approaches = [
  {
    title: "Sustainable Practices",
    icon: Leaf,
    content:
      "We implement eco-friendly methods in all our projects, ensuring long-term benefits for the environment. Our sustainable practices focus on minimizing environmental impact while maximizing positive outcomes for ecosystems and communities.",
  },
  {
    title: "Community Engagement",
    icon: Users,
    content:
      "We involve local communities in our initiatives, fostering a sense of ownership and environmental stewardship. By empowering communities, we ensure the longevity and success of our environmental projects.",
  },
  {
    title: "Innovation",
    icon: Lightbulb,
    content:
      "We constantly seek innovative solutions to address complex environmental challenges effectively. Our team stays at the forefront of environmental technology and practices to deliver cutting-edge solutions.",
  },
];

export function ApproachSection() {
  const [activeItem, setActiveItem] = useState<string>("");

  return (
    <motion.section
      className="mb-12"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-semibold text-green-700 mb-6">
        Our Approach
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {approaches.map((approach, index) => (
          <div
            key={approach.title}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <approach.icon className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{approach.title}</h3>
              <p className="text-gray-600 mb-4 hidden md:block">
                {approach.content}
              </p>
            </div>
            <Accordion
              type="single"
              collapsible
              className="md:hidden"
              value={activeItem}
              onValueChange={setActiveItem}
            >
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="px-6 py-3 bg-green-50 hover:bg-green-100 transition-colors">
                  Learn More
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4">
                  {approach.content}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
