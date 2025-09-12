import React from "react";
import { FaMotorcycle, FaRegFileAlt } from "react-icons/fa";
import burger1 from "../assets/img/burger1.png";
import rating1 from "../assets/img/rating1.png"; // ⭐ your rating stars image

const RestaurantCard = ({
  tagline = "I’m lovin’ it!",
  name = "Red Pizza East London",
  minOrder = "12 ₹",
  delivery = "20–25 Minutes",
  status = "Open until 3:00 AM",
  image = burger1,
  ratingImage = rating1, // 👈 only stars image
}) => {
  return (
    <div className="max-w-7xl mx-auto h-80 bg-white rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        {/* Heading */}
        <div className=" mt-12">
          <p className="text-gray-500 text-sm mb-0">{tagline}</p>
          <h2 className="text-4xl font-bold text-gray-900">{name}</h2>
        </div>

        {/* Order Info */}
        <div className="flex gap-4 mt-2">
          <div className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm">
            <FaRegFileAlt /> Minimum Order: {minOrder}
          </div>
          <div className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full text-sm">
            <FaMotorcycle /> Delivery in {delivery}
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-6">
          <button className="bg-orange-500 text-white text-sm px-4 py-2 rounded-lg">
            {status}
          </button>
        </div>
      </div>

      {/* Right Section - Image + Rating */}
      <div className="relative flex-1 flex items-center justify-center">
        <img
          src={image}
          alt="Food"
          className="w-96 h-auto rounded-lg object-cover"
        />

        {/* Rating */}
        <div className="absolute bottom-4 left-14 bg-white shadow-md px-4 py-2 rounded-xl">
          {ratingImage && (
            <img
              src={ratingImage}
              alt="Rating Stars"
              className="h-16 object-contain"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
