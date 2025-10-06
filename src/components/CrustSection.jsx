import React, { useState } from "react";
import imgi60 from "../assets/img/imgi60.jpg";
import imgi61 from "../assets/img/imgi61.jpg";
import imgi62 from "../assets/img/imgi62.jpg";
import imgi63 from "../assets/img/imgi63.jpg";
import imgi64 from "../assets/img/imgi64.jpg";
import imgi65 from "../assets/img/imgi65.jpg";
import imgi66 from "../assets/img/imgi66.jpg";
import imgi67 from "../assets/img/imgi67.jpg";
import imgi68 from "../assets/img/imgi68.jpg";
import imgi69 from "../assets/img/imgi69.jpg";
import imgi70 from "../assets/img/imgi70.jpg";
import imgi71 from "../assets/img/imgi71.jpg";
import imgi72 from "../assets/img/imgi72.jpg";
import imgi73 from "../assets/img/imgi73.jpg";

import vegIcon from "../assets/img/veg.png";
import nonVegIcon from "../assets/img/NV.png";

const comboData = [
  {
    id: 1,
    title: "Double Cheese Margherita THIN CRUST PIZZA",
    desc: "Thin Crust Base | Good Ol' Classic",
    price: 199,
    img: imgi60,
    type: "veg",
  },
  {
    id: 2,
    title: "Farmer's Market THIN CRUST PIZZA",
    desc: "Thin Crust Base | Capsicum | Onion",
    price: 199,
    img: imgi61,
    type: "veg",
  },
  {
    id: 3,
    title: 'Fabulous Three THIN CRUST PIZZA',
    desc: "Thin Crust Base | Capsicum | Onion | Red Paprika",
    price: 239,
    img: imgi62,
    type: "veg",

  },
  {
    id: 4,
    title: 'Paneer Tikka THIN CRUST PIZZA',
    desc: "Thin Crust Base | Paneer Tikka | Onion",
    price: 269,
    img: imgi63,
    type: "veg",
  },
  {
    id: 5,
    title: 'Veggie Paradise THIN CRUST PIZZA',
    desc: "Thin Crust Base | Black Olive | Red Paprika | Capsicum | Tomato | Onion",
    price: 299,
    img: imgi64,
    type: "veg",
    bestseller: true,
  },
  {
    id: 6,
    title: 'Peri Peri Paneer THIN CRUST PIZZA',
    desc: "Thin Crust Base | Peri Peri Paneer | Golden Corn | Red Paprika | Capsicum",
    price: 299,
    img: imgi65,
    type: "veg",
  },
  {
    id: 7,
    title: "All Veggies Madness THIN CRUST PIZZA",
    desc: "Thin Crust Base | Mushroom | Black Olive | Spicy Jalapeno | Golden Corn | Capsicum | Onion | Tomato",
    price: 319,
    img: imgi66,
    type: "veg",
    bestseller: true,
  },
  {
    id: 8,
    title: 'Chicken Corn Delight THIN CRUST PIZZA',
    desc: "Thin Crust Base | Herb Grilled Chicken | Golden Corn",
    price: 249,
    img: imgi67,
    type: "NonVeg",
  },
  {
    id: 9,
    title: "Chicken Smokey Joe THIN CRUST PIZZA",
    desc: "Thin Crust Base | Smokey BBQ Chicken | Onion",
    price: 249,
    img: imgi68,
    type: "NonVeg",
  },
  {
    id: 10,
    title: "Peri Peri Chicken THIN CRUST PIZZA",
    desc: "Thin Crust Base | Peri Peri Chicken | Red Paprika | Golden Corn | Capsicum",
    price: 299,
    img: imgi69,
    type: "NonVeg",

  },
  {
    id: 11,
    title: 'Chicken Tikka THIN CRUST PIZZA',
    desc: "Thin Crust Base | Thin Crust Base | Chicken Tikka | Tomato | Onion",
    price: 299,
    img: imgi70,
    type: "NonVeg",
  },
  {
    id: 12,
    title: 'Double Trouble Chicken THIN CRUST PIZZA',
    desc: "Thin Crust Base | Herb Grilled Chicken | Chicken Tikka | Black Olive | Capsicum",
    price: 319,
    img: imgi71,
    type: "NonVeg",
  },
  {
    id: 13,
    title: "Mojo's Chicken Special THIN CRUST PIZZA",
    desc: "Thin Crust Base | BBQ Chicken | Chicken Tikka | Herb Grilled Chicken | Mushroom | Spicy Jalapeno | Golden Corn | Tomato",
    price: 349,
    img: imgi72,
    type: "NonVeg",
    chefsSpecial: true, // ✅ Correct field name (no apostrophe)
  },
  {
    id: 14,
    title: "Classic Pepperoni THIN CRUST PIZZA",
    desc: "Thin Crust Base | Loaded with 100% Pork Pepperoni | Extra Cheese",
    price: 319,
    img: imgi73,
    type: "NonVeg",
    chefsSpecial: true, 
  },
];

export default function CrustSection() {
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
          CHEESE BURST Pizzas
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-1">
          Crust that's perfectly baked & oozing with gooey, molten cheese. Pizzas that could be your new fave!
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
