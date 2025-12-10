import type { Metadata } from "next";
import { ColonelPatilContent } from "./components/colonel-patil-content";

export const metadata: Metadata = {
  title: "Colonel Suresh Patil | The Soldier Who Wages War on Drought",
  description:
    "Meet the visionary founder of Green Thumb. A retired army officer who traded his gun for a shovel to save Pune from water scarcity. Read his inspiring journey.",
  keywords: [
    "Colonel Suresh Patil",
    "Green Thumb Founder",
    "Water Man of Pune",
    "Khadakwasla Dam Hero",
    "Eco-Warrior Biography",
  ],
  openGraph: {
    title: "Colonel Suresh Patil: Protecting the Nation's Resources",
    description:
      "From the battlefield to the catchment area. Discover how Col. Patil's leadership transformed a dying dam into a thriving ecosystem.",
    url: "https://www.greenthumbfoundation.org/suresh-patil",
    images: ["/colonel-og.png"],
  },
  alternates: {
    canonical: "https://www.greenthumbfoundation.org/suresh-patil",
  },
};

export default function ColonelPatilPage() {
  return <ColonelPatilContent />;
}
