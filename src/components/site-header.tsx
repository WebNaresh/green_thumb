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
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header
      className="sticky flex justify-center top-0 z-50   border-b bg-white"
      aria-label="Main navigation"
    >
      <div className="container flex h-16 items-center px-2 md:px-16 justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Green Thumb logo"
            width={40}
            height={40}
          />
          <span className="font-bold flex items-center justify-center">
            Green Thumb Foundation
          </span>
        </Link>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {[
              "Home",
              "About",
              "Project",
              "Green-warrior",
              "Media",
              "Contact",
            ].map((item) => (
              <NavigationMenuItem key={item} className="cursor-pointer">
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} ${
                      pathname ===
                      (item === "Home" ? "/" : `/${item.toLowerCase()}`)
                        ? "text-green-600 font-semibold"
                        : ""
                    } transition-colors duration-200`}
                  >
                    {item}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center space-x-4">
          <Button
            asChild
            className="hidden md:inline-flex bg-green-600 hover:bg-green-700"
          >
            <Link href="/contact">Contact us</Link>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                onClick={() => setIsOpen(true)}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {[
                  "Home",
                  "About",
                  "Project",
                  "Green-warrior",
                  "Media",
                  "Contact",
                ].map((item) => (
                  <Link
                    key={item}
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className={`text-lg font-medium ${
                      pathname ===
                      (item === "Home" ? "/" : `/${item.toLowerCase()}`)
                        ? "text-green-600 font-semibold"
                        : "text-gray-600 hover:text-green-600"
                    } transition-colors duration-200`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
                <Button
                  className="mt-4 bg-green-600 hover:bg-green-700"
                  onClick={() => setIsOpen(false)}
                >
                  Contact us
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
