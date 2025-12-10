"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white/95 backdrop-blur-xl border-l border-green-100">
                <div className="flex flex-col h-full mt-8">
                  <nav className="flex flex-col space-y-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.path}
                        className={`px-4 py-3 rounded-xl text-lg font-medium transition-all ${pathname === item.path
                          ? "bg-green-50 text-green-700 translate-x-2"
                          : "text-gray-600 hover:bg-gray-50 hover:text-green-600"
                          }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto mb-8 px-4">
                    <Button
                      asChild
                      className="w-full bg-green-600 text-white py-6 text-lg rounded-xl shadow-xl"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="/donate">Donate Now</Link>
                    </Button>
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
