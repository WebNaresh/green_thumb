import type { Metadata } from "next";
import { RefundPolicyContent } from "./components/refund-policy-content";

export const metadata: Metadata = {
  title: "Refund Policy | Green Thumb Foundation",
  description:
    "Green Thumb Foundation's refund policy for donations and contributions.",
};

export default function RefundPolicyPage() {
  return <RefundPolicyContent />;
}
