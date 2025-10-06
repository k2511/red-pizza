import React, { useState } from "react";
import imgi08 from "../assets/img/imgi08.jpg";
import imgi01 from "../assets/img/imgi01.jpg";
import imgi02 from "../assets/img/imgi02.jpg";
import imgi03 from "../assets/img/imgi03.jpg";
import imgi04 from "../assets/img/imgi04.jpg";
import imgi05 from "../assets/img/imgi05.jpg";
import imgi06 from "../assets/img/imgi06.jpg";
import imgi07 from "../assets/img/imgi07.jpg";


import vegIcon from "../assets/img/veg.png";
import nonVegIcon from "../assets/img/NV.png";

const comboData = [
  {
    id: 1,
    title: "Smoked Tandoori Chicken Wings",
    desc: "Wings with a Desi Zing! Classic chicken wings dunked in tandoori spices & smoked on grill. Take a break from the regular.",
    price: 229,
    img: imgi01,
    type: "NonVeg",
  },
  {
    id: 2,
    title: "Peri Peri Chicken Wings",
    desc: "Tender & juicy chicken wings rubbed with the supremely popular Peri Peri sauce. We're sure you'll love it peri much!",
    price: 229,
    img: imgi02,
    type: "NonVeg",
    bestseller: true,
  },
  {
    id: 3,
    title: 'Garlic Herb Chicken Wings',
    desc: "Doused in chef's special garlic & herb glaze, these chicken wings are abolutely worth a try.",
    price: 229,
    img: imgi03,
    type: "NonVeg",
  },
  {
    id: 4,
    title: 'Americano BBQ Chicken Wings',
    desc: "Let's get the party started with the dad of all chicken wings, glazed & grilled in the timeless BBQ Sauce.",
    price: 229,
    img: imgi04,
    type: "NonVeg",

  },
  {
    id: 5,
    title: 'Spicy Chicken Tikka [Boneless]',
    desc: "Tender chunks of chicken coated in marinade of curd and spices and grilled perfectly.",
    price: 299,
    img: imgi05,
    type: "NonVeg",
    bestseller: true,
  },
  {
    id: 6,
    title: 'Peri Peri Chicken [Boneless]',
    desc: "Tender and juicy chicken marinated in a peri peri marinade, and skewed on grill. So savoury, you'll keep craving for more!",
    price: 299,
    img: imgi06,
    type: "NonVeg",
    bestseller: true,
  },
  {
    id: 7,
    title: "Black Pepper Chicken [Boneless]",
    desc: "Juicy chicken cubes marinated in a creamy marinade, crushed black pepper & herbs. You're in for a delicious treat.",
    price: 299,
    img: imgi07,
    type: "NonVeg",
    
  },
  {
    id: 8,
    title: 'Smoky BBQ Chicken [Boneless]',
    desc: "Crispy and juicy, this BBQ grilled chicken is a lip-smacking combination of smoky flavours. Get set for a barbeque bash!",
    price: 299,
    img: imgi08,
    type: "NonVeg",

  },
];

export default function StarterSection() {
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
          Chicken Starters
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-1">
          Chicken wings & tikkas to satiate your meat cravings. Can't wait to get started?
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
