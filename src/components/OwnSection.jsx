import React, { useState } from "react";
import imgi13 from "../assets/img/imgi13.jpg";
import imgi14 from "../assets/img/imgi14.jpg";
import imgi15 from "../assets/img/imgi15.jpg";
import imgi16 from "../assets/img/imgi16.jpg";
import vegIcon from "../assets/img/veg.png";
import nonVegIcon from "../assets/img/NV.png";

const comboData = [
  { id: 1, title: 'VEG Big 10" Make Your Own Pizza', desc: "[Serves 2-3] You choose, we make! Get your customized pizza; just start selecting your favourite toppings & crust.", price: 489, img: imgi13, type: "veg" },
  { id: 2, title: 'VEG Regular 7" Make Your Own Pizza', desc: "[Serves 1] Satisfy your solo cravings by making your own pizza with your choice of veg toppings & crust.", price: 279, img: imgi14, type: "veg" },
  { id: 3, title: 'NON VEG Big 10" Make Your Own Pizza', desc: "[Serves 2-3] Make a pizza by choosing your favourite non-veg toppings & crust. Go ahead, you have a great choice!", price: 489, img: imgi15, type: "nonveg" },
  { id: 4, title: 'NON VEG Regular 7" Make Your Own Pizza', desc: "[Serves 1] Make your own treat! Just choose the toppings & crust. Your personal pizza with your personal favourites!", price: 279, img: imgi16, type: "nonveg" },
];

export default function OwnSection({ filter = "all" }) {
  const filteredItems = comboData.filter((item) => {
    if (filter === "all") return true;
    if (filter === "veg") return item.type === "veg";
    if (filter === "nonveg") return item.type === "nonveg";
    return true;
  });

  const [selectedPizza, setSelectedPizza] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddClick = (combo) => {
    setSelectedPizza(combo);
    setQuantity(1);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPizza(null);
    setQuantity(1);
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-4 sm:py-8">
      {/* Header */}
      <div className="mb-5 text-center sm:text-left">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
          Make Your Own Pizza
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-1 leading-snug">
          Your pizza, your way! Pick your favourite toppings & crust, and we'll make a pizza, just as you like it. Get, set, pick!
        </p>
      </div>

      {/* Combo Cards */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
        {filteredItems.map((combo) => (
          <div
            key={combo.id}
            className="bg-white shadow-sm rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition"
          >
            <img src={combo.img} alt={combo.title} className="w-full h-40 sm:h-48 object-cover" />
            <div className="p-3 sm:p-4 flex flex-col justify-between min-h-[180px]">
              <h3 className="text-gray-800 font-semibold text-sm sm:text-base mb-1 flex items-center gap-2">
                <img
                  src={combo.type === "veg" ? vegIcon : nonVegIcon}
                  alt={combo.type}
                  className="w-4 h-4 object-contain"
                />
                {combo.title}
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm mb-3 leading-snug">{combo.desc}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-gray-900 font-semibold text-sm sm:text-base">₹{combo.price}</span>
                <button
                  className="bg-red-500 text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-lg hover:bg-red-600 text-xs sm:text-sm font-semibold transition"
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-3 sm:px-0 z-50">
          <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-lg flex flex-col sm:flex-row">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold text-2xl leading-none z-10"
            >
              ×
            </button>

            {/* Left Side - Image and Details */}
            <div className="w-full sm:w-2/5 p-6 border-b sm:border-b-0 sm:border-r border-gray-200">
              <div className="flex items-start gap-2 mb-3">
                <img
                  src={selectedPizza.type === "veg" ? vegIcon : nonVegIcon}
                  alt={selectedPizza.type}
                  className="w-5 h-5 object-contain mt-1"
                />
                <h2 className="text-lg font-bold text-gray-800 leading-tight">
                  {selectedPizza.title}
                </h2>
              </div>

              <img
                src={selectedPizza.img}
                alt={selectedPizza.title}
                className="w-full h-48 sm:h-56 object-cover rounded-lg mb-4"
              />

              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {selectedPizza.desc}
              </p>

              <div className="flex items-center justify-between mb-4">
                <span className="text-xl font-bold text-gray-900">₹{selectedPizza.price * quantity}</span>
                <div className="flex items-center border-2 border-gray-300 rounded-lg">
                  <button 
                    onClick={decreaseQuantity}
                    className="px-3 py-1 hover:bg-gray-100 font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={quantity === 1}
                  >
                    -
                  </button>
                  <span className="px-4 py-1 font-semibold min-w-[40px] text-center">{quantity}</span>
                  <button 
                    onClick={increaseQuantity}
                    className="px-3 py-1 hover:bg-gray-100 font-bold text-lg"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Customization Options */}
            <div className="w-full sm:w-3/5 p-6 overflow-y-auto">
              <h3 className="font-bold text-base mb-3 text-gray-800">
                Choice of Crust <span className="text-sm font-normal text-gray-500">(choose one)</span>
              </h3>
              <div className="space-y-2 mb-6">
                {(selectedPizza.type === "veg" ? [
                  { name: "Pan Tossed", price: 0 },
                  { name: "Thin Crust", price: 0 },
                  { name: "Cheese Blast", price: 100 },
                  { name: "Thin Crust Cheese Blast", price: 100 }
                ] : [
                  { name: "Pan Tossed", price: 0 },
                  { name: "Thin Crust", price: 0 },
                  { name: "Cheese Blast", price: 100 },
                  { name: "Thin Crust Cheese Blast", price: 100 },
                  { name: "Chicken Cheese Blast", price: 130 }
                ]).map((crust, i) => (
                  <label key={i} className="flex justify-between items-center py-2 cursor-pointer hover:bg-gray-50 rounded text-sm">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="crust"
                        defaultChecked={i === 0}
                        className="w-4 h-4 accent-orange-500"
                      />
                      <img 
                        src={selectedPizza.type === "veg" ? vegIcon : nonVegIcon} 
                        alt={selectedPizza.type} 
                        className="w-4 h-4" 
                      />
                      <span className="text-gray-800">{crust.name}</span>
                    </div>
                    {crust.price > 0 && (
                      <span className="text-gray-700 font-medium">₹ {crust.price}</span>
                    )}
                  </label>
                ))}
              </div>

              <h3 className="font-bold text-base mb-3 text-gray-800">Pick any 1 Special Topping</h3>
              <div className="space-y-2 mb-6">
                {(selectedPizza.type === "veg" ? [
                  { name: "Peri Peri Paneer" },
                  { name: "Paneer Tikka" },
                  { name: "Grilled Mushrooms" }
                ] : [
                  { name: "Herb Grilled Chicken" },
                  { name: "Spicy Peri Peri Chicken" },
                  { name: "Smokey BBQ Chicken" },
                  { name: "Roast chicken" },
                  { name: "Chicken Tikka" }
                ]).map((topping, i) => (
                  <label key={i} className="flex justify-between items-center py-2 cursor-pointer hover:bg-gray-50 rounded text-sm">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="special-topping"
                        defaultChecked={i === 0}
                        className="w-4 h-4 accent-orange-500"
                      />
                      <img 
                        src={selectedPizza.type === "veg" ? vegIcon : nonVegIcon} 
                        alt={selectedPizza.type} 
                        className="w-4 h-4" 
                      />
                      <span className="text-gray-800">{topping.name}</span>
                    </div>
                  </label>
                ))}
              </div>

              <h3 className="font-bold text-base mb-3 text-gray-800">Pick upto 3 Classic Toppings</h3>
              <div className="space-y-2 mb-6">
                {[
                  "Onion",
                  "Capsicum",
                  "Tomato",
                  "Golden Corn",
                  "Black Olives",
                  "Spicy Jalapeno",
                  "Red Paprika"
                ].map((topping, i) => (
                  <label key={i} className="flex items-center py-2 cursor-pointer hover:bg-gray-50 rounded text-sm">
                    <input type="checkbox" className="w-4 h-4 mr-2 accent-orange-500" />
                    <img src={vegIcon} alt="veg" className="w-4 h-4 mr-2" />
                    <span className="text-gray-800">{topping}</span>
                  </label>
                ))}
              </div>

              <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 font-bold text-base transition">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}