
// import React, { useState } from "react";
// import imgi13 from "../assets/img/imgi13.jpg";
// import imgi14 from "../assets/img/imgi14.jpg";
// import imgi15 from "../assets/img/imgi15.jpg";
// import imgi16 from "../assets/img/imgi16.jpg";
// import vegIcon from "../assets/img/veg.png";
// import nonVegIcon from "../assets/img/NV.png";

// const comboData = [
//   { id: 1, title: 'VEG Big 10" Make Your Own Pizza', desc: "[Serves 2-3] You choose, we make! Get your customized pizza; just start selecting your favourite toppings & crust.", price: 489, img: imgi13, type: "veg" },
//   { id: 2, title: 'VEG Regular 7" Make Your Own Pizza', desc: "[Serves 1] Satisfy your solo cravings by making your own pizza with your choice of veg toppings & crust.", price: 279, img: imgi14, type: "veg" },
//   { id: 3, title: 'NON VEG Big 10" Make Your Own Pizza', desc: "[Serves 2-3] Make a pizza by choosing your favourite non-veg toppings & crust. Go ahead, you have a great choice!", price: 489, img: imgi15, type: "nonveg" },
//   { id: 4, title: 'NON VEG Regular 7" Make Your Own Pizza', desc: "[Serves 1] Make your own treat! Just choose the toppings & crust. Your personal pizza with your personal favourites!", price: 279, img: imgi16, type: "nonveg" },
// ];

// export default function OwnSection({ filter = "all" }) {
//   const filteredItems = comboData.filter((item) => {
//     if (filter === "all") return true;
//     if (filter === "veg") return item.type === "veg";
//     if (filter === "nonveg") return item.type === "nonveg";
//     return true;
//   });

//   const [selectedPizza, setSelectedPizza] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   const handleAddClick = (combo) => {
//     setSelectedPizza(combo);
//     setShowModal(true);
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setSelectedPizza(null);
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-3 sm:px-6 py-4 sm:py-8">
//       {/* Header */}
//       <div className="mb-5 text-center sm:text-left">
//         <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
//           Make Your Own Pizza
//         </h2>
//         <p className="text-gray-600 text-sm sm:text-base mt-1 leading-snug">
//           Your pizza, your way! Pick your favourite toppings & crust, and we'll make a pizza, just as you like it. Get, set, pick!
//         </p>
//       </div>

//       {/* Combo Cards */}
//       <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
//         {filteredItems.map((combo) => (
//           <div
//             key={combo.id}
//             className="bg-white shadow-sm rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition"
//           >
//             <img src={combo.img} alt={combo.title} className="w-full h-40 sm:h-48 object-cover" />
//             <div className="p-3 sm:p-4 flex flex-col justify-between min-h-[180px]">
//               <h3 className="text-gray-800 font-semibold text-sm sm:text-base mb-1 flex items-center gap-2">
//                 <img
//                   src={combo.type === "veg" ? vegIcon : nonVegIcon}
//                   alt={combo.type}
//                   className="w-4 h-4 object-contain"
//                 />
//                 {combo.title}
//               </h3>
//               <p className="text-gray-500 text-xs sm:text-sm mb-3 leading-snug">{combo.desc}</p>
//               <div className="flex items-center justify-between mt-auto">
//                 <span className="text-gray-900 font-semibold text-sm sm:text-base">₹{combo.price}</span>
//                 <button
//                   className="bg-red-500 text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-lg hover:bg-red-600 text-xs sm:text-sm font-semibold transition"
//                   onClick={() => handleAddClick(combo)}
//                 >
//                   + Add
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal Section */}
//       {showModal && selectedPizza && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-3 sm:px-0 z-50">
//           <div className="bg-white rounded-xl w-full max-w-md sm:max-w-lg md:max-w-2xl max-h-[90vh] overflow-y-auto relative p-4 sm:p-6 shadow-lg">
//             <button
//               onClick={closeModal}
//               className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 font-bold text-2xl leading-none"
//             >
//               ×
//             </button>

//             <h2 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 mt-4 sm:mt-2">
//               {selectedPizza.title} – ₹{selectedPizza.price}
//             </h2>

//             <div className="flex flex-col sm:flex-row items-stretch gap-3 mb-5">
//               <button className="flex-1 border-2 border-orange-500 text-orange-500 rounded-lg p-3 text-sm sm:text-base text-center hover:bg-orange-50 transition">
//                 + Choose First Pizza
//               </button>
//               <button className="flex-1 border-2 border-dashed border-gray-400 text-gray-500 rounded-lg p-3 text-sm sm:text-base text-center hover:bg-gray-50 transition">
//                 + Choose Second Pizza
//               </button>
//             </div>

//             <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Select Crust</h3>
//             <div className="space-y-2 mb-5 sm:mb-6">
//               {[{ name: "Pan Tossed", price: 0 }, { name: "Thin Crust", price: 0 }, { name: "Cheese Burst", price: 50 }, { name: "Thin Crust Cheese Burst", price: 50 }].map((crust, i) => (
//                 <label key={i} className="flex justify-between items-center border-b py-2 cursor-pointer hover:bg-gray-50 rounded text-sm sm:text-base">
//                   <div>
//                     <input type="radio" name="crust" className="mr-2" />
//                     {crust.name}
//                   </div>
//                   <span className="text-gray-600 font-medium">+ ₹{crust.price}</span>
//                 </label>
//               ))}
//             </div>

//             <h3 className="font-semibold mb-3 text-sm sm:text-base">Select Type</h3>
//             <div className="flex flex-wrap gap-2 mb-6">
//               {["Both", "Veg", "Non-Veg"].map((type, idx) => (
//                 <button
//                   key={idx}
//                   className={`px-3 sm:px-4 py-1.5 rounded-full border text-sm sm:text-base ${
//                     type === "Both"
//                       ? "bg-black text-white"
//                       : "text-gray-700 hover:bg-gray-100"
//                   }`}
//                 >
//                   {type}
//                 </button>
//               ))}
//             </div>

//             <div className="flex flex-col sm:flex-row justify-between items-center gap-3 border-t pt-3">
//               <span className="text-gray-700 font-medium text-sm sm:text-base">Items Added 0/2</span>
//               <button className="w-full sm:w-auto bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 font-semibold text-sm sm:text-base">
//                 Next ₹{selectedPizza.price}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


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

export default function OwnSection({ filter = "all", searchTerm = "" }) {
  const filteredItems = comboData.filter((item) => {
    const type = item.type.toLowerCase();

    const categoryMatch =
      filter === "all" ||
      (filter === "veg" && type === "veg") ||
      (filter === "nonveg" && type === "nonveg");

    const searchMatch =
      searchTerm === "" ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchTerm.toLowerCase());

    return categoryMatch && searchMatch;
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
          <div className="bg-white rounded-xl w-full max-w-md sm:max-w-lg md:max-w-2xl max-h-[90vh] overflow-y-auto relative p-4 sm:p-6 shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 font-bold text-2xl leading-none"
            >
              ×
            </button>

            <h2 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 mt-4 sm:mt-2">
              {selectedPizza.title} – ₹{selectedPizza.price}
            </h2>

            <div className="flex flex-col sm:flex-row items-stretch gap-3 mb-5">
              <button className="flex-1 border-2 border-orange-500 text-orange-500 rounded-lg p-3 text-sm sm:text-base text-center hover:bg-orange-50 transition">
                + Choose First Pizza
              </button>
              <button className="flex-1 border-2 border-dashed border-gray-400 text-gray-500 rounded-lg p-3 text-sm sm:text-base text-center hover:bg-gray-50 transition">
                + Choose Second Pizza
              </button>
            </div>

            <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Select Crust</h3>
            <div className="space-y-2 mb-5 sm:mb-6">
              {[{ name: "Pan Tossed", price: 0 }, { name: "Thin Crust", price: 0 }, { name: "Cheese Burst", price: 50 }, { name: "Thin Crust Cheese Burst", price: 50 }].map((crust, i) => (
                <label key={i} className="flex justify-between items-center border-b py-2 cursor-pointer hover:bg-gray-50 rounded text-sm sm:text-base">
                  <div>
                    <input type="radio" name="crust" className="mr-2" />
                    {crust.name}
                  </div>
                  <span className="text-gray-600 font-medium">+ ₹{crust.price}</span>
                </label>
              ))}
            </div>

            <h3 className="font-semibold mb-3 text-sm sm:text-base">Select Type</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Both", "Veg", "Non-Veg"].map((type, idx) => (
                <button
                  key={idx}
                  className={`px-3 sm:px-4 py-1.5 rounded-full border text-sm sm:text-base ${
                    type === "Both"
                      ? "bg-black text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 border-t pt-3">
              <span className="text-gray-700 font-medium text-sm sm:text-base">Items Added 0/2</span>
              <button className="w-full sm:w-auto bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 font-semibold text-sm sm:text-base">
                Next ₹{selectedPizza.price}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

