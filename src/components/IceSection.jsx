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

import vegIcon from "../assets/img/veg.png";
import nonVegIcon from "../assets/img/NV.png"; // Added missing import

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
    title: 'Choco-Cookies & Crème [NEW YORK]',
    desc: "Delicious chocolate cookie crumble swirled with real vanilla cream, this extravagant ice cream will take you all the way to New York.",
    price: 69,
    img: imgi035,
    type: "veg",
  },
  {
    id: 4,
    title: 'Real Vanilla Bean [FRANCE]',
    desc: "Made of 100% real vanilla beans from the glorious France! We bet you'll forget the vanilla essenced ice creams after this.",
    price: 69,
    img: imgi036,
    type: "veg",
  },
  {
    id: 5,
    title: 'Coffee Mocha Fudge [COLOMBIA]',
    desc: "World's best coffee beans from Colombia & a twist of gooey Chocolate cookies. This ice cream has it all to entice your taste buds!",
    price: 69,
    img: imgi037,
    type: "veg",
    bestseller: true,
  },
  {
    id: 6,
    title: 'Chocolate Brownie Fudge [DUTCH]',
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
    title: 'Dry Fruit Overload Kulfi [AFGHAN]',
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
    title: 'Death By Chocolate [BELGIUM]',
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
    img: imgi045,
    type: "veg",

  },
  {
    id: 14,
    title: "Blueberry Cheesecake [GREECE]",
    desc: "Fresh, tarty blueberries smothered in fine Greek cheesecake. Silklike smooth and super creamy, this ice cream is like no other!",
    price: 99,
    img: imgi046,
    type: "veg",
  },
];

export default function IceSection({ filter }) {
  // Fixed filter: use comboData instead of undefined categories
  const filteredItems = comboData.filter((item) => {
    if (filter === "all") return true;
    if (filter === "veg") return item.type.toLowerCase() === "veg";
    if (filter === "nonveg") return item.type.toLowerCase() === "nonveg";
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
          Ice creams by Globo
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-1">
          Premium flavours made with the finest ingredients from around the world, these ice creams are an experience to have.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {filteredItems.map((combo) => (
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
