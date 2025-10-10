// import React, { useState } from "react";
// import imgi08 from "../assets/img/imgi08.jpg";
// import imgi01 from "../assets/img/imgi01.jpg";
// import imgi02 from "../assets/img/imgi02.jpg";
// import imgi03 from "../assets/img/imgi03.jpg";
// import imgi04 from "../assets/img/imgi04.jpg";
// import imgi05 from "../assets/img/imgi05.jpg";
// import imgi06 from "../assets/img/imgi06.jpg";
// import imgi07 from "../assets/img/imgi07.jpg";
// import vegIcon from "../assets/img/veg.png";
// import nonVegIcon from "../assets/img/NV.png";

// const comboData = [
//   {
//     id: 1,
//     title: "Smoked Tandoori Chicken Wings",
//     desc: "Wings with a Desi Zing! Classic chicken wings dunked in tandoori spices & smoked on grill. Take a break from the regular.",
//     img: imgi01,
//     type: "NonVeg",
//     price: 229,
//   },
//   {
//     id: 2,
//     title: "Peri Peri Chicken Wings",
//     desc: "Tender & juicy chicken wings rubbed with the supremely popular Peri Peri sauce. We're sure you'll love it peri much!",
//     img: imgi02,
//     type: "NonVeg",
//     price: 229,
//     bestseller: true,
//   },
//   {
//     id: 3,
//     title: "Garlic Herb Chicken Wings",
//     desc: "Doused in chef's special garlic & herb glaze, these chicken wings are absolutely worth a try.",
//     img: imgi03,
//     type: "NonVeg",
//     price: 229,
//   },
//   {
//     id: 4,
//     title: "Americano BBQ Chicken Wings",
//     desc: "Let's get the party started with the dad of all chicken wings, glazed & grilled in the timeless BBQ Sauce.",
//     img: imgi04,
//     type: "NonVeg",
//     price: 229,
//   },
//   {
//     id: 5,
//     title: "Spicy Chicken Tikka [Boneless]",
//     desc: "Tender chunks of chicken coated in marinade of curd and spices and grilled perfectly.",
//     img: imgi05,
//     type: "NonVeg",
//     price: 299,
//     bestseller: true,
//   },
//   {
//     id: 6,
//     title: "Peri Peri Chicken [Boneless]",
//     desc: "Tender and juicy chicken marinated in a peri peri marinade, and skewed on grill.",
//     img: imgi06,
//     type: "NonVeg",
//     price: 299,
//   },
//   {
//     id: 7,
//     title: "Black Pepper Chicken [Boneless]",
//     desc: "Juicy chicken cubes marinated in a creamy marinade, crushed black pepper & herbs.",
//     img: imgi07,
//     type: "NonVeg",
//     price: 299,
//   },
//   {
//     id: 8,
//     title: "Smoky BBQ Chicken [Boneless]",
//     desc: "Crispy and juicy, this BBQ grilled chicken is a lip-smacking combination of smoky flavours.",
//     img: imgi08,
//     type: "NonVeg",
//     price: 299,
//   },
// ];

// export default function StarterSection() {
//   const [quantities, setQuantities] = useState({});
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [selectedSize, setSelectedSize] = useState("6 Pieces");
//   const [showModal, setShowModal] = useState(false);

//   const handleAddClick = (item) => {
//     // First 4 items show modal
//     if ([1, 2, 3, 4].includes(item.id)) {
//       setSelectedItem(item);
//       setSelectedSize("6 Pieces");
//       setShowModal(true);
//     } else {
//       // Others just increment
//       setQuantities((prev) => ({
//         ...prev,
//         [item.id]: (prev[item.id] || 0) + 1,
//       }));
//     }
//   };

//   const handleQuantityChange = (id, delta) => {
//     setQuantities((prev) => {
//       const newQty = Math.max((prev[id] || 0) + delta, 0);
//       const updated = { ...prev };
//       if (newQty === 0) delete updated[id];
//       else updated[id] = newQty;
//       return updated;
//     });
//   };

//   const closeModal = () => {
//     setShowModal(false);
//     setSelectedItem(null);
//   };

//   const handleAddToCart = () => {
//     const price = selectedSize === "6 Pieces" ? 229 : 419;
//     setQuantities((prev) => ({
//       ...prev,
//       [selectedItem.id]: (prev[selectedItem.id] || 0) + 1,
//     }));
//     alert(`${selectedItem.title} (${selectedSize}) added to cart – ₹${price}`);
//     setShowModal(false);
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-6">
//       <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
//         Chicken Starters
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//         {comboData.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white border rounded-xl shadow hover:shadow-lg transition overflow-hidden relative"
//           >
//             {item.bestseller && (
//               <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
//                 Bestseller
//               </div>
//             )}

//             <img
//               src={item.img}
//               alt={item.title}
//               className="w-full h-48 object-cover"
//             />

//             <div className="p-4 flex flex-col justify-between h-[200px]">
//               <h3 className="text-gray-800 font-semibold text-base flex items-center gap-2">
//                 <div className="w-4 h-4 border-2 border-red-600 flex items-center justify-center">
//                   <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
//                 </div>
//                 {item.title}
//               </h3>
//               <p className="text-gray-500 text-sm mb-2">{item.desc}</p>

//               <div className="flex items-center justify-between mt-auto">
//                 <span className="font-semibold text-gray-900">
//                   ₹{item.price}
//                 </span>

//                 {quantities[item.id] ? (
//                   <div className="flex items-center gap-3 border rounded-lg px-3 py-1.5">
//                     <button
//                       onClick={() => handleQuantityChange(item.id, -1)}
//                       className="text-xl font-bold text-gray-700"
//                     >
//                       −
//                     </button>
//                     <span>{quantities[item.id]}</span>
//                     <button
//                       onClick={() => handleQuantityChange(item.id, 1)}
//                       className="text-xl font-bold text-gray-700"
//                     >
//                       +
//                     </button>
//                   </div>
//                 ) : (
//                   <button
//                     className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-5 py-2 rounded-lg"
//                     onClick={() => handleAddClick(item)}
//                   >
//                     + Add
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal for first 4 items */}
//       {showModal && selectedItem && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
//           <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl relative">
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
//                   <div className="w-5 h-5 border-2 border-red-600 mt-1 flex-shrink-0 flex items-center justify-center">
//                     <div className="w-2 h-2 bg-red-600 rounded-full"></div>
//                   </div>
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
//                     ₹{selectedSize === "6 Pieces" ? 229 : 419}
//                   </span>

//                   <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden">
//                     <button
//                       onClick={() => {
//                         const currentQty = quantities[selectedItem.id] || 1;
//                         if (currentQty > 1) {
//                           handleQuantityChange(selectedItem.id, -1);
//                         }
//                       }}
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

//               {/* RIGHT SIDE: Size Selection */}
//               <div className="md:w-1/2 p-6 flex flex-col">
//                 <h3 className="font-semibold text-lg mb-4">Select a Size</h3>
//                 <div className="space-y-3 flex-grow">
//                   {[
//                     { label: "6 Pieces", price: 229 },
//                     { label: "12 Pieces", price: 419 },
//                   ].map((opt) => (
//                     <label
//                       key={opt.label}
//                       className={`flex justify-between items-center border-2 p-3 rounded-lg cursor-pointer transition ${
//                         selectedSize === opt.label
//                           ? "border-red-500 bg-red-50"
//                           : "border-gray-300"
//                       }`}
//                     >
//                       <div className="flex items-center gap-3">
//                         <input
//                           type="radio"
//                           name="size"
//                           checked={selectedSize === opt.label}
//                           onChange={() => setSelectedSize(opt.label)}
//                           className="w-5 h-5 text-red-500"
//                         />
//                         <span className="font-medium">{opt.label}</span>
//                       </div>
//                       <span className="font-semibold text-gray-700">
//                         ₹{opt.price}
//                       </span>
//                     </label>
//                   ))}
//                 </div>

//                 <button
//                   onClick={handleAddToCart}
//                   className="bg-red-500  text-white px-6 py-3 rounded-lg font-semibold w-full mt-6 transition"
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
import imgi08 from "../assets/img/imgi08.jpg";
import imgi01 from "../assets/img/imgi01.jpg";
import imgi02 from "../assets/img/imgi02.jpg";
import imgi03 from "../assets/img/imgi03.jpg";
import imgi04 from "../assets/img/imgi04.jpg";
import imgi05 from "../assets/img/imgi05.jpg";
import imgi06 from "../assets/img/imgi06.jpg";
import imgi07 from "../assets/img/imgi07.jpg";

const comboData = [
  {
    id: 1,
    title: "Smoked Tandoori Chicken Wings",
    desc: "Wings with a Desi Zing! Classic chicken wings dunked in tandoori spices & smoked on grill. Take a break from the regular.",
    img: imgi01,
    type: "NonVeg",
    price: 229,
    sizeOptions: [
      { label: "6 Pieces", price: 229 },
      { label: "12 Pieces", price: 419 },
    ],
  },
  {
    id: 2,
    title: "Peri Peri Chicken Wings",
    desc: "Tender & juicy chicken wings rubbed with the supremely popular Peri Peri sauce. We're sure you'll love it peri much!",
    img: imgi02,
    type: "NonVeg",
    price: 229,
    bestseller: true,
    sizeOptions: [
      { label: "6 Pieces", price: 229 },
      { label: "12 Pieces", price: 419 },
    ],
  },
  {
    id: 3,
    title: "Garlic Herb Chicken Wings",
    desc: "Doused in chef's special garlic & herb glaze, these chicken wings are absolutely worth a try.",
    img: imgi03,
    type: "NonVeg",
    price: 229,
    sizeOptions: [
      { label: "6 Pieces", price: 229 },
      { label: "12 Pieces", price: 419 },
    ],
  },
  {
    id: 4,
    title: "Americano BBQ Chicken Wings",
    desc: "Let's get the party started with the dad of all chicken wings, glazed & grilled in the timeless BBQ Sauce.",
    img: imgi04,
    type: "NonVeg",
    price: 229,
    sizeOptions: [
      { label: "6 Pieces", price: 229 },
      { label: "12 Pieces", price: 419 },
    ],
  },
  {
    id: 5,
    title: "Spicy Chicken Tikka [Boneless]",
    desc: "Tender chunks of chicken coated in marinade of curd and spices and grilled perfectly.",
    img: imgi05,
    type: "NonVeg",
    price: 299,
    bestseller: true,
  },
  {
    id: 6,
    title: "Peri Peri Chicken [Boneless]",
    desc: "Tender and juicy chicken marinated in a peri peri marinade, and skewed on grill.",
    img: imgi06,
    type: "NonVeg",
    price: 299,
  },
  {
    id: 7,
    title: "Black Pepper Chicken [Boneless]",
    desc: "Juicy chicken cubes marinated in a creamy marinade, crushed black pepper & herbs.",
    img: imgi07,
    type: "NonVeg",
    price: 299,
  },
  {
    id: 8,
    title: "Smoky BBQ Chicken [Boneless]",
    desc: "Crispy and juicy, this BBQ grilled chicken is a lip-smacking combination of smoky flavours.",
    img: imgi08,
    type: "NonVeg",
    price: 299,
  },
];

// Non-Veg Icon Component
const NonVegIcon = () => (
  <div className="w-4 h-4 border-2 border-red-600 flex items-center justify-center flex-shrink-0">
    <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
  </div>
);

// Combo Modal Component (for items with size options - first 4 items)
function SizeModal({ item, onClose, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState(item.sizeOptions?.[0]?.label || "6 Pieces");
  const [quantity, setQuantity] = useState(1);

  const selectedPrice = item.sizeOptions?.find(s => s.label === selectedSize)?.price || item.price;
  const totalPrice = selectedPrice * quantity;

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    // Add the quantity to cart
    onAddToCart(item.id, quantity);
    alert(`Added ${quantity}x ${item.title} (${selectedSize})\nTotal: ₹${totalPrice}`);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-3 sm:px-4 z-50" 
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl w-full max-w-5xl max-h-[95vh] overflow-y-auto relative shadow-2xl" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-700 font-bold text-3xl sm:text-4xl leading-none z-10 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
        >
          ×
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Left Section - Image & Details */}
          <div className="md:w-1/2 p-4 sm:p-6 lg:p-8 bg-gray-50 border-b md:border-b-0 md:border-r border-gray-200">
            <div className="flex items-start gap-2 mb-4">
              <NonVegIcon />
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 leading-tight">
                {item.title}
              </h2>
            </div>

            {/* Product Image */}
            <div className="mb-4 sm:mb-6 rounded-lg overflow-hidden bg-white shadow-sm">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 sm:h-64 lg:h-80 object-cover"
              />
            </div>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
              {item.desc}
            </p>

            {/* Price & Quantity */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                ₹ {selectedPrice}
              </span>

              <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 text-lg sm:text-xl font-semibold text-gray-600 hover:bg-gray-100 transition active:bg-gray-200"
                >
                  -
                </button>
                <span className="px-4 sm:px-6 py-1.5 sm:py-2 text-base sm:text-lg font-semibold text-gray-900 bg-white min-w-[50px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 text-lg sm:text-xl font-semibold text-gray-600 hover:bg-gray-100 transition active:bg-gray-200"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Right Section - Size Options */}
          <div className="md:w-1/2 p-4 sm:p-6 lg:p-8 flex flex-col">
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-4">
              Select a Size
            </h3>

            <div className="space-y-3 sm:space-y-4 flex-grow">
              {item.sizeOptions?.map((size, idx) => (
                <label
                  key={idx}
                  className={`flex items-center justify-between p-3 sm:p-4 border-2 rounded-lg cursor-pointer transition ${
                    selectedSize === size.label
                      ? "border-red-500 bg-red-50"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="size"
                      value={size.label}
                      checked={selectedSize === size.label}
                      onChange={() => setSelectedSize(size.label)}
                      className="w-5 h-5 accent-red-500 cursor-pointer"
                    />
                    <span className="text-xs sm:text-sm lg:text-base font-medium text-gray-800">
                      {size.label}
                    </span>
                  </div>
                  <span className="text-sm sm:text-base lg:text-lg font-bold text-gray-900">
                    ₹ {size.price}
                  </span>
                </label>
              ))}
            </div>

            {/* Total Price Display */}
            {quantity > 1 && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4 mt-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-gray-700 font-medium">
                    Total Price ({quantity} items)
                  </span>
                  <span className="text-lg sm:text-xl font-bold text-red-600">
                    ₹ {totalPrice}
                  </span>
                </div>
              </div>
            )}

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base lg:text-lg transition mt-4 sm:mt-6 shadow-lg hover:shadow-xl"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Component
export default function StarterSection() {
  const [quantities, setQuantities] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleAddClick = (item) => {
    // First 4 items show modal for size selection
    if (item.sizeOptions && item.sizeOptions.length > 0) {
      setSelectedItem(item);
      setShowModal(true);
    } else {
      // Others just increment quantity
      setQuantities((prev) => ({
        ...prev,
        [item.id]: (prev[item.id] || 0) + 1,
      }));
    }
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

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  const handleModalAddToCart = (itemId, quantity) => {
    setQuantities((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + quantity,
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
      <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
        Chicken Starters
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {comboData.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-xl shadow hover:shadow-lg transition overflow-hidden relative"
          >
            {item.bestseller && (
              <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded z-10">
                Bestseller
              </div>
            )}

            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4 flex flex-col justify-between min-h-[200px]">
              <h3 className="text-gray-800 font-semibold text-base flex items-center gap-2 mb-2">
                <NonVegIcon />
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm mb-3 leading-snug">{item.desc}</p>

              <div className="flex items-center justify-between mt-auto">
                <span className="font-semibold text-gray-900">
                  ₹{item.price}
                </span>

                {quantities[item.id] ? (
                  <div className="flex items-center gap-3 border-2 border-gray-300 rounded-lg px-3 py-1.5">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="text-xl font-bold text-gray-700 hover:text-gray-900"
                    >
                      −
                    </button>
                    <span className="font-semibold min-w-[20px] text-center">{quantities[item.id]}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="text-xl font-bold text-gray-700 hover:text-gray-900"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className="bg-red-500 hover:bg-red-600 active:bg-red-700 text-white text-sm font-semibold px-5 py-2 rounded-lg transition"
                    onClick={() => handleAddClick(item)}
                  >
                    + Add
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for items with size options */}
      {showModal && selectedItem && (
        <SizeModal 
          item={selectedItem} 
          onClose={closeModal}
          onAddToCart={handleModalAddToCart}
        />
      )}
    </div>
  );
}