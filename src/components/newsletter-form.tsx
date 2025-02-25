"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your API
    console.log("Subscribing email:", email);

    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2" key="newsletter-form">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-green-800 border-green-700 text-green-100 placeholder-green-400"
        required
      />
      <Button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white"
      >
        Subscribe
      </Button>
    </form>
  );
}
