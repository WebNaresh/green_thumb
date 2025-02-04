import type { Metadata } from "next";
import { ContactContent } from "./components/contact-content";

export const metadata: Metadata = {
  title: "Contact Us | Green Thumb Foundation",
  description:
    "Get in touch with Green Thumb Foundation. We're here to answer your questions and hear your thoughts on environmental conservation.",
};

export default function ContactPage() {
  return <ContactContent />;
}
