import React from "react";

const DealCard = ({ image, discount, title }) => {
  return (
    <div className="relative w-[1528px] h-[220px] rounded-xl overflow-hidden shadow-md group">
      {/* Background image OR blank placeholder */}
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      ) : (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
          No Image
        </div>
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

      {/* Discount badge */}
      {discount && (
        <div className="absolute top-3 right-3 bg-black text-white text-sm font-semibold px-3 py-1 rounded-md">
          {discount}
        </div>
      )}

      {/* Restaurant Label */}
      <div className="absolute bottom-6 left-4">
        <p className="text-orange-400 text-sm font-medium">Restaurant</p>
        <h3 className="text-white font-bold text-lg">
          {title || "Restaurant Name"}
        </h3>
      </div>
    </div>
  );
};

export default DealCard;
