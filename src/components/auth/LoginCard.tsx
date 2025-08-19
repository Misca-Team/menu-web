"use client";

import { useState } from "react";

export default function LoginCard() {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`درخواست ورود برای شماره: ${phone}`);
    // TODO: ارسال شماره به API برای OTP
  };

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center">ورود با شماره تلفن</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="tel"
          placeholder="شماره تلفن"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          ورود
        </button>
      </form>
    </div>
  );
}