import React, { useState } from "react";
import imgi17 from "../assets/img/imgi17.jpg";
import imgi18 from "../assets/img/imgi18.jpg";
import imgi19 from "../assets/img/imgi19.jpg";
import imgi20 from "../assets/img/imgi20.jpg";
import imgi21 from "../assets/img/imgi21.jpg";
import imgi22 from "../assets/img/imgi22.jpg";
import imgi23 from "../assets/img/imgi23.jpg";
import imgi24 from "../assets/img/imgi24.jpg";
import imgi25 from "../assets/img/imgi25.jpg";
import imgi26 from "../assets/img/imgi26.jpg";
import imgi27 from "../assets/img/imgi27.jpg";
import imgi28 from "../assets/img/imgi28.jpg";
import imgi29 from "../assets/img/imgi29.jpg";
import imgi30 from "../assets/img/imgi30.jpg";
import imgi31 from "../assets/img/imgi31.jpg";
import vegIcon from "../assets/img/veg.png";
import nonVegIcon from "../assets/img/NV.png";

const comboData = [
  {
    id: 1,
    title: "Double Cheese Margherita CHEESE BURST PIZZA",
    desc: "Cheese Burst Base | Good Ol' Classic",
    price: 249,
    img: imgi17,
    type: "veg",
  },
  {
    id: 2,
    title: "Farmer's Market CHEESE BURST PIZZA",
    desc: "Cheese Burst Base | Capsicum | Onion",
    price: 249,
    img: imgi18,
    type: "veg",
  },
  {
    id: 3,
    title: 'Zesty Veggie Delight CHEESE BURST PIZZA',
    desc: "Cheese Burst Base | Tomato | Onion | Spicy Jalapenos",
    price: 289,
    img: imgi19,
    type: "veg",
    bestseller: true,
  },
  {
    id: 4,
    title: 'Spicy Mexicano CHEESE BURST PIZZA',
    desc: "Cheese Burst Base | Red Paprika | Spicy Jalapeno | Golden Corn | Onion",
    price: 319,
    img: imgi20,
    type: "veg",
  },
  {
    id: 5,
    title: 'Peri Peri Paneer CHEESE BURST PIZZA',
    desc: "Cheese Burst Base | Peri Peri Paneer | Golden Corn | Red Paprika | Capsicum",
    price: 349,
    img: imgi21,
    type: "veg",
    bestseller: true,
  },
  {
    id: 6,
    title: 'Veggie Paradise CHEESE BURST PIZZA',
    desc: "Cheese Burst Base | Black Olive | Red Paprika | Capsicum | Tomato | Onion",
    price: 349,
    img: imgi22,
    type: "veg",
  },
  {
    id: 7,
    title: "Crowded House CHEESE BURST PIZZA",
    desc: "Cheese Burst Base | Extra Cheese | Paneer Cubes | Black Olive | Red Paprika | Golden Corn | Capsicum | Onion",
    price: 369,
    img: imgi23,
    type: "veg",
    bestseller: true,
  },
  {
    id: 8,
    title: 'Chicken Smokey Joe CHEESE BURST PIZZA',
    desc: "Cheese Burst Base | Smokey BBQ Chicken | Onion",
    price: 469,
    img: imgi24,
    type: "NonVeg",
  },
  {
    id: 9,
    title: "Chicken Corn Delight CHEESE BURST PIZZA",
    desc: "Cheese Burst Base | Herb Grilled Chicken | Golden Corn",
    price: 299,
    img: imgi25,
    type: "NonVeg",
  },
  {
    id: 10,
    title: "BBQ Chicken CHEESE BURST PIZZA",
    desc: "Cheese Burst Base | BBQ Chicken | Spicy Jalapeno | Golden Corn | Tomato",
    price: 349,
    img: imgi26,
    type: "NonVeg",

  },
  {
    id: 11,
    title: 'Chicken Mexicano CHEESE BURST PIZZA',
    desc: "Cheese Burst Base | Herb Grilled Chicken | Spicy Jalapeno | Capsicum | Onion",
    price: 349,
    img: imgi27,
    type: "NonVeg",
  },
  {
    id: 12,
    title: 'Fire Me Up Chicken CHEESE BURST PIZZA',
    desc: "Cheese Burst Base | Spicy Peri Peri Chicken | Herb Chicken | Red Paprika | Spicy Jalepeno",
    price: 369,
    img: imgi28,
    type: "NonVeg",
  },
  {
    id: 13,
    title: "Chicken Full Smash CHEESE BURST PIZZA",
    desc: "Cheese Burst Base | Peri Peri Chicken | Chicken Tikka | Roast Chicken | Black Olive | Red Paprika | Capsicum | Onion",
    price: 399,
    img: imgi29,
    type: "NonVeg",
    bestseller: true,
    chefsSpecial: true, // ✅ Correct field name (no apostrophe)
  },
  {
    id: 14,
    title: "The Meat Eater CHEESE BURST PIZZA",
    desc: "Cheese Burst Base | Garlic Roast Chicken | Herb Grilled Chicken | Peri Peri Chicken | Smokey BBQ Chicken",
    price: 399,
    img: imgi30,
    type: "NonVeg",
    chefsSpecial: true, 
  },
];

export default function CheesBrustSection() {
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
