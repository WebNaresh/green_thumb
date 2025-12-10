"use client";
import { Button } from "@/components/ui/button";

import Image from "next/image";

export function WhatsappButton() {
  return (
    <Button
      className="fixed bottom-4 left-4 z-[60] bg-white hover:bg-green-50 text-green-600 font-bold rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-green-100 transition-all hover:-translate-y-1"
      size="lg"
      onClick={() => window.open("https://wa.me/919371202875", "_blank")}
    >
      <Image src="/whatsapp.png" alt="Whatsapp Logo" width={24} height={24} className="mr-2" />
      Chat with us
    </Button>
  );
}
