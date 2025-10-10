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
import vegIcon from "../assets/img/veg.png";
import nonVegIcon from "../assets/img/NV.png";

const comboData = [
  {
    id: 1,
    title: "Chicken Smokey Joe [BIG 10'']",
    desc: "Smokey BBQ Chicken | Onion | Serves 2-3.",
    price: 399,
    img: imgi33,
    type: "nonVeg",
  },
  {
    id: 2,
    title: "Chicken Corn Delight [BIG 10'']",
    desc: "Herb Grilled Chicken | Golden Corn | Serves 2-3.",
    price: 399,
    img: imgi34,
    type: "nonVeg",
  },
  {
    id: 3,
    title: 'Fiery Chicken [BIG 10"]',
    desc: "Spicy Chicken | Golden Corn | Capsicum | Serves 2-3.",
    price: 449,
    img: imgi35,
    type: "nonVeg",
  },
  {
    id: 4,
    title: 'BBQ Chicken [BIG 10"]',
    desc: "BBQ Chicken | Spicy Jalapeno | Golden Corn | Tomato | Serves 2-3.",
    price: 419,
    img: imgi36,
    type: "nonVeg",
  },
  {
    id: 5,
    title: 'Peri Peri Chicken [BIG 10"]',
    desc: "Peri Peri Chicken | Red Paprika | Golden Corn | Capsicum | Serves 2-3.",
    price: 449,
    img: imgi37,
    type: "nonVeg",
    bestseller: true,
  },
  {
    id: 6,
    title: 'Chicken Mexicano [BIG 10"]',
    desc: "Herb Grilled Chicken | Spicy Jalapeno | Capsicum | Onion | Serves 2-3.",
    price: 499,
    img: imgi38,
    type: "nonVeg",
  },
  {
    id: 7,
    title: "Chicken Tikka [BIG 10'']",
    desc: "Chicken Tikka | Tomato | Onion | Serves 2-3.",
    price: 499,
    img: imgi39,
    type: "nonVeg",
    bestseller: true,
  },
  {
    id: 8,
    title: 'Double Trouble Chicken [BIG 10"]',
    desc: "Herb Grilled Chicken | Chicken Tikka | Black Olive | Capsicum | Serves 2-3.",
    price: 579,
    img: imgi40,
    type: "nonVeg",
    chefsSpecial: true,
  },
  {
    id: 9,
    title: "Fire Me Up Chicken [BIG 10'']",
    desc: "Spicy Peri Peri Chicken | Herb Chicken | Red Paprika | Spicy Jalepeno | Serves 2-3.",
    price: 579,
    img: imgi41,
    type: "nonVeg",
  },
  {
    id: 10,
    title: "Chicken Italiana [BIG 10'']",
    desc: "Garlic Roast Chicken | Smokey BBQ Chicken | Mushroom | Tomato | Serves 2-3.",
    price: 579,
    img: imgi42,
    type: "nonVeg",
  },
  {
    id: 11,
    title: 'Butter Chicken [BIG 10"]',
    desc: "Tandoori Chicken | Capsicum | Onion | Tomato [Comes with Makhni Sauce instead of Pizza Sauce] Serves 2-3.",
    price: 579,
    img: imgi43,
    type: "nonVeg",
    chefsSpecial: true,
  },
  {
    id: 12,
    title: "Mojo's Chicken Special [BIG 10'']",
    desc: "BBQ Chicken | Chicken Tikka | Herb Grilled Chicken | Mushroom | Spicy Jalapeno | Golden Corn | Tomato | Serves 2-3.",
    price: 649,
    img: imgi44,
    type: "nonVeg",
  },
  {
    id: 13,
    title: "Chicken Full Smash [BIG 10'']",
    desc: "Peri Peri Chicken | Chicken Tikka | Roast Chicken | Black Olive | Red Paprika | Capsicum | Onion | Serves 2-3.",
    price: 649,
    img: imgi45,
    type: "nonVeg",
    chefsSpecial: true,
  },
  {
    id: 14,
    title: "The Meat Eater [BIG 10'']",
    desc: "Garlic Roast Chicken | Herb Grilled Chicken | Peri Peri Chicken | Smokey BBQ Chicken | Serves 2-3.",
    price: 649,
    img: imgi46,
    type: "nonVeg",
    bestseller: true,
  },
  {
    id: 15,
    title: 'Mad Over Lamb [BIG 10"]',
    desc: "Lamb | Onion | Serves 2-3.",
    price: 649,
    img: imgi47,
    type: "nonVeg",
  },
];

export default function BigNonSection({ filter = "all" }) {
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
  const [selectedSize, setSelectedSize] = useState("big");
  const [selectedCrust, setSelectedCrust] = useState("panTossed");
  const [quantity, setQuantity] = useState(1);

  const handleAddClick = (combo) => {
    setSelectedPizza(combo);
    setShowModal(true);
    setQuantity(1);
    setSelectedSize("big");
    setSelectedCrust("panTossed");
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPizza(null);
  };

  const calculateTotal = () => {
    if (!selectedPizza) return 0;
    let total = selectedSize === "regular" ? selectedPizza.price - 100 : selectedPizza.price;
    if (selectedCrust === "cheeseBurst" || selectedCrust === "thinCrustCheeseBurst") {
      total += 50;
    }
    return total * quantity;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-6 text-center sm:text-left">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">
          BIG 10" Pizzas | Non-Veg
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-1">
          Go BIG with the 10-inch Pizzas. Loaded with juicy meat chunks, topped with melting cheese, & baked to perfection.
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

      {/* Modal with Image */}
      {showModal && selectedPizza && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[95vh] overflow-y-auto relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 font-bold text-2xl z-10 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow"
            >
              ×
            </button>

            <div className="grid md:grid-cols-2 gap-6 p-6">
              {/* Left Side - Image and Details */}
              <div>
                <div className="flex items-start gap-2 mb-3">
                  <img
                    src={nonVegIcon}
                    alt="non-veg"
                    className="w-5 h-5 object-contain mt-1"
                  />
                  <h2 className="text-xl font-bold text-gray-800">
                    {selectedPizza.title}
                  </h2>
                </div>

                <img
                  src={selectedPizza.img}
                  alt={selectedPizza.title}
                  className="w-full rounded-lg mb-4 object-cover"
                />

                <p className="text-gray-600 mb-4">{selectedPizza.desc}</p>

                <div className="flex items-center gap-4 mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    ₹{selectedPizza.price}
                  </span>
                  <div className="flex items-center border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1 text-lg font-semibold hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1 text-lg font-semibold hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Side - Options */}
              <div>
                <h3 className="font-semibold text-lg mb-3">Select a Size</h3>
                <div className="space-y-2 mb-6">
                  <label className="flex justify-between items-center border rounded-lg p-3 cursor-pointer hover:bg-gray-50">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="size"
                        value="regular"
                        checked={selectedSize === "regular"}
                        onChange={(e) => setSelectedSize(e.target.value)}
                        className="w-4 h-4"
                      />
                      <span>Regular (7")</span>
                    </div>
                    <span className="text-gray-700 font-medium">₹ {selectedPizza.price - 100}</span>
                  </label>
                  <label className="flex justify-between items-center border rounded-lg p-3 cursor-pointer hover:bg-gray-50">
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="size"
                        value="big"
                        checked={selectedSize === "big"}
                        onChange={(e) => setSelectedSize(e.target.value)}
                        className="w-4 h-4"
                      />
                      <span>Big (10")</span>
                    </div>
                    <span className="text-gray-700 font-medium">₹ {selectedPizza.price}</span>
                  </label>
                </div>

                <h3 className="font-semibold text-lg mb-3">Choice of Crust</h3>
                <div className="space-y-2 mb-6">
                  {[
                    { name: "Pan Tossed", value: "panTossed", price: 0 },
                    { name: "Thin Crust", value: "thinCrust", price: 0 },
                    { name: "Cheese Blast", value: "cheeseBurst", price: 50 },
                    { name: "Thin Crust Cheese Blast", value: "thinCrustCheeseBurst", price: 50 },
                  ].map((crust) => (
                    <label
                      key={crust.value}
                      className="flex justify-between items-center border rounded-lg p-3 cursor-pointer hover:bg-gray-50"
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="crust"
                          value={crust.value}
                          checked={selectedCrust === crust.value}
                          onChange={(e) => setSelectedCrust(e.target.value)}
                          className="w-4 h-4"
                        />
                        <span className="flex items-center gap-1">
                          <img src={vegIcon} alt="veg" className="w-4 h-4" />
                          {crust.name}
                        </span>
                      </div>
                      <span className="text-gray-700 font-medium">
                        ₹ {crust.price}
                      </span>
                    </label>
                  ))}
                </div>

                <h3 className="font-semibold text-lg mb-3">Make it a FEAST?</h3>
                <div className="space-y-2 mb-6">
                  {[
                    { name: "Nachos + Coke [250 ml]", price: 49, originalPrice: 69 },
                    { name: "Nachos + Thums Up [250 ml]", price: 49, originalPrice: 69 },
                    { name: "Nachos + Sprite [250 ml]", price: 49, originalPrice: 69 },
                    { name: "Chocolava + Coke [250 ml]", price: 79, originalPrice: 99 },
                    { name: "Chocolava + Thums Up [250 ml]", price: 79, originalPrice: 99 },
                    { name: "Chocolava + Sprite [250 ml]", price: 79, originalPrice: 99 },
                  ].map((addon, i) => (
                    <label
                      key={i}
                      className="flex justify-between items-center border rounded-lg p-3 cursor-pointer hover:bg-gray-50"
                    >
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" />
                        <span className="flex items-center gap-1">
                          <img src={vegIcon} alt="veg" className="w-4 h-4" />
                          {addon.name}
                        </span>
                      </div>
                      <span className="text-gray-700 font-medium">
                        <span className="line-through text-gray-400 text-sm mr-1">₹ {addon.originalPrice}</span>
                        ₹ {addon.price}
                      </span>
                    </label>
                  ))}
                </div>

                <h3 className="font-semibold text-lg mb-3">Veg Toppings</h3>
                <div className="space-y-2 mb-6">
                  {[
                    { name: "Paneer Cubes", price: 89 },
                    { name: "Mushrooms", price: 89 },
                    { name: "Black Olives", price: 79 },
                    { name: "Spicy Jalapenos", price: 69 },
                    { name: "Red Paprika", price: 69 },
                    { name: "Golden Corn", price: 69 },
                    { name: "Onion", price: 39 },
                    { name: "Tomato", price: 39 },
                    { name: "Capsicum", price: 39 },
                  ].map((topping, i) => (
                    <label
                      key={i}
                      className="flex justify-between items-center border rounded-lg p-3 cursor-pointer hover:bg-gray-50"
                    >
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" />
                        <span className="flex items-center gap-1">
                          <img src={vegIcon} alt="veg" className="w-4 h-4" />
                          {topping.name}
                        </span>
                      </div>
                      <span className="text-gray-700 font-medium">
                        ₹ {topping.price}
                      </span>
                    </label>
                  ))}
                </div>

                <h3 className="font-semibold text-lg mb-3">Non-Veg Toppings <span className="text-sm text-gray-500 font-normal">(optional)</span></h3>
                <div className="space-y-2 mb-6">
                  {[
                    { name: "Herb Grilled Chicken", price: 99 },
                    { name: "Spicy Peri Peri Chicken", price: 99 },
                    { name: "Chicken Tikka", price: 99 },
                  ].map((topping, i) => (
                    <label
                      key={i}
                      className="flex justify-between items-center border rounded-lg p-3 cursor-pointer hover:bg-gray-50"
                    >
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" />
                        <span className="flex items-center gap-1">
                          <img src={nonVegIcon} alt="non-veg" className="w-4 h-4" />
                          {topping.name}
                        </span>
                      </div>
                      <span className="text-gray-700 font-medium">
                        ₹ {topping.price}
                      </span>
                    </label>
                  ))}
                </div>

                <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 font-semibold text-lg">
                  ADD TO CART - ₹{calculateTotal()}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}