import React, { useState } from "react";
import imgi90 from "../assets/img/imgi90.jpg";
import imgi91 from "../assets/img/imgi91.jpg";
import imgi92 from "../assets/img/imgi92.jpg";
import imgi93 from "../assets/img/imgi93.jpg";
import imgi94 from "../assets/img/imgi94.jpg";
import imgi75 from "../assets/img/imgi75.jpg";
import imgi76 from "../assets/img/imgi76.jpg";
import imgi77 from "../assets/img/imgi77.jpg";
import imgi78 from "../assets/img/imgi78.jpg";
import imgi79 from "../assets/img/imgi79.jpg";
import imgi80 from "../assets/img/imgi80.jpg";
import imgi81 from "../assets/img/imgi81.jpg";

import vegIcon from "../assets/img/veg.png";
import nonVegIcon from "../assets/img/NV.png";

const comboData = [
  { id: 1, title: "Classic Alfredo Pasta [White Sauce]", desc: "[Comes with 2 Garlic Breads, Serves 1] Creamy White Sauce | No Added Veggies | Penne Pasta", price: 249, img: imgi90, type: "veg" },
  { id: 2, title: "Creamy Pesto Pasta", desc: "[Comes with 2 Garlic Breads, Serves 1] Creamy Pesto Sauce | No Added Veggies | Penne Pasta", price: 249, img: imgi91, type: "veg" },
  { id: 3, title: 'Colored Bell Peppers Pesto Pasta', desc: "[Comes with 2 Garlic Breads, Serves 1] Red & Yellow Bell-Peppers | Creamy Pesto Sauce | Penne Pasta", price: 249, img: imgi92, type: "veg", bestseller: true },
  { id: 4, title: 'Olive & Mushroom Alfredo Pasta [White Sauce]', desc: "[Comes with 2 Garlic Breads, Serves 1] Olives | Mushrooms | Creamy White Sauce | Penne Pasta", price: 299, img: imgi93, type: "veg", bestseller: true },
  { id: 5, title: 'Cheese Chicken Pesto Pasta', desc: "[Comes with 2 Garlic Breads, Serves 1] Herb Garlic Grilled Chicken | Creamy White Sauce | Penne Pasta", price: 299, img: imgi94, type: "NonVeg", bestseller: true },
  { id: 6, title: 'Cheese Chicken Pesto Pasta', desc: "[Comes with 2 Garlic Breads, Serves 1] Herb Garlic Grilled Chicken | Creamy Pesto Sauce | Penne Pasta", price: 299, img: imgi75, type: "NonVeg" },
  { id: 7, title: "Signature Mixed Pink Pasta [Mixed Sauce]", desc: "[Comes with 2 Garlic Breads, Serves 1] Mixed Pink Sauce | No Added Veggies | Penne Pasta", price: 249, img: imgi76, type: "veg", bestseller: true },
  { id: 8, title: 'Original Arrabiata Pasta [Red Sauce]', desc: "[Comes with 2 Garlic Breads, Serves 1] Tomato Basil Red Sauce | No Added Veggies | Penne Pasta", price: 249, img: imgi77, type: "veg" },
  { id: 9, title: "Colored Peppers Arrabiata Pasta [Red Sauce]", desc: "[Comes with 2 Garlic Breads, Serves 1] Red & Yellow Bell-Peppers | Tomato Basil Red Sauce | Penne Pasta", price: 249, img: imgi78, type: "veg" },
  { id: 10, title: "Olive & Mushroom Mixed Pink Pasta [Mixed Sauce]", desc: "[Comes with 2 Garlic Breads, Serves 1] Olives | Mushrooms | Mixed Pink Sauce | Penne Pasta", price: 299, img: imgi79, type: "veg" },
  { id: 11, title: 'Chicken & Mushroom Mixed Pink Pasta [Mixed Sauce]', desc: "[Comes with 2 Garlic Breads, Serves 1] Grilled Chicken | Mushrooms | Olives | Mixed Pink Sauce | Penne Pasta", price: 299, img: imgi80, type: "NonVeg" },
  { id: 12, title: 'Chicken & Mushroom Arrabiata Pasta [Red Sauce]', desc: "[Comes with 2 Garlic Breads, Serves 1] Grilled Chicken | Mushrooms | Olives | Tomato Basil Red Sauce | Penne Pasta", price: 299, img: imgi81, type: "NonVeg" },
];

export default function PastaSection({ filter = "all" }) {
  // ✅ Filter comboData instead of non-existent 'categories'
  const filteredItems = comboData.filter((item) => {
    const type = item.type.toLowerCase();
    if (filter === "all") return true;
    if (filter === "veg") return type === "veg";
    if (filter === "nonveg") return type === "nonveg";
    if (filter === "bestseller") return item.bestseller;
    if (filter === "chefsSpecial") return item.chefsSpecial;
    return true;
  });

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
        {filteredItems.map((combo) => (
          <div
            key={combo.id}
            className="bg-white shadow-md rounded-xl overflow-hidden border hover:shadow-lg transition relative"
          >
            {combo.bestseller && (
              <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
                Bestseller
              </div>
            )}

            <img
              src={combo.img}
              alt={combo.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4 flex flex-col justify-between h-[180px]">
              <h3 className="text-gray-800 font-semibold text-base mb-1 flex items-center gap-2">
                <img
                  src={combo.type.toLowerCase() === "veg" ? vegIcon : nonVegIcon}
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

      {/* Modal */}
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
