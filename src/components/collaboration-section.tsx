"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Award, Handshake, Star } from "lucide-react";
import Image from "next/image";

export function CollaborationSection() {
  return (
    <section
      className="bg-green-50 py-12 flex justify-center"
      id="collaboration-section"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Powerful Collaboration for Change
          </h2>
          <p className="text-xl text-gray-600">
            Green Thumb joins forces with NAAM Foundation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <Handshake className="h-12 w-12 text-green-600" />
              <h3 className="text-2xl font-semibold text-gray-800">
                A Powerful Alliance
              </h3>
            </div>
            <p className="text-gray-600">
              Green Thumb is proud to collaborate with NAAM Foundation, bringing
              together environmental expertise and star power to make a lasting
              impact on water conservation in Pune.
            </p>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                NAAM Foundation
              </h4>
              <p className="text-gray-600">
                Founded by renowned actors Nana Patekar and Makarand Anaspure,
                NAAM Foundation is dedicated to social causes and rural
                development.
              </p>
            </div>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Learn More About Our Collaboration
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Image
                src="/img/nana_patekar.jpg"
                alt="Nana Patekar"
                width={500}
                height={500}
                className="rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Nana Patekar
              </h4>
              <p className="text-gray-600">Chairman, NAAM Foundation</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Image
                src="/img/makrand_anaspure.jpg"
                alt="Makarand Anaspure"
                width={500}
                height={500}
                className="rounded-full mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Makarand Anaspure
              </h4>
              <p className="text-gray-600">Secretary, NAAM Foundation</p>
            </div>
            <div className="col-span-2 bg-green-100 p-4 rounded-lg">
              <div className="flex items-center space-x-3 mb-2">
                <Star className="h-6 w-6 text-yellow-500" />
                <h5 className="text-lg font-semibold text-gray-800">
                  Star Power for a Cause
                </h5>
              </div>
              <p className="text-gray-700">
                The involvement of these celebrated actors brings significant
                attention and credibility to our mission, helping us reach a
                wider audience and make a bigger impact.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-2 text-green-600 text-lg font-semibold mb-4">
            <Award className="h-6 w-6" />
            <span>Together, we&apos;re making a difference</span>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            This collaboration between Green Thumb and NAAM Foundation
            represents a powerful union of environmental expertise and social
            influence, working towards a sustainable future for Pune and beyond.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
