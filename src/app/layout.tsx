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
    default: "Green Thumb Foundation | Khadakwasla Dam Conservation & Water Security",
    template: "%s | Green Thumb Foundation",
  },
  description:
    "Join the movement to restore Pune's water lifeline. Green Thumb Foundation leads Khadakwasla Dam desilting, afforestation, and water conservation projects since 1996 under Col. Suresh Patil's vision.",
  keywords: [
    "Green Thumb Foundation",
    "Khadakwasla Dam Desilting",
    "Water Conservation Pune",
    "Colonel Suresh Patil",
    "Environmental NGO India",
    "Tree Plantation Pune",
    "River Rejuvenation",
    "CSR Opportunities Pune",
  ],
  authors: [{ name: "Green Thumb Foundation", url: "https://www.greenthumbfoundation.org" }],
  creator: "Green Thumb Foundation",
  publisher: "Green Thumb Foundation",
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.greenthumbfoundation.org",
    siteName: "Green Thumb Foundation",
    title: "Restoring Khadakwasla: The Fight for Pune's Water Security",
    description:
      "A citizen-led movement to remove silt, plant trees, and secure water for millions. founded by Col. Suresh Patil. Be a Green Warrior today.",
    images: [
      {
        url: "/og-main.jpg", // Ensure this exists or use a generic valid one
        width: 1200,
        height: 630,
        alt: "Green Thumb Foundation Impact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@GreenThumbFound",
    creator: "@GreenThumbFound",
    title: "Green Thumb Foundation | Water Conservation",
    description:
      "Restoring Khadakwasla Dam and securing Pune's water future. Join us.",
    images: ["/og-main.jpg"],
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
        <Script
          id="json-ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              "name": "Green Thumb Foundation",
              "url": "https://www.greenthumbfoundation.org",
              "logo": "https://www.greenthumbfoundation.org/logo.png",
              "sameAs": [
                "https://www.facebook.com/GreenThumbFoundation",
                "https://twitter.com/GreenThumbFound",
                "https://www.instagram.com/greenthumbfoundation"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9371202875",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": "en"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4, Nehru Marg, Ghorpadi Cantonment",
                "addressLocality": "Pune",
                "postalCode": "411001",
                "addressCountry": "IN"
              }
            }),
          }}
        />
      </body>
    </html >
  );
}
