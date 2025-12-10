import { Button } from "@/components/ui/button";
import { HeartIcon } from "lucide-react";
import Link from "next/link";

export function DonateButton() {
  return (
    <Button
      asChild
      className="fixed bottom-4 right-4 z-[60] bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-full shadow-[0_4px_20px_rgba(250,204,21,0.4)] hover:shadow-[0_4px_25px_rgba(250,204,21,0.6)] transition-all hover:-translate-y-1"
      size="lg"
    >
      <Link href="/donate">
        <HeartIcon className="mr-2 h-5 w-5 fill-black/10 animate-pulse" />
        Donate Now
      </Link>
    </Button>
  );
}
