import type { Metadata } from "next";
import { ContactContent } from "./components/contact-content";

export const metadata: Metadata = {
  title: "Contact Us | Volunteer, Visit, or Partner",
  description:
    "Reach out to Green Thumb Foundation. Whether you want to volunteer for a plantation drive, schedule a dam visit, or discuss CSR partnerships, we are here.",
  keywords: [
    "Contact Green Thumb Pune",
    "Volunteer for Nature",
    "CSR Partnership Environmental NGO",
    "Visit Khadakwasla Dam",
    "NGO Office Address Pune",
  ],
  openGraph: {
    title: "Connect with the Cause | Green Thumb Foundation",
    description:
      "Get in touch. Call us, email us, or find our headquarters. Let's work together for a water-secure future.",
    url: "https://www.greenthumbfoundation.org/contact",
    images: ["/contact-og.jpg"],
  },
  alternates: {
    canonical: "https://www.greenthumbfoundation.org/contact",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function ContactPage() {
  return <ContactContent />;
}
