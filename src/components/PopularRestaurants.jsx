


"use client";
import React from "react";
import { NavLink } from "react-router-dom";

// Example images
import res1 from "../assets/img/res1.jpg";
import res2 from "../assets/img/res2.jpg";
import res3 from "../assets/img/res3.jpg";
import res4 from "../assets/img/res4.jpg";
import res5 from "../assets/img/res5.jpg";
import res6 from "../assets/img/res6.jpg";
import res7 from "../assets/img/res7.jpg";
import res8 from "../assets/img/res8.jpg";
import res9 from "../assets/img/res9.jpg";
import res10 from "../assets/img/res10.jpg";
import res11 from "../assets/img/res11.jpg";
import res12 from "../assets/img/res12.jpg";

const restaurants = [
  res12, res11, res10, res7, res9, res8, res6, res5, res4, res3, res2, res1,
];

export default function PopularRestaurants() {
  return (
    <div className="px-4 sm:px-6 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
        Our Pizza
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
        {restaurants.map((image, i) => (
          <NavLink
            key={i}
            to="/pages/browsermenu"
            className="rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-gray-100 cursor-pointer"
          >
            <img
              src={image}
              alt={`Restaurant ${i + 1}`}
              className="w-full h-32 sm:h-40 md:h-48 object-cover"
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
}
