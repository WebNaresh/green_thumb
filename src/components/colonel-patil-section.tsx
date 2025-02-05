"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Award, Link, Shield, Users } from "lucide-react";
import Image from "next/image";

export function ColonelPatilSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Image
              src="/img/suresh_patil.png"
              alt="Colonel Suresh Patil"
              width={400}
              height={400}
              className="rounded-lg shadow-xl w-full max-w-md mx-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-800">
              Colonel Suresh Patil
            </h2>
            <h3 className="text-xl text-green-600 font-semibold">
              The Visionary Behind Our Mission
            </h3>
            <p className="text-gray-600">
              Colonel Suresh Patil, a retired army officer, is the driving force
              behind the Khadakwasla dam desilting project. His vision and
              tireless efforts have been instrumental in bringing attention to
              this critical environmental issue.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-green-500" />
                <span className="text-sm text-gray-600">
                  35 Years of Service
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-green-500" />
                <span className="text-sm text-gray-600">
                  Environmental Advocate
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-green-500" />
                <span className="text-sm text-gray-600">Community Leader</span>
              </div>
            </div>
            <p className="text-gray-600">
              Colonel Patil&apos;s dedication to the cause of water conservation
              and his ability to mobilize community support have been pivotal in
              initiating this large-scale environmental project.
            </p>
            <Link href="/suresh-patil">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Learn More About Col. Patil&apos;s Mission
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Podcast Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Colonel Patil&apos;s Environmental Podcast
          </h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-gray-600">
                Listen to Colonel Patil discuss the importance of environmental
                conservation and the Khadakwasla dam desilting project in his
                latest podcast episode. Gain insights into the challenges we
                face and the solutions we&apos;re implementing.
              </p>
              <p className="text-gray-600">
                In this episode, Colonel Patil shares his experiences, the
                project&apos;s progress, and how you can get involved in our
                mission to secure a sustainable future for our water resources.
              </p>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900 shadow-xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/lF6EfkZVols?si=vCJ5jvqDsphz4S8U?autoplay=1"
                title="Colonel Patil's Environmental Podcast"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
