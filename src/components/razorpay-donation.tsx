"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// Removed import of useToast
// import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

declare global {
  interface Window {
    Razorpay: {
      new (options: RazorpayOptions): RazorpayInstance;
    };
  }
}

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: RazorpayResponse) => void;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  theme: {
    color: string;
  };
}

interface RazorpayInstance {
  open: () => void;
}

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

export function RazorpayDonation() {
  const [amount, setAmount] = useState("1000");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [is80GRequired, setIs80GRequired] = useState(false);
  // Removed useToast hook
  // const { toast } = useToast();
  const router = useRouter();

  const handleDonationChange = (value: string) => {
    setAmount(value);
  };

  const handleCustomDonation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handlePayment = async () => {
    if (!amount || isNaN(Number(amount))) {
      alert("Invalid amount. Please enter a valid donation amount.");
      return;
    }

    if (is80GRequired && (!name || !email || !mobile || !panNumber)) {
      alert(
        "Missing information. Please fill in all required fields for 80G certificate."
      );
      return;
    }

    const donorInfo = is80GRequired ? { name, email, mobile, panNumber } : {};

    const response = await fetch("/api/create-razorpay-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: Number(amount) * 100, // Razorpay expects amount in paise
        ...donorInfo,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Something went wrong");
      router.push(`/thank-you?paymentId=amount=${amount}&name=${name}`);
      return;
    }

    const options: RazorpayOptions = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "",
      amount: data.amount,
      currency: "INR",
      name: "Green Thumb Foundation",
      description: "Donation",
      order_id: data.id,
      handler: async (response: RazorpayResponse) => {
        const result = await fetch("/api/store-donation", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            paymentId: response.razorpay_payment_id,
            orderId: response.razorpay_order_id,
            amount,
            ...donorInfo,
          }),
        });

        if (result.ok) {
          alert(
            `Thank you for your donation! Payment ID: ${response.razorpay_payment_id}`
          );
          router.push(
            `/thank-you?paymentId=${response.razorpay_payment_id}&amount=${amount}&name=${name}`
          );
        } else {
          alert("Failed to store donation information");
        }
      },
      prefill: {
        name: name,
        email: email,
        contact: mobile,
      },
      theme: {
        color: "#10B981",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div className="space-y-4">
      <RadioGroup
        defaultValue="1000"
        onValueChange={handleDonationChange}
        className="grid grid-cols-3 gap-4 mb-6"
      >
        {["500", "1000", "2000"].map((value) => (
          <div key={value}>
            <RadioGroupItem
              value={value}
              id={`amount-${value}`}
              className="peer sr-only"
            />
            <Label
              htmlFor={`amount-${value}`}
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              ₹{value}
            </Label>
          </div>
        ))}
      </RadioGroup>
      <div className="mb-6">
        <Label htmlFor="custom-amount">Custom Amount (₹)</Label>
        <Input
          id="custom-amount"
          type="number"
          value={amount}
          onChange={handleCustomDonation}
          placeholder="Enter custom amount"
          className="mt-1"
        />
      </div>
      <div className="mb-4">
        <Label htmlFor="80g-required" className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="80g-required"
            checked={is80GRequired}
            onChange={(e) => setIs80GRequired(e.target.checked)}
            className="rounded border-gray-300 text-green-600 shadow-sm focus:border-green-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
          />
          <span>
            I want to avail 80G tax benefit (requires additional information)
          </span>
        </Label>
      </div>
      {is80GRequired && (
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <Label htmlFor="mobile">Mobile Number</Label>
            <Input
              id="mobile"
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter your mobile number"
              required
            />
          </div>
          <div>
            <Label htmlFor="pan">PAN Number</Label>
            <Input
              id="pan"
              type="text"
              value={panNumber}
              onChange={(e) => setPanNumber(e.target.value)}
              placeholder="Enter your PAN number"
              required
            />
          </div>
        </div>
      )}
      <Button
        onClick={handlePayment}
        className="w-full bg-green-600 hover:bg-green-700 text-white"
      >
        Donate ₹{amount} with Razorpay
      </Button>
    </div>
  );
}
