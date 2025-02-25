import type { Metadata } from "next";
import { ContactContent } from "./components/contact-content";

export const metadata: Metadata = {
  title: "Contact Green Thumb Foundation | Khadakwasla Dam Conservation",
  description:
    "Get in touch with Green Thumb Foundation. Join our efforts in Khadakwasla Dam restoration and water conservation in Pune. Your support can make a difference.",
  keywords: [
    "contact Green Thumb Foundation",
    "Khadakwasla Dam support",
    "water conservation volunteer",
    "Pune environmental projects",
    "environmental conservation",
    "sustainability initiatives",
    "Green Thumb contact",
  ],
  openGraph: {
    title: "Contact Green Thumb Foundation | Join Our Conservation Efforts",
    description:
      "Reach out to Green Thumb Foundation and be part of our mission to restore Khadakwasla Dam and secure Pune's water future.",
    url: "https://www.greenthumbfoundation.org/contact",
    images: [
      {
        url: "https://www.greenthumbfoundation.org/og-main.png",
        width: 1200,
        height: 630,
        alt: "Contact Green Thumb Foundation",
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function ContactPage() {
  return <ContactContent />;
}
