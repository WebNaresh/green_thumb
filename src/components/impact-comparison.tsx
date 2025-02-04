"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AlertTriangle, Calendar, Clock, Droplets } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const timelineItems = [
  {
    icon: Calendar,
    title: "Working Season",
    period: "January - May",
    description: "Optimal conditions for desilting operations",
    bgColor: "bg-green-50",
    textColor: "text-green-800",
    iconColor: "text-green-600",
  },
  {
    icon: Droplets,
    title: "Monsoon Period",
    period: "June - December",
    description: "Operations not possible due to rains",
    bgColor: "bg-red-50",
    textColor: "text-red-800",
    iconColor: "text-red-600",
  },
  {
    icon: Clock,
    title: "Time Sensitive",
    period: "Act Now",
    description: "Every day counts in our mission",
    bgColor: "bg-blue-50",
    textColor: "text-blue-800",
    iconColor: "text-blue-600",
  },
];

interface TimelineItemProps {
  item: {
    icon: React.ComponentType<{ className: string }>;
    title: string;
    period: string;
    description: string;
    bgColor: string;
    textColor: string;
    iconColor: string;
  };
}

const TimelineItem = ({ item }: TimelineItemProps) => (
  <div className={`flex items-start gap-4 p-4 ${item.bgColor} rounded-lg`}>
    <item.icon className={`h-6 w-6 ${item.iconColor} flex-shrink-0`} />
    <div>
      <h4 className={`font-semibold ${item.textColor}`}>{item.title}</h4>
      <p className={item.iconColor}>{item.period}</p>
      <p className={`text-sm ${item.textColor} mt-1`}>{item.description}</p>
    </div>
  </div>
);

interface ComparisonImageProps {
  src: string;
  alt: string;
  label: string;
}

const ComparisonImage = ({ src, alt, label }: ComparisonImageProps) => (
  <motion.div
    className="relative rounded-2xl overflow-hidden shadow-xl"
    initial={{ opacity: 0, x: label.includes("Truck") ? -50 : 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: label.includes("Truck") ? 0.4 : 0.6 }}
  >
    <div
      className={`absolute top-4 ${
        label.includes("Truck") ? "left-4" : "right-4"
      } bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium`}
    >
      {label}
    </div>
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      width={400}
      height={300}
      className="w-full h-[300px] object-cover"
      onError={(e) => {
        e.currentTarget.src = "/placeholder.svg";
      }}
    />
  </motion.div>
);

export function ImpactComparison() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="py-16 px-8 bg-gradient-to-b from-white to-gray-50"
      id="impact-section"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-8 bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 text-amber-700">
            <AlertTriangle className="h-5 w-5" aria-hidden="true" />
            <h3 className="font-semibold">Limited Time Window for Action</h3>
          </div>
          <p className="mt-2 text-amber-600">
            Desilting can only be performed during the dry season (January to
            May). Monsoon makes operations impossible, making your immediate
            support crucial.
          </p>
        </motion.div>

        <motion.div
          className="mb-12 p-6 bg-white rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-3 gap-6">
            {timelineItems.map((item, index) => (
              <TimelineItem key={index} item={item} />
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <ComparisonImage
            src="/img/truck.png"
            alt="Truck loaded with silt"
            label="1-Truck Loaded with Silt"
          />
          <ComparisonImage
            src="/img/water_tank.png"
            alt="Water tank capacity"
            label="1-Water Tank"
          />
        </div>

        <motion.div
          className="mt-12 text-center max-w-3xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-lg text-gray-700">
            Removing the{" "}
            <span className="text-green-600 font-semibold">
              silt from one truck
            </span>{" "}
            helps
            <span className="text-green-600 font-semibold">
              {" "}
              increase dam water storage
            </span>{" "}
            capacity, allowing for better{" "}
            <span className="text-green-600 font-semibold">
              water retention
            </span>{" "}
            and improving{" "}
            <span className="text-green-600 font-semibold">
              overall water management
            </span>{" "}
            in the area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-transform"
              >
                Donate Now
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50"
              >
                Learn More About Timeline
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
