
import React, { useState } from "react";
import imgi880 from "../assets/img/imgi880.jpg";
import imgi881 from "../assets/img/imgi881.jpg";
import imgi882 from "../assets/img/imgi882.jpg";
import imgi83 from "../assets/img/imgi83.jpg";
import imgi84 from "../assets/img/imgi84.jpg";
import imgi85 from "../assets/img/imgi85.jpg";
import imgi86 from "../assets/img/imgi86.jpg";
import imgi87 from "../assets/img/imgi87.jpg";
import imgi88 from "../assets/img/imgi88.jpg";

import vegIcon from "../assets/img/veg.png";
import nonVegIcon from "../assets/img/NV.png";

const comboData = [
  {
    id: 1,
    title: "Classic Garlic Breadsticks + Cheesy Dip [FREE]",
    desc: "Freshly baked breadsticks with a tang of Garlic & seasonings served with cheesy dip on the side.",
    price: 149,
    img: imgi880,
    type: "veg",
  },
  {
    id: 2,
    title: "Cheeselicious Garlic Bread + Cheesy Dip [FREE]",
    desc: "Can't get enough of cheese? A blast of molten cheese stuffed in baked breadsticks topped with garlic & seasoning. Served with Cheesy Dip.",
    price: 169,
    img: imgi881,
    type: "veg",
    bestseller: true,
  },
  {
    id: 3,
    title: "Mexican Stuffed Garlic Bread + Cheesy Dip [FREE]",
    desc: "Freshly baked breadsticks overflowing with cheese, corn & jalapenos. Served with Cheesy Dip. We bet, you can't just have one.",
    price: 179,
    img: imgi882,
    type: "veg",
    chefsSpecial: true,
  },
  {
    id: 4,
    title: "Italian Stuffed Garlic Bread + Cheesy Dip [FREE]",
    desc: "Garlic breadsticks stuffed with mushroom, olives & melting cheese. Served with Cheesy Dip.",
    price: 179,
    img: imgi83,
    type: "veg",
  },
  {
    id: 5,
    title: "Paneer Tikka Stuffed Garlic Bread + Cheesy Dip [FREE]",
    desc: "Paneer tikka, onions & melting cheese stuffed in freshly baked garlic breadsticks. Served with Cheesy Dip.",
    price: 179,
    img: imgi84,
    type: "veg",
    bestseller: true,
  },
  {
    id: 6,
    title: "Paneer Peri Peri Stuffed Garlic Bread + Cheesy Dip [FREE]",
    desc: "Garlic breadsticks stuffed with peri-peri paneer, creamy peri-peri sauce & capsicum. Served with Cheesy Dip.",
    price: 179,
    img: imgi85,
    type: "veg",
  },
  {
    id: 7,
    title: "Mexican Chicken Stuffed Garlic Bread + Cheesy Dip [FREE]",
    desc: "Garlic breadsticks stuffed with herbed chicken, jalapenos & gooey cheese. Served with Cheesy Dip.",
    price: 199,
    img: imgi86,
    type: "nonveg",
  },
  {
    id: 8,
    title: "Chicken Tikka Stuffed Garlic Bread + Cheesy Dip [FREE]",
    desc: "Chicken tikka, molten cheese & onions stuffed in freshly baked garlic breadsticks. Served with Cheesy Dip.",
    price: 199,
    img: imgi87,
    type: "nonveg",
    bestseller: true,
  },
  {
    id: 9,
    title: "Chicken Peri Peri Stuffed Garlic Bread + Cheesy Dip [FREE]",
    desc: "Baked garlic breadsticks spiced with peri-peri chicken, creamy sauce & capsicum. Served with Cheesy Dip.",
    price: 199,
    img: imgi88,
    type: "nonveg",
  },
];

export default function GarlicSection({ filter = "all" }) {
  const [quantities, setQuantities] = useState({});

  const filteredItems = comboData.filter((item) => {
    const type = item.type.toLowerCase();
    if (filter === "all") return true;
    if (filter === "veg") return type === "veg";
    if (filter === "nonveg") return type === "nonveg";
    if (filter === "bestseller") return item.bestseller;
    if (filter === "chefsSpecial") return item.chefsSpecial;
    return true;
  });

  const handleAddClick = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleQuantityChange = (id, delta) => {
    setQuantities((prev) => {
      const newQty = Math.max((prev[id] || 0) + delta, 0);
      const updated = { ...prev };
      if (newQty === 0) delete updated[id];
      else updated[id] = newQty;
      return updated;
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6">
      {/* Header */}
      <div className="mb-6 text-center sm:text-left">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">
          Gourmet Garlic Breadsticks
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-1">
          Irresistible cheesy goodness in every bite!
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {filteredItems.map((combo) => (
          <div
            key={combo.id}
            className="bg-white shadow-md rounded-xl overflow-hidden border hover:shadow-lg transition relative flex flex-col"
          >
            {/* Tag */}
            {combo.bestseller && (
              <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
                Bestseller
              </div>
            )}
            {combo.chefsSpecial && (
              <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
                Chef's Special
              </div>
            )}

            {/* Image */}
            <img
              src={combo.img}
              alt={combo.title}
              className="w-full h-40 sm:h-48 object-cover"
            />

            {/* Details */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-gray-800 font-semibold text-sm sm:text-base mb-1 flex items-center gap-2">
                <img
                  src={combo.type === "veg" ? vegIcon : nonVegIcon}
                  alt={combo.type}
                  className="w-4 h-4 object-contain"
                />
                {combo.title}
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm mb-3 leading-snug line-clamp-3">
                {combo.desc}
              </p>

              {/* Price and Add Button */}
              <div className="mt-auto flex items-center justify-between pt-3 border-t">
                <span className="text-gray-900 font-semibold text-base sm:text-lg">
                  ₹{combo.price}
                </span>

                {quantities[combo.id] ? (
                  <div className="flex items-center gap-3 border rounded-lg px-3 py-1.5">
                    <button
                      onClick={() => handleQuantityChange(combo.id, -1)}
                      className="text-xl font-bold text-gray-700 hover:text-red-500"
                    >
                      −
                    </button>
                    <span className="font-semibold">
                      {quantities[combo.id]}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(combo.id, 1)}
                      className="text-xl font-bold text-gray-700 hover:text-red-500"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className="bg-red-500 text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-lg hover:bg-red-600 text-xs sm:text-sm font-semibold transition"
                    onClick={() => handleAddClick(combo.id)}
                  >
                    + Add
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
