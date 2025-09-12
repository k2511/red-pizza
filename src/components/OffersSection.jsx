import React from "react";
import OfferCard from "./OfferCard";

import offer1 from "../assets/img/offer1.png";
import offer2 from "../assets/img/offer2.png";
import offer3 from "../assets/img/offer3.png";

const categories = [
  "Offers",
  "Burgers",
  "Fries",
  "Snacks",
  "Salads",
  "Cold drinks",
  "Happy Meal®",
  "Desserts",
  "Hot drinks",
  "Sauces",
  "Orbit®",
];

const offers = [
  { image: offer1, title: "First Order Discount", discount: "-20%" },
  { image: offer2, title: "Vegan Discount", discount: "-20%" },
  { image: offer3, title: "Free Ice Cream Offer", discount: "-100%" },
];

const OffersSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-6">
        All Offers from Red Pizza East London
      </h2>

      {/* Categories */}
      <div className="flex gap-4 overflow-x-auto pb-3 mb-6">
        {categories.map((cat, i) => (
          <button
            key={i}
            className={`px-5 py-2 rounded-full border ${
              i === 0
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Offer Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {offers.map((offer, i) => (
          <OfferCard key={i} {...offer} />
        ))}
      </div>
    </div>
  );
};

export default OffersSection;
