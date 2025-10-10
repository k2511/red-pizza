import React, { useState } from "react";
import imgi033 from "../assets/img/imgi033.jpg";
import imgi0034 from "../assets/img/imgi0034.jpg";
import imgi035 from "../assets/img/imgi035.jpg";
import imgi036 from "../assets/img/imgi036.jpg";
import imgi037 from "../assets/img/imgi037.jpg";
import imgi038 from "../assets/img/imgi038.jpg";
import imgi039 from "../assets/img/imgi039.jpg";
import imgi040 from "../assets/img/imgi040.jpg";
import imgi041 from "../assets/img/imgi041.jpg";
import imgi042 from "../assets/img/imgi042.jpg";
import imgi043 from "../assets/img/imgi043.jpg";
import imgi044 from "../assets/img/imgi044.jpg";
import imgi045 from "../assets/img/imgi045.jpg";
import imgi046 from "../assets/img/imgi046.jpg";

// Sample data
const comboData = [
    {
    id: 1,
    title: "Almond Butterscotch [LONDON]",
    desc: "Crunchy roasted almonds with creamy British butterscotch, this ice cream has it all to drive you NUTS!",
    price: 69,
    img: imgi033,
    type: "veg",
  },
  {
    id: 2,
    title: "Fine Chocolate Silk [SWISS]",
    desc: "Made from the finest cocoa beans from Switzerland, you'll love this chocolaty ice cream adventure.",
    price: 69,
    img: imgi0034,
    type: "veg",
  },
  {
    id: 3,
    title: "Choco-Cookies & Crème [NEW YORK]",
    desc: "Delicious chocolate cookie crumble swirled with real vanilla cream, this extravagant ice cream will take you all the way to New York.",
    price: 69,
    img: imgi035,
    type: "veg",
  },
  {
    id: 4,
    title: "Real Vanilla Bean [FRANCE]",
    desc: "Made of 100% real vanilla beans from the glorious France! We bet you'll forget the vanilla essenced ice creams after this.",
    price: 69,
    img: imgi036,
    type: "veg",
  },
  {
    id: 5,
    title: "Coffee Mocha Fudge [COLOMBIA]",
    desc: "World's best coffee beans from Colombia & a twist of gooey Chocolate cookies. This ice cream has it all to entice your taste buds!",
    price: 69,
    img: imgi037,
    type: "veg",
    bestseller: true,
  },
  {
    id: 6,
    title: "Chocolate Brownie Fudge [DUTCH]",
    desc: "Dense Dutch chocolate fudge with delectable brownie chunks. This ice cream is a treasure for chocolate lovers.",
    price: 89,
    img: imgi038,
    type: "veg",
    bestseller: true,
  },
  {
    id: 7,
    title: "Wild Forest Berries [CALIFORNIA]",
    desc: "Created with forest berries from California, this ice cream is one of a kind. Blueberry cream layer with chunks of cranberry and black currant. Berry-licious!",
    price: 89,
    img: imgi039,
    type: "veg",
  },
  {
    id: 8,
    title: "Dry Fruit Overload Kulfi [AFGHAN]",
    desc: "Rich malai kulfi ice cream mixed with Afghan's premium pistas, almonds & cashews. A delightful blend!",
    price: 89,
    img: imgi040,
    type: "veg",
  },
  {
    id: 9,
    title: "Chocolate Hazelnut Chunks [TURKEY]",
    desc: "Extraordinary hazelnuts from Turkey mixed in rich & creamy chocolate ice cream. It's melt-in-the-mouth, it's nutty, it's irresistible!",
    price: 89,
    img: imgi041,
    type: "veg",
  },
  {
    id: 10,
    title: "Nutella Heaven [ITALY]",
    desc: "Authentic Nutella from the lanes of Italy, turned into an ice cream. Heaven in a scoop for all chocoholics!",
    price: 89,
    img: imgi042,
    type: "veg",
  },
  {
    id: 11,
    title: "Death By Chocolate [BELGIUM]",
    desc: "Finely crafted Belgian chocolate with choco-cookie chunks, white & dark chocolate chips & chocolate fudge sauce. This ice cream screams chocolate!",
    price: 99,
    img: imgi043,
    type: "veg",
  },
  {
    id: 12,
    title: "Red Velvet Cheesecake [SAN FRANCISCO]",
    desc: "Soft red velvet cake wrapped in smooth cream cheese, an ice cream that will give you the San Francisco feels!",
    price: 99,
    img: imgi044,
    type: "veg",
  },
  {
    id: 13,
    title: "100% Real Kesar Pista [KASHMIR]",
    desc: "Kashmir's 100% real saffron, premium pistachios & cashews. No artificial flavours. This ice cream is a royal feast!",
    price: 99,
    img: imgi046,
    type: "veg",
  },
  {
    id: 14,
    title: "Blueberry Cheesecake [GREECE]",
    desc: "Fresh, tarty blueberries smothered in fine Greek cheesecake. Silklike smooth and super creamy, this ice cream is like no other!",
    price: 99,
    img: imgi045,
    type: "veg",
    bestseller:true,
  },
];

// Veg Icon Component
const VegIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" stroke="#0f9d58" strokeWidth="2" fill="none" />
    <circle cx="12" cy="12" r="6" fill="#0f9d58" />
  </svg>
);

// Non-Veg Icon Component
const NonVegIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" stroke="#d32f2f" strokeWidth="2" fill="none" />
    <circle cx="12" cy="12" r="6" fill="#d32f2f" />
  </svg>
);

// Ice Cream Modal Component
function IceCreamModal({ item, onClose }) {
  const [selectedSize, setSelectedSize] = useState("solo");
  const [quantity, setQuantity] = useState(1);

  const sizes = [
    { id: "solo", name: "Solo Tub [140 ML DoubleXL Scoop]", price: 99 },
    { id: "family", name: "Family Tub [550 ML]", price: 329 },
  ];

  const currentPrice = sizes.find((s) => s.id === selectedSize)?.price || 99;
  const totalPrice = currentPrice * quantity;

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    console.log({
      item: item.title,
      size: selectedSize,
      quantity,
      pricePerUnit: currentPrice,
      totalPrice: totalPrice,
    });
    alert(`Added ${quantity}x ${item.title} (${sizes.find(s => s.id === selectedSize)?.name}) to cart!\nTotal: ₹${totalPrice}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-3 sm:px-4 z-50" onClick={onClose}>
      <div className="bg-white rounded-xl w-full max-w-5xl max-h-[95vh] overflow-y-auto relative shadow-2xl" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-700 font-bold text-3xl sm:text-4xl leading-none z-10 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
        >
          ×
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Left Section - Image & Details */}
          <div className="md:w-1/2 p-2 sm:p-6 lg:p-6 bg-gray-50 border-b md:border-b-0 md:border-r border-gray-200">
            <div className="flex items-start gap-2 mb-4">
              {item.type.toLowerCase() === "veg" ? <VegIcon /> : <NonVegIcon />}
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 leading-tight">
                {item.title}
              </h2>
            </div>

            {/* Product Image */}
            <div className="mb-4 sm:mb-6 rounded-lg overflow-hidden bg-white shadow-sm">
              <img
                src={item.img}
                alt={item.title}
                className="w-50 h-48 sm:h-44 lg:h-60 "
              />
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
              {item.desc}
            </p>

            {/* Price & Quantity */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                ₹ {currentPrice}
              </span>

              <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 text-lg sm:text-xl font-semibold text-gray-600 hover:bg-gray-100 transition active:bg-gray-200"
                >
                  -
                </button>
                <span className="px-4 sm:px-6 py-1.5 sm:py-2 text-base sm:text-lg font-semibold text-gray-900 bg-white min-w-[50px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 text-lg sm:text-xl font-semibold text-gray-600 hover:bg-gray-100 transition active:bg-gray-200"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Right Section - Size Selection */}
          <div className="md:w-1/2 p-4 sm:p-6 lg:p-8 flex flex-col">
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-4 sm:mb-6">
              Select a Size
            </h3>

            {/* Size Options */}
            <div className="space-y-3 sm:space-y-4 flex-grow">
              {sizes.map((size) => (
                <label
                  key={size.id}
                  className={`flex items-center justify-between p-3 sm:p-4 border-2 rounded-lg cursor-pointer transition ${
                    selectedSize === size.id
                      ? " bg-red-50"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <input
                        type="radio"
                        name="size"
                        value={size.id}
                        checked={selectedSize === size.id}
                        onChange={() => setSelectedSize(size.id)}
                        className="w-5 h-5 accent-red-500 cursor-pointer"
                      />
                    </div>
                    <span className="text-xs sm:text-sm lg:text-base font-medium text-gray-800">
                      {size.name}
                    </span>
                  </div>
                  <span className="text-sm sm:text-base lg:text-lg font-bold text-gray-900">
                    ₹ {size.price}
                  </span>
                </label>
              ))}
            </div>

            {/* Total Price Display */}
            {quantity > 1 && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4 mt-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-gray-700 font-medium">
                    Total Price ({quantity} items)
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-red-600">
                    ₹ {totalPrice}
                  </span>
                </div>
              </div>
            )}

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-red-500 text-white py-3 sm:py-4 rounded-lg  font-bold text-sm sm:text-base lg:text-lg transition mt-4 sm:mt-6 shadow-lg hover:shadow-xl"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Component
export default function IceSection() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleAddClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-4 sm:py-8">
      {/* Header */}
      <div className="mb-5 text-center sm:text-left">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
          Ice creams by Globo
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-1 leading-snug">
          Premium flavours made with the finest ingredients from around the
          world, these ice creams are an experience to have.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
        {comboData.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-sm rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition relative"
          >
            {/* Bestseller Tag */}
            {item.bestseller && (
              <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded z-10">
                Bestseller
              </div>
            )}

            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-40 sm:h-48 object-cover"
            />

            {/* Details */}
            <div className="p-3 sm:p-4 flex flex-col justify-between min-h-[180px]">
              <h3 className="text-gray-800 font-semibold text-sm sm:text-base mb-1 flex items-center gap-2">
                {item.type.toLowerCase() === "veg" ? <VegIcon /> : <NonVegIcon />}
                {item.title}
              </h3>

              <p className="text-gray-500 text-xs sm:text-sm mb-3 leading-snug">
                {item.desc}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-gray-900 font-semibold text-sm sm:text-base">
                  ₹{item.price}
                </span>
                <button
                  className="bg-red-500 text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-lg hover:bg-red-600 active:bg-red-700 text-xs sm:text-sm font-semibold transition"
                  onClick={() => handleAddClick(item)}
                >
                  + Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && selectedItem && (
        <IceCreamModal item={selectedItem} onClose={closeModal} />
      )}
    </div>
  );
}


















