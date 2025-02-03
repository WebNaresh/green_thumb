"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronRight, Droplet, Leaf, Users } from "lucide-react";

const impactData = [
  {
    title: "Water Storage Capacity",
    description:
      "Increased dam capacity through systematic desilting operations.",
    icon: Droplet,
  },
  {
    title: "Agricultural Benefits",
    description:
      "Distributed nutrient-rich silt to local farmers, improving soil fertility.",
    icon: Leaf,
  },
  {
    title: "Environmental Conservation",
    description:
      "Enhanced biodiversity through afforestation in catchment areas.",
    icon: Users,
  },
];

export function ProjectContent() {
  return (
    <div className="min-h-screen flex mx-auto justify-center  bg-white">
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                Khadakwasla <span className="text-green-600">Dam</span> <br />
                Rejuvenation
              </h1>
              <p className="text-lg text-gray-600">
                Green Thumb rejuvenates Khadakwasla Dam through desilting,
                afforestation, and water storage enhancement for sustainability.
              </p>
            </div>

            <motion.div
              className="bg-white rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 font-bold">2.5</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">2.5 million</h3>
                  <p className="text-gray-600">
                    truckloads of silt removed and distributed to farmers.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Project Impact</h2>
              <div className="grid gap-4">
                {impactData.map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="bg-green-50 p-4 rounded-lg hover:bg-green-100 transition-colors duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="h-6 w-6 text-green-600" />
                      <h3 className="font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 mt-2">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <Button className="group" variant="outline">
              Learn More About Our Impact
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Main Video */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 shadow-lg">
              <iframe
                src="https://www.youtube-nocookie.com/embed/QBSI04GL-KM?si=x_HdjsM7rz4TnMIO?autoplay=1"
                title="Khadakwasla Dam Rejuvenation Project"
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Thumbnail Video */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100 shadow-lg">
              <iframe
                src="https://www.youtube-nocookie.com/embed/_QdgQxrgpyU?si=oNXj5VQ6rjwj7pcN?autoplay=1"
                title="Additional Khadakwasla Dam Footage"
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
