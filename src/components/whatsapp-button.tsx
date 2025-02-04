"use client";
import { Button } from "@/components/ui/button";
import { PhoneIcon as WhatsappIcon } from "lucide-react";

export function WhatsappButton() {
  return (
    <Button
      className="fixed bottom-4 left-4 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg"
      size="lg"
      onClick={() => window.open("https://wa.me/919371202875", "_blank")}
    >
      <WhatsappIcon className="mr-2 h-5 w-5" />
      Chat with us
    </Button>
  );
}
