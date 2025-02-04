import type { Metadata } from "next";
import { PrivacyPolicyContent } from "./components/privacy-policy-content";

export const metadata: Metadata = {
  title: "Privacy Policy | Green Thumb Foundation",
  description:
    "Green Thumb Foundation's privacy policy outlines how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
