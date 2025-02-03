"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight, Droplet, Leaf, Users } from "lucide-react";

export function VideoSection() {
  const projectItems = [
    {
      icon: Droplet,
      title: "Dam Desilting",
      description:
        "Restoring water capacity through innovative desilting solutions.",
    },
    {
      icon: Users,
      title: "Community Engagement",
      description:
        "Fostering community participation in environmental conservation.",
    },
    {
      icon: Leaf,
      title: "Ecosystem Restoration",
      description:
        "Revitalizing habitats and promoting biodiversity through targeted interventions.",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Watch Our Mission in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we&apos;re making a difference in the community and
            transforming environmental challenges.
          </p>
        </motion.div>
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Video Column */}
          <motion.div
            className="relative aspect-video rounded-xl overflow-hidden bg-gray-900 shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/nxHxwyPykXo?si=syw7PmymKBpB9nbE&autoplay=1"
              title="GreenThumb Projects Overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>

          {/* Content Column */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <h3 className="text-green-600 font-semibold tracking-wide uppercase">
                Our Impact
              </h3>
              <h4 className="text-3xl font-bold tracking-tight text-gray-800">
                Transforming Environmental Challenges into Community Solutions
              </h4>
            </div>

            <p className="text-gray-600 text-lg">
              At GreenThumb, we are dedicated to creating sustainable
              environmental solutions that benefit both nature and communities.
              Our projects span across water conservation, ecosystem
              restoration, and community engagement.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {projectItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <item.icon className="h-8 w-8 text-green-600 mb-2" />
                  <h5 className="font-semibold mb-2">{item.title}</h5>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <Button className="bg-green-600 hover:bg-green-700 text-white group">
              Learn More About Our Projects
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
