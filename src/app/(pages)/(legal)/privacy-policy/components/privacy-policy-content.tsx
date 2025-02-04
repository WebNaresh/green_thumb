"use client";

import { motion } from "framer-motion";

export function PrivacyPolicyContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h1
          className="text-3xl font-bold text-green-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Privacy Policy
        </motion.h1>

        <motion.div
          className="space-y-6 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>
            Green Thumb Foundation is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, and safeguard your
            personal information.
          </p>

          <h2 className="text-xl font-semibold text-green-700 mt-6">
            Information We Collect
          </h2>
          <p>
            We collect personal information that you voluntarily provide to us,
            such as your name, email address, and donation information when you
            make a contribution or sign up for our newsletter.
          </p>

          <h2 className="text-xl font-semibold text-green-700 mt-6">
            How We Use Your Information
          </h2>
          <p>
            We use your personal information to process donations, send
            newsletters, and communicate about our projects and events. We do
            not sell or share your information with third parties for marketing
            purposes.
          </p>

          <h2 className="text-xl font-semibold text-green-700 mt-6">
            Data Security
          </h2>
          <p>
            We implement appropriate security measures to protect your personal
            information from unauthorized access, alteration, disclosure, or
            destruction.
          </p>

          <h2 className="text-xl font-semibold text-green-700 mt-6">
            Your Rights
          </h2>
          <p>
            You have the right to access, correct, or delete your personal
            information. You may also opt-out of receiving communications from
            us at any time.
          </p>

          <h2 className="text-xl font-semibold text-green-700 mt-6">
            Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>

          <h2 className="text-xl font-semibold text-green-700 mt-6">
            Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at privacy@greenthumbfoundation.org.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
