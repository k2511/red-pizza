// import React, { useState } from "react";
// import imgi011 from "../assets/img/imgi011.jpg";
// import imgi012 from "../assets/img/imgi012.jpg";
// import imgi013 from "../assets/img/imgi013.jpg";
// import imgi014 from "../assets/img/imgi014.jpg";

// import vegIcon from "../assets/img/veg.png";
// import nonVegIcon from "../assets/img/NV.png";

// const comboData = [
//   {
//     id: 1,
//     title: "Smoked Potato Skewers [10 Pcs]",
//     desc: "Baby potatoes marinated in a smoky tikka sauce & grilled to perfection. Get the party started!",
//     price: 199,
//     img: imgi011,
//     type: "veg",
//   },
//   {
//     id: 2,
//     title: "Peri Peri Potato Skewers [10 Pcs]",
//     desc: "Pieces of baby potatoes marinated in a spicy peri peri sauce & fire-roasted! Peri peri tasty!",
//     price: 199,
//     img: imgi012,
//     type: "veg",
//   },
//   {
//     id: 3,
//     title: 'Paneer Smoked Skewers [10 Pcs]',
//     desc: "Paneer cubes blended in a finger-licking tikka marinade, skewed and grilled to attain the classic smoky flavour.",
//     price: 249,
//     img: imgi013,
//     type: "veg",
//     bestseller: true,
//   },
//   {
//     id: 4,
//     title: 'Paneer Peri Peri Skewers [10 Pcs]',
//     desc: "Succulent Paneer chunks wrapped in a blazing Peri Peri sauce, grilled to an enticing golden-brown. Not for the faint-hearted!",
//     price: 249,
//     img: imgi014,
//     type: "veg",
//   },
// ];

// export default function VegStarterSection({ filter }) {
//   // Use comboData instead of undefined categories
//   const filteredItems = comboData.filter((item) => {
//     if (filter === "all") return true;
//     if (filter === "veg") return item.type.toLowerCase() === "veg";
//     if (filter === "nonveg") return item.type.toLowerCase() === "nonveg";
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
//           Veg Starters
//         </h2>
//         <p className="text-gray-600 text-sm sm:text-base mt-1">
//           Perfect plus-ones for your pizza! Delicious starters that will turn any gathering into a party!
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

//             {/* Chef’s Special Tag */}
//             {combo.chefsSpecial && (
//               <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
//                 Chef’s Special
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
import imgi011 from "../assets/img/imgi011.jpg";
import imgi012 from "../assets/img/imgi012.jpg";
import imgi013 from "../assets/img/imgi013.jpg";
import imgi014 from "../assets/img/imgi014.jpg";

import vegIcon from "../assets/img/veg.png";
import nonVegIcon from "../assets/img/NV.png";

const comboData = [
  {
    id: 1,
    title: "Smoked Potato Skewers [10 Pcs]",
    desc: "Baby potatoes marinated in a smoky tikka sauce & grilled to perfection. Get the party started!",
    price: 199,
    img: imgi011,
    type: "veg",
  },
  {
    id: 2,
    title: "Peri Peri Potato Skewers [10 Pcs]",
    desc: "Pieces of baby potatoes marinated in a spicy peri peri sauce & fire-roasted! Peri peri tasty!",
    price: 199,
    img: imgi012,
    type: "veg",
  },
  {
    id: 3,
    title: 'Paneer Smoked Skewers [10 Pcs]',
    desc: "Paneer cubes blended in a finger-licking tikka marinade, skewed and grilled to attain the classic smoky flavour.",
    price: 249,
    img: imgi013,
    type: "veg",
    bestseller: true,
  },
  {
    id: 4,
    title: 'Paneer Peri Peri Skewers [10 Pcs]',
    desc: "Succulent Paneer chunks wrapped in a blazing Peri Peri sauce, grilled to an enticing golden-brown. Not for the faint-hearted!",
    price: 249,
    img: imgi014,
    type: "veg",
  },
];

export default function VegStarterSection({ filter = "all", searchTerm = "" }) {
  const filteredItems = comboData.filter((item) => {
    const type = item.type.toLowerCase();

    const categoryMatch =
      filter === "all" ||
      (filter === "veg" && type === "veg") ||
      (filter === "nonveg" && type === "nonveg") ||
      (filter === "bestseller" && item.bestseller) ||
      (filter === "chefsSpecial" && item.chefsSpecial);

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
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-6 text-center sm:text-left">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">Veg Starters</h2>
        <p className="text-gray-600 text-sm sm:text-base mt-1">
          Perfect plus-ones for your pizza! Delicious starters that will turn any gathering into a party!
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
                Chef’s Special
              </div>
            )}
            <img src={combo.img} alt={combo.title} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-col justify-between h-[180px]">
              <h3 className="text-gray-800 font-semibold text-base mb-1 flex items-center gap-2">
                <img
                  src={combo.type === "veg" ? vegIcon : nonVegIcon}
                  alt={combo.type}
                  className="w-4 h-4 object-contain"
                />
                {combo.title}
              </h3>
              <p className="text-gray-500 text-sm mb-3 leading-snug">{combo.desc}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-gray-900 font-semibold text-base">₹{combo.price}</span>
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
            <h2 className="text-lg font-bold mb-2">{selectedPizza.title} – ₹{selectedPizza.price}</h2>
            <h3 className="font-semibold mb-3">Select Crust</h3>
            <div className="space-y-2 mb-6">
              {[{ name: "Pan Tossed", price: 0 }, { name: "Thin Crust", price: 0 }, { name: "Cheese Burst", price: 50 }, { name: "Thin Crust Cheese Burst", price: 50 }].map(
                (crust, i) => (
                  <label
                    key={i}
                    className="flex justify-between items-center border-b py-2 cursor-pointer hover:bg-gray-50 rounded"
                  >
                    <div>
                      <input type="radio" name="crust" className="mr-2" />
                      {crust.name}
                    </div>
                    <span className="text-gray-600 font-medium">+ ₹{crust.price}</span>
                  </label>
                )
              )}
            </div>
            <div className="flex justify-between items-center mt-4 border-t pt-4">
              <span className="text-gray-700 font-medium">Items Added 0/2</span>
              <button className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 font-semibold">Next ₹{selectedPizza.price}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
