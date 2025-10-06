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
    title: 'Mexican Stuffed Garlic Bread + Cheesy Dip [FREE]',
    desc: "Freshly baked breadsticks overflowing with cheese, corn & jalapenos. Served with Cheesy Dip. We bet, you can't just have one.",
    price: 179,
    img: imgi882,
    type: "veg",
    chefsSpecial: true,

  },
  {
    id: 4,
    title: 'Italian Stuffed Garlic Bread + Cheesy Dip [FREE]',
    desc: "Garlic breadsticks stuffed with mushroom, olives & melting cheese. Served with Cheesy Dip. There ain't mush-room for anything else here. ;)",
    price: 179,
    img: imgi83,
    type: "veg",

  },
  {
    id: 5,
    title: 'Paneer Tikka Stuffed Garlic Bread + Cheesy Dip [FREE]',
    desc: "A lip-smacking fusion of paneer tikka, onions & melting cheese stuffed in freshly baked garlic breadsticks. Served with Cheesy Dip. Don't resist, tikka-it-away!",
    price: 179,
    img: imgi84,
    type: "veg",
    bestseller: true,
  },
  {
    id: 6,
    title: 'Paneer Peri Peri Stuffed Garlic Bread + Cheesy Dip [FREE]',
    desc: "Garlic breadsticks stuffed with flavoursome peri-peri paneer, creamy peri-peri sauce & capsicum. Served with Cheesy Dip. A spicy side for your pizza party!",
    price: 179,
    img: imgi85,
    type: "veg",
  },
  {
    id: 7,
    title: "Mexican Chicken Stuffed Garlic Bread + Cheesy Dip [FREE]",
    desc: "Garlic breadsticks stuffed with herbed chicken, jalapenos & gooey cheese. Served with Cheesy Dip. Who can say no to this tempting combo?",
    price: 199,
    img: imgi86,
    type: "NonVeg",
    
  },
  {
    id: 8,
    title: 'Chicken Tikka Stuffed Garlic Bread + Cheesy Dip [FREE]',
    desc: "Chicken tikka, molten cheese & onions stuffed in freshly baked garlic breadsticks. Served with Cheesy Dip. You'll love this 'stuff'!",
    price: 199,
    img: imgi87,
    type: "NonVeg",
    bestseller: true,
  },
  {
    id: 9,
    title: "Chicken Peri Peri Stuffed Garlic Bread + Cheesy Dip [FREE]",
    desc: "Perfectly baked garlic breadsticks spiced up with peri-peri chicken, creamy peri-peri sauce & capsicum. Served with Cheesy Dip. It's gonna be love at first bite!",
    price: 199,
    img: imgi88,
    type: "NonVeg",
  },
  
];

export default function GarlicSection() {
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleAddClick = (combo) => {
    setSelectedPizza(combo);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPizza(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-6 text-center sm:text-left">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">
          Gourmet Pastas - By Hola
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-1">
          Pastas that feel like a warm hug for the soul!
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {comboData.map((combo) => (
          <div
            key={combo.id}
            className="bg-white shadow-md rounded-xl overflow-hidden border hover:shadow-lg transition relative"
          >
            {/* Bestseller Tag */}
            {combo.bestseller && (
              <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
                Bestseller
              </div>
            )}

            {/* Chef’s Special Tag */}
            {combo.chefsSpecial && (
              <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
                Chef’s Special
              </div>
            )}

            {/* Image */}
            <img
              src={combo.img}
              alt={combo.title}
              className="w-full h-48 object-cover"
            />

            {/* Details */}
            <div className="p-4 flex flex-col justify-between h-[180px]">
              <h3 className="text-gray-800 font-semibold text-base mb-1 flex items-center gap-2">
                <img
                  src={combo.type === "veg" ? vegIcon : nonVegIcon}
                  alt={combo.type}
                  className="w-4 h-4 object-contain"
                />
                {combo.title}
              </h3>

              <p className="text-gray-500 text-sm mb-3 leading-snug">
                {combo.desc}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-gray-900 font-semibold text-base">
                  ₹{combo.price}
                </span>
                <button
                  className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 text-sm font-semibold transition"
                  onClick={() => handleAddClick(combo)}
                >
                  + Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal (unchanged) */}
      {showModal && selectedPizza && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-11/12 sm:w-3/4 md:w-1/2 max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 font-bold text-xl"
            >
              ×
            </button>

            <h2 className="text-lg font-bold mb-2">
              {selectedPizza.title} – ₹{selectedPizza.price}
            </h2>

            <h3 className="font-semibold mb-3">Select Crust</h3>
            <div className="space-y-2 mb-6">
              {[
                { name: "Pan Tossed", price: 0 },
                { name: "Thin Crust", price: 0 },
                { name: "Cheese Burst", price: 50 },
                { name: "Thin Crust Cheese Burst", price: 50 },
              ].map((crust, i) => (
                <label
                  key={i}
                  className="flex justify-between items-center border-b py-2 cursor-pointer hover:bg-gray-50 rounded"
                >
                  <div>
                    <input type="radio" name="crust" className="mr-2" />
                    {crust.name}
                  </div>
                  <span className="text-gray-600 font-medium">
                    + ₹{crust.price}
                  </span>
                </label>
              ))}
            </div>

            <div className="flex justify-between items-center mt-4 border-t pt-4">
              <span className="text-gray-700 font-medium">Items Added 0/2</span>
              <button className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 font-semibold">
                Next ₹{selectedPizza.price}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
