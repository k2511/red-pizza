
// import React from "react";
// import veg from "../assets/img/veg.png";
// import NV from "../assets/img/NV.png";

// import imgi1 from "../assets/img/imgi1.jpg";
// import imgi2 from "../assets/img/imgi2.jpg";
// import imgi3 from "../assets/img/imgi3.jpg";
// import imgi4 from "../assets/img/imgi4.jpg";
// import imgi5 from "../assets/img/imgi5.jpg";
// import imgi7 from "../assets/img/imgi7.jpg";

// const categories = [
//   {
//     id: 1,
//     title: "Spicy Jalapeno Pizza [Regular 7'']",
//     desc: "Tangy, Spicy Jalapenos with Mozzarella & Molten Cheese. 100% Dairy Cheese | 0% Mayonnaise",
//     price: 99,
//     img: imgi1,
//     type: "veg",
//   },
//   {
//     id: 2,
//     title: "Golden Corn Pizza [Regular 7'']",
//     desc: "Golden Corn with Mozzarella & Molten Cheese. 100% Dairy Cheese | 0% Mayonnaise",
//     price: 99,
//     img: imgi2,
//     type: "veg",
//   },
//   {
//     id: 3,
//     title: 'Capsicum Pizza [Regular 7"]',
//     desc: "Roasted Capsicum with Mozzarella & Molten Cheese. 100% Dairy Cheese | 0% Mayonnaise",
//     price: 99,
//     img: imgi3,
//     type: "veg",
//   },
//   {
//     id: 4,
//     title: 'Onion Pizza [Regular 7"]',
//     desc: "Onions with Mozzarella & Molten Cheese. 100% Dairy Cheese | 0% Mayonnaise",
//     price: 99,
//     img: imgi4,
//     type: "veg",
//     bestseller: true,
//   },
//   {
//     id: 5,
//     title: 'Tomato Pizza [Regular 7"]',
//     desc: "Juicy Tomatoes with Mozzarella & Molten Cheese. 100% Dairy Cheese | 0% Mayonnaise",
//     price: 99,
//     img: imgi5,
//     type: "veg",
//   },
//   {
//     id: 6,
//     title: 'Chicken & Onion Pizza [Regular 7"]',
//     desc: "Herb Chicken, Onion with Mozzarella & Molten Cheese. 100% Dairy Cheese | 0% Mayonnaise",
//     price: 129,
//     img: imgi1,
//     type: "nonveg",
//     chefsSpecial: true,
//   },
//   {
//     id: 7,
//     title: "Any Value Pizza + Garlic Breadsticks",
//     desc: "Any Value Pizza & Classic Garlic Breadsticks. The perfect pair!",
//     price: 179,
//     img: imgi7,
//     type: "veg",
//     bestseller: true,
//   },
//   {
//     id: 8,
//     title: "Any Value Pizza + Choco Lava Cake",
//     desc: "Any Value Pizza & Choco Lava Cake. End the treat on a sweet note!",
//     price: 149,
//     img: imgi2,
//     type: "veg",
//   },
//   {
//     id: 9,
//     title: "Any Value Pizza + Coke",
//     desc: "Any Value Pizza & Coke. Enjoy refreshing sips with every bite!",
//     price: 139,
//     img: imgi3,
//     type: "veg",
//   },
//   {
//     id: 10,
//     title: "Pack of 2 Pizzas",
//     desc: "Pick any 2 Value Pizzas at a steal deal. Irresistible in every way!",
//     price: 189,
//     img: imgi4,
//     type: "veg",
//     bestseller: true,
//   },
//   {
//     id: 11,
//     title: "Pack of 3 Pizzas",
//     desc: "Pick any 3 Value Pizzas. Irresistible in every way!",
//     price: 289,
//     img: imgi5,
//     type: "veg",
//   },
//   {
//     id: 12,
//     title: "Pack of 4 Pizzas",
//     desc: "Pick any 4 Value Pizzas. Irresistible in every way!",
//     price: 389,
//     img: imgi7,
//     type: "veg",
//   },
// ];

// export default function CategoryFilter({ filter, searchTerm }) {
//   let filteredItems = categories.filter((item) => {
//     if (filter === "all") return true;
//     if (filter === "veg") return item.type === "veg";
//     if (filter === "nonveg") return item.type === "nonveg";
//     if (filter === "bestseller") return item.bestseller;
//     if (filter === "chefsSpecial") return item.chefsSpecial;
//     return true;
//   });

//   // Search functionality
//   if (searchTerm) {
//     filteredItems = filteredItems.filter(
//       (item) =>
//         item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         item.desc.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4">
//       <div className="mb-6">
//         <div className="text-center sm:text-left">
//           <h2 className="text-lg sm:text-xl font-bold text-gray-800">
//             Value Fun Pizza @ 99
//           </h2>
//           <p className="text-gray-600 text-sm sm:text-base mt-1">
//             Made with 100% real dairy cheese. 0% Mayonnaise.
//           </p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
//         {filteredItems.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition"
//           >
//             <img
//               src={item.img}
//               alt={item.title}
//               className="w-full h-36 sm:h-40 object-cover"
//             />
//             <div className="p-3 sm:p-4">
//               <div className="flex items-center gap-2 mb-1">
//                 <img
//                   src={item.type === "veg" ? veg : NV}
//                   alt={item.type}
//                   className="w-4 h-4 sm:w-5 sm:h-5"
//                 />
//                 <h3 className="text-sm sm:text-base font-semibold">
//                   {item.title}
//                 </h3>
//               </div>
//               <p className="text-gray-500 text-xs sm:text-sm mb-2">
//                 {item.desc}
//               </p>
//               <div className="flex items-center justify-between">
//                 <p className="text-gray-800 font-medium text-sm sm:text-base">
//                   ₹ {item.price}
//                 </p>
//                 <button className="bg-red-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded hover:bg-red-600 text-xs sm:text-sm">
//                   + Add
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// //************************* Code Start Here *******************//

import React from "react";
import veg from "../assets/img/veg.png";
import NV from "../assets/img/NV.png";

import imgi1 from "../assets/img/imgi1.jpg";
import imgi2 from "../assets/img/imgi2.jpg";
import imgi3 from "../assets/img/imgi3.jpg";
import imgi4 from "../assets/img/imgi4.jpg";
import imgi5 from "../assets/img/imgi5.jpg";
import imgi7 from "../assets/img/imgi7.jpg";
import imgi010 from "../assets/img/imgi010.jpg";
import imgi020 from "../assets/img/imgi020.jpg";
import imgi030 from "../assets/img/imgi030.jpg";
import imgi050 from "../assets/img/imgi050.jpg";
import imgi060 from "../assets/img/imgi060.jpg";
import imgi070 from "../assets/img/imgi070.jpg";

const categories = [
  // ... existing category data remains unchanged
];

export default function CategoryFilter({ filter = "all", searchTerm = "" }) {
  const filteredItems = categories.filter((item) => {
    // Category filtering
    const categoryMatch =
      filter === "all" ||
      (filter === "veg" && item.type === "veg") ||
      (filter === "nonveg" && item.type === "nonveg") ||
      (filter === "bestseller" && item.bestseller) ||
      (filter === "chefsSpecial" && item.chefsSpecial);

    // Search filtering (case-insensitive name or description match)
    const searchMatch =
      searchTerm === "" ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchTerm.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4">
      <div className="mb-6 text-center sm:text-left">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">
          Value Fun Pizza @ 99
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-1">
          Made with 100% real dairy cheese. 0% Mayonnaise.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-36 sm:h-40 object-cover"
            />
            <div className="p-3 sm:p-4">
              <div className="flex items-center gap-2 mb-1">
                <img
                  src={item.type === "veg" ? veg : NV}
                  alt={item.type}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <h3 className="text-sm sm:text-base font-semibold">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-500 text-xs sm:text-sm mb-2">{item.desc}</p>
              <div className="flex items-center justify-between">
                <p className="text-gray-800 font-medium text-sm sm:text-base">
                  ₹ {item.price}
                </p>
                <button className="bg-red-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded hover:bg-red-600 text-xs sm:text-sm">
                  + Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


