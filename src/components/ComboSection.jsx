import React, { useState } from "react";
import imgi8 from "../assets/img/imgi8.jpg";
import imgi9 from "../assets/img/imgi9.jpg";
import vegIcon from "../assets/img/veg.png";

const comboData = [
  {
    id: 1,
    title: '2 Regular 7" Pizzas @ 119 each',
    desc: "[Serves 2] Get any 2 Regular 7'' Pizzas at just ₹119 each.",
    price: 238,
    oldPrice: 400,
    img: imgi8,
    type: "veg",
    bestseller: true,
  },
  {
    id: 2,
    title: '2 Big 10" Pizzas @ 199 each',
    desc: "[Serves 4] Get any 2 Big 10'' Pizzas at just ₹199 each.",
    price: 398,
    oldPrice: 600,
    img: imgi9,
    type: "veg",
    chefsSpecial: true,
  },
];

export default function ComboSection({ filter }) {
  // ✅ Use comboData instead of categories
  const filteredItems = comboData.filter((item) => {
    if (filter === "all") return true;
    if (filter === "veg") return item.type === "veg";
    if (filter === "nonveg") return item.type === "nonveg";
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
      <div className="mb-4">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">
          1 PLUS 1 @ ₹119 EACH
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Any 2 Regular 7'' Pizzas @ just ₹119 each. Any 2 Big 10'' Pizzas @ just ₹199 each.
          No more choosing b/w favourites – get 'em both!
        </p>
      </div>

      {/* ✅ Use filteredItems instead of comboData */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {filteredItems.map((combo) => (
          <div
            key={combo.id}
            className="bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-lg transition"
          >
            <img src={combo.img} alt={combo.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-gray-800 font-semibold text-base mb-1 flex items-center gap-2">
                <img src={vegIcon} alt="veg" className="w-4 h-4 object-contain" />
                {combo.title}
              </h3>
              <p className="text-gray-500 text-sm mb-3">{combo.desc}</p>

              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-gray-800 font-semibold text-base">
                    ₹{combo.price}
                  </span>
                  <span className="text-gray-400 line-through text-xs">
                    ₹{combo.oldPrice}
                  </span>
                </div>

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
            {/* Modal content unchanged */}
          </div>
        </div>
      )}
    </div>
  );
}
