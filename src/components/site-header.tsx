"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Project", path: "/project" },
  { name: "Green Warrior", path: "/green-warrior" },
  { name: "Suresh Patil", path: "/suresh-patil" },
  { name: "Media", path: "/media" },
  { name: "Contact", path: "/contact" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-green-50" : "bg-transparent py-4"
        }`}
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-full shadow-md group-hover:scale-105 transition-transform duration-300 bg-white">
              <Image
                src="/logo.png"
                alt="Green Thumb Foundation logo"
                fill
                className="object-cover p-1"
              />
            </div>
            <span className={`font-bold text-xl tracking-tight transition-colors duration-300 ${isScrolled ? 'text-green-900' : 'text-white shadow-black/20 drop-shadow-md'}`}>
              Green Thumb
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-1">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.path}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${pathname === item.path
                        ? (isScrolled ? "bg-green-100 text-green-700" : "bg-white/20 text-white backdrop-blur-sm")
                        : (isScrolled ? "text-gray-600 hover:bg-green-50 hover:text-green-600" : "text-white/90 hover:bg-white/10 hover:text-white shadow-black/50 drop-shadow-sm")
                        }`}
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-4">
            <Button
              asChild
              className="hidden md:inline-flex bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-full px-6 shadow-lg shadow-green-500/20 hover:shadow-green-500/30 transition-all duration-300"
            >
              <Link href="/donate">Donate Now</Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`lg:hidden ${isScrolled ? "text-gray-700 hover:bg-green-50" : "text-white hover:bg-white/10"}`}
                  aria-label="Toggle menu"
                >
                  {isOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px] z-[100] bg-white border-l border-green-100 p-0 shadow-2xl overflow-y-auto">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

                {/* Menu Header with Logo */}
                <div className="p-6 border-b border-gray-100 flex items-center gap-3 bg-gradient-to-r from-green-50/50 to-transparent">
                  <div className="relative w-10 h-10 overflow-hidden rounded-full shadow-sm bg-white border border-green-100">
                    <Image
                      src="/logo.png"
                      alt="Green Thumb"
                      fill
                      className="object-cover p-1"
                    />
                  </div>
                  <div>
                    <span className="block font-bold text-green-900 text-lg leading-tight">Green Thumb</span>
                    <span className="block text-xs text-green-600 font-medium">Foundation</span>
                  </div>
                </div>

                <div className="flex flex-col h-[calc(100vh-80px)]">
                  <nav className="flex-1 flex flex-col p-6 space-y-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.path}
                        className={`px-4 py-3.5 rounded-xl text-lg font-medium transition-all flex items-center justify-between group ${pathname === item.path
                          ? "bg-green-50 text-green-700 font-bold shadow-sm"
                          : "text-gray-600 hover:bg-gray-50 hover:text-green-700 hover:translate-x-1"
                          }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                        {pathname === item.path && (
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        )}
                      </Link>
                    ))}
                  </nav>

                  {/* Footer Section in Menu */}
                  <div className="mt-auto p-6 space-y-6 bg-gray-50/50 border-t border-gray-100">
                    <Button
                      asChild
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg rounded-xl shadow-lg shadow-green-200 transition-all hover:shadow-green-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="/donate">Donate Now</Link>
                    </Button>

                    <div className="space-y-4 pt-2">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider text-center">Get in Touch</p>
                      <div className="flex justify-center gap-6 text-gray-400">
                        {/* We can add actual social icons or links here later, specifically per user request if needed. For now, just email/phone text or simple icons */}
                        <a href="tel:+919371202875" className="hover:text-green-600 transition-colors flex items-center gap-2 text-sm font-medium">
                          Tap to Call
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
