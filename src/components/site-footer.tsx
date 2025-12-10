"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { NewsletterForm } from "./newsletter-form";
import Image from "next/image";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const exploreLinks = [
  { href: "/about", label: "Our Story" },
  { href: "/project", label: "Projects" },
  { href: "/suresh-patil", label: "Founder's Vision" },
  { href: "/media", label: "Media Coverage" },
];

const actionLinks = [
  { href: "/donate", label: "Donate Now" },
  { href: "/green-warrior", label: "Become a Volunteer" },
  { href: "/contact", label: "Partner With Us" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/refund-policy", label: "Refund Policy" },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#0f2a1d] text-gray-300 border-t border-green-800 font-sans relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">

          {/* Brand Column (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-green-500/50">
                <Image src="/logo.png" alt="Green Thumb" fill className="object-cover" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">Green Thumb</span>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              We are dedicated to revitalizing water bodies and securing a sustainable future for Pune. Join our movement effectively combating the water crisis since 1996.
            </p>
            <div className="flex gap-4 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Column (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-lg mb-6">Explore</h4>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-green-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-lg mb-6">Get Involved</h4>
            <ul className="space-y-3">
              {actionLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-green-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Contact & News</h4>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                  <span className="text-sm">4 Nehru Marg, Ghorpadi, Cantonment, Pune 411001</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-green-500 shrink-0" />
                  <a href="tel:+919371202875" className="text-sm hover:text-green-400 transition-colors">+91 9371202875</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-green-500 shrink-0" />
                  <a href="mailto:greenthumbfoundation1@gmail.com" className="text-sm hover:text-green-400 transition-colors">greenthumbfoundation1@gmail.com</a>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
              <h5 className="text-white font-semibold mb-2 text-sm">Subscribe to our newsletter</h5>
              <NewsletterForm />
            </div>
          </div>

        </div>
      </div>

      {/* Embedded Map Section */}
      <div className="border-t border-white/5 bg-[#0a1e16]">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-2 mb-4 text-green-400 font-bold text-sm tracking-widest uppercase">
            <MapPin className="w-4 h-4" /> Locate Us
          </div>
          <div className="w-full h-48 md:h-64 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100 border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d61983.45677770409!2d73.760782!3d18.426988!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc294328c4cd70b%3A0x15cb8277f7f11f1f!2sGreen%20Thumb%2C%20Khadakwasla%20-%20Phase%203%2C%20Pune!5e1!3m2!1sen!2sin!4v1765373155010!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#0a1f15]">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Green Thumb Foundation. All rights reserved.</p>
            <p className="flex flex-wrap justify-center items-center gap-1">
              <span className="hidden md:inline-block opacity-30">|</span>
              <span>Designed and Developed by</span>
              <a
                href="https://www.navibyte.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                Navibyte Innovations
              </a>
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-green-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
