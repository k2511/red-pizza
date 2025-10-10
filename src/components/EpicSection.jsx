
// import React, { useState } from "react";
// import imgi50 from "../assets/img/imgi50.jpg";
// import imgi51 from "../assets/img/imgi51.jpg";
// import imgi52 from "../assets/img/imgi52.jpg";
// import imgi53 from "../assets/img/imgi53.jpg";
// import imgi54 from "../assets/img/imgi54.jpg";

// import vegIcon from "../assets/img/veg.png";
// import nonVegIcon from "../assets/img/NV.png";

// const comboData = [
//   {
//     id: 1,
//     title: 'Any Big 10" Pizza + Any Garlic Breadsticks [FREE Coke & Choco Lava Cake]',
//     desc: "Get Drink & Choco Lava Cake worth Rs. 120 FREE. All other offers applicable on this combo.",
//     price: 499,
//     img: imgi50,
//     type: "veg",
//   },
//   {
//     id: 2,
//     title: 'Any Big 10" Pizza + Any Starter [FREE Coke & Choco Lava Cake]',
//     desc: "Get Drink & Choco Lava Cake worth Rs. 120 FREE. All other offers applicable on this combo.",
//     price: 529,
//     img: imgi51,
//     type: "veg",
//   },
//   {
//     id: 3,
//     title: 'Any 2 Big 10" Pizzas [FREE Coke & Choco Lava Cake]',
//     desc: "Get Drink & Choco Lava Cake worth Rs. 120 FREE. All other offers applicable on this combo.",
//     price: 699,
//     img: imgi52,
//     type: "veg",
//   },
//   {
//     id: 4,
//     title: 'Any 2 Regular 7" Pizza + Any Garlic Breadsticks [FREE Coke & Choco Lava Cake]',
//     desc: "Get Drink & Choco Lava Cake worth Rs. 120 FREE. All other offers applicable on this combo.",
//     price: 549,
//     img: imgi53,
//     type: "veg",
//     bestseller: true,
//   },
//   {
//     id: 5,
//     title: 'Any 2 Regular 7" Pizza + Any Starter [FREE Coke & Choco Lava Cake]',
//     desc: "Get Drink & Choco Lava Cake worth Rs. 120 FREE. All other offers applicable on this combo.",
//     price: 579,
//     img: imgi54,
//     type: "veg",
//   },
// ];

// export default function EpicSection({ filter = "all" }) {
//   // ✅ Filter comboData
//   const filteredItems = comboData.filter((item) => {
//     const type = item.type.toLowerCase();
//     if (filter === "all") return true;
//     if (filter === "veg") return type === "veg";
//     if (filter === "nonveg") return type === "nonveg";
//     if (filter === "bestseller") return item.bestseller;
//     if (filter === "chefsSpecial") return item.chefsSpecial;
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
//     <div className="max-w-7xl mx-auto px-4 py-6">
//       {/* Header */}
//       <div className="mb-6 text-center sm:text-left">
//         <h2 className="text-lg sm:text-xl font-bold text-gray-800">
//           Epic Combos [FREE items of ₹120]
//         </h2>
//         <p className="text-gray-600 text-sm sm:text-base mt-1">
//           All other offers applicable on Epic Combos. Get your party hat on!
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//         {filteredItems.map((combo) => (
//           <div
//             key={combo.id}
//             className="bg-white shadow-md rounded-xl overflow-hidden border hover:shadow-lg transition relative"
//           >
//             {/* Bestseller Tag */}
//             {combo.bestseller && (
//               <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
//                 Bestseller
//               </div>
//             )}

//             {/* Image */}
//             <img
//               src={combo.img}
//               alt={combo.title}
//               className="w-full h-48 object-cover"
//             />

//             {/* Details */}
//             <div className="p-4 flex flex-col justify-between h-[180px]">
//               <h3 className="text-gray-800 font-semibold text-base mb-1 flex items-center gap-2">
//                 <img
//                   src={combo.type.toLowerCase() === "veg" ? vegIcon : nonVegIcon}
//                   alt={combo.type}
//                   className="w-4 h-4 object-contain"
//                 />
//                 {combo.title}
//               </h3>

//               <p className="text-gray-500 text-sm mb-3 leading-snug">
//                 {combo.desc}
//               </p>

//               <div className="flex items-center justify-between mt-auto">
//                 <span className="text-gray-900 font-semibold text-base">
//                   ₹{combo.price}
//                 </span>
//                 <button
//                   className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 text-sm font-semibold transition"
//                   onClick={() => handleAddClick(combo)}
//                 >
//                   + Add
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {showModal && selectedPizza && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 w-11/12 sm:w-3/4 md:w-1/2 max-h-[90vh] overflow-y-auto relative">
//             <button
//               onClick={closeModal}
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 font-bold text-xl"
//             >
//               ×
//             </button>

//             <h2 className="text-lg font-bold mb-2">
//               {selectedPizza.title} – ₹{selectedPizza.price}
//             </h2>

//             <h3 className="font-semibold mb-3">Select Crust</h3>
//             <div className="space-y-2 mb-6">
//               {[
//                 { name: "Pan Tossed", price: 0 },
//                 { name: "Thin Crust", price: 0 },
//                 { name: "Cheese Burst", price: 50 },
//                 { name: "Thin Crust Cheese Burst", price: 50 },
//               ].map((crust, i) => (
//                 <label
//                   key={i}
//                   className="flex justify-between items-center border-b py-2 cursor-pointer hover:bg-gray-50 rounded"
//                 >
//                   <div>
//                     <input type="radio" name="crust" className="mr-2" />
//                     {crust.name}
//                   </div>
//                   <span className="text-gray-600 font-medium">
//                     + ₹{crust.price}
//                   </span>
//                 </label>
//               ))}
//             </div>

//             <div className="flex justify-between items-center mt-4 border-t pt-4">
//               <span className="text-gray-700 font-medium">Items Added 0/2</span>
//               <button className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 font-semibold">
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
import imgi50 from "../assets/img/imgi50.jpg";
import imgi51 from "../assets/img/imgi51.jpg";
import imgi52 from "../assets/img/imgi52.jpg";
import imgi53 from "../assets/img/imgi53.jpg";
import imgi54 from "../assets/img/imgi54.jpg";

import vegIcon from "../assets/img/veg.png";
import nonVegIcon from "../assets/img/NV.png";

const comboData = [
  {
    id: 1,
    title: 'Any Big 10" Pizza + Any Garlic Breadsticks [FREE Coke & Choco Lava Cake]',
    desc: "Get Drink & Choco Lava Cake worth Rs. 120 FREE. All other offers applicable on this combo.",
    price: 499,
    img: imgi50,
    type: "veg",
  },
  {
    id: 2,
    title: 'Any Big 10" Pizza + Any Starter [FREE Coke & Choco Lava Cake]',
    desc: "Get Drink & Choco Lava Cake worth Rs. 120 FREE. All other offers applicable on this combo.",
    price: 529,
    img: imgi51,
    type: "veg",
  },
  {
    id: 3,
    title: 'Any 2 Big 10" Pizzas [FREE Coke & Choco Lava Cake]',
    desc: "Get Drink & Choco Lava Cake worth Rs. 120 FREE. All other offers applicable on this combo.",
    price: 699,
    img: imgi52,
    type: "veg",
  },
  {
    id: 4,
    title: 'Any 2 Regular 7" Pizza + Any Garlic Breadsticks [FREE Coke & Choco Lava Cake]',
    desc: "Get Drink & Choco Lava Cake worth Rs. 120 FREE. All other offers applicable on this combo.",
    price: 549,
    img: imgi53,
    type: "veg",
    bestseller: true,
  },
  {
    id: 5,
    title: 'Any 2 Regular 7" Pizza + Any Starter [FREE Coke & Choco Lava Cake]',
    desc: "Get Drink & Choco Lava Cake worth Rs. 120 FREE. All other offers applicable on this combo.",
    price: 579,
    img: imgi54,
    type: "veg",
  },
];

export default function EpicSection({ filter = "all" }) {
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

  const handleAddClick = (combo) => {
    setSelectedPizza(combo);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPizza(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6">
      {/* Header */}
      <div className="mb-6 text-center sm:text-left">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">
          Epic Combos [FREE items of ₹120]
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-1">
          All other offers applicable on Epic Combos. Get your party hat on!
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {filteredItems.map((combo) => (
          <div
            key={combo.id}
            className="bg-white shadow-md rounded-xl overflow-hidden border hover:shadow-lg transition relative flex flex-col"
          >
            {/* Bestseller Tag */}
            {combo.bestseller && (
              <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
                Bestseller
              </div>
            )}

            {/* Image */}
            <img
              src={combo.img}
              alt={combo.title}
              className="w-full h-40 sm:h-48 object-cover"
            />

            {/* Details */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-gray-800 font-semibold text-sm sm:text-base mb-1 flex items-center gap-2">
                <img
                  src={combo.type.toLowerCase() === "veg" ? vegIcon : nonVegIcon}
                  alt={combo.type}
                  className="w-4 h-4 object-contain"
                />
                {combo.title}
              </h3>

              <p className="text-gray-500 text-xs sm:text-sm mb-3 leading-snug line-clamp-3">
                {combo.desc}
              </p>

              {/* Price & Add Button */}
              <div className="mt-auto flex items-center justify-between pt-3 border-t">
                <span className="text-gray-900 font-semibold text-base sm:text-lg">
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

      {/* Modal */}
      {showModal && selectedPizza && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-2">
          <div className="bg-white rounded-lg p-5 sm:p-6 w-full max-w-md max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 font-bold text-2xl"
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
              <span className="text-gray-700 font-medium text-sm sm:text-base">
                Items Added 0/2
              </span>
              <button className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 font-semibold text-sm sm:text-base">
                Next ₹{selectedPizza.price}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
