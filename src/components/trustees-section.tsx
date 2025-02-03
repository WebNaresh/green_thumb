"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const trustees = [
  {
    name: "Dr. Anjali Deshmukh",
    designation: "Environmental Scientist",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Rajesh Patel",
    designation: "Former Water Resources Minister",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Priya Sharma",
    designation: "CEO, EcoTech Solutions",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Dr. Vikram Mehta",
    designation: "Professor of Environmental Studies",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "#",
    twitter: "#",
  },
];

export function TrusteesSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-white flex justify-center">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Esteemed Trustees
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Green Thumb is honored to have the support and guidance of these
            distinguished individuals who bring a wealth of experience and
            expertise to our mission.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustees.map((trustee, index) => (
            <motion.div
              key={trustee.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={trustee.image || "/placeholder.svg"}
                alt={trustee.name}
                width={500}
                height={500}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {trustee.name}
                </h3>
                <p className="text-green-600 mb-4">{trustee.designation}</p>
                <div className="flex space-x-4">
                  <a
                    href={trustee.linkedin}
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                    aria-label={`${trustee.name}'s LinkedIn`}
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a
                    href={trustee.twitter}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    aria-label={`${trustee.name}'s Twitter`}
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our trustees&apos; diverse backgrounds in environmental science,
            government, business, and academia provide Green Thumb with
            invaluable insights and strategic direction.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
