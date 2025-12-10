import type { Metadata } from "next";
import { DonateContent } from "./components/donate-content";

export const metadata: Metadata = {
  title: "Donate | Invest in Pune's Water Security",
  description:
    "Your contribution directly funds excavator fuel, saplings, and maintenance. Support Green Thumb Foundation's tax-exempt efforts (80G) to desilt Khadakwasla Dam.",
  keywords: [
    "Donate for Water Conservation India",
    "Charity for Environmental Cause",
    "80G Tax Benefit Donation",
    "Support Green Thumb",
    "Sponsor a Tree Pune",
  ],
  openGraph: {
    title: "Make a Difference Today | Support Green Thumb",
    description:
      "100% of your donation goes to the field. Help us remove silt and plant trees. Donate securely via Razorpay or Bank Transfer.",
    url: "https://www.greenthumbfoundation.org/donate",
    images: ["/donate-og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.greenthumbfoundation.org/donate",
  },
};

export default function DonatePage() {
  return <DonateContent />;
}
