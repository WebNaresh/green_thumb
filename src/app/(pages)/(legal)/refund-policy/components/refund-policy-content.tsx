"use client";

import { motion } from "framer-motion";

export function RefundPolicyContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h1
          className="text-3xl font-bold text-green-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Refund Policy
        </motion.h1>

        <motion.div
          className="space-y-6 text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>
            Green Thumb Foundation is grateful for your support of our
            environmental conservation efforts. As a non-profit organization, we
            rely on donations to carry out our mission. Please read our refund
            policy carefully.
          </p>

          <h2 className="text-xl font-semibold text-green-700 mt-6">
            Donations
          </h2>
          <p>
            Donations made to Green Thumb Foundation are generally
            non-refundable. As a non-profit organization, we use these funds to
            support our ongoing projects and operational costs.
          </p>

          <h2 className="text-xl font-semibold text-green-700 mt-6">
            Exceptions
          </h2>
          <p>
            In exceptional circumstances, such as technical errors resulting in
            duplicate charges or incorrect amounts, we may consider refund
            requests. These will be evaluated on a case-by-case basis.
          </p>

          <h2 className="text-xl font-semibold text-green-700 mt-6">
            Refund Process
          </h2>
          <p>
            If you believe an error has occurred with your donation, please
            contact us within 15 days of the transaction date. Provide your
            name, donation amount, date of contribution, and the reason for
            requesting a refund.
          </p>

          <h2 className="text-xl font-semibold text-green-700 mt-6">
            Processing Time
          </h2>
          <p>
            If a refund is approved, it will be processed within 7-10 business
            days. The refund will be issued using the original method of
            payment.
          </p>

          <h2 className="text-xl font-semibold text-green-700 mt-6">
            Cancellation of Recurring Donations
          </h2>
          <p>
            For recurring donations, you may cancel future scheduled donations
            at any time by contacting us. Cancellations will be effective for
            the next scheduled donation.
          </p>

          <h2 className="text-xl font-semibold text-green-700 mt-6">
            Contact Us
          </h2>
          <p>
            If you have any questions about our refund policy or need to request
            a refund, please contact us at donations@greenthumbfoundation.org or
            call us at +91 9371202575.
          </p>

          <p className="mt-6 text-sm">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
