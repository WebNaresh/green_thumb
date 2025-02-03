import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <div className="grid h-full md:grid-cols-2">
        {/* Left Content Section with Green Background */}
        <div className="relative bg-green-600 p-8 md:p-12">
          <div className="flex h-full flex-col justify-center space-y-6 text-white max-w-xl">
            <div className="space-y-4">
              <h2 className="text-white font-semibold text-lg md:text-xl uppercase tracking-wider">
                Urgent: Pune&apos;s Water Security at Risk
              </h2>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                Khadakwasla Dam: 80% Filled with Silt, Pune&apos;s Water Future
                in Danger
              </h1>
              <p className="text-lg sm:text-xl text-green-50">
                Every day we wait, Pune moves closer to a water crisis. The
                Khadakwasla Dam, our city&apos;s lifeline, is crying for help.
                Desilting isn&apos;t just an option – it&apos;s our
                responsibility to secure Pune&apos;s water future.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-green-600 hover:bg-green-50"
              >
                Learn More
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch Video
              </Button>
            </div>
          </div>

          {/* Decorative Corner Shape */}
          <div className="absolute -right-8 top-1/2 -translate-y-1/2 hidden md:block">
            <div className="w-16 h-16 bg-green-600 rotate-45 transform origin-center"></div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative hidden md:block">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://media.gettyimages.com/id/1493977571/photo/nashik-india-a-man-crosses-the-dry-and-cracked-bed-of-the-koparli-dam-on-may-26-2023-in-peth.jpg?s=612x612&w=0&k=20&c=dw7CmW1o9mzezl_A47SRrm09Vuitxv9SGyGf75at8vs=')`,
            }}
          />
        </div>
      </div>

      {/* Mobile Image (shown below content on small screens) */}
      <div className="md:hidden">
        <Image
          src="/img/impact-visual.jpg"
          alt="Impact visual"
          width={800}
          height={600}
          className="w-full h-48 object-cover"
        />
      </div>
    </section>
  );
}
