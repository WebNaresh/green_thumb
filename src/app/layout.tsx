import { DonateButton } from "@/components/donate-button";
import GoogleAnalytics from "@/components/google-analytics";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsappButton } from "@/components/whatsapp-button";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import type React from "react"; // Import React
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.greenthumbfoundation.org"),
  title: {
    default: "Green Thumb Foundation | Khadakwasla Dam Conservation",
    template: "%s | Green Thumb Foundation",
  },
  description:
    "Green Thumb Foundation is dedicated to Khadakwasla Dam restoration and water conservation in Pune. Join our mission for a sustainable water future.",
  keywords: [
    "Green Thumb Foundation",
    "Khadakwasla Dam",
    "water conservation",
    "Pune",
    "environmental conservation",
    "dam desilting",
  ],
  authors: [{ name: "Green Thumb Foundation" }],
  creator: "Green Thumb Foundation",
  publisher: "Green Thumb Foundation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.greenthumbfoundation.org",
    siteName: "Green Thumb Foundation",
    title: "Green Thumb Foundation | Khadakwasla Dam Conservation",
    description:
      "Green Thumb Foundation is dedicated to Khadakwasla Dam restoration and water conservation in Pune. Join our mission for a sustainable water future.",
    images: ["/og-hero.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@GreenThumbFound",
    creator: "@GreenThumbFound",
    title: "Green Thumb Foundation | Khadakwasla Dam Conservation",
    description:
      "Green Thumb Foundation is dedicated to Khadakwasla Dam restoration and water conservation in Pune. Join our mission for a sustainable water future.",
    images: ["/og-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script src="https://checkout.razorpay.com/v1/checkout.js" />
        <GoogleAnalytics GA_MEASUREMENT_ID="G-3WY2LNX9EH" />
        <SiteHeader />
        {children}
        <SiteFooter />
        <WhatsappButton />
        <DonateButton />
      </body>
    </html>
  );
}
