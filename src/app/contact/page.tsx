"use client";

import { ContactForm } from "@/components/contact-form";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container py-12 px-8">
        <motion.h1
          className="text-4xl font-bold text-center text-gray-800 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800">
              Get in Touch
            </h2>
            <p className="text-gray-600">
              We&apos;d love to hear from you. Whether you have a question about
              our projects, want to volunteer, or just want to say hello,
              don&apos;t hesitate to reach out!
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-gray-600">
                <MapPin className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <span>
                  Green Thumb,
                  <br />4 Nehru Marg,
                  <br />
                  Ghorpadi, Cantonment,
                  <br />
                  Pune 411001
                </span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="h-5 w-5 text-green-600" />
                <span>+91 9371202575</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="h-5 w-5 text-green-600" />
                <span>info@greenthumb.org</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Clock className="h-5 w-5 text-green-600" />
                <span>Mon-Fri: 9am-5pm</span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Our Location
              </h3>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.88711641489322!3d18.559855687384763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sNehru%20Memorial%20Hall!5e0!3m2!1sen!2sin!4v1652345689012!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Send Us a Message
            </h2>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
