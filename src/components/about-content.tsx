"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Droplet, Globe, Leaf } from "lucide-react";

export function AboutContent() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container py-12">
        <motion.h1
          className="text-4xl font-bold text-center text-gray-800 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Green Thumb Foundation
        </motion.h1>

        {/* Mission Statement */}
        <motion.section className="mb-12" {...fadeInUp}>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 bg-white p-6 rounded-lg shadow-lg">
            Green Thumb Foundation is committed to environmental protection
            through sustainable practices like dam rejuvenation, afforestation,
            and community engagement.
          </p>
        </motion.section>

        {/* Vision */}
        <motion.section className="mb-12" {...fadeInUp}>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Our Vision
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 italic">
              &quot;Reviving ecosystems to secure water and agricultural
              sustainability for future generations.&quot;
            </p>
          </div>
        </motion.section>

        {/* Key Achievements */}
        <motion.section className="mb-12" {...fadeInUp}>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Key Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Droplet className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">2.5 Million</h3>
              <p className="text-gray-600">Truckloads of silt removed</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Droplet className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Increased Capacity</h3>
              <p className="text-gray-600">of Khadakwasla Dam</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Leaf className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Afforestation</h3>
              <p className="text-gray-600">
                Enhanced biodiversity in dam catchment areas
              </p>
            </div>
          </div>
        </motion.section>

        {/* Philosophy */}
        <motion.section className="mb-12" {...fadeInUp}>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Our Philosophy
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <Globe className="h-16 w-16 text-green-500 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Act Locally, Think Globally
              </h3>
              <p className="text-gray-700">
                We believe in community-driven solutions for global
                environmental challenges.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Our Approach */}
        <motion.section className="mb-12" {...fadeInUp}>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Our Approach
          </h2>
          <Accordion
            type="single"
            collapsible
            className="bg-white rounded-lg shadow-lg"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Sustainable Practices</AccordionTrigger>
              <AccordionContent>
                We implement eco-friendly methods in all our projects, ensuring
                long-term benefits for the environment.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Community Engagement</AccordionTrigger>
              <AccordionContent>
                We involve local communities in our initiatives, fostering a
                sense of ownership and environmental stewardship.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Innovation</AccordionTrigger>
              <AccordionContent>
                We constantly seek innovative solutions to address complex
                environmental challenges effectively.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.section>

        {/* Team */}
        <motion.section className="mb-12" {...fadeInUp}>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Our Team
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-700 mb-4">
              Our dedicated team of environmental experts, community organizers,
              and passionate volunteers work tirelessly to bring our vision to
              life.
            </p>
            <Button className="bg-green-600 hover:bg-green-700">
              Meet Our Team
            </Button>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section className="text-center" {...fadeInUp}>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Join Our Mission
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Together, we can make a lasting impact on our environment and
            communities.
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
            Get Involved
          </Button>
        </motion.section>
      </div>
    </div>
  );
}
