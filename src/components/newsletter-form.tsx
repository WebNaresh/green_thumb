"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
      <Input
        type="email"
        placeholder="Enter your email"
        className="bg-green-800 border-green-700 text-green-100 placeholder-green-400"
      />
      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
        Subscribe
      </Button>
    </form>
  )
}

