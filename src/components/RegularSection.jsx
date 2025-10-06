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
import imgi32 from "../assets/img/imgi32.jpg";
import vegIcon from "../assets/img/veg.png";
import nonVegIcon from "../assets/img/NV.png";

const comboData = [
  {
    id: 1,
    title: "Double Cheese Margherita [Regular 7'']",
    desc: "Good Ol' Classic | Serves 1.",
    price: 199,
    img: imgi17,
    type: "veg",
  },
  {
    id: 2,
    title: "Farmer's Market [Regular 7'']",
    desc: "Capsicum | Onion | Serves 1.",
    price: 199,
    img: imgi18,
    type: "veg",
  },
  {
    id: 3,
    title: 'Corn Cheese & Jalapenos [Regular 7"]',
    desc: "Spicy Jalapenos | Golden Corn | Mozzarella Cheese | Serves 1.",
    price: 229,
    img: imgi19,
    type: "veg",
  },
  {
    id: 4,
    title: 'Zesty Veggie Delight [Regular 7"]',
    desc: "Spicy Jalapenos | Tomato | Onion | Serves 1.",
    price: 239,
    img: imgi20,
    type: "veg",
    bestseller: true,
  },
  {
    id: 5,
    title: 'Fabulous Three [Regular 7"]',
    desc: "Capsicum | Onion | Red Paprika | Serves 1.",
    price: 239,
    img: imgi21,
    type: "veg",
  },
  {
    id: 6,
    title: 'Olive Garden [Regular 7"]',
    desc: "Black Olive | Golden Corn | Capsicum | Serves 1.",
    price: 249,
    img: imgi22,
    type: "veg",
  },
  {
    id: 7,
    title: "Spicy Mexicano [Regular 7'']",
    desc: "Red Paprika | Spicy Jalapeno | Golden Corn | Onion | Serves 1.",
    price: 269,
    img: imgi23,
    type: "veg",
    bestseller: true,
  },
  {
    id: 8,
    title: 'Magic Mushrooms [Regular 7"]',
    desc: "Mushroom | Capsicum | Tomato | Serves 1.",
    price: 269,
    img: imgi24,
    type: "veg",
  },
  {
    id: 9,
    title: "Paneer Tikka [Regular 7'']",
    desc: "Paneer Tikka | Onion | Serves 1.",
    price: 269,
    img: imgi25,
    type: "veg",
  },
  {
    id: 10,
    title: "Veggie Paradise [Regular 7'']",
    desc: "Black Olive | Red Paprika | Capsicum | Tomato | Onion | Serves 1.",
    price: 229,
    img: imgi26,
    type: "veg",
    bestseller: true,
  },
  {
    id: 11,
    title: 'Italian Fiesta [Regular 7"]',
    desc: "Mushroom | Black Olive | Spicy Jalapeno | Golden Corn | Serves 1.",
    price: 229,
    img: imgi27,
    type: "veg",
  },
  {
    id: 12,
    title: 'Peri Peri Paneer [Regular 7"]',
    desc: "Peri Peri Paneer | Golden Corn | Red Paprika | Capsicum | Serves 1.",
    price: 229,
    img: imgi28,
    type: "veg",
  },
  {
    id: 13,
    title: "Paneer Makhni [Regular 7'']",
    desc: "Paneer Tikka | Capsicum | Tomato | Onion [Comes with Makhni Sauce instead of Pizza Sauce] Serves 1.",
    price: 229,
    img: imgi29,
    type: "veg",
    chefsSpecial: true, // ✅ Correct field name (no apostrophe)
  },
  {
    id: 14,
    title: "All Veggies Madness [Regular 7'']",
    desc: "Mushroom | Black Olive | Spicy Jalapeno | Golden Corn | Capsicum | Onion | Tomato | Serves 1.",
    price: 319,
    img: imgi30,
    type: "veg",
  },
  {
    id: 15,
    title: 'Paneer Overload [Regular 7"]',
    desc: "Peri Peri Paneer | Paneer Tikka | Spicy Jalapeno | Onion | Tomato | Serves 1.",
    price: 319,
    img: imgi31,
    type: "veg",
  },
  {
    id: 16,
    title: 'Crowded House [Regular 7"]',
    desc: "Extra Cheese | Paneer Cubes | Black Olive | Red Paprika | Golden Corn | Capsicum | Onion | Serves 1.",
    price: 319,
    img: imgi32,
    type: "veg",
    bestseller: true,
  },
];

export default function RegularSection() {
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
          Regular 7" Pizzas | Veg
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-1">
          Go SOLO with the new 7-inch Pizzas. 2X veg toppings, hand-rolled, & perfectly baked with a flavorful sauce.
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
