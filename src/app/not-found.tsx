import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4">
      <div className="max-w-3xl w-full text-center">
        <div className="opacity-0 transform translate-y-5 transition-opacity duration-500 ease-out opacity-100 translate-y-0">
          <Image
            src="/logo.png"
            alt="A sad looking tree"
            width={200}
            height={200}
            className="mx-auto mb-8"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-4 opacity-0 transform translate-y-5 transition-opacity duration-500 ease-out opacity-100 translate-y-0 delay-200">
          Oops! Page Not Found
        </h1>
        <p className="text-xl text-gray-600 mb-8 opacity-0 transform translate-y-5 transition-opacity duration-500 ease-out opacity-100 translate-y-0 delay-400">
          It seems we couldn&apos;t find the page you&apos;re looking for.
          Don&apos;t worry, even in nature, sometimes we lose our way!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 opacity-0 transform translate-y-5 transition-opacity duration-500 ease-out opacity-100 translate-y-0 delay-600">
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
