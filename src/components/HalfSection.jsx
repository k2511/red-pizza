import React, { useState } from "react";
import imgi10 from "../assets/img/imgi10.jpeg";
import imgi11 from "../assets/img/imgi11.jpg";
import imgi12 from "../assets/img/imgi12.jpg";
import vegIcon from "../assets/img/veg.png";
import nonVegIcon from "../assets/img/NV.png";

const comboData = [
  {
    id: 1,
    title: 'Veg & Veg [Big 10" Serves 2-3]',
    desc: "Choice is yours! Pick a half each of any 2 Veg Pizzas & make one Big 10 inch Pizza.",
    price: 299,
    img: imgi10,
    type: "veg",
  },
  {
    id: 2,
    title: 'Non-Veg & Veg [Big 10" Serves 2-3]',
    desc: "Veg or Non-Veg? BOTH! Pick a half each of a Non-Veg & a Veg Pizza to make one Big 10 inch Pizza.",
    price: 349,
    img: imgi11,
    type: "nonveg",
  },
  {
    id: 3,
    title: 'Non-Veg & Non-Veg [Big 10" Serves 2-3]',
    desc: "The fight ends today! Get your own half now. Pick a half each of any 2 Non-Veg Pizzas & make 1 big 10 inch Pizza.",
    price: 399,
    img: imgi12,
    type: "nonveg",
  },
];

const vegPizzas = [
  { name: "Double Cheese Margherita", desc: "Good Ol' Classic", price: 0 },
  { name: "Farmer's Market", desc: "Capsicum, Onion", price: 0 },
  { name: "Corn Cheese & Jalapenos", desc: "Spicy Jalapenos, Golden Corn, Mozzarella Cheese", price: 50 },
  { name: "Zesty Veggie Delight", desc: "Tomato, Onion, Spicy Jalapenos", price: 60 },
  { name: "Fabulous Three", desc: "Capsicum, Onion, Red Paprika", price: 60 },
  { name: "Olive Garden", desc: "Black Olive, Golden Corn, Capsicum", price: 70 },
  { name: "Spicy Mexicano", desc: "Red Paprika, Spicy Jalapeno, Golden Corn, Onion", price: 90 },
  { name: "Magic Mushrooms", desc: "Mushroom, Capsicum, Tomato", price: 90 },
  { name: "Paneer Tikka", desc: "Paneer Tikka, Onion", price: 90 },
  { name: "Veggie Paradise", desc: "Black Olive, Red Paprika, Capsicum, Tomato, Onion", price: 120 },
  { name: "Italian Fiesta", desc: "Mushroom, Black Olive, Spicy Jalapeno, Golden Corn", price: 120 },
  { name: "Peri Peri Paneer", desc: "Peri Peri Paneer, Golden Corn, Capsicum", price: 120 },
  { name: "All Veggies Madness", desc: "Mushroom, Black Olive, Spicy Jalapeno, Golden Corn, Capsicum, Onion, Tomato", price: 150 },
  { name: "Paneer Overload", desc: "Peri Peri Paneer, Paneer Tikka, Spicy Jalapeno, Onion, Tomato", price: 150 },
  { name: "Crowded House", desc: "Extra Cheese, Paneer Cubes, Black Olive, Red Paprika, Golden Corn, Capsicum, Onion", price: 150 },
];

const nonVegPizzas = [
  { name: "Chicken Corn Delight", desc: "Herb Grilled Chicken, Golden Corn", price: 0 },
  { name: "Chicken Smokey Joe", desc: "Smokey BBQ Chicken, Onion", price: 0 },
  { name: "Fiery Chicken", desc: "Spicy Chicken, Golden Corn, Capsicum", price: 50 },
  { name: "BBQ Chicken", desc: "BBQ Chicken, Spicy Jalapeno, Golden Corn, Tomato", price: 60 },
  { name: "Peri Peri Chicken", desc: "Peri Peri Chicken, Red Paprika, Golden Corn, Capsicum", price: 60 },
  { name: "Chicken Mexicano", desc: "Herb Grilled Chicken, Spicy Jalapeno, Capsicum, Onion", price: 60 },
  { name: "Chicken Tikka", desc: "Chicken Tikka, Tomato, Onion", price: 60 },
  { name: "Double Trouble Chicken", desc: "Herb Grilled Chicken, Chicken Tikka, Black Olive, Capsicum", price: 100 },
  { name: "Fire Me Up Chicken", desc: "Spicy Peri Peri Chicken, Herb Chicken, Red Paprika, Spicy Jalepeno", price: 100 },
  { name: "Chicken Italiana", desc: "Garlic Roast Chicken, Smokey BBQ Chicken, Mushroom, Tomato", price: 100 },
  { name: "Mojo's Chicken Special", desc: "BBQ Chicken, Chicken Tikka, Herb Grilled Chicken, Mushroom, Spicy Jalapeno, Golden Corn, Tomato", price: 130 },
  { name: "Chicken Full Smash", desc: "Peri Peri Chicken, Chicken Tikka, Roast Chicken, Black Olive, Red Paprika, Capsicum, Onion", price: 130 },
  { name: "The Meat Eater", desc: "Garlic Roast Chicken, Herb Grilled Chicken, Peri Peri Chicken, Smokey BBQ Chicken", price: 130 },
  { name: "Mad Over Lamb", desc: "Lamb | Onion | Serves 2-3.", price: 130 },
];

const crustOptions = [
  { name: "Pan Tossed", price: 0 },
  { name: "Thin Crust", price: 0 },
  { name: "Cheese Blast", price: 100 },
  { name: "Thin Crust Cheese Blast", price: 100 },
];

const nonVegCrustOptions = [
  { name: "Pan Tossed", price: 0 },
  { name: "Thin Crust", price: 0 },
  { name: "Cheese Blast", price: 100 },
  { name: "Thin Crust Cheese Blast", price: 100 },
  { name: "Chicken Cheese Blast", price: 130 },
];

export default function HalfSection({ filter = "all" }) {
  const filteredItems = comboData.filter((item) => {
    if (filter === "all") return true;
    if (filter === "veg") return item.type === "veg";
    if (filter === "nonveg") return item.type === "nonveg";
    return true;
  });

  const [selectedPizza, setSelectedPizza] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState(0); // 0: Crust, 1: First Half, 2: Second Half
  const [selectedCrust, setSelectedCrust] = useState(null);
  const [firstHalf, setFirstHalf] = useState(null);
  const [secondHalf, setSecondHalf] = useState(null);

  const handleAddClick = (combo) => {
    setSelectedPizza(combo);
    setActiveTab(0);
    setSelectedCrust(null);
    setFirstHalf(null);
    setSecondHalf(null);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPizza(null);
    setActiveTab(0);
  };

  const getTotalPrice = () => {
    let total = selectedPizza?.price || 0;
    if (selectedCrust) total += selectedCrust.price;
    if (firstHalf) total += firstHalf.price;
    if (secondHalf) total += secondHalf.price;
    return total;
  };

  const getItemsAdded = () => {
    let count = 0;
    if (firstHalf) count++;
    if (secondHalf) count++;
    return count;
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-4 sm:py-8">
      {/* Header */}
      <div className="mb-5 sm:mb-6 text-center sm:text-left">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
          Half & Half Pizzas [Big 10"]
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-1 leading-snug">
          Can't make up your mind? No worries! Get 2 different halves in 1 big
          10-inch Pizza. No more choosing between the 2.
        </p>
      </div>

      {/* Combo Cards */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
        {filteredItems.map((combo) => (
          <div
            key={combo.id}
            className="bg-white shadow-sm rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-200"
          >
            <img
              src={combo.img}
              alt={combo.title}
              className="w-full h-40 sm:h-48 object-cover"
            />
            <div className="p-3 sm:p-4 flex flex-col justify-between min-h-[180px]">
              <h3 className="text-gray-800 font-semibold text-sm sm:text-base mb-1 flex items-center gap-2">
                <img
                  src={combo.type === "veg" ? vegIcon : nonVegIcon}
                  alt={combo.type}
                  className="w-4 h-4 object-contain"
                />
                {combo.title}
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm mb-3 leading-snug">
                {combo.desc}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-gray-900 font-semibold text-sm sm:text-base">
                  ₹{combo.price}
                </span>
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
          <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-hidden relative shadow-lg flex flex-col">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold text-2xl leading-none z-10"
            >
              ×
            </button>

            {/* Header */}
            <div className="p-4 sm:p-6 pb-3 border-b">
              <h2 className="text-base sm:text-lg font-bold mb-4 pr-8">
                {selectedPizza.title}
              </h2>

              {/* Tab Navigation */}
              <div className="flex gap-2 sm:gap-3">
                <button
                  onClick={() => setActiveTab(0)}
                  className={`flex-1 border-2 rounded-lg p-3 text-xs sm:text-sm font-medium text-center transition ${
                    activeTab === 0
                      ? "border-orange-500 bg-orange-50"
                      : selectedCrust
                      ? "border-gray-300 bg-white"
                      : "border-dashed border-gray-400"
                  }`}
                >
                  <div className="flex flex-col items-center gap-1">
                    <span className={`text-2xl ${activeTab === 0 ? "text-orange-500" : "text-gray-400"}`}>+</span>
                    <span className={activeTab === 0 ? "text-orange-500" : "text-gray-600"}>
                      {selectedCrust ? selectedCrust.name : "Choose your Crust"}
                    </span>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab(1)}
                  className={`flex-1 border-2 rounded-lg p-3 text-xs sm:text-sm font-medium text-center transition ${
                    activeTab === 1
                      ? "border-orange-500 bg-orange-50"
                      : firstHalf
                      ? "border-gray-300 bg-white"
                      : "border-dashed border-gray-400"
                  }`}
                >
                  <div className="flex flex-col items-center gap-1">
                    <span className={`text-2xl ${activeTab === 1 ? "text-orange-500" : "text-gray-400"}`}>+</span>
                    <span className={activeTab === 1 ? "text-orange-500" : "text-gray-600"}>
                      {firstHalf ? firstHalf.name : "Pick your First Veg Half"}
                    </span>
                  </div>
                </button>

                <button
                  onClick={() => setActiveTab(2)}
                  className={`flex-1 border-2 rounded-lg p-3 text-xs sm:text-sm font-medium text-center transition ${
                    activeTab === 2
                      ? "border-orange-500 bg-orange-50"
                      : secondHalf
                      ? "border-gray-300 bg-white"
                      : "border-dashed border-gray-400"
                  }`}
                >
                  <div className="flex flex-col items-center gap-1">
                    <span className={`text-2xl ${activeTab === 2 ? "text-orange-500" : "text-gray-400"}`}>+</span>
                    <span className={activeTab === 2 ? "text-orange-500" : "text-gray-600"}>
                      {secondHalf ? secondHalf.name : "Pick your Second Veg Half"}
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              {/* Crust Selection */}
              {activeTab === 0 && (
                <div>
                  <h3 className="font-bold text-lg mb-4">Choice of Crust</h3>
                  <div className="space-y-2">
                    {(selectedPizza.id === 1 ? crustOptions : nonVegCrustOptions).map((crust, i) => (
                      <label
                        key={i}
                        className="flex justify-between items-center py-3 px-2 cursor-pointer hover:bg-gray-50 rounded border-b"
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="crust"
                            checked={selectedCrust?.name === crust.name}
                            onChange={() => setSelectedCrust(crust)}
                            className="w-4 h-4 accent-orange-500"
                          />
                          <img 
                            src={crust.name === "Chicken Cheese Blast" ? nonVegIcon : vegIcon} 
                            alt={crust.name === "Chicken Cheese Blast" ? "nonveg" : "veg"} 
                            className="w-4 h-4" 
                          />
                          <span className="text-gray-800">{crust.name}</span>
                        </div>
                        <span className="text-gray-700 font-medium">+ ₹ {crust.price}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* First Half Selection */}
              {activeTab === 1 && (
                <div>
                  <h3 className="font-bold text-lg mb-4">
                    {selectedPizza.id === 1 ? "First Veg Half" : "First Non-Veg Half"}
                  </h3>
                  <div className="space-y-2">
                    {(selectedPizza.id === 1 ? vegPizzas : nonVegPizzas).map((pizza, i) => (
                      <label
                        key={i}
                        className="flex justify-between items-start py-3 px-2 cursor-pointer hover:bg-gray-50 rounded border-b"
                      >
                        <div className="flex items-start gap-2 flex-1">
                          <input
                            type="radio"
                            name="first-half"
                            checked={firstHalf?.name === pizza.name}
                            onChange={() => setFirstHalf(pizza)}
                            className="w-4 h-4 accent-orange-500 mt-1"
                          />
                          <img 
                            src={selectedPizza.id === 1 ? vegIcon : nonVegIcon} 
                            alt={selectedPizza.id === 1 ? "veg" : "nonveg"} 
                            className="w-4 h-4 mt-1" 
                          />
                          <div className="flex-1">
                            <div className="text-gray-800 font-medium">{pizza.name}</div>
                            <div className="text-xs text-gray-500 italic">{pizza.desc}</div>
                          </div>
                        </div>
                        <span className="text-gray-700 font-medium ml-2">+ ₹ {pizza.price}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Second Half Selection */}
              {activeTab === 2 && (
                <div>
                  <h3 className="font-bold text-lg mb-4">
                    {selectedPizza.id === 1 ? "Second Veg Half" : selectedPizza.id === 2 ? "Second Veg Half" : "Second Non-Veg Half"}
                  </h3>
                  <div className="space-y-2">
                    {(selectedPizza.id === 1 || selectedPizza.id === 2 ? vegPizzas : nonVegPizzas).map((pizza, i) => (
                      <label
                        key={i}
                        className="flex justify-between items-start py-3 px-2 cursor-pointer hover:bg-gray-50 rounded border-b"
                      >
                        <div className="flex items-start gap-2 flex-1">
                          <input
                            type="radio"
                            name="second-half"
                            checked={secondHalf?.name === pizza.name}
                            onChange={() => setSecondHalf(pizza)}
                            className="w-4 h-4 accent-orange-500 mt-1"
                          />
                          <img 
                            src={(selectedPizza.id === 1 || selectedPizza.id === 2) ? vegIcon : nonVegIcon} 
                            alt={(selectedPizza.id === 1 || selectedPizza.id === 2) ? "veg" : "nonveg"} 
                            className="w-4 h-4 mt-1" 
                          />
                          <div className="flex-1">
                            <div className="text-gray-800 font-medium">{pizza.name}</div>
                            <div className="text-xs text-gray-500 italic">{pizza.desc}</div>
                          </div>
                        </div>
                        <span className="text-gray-700 font-medium ml-2">+ ₹ {pizza.price}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t p-4 sm:p-6 flex justify-between items-center bg-white">
              <div className="text-sm sm:text-base">
                <span className="text-gray-700 font-medium">Items Added</span>
                <span className="ml-2 font-bold">{getItemsAdded()}/3</span>
              </div>
              <button className="bg-orange-500 text-white px-6 py-2.5 rounded-lg hover:bg-orange-600 font-bold text-sm sm:text-base transition flex items-center gap-2">
                Next <span>▶</span> <span>₹{getTotalPrice()}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}