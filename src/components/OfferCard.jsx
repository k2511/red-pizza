import React from "react";

const OfferCard = ({ image, title, discount }) => {
  return (
    <div className="relative w-full max-w-sm rounded-xl overflow-hidden shadow-lg group">
      {/* Background Image */}
      <img src={image} alt={title} className="w-full h-52 object-cover" />

      {/* Discount Badge */}
      <div className="absolute top-3 right-3 bg-black text-white text-sm px-3 py-1 rounded-lg">
        {discount}
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
        <p className="text-sm text-gray-300">Red Pizza East London</p>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>

      {/* Plus Button */}
      <button className="absolute bottom-3 right-3 bg-white text-black rounded-full p-2 shadow-md hover:scale-110 transition">
        +
      </button>
    </div>
  );
};

export default OfferCard;
