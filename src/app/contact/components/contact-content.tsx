"use client";

import { ContactForm } from "@/components/contact-form";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone, Globe } from "lucide-react";

export function ContactContent() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      {/* Hero Header */}
      <section className="bg-green-900 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <Globe className="w-96 h-96 -translate-y-1/2 translate-x-1/2" />
        </div>
        <div className="container mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-green-800 text-green-200 text-xs font-bold tracking-widest uppercase mb-4">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif tracking-tight">
              Connect with the <span className="text-green-400">Cause</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              Have questions, want to volunteer, or looking to partner? We are always open to connecting with fellow earth guardians.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 -mt-10 relative z-20">
        <div className="grid lg:grid-cols-12 gap-8">

          {/* Left: Contact Info */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 h-full"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-8">

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Headquarters</h4>
                    <p className="text-gray-600 text-sm leading-relaxed mt-1">
                      Green Thumb Foundation,<br />
                      4 Nehru Marg, Ghorpadi,<br />
                      Cantonment, Pune 411001
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600 text-sm mt-1">+91 9371202875</p>
                    <p className="text-xs text-gray-400 mt-1">Mon-Fri, 9am - 6pm</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a href="mailto:greenthumbfoundation1@gmail.com" className="text-green-600 text-sm mt-1 hover:underline">
                      greenthumbfoundation1@gmail.com
                    </a>
                  </div>
                </div>

              </div>

              <div className="mt-12 p-6 bg-green-50 rounded-xl">
                <h4 className="font-bold text-green-900 mb-2">Visit the Project Site</h4>
                <p className="text-green-800 text-sm">
                  We welcome visitors to Khadakwasla Dam on weekends. Please call ahead to schedule a guided tour of our conservation sites.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
              <ContactForm />
            </motion.div>
          </div>

        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white p-2 rounded-2xl shadow-lg border border-gray-100"
        >
          <div className="w-full h-[400px] rounded-xl overflow-hidden relative bg-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30991.728388852043!2d73.760782!3d18.426988!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc294328c4cd70b%3A0x15cb8277f7f11f1f!2sGreen%20Thumb%2C%20Khadakwasla%20-%20Phase%203%2C%20Pune!5e1!3m2!1sen!2sin!4v1765372755642!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
