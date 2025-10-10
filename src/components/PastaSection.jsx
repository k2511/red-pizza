// import React, { useState } from "react";
// import imgi90 from "../assets/img/imgi90.jpg";
// import imgi91 from "../assets/img/imgi91.jpg";
// import imgi92 from "../assets/img/imgi92.jpg";
// import imgi93 from "../assets/img/imgi93.jpg";
// import imgi94 from "../assets/img/imgi94.jpg";
// import imgi75 from "../assets/img/imgi75.jpg";
// import imgi76 from "../assets/img/imgi76.jpg";
// import imgi77 from "../assets/img/imgi77.jpg";
// import imgi78 from "../assets/img/imgi78.jpg";
// import imgi79 from "../assets/img/imgi79.jpg";
// import imgi80 from "../assets/img/imgi80.jpg";
// import imgi81 from "../assets/img/imgi81.jpg";

// import vegIcon from "../assets/img/veg.png";
// import nonVegIcon from "../assets/img/NV.png";

// const comboData = [
//     {
//     id: 1,
//     title: "Classic Alfredo Pasta [White Sauce]",
//     desc: "[Comes with 2 Garlic Breads, Serves 1] Creamy White Sauce | No Added Veggies | Penne Pasta",
//     price: 249,
//     img: imgi90,
//     type: "veg",
//   },
//   {
//     id: 2,
//     title: "Creamy Pesto Pasta",
//     desc: "[Comes with 2 Garlic Breads, Serves 1] Creamy Pesto Sauce | No Added Veggies | Penne Pasta",
//     price: 249,
//     img: imgi91,
//     type: "veg",
//   },
//   {
//     id: 7,
//     title: "Signature Mixed Pink Pasta [Mixed Sauce]",
//     desc: "[Comes with 2 Garlic Breads, Serves 1] Mixed Pink Sauce | No Added Veggies | Penne Pasta",
//     price: 249,
//     img: imgi76,
//     type: "veg",
//     bestseller: true,
//   },
//     {
//     id: 8,
//     title: "Original Arrabiata Pasta [Red Sauce]",
//     desc: "[Comes with 2 Garlic Breads, Serves 1] Tomato Basil Red Sauce | No Added Veggies | Penne Pasta",
//     price: 249,
//     img: imgi77,
//     type: "veg",
//   },
//   {
//     id: 3,
//     title: "Colored Bell Peppers Pesto Pasta",
//     desc: "[Comes with 2 Garlic Breads, Serves 1] Red & Yellow Bell-Peppers | Creamy Pesto Sauce | Penne Pasta",
//     price: 249,
//     img: imgi92,
//     type: "veg",
//     bestseller: true,
//   },
//    {
//     id: 9,
//     title: "Colored Peppers Arrabiata Pasta [Red Sauce]",
//     desc: "[Comes with 2 Garlic Breads, Serves 1] Red & Yellow Bell-Peppers | Tomato Basil Red Sauce | Penne Pasta",
//     price: 249,
//     img: imgi78,
//     type: "veg",
//   },
 
//   {
//     id: 4,
//     title: "Olive & Mushroom Alfredo Pasta [White Sauce]",
//     desc: "[Comes with 2 Garlic Breads, Serves 1] Olives | Mushrooms | Creamy White Sauce | Penne Pasta",
//     price: 299,
//     img: imgi93,
//     type: "veg",
//     bestseller: true,
//   },
//   {
//     id: 10,
//     title: "Olive & Mushroom Mixed Pink Pasta [Mixed Sauce]",
//     desc: "[Comes with 2 Garlic Breads, Serves 1] Olives | Mushrooms | Mixed Pink Sauce | Penne Pasta",
//     price: 299,
//     img: imgi79,
//     type: "veg",
//   },
//   {
//     id: 5,
//     title: "Cheese Chicken Pesto Pasta",
//     desc: "[Comes with 2 Garlic Breads, Serves 1] Herb Garlic Grilled Chicken | Creamy White Sauce | Penne Pasta",
//     price: 299,
//     img: imgi94,
//     type: "NonVeg",
//     bestseller: true,
//   },
//   {
//     id: 6,
//     title: "Cheese Chicken Pesto Pasta",
//     desc: "[Comes with 2 Garlic Breads, Serves 1] Herb Garlic Grilled Chicken | Creamy Pesto Sauce | Penne Pasta",
//     price: 299,
//     img: imgi75,
//     type: "NonVeg",
//   },
//   {
//     id: 11,
//     title: "Chicken & Mushroom Mixed Pink Pasta [Mixed Sauce]",
//     desc: "[Comes with 2 Garlic Breads, Serves 1] Grilled Chicken | Mushrooms | Olives | Mixed Pink Sauce | Penne Pasta",
//     price: 299,
//     img: imgi80,
//     type: "NonVeg",
//   },
//   {
//     id: 12,
//     title: "Chicken & Mushroom Arrabiata Pasta [Red Sauce]",
//     desc: "[Comes with 2 Garlic Breads, Serves 1] Grilled Chicken | Mushrooms | Olives | Tomato Basil Red Sauce | Penne Pasta",
//     price: 299,
//     img: imgi81,
//     type: "NonVeg",
//   },
// ];

// const feastOptions = [
//   { id: 1, name: "Nachos + Coke [250 ml]", price: 49, originalPrice: 80, type: "veg" },
//   { id: 2, name: "Nachos + Thums Up [250 ml]", price: 49, originalPrice: 80, type: "veg" },
//   { id: 3, name: "Nachos + Sprite [250 ml]", price: 49, originalPrice: 80, type: "veg" },
//   { id: 4, name: "Chocolava + Coke [250 ml]", price: 79, originalPrice: 120, type: "veg" },
//   { id: 5, name: "Chocolava + Thums Up [250 ml]", price: 79, originalPrice: 120, type: "veg" },
//   { id: 6, name: "Chocolava + Sprite [250 ml]", price: 79, originalPrice: 120, type: "veg" },
// ];

// export default function PastaSection({ filter = "all" }) {
//   const [quantities, setQuantities] = useState({});
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedFeast, setSelectedFeast] = useState([]);

//   const filteredItems = comboData.filter((item) => {
//     const type = item.type.toLowerCase();
//     if (filter === "all") return true;
//     if (filter === "veg") return type === "veg";
//     if (filter === "nonveg") return type === "nonveg";
//     if (filter === "bestseller") return item.bestseller;
//     if (filter === "chefsSpecial") return item.chefsSpecial;
//     return true;
//   });

//   const handleAddClick = (item) => {
//     setSelectedItem(item);
//     setSelectedFeast([]);
//     setShowModal(true);
//   };

//   const handleQuantityChange = (id, delta) => {
//     setQuantities((prev) => {
//       const newQty = Math.max((prev[id] || 1) + delta, 1);
//       return { ...prev, [id]: newQty };
//     });
//   };

//   const toggleFeastOption = (optionId) => {
//     setSelectedFeast((prev) => {
//       if (prev.includes(optionId)) {
//         return prev.filter(id => id !== optionId);
//       }
//       return [...prev, optionId];
//     });
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setSelectedItem(null);
//     setSelectedFeast([]);
//   };

//   const handleAddToCart = () => {
//     if (selectedItem) {
//       setQuantities((prev) => ({
//         ...prev,
//         [selectedItem.id]: (prev[selectedItem.id] || 0) + 1,
//       }));
//       alert(`Added ${selectedItem.title} to cart!`);
//       closeModal();
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-6">
//       {/* Header */}
//       <div className="mb-6 text-center sm:text-left">
//         <h2 className="text-lg sm:text-xl font-bold text-gray-800">
//           Gourmet Pastas - By Hola
//         </h2>
//         <p className="text-gray-600 text-sm sm:text-base mt-1">
//           Pastas that feel like a warm hug for the soul!
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

//             <img
//               src={combo.img}
//               alt={combo.title}
//               className="w-full h-48 object-cover"
//             />

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

//                 {quantities[combo.id] ? (
//                   <div className="flex items-center gap-3 border rounded-lg px-3 py-1.5">
//                     <button
//                       onClick={() => handleQuantityChange(combo.id, -1)}
//                       className="text-xl font-bold text-gray-700"
//                     >
//                       −
//                     </button>
//                     <span>{quantities[combo.id]}</span>
//                     <button
//                       onClick={() => handleQuantityChange(combo.id, 1)}
//                       className="text-xl font-bold text-gray-700"
//                     >
//                       +
//                     </button>
//                   </div>
//                 ) : (
//                   <button
//                     className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 text-sm font-semibold transition"
//                     onClick={() => handleAddClick(combo)}
//                   >
//                     + Add
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {showModal && selectedItem && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl relative max-h-[100vh] overflow-y-auto">
//             <button
//               onClick={closeModal}
//               className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl font-bold z-10"
//             >
//               ×
//             </button>

//             <div className="flex flex-col md:flex-row">
//               {/* LEFT SIDE: Image, Description, Price, Quantity */}
//               <div className="md:w-1/2 p-6 border-r">
//                 <div className="flex items-start gap-2 mb-3">
//                   <img 
//                     src={selectedItem.type.toLowerCase() === "veg" ? vegIcon : nonVegIcon}
//                     alt={selectedItem.type}
//                     className="w-5 h-5 mt-1 flex-shrink-0"
//                   />
//                   <h2 className="text-xl font-bold text-gray-900">
//                     {selectedItem.title}
//                   </h2>
//                 </div>

//                 <img
//                   src={selectedItem.img}
//                   alt={selectedItem.title}
//                   className="w-full h-64 object-cover rounded-lg mb-4"
//                 />

//                 <p className="text-gray-600 text-sm mb-4">
//                   {selectedItem.desc}
//                 </p>

//                 <div className="flex items-center justify-between">
//                   <span className="text-2xl font-bold text-gray-900">
//                     ₹{selectedItem.price}
//                   </span>

//                   <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden">
//                     <button
//                       onClick={() => handleQuantityChange(selectedItem.id, -1)}
//                       className="px-4 py-2 text-xl font-bold text-gray-700 hover:bg-gray-100"
//                     >
//                       −
//                     </button>
//                     <span className="px-4 py-2 text-lg font-semibold">
//                       {quantities[selectedItem.id] || 1}
//                     </span>
//                     <button
//                       onClick={() => handleQuantityChange(selectedItem.id, 1)}
//                       className="px-4 py-2 text-xl font-bold text-gray-700 hover:bg-gray-100"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* RIGHT SIDE: Feast Options */}
//               <div className="md:w-1/2 p-6 flex flex-col">
//                 <h3 className="font-semibold text-lg mb-4">Make it a FEAST?</h3>
//                 <div className="space-y-3 flex-grow overflow-y-auto max-h-96">
//                   {feastOptions.map((option) => (
//                     <label
//                       key={option.id}
//                       className="flex justify-between items-center border-2 p-3 rounded-lg cursor-pointer transition hover:bg-gray-50"
//                     >
//                       <div className="flex items-center gap-3">
//                         <input
//                           type="checkbox"
//                           checked={selectedFeast.includes(option.id)}
//                           onChange={() => toggleFeastOption(option.id)}
//                           className="w-4 h-4"
//                         />
//                         <img 
//                           src={vegIcon}
//                           alt="veg"
//                           className="w-4 h-4"
//                         />
//                         <span className="text-sm font-medium">{option.name}</span>
//                       </div>
//                       <div className="text-right">
//                         <span className="text-gray-400 line-through text-xs mr-2">
//                           ₹{option.originalPrice}
//                         </span>
//                         <span className="font-semibold text-gray-700">
//                           ₹{option.price}
//                         </span>
//                       </div>
//                     </label>
//                   ))}
//                 </div>

//                 <button
//                   onClick={handleAddToCart}
//                   className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold w-full mt-6 transition"
//                 >
//                   ADD TO CART
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }













import React, { useState } from "react";
import imgi90 from "../assets/img/imgi90.jpg";
import imgi91 from "../assets/img/imgi91.jpg";
import imgi92 from "../assets/img/imgi92.jpg";
import imgi93 from "../assets/img/imgi93.jpg";
import imgi94 from "../assets/img/imgi94.jpg";
import imgi75 from "../assets/img/imgi75.jpg";
import imgi76 from "../assets/img/imgi76.jpg";
import imgi77 from "../assets/img/imgi77.jpg";
import imgi78 from "../assets/img/imgi78.jpg";
import imgi79 from "../assets/img/imgi79.jpg";
import imgi80 from "../assets/img/imgi80.jpg";
import imgi81 from "../assets/img/imgi81.jpg";

import vegIcon from "../assets/img/veg.png";
import nonVegIcon from "../assets/img/NV.png";

const comboData = [
  {
    id: 1,
    title: "Classic Alfredo Pasta [White Sauce]",
    desc: "[Comes with 2 Garlic Breads, Serves 1] Creamy White Sauce | No Added Veggies | Penne Pasta",
    price: 249,
    img: imgi90,
    type: "veg",
  },
  {
    id: 2,
    title: "Creamy Pesto Pasta",
    desc: "[Comes with 2 Garlic Breads, Serves 1] Creamy Pesto Sauce | No Added Veggies | Penne Pasta",
    price: 249,
    img: imgi91,
    type: "veg",
  },
  {
    id: 7,
    title: "Signature Mixed Pink Pasta [Mixed Sauce]",
    desc: "[Comes with 2 Garlic Breads, Serves 1] Mixed Pink Sauce | No Added Veggies | Penne Pasta",
    price: 249,
    img: imgi76,
    type: "veg",
    bestseller: true,
  },
  {
    id: 8,
    title: "Original Arrabiata Pasta [Red Sauce]",
    desc: "[Comes with 2 Garlic Breads, Serves 1] Tomato Basil Red Sauce | No Added Veggies | Penne Pasta",
    price: 249,
    img: imgi77,
    type: "veg",
  },
  {
    id: 3,
    title: "Colored Bell Peppers Pesto Pasta",
    desc: "[Comes with 2 Garlic Breads, Serves 1] Red & Yellow Bell-Peppers | Creamy Pesto Sauce | Penne Pasta",
    price: 249,
    img: imgi92,
    type: "veg",
    bestseller: true,
  },
  {
    id: 9,
    title: "Colored Peppers Arrabiata Pasta [Red Sauce]",
    desc: "[Comes with 2 Garlic Breads, Serves 1] Red & Yellow Bell-Peppers | Tomato Basil Red Sauce | Penne Pasta",
    price: 249,
    img: imgi78,
    type: "veg",
  },
  {
    id: 4,
    title: "Olive & Mushroom Alfredo Pasta [White Sauce]",
    desc: "[Comes with 2 Garlic Breads, Serves 1] Olives | Mushrooms | Creamy White Sauce | Penne Pasta",
    price: 299,
    img: imgi93,
    type: "veg",
    bestseller: true,
  },
  {
    id: 10,
    title: "Olive & Mushroom Mixed Pink Pasta [Mixed Sauce]",
    desc: "[Comes with 2 Garlic Breads, Serves 1] Olives | Mushrooms | Mixed Pink Sauce | Penne Pasta",
    price: 299,
    img: imgi79,
    type: "veg",
  },
  {
    id: 5,
    title: "Cheese Chicken Alfredo Pasta",
    desc: "[Comes with 2 Garlic Breads, Serves 1] Herb Garlic Grilled Chicken | Creamy White Sauce | Penne Pasta",
    price: 299,
    img: imgi94,
    type: "NonVeg",
    bestseller: true,
  },
  {
    id: 6,
    title: "Cheese Chicken Pesto Pasta",
    desc: "[Comes with 2 Garlic Breads, Serves 1] Herb Garlic Grilled Chicken | Creamy Pesto Sauce | Penne Pasta",
    price: 299,
    img: imgi75,
    type: "NonVeg",
  },
  {
    id: 11,
    title: "Chicken & Mushroom Mixed Pink Pasta [Mixed Sauce]",
    desc: "[Comes with 2 Garlic Breads, Serves 1] Grilled Chicken | Mushrooms | Olives | Mixed Pink Sauce | Penne Pasta",
    price: 299,
    img: imgi80,
    type: "NonVeg",
  },
  {
    id: 12,
    title: "Chicken & Mushroom Arrabiata Pasta [Red Sauce]",
    desc: "[Comes with 2 Garlic Breads, Serves 1] Grilled Chicken | Mushrooms | Olives | Tomato Basil Red Sauce | Penne Pasta",
    price: 299,
    img: imgi81,
    type: "NonVeg",
  },
];

const feastOptions = [
  { id: 1, name: "Nachos + Coke [250 ml]", price: 49, originalPrice: 80, type: "veg" },
  { id: 2, name: "Nachos + Thums Up [250 ml]", price: 49, originalPrice: 80, type: "veg" },
  { id: 3, name: "Nachos + Sprite [250 ml]", price: 49, originalPrice: 80, type: "veg" },
  { id: 4, name: "Chocolava + Coke [250 ml]", price: 79, originalPrice: 120, type: "veg" },
  { id: 5, name: "Chocolava + Thums Up [250 ml]", price: 79, originalPrice: 120, type: "veg" },
  { id: 6, name: "Chocolava + Sprite [250 ml]", price: 79, originalPrice: 120, type: "veg" },
];

export default function PastaSection({ filter = "all" }) {
  const [quantities, setQuantities] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedFeast, setSelectedFeast] = useState([]);
  const [modalQuantity, setModalQuantity] = useState(1);

  const filteredItems = comboData.filter((item) => {
    const type = item.type.toLowerCase();
    if (filter === "all") return true;
    if (filter === "veg") return type === "veg";
    if (filter === "nonveg") return type === "nonveg";
    if (filter === "bestseller") return item.bestseller;
    if (filter === "chefsSpecial") return item.chefsSpecial;
    return true;
  });

  const handleAddClick = (item) => {
    setSelectedItem(item);
    setSelectedFeast([]);
    setModalQuantity(1);
    setShowModal(true);
  };

  const handleQuantityChange = (id, delta) => {
    setQuantities((prev) => {
      const newQty = Math.max((prev[id] || 0) + delta, 0);
      const updated = { ...prev };
      if (newQty === 0) delete updated[id];
      else updated[id] = newQty;
      return updated;
    });
  };

  const handleModalQuantityChange = (delta) => {
    setModalQuantity((prev) => Math.max(1, prev + delta));
  };

  const toggleFeastOption = (optionId) => {
    setSelectedFeast((prev) => {
      if (prev.includes(optionId)) {
        return prev.filter(id => id !== optionId);
      }
      return [...prev, optionId];
    });
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
    setSelectedFeast([]);
    setModalQuantity(1);
  };

  const handleAddToCart = () => {
    if (selectedItem) {
      // Add the modal quantity to the cart
      setQuantities((prev) => ({
        ...prev,
        [selectedItem.id]: (prev[selectedItem.id] || 0) + modalQuantity,
      }));
      
      const feastNames = selectedFeast.map(id => {
        const feast = feastOptions.find(opt => opt.id === id);
        return feast ? feast.name : '';
      }).filter(Boolean).join(', ');
      
      const feastTotal = selectedFeast.reduce((sum, id) => {
        const feast = feastOptions.find(opt => opt.id === id);
        return sum + (feast ? feast.price : 0);
      }, 0);
      
      const itemTotal = selectedItem.price * modalQuantity;
      const grandTotal = itemTotal + (feastTotal * modalQuantity);
      
      alert(
        `Added to cart:\n${modalQuantity}x ${selectedItem.title}\n` +
        (feastNames ? `Feast: ${feastNames}\n` : '') +
        `Total: ₹${grandTotal}`
      );
      closeModal();
    }
  };

  // Calculate total price in modal
  const calculateModalTotal = () => {
    if (!selectedItem) return 0;
    
    const itemTotal = selectedItem.price * modalQuantity;
    const feastTotal = selectedFeast.reduce((sum, id) => {
      const feast = feastOptions.find(opt => opt.id === id);
      return sum + (feast ? feast.price : 0);
    }, 0) * modalQuantity;
    
    return itemTotal + feastTotal;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-6 text-center sm:text-left">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">
          Gourmet Pastas - By Hola
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-1">
          Pastas that feel like a warm hug for the soul!
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
              <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded z-10">
                Bestseller
              </div>
            )}

            <img
              src={combo.img}
              alt={combo.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4 flex flex-col justify-between h-[180px]">
              <h3 className="text-gray-800 font-semibold text-base mb-1 flex items-center gap-2">
                <img
                  src={combo.type.toLowerCase() === "veg" ? vegIcon : nonVegIcon}
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

                {quantities[combo.id] ? (
                  <div className="flex items-center gap-3 border-2 border-gray-300 rounded-lg px-3 py-1.5">
                    <button
                      onClick={() => handleQuantityChange(combo.id, -1)}
                      className="text-xl font-bold text-gray-700 hover:text-gray-900"
                    >
                      −
                    </button>
                    <span className="font-semibold min-w-[20px] text-center">{quantities[combo.id]}</span>
                    <button
                      onClick={() => handleQuantityChange(combo.id, 1)}
                      className="text-xl font-bold text-gray-700 hover:text-gray-900"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 active:bg-red-700 text-sm font-semibold transition"
                    onClick={() => handleAddClick(combo)}
                  >
                    + Add
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl relative max-h-[95vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-3xl font-bold z-10 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
            >
              ×
            </button>

            <div className="flex flex-col md:flex-row">
              {/* LEFT SIDE: Image, Description, Price, Quantity */}
              <div className="md:w-1/2 p-6 border-r">
                <div className="flex items-start gap-2 mb-3">
                  <img 
                    src={selectedItem.type.toLowerCase() === "veg" ? vegIcon : nonVegIcon}
                    alt={selectedItem.type}
                    className="w-5 h-5 mt-1 flex-shrink-0"
                  />
                  <h2 className="text-xl font-bold text-gray-900">
                    {selectedItem.title}
                  </h2>
                </div>

                <img
                  src={selectedItem.img}
                  alt={selectedItem.title}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />

                <p className="text-gray-600 text-sm mb-4">
                  {selectedItem.desc}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-2xl font-bold text-gray-900">
                    ₹{selectedItem.price}
                  </span>

                  <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden">
                    <button
                      onClick={() => handleModalQuantityChange(-1)}
                      className="px-4 py-2 text-xl font-bold text-gray-700 hover:bg-gray-100 transition"
                    >
                      −
                    </button>
                    <span className="px-4 py-2 text-lg font-semibold min-w-[50px] text-center">
                      {modalQuantity}
                    </span>
                    <button
                      onClick={() => handleModalQuantityChange(1)}
                      className="px-4 py-2 text-xl font-bold text-gray-700 hover:bg-gray-100 transition"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE: Feast Options */}
              <div className="md:w-1/2 p-6 flex flex-col">
                <h3 className="font-semibold text-lg mb-4">Make it a FEAST?</h3>
                <div className="space-y-3 flex-grow overflow-y-auto max-h-96">
                  {feastOptions.map((option) => (
                    <label
                      key={option.id}
                      className={`flex justify-between items-center border-2 p-3 rounded-lg cursor-pointer transition ${
                        selectedFeast.includes(option.id)
                          ? "border-red-500 bg-red-50"
                          : "border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={selectedFeast.includes(option.id)}
                          onChange={() => toggleFeastOption(option.id)}
                          className="w-4 h-4 accent-red-500"
                        />
                        <img 
                          src={vegIcon}
                          alt="veg"
                          className="w-4 h-4"
                        />
                        <span className="text-sm font-medium">{option.name}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-gray-400 line-through text-xs mr-2">
                          ₹{option.originalPrice}
                        </span>
                        <span className="font-semibold text-gray-700">
                          ₹{option.price}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>

                {/* Total Price Display */}
                {(modalQuantity > 1 || selectedFeast.length > 0) && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-700 font-medium">
                        Total Price {modalQuantity > 1 ? `(${modalQuantity} items)` : ''}
                      </span>
                      <span className="text-xl font-bold text-red-600">
                        ₹{calculateModalTotal()}
                      </span>
                    </div>
                  </div>
                )}

                <button
                  onClick={handleAddToCart}
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold w-full mt-4 transition shadow-lg hover:shadow-xl"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}