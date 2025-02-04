"use client";

import { motion } from "framer-motion";

export function TermsAndConditionsContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h1
          className="text-3xl font-bold text-green-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Terms and Conditions
        </motion.h1>

        <motion.div
          className="space-y-6 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>
            Welcome to Green Thumb Foundation. By using our website and
            services, you agree to comply with and be bound by the following
            terms and conditions.
          </p>

          <h2 className="text-xl font-semibold text-green-700 mt-6">
            Use of Website
          </h2>
          <p>
            The content of this website is for your general information and use
            only. It is subject to change without notice.
          </p>

          <h2 className="text-xl font-semibold text-green-700 mt-6">
            Donations
          </h2>
          <p>
            All donations made through our website are voluntary and
            non-refundable. We use donations to support our environmental
            conservation projects and operational costs.
          </p>

          <h2 className="text-xl font-semibold text-green-700 mt-6">
            Intellectual Property
          </h2>
          <p>
            The content, logos, and other visual media you see on this website
            belong to Green Thumb Foundation and are protected by copyright
            laws.
          </p>

          <h2 className="text-xl font-semibold text-green-700 mt-6">
            Limitation of Liability
          </h2>
          <p>
            Green Thumb Foundation shall not be liable for any direct, indirect,
            incidental, consequential, or punitive damages arising out of your
            access to, or use of, the website.
          </p>

          <h2 className="text-xl font-semibold text-green-700 mt-6">
            Governing Law
          </h2>
          <p>
            These terms and conditions are governed by and construed in
            accordance with the laws of India. Any disputes relating to these
            terms and conditions will be subject to the exclusive jurisdiction
            of the courts of Pune, Maharashtra.
          </p>

          <h2 className="text-xl font-semibold text-green-700 mt-6">
            Changes to Terms
          </h2>
          <p>
            We reserve the right to modify these terms and conditions at any
            time. We will notify users of any changes by updating the date at
            the bottom of this page.
          </p>

          <p className="mt-6">
            If you have any questions about these Terms and Conditions, please
            contact us at legal@greenthumbfoundation.org.
          </p>

          <p className="mt-6 text-sm">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
