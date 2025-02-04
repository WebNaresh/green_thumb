import { Button } from "@/components/ui/button";
import { HeartIcon } from "lucide-react";
import Link from "next/link";

export function DonateButton() {
  return (
    <Button
      asChild
      className="fixed bottom-4 right-4 z-50 bg-yellow-500 hover:bg-yellow-600 text-black rounded-full shadow-lg"
      size="lg"
    >
      <Link href="/donate">
        <HeartIcon className="mr-2 h-5 w-5" />
        Donate Now
      </Link>
    </Button>
  );
}
