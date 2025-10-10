// import React, { useState } from "react";
// import imgi10 from "../assets/img/imgi10.jpeg";
// import imgi11 from "../assets/img/imgi11.jpg";
// import imgi12 from "../assets/img/imgi12.jpg";
// import vegIcon from "../assets/img/veg.png"; // ✅ Veg icon
// import nonVegIcon from "../assets/img/NV.png"; // ✅ Non-Veg icon

// const comboData = [
//   {
//     id: 1,
//     title: 'Veg & Veg [Big 10" Serves 2-3]',
//     desc: "Choice is yours! Pick a half each of any 2 Veg Pizzas & make one Big 10 inch Pizza.",
//     price: 299,
//     img: imgi10,
//     type: "veg",
//   },
//   {
//     id: 2,
//     title: 'Non-Veg & Veg [Big 10" Serves 2-3]',
//     desc: "Veg or Non-Veg? BOTH! Pick a half each of a Non-Veg & a Veg Pizza to make one Big 10 inch Pizza.",
//     price: 349,
//     img: imgi11,
//     type: "nonveg",
//   },
//   {
//     id: 3,
//     title: 'Non-Veg & Non-Veg [Big 10" Serves 2-3]',
//     desc: "The fight ends today! Get your own half now. Pick a half each of any 2 Non-Veg Pizzas & make 1 big 10 inch Pizza.",
//     price: 399,
//     img: imgi12,
//     type: "nonveg",
//   },
// ];

// export default function HalfSection({ filter = "all" }) {
//   // ✅ Fixed filtering logic
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
//     <div className="max-w-7xl mx-auto px-4 py-6">
//       {/* Header */}
//       <div className="mb-6 text-center sm:text-left">
//         <h2 className="text-lg sm:text-xl font-bold text-gray-800">
//           Half & Half Pizzas [Big 10"]
//         </h2>
//         <p className="text-gray-600 text-sm sm:text-base mt-1">
//           Can't make up your mind? No worries! Get 2 different halves in 1 big
//           10-inch Pizza. No more choosing between the 2.
//         </p>
//       </div>

//       {/* Combo Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//         {filteredItems.map((combo) => (
//           <div
//             key={combo.id}
//             className="bg-white shadow-md rounded-xl overflow-hidden border hover:shadow-lg transition"
//           >
//             {/* Combo Image */}
//             <img
//               src={combo.img}
//               alt={combo.title}
//               className="w-full h-48 object-cover"
//             />

//             {/* Combo Details */}
//             <div className="p-4 flex flex-col justify-between h-[180px]">
//               {/* Title with Icon */}
//               <h3 className="text-gray-800 font-semibold text-base mb-1 flex items-center gap-2">
//                 <img
//                   src={combo.type === "veg" ? vegIcon : nonVegIcon}
//                   alt={combo.type}
//                   className="w-4 h-4 object-contain"
//                 />
//                 {combo.title}
//               </h3>

//               <p className="text-gray-500 text-sm mb-3 leading-snug">
//                 {combo.desc}
//               </p>

//               {/* Price + Add Button */}
//               <div className="flex items-center justify-between mt-auto">
//                 <div>
//                   <span className="text-gray-900 font-semibold text-base">
//                     ₹{combo.price}
//                   </span>
//                 </div>

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

//       {/* Modal Section */}
//       {showModal && selectedPizza && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 w-11/12 sm:w-3/4 md:w-1/2 max-h-[90vh] overflow-y-auto relative">
//             <button
//               onClick={closeModal}
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 font-bold text-xl"
//             >
//               ×
//             </button>

//             {/* Header */}
//             <h2 className="text-lg font-bold mb-2">
//               {selectedPizza.title} – ₹{selectedPizza.price}
//             </h2>

//             {/* Choose Pizza Boxes */}
//             <div className="flex items-center gap-4 mb-6">
//               <button className="flex-1 border-2 border-orange-500 text-orange-500 rounded-lg p-4 font-medium text-center hover:bg-orange-50">
//                 + Choose First Pizza
//               </button>
//               <button className="flex-1 border-2 border-dashed border-gray-400 text-gray-500 rounded-lg p-4 font-medium text-center hover:bg-gray-50">
//                 + Choose Second Pizza
//               </button>
//             </div>

//             {/* Crust Options */}
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

//             {/* Type Filter */}
//             <h3 className="font-semibold mb-3">Select Type</h3>
//             <div className="flex gap-2 mb-6">
//               {["Both", "Veg", "Non-Veg"].map((type, idx) => (
//                 <button
//                   key={idx}
//                   className={`px-4 py-1 rounded-full border ${
//                     type === "Both"
//                       ? "bg-black text-white"
//                       : "text-gray-700 hover:bg-gray-100"
//                   }`}
//                 >
//                   {type}
//                 </button>
//               ))}
//             </div>

//             {/* Footer Section */}
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

import imgi60 from "../assets/img/imgi60.jpg";
import imgi61 from "../assets/img/imgi61.jpg";
import imgi62 from "../assets/img/imgi62.jpg";
import imgi63 from "../assets/img/imgi63.jpg";
import imgi64 from "../assets/img/imgi64.jpg";
import imgi65 from "../assets/img/imgi65.jpg";
import imgi66 from "../assets/img/imgi66.jpg";
import imgi67 from "../assets/img/imgi67.jpg";
import imgi68 from "../assets/img/imgi68.jpg";
import imgi69 from "../assets/img/imgi69.jpg";
import imgi70 from "../assets/img/imgi70.jpg";
import imgi71 from "../assets/img/imgi71.jpg";
import imgi72 from "../assets/img/imgi72.jpg";
import imgi73 from "../assets/img/imgi73.jpg";

import vegIcon from "../assets/img/veg.png";
import nonVegIcon from "../assets/img/NV.png";

const comboData = [
  {
    id: 1,
    title: "Dips & Sauces",
    desc: "Choose between Garlic, Cheesy, or Spicy Dip to elevate your pizza experience.",
    price: 69,
    img: imgi60,
    type: "veg",
  },
  {
    id: 2,
    title: "Garlic Breadsticks",
    desc: "Crusty, buttery garlic breadsticks—perfect for sharing.",
    price: 99,
    img: imgi61,
    type: "veg",
  },
  {
    id: 3,
    title: "Chocolate Chip Brownie",
    desc: "Rich, fudgy brownie loaded with chocolate chips.",
    price: 89,
    img: imgi62,
    type: "veg",
  },
  {
    id: 4,
    title: "Cold Coffee",
    desc: "Refreshing iced coffee with a splash of cream.",
    price: 69,
    img: imgi63,
    type: "veg",
  },
  {
    id: 5,
    title: "Lemonade",
    desc: "Freshly squeezed lemonade to quench your thirst.",
    price: 49,
    img: imgi64,
    type: "veg",
  },
  {
    id: 6,
    title: "Fruit Salad",
    desc: "Assorted fresh fruits, a healthy delight.",
    price: 59,
    img: imgi65,
    type: "veg",
  },
  {
    id: 7,
    title: "Mojito",
    desc: "Minty refreshment with a twist of lime.",
    price: 109,
    img: imgi66,
    type: "veg",
  },
  {
    id: 8,
    title: "Orange Juice",
    desc: "Freshly squeezed orange juice.",
    price: 79,
    img: imgi67,
    type: "veg",
  },
  {
    id: 9,
    title: "Peach Iced Tea",
    desc: "Chilled tea with a hint of peach flavor.",
    price: 89,
    img: imgi68,
    type: "veg",
  },
  {
    id: 10,
    title: "Strawberry Smoothie",
    desc: "Creamy strawberry smoothie with ice.",
    price: 99,
    img: imgi69,
    type: "veg",
  },
  {
    id: 11,
    title: "Cold Coffee Float",
    desc: "Cold coffee topped with a scoop of vanilla ice cream.",
    price: 109,
    img: imgi70,
    type: "veg",
  },
  {
    id: 12,
    title: "Lemon Soda",
    desc: "Sparkling lemon soda refreshes instantly.",
    price: 59,
    img: imgi71,
    type: "veg",
  },
  {
    id: 13,
    title: "Water Bottle",
    desc: "500ml bottled mineral water.",
    price: 20,
    img: imgi72,
    type: "veg",
  },
  {
    id: 14,
    title: "Fruit Punch",
    desc: "Mixed fruit punch with a dash of soda.",
    price: 89,
    img: imgi73,
    type: "veg",
  },
];

const vegPizzas = [
  { name: "Double Cheese Margherita", desc: "Good Ol' Classic", price: 0 },
  { name: "Farmer's Market", desc: "Capsicum, Onion", price: 0 },
  { name: "Corn Cheese & Jalapenos", desc: "Spicy Jalapenos, Golden Corn, Mozzarella Cheese", price: 50 },
  { name: "Zesty Veggie Delight", desc: "Tomato, Onion, Spicy Jalapenos", price: 60 },
  { name: "Fabulous Three", desc: "Capsicum, Onion, Red Paprika", price: 60 },
  { name: "Olive Garden", desc: "Black Olive, Golden Corn, Capsicum", price: 70 },
  { name: "Spicy Mexicano", desc: "Red Paprika, Spicy Jalapeno, Golden Corn, Onion", price: 90 },
  { name: "Magic Mushrooms", desc: "Mushroom, Capsicum, Tomato", price: 90 },
  { name: "Paneer Tikka", desc: "Paneer Tikka, Onion", price: 90 },
  { name: "Veggie Paradise", desc: "Black Olive, Red Paprika, Capsicum, Tomato, Onion", price: 120 },
  { name: "Italian Fiesta", desc: "Mushroom, Black Olive, Spicy Jalapeno, Golden Corn", price: 120 },
  { name: "Peri Peri Paneer", desc: "Peri Peri Paneer, Golden Corn, Capsicum", price: 120 },
  { name: "All Veggies Madness", desc: "Mushroom, Black Olive, Spicy Jalapeno, Golden Corn, Capsicum, Onion, Tomato", price: 150 },
  { name: "Paneer Overload", desc: "Peri Peri Paneer, Paneer Tikka, Spicy Jalapeno, Onion, Tomato", price: 150 },
  { name: "Crowded House", desc: "Extra Cheese, Paneer Cubes, Black Olive, Red Paprika, Golden Corn, Capsicum, Onion", price: 150 },
];

const nonVegPizzas = [
  { name: "Chicken Corn Delight", desc: "Herb Grilled Chicken, Golden Corn", price: 0 },
  { name: "Chicken Smokey Joe", desc: "Smokey BBQ Chicken, Onion", price: 0 },
  { name: "Fiery Chicken", desc: "Spicy Chicken, Golden Corn, Capsicum", price: 50 },
  { name: "BBQ Chicken", desc: "BBQ Chicken, Spicy Jalapeno, Golden Corn, Tomato", price: 60 },
  { name: "Peri Peri Chicken", desc: "Peri Peri Chicken, Red Paprika, Golden Corn, Capsicum", price: 60 },
  { name: "Chicken Mexicano", desc: "Herb Grilled Chicken, Spicy Jalapeno, Capsicum, Onion", price: 60 },
  { name: "Chicken Tikka", desc: "Chicken Tikka, Tomato, Onion", price: 60 },
  { name: "Double Trouble Chicken", desc: "Herb Grilled Chicken, Chicken Tikka, Black Olive, Capsicum", price: 100 },
  { name: "Fire Me Up Chicken", desc: "Spicy Peri Peri Chicken, Herb Chicken, Red Paprika, Spicy Jalepeno", price: 100 },
  { name: "Chicken Italiana", desc: "Garlic Roast Chicken, Smokey BBQ Chicken, Mushroom, Tomato", price: 100 },
  { name: "Mojo's Chicken Special", desc: "BBQ Chicken, Chicken Tikka, Herb Grilled Chicken, Mushroom, Spicy Jalapeno, Golden Corn, Tomato", price: 130 },
  { name: "Chicken Full Smash", desc: "Peri Peri Chicken, Chicken Tikka, Roast Chicken, Black Olive, Red Paprika, Capsicum, Onion", price: 130 },
  { name: "The Meat Eater", desc: "Garlic Roast Chicken, Herb Grilled Chicken, Peri Peri Chicken, Smokey BBQ Chicken", price: 130 },
  { name: "Mad Over Lamb", desc: "Lamb | Onion | Serves 2-3.", price: 130 },
];

const crustOptions = [
  { name: "Pan Tossed", price: 0 },
  { name: "Thin Crust", price: 0 },
  { name: "Cheese Blast", price: 100 },
  { name: "Thin Crust Cheese Blast", price: 100 },
];

const nonVegCrustOptions = [
  { name: "Pan Tossed", price: 0 },
  { name: "Thin Crust", price: 0 },
  { name: "Cheese Blast", price: 100 },
  { name: "Thin Crust Cheese Blast", price: 100 },
  { name: "Chicken Cheese Blast", price: 130 },
];

export default function CrustSection({ filter = "all", searchTerm = "" }) {
  // Filter comboData based on category and searchTerm
  const filteredItems = comboData.filter((item) => {
    const type = item.type.toLowerCase();
    // Category filter
    const categoryMatch =
      filter === "all" ||
      (filter === "veg" && type === "veg") ||
      (filter === "nonveg" && type === "nonveg") ||
      (filter === "bestseller" && item.bestseller) ||
      (filter === "chefsSpecial" && item.chefsSpecial);

    // Search filter (case-insensitive substring match on title or desc)
    const searchMatch =
      searchTerm === "" ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchTerm.toLowerCase());

    return categoryMatch && searchMatch;
  });

  const [selectedPizza, setSelectedPizza] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState(0); // 0: Crust, 1: First Half, 2: Second Half
  const [selectedCrust, setSelectedCrust] = useState(null);
  const [firstHalf, setFirstHalf] = useState(null);
  const [secondHalf, setSecondHalf] = useState(null);

  const handleAddClick = (combo) => {
    setSelectedPizza(combo);
    setActiveTab(0);
    setSelectedCrust(null);
    setFirstHalf(null);
    setSecondHalf(null);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    setSelectedPizza(null);
    setActiveTab(0);
  };

  const getTotalPrice = () => {
    let total = selectedPizza?.price || 0;
    if (selectedCrust) total += selectedCrust.price;
    if (firstHalf) total += firstHalf.price;
    if (secondHalf) total += secondHalf.price;
    return total;
  };

  const getItemsAdded = () => {
    let count = 0;
    if (firstHalf) count++;
    if (secondHalf) count++;
    return count;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-6 text-center sm:text-left">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">
          THIN CRUST Pizzas
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-1">
          Light, thin crust, that's delivered fresh & perfect. Say goodbye to soggy thin crust pizzas.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {filteredItems.map((combo) => (
          <div
            key={combo.id}
            className="bg-white shadow-sm rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-200"
          >
            {/* Combo Image */}
            <img
              src={combo.img}
              alt={combo.title}
              className="w-full h-48 object-cover"
            />

            {/* Combo Details */}
            <div className="p-3 sm:p-4 flex flex-col justify-between min-h-[180px]">
              {/* Title with Icon */}
              <h3 className="text-gray-800 font-semibold text-sm sm:text-base mb-1 flex items-center gap-2">
                <img
                  src={combo.type.toLowerCase() === "veg" ? vegIcon : nonVegIcon}
                  alt={combo.type}
                  className="w-4 h-4 object-contain"
                />
                {combo.title}
              </h3>

              <p className="text-gray-500 text-xs sm:text-sm mb-3 leading-snug">
                {combo.desc}
              </p>

              {/* Price + Add Button */}
              <div className="flex items-center justify-between mt-auto">
                <span className="text-gray-900 font-semibold text-sm sm:text-base">
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-3 sm:px-0 z-50">
          <div className="bg-white rounded-xl w-full max-w-md sm:max-w-lg md:max-w-2xl max-h-[90vh] overflow-y-auto relative p-4 sm:p-6 shadow-lg">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 font-bold text-2xl leading-none"
            >
              ×
            </button>

            {/* Header */}
            <h2 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 mt-4 sm:mt-2">
              {selectedPizza.title} – ₹{selectedPizza.price}
            </h2>

            {/* Choose Pizza Boxes */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-5">
              <button className="flex-1 border-2 border-orange-500 text-orange-500 rounded-lg p-3 text-sm font-medium text-center hover:bg-orange-50 transition">
                + Choose First Pizza
              </button>
              <button className="flex-1 border-2 border-dashed border-gray-400 text-gray-500 rounded-lg p-3 text-sm font-medium text-center hover:bg-gray-50 transition">
                + Choose Second Pizza
              </button>
            </div>

            {/* Crust Options */}
            <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Select Crust</h3>
            <div className="space-y-2 mb-5 sm:mb-6">
              {[
                { name: "Pan Tossed", price: 0 },
                { name: "Thin Crust", price: 0 },
                { name: "Cheese Burst", price: 50 },
                { name: "Thin Crust Cheese Burst", price: 50 },
              ].map((crust, i) => (
                <label
                  key={i}
                  className="flex justify-between items-center border-b py-2 cursor-pointer hover:bg-gray-50 rounded text-sm sm:text-base"
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

            {/* Type Filter */}
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

            {/* Footer Section */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 border-t pt-3">
              <span className="text-gray-700 font-medium text-sm sm:text-base">
                Items Added 0/2
              </span>
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