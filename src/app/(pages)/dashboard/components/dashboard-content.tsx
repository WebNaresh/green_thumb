"use client";

import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Donor {
  _id: string;
  name: string;
  email: string;
  amount: number;
  timestamp: string;
}

export function DashboardContent() {
  const [donorData, setDonorData] = useState<Donor[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/donors");
        if (!response.ok) {
          throw new Error("Failed to fetch donor data");
        }
        const data = await response.json();
        setDonorData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching donor data:", error);
      }
    }
    fetchData();
  }, []);

  const filteredDonors = donorData.filter((donor) =>
    donor.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-10">
      <motion.h1
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Donor Dashboard
      </motion.h1>

      <div className="mb-4">
        <Input
          type="text"
          placeholder="Search donors..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <Table>
        <TableCaption>A list of recent donors</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredDonors.map((donor) => (
            <TableRow key={donor._id}>
              <TableCell className="font-medium">{donor.name}</TableCell>
              <TableCell>{donor.email}</TableCell>
              <TableCell>₹{donor.amount}</TableCell>
              <TableCell>
                {new Date(donor.timestamp).toLocaleDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
