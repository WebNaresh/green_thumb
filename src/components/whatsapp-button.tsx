"use client";
import { Button } from "@/components/ui/button";

import Image from "next/image";

export function WhatsappButton() {
  return (
    <Button
      className="fixed bottom-4 left-4 z-50 bg-white  text-green-500 rounded-full shadow-lg"
      size="lg"
      onClick={() => window.open("https://wa.me/919371202875", "_blank")}
    >
      <Image src="/whatsapp.png" alt="Whatsapp Logo" width={24} height={24} />
      Chat with us
    </Button>
  );
}
