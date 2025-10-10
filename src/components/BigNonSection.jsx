
// import React, { useState } from "react";
// import imgi33 from "../assets/img/imgi33.jpg";
// import imgi34 from "../assets/img/imgi34.jpg";
// import imgi35 from "../assets/img/imgi35.jpg";
// import imgi36 from "../assets/img/imgi36.jpg";
// import imgi37 from "../assets/img/imgi37.jpg";
// import imgi38 from "../assets/img/imgi38.jpg";
// import imgi39 from "../assets/img/imgi39.jpg";
// import imgi40 from "../assets/img/imgi40.jpg";
// import imgi41 from "../assets/img/imgi41.jpg";
// import imgi42 from "../assets/img/imgi42.jpg";
// import imgi43 from "../assets/img/imgi43.jpg";
// import imgi44 from "../assets/img/imgi44.jpg";
// import imgi45 from "../assets/img/imgi45.jpg";
// import imgi46 from "../assets/img/imgi46.jpg";
// import imgi47 from "../assets/img/imgi47.jpg";
// import nonVegIcon from "../assets/img/NV.png";

// const comboData = [
//     {
//     id: 1,
//     title: "Chicken Smokey Joe [BIG 10'']",
//     desc: "Smokey BBQ Chicken | Onion | Serves 2-3.",
//     price: 399,
//     img: imgi33,
//     type: "nonVeg",
//   },
//   {
//     id: 2,
//     title: "Chicken Corn Delight [BIG 10'']",
//     desc: "Herb Grilled Chicken | Golden Corn | Serves 2-3.",
//     price: 399,
//     img: imgi34,
//     type: "nonVeg",
//   },
//   {
//     id: 3,
//     title: 'Fiery Chicken [BIG 10"]',
//     desc: "Spicy Chicken | Golden Corn | Capsicum | Serves 2-3.",
//     price: 449,
//     img: imgi35,
//     type: "nonVeg",
//   },
//   {
//     id: 4,
//     title: 'BBQ Chicken [BIG 10"]',
//     desc: "BBQ Chicken | Spicy Jalapeno | Golden Corn | Tomato | Serves 2-3.",
//     price: 419,
//     img: imgi36,
//     type: "nonVeg",
//   },
//   {
//     id: 5,
//     title: 'Peri Peri Chicken [BIG 10"]',
//     desc: "Peri Peri Chicken | Red Paprika | Golden Corn | Capsicum | Serves 2-3.",
//     price: 449,
//     img: imgi37,
//     type: "nonVeg",
//     bestseller: true,
//   },
//   {
//     id: 6,
//     title: 'Chicken Mexicano [BIG 10"]',
//     desc: "Herb Grilled Chicken | Spicy Jalapeno | Capsicum | Onion | Serves 2-3.",
//     price: 499,
//     img: imgi38,
//     type: "nonVeg",
//   },
//   {
//     id: 7,
//     title: "Chicken Tikka [BIG 10'']",
//     desc: "Chicken Tikka | Tomato | Onion | Serves 2-3.",
//     price: 499,
//     img: imgi39,
//     type: "nonVeg",
//     bestseller: true,
//   },
//   {
//     id: 8,
//     title: 'Double Trouble Chicken [BIG 10"]',
//     desc: "Herb Grilled Chicken | Chicken Tikka | Black Olive | Capsicum | Serves 2-3.",
//     price: 579,
//     img: imgi40,
//     type: "nonVeg",
//   },
//   {
//     id: 9,
//     title: "Fire Me Up Chicken [BIG 10'']",
//     desc: "Spicy Peri Peri Chicken | Herb Chicken | Red Paprika | Spicy Jalepeno | Serves 2-3.",
//     price: 579,
//     img: imgi41,
//     type: "nonVeg",
//   },
//   {
//     id: 10,
//     title: "Chicken Italiana [BIG 10'']",
//     desc: "Garlic Roast Chicken | Smokey BBQ Chicken | Mushroom | Tomato | Serves 2-3.",
//     price: 579,
//     img: imgi42,
//     type: "nonVeg",

//   },
//   {
//     id: 11,
//     title: 'Butter Chicken [BIG 10"]',
//     desc: "Tandoori Chicken | Capsicum | Onion | Tomato [Comes with Makhni Sauce instead of Pizza Sauce] Serves 2-3.",
//     price: 579,
//     img: imgi43,
//     type: "nonVeg",
//     chefsSpecial: true,
//   },
//   {
//     id: 12,
//     title: "Mojo's Chicken Special [BIG 10'']",
//     desc: "BBQ Chicken | Chicken Tikka | Herb Grilled Chicken | Mushroom | Spicy Jalapeno | Golden Corn | Tomato | Serves 2-3.",
//     price: 649,
//     img: imgi44,
//     type: "nonVeg",
//   },
//   {
//     id: 13,
//     title: "Chicken Full Smash [BIG 10'']",
//     desc: "Peri Peri Chicken | Chicken Tikka | Roast Chicken | Black Olive | Red Paprika | Capsicum | Onion | Serves 2-3.",
//     price: 649,
//     img: imgi45,
//     type: "nonVeg",
//     chefsSpecial: true, // ✅ Correct field name (no apostrophe)
//   },
//   {
//     id: 14,
//     title: "The Meat Eater [BIG 10'']",
//     desc: "Garlic Roast Chicken | Herb Grilled Chicken | Peri Peri Chicken | Smokey BBQ Chicken | Serves 2-3.",
//     price: 649,
//     img: imgi46,
//     type: "nonVeg",
//   },
//   {
//     id: 15,
//     title: 'Mad Over Lamb [BIG 10"]',
//     desc: "Lamb | Onion | Serves 2-3.",
//     price: 649,
//     img: imgi47,
//     type: "nonVeg",
//   },
// ];

// export default function BigNonSection({ filter = "all" }) {
//   // ✅ Fix: filter comboData instead of undefined categories
//   const filteredItems = comboData.filter((item) => {
//     if (filter === "all") return true;
//     if (filter === "veg") return item.type === "veg";
//     if (filter === "nonveg") return item.type.toLowerCase() === "nonveg"; // normalize case
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
//           BIG 10" Pizzas | Non-Veg
//         </h2>
//         <p className="text-gray-600 text-sm sm:text-base mt-1">
//           Go BIG with 10-inch Pizzas! 2X non-veg toppings & overflowing cheese; hand rolled & baked with a flavorful sauce.
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//         {filteredItems.map((combo) => (
//           <div
//             key={combo.id}
//             className="bg-white shadow-md rounded-xl overflow-hidden border hover:shadow-lg transition relative"
//           >
//             {combo.bestseller && (
//               <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
//                 Bestseller
//               </div>
//             )}
//             {combo.chefsSpecial && (
//               <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
//                 Chef’s Special
//               </div>
//             )}

//             <img src={combo.img} alt={combo.title} className="w-full h-48 object-cover" />

//             <div className="p-4 flex flex-col justify-between h-[180px]">
//               <h3 className="text-gray-800 font-semibold text-base mb-1 flex items-center gap-2">
//                 <img
//                   src={nonVegIcon}
//                   alt="nonVeg"
//                   className="w-4 h-4 object-contain"
//                 />
//                 {combo.title}
//               </h3>

//               <p className="text-gray-500 text-sm mb-3 leading-snug">{combo.desc}</p>

//               <div className="flex items-center justify-between mt-auto">
//                 <span className="text-gray-900 font-semibold text-base">₹{combo.price}</span>
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
//                   <span className="text-gray-600 font-medium">+ ₹{crust.price}</span>
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

export default function BigNonSection({ filter = "all", searchTerm = "" }) {
  const filteredItems = comboData.filter((item) => {
    // Category filter
    const categoryMatch =
      filter === "all" ||
      (filter === "veg" && item.type === "veg") ||
      (filter === "nonveg" && item.type.toLowerCase() === "nonveg") ||
      (filter === "bestseller" && item.bestseller) ||
      (filter === "chefsSpecial" && item.chefsSpecial);

    // Search filter (case-insensitive match)
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
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">
          BIG 10" Pizzas | Non-Veg
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-1">
          Go BIG with 10-inch Pizzas! 2X non-veg toppings & overflowing cheese; hand rolled & baked with a flavorful sauce.
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
                  src={nonVegIcon}
                  alt="nonVeg"
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
                  <span className="text-gray-600 font-medium">+ ₹{crust.price}</span>
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






