import React, { useState } from "react";
import imgi021 from "../assets/img/imgi021.jpg";
import imgi022 from "../assets/img/imgi022.jpg";
import imgi023 from "../assets/img/imgi023.jpg";
import imgi024 from "../assets/img/imgi024.jpg";
import imgi025 from "../assets/img/imgi025.jpg";
import imgi026 from "../assets/img/imgi026.jpg";
import imgi027 from "../assets/img/imgi027.jpg";
import imgi028 from "../assets/img/imgi028.jpg";
import imgi029 from "../assets/img/imgi029.jpg";

import vegIcon from "../assets/img/veg.png";
import nonVegIcon from "../assets/img/NV.png";

const comboData = [
  {
    id: 1,
    title: "Choco Lava Cake + Coke Combo @ Rs.79",
    desc: "[Save Rs.41] Choco Lava Cake + Coke. Make every order a complete feast!",
    price: 79,
    img: imgi021,
    type: "veg",
    bestseller: true,
  },
  {
    id: 2,
    title: "Nachos + Coke Combo @ Rs.49",
    desc: "[Save Rs.31] Nachos + Coke. Perfect sides to complete your order!",
    price: 49,
    img: imgi022,
    type: "veg",
    
  },
  {
    id: 3,
    title: 'Choco Lava Cake',
    desc: "With a crisp exterior & molten chocolate oozing out of it's center, our Choco Lava is HEAVENLY! Go for it.",
    price: 99,
    img: imgi023,
    type: "veg",
    bestseller: true,
  },
  {
    id: 4,
    title: 'Chocolate Overload Brownie',
    desc: "Utterly chocolaty brownie with the fudgiest centre. Fresh from the oven, it’s a melt-in-the-mouth dessert!",
    price: 99,
    img: imgi024,
    type: "NonVeg",
    bestseller: true,
  },
  {
    id: 5,
    title: 'Butterscotch Mousse Cake',
    desc: "An explosion of creamy butterscotch & rich coco cake crumble in every bite. Experience the blizzard!",
    price: 99,
    img: imgi025,
    type: "NonVeg",
   
  },
  {
    id: 6,
    title: 'Belgian Chocolate Mousse Cake',
    desc: "Deliciously creamy, silky, and loaded with intense dark chocolate. It’s not just a dessert, this is love in a cup!",
    price: 99,
    img: imgi026,
    type: "NonVeg",
  },
  {
    id: 7,
    title: "Coke [475 ml]",
    desc: "A bubbly drink that every pizza needs.",
    price: 70,
    img: imgi027,
    type: "veg",
     bestseller: true,
  },
  {
    id: 8,
    title: 'Bisleri Bliss - Mineral Water [500 ml]',
    desc: "500 ML Water Bottles.",
    price: 20,
    img: imgi028,
    type: "veg",

  },
  {
    id: 9,
    title: "Cheesy Dip",
    desc: "A creamy dip for the ones who love all things CHEESY.",
    price: 25,
    img: imgi029,
    type: "veg",
  },
  
];

export default function DrinkSection() {
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
          Desserts & Drinks
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-1">
         Sweet treats & refreshing drinks.
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
