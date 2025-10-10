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
import imgi47 from "../assets/img/imgi47.jpg";
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
    img: imgi47,
    type: "NonVeg",
    chefsSpecial: true, 
  },
];

export default function CheesBrustSection({ filter = "all" }) {
  // ✅ Filter comboData, normalize type
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
                      { name: "Regular (7'')", price: 249 },
                      { name: "Big (10'')", price: 399 },
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
  