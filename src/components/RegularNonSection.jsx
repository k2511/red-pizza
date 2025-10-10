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
//     title: "Chicken Smokey Joe [Regular 7'']",
//     desc: "Smokey BBQ Chicken | Onion | Serves 1.",
//     price: 249,
//     img: imgi33,
//     type: "nonVeg",
//   },
//   {
//     id: 2,
//     title: "Chicken Corn Delight [Regular 7'']",
//     desc: "Herb Grilled Chicken | Golden Corn | Serves 1.",
//     price: 249,
//     img: imgi34,
//     type: "nonVeg",
//   },
//   {
//     id: 3,
//     title: 'Fiery Chicken [Regular 7"]',
//     desc: "Spicy Chicken | Golden Corn | Capsicum | Serves 1.",
//     price: 249,
//     img: imgi35,
//     type: "nonVeg",
//   },
//   {
//     id: 4,
//     title: 'BBQ Chicken [Regular 7"]',
//     desc: "BBQ Chicken | Spicy Jalapeno | Golden Corn | Tomato | Serves 1.",
//     price: 299,
//     img: imgi36,
//     type: "nonVeg",
//   },
//   {
//     id: 5,
//     title: 'Peri Peri Chicken [Regular 7"]',
//     desc: "Peri Peri Chicken | Red Paprika | Golden Corn | Capsicum | Serves 1.",
//     price: 299,
//     img: imgi37,
//     type: "nonVeg",
//     bestseller: true,
//   },
//   {
//     id: 6,
//     title: 'Chicken Mexicano [Regular 7"]',
//     desc: "Herb Grilled Chicken | Spicy Jalapeno | Capsicum | Onion | Serves 1.",
//     price: 299,
//     img: imgi38,
//     type: "nonVeg",
//   },
//   {
//     id: 7,
//     title: "Chicken Tikka [Regular 7'']",
//     desc: "Chicken Tikka | Tomato | Onion | Serves 1.",
//     price: 299,
//     img: imgi39,
//     type: "nonVeg",
//     bestseller: true,
//   },
//   {
//     id: 8,
//     title: 'Double Trouble Chicken [Regular 7"]',
//     desc: "Herb Grilled Chicken | Chicken Tikka | Black Olive | Capsicum | Serves 1.",
//     price: 319,
//     img: imgi40,
//     type: "nonVeg",
//     chefsSpecial: true,
//   },
//   {
//     id: 9,
//     title: "Fire Me Up Chicken [Regular 7'']",
//     desc: "Spicy Peri Peri Chicken | Herb Chicken | Red Paprika | Spicy Jalepeno | Serves 1.",
//     price: 319,
//     img: imgi41,
//     type: "nonVeg",
//   },
//   {
//     id: 10,
//     title: "Chicken Italiana [Regular 7'']",
//     desc: "Garlic Roast Chicken | Smokey BBQ Chicken | Mushroom | Tomato | Serves 1.",
//     price: 319,
//     img: imgi42,
//     type: "nonVeg",

//   },
//   {
//     id: 11,
//     title: 'Butter Chicken [Regular 7"]',
//     desc: "Tandoori Chicken | Capsicum | Onion | Tomato [Comes with Makhni Sauce instead of Pizza Sauce] Serves 1.",
//     price: 319,
//     img: imgi43,
//     type: "nonVeg",
//     chefsSpecial: true,
//   },
//   {
//     id: 12,
//     title: "Mojo's Chicken Special [Regular 7'']",
//     desc: "BBQ Chicken | Chicken Tikka | Herb Grilled Chicken | Mushroom | Spicy Jalapeno | Golden Corn | Tomato | Serves 1.",
//     price: 349,
//     img: imgi44,
//     type: "nonVeg",
//   },
//   {
//     id: 13,
//     title: "Chicken Full Smash [Regular 7'']",
//     desc: "Peri Peri Chicken | Chicken Tikka | Roast Chicken | Black Olive | Red Paprika | Capsicum | Onion | Serves 1.",
//     price: 349,
//     img: imgi45,
//     type: "nonVeg",
//     chefsSpecial: true, // ✅ Correct field name (no apostrophe)
//   },
//   {
//     id: 14,
//     title: "The Meat Eater [Regular 7'']",
//     desc: "Garlic Roast Chicken | Herb Grilled Chicken | Peri Peri Chicken | Smokey BBQ Chicken | Serves 1.",
//     price: 349,
//     img: imgi46,
//     type: "nonVeg",
//   },
//   {
//     id: 15,
//     title: 'Mad Over Lamb [Regular 7"]',
//     desc: "Lamb | Onion | Serves 1.",
//     price: 349,
//     img: imgi47,
//     type: "nonVeg",
//   },
// ];

// export default function RegularNonSection({ filter = "all" }) {
//   // ✅ Filter comboData instead of undefined 'categories'
//   const filteredItems = comboData.filter((item) => {
//     if (filter === "all") return true;
//     if (filter === "veg") return item.type === "veg";
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
//           Regular 7" Pizzas | Non-Veg
//         </h2>
//         <p className="text-gray-600 text-sm sm:text-base mt-1">
//           Go SOLO with the new 7-inch Pizzas. Loaded with juicy meat chunks, topped with melting cheese, & baked to perfection.
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
//               <div className="absolute top-10 left-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
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
//                   src={nonVegIcon}
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
import vegIcon from "../assets/img/veg.png";

const comboData = [
  {
    id: 1,
    title: "Chicken Smokey Joe [Regular 7'']",
    desc: "Smokey BBQ Chicken | Onion | Serves 1.",
    price: 249,
    img: imgi33,
    type: "nonveg",
  },
  {
    id: 2,
    title: "Chicken Corn Delight [Regular 7'']",
    desc: "Herb Grilled Chicken | Golden Corn | Serves 1.",
    price: 249,
    img: imgi34,
    type: "nonveg",
  },
  {
    id: 3,
    title: 'Fiery Chicken [Regular 7"]',
    desc: "Spicy Chicken | Golden Corn | Capsicum | Serves 1.",
    price: 249,
    img: imgi35,
    type: "nonveg",
  },
  {
    id: 4,
    title: 'BBQ Chicken [Regular 7"]',
    desc: "BBQ Chicken | Spicy Jalapeno | Golden Corn | Tomato | Serves 1.",
    price: 299,
    img: imgi36,
    type: "nonveg",
  },
  {
    id: 5,
    title: 'Peri Peri Chicken [Regular 7"]',
    desc: "Peri Peri Chicken | Red Paprika | Golden Corn | Capsicum | Serves 1.",
    price: 299,
    img: imgi37,
    type: "nonveg",
    bestseller: true,
  },
  {
    id: 6,
    title: 'Chicken Mexicano [Regular 7"]',
    desc: "Herb Grilled Chicken | Spicy Jalapeno | Capsicum | Onion | Serves 1.",
    price: 299,
    img: imgi38,
    type: "nonveg",
  },
  {
    id: 7,
    title: "Chicken Tikka [Regular 7'']",
    desc: "Chicken Tikka | Tomato | Onion | Serves 1.",
    price: 299,
    img: imgi39,
    type: "nonveg",
    bestseller: true,
  },
  {
    id: 8,
    title: 'Double Trouble Chicken [Regular 7"]',
    desc: "Herb Grilled Chicken | Chicken Tikka | Black Olive | Capsicum | Serves 1.",
    price: 319,
    img: imgi40,
    type: "nonveg",
    chefsSpecial: true,
  },
  {
    id: 9,
    title: "Fire Me Up Chicken [Regular 7'']",
    desc: "Spicy Peri Peri Chicken | Herb Chicken | Red Paprika | Spicy Jalepeno | Serves 1.",
    price: 319,
    img: imgi41,
    type: "nonveg",
  },
  {
    id: 10,
    title: "Chicken Italiana [Regular 7'']",
    desc: "Garlic Roast Chicken | Smokey BBQ Chicken | Mushroom | Tomato | Serves 1.",
    price: 319,
    img: imgi42,
    type: "nonVeg",

  },
  {
    id: 11,
    title: 'Butter Chicken [Regular 7"]',
    desc: "Tandoori Chicken | Capsicum | Onion | Tomato [Comes with Makhni Sauce instead of Pizza Sauce] Serves 1.",
    price: 319,
    img: imgi43,
    type: "nonveg",
    chefsSpecial: true,
  },
  {
    id: 12,
    title: "Mojo's Chicken Special [Regular 7'']",
    desc: "BBQ Chicken | Chicken Tikka | Herb Grilled Chicken | Mushroom | Spicy Jalapeno | Golden Corn | Tomato | Serves 1.",
    price: 349,
    img: imgi44,
    type: "nonveg",
  },
  {
    id: 13,
    title: "Chicken Full Smash [Regular 7'']",
    desc: "Peri Peri Chicken | Chicken Tikka | Roast Chicken | Black Olive | Red Paprika | Capsicum | Onion | Serves 1.",
    price: 349,
    img: imgi45,
    type: "nonVeg",
    chefsSpecial: true, // ✅ Correct field name (no apostrophe)
  },
  {
    id: 14,
    title: "The Meat Eater [Regular 7'']",
    desc: "Garlic Roast Chicken | Herb Grilled Chicken | Peri Peri Chicken | Smokey BBQ Chicken | Serves 1.",
    price: 349,
    img: imgi46,
    type: "nonVeg",
  },
  {
    id: 15,
    title: 'Mad Over Lamb [Regular 7"]',
    desc: "Lamb | Onion | Serves 1.",
    price: 349,
    img: imgi47,
    type: "nonveg",
  },
];

export default function RegularNonSection({ filter = "all" }) {
  // ✅ Filter comboData instead of undefined 'categories'
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
  const [quantity, setQuantity] = useState(1);

  const handleAddClick = (combo) => {
    setSelectedPizza(combo);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPizza(null);
    setQuantity(1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-6 text-center sm:text-left">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">
          Regular 7" Pizzas | Non-Veg
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-1">
          Go SOLO with the new 7-inch Pizzas. Loaded with juicy meat chunks,
          topped with melting cheese, & baked to perfection.
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

            {/* Chef’s Special Tag */}
            {combo.chefsSpecial && (
              <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
                Chef's Special
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
                  src={nonVegIcon}
                  alt={combo.type}
                  className="w-4 h-4 object-contain"
                />
                {combo.title}
              </h3>
              <p className="text-gray-500 text-sm mb-3 leading-snug">{combo.desc}</p>
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold text-2xl z-10"
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