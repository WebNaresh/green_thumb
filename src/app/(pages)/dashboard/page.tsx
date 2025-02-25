"use client";

import { useState } from "react";
import { DashboardContent } from "./components/dashboard-content";

const DashboardPage = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    if (password === "vivek") {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  if (isAuthenticated) {
    return <DashboardContent />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">
          Enter Password to Access Dashboard
        </h1>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Password"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
