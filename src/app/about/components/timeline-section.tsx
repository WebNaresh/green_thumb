"use client";

import { motion } from "framer-motion";

export function TimelineSection() {
  const timelineEvents = [
    { year: 2012, event: "Initiated Khadakwasla Dam desilting project" },
    {
      year: 2022,
      event: "Reached milestone of 2.5 million truckloads of silt removed",
    },
    {
      year: 2023,
      event:
        "Opposed 28-kilometer water tunnel project, advocating for eco-friendly solutions",
    },
  ];

  return (
    <motion.section
      className="mb-12"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-semibold text-green-700 mb-4">
        Our Journey
      </h2>
      <div className="relative border-l-2 border-green-500 pl-8 ml-4">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            className="mb-8 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-10 top-1"></div>
            <h3 className="text-xl font-semibold text-green-600">
              {event.year}
            </h3>
            <p className="text-gray-700">{event.event}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
