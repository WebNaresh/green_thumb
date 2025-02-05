"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { NewsletterForm } from "./newsletter-form";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/project", label: "Our Projects" },
  { href: "/contact", label: "Get Involved" },
  { href: "/donate", label: "Donate" },
  { href: "/green-warrior", label: "Green Warrior" },
  { href: "/contact", label: "Contact Us" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/refund-policy", label: "Refund Policy" },
];

export function SiteFooter() {
  return (
    <>
      <footer className="bg-green-900 text-green-100 flex justify-center">
        <div className="container py-12 px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-2xl font-bold mb-4">GreenThumb</h3>
              <p className="mb-4">
                Committed to environmental conservation and sustainable water
                management for a greener future.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="hover:text-white transition-colors"
                    aria-label={link.label}
                  >
                    <link.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>
                    Green Thumb, 4 Nehru Marg, Ghorpadi, Cantonment, Pune 411001
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  <a
                    href="tel:+919371202575"
                    className="hover:text-white transition-colors"
                  >
                    +91 9371202875
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <a
                    href="mailto:info@greenthumb.org"
                    className="hover:text-white transition-colors"
                  >
                    greenthumbfoundation1@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Stay Updated</h4>
              <p className="mb-4">
                Subscribe to our newsletter for the latest updates and news.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-800"></div>
      </footer>
      <div className="flex justify-center">
        <div className="container py-6 flex flex-col sm:flex-row justify-between items-center">
          <p>&copy; 2023 GreenThumb. All rights reserved.</p>
          <div className="mt-4 sm:mt-0 space-x-4">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
