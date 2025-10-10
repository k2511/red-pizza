import React, { useState } from "react";
import imgi011 from "../assets/img/imgi011.jpg";
import imgi012 from "../assets/img/imgi012.jpg";
import imgi013 from "../assets/img/imgi013.jpg";
import imgi014 from "../assets/img/imgi014.jpg";

// Sample data
const comboData = [
  {
    id: 1,
    title: "Smoked Potato Skewers [10 Pcs]",
    desc: "Baby potatoes marinated in a smoky tikka sauce & grilled to perfection. Get the party started!",
    price: 199,
    img: imgi011,
    type: "veg",
  },
  {
    id: 2,
    title: "Peri Peri Potato Skewers [10 Pcs]",
    desc: "Pieces of baby potatoes marinated in a spicy peri peri sauce & fire-roasted! Peri peri tasty!",
    price: 199,
    img: imgi012,
    type: "veg",
  },
  {
    id: 3,
    title: 'Paneer Smoked Skewers [10 Pcs]',
    desc: "Paneer cubes blended in a finger-licking tikka marinade, skewed and grilled to attain the classic smoky flavour.",
    price: 249,
    img: imgi013,
    type: "veg",
    bestseller: true,
  },
  {
    id: 4,
    title: 'Paneer Peri Peri Skewers [10 Pcs]',
    desc: "Succulent Paneer chunks wrapped in a blazing Peri Peri sauce, grilled to an enticing golden-brown. Not for the faint-hearted!",
    price: 249,
    img: imgi014,
    type: "veg",
  },
];

// Veg Icon Component
const VegIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" stroke="#0f9d58" strokeWidth="2" fill="none" />
    <circle cx="12" cy="12" r="6" fill="#0f9d58" />
  </svg>
);

const NonVegIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" stroke="#d32f2f" strokeWidth="2" fill="none" />
    <circle cx="12" cy="12" r="6" fill="#d32f2f" />
  </svg>
);

export default function VegStarterSection({ filter = "all" }) {
  const [itemQuantities, setItemQuantities] = useState({});

  const filteredItems = comboData.filter((item) => {
    if (filter === "all") return true;
    if (filter === "veg") return item.type.toLowerCase() === "veg";
    if (filter === "nonveg") return item.type.toLowerCase() === "nonveg";
    if (filter === "bestseller") return item.bestseller;
    if (filter === "chefsSpecial") return item.chefsSpecial;
    return true;
  });

  const handleAddClick = (itemId) => {
    setItemQuantities({
      ...itemQuantities,
      [itemId]: 1
    });
  };

  const handleQuantityChange = (itemId, delta) => {
    const currentQty = itemQuantities[itemId] || 0;
    const newQty = Math.max(0, currentQty + delta);
    
    if (newQty === 0) {
      const newQuantities = { ...itemQuantities };
      delete newQuantities[itemId];
      setItemQuantities(newQuantities);
    } else {
      setItemQuantities({
        ...itemQuantities,
        [itemId]: newQty
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-4 sm:py-8">
      {/* Header */}
      <div className="mb-5 text-center sm:text-left">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
          Veg Starters
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-1 leading-snug">
          Perfect plus-ones for your pizza! Delicious starters that will turn any gathering into a party!
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-sm rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition relative"
          >
            {/* Bestseller Tag */}
            {item.bestseller && (
              <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded z-10">
                Bestseller
              </div>
            )}

            {/* Chef's Special Tag */}
            {item.chefsSpecial && (
              <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded z-10">
                Chef's Special
              </div>
            )}

            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-40 sm:h-48 object-cover"
            />

            {/* Details */}
            <div className="p-3 sm:p-4 flex flex-col justify-between min-h-[180px]">
              <h3 className="text-gray-800 font-semibold text-sm sm:text-base mb-1 flex items-center gap-2">
                {item.type.toLowerCase() === "veg" ? <VegIcon /> : <NonVegIcon />}
                {item.title}
              </h3>

              <p className="text-gray-500 text-xs sm:text-sm mb-3 leading-snug">
                {item.desc}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-gray-900 font-semibold text-sm sm:text-base">
                  ₹{item.price}
                </span>
                
                {/* Show Add button or Quantity selector */}
                {itemQuantities[item.id] > 0 ? (
                  <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="px-2 sm:px-3 py-1 text-base sm:text-lg font-semibold text-gray-600 hover:bg-gray-100 transition active:bg-gray-200"
                    >
                      -
                    </button>
                    <span className="px-3 sm:px-4 py-1 text-sm sm:text-base font-semibold text-gray-900 bg-white min-w-[40px] text-center">
                      {itemQuantities[item.id]}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="px-2 sm:px-3 py-1 text-base sm:text-lg font-semibold text-gray-600 hover:bg-gray-100 transition active:bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className="bg-red-500 text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-lg hover:bg-red-600 active:bg-red-700 text-xs sm:text-sm font-semibold transition"
                    onClick={() => handleAddClick(item.id)}
                  >
                    + Add
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary (Optional) */}
      {Object.keys(itemQuantities).length > 0 && (
        <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-2">Items in Cart:</h3>
          <div className="space-y-1">
            {Object.entries(itemQuantities).map(([itemId, quantity]) => {
              const item = comboData.find(i => i.id === parseInt(itemId));
              return (
                <div key={itemId} className="flex justify-between text-sm">
                  <span>{item?.title}</span>
                  <span className="font-semibold">
                    {quantity} x ₹{item?.price} = ₹{quantity * item?.price}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="mt-3 pt-3 border-t border-green-300 flex justify-between font-bold text-base">
            <span>Total:</span>
            <span>
              ₹{Object.entries(itemQuantities).reduce((total, [itemId, quantity]) => {
                const item = comboData.find(i => i.id === parseInt(itemId));
                return total + (quantity * item?.price || 0);
              }, 0)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}