// import React, { useState } from "react";
// import veg from "../assets/img/veg.png";
// import NV from "../assets/img/NV.png";
// import Bestseller from "../assets/img/Bestseller.png";
// import Chefs from "../assets/img/Chefs.png";

// import imgi1 from "../assets/img/imgi1.jpg";
// import imgi2 from "../assets/img/imgi2.jpg";
// import imgi3 from "../assets/img/imgi3.jpg";
// import imgi4 from "../assets/img/imgi4.jpg";
// import imgi5 from "../assets/img/imgi5.jpg";
// import imgi7 from "../assets/img/imgi7.jpg";
// import ComboSection from "./ComboSection";
// import HalfSection from "./HalfSection";
// import OwnSection from "./OwnSection";
// import BigVegSection from "./BigVegSection";
// import BigNonSection from "./BigNonSection";
// import RegularSection from "./RegularSection";
// import RegularNonSection from "./RegularNonSection";
// import CheesBrustSection from "./CheesBrustSection";
// import CrustSection from "./CrustSection";
// import EpicSection from "./EpicSection";
// import PastaSection from "./PastaSection";
// import GarlicSection from "./GarlicSection";
// import StarterSection from "./StarterSection";
// import VegStarterSection from "./VegStarterSection";
// import DrinkSection from "./DrinkSection";
// import IceSection from "./IceSection";

// const categories = [
//     {
//       id: 1,
//       title: "Spicy Jalapeno Pizza [Regular 7'']",
//       desc: "Tangy, Spicy Jalapenos with Mozzarella & Molten Cheese. 100% Dairy Cheese | 0% Mayonnaise",
//       price: 99,
//       img: imgi1,
//       type: "veg",
//     },
//     {
//       id: 2,
//       title: "Golden Corn Pizza [Regular 7'']",
//       desc: "Golden Corn with Mozzarella & Molten Cheese. 100% Dairy Cheese | 0% Mayonnaise",
//       price: 99,
//       img: imgi2,
//       type: "veg",
//     },
//     {
//       id: 3,
//       title: 'Capsicum Pizza [Regular 7"]',
//       desc: "Roasted Capsicum with Mozzarella & Molten Cheese. 100% Dairy Cheese | 0% Mayonnaise",
//       price: 99,
//       img: imgi3,
//       type: "veg",
//     },
//     {
//       id: 4,
//       title: 'Onion Pizza [Regular 7"]',
//       desc: "Onions with Mozzarella & Molten Cheese. 100% Dairy Cheese | 0% Mayonnaise",
//       price: 99,
//       img: imgi4,
//       type: "veg",
//       bestseller: true,
//     },
//     {
//       id: 5,
//       title: 'Tomato Pizza [Regular 7"]',
//       desc: "Juicy Tomatoes with Mozzarella & Molten Cheese. 100% Dairy Cheese | 0% Mayonnaise",
//       price: 99,
//       img: imgi5,
//       type: "veg",
//     },
//     {
//       id: 6,
//       title: 'Chicken & Onion Pizza [Regular 7"]',
//       desc: "Herb Chicken, Onion with Mozzarella & Molten Cheese. 100% Dairy Cheese | 0% Mayonnaise",
//       price: 99,
//       img: imgi1,
//       type: "NonVeg",
//     },
//     {
//       id: 7,
//       title: "Any Value Pizza + Garlic Breadsticks",
//       desc: "Any Value Pizza & Classic Garlic Breadsticks. The perfect pair!",
//       price: 179,
//       img: imgi7,
//       type: "veg",
//       bestseller: true,
//     },
//     {
//       id: 8,
//       title: 'Any Value Pizza + Choco Lava Cake',
//       desc: "Any Value Pizza & Choco Lava Cake. End the treat on a sweet note!",
//       price: 149,
//       img: imgi2,
//       type: "veg",
//     },
//     {
//       id: 9,
//       title: "Any Value Pizza + Coke",
//       desc: "Any Value Pizza & Coke. Enjoy refreshing sips with every bite!",
//       price: 139,
//       img: imgi3,
//       type: "veg",
//     },
//     {
//       id: 10,
//       title: "Pack of 2 Pizzas",
//       desc: "Pick any 2 Value Pizzas at a steal deal. Irresistible in every way!",
//       price: 189,
//       img: imgi4,
//       type: "veg",
//       bestseller: true,
//     },
//     {
//       id: 11,
//       title: 'Pack of 3 Pizzas',
//       desc: "Pick any 3 Value Pizzas. Irresistible in every way!",
//       price: 289,
//       img: imgi5,
//       type: "veg",
//     },
//     {
//       id: 12,
//       title: 'Pack of 4 Pizzas',
//       desc: "Pick any 4 Value Pizzas. Irresistible in every way!",
//       price: 389,
//       img: imgi7,
//       type: "veg",
//     },
// ];

// export default function CategoryFilter() {
//   const [order, setOrder] = useState(categories);
//   const [selectedCategory, setSelectedCategory] = useState(null); // Track clicked category

//   const handleClick = (clickedCategory) => {
//     // Move clicked category to first position
//     const newOrder = [
//       clickedCategory,
//       ...order.filter((c) => c.name !== clickedCategory.name),
//     ];
//     setOrder(newOrder);
//     setSelectedCategory(clickedCategory.name);
//   };

//   // Decide which items to display
//   const displayedItems = selectedCategory
//     ? order.find((cat) => cat.name === selectedCategory)?.items || []
//     : order.flatMap((cat) => cat.items.map((item) => ({ ...item, category: cat })));

//   return (
//     <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4">
//       {/* Category Buttons */}
//       <div className="flex items-center gap-2 sm:gap-3 bg-white p-3 sm:p-4 rounded-lg shadow mb-6 overflow-x-auto">
//         {order.map((cat, index) => (
//           <button
//             key={index}
//             onClick={() => handleClick(cat)}
//             className={`flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition ${cat.color} hover:opacity-80 whitespace-nowrap`}
//           >
//             {cat.icon && (
//               <img
//                 src={cat.icon}
//                 alt={`${cat.name} icon`}
//                 className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
//               />
//             )}
//             {cat.name}
//           </button>
//         ))}
//       </div>

//       {/* Header */}
//       <div className="mb-6 text-center sm:text-left">
//         <h2 className="text-lg sm:text-xl font-bold text-gray-800">
//          Value Fun Pizza @ 99
//         </h2>
//         <p className="text-gray-600 text-sm sm:text-base mt-1">
//         Made with 100% real dairy cheese. 0% Mayonnaise. Pocket friendly pizzas, at just ₹99.
//         </p>
//       </div>

//       {/* Show Items */}
//       {/* <h2 className="text-md sm:text-lg font-semibold mb-4">
//         {selectedCategory || "All"} Items
//       </h2> */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
//         {displayedItems.map((item, i) => (
//           <div
//             key={i}
//             className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition"
//           >
//             <img
//               src={item.img}
//               alt={item.name}
//               className="w-full h-36 sm:h-40 object-cover"
//             />

//             <div className="p-3 sm:p-4">
//               {/* Name with Category Icon */}
//               <div className="flex items-center gap-2 mb-1">
//                 <img
//                   src={selectedCategory ? order[0].icon : item.category.icon}
//                   alt={`${selectedCategory || item.category.name} icon`}
//                   className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
//                 />
//                 <h3 className="text-sm sm:text-base font-semibold">
//                   {item.name}
//                 </h3>
//               </div>

//               <p className="text-gray-500 text-xs sm:text-sm mb-2">
//                 Cheese Burst Base | Onion | Capsicum
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

//        <div className="bg-white py-2">
//           <ComboSection />
//         </div>

//         <div className="bg-white py-2">
//           <HalfSection />
//         </div>

//         <div className="bg-white py-2">
//           <OwnSection />
//         </div>

//          <div className="bg-white py-2">
//           <BigVegSection />
//         </div>

//          <div className="bg-white py-2">
//           <BigNonSection />
//         </div>

//         <div className="bg-white py-2">
//           <RegularSection />
//         </div>

//           <div className="bg-white py-2">
//           <RegularNonSection />
//         </div>

//         <div className="bg-white py-2">
//           <CheesBrustSection />
//         </div>

//         <div className="bg-white py-2">
//           <CrustSection />
//         </div>

//         <div className="bg-white py-2">
//           <EpicSection />
//         </div>

//         <div className="bg-white py-2">
//           <PastaSection />
//         </div>

//          <div className="bg-white py-2">
//           <GarlicSection />
//         </div>

//         <div className="bg-white py-2">
//           <StarterSection />
//         </div>

//         <div className="bg-white py-2">
//           <VegStarterSection />
//         </div>

//         <div className="bg-white py-2">
//           <DrinkSection />
//         </div>

//          <div className="bg-white py-2">
//           <IceSection />
//         </div>
//     </div>
//   );
// }





// import React, { useState } from "react";
// import veg from "../assets/img/veg.png";
// import NV from "../assets/img/NV.png";
// import Bestseller from "../assets/img/Bestseller.png";
// import Chefs from "../assets/img/Chefs.png";

// import imgi1 from "../assets/img/imgi1.jpg";
// import imgi2 from "../assets/img/imgi2.jpg";
// import imgi3 from "../assets/img/imgi3.jpg";
// import imgi4 from "../assets/img/imgi4.jpg";
// import imgi5 from "../assets/img/imgi5.jpg";
// import imgi7 from "../assets/img/imgi7.jpg";

// import ComboSection from "./ComboSection";
// import HalfSection from "./HalfSection";
// import OwnSection from "./OwnSection";
// import BigVegSection from "./BigVegSection";
// import BigNonSection from "./BigNonSection";
// import RegularSection from "./RegularSection";
// import RegularNonSection from "./RegularNonSection";
// import CheesBrustSection from "./CheesBrustSection";
// import CrustSection from "./CrustSection";
// import EpicSection from "./EpicSection";
// import PastaSection from "./PastaSection";
// import GarlicSection from "./GarlicSection";
// import StarterSection from "./StarterSection";
// import VegStarterSection from "./VegStarterSection";
// import DrinkSection from "./DrinkSection";
// import IceSection from "./IceSection";

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
//     title: 'Any Value Pizza + Choco Lava Cake',
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
//     title: 'Pack of 3 Pizzas',
//     desc: "Pick any 3 Value Pizzas. Irresistible in every way!",
//     price: 289,
//     img: imgi5,
//     type: "veg",
//   },
//   {
//     id: 12,
//     title: 'Pack of 4 Pizzas',
//     desc: "Pick any 4 Value Pizzas. Irresistible in every way!",
//     price: 389,
//     img: imgi7,
//     type: "veg",
//   },
// ];

// export default function CategoryFilter() {
//   const [selectedCategory, setSelectedCategory] = useState("all");

//   // Filter logic for category buttons
//   const filteredItems = categories.filter((item) => {
//     if (selectedCategory === "veg") return item.type === "veg";
//     if (selectedCategory === "nonveg") return item.type === "nonveg";
//     if (selectedCategory === "bestseller") return item.bestseller;
//     if (selectedCategory === "chefsSpecial") return item.chefsSpecial;
//     return true; // all
//   });

//   return (
//     <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4">
//       {/* Category Buttons */}
//       <div className="flex items-center gap-2 sm:gap-3 bg-white p-3 sm:p-4 rounded-lg shadow mb-6 overflow-x-auto">
//         {/* <button
//           onClick={() => setSelectedCategory("all")}
//           className={`flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition ${
//             selectedCategory === "all"
//               ? "bg-red-500 text-white"
//               : "bg-gray-100 text-gray-800"
//           }`}
//         >
//           All
//         </button> */}

//         <button
//           onClick={() => setSelectedCategory("veg")}
//           className={`flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition ${
//             selectedCategory === "veg"
//               ? "bg-green-500 text-white"
//               : "bg-gray-100 text-gray-800"
//           }`}
//         >
//           <img src={veg} alt="veg" className="w-4 h-4 sm:w-5 sm:h-5" />
//           Veg
//         </button>

//         <button
//           onClick={() => setSelectedCategory("nonveg")}
//           className={`flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition ${
//             selectedCategory === "nonveg"
//               ? "bg-red-500 text-white"
//               : "bg-gray-100 text-gray-800"
//           }`}
//         >
//           <img src={NV} alt="nonveg" className="w-4 h-4 sm:w-5 sm:h-5" />
//           Non-Veg
//         </button>

//         <button
//           onClick={() => setSelectedCategory("bestseller")}
//           className={`flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition ${
//             selectedCategory === "bestseller"
//               ? "bg-yellow-500 text-white"
//               : "bg-gray-100 text-gray-800"
//           }`}
//         >
//           <img
//             src={Bestseller}
//             alt="bestseller"
//             className="w-4 h-4 sm:w-5 sm:h-5"
//           />
//           Bestseller
//         </button>

//         <button
//           onClick={() => setSelectedCategory("chefsSpecial")}
//           className={`flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition ${
//             selectedCategory === "chefsSpecial"
//               ? "bg-orange-500 text-white"
//               : "bg-gray-100 text-gray-800"
//           }`}
//         >
//           <img src={Chefs} alt="chefs" className="w-4 h-4 sm:w-5 sm:h-5" />
//           Chef’s Special
//         </button>
//       </div>

//       {/* Header */}
//       <div className="mb-6 text-center sm:text-left">
//         <h2 className="text-lg sm:text-xl font-bold text-gray-800">
//           Value Fun Pizza @ 99
//         </h2>
//         <p className="text-gray-600 text-sm sm:text-base mt-1">
//           Made with 100% real dairy cheese. 0% Mayonnaise. Pocket friendly
//           pizzas, at just ₹99.
//         </p>
//       </div>

//       {/* Display Filtered Items */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">

//                     {/* Bestseller Tag */}
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
//         {filteredItems.map((item, i) => (
//           <div
//             key={i}
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
//                   alt={`${item.type} icon`}
//                   className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
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

//       {/* Other Sections */}
//       <div className="bg-white py-2">
//         <ComboSection />
//       </div>
//       <div className="bg-white py-2">
//         <HalfSection />
//       </div>
//       <div className="bg-white py-2">
//         <OwnSection />
//       </div>
//       <div className="bg-white py-2">
//         <BigVegSection />
//       </div>
//       <div className="bg-white py-2">
//         <BigNonSection />
//       </div>
//       <div className="bg-white py-2">
//         <RegularSection />
//       </div>
//       <div className="bg-white py-2">
//         <RegularNonSection />
//       </div>
//       <div className="bg-white py-2">
//         <CheesBrustSection />
//       </div>
//       <div className="bg-white py-2">
//         <CrustSection />
//       </div>
//       <div className="bg-white py-2">
//         <EpicSection />
//       </div>
//       <div className="bg-white py-2">
//         <PastaSection />
//       </div>
//       <div className="bg-white py-2">
//         <GarlicSection />
//       </div>
//       <div className="bg-white py-2">
//         <StarterSection />
//       </div>
//       <div className="bg-white py-2">
//         <VegStarterSection />
//       </div>
//       <div className="bg-white py-2">
//         <DrinkSection />
//       </div>
//       <div className="bg-white py-2">
//         <IceSection />
//       </div>
//     </div>
//   );
// }




import React, { useState } from "react";
import veg from "../assets/img/veg.png";
import NV from "../assets/img/NV.png";
import Bestseller from "../assets/img/Bestseller.png";
import Chefs from "../assets/img/Chefs.png";

import imgi1 from "../assets/img/imgi1.jpg";
import imgi2 from "../assets/img/imgi2.jpg";
import imgi3 from "../assets/img/imgi3.jpg";
import imgi4 from "../assets/img/imgi4.jpg";
import imgi5 from "../assets/img/imgi5.jpg";
import imgi7 from "../assets/img/imgi7.jpg";

import ComboSection from "./ComboSection";
import HalfSection from "./HalfSection";
import OwnSection from "./OwnSection";
import BigVegSection from "./BigVegSection";
import BigNonSection from "./BigNonSection";
import RegularSection from "./RegularSection";
import RegularNonSection from "./RegularNonSection";
import CheesBrustSection from "./CheesBrustSection";
import CrustSection from "./CrustSection";
import EpicSection from "./EpicSection";
import PastaSection from "./PastaSection";
import GarlicSection from "./GarlicSection";
import StarterSection from "./StarterSection";
import VegStarterSection from "./VegStarterSection";
import DrinkSection from "./DrinkSection";
import IceSection from "./IceSection";

const categories = [
  {
    id: 1,
    title: "Spicy Jalapeno Pizza [Regular 7'']",
    desc: "Tangy, Spicy Jalapenos with Mozzarella & Molten Cheese. 100% Dairy Cheese | 0% Mayonnaise",
    price: 99,
    img: imgi1,
    type: "veg",
  },
  {
    id: 2,
    title: "Golden Corn Pizza [Regular 7'']",
    desc: "Golden Corn with Mozzarella & Molten Cheese. 100% Dairy Cheese | 0% Mayonnaise",
    price: 99,
    img: imgi2,
    type: "veg",
  },
  {
    id: 3,
    title: 'Capsicum Pizza [Regular 7"]',
    desc: "Roasted Capsicum with Mozzarella & Molten Cheese. 100% Dairy Cheese | 0% Mayonnaise",
    price: 99,
    img: imgi3,
    type: "veg",
  },
  {
    id: 4,
    title: 'Onion Pizza [Regular 7"]',
    desc: "Onions with Mozzarella & Molten Cheese. 100% Dairy Cheese | 0% Mayonnaise",
    price: 99,
    img: imgi4,
    type: "veg",
    bestseller: true,
  },
  {
    id: 5,
    title: 'Tomato Pizza [Regular 7"]',
    desc: "Juicy Tomatoes with Mozzarella & Molten Cheese. 100% Dairy Cheese | 0% Mayonnaise",
    price: 99,
    img: imgi5,
    type: "veg",
  },
  {
    id: 6,
    title: 'Chicken & Onion Pizza [Regular 7"]',
    desc: "Herb Chicken, Onion with Mozzarella & Molten Cheese. 100% Dairy Cheese | 0% Mayonnaise",
    price: 129,
    img: imgi1,
    type: "nonveg",
    chefsSpecial: true,
  },
  {
    id: 7,
    title: "Any Value Pizza + Garlic Breadsticks",
    desc: "Any Value Pizza & Classic Garlic Breadsticks. The perfect pair!",
    price: 179,
    img: imgi7,
    type: "veg",
    bestseller: true,
  },
  {
    id: 8,
    title: 'Any Value Pizza + Choco Lava Cake',
    desc: "Any Value Pizza & Choco Lava Cake. End the treat on a sweet note!",
    price: 149,
    img: imgi2,
    type: "veg",
  },
  {
    id: 9,
    title: "Any Value Pizza + Coke",
    desc: "Any Value Pizza & Coke. Enjoy refreshing sips with every bite!",
    price: 139,
    img: imgi3,
    type: "veg",
  },
  {
    id: 10,
    title: "Pack of 2 Pizzas",
    desc: "Pick any 2 Value Pizzas at a steal deal. Irresistible in every way!",
    price: 189,
    img: imgi4,
    type: "veg",
    bestseller: true,
  },
  {
    id: 11,
    title: 'Pack of 3 Pizzas',
    desc: "Pick any 3 Value Pizzas. Irresistible in every way!",
    price: 289,
    img: imgi5,
    type: "veg",
  },
  {
    id: 12,
    title: 'Pack of 4 Pizzas',
    desc: "Pick any 4 Value Pizzas. Irresistible in every way!",
    price: 389,
    img: imgi7,
    type: "veg",
  },
];

export default function CategoryFilter() {
  const [selectedCategory, setSelectedCategory] = useState("veg");

  // reorder buttons dynamically (clicked button comes first)
  const categoryButtons = [
    { key: "veg", label: "Veg", icon: veg, color: "green" },
    { key: "nonveg", label: "Non-Veg", icon: NV, color: "red" },
    { key: "bestseller", label: "Bestseller", icon: Bestseller, color: "yellow" },
    { key: "chefsSpecial", label: "Chef’s Special", icon: Chefs, color: "orange" },
  ];

  // Move selected button to first
  const reorderedButtons = [
    ...categoryButtons.filter((btn) => btn.key === selectedCategory),
    ...categoryButtons.filter((btn) => btn.key !== selectedCategory),
  ];

  // filter logic
  const filteredItems = categories.filter((item) => {
    if (selectedCategory === "veg") return item.type === "veg";
    if (selectedCategory === "nonveg") return item.type === "nonveg";
    if (selectedCategory === "bestseller") return item.bestseller;
    if (selectedCategory === "chefsSpecial") return item.chefsSpecial;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4">
      {/* Filter Buttons */}
      <div className="flex items-center gap-2 sm:gap-3 bg-white p-3 sm:p-4 rounded-lg shadow mb-6 overflow-x-auto">
        {reorderedButtons.map((btn) => (
          <button
            key={btn.key}
            onClick={() => setSelectedCategory(btn.key)}
            className={`flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition ${
              selectedCategory === btn.key
                ? `bg-${btn.color}-500 text-white`
                : "bg-gray-100 text-gray-800"
            }`}
          >
            <img src={btn.icon} alt={btn.label} className="w-4 h-4 sm:w-5 sm:h-5" />
            {btn.label}
          </button>
        ))}
      </div>

      {/* Header */}
      <div className="mb-6 text-center sm:text-left">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">
          Value Fun Pizza @ 99
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-1">
          Made with 100% real dairy cheese. 0% Mayonnaise. Pocket friendly pizzas, at just ₹99.
        </p>
      </div>

      {/* Pizza Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {filteredItems.map((item, i) => (
          <div
            key={i}
            className="relative bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            {/* Tags */}
            {item.bestseller && (
              <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
                Bestseller
              </div>
            )}
            {item.chefsSpecial && (
              <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
                Chef’s Special
              </div>
            )}

            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-36 sm:h-40 object-cover"
            />

            {/* Content */}
            <div className="p-3 sm:p-4">
              <div className="flex items-center gap-2 mb-1">
                <img
                  src={item.type === "veg" ? veg : NV}
                  alt={`${item.type} icon`}
                  className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                />
                <h3 className="text-sm sm:text-base font-semibold">
                  {item.title}
                </h3>
              </div>

              <p className="text-gray-500 text-xs sm:text-sm mb-2">
                {item.desc}
              </p>

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

      {/* Other Sections */}
      <div className="bg-white py-2"><ComboSection /></div>
      <div className="bg-white py-2"><HalfSection /></div>
      <div className="bg-white py-2"><OwnSection /></div>
      <div className="bg-white py-2"><BigVegSection /></div>
      <div className="bg-white py-2"><BigNonSection /></div>
      <div className="bg-white py-2"><RegularSection /></div>
      <div className="bg-white py-2"><RegularNonSection /></div>
      <div className="bg-white py-2"><CheesBrustSection /></div>
      <div className="bg-white py-2"><CrustSection /></div>
      <div className="bg-white py-2"><EpicSection /></div>
      <div className="bg-white py-2"><PastaSection /></div>
      <div className="bg-white py-2"><GarlicSection /></div>
      <div className="bg-white py-2"><StarterSection /></div>
      <div className="bg-white py-2"><VegStarterSection /></div>
      <div className="bg-white py-2"><DrinkSection /></div>
      <div className="bg-white py-2"><IceSection /></div>
    </div>
  );
}
