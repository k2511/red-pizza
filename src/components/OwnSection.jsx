import React, { useState } from "react";
import imgi13 from "../assets/img/imgi13.jpg";
import imgi14 from "../assets/img/imgi14.jpg";
import imgi15 from "../assets/img/imgi15.jpg";
import imgi16 from "../assets/img/imgi16.jpg";
import vegIcon from "../assets/img/veg.png"; // ✅ Veg icon
import nonVegIcon from "../assets/img/NV.png"; // ✅ Non-Veg icon

const comboData = [
  {
    id: 1,
    title: 'VEG Big 10" Make Your Own Pizza',
    desc: "[Serves 2-3] You choose, we make! Get your customized pizza; just start selecting your favourite toppings & crust.",
    price: 489,
    img: imgi13,
    type: "veg",
  },
  {
    id: 2,
    title: 'VEG Regular 7" Make Your Own Pizza',
    desc: "[Serves 1] Satisfy your solo cravings by making your own pizza with your choice of veg toppings & crust.",
    price: 279,
    img: imgi14,
    type: "veg",
  },
  {
    id: 3,
    title: 'NON VEG Big 10" Make Your Own Pizza',
    desc: "[Serves 2-3] Make a pizza by choosing your favourite non-veg toppings & crust. Go ahead, you have a great choice!",
    price: 489,
    img: imgi15,
    type: "nonveg",
  },
  {
    id: 4,
    title: 'NON VEG Regular 7" Make Your Own Pizza',
    desc: "[Serves 1] Make your own treat! Just choose the toppings & crust. Your personal pizza with your personal favourites!",
    price: 279,
    img: imgi16,
    type: "nonveg",
  },
];

export default function OwnSection() {
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
         Make Your Own Pizza
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-1">
          Your pizza, your way! Pick your favourite toppings & crust, and we'll make a pizza, just as you like it. Get, set, pick!
        </p>
      </div>

      {/* Combo Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {comboData.map((combo) => (
          <div
            key={combo.id}
            className="bg-white shadow-md rounded-xl overflow-hidden border hover:shadow-lg transition"
          >
            {/* Combo Image */}
            <img
              src={combo.img}
              alt={combo.title}
              className="w-full h-48 object-cover"
            />

            {/* Combo Details */}
            <div className="p-4 flex flex-col justify-between h-[180px]">
              {/* Title with Icon */}
              <h3 className="text-gray-800 font-semibold text-base mb-1 flex items-center gap-2">
                <img
                  src={combo.type === "veg" ? vegIcon : nonVegIcon}
                  alt={combo.type}
                  className="w-4 h-4 object-contain"
                />
                {combo.title}
              </h3>

              <p className="text-gray-500 text-sm mb-3 leading-snug">{combo.desc}</p>

              {/* Price + Add Button */}
              <div className="flex items-center justify-between mt-auto">
                <div>
                  <span className="text-gray-900 font-semibold text-base">
                    ₹{combo.price}
                  </span>
                </div>

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

      {/* Modal Section */}
      {showModal && selectedPizza && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-11/12 sm:w-3/4 md:w-1/2 max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 font-bold text-xl"
            >
              ×
            </button>

            {/* Header */}
            <h2 className="text-lg font-bold mb-2">
              {selectedPizza.title} – ₹{selectedPizza.price}
            </h2>

            {/* Choose Pizza Boxes */}
            <div className="flex items-center gap-4 mb-6">
              <button className="flex-1 border-2 border-orange-500 text-orange-500 rounded-lg p-4 font-medium text-center hover:bg-orange-50">
                + Choose First Pizza
              </button>
              <button className="flex-1 border-2 border-dashed border-gray-400 text-gray-500 rounded-lg p-4 font-medium text-center hover:bg-gray-50">
                + Choose Second Pizza
              </button>
            </div>

            {/* Crust Options */}
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

            {/* Type Filter */}
            <h3 className="font-semibold mb-3">Select Type</h3>
            <div className="flex gap-2 mb-6">
              {["Both", "Veg", "Non-Veg"].map((type, idx) => (
                <button
                  key={idx}
                  className={`px-4 py-1 rounded-full border ${
                    type === "Both"
                      ? "bg-black text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Footer Section */}
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
