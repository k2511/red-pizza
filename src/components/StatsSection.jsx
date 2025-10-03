"use client";
import React from "react";

const stats = [
  { number: "546+", label: "Registered Riders" },
  { number: "789,900+", label: "Orders Delivered" },
  { number: "690+", label: "Restaurants Partnered" },
  { number: "17,457+", label: "Food items" },
];

export default function StatsSection() {
  return (
    <div className="bg-red-500 text-white rounded-lg py-8 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/50 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="py-4 px-6">
            <p className="text-3xl font-bold">{stat.number}</p>
            <p className="text-sm font-medium mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
