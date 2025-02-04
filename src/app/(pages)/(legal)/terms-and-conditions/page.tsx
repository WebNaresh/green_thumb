import type { Metadata } from "next";
import { TermsAndConditionsContent } from "./components/terms-and-conditions-content";

export const metadata: Metadata = {
  title: "Terms and Conditions | Green Thumb Foundation",
  description:
    "Green Thumb Foundation's terms and conditions for using our website and services.",
};

export default function TermsAndConditionsPage() {
  return <TermsAndConditionsContent />;
}
