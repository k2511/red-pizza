import React, { useState } from "react";
import imgi33 from "../assets/img/imgi33.jpg";
import imgi34 from "../assets/img/imgi34.jpg";
import imgi35 from "../assets/img/imgi35.jpg";
import imgi36 from "../assets/img/imgi36.jpg";
import imgi37 from "../assets/img/imgi37.jpg";
import imgi38 from "../assets/img/imgi38.jpg";
import imgi39 from "../assets/img/imgi39.jpg";
import imgi40 from "../assets/img/imgi40.jpg";
import imgi41 from "../assets/img/imgi41.jpg";
import imgi42 from "../assets/img/imgi42.jpg";
import imgi43 from "../assets/img/imgi43.jpg";
import imgi44 from "../assets/img/imgi44.jpg";
import imgi45 from "../assets/img/imgi45.jpg";
import imgi46 from "../assets/img/imgi46.jpg";
import imgi47 from "../assets/img/imgi47.jpg";
import nonVegIcon from "../assets/img/NV.png";
import vegIcon from "../assets/img/veg.png";

const comboData = [
  {
    id: 1,
    title: "Chicken Smokey Joe [Regular 7'']",
    desc: "Smokey BBQ Chicken | Onion | Serves 1.",
    price: 249,
    img: imgi33,
    type: "nonVeg",
  },
  {
    id: 2,
    title: "Chicken Corn Delight [Regular 7'']",
    desc: "Herb Grilled Chicken | Golden Corn | Serves 1.",
    price: 249,
    img: imgi34,
    type: "nonVeg",
  },
  {
    id: 3,
    title: 'Fiery Chicken [Regular 7"]',
    desc: "Spicy Chicken | Golden Corn | Capsicum | Serves 1.",
    price: 249,
    img: imgi35,
    type: "nonVeg",
  },
  {
    id: 4,
    title: 'BBQ Chicken [Regular 7"]',
    desc: "BBQ Chicken | Spicy Jalapeno | Golden Corn | Tomato | Serves 1.",
    price: 299,
    img: imgi36,
    type: "nonVeg",
  },
  {
    id: 5,
    title: 'Peri Peri Chicken [Regular 7"]',
    desc: "Peri Peri Chicken | Red Paprika | Golden Corn | Capsicum | Serves 1.",
    price: 299,
    img: imgi37,
    type: "nonVeg",
    bestseller: true,
  },
  {
    id: 6,
    title: 'Chicken Mexicano [Regular 7"]',
    desc: "Herb Grilled Chicken | Spicy Jalapeno | Capsicum | Onion | Serves 1.",
    price: 299,
    img: imgi38,
    type: "nonVeg",
  },
  {
    id: 7,
    title: "Chicken Tikka [Regular 7'']",
    desc: "Chicken Tikka | Tomato | Onion | Serves 1.",
    price: 299,
    img: imgi39,
    type: "nonVeg",
    bestseller: true,
  },
  {
    id: 8,
    title: 'Double Trouble Chicken [Regular 7"]',
    desc: "Herb Grilled Chicken | Chicken Tikka | Black Olive | Capsicum | Serves 1.",
    price: 319,
    img: imgi40,
    type: "nonVeg",
    chefsSpecial: true,
  },
  {
    id: 9,
    title: "Fire Me Up Chicken [Regular 7'']",
    desc: "Spicy Peri Peri Chicken | Herb Chicken | Red Paprika | Spicy Jalepeno | Serves 1.",
    price: 319,
    img: imgi41,
    type: "nonVeg",
  },
  {
    id: 10,
    title: "Chicken Italiana [Regular 7'']",
    desc: "Garlic Roast Chicken | Smokey BBQ Chicken | Mushroom | Tomato | Serves 1.",
    price: 319,
    img: imgi42,
    type: "nonVeg",
  },
  {
    id: 11,
    title: 'Butter Chicken [Regular 7"]',
    desc: "Tandoori Chicken | Capsicum | Onion | Tomato [Comes with Makhni Sauce instead of Pizza Sauce] Serves 1.",
    price: 319,
    img: imgi43,
    type: "nonVeg",
    chefsSpecial: true,
  },
  {
    id: 12,
    title: "Mojo's Chicken Special [Regular 7'']",
    desc: "BBQ Chicken | Chicken Tikka | Herb Grilled Chicken | Mushroom | Spicy Jalapeno | Golden Corn | Tomato | Serves 1.",
    price: 349,
    img: imgi44,
    type: "nonVeg",
  },
  {
    id: 13,
    title: "Chicken Full Smash [Regular 7'']",
    desc: "Peri Peri Chicken | Chicken Tikka | Roast Chicken | Black Olive | Red Paprika | Capsicum | Onion | Serves 1.",
    price: 349,
    img: imgi45,
    type: "nonVeg",
  },
  {
    id: 14,
    title: "The Meat Eater [Regular 7'']",
    desc: "Garlic Roast Chicken | Herb Grilled Chicken | Peri Peri Chicken | Smokey BBQ Chicken | Serves 1.",
    price: 349,
    img: imgi46,
    type: "nonVeg",
    bestseller: true,
  },
  {
    id: 15,
    title: 'Mad Over Lamb [Regular 7"]',
    desc: "Lamb | Onion | Serves 1.",
    price: 349,
    img: imgi47,
    type: "nonVeg",
  },
];

export default function RegularNonSection({ filter = "all" }) {
  const filteredItems = comboData.filter((item) => {
    if (filter === "all") return true;
    if (filter === "veg") return item.type === "veg";
    if (filter === "nonveg") return item.type.toLowerCase() === "nonveg";
    if (filter === "bestseller") return item.bestseller;
    if (filter === "chefsSpecial") return item.chefsSpecial;
    return true;
  });

  const [selectedPizza, setSelectedPizza] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddClick = (combo) => {
    setSelectedPizza(combo);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPizza(null);
    setQuantity(1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-6 text-center sm:text-left">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">
          Regular 7" Pizzas | Non-Veg
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-1">
          Go SOLO with the new 7-inch Pizzas. Loaded with juicy meat chunks,
          topped with melting cheese, & baked to perfection.
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

            {combo.chefsSpecial && (
              <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
                Chef's Special
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
                  src={nonVegIcon}
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold text-2xl z-10"
            >
              ×
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              {/* Left: Pizza Image & Info */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <img src={nonVegIcon} alt="non-veg" className="w-5 h-5" />
                  <h2 className="text-lg font-bold text-gray-800">
                    {selectedPizza.title}
                  </h2>
                </div>

                <img
                  src={selectedPizza.img}
                  alt={selectedPizza.title}
                  className="w-full h-64 object-cover rounded-lg mb-3"
                />

                <p className="text-gray-600 text-sm mb-3">
                  {selectedPizza.desc}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-gray-900 font-bold text-xl">
                    ₹{selectedPizza.price}
                  </span>
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

              {/* Right: Customization Options */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">
                  Select a Size
                </h3>
                <div className="space-y-2 mb-5">
                  {[
                    { name: "Regular (7'')", price: 249 },
                    { name: "Big (10'')", price: 399 },
                  ].map((size, i) => (
                    <label
                      key={i}
                      className="flex justify-between items-center border-b py-2 cursor-pointer hover:bg-gray-50 rounded px-2"
                    >
                      <div>
                        <input
                          type="radio"
                          name="size"
                          defaultChecked={i === 0}
                          className="mr-2"
                        />
                        {size.name}
                      </div>
                      <span className="text-gray-800 font-medium">
                        ₹{size.price}
                      </span>
                    </label>
                  ))}
                </div>

                <h3 className="font-semibold text-gray-800 mb-3">
                  Choice of Crust
                </h3>
                <div className="space-y-2 mb-5">
                  {[
                    { name: "Pan Tossed", price: 0 },
                    { name: "Thin Crust", price: 0 },
                    { name: "Cheese Blast", price: 50 },
                    { name: "Thin Crust Cheese Blast", price: 50 },
                  ].map((crust, i) => (
                    <label
                      key={i}
                      className="flex justify-between items-center border-b py-2 cursor-pointer hover:bg-gray-50 rounded px-2"
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="crust"
                          defaultChecked={i === 0}
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

                <h3 className="font-semibold text-gray-800 mb-3">
                  Make it a FEAST?
                </h3>
                <div className="space-y-2 mb-5">
                  {[
                    { name: "Nachos + Coke [250 ml]", oldPrice: 69, price: 49 },
                    {
                      name: "Nachos + Thums Up [250 ml]",
                      oldPrice: 69,
                      price: 49,
                    },
                    {
                      name: "Nachos + Sprite [250 ml]",
                      oldPrice: 69,
                      price: 49,
                    },
                    {
                      name: "Chocolava + Coke [250 ml]",
                      oldPrice: 99,
                      price: 79,
                    },
                    {
                      name: "Chocolava + Thums Up [250 ml]",
                      oldPrice: 99,
                      price: 79,
                    },
                    {
                      name: "Chocolava + Sprite [250 ml]",
                      oldPrice: 99,
                      price: 79,
                    },
                  ].map((feast, i) => (
                    <label
                      key={i}
                      className="flex justify-between items-center border-b py-2 cursor-pointer hover:bg-gray-50 rounded px-2"
                    >
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="mr-2" />
                        <img src={vegIcon} alt="veg" className="w-4 h-4" />
                        {feast.name}
                      </div>
                      <div className="text-right">
                        <span className="line-through text-gray-400 text-sm mr-1">
                          ₹{feast.oldPrice}
                        </span>
                        <span className="text-gray-800 font-semibold">
                          ₹{feast.price}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>

                <h3 className="font-semibold text-gray-800 mb-3">
                  Veg Toppings
                </h3>
                <div className="space-y-2 mb-5">
                  {[
                    { name: "Paneer Cubes", price: 49 },
                    { name: "Mushrooms", price: 49 },
                    { name: "Black Olives", price: 39 },
                    { name: "Spicy Jalapenos", price: 39 },
                    { name: "Red Paprika", price: 39 },
                    { name: "Golden Corn", price: 39 },
                    { name: "Onion", price: 29 },
                    { name: "Tomato", price: 29 },
                    { name: "Capsicum", price: 29 },
                  ].map((topping, i) => (
                    <label
                      key={i}
                      className="flex justify-between items-center border-b py-2 cursor-pointer hover:bg-gray-50 rounded px-2"
                    >
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="mr-2" />
                        <img src={vegIcon} alt="veg" className="w-4 h-4" />
                        {topping.name}
                      </div>
                      <span className="text-gray-800 font-semibold">
                        ₹{topping.price}
                      </span>
                    </label>
                  ))}
                </div>

                <h3 className="font-semibold text-gray-800 mb-3">
                  Non-Veg Toppings
                </h3>
                <div className="space-y-2 mb-5">
                  {[
                    { name: "Herb Grilled Chicken", price: 49 },
                    { name: "Spicy Peri Peri Chicken", price: 49 },
                    { name: "Chicken Tikka", price: 49 },
                  ].map((topping, i) => (
                    <label
                      key={i}
                      className="flex justify-between items-center border-b py-2 cursor-pointer hover:bg-gray-50 rounded px-2"
                    >
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="mr-2" />
                        <img
                          src={nonVegIcon}
                          alt="non-veg"
                          className="w-4 h-4"
                        />
                        {topping.name}
                      </div>
                      <span className="text-gray-800 font-semibold">
                        ₹{topping.price}
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