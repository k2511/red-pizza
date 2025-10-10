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
    title: "Fabulous Three THIN CRUST PIZZA",
    desc: "Thin Crust Base | Capsicum | Onion | Red Paprika",
    price: 239,
    img: imgi62,
    type: "veg",
  },
  {
    id: 4,
    title: "Paneer Tikka THIN CRUST PIZZA",
    desc: "Thin Crust Base | Paneer Tikka | Onion",
    price: 269,
    img: imgi63,
    type: "veg",
  },
  {
    id: 5,
    title: "Veggie Paradise THIN CRUST PIZZA",
    desc: "Thin Crust Base | Black Olive | Red Paprika | Capsicum | Tomato | Onion",
    price: 299,
    img: imgi64,
    type: "veg",
    bestseller: true,
  },
  {
    id: 6,
    title: "Peri Peri Paneer THIN CRUST PIZZA",
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
    title: "Chicken Corn Delight THIN CRUST PIZZA",
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
    title: "Chicken Tikka THIN CRUST PIZZA",
    desc: "Thin Crust Base | Thin Crust Base | Chicken Tikka | Tomato | Onion",
    price: 299,
    img: imgi70,
    type: "NonVeg",
  },
  {
    id: 12,
    title: "Double Trouble Chicken THIN CRUST PIZZA",
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

export default function CrustSection({ filter = "all" }) {
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
  const [selectedCrust, setSelectedCrust] = useState("Thin Crust");
  const [selectedFeast, setSelectedFeast] = useState([]);
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const feastOptions = [
    { name: "Nachos + Coke [250 ml]", oldPrice: 69, price: 49, type: "veg" },
    {
      name: "Nachos + Thums Up [250 ml]",
      oldPrice: 69,
      price: 49,
      type: "veg",
    },
    { name: "Nachos + Sprite [250 ml]", oldPrice: 69, price: 49, type: "veg" },
    { name: "Chocolava + Coke [250 ml]", oldPrice: 99, price: 79, type: "veg" },
    {
      name: "Chocolava + Thums Up [250 ml]",
      oldPrice: 99,
      price: 79,
      type: "veg",
    },
    {
      name: "Chocolava + Sprite [250 ml]",
      oldPrice: 99,
      price: 79,
      type: "veg",
    },
  ];

  const vegToppings = [
    { name: "Paneer Cubes", price: 49, type: "veg" },
    { name: "Mushrooms", price: 49, type: "veg" },
    { name: "Black Olives", price: 39, type: "veg" },
    { name: "Spicy Jalapenos", price: 39, type: "veg" },
    { name: "Red Paprika", price: 39, type: "veg" },
    { name: "Golden Corn", price: 39, type: "veg" },
    { name: "Onion", price: 29, type: "veg" },
    { name: "Tomato", price: 29, type: "veg" },
    { name: "Capsicum", price: 29, type: "veg" },
  ];

  const handleAddClick = (pizza) => {
    setSelectedPizza(pizza);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPizza(null);
    setSelectedFeast([]);
    setSelectedToppings([]);
  };

  const toggleFeast = (item) => {
    setSelectedFeast((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const toggleTopping = (item) => {
    setSelectedToppings((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
        THIN CRUST Pizzas
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {filteredItems.map((combo) => (
          <div
            key={combo.id}
            className="bg-white shadow-md rounded-xl overflow-hidden border hover:shadow-lg transition relative"
          >
            {combo.bestseller && (
              <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded z-10">
                Bestseller
              </div>
            )}
            {combo.chefsSpecial && (
              <div className="absolute top-10 left-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded z-10">
                Chef’s Special
              </div>
            )}

            <img
              src={combo.img}
              alt={combo.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-gray-800 font-semibold text-base mb-1 flex items-center gap-2">
                <img
                  src={
                    combo.type.toLowerCase() === "veg" ? vegIcon : nonVegIcon
                  }
                  alt={combo.type}
                  className="w-4 h-4"
                />
                {combo.title}
              </h3>
              <p className="text-gray-500 text-sm mb-3">{combo.desc}</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-900 font-semibold text-base">
                  ₹{combo.price}
                </span>
                <button
                  onClick={() => handleAddClick(combo)}
                  className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 text-sm font-semibold"
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
          <div className="bg-white rounded-lg p-6 w-11/12 sm:w-4/5 md:w-3/5 max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold text-2xl"
            >
              ×
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left: Pizza Info */}
              {/* Left: Pizza Info */}
              <div>
                <img
                  src={selectedPizza.img}
                  alt={selectedPizza.title}
                  className="rounded-lg w-full h-56 object-cover mb-3"
                />
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={
                      selectedPizza.type.toLowerCase() === "veg"
                        ? vegIcon
                        : nonVegIcon
                    }
                    alt={selectedPizza.type}
                    className="w-5 h-5"
                  />
                  <h2 className="text-lg font-bold text-gray-800">
                    {selectedPizza.title}
                  </h2>
                </div>
                <p className="text-gray-500">{selectedPizza.desc}</p>
                <div className="flex items-center justify-between mt-3">
                  <p className="text-gray-800 font-semibold text-lg">
                    ₹{selectedPizza.price}
                  </p>
                  <div className="flex items-center gap-3 border rounded-lg px-3 py-1">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="text-gray-600 hover:text-gray-800 font-bold text-xl w-6 h-6 flex items-center justify-center"
                    >
                      −
                    </button>
                    <span className="font-semibold text-gray-800 min-w-[20px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="text-gray-600 hover:text-gray-800 font-bold text-xl w-6 h-6 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Right: Customization */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Select a Size
                </h3>
                <div className="space-y-2 mb-5">
                  {[
                    { name: "Regular (7'')", price: 199 },
                    { name: "Big (10'')", price: 299 },
                  ].map((crust, i) => (
                    <label
                      key={i}
                      className="flex justify-between items-center border-b py-2 cursor-pointer hover:bg-gray-50 rounded"
                    >
                      <div>
                        <input
                          type="radio"
                          name="crust"
                          checked={selectedCrust === crust.name}
                          onChange={() => setSelectedCrust(crust.name)}
                          className="mr-2"
                        />
                        {crust.name}
                      </div>
                      {crust.price > 0 && (
                        <span className="text-gray-600">₹{crust.price}</span>
                      )}
                    </label>
                  ))}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Choice of Crust
                </h3>
                <div className="space-y-2 mb-5">
                  {[
                    { name: "Thin Crust", price: 0, type: "veg" },
                    { name: "Thin Crust Cheese Blast", price: 0, type: "veg" },
                  ].map((crust, i) => (
                    <label
                      key={i}
                      className="flex justify-between items-center border-b py-2 cursor-pointer hover:bg-gray-50 rounded"
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="crust"
                          checked={selectedCrust === crust.name}
                          onChange={() => setSelectedCrust(crust.name)}
                          className="mr-2"
                        />
                        <img src={vegIcon} alt="veg" className="w-4 h-4" />
                        {crust.name}
                      </div>
                      {crust.price > 0 && (
                        <span className="text-gray-600">₹{crust.price}</span>
                      )}
                    </label>
                  ))}
                </div>

                {/* Make it a FEAST */}
                <h3 className="font-semibold text-gray-800 mb-2">
                  Make it a FEAST?
                </h3>
                <div className="space-y-2 mb-6">
                  {feastOptions.map((f, i) => (
                    <label
                      key={i}
                      className="flex justify-between items-center border-b py-2 cursor-pointer hover:bg-gray-50 rounded"
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={selectedFeast.includes(f.name)}
                          onChange={() => toggleFeast(f.name)}
                          className="mr-2"
                        />
                        <img src={vegIcon} alt="veg" className="w-4 h-4" />
                        {f.name}
                      </div>
                      <div className="text-right">
                        <span className="line-through text-gray-400 text-sm mr-1">
                          ₹{f.oldPrice}
                        </span>
                        <span className="text-gray-800 font-semibold">
                          ₹{f.price}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>

                {/* Veg Toppings */}
                <h3 className="font-semibold text-gray-800 mb-2">
                  Veg Toppings
                </h3>
                <div className="space-y-2 mb-6">
                  {vegToppings.map((t, i) => (
                    <label
                      key={i}
                      className="flex justify-between items-center border-b py-2 cursor-pointer hover:bg-gray-50 rounded"
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={selectedToppings.includes(t.name)}
                          onChange={() => toggleTopping(t.name)}
                          className="mr-2"
                        />
                        <img src={vegIcon} alt="veg" className="w-4 h-4" />
                        {t.name}
                      </div>
                      <span className="text-gray-800 font-semibold">
                        ₹{t.price}
                      </span>
                    </label>
                  ))}
                </div>

                <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
