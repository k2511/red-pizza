// import React, { useState } from "react";
// import imgi021 from "../assets/img/imgi021.jpg";
// import imgi022 from "../assets/img/imgi022.jpg";
// import imgi023 from "../assets/img/imgi023.jpg";
// import imgi024 from "../assets/img/imgi024.jpg";
// import imgi025 from "../assets/img/imgi025.jpg";
// import imgi026 from "../assets/img/imgi026.jpg";
// import imgi027 from "../assets/img/imgi027.jpg";
// import imgi028 from "../assets/img/imgi028.jpg";
// import imgi029 from "../assets/img/imgi029.jpg";

// import vegIcon from "../assets/img/veg.png";
// import nonVegIcon from "../assets/img/NV.png";

// const comboData = [
//   {
//     id: 1,
//     title: "Choco Lava Cake + Coke Combo @ Rs.79",
//     desc: "[Save Rs.41] Choco Lava Cake + Coke. Make every order a complete feast!",
//     price: 79,
//     img: imgi021,
//     type: "veg",
//     bestseller: true,
//   },
//   {
//     id: 2,
//     title: "Nachos + Coke Combo @ Rs.49",
//     desc: "[Save Rs.31] Nachos + Coke. Perfect sides to complete your order!",
//     price: 49,
//     img: imgi022,
//     type: "veg",
//   },
//   {
//     id: 3,
//     title: 'Choco Lava Cake',
//     desc: "With a crisp exterior & molten chocolate oozing out of its center, our Choco Lava is HEAVENLY! Go for it.",
//     price: 99,
//     img: imgi023,
//     type: "veg",
//     bestseller: true,
//   },
//   {
//     id: 4,
//     title: 'Chocolate Overload Brownie',
//     desc: "Utterly chocolaty brownie with the fudgiest centre. Fresh from the oven, it’s a melt-in-the-mouth dessert!",
//     price: 99,
//     img: imgi024,
//     type: "NonVeg",
//     bestseller: true,
//   },
//   {
//     id: 5,
//     title: 'Butterscotch Mousse Cake',
//     desc: "An explosion of creamy butterscotch & rich coco cake crumble in every bite. Experience the blizzard!",
//     price: 99,
//     img: imgi025,
//     type: "NonVeg",
//   },
//   {
//     id: 6,
//     title: 'Belgian Chocolate Mousse Cake',
//     desc: "Deliciously creamy, silky, and loaded with intense dark chocolate. It’s not just a dessert, this is love in a cup!",
//     price: 99,
//     img: imgi026,
//     type: "NonVeg",
//   },
//   {
//     id: 7,
//     title: "Coke [475 ml]",
//     desc: "A bubbly drink that every pizza needs.",
//     price: 70,
//     img: imgi027,
//     type: "veg",
//     bestseller: true,
//   },
//   {
//     id: 8,
//     title: 'Bisleri Bliss - Mineral Water [500 ml]',
//     desc: "500 ML Water Bottles.",
//     price: 20,
//     img: imgi028,
//     type: "veg",
//   },
//   {
//     id: 9,
//     title: "Cheesy Dip",
//     desc: "A creamy dip for the ones who love all things CHEESY.",
//     price: 25,
//     img: imgi029,
//     type: "veg",
//   },
// ];


// export default function DrinkSection({ filter }) {
//   // Fix filter: use comboData instead of undefined categories
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
//           Desserts & Drinks
//         </h2>
//         <p className="text-gray-600 text-sm sm:text-base mt-1">
//           Sweet treats & refreshing drinks.
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
import imgi021 from "../assets/img/imgi021.jpg";
import imgi022 from "../assets/img/imgi022.jpg";
import imgi023 from "../assets/img/imgi023.jpg";
import imgi024 from "../assets/img/imgi024.jpg";
import imgi025 from "../assets/img/imgi025.jpg";
import imgi026 from "../assets/img/imgi026.jpg";
import imgi027 from "../assets/img/imgi027.jpg";
import imgi028 from "../assets/img/imgi028.jpg";
import imgi029 from "../assets/img/imgi029.jpg";

// Sample data
const comboData = [
  {
    id: 1,
    title: "Choco Lava Cake + Coke Combo @ Rs.79",
    desc: "[Save Rs.41] Choco Lava Cake + Coke. Make every order a complete feast!",
    price: 79,
    img: imgi021,
    type: "veg",
    bestseller: true,
    comboItems: ["Choco Lava Cake"],
    drinkOptions: [
      { name: "Thums up [250 ml]", price: 0 },
      { name: "Coke [250 ml]", price: 0 },
      { name: "Sprite [250 ml]", price: 0 },
    ]
  },
  {
    id: 2,
    title: "Nachos + Coke Combo @ Rs.49",
    desc: "[Save Rs.31] Nachos + Coke. Perfect sides to complete your order!",
    price: 49,
    img: imgi022,
    type: "veg",
    comboItems: ["Nachos"],
    drinkOptions: [
      { name: "Thums up [250 ml]", price: 0 },
      { name: "Coke [250 ml]", price: 0 },
      { name: "Sprite [250 ml]", price: 0 },
    ]
  },
  {
    id: 3,
    title: 'Choco Lava Cake',
    desc: "With a crisp exterior & molten chocolate oozing out of its center, our Choco Lava is HEAVENLY! Go for it.",
    price: 99,
    img: imgi023,
    type: "veg",
    bestseller: true,
    comboItems: ["Choco Lava Cake"],
    drinkOptions: [
      { name: "Thums up [250 ml]", price: 30 },
      { name: "Coke [250 ml]", price: 30 },
      { name: "Sprite [250 ml]", price: 30 },
    ]
  },
  {
    id: 4,
    title: 'Chocolate Overload Brownie',
    desc: "Utterly chocolaty brownie with the fudgiest centre. Fresh from the oven, it's a melt-in-the-mouth dessert!",
    price: 99,
    img: imgi024,
    type: "NonVeg",
    bestseller: true,
  },
  {
    id: 5,
    title: 'Butterscotch Mousse Cake',
    desc: "An explosion of creamy butterscotch & rich coco cake crumble in every bite. Experience the blizzard!",
    price: 99,
    img: imgi025,
    type: "NonVeg",
  },
  {
    id: 6,
    title: 'Belgian Chocolate Mousse Cake',
    desc: "Deliciously creamy, silky, and loaded with intense dark chocolate. It's not just a dessert, this is love in a cup!",
    price: 99,
    img: imgi026,
    type: "NonVeg",
  },
  {
    id: 7,
    title: "Coke [475 ml]",
    desc: "A bubbly drink that every pizza needs.",
    price: 70,
    img: imgi027,
    type: "veg",
    bestseller: true,
  },
  {
    id: 8,
    title: 'Bisleri Bliss - Mineral Water [500 ml]',
    desc: "500 ML Water Bottles.",
    price: 20,
    img: imgi028,
    type: "veg",
  },
  {
    id: 9,
    title: "Cheesy Dip",
    desc: "A creamy dip for the ones who love all things CHEESY.",
    price: 25,
    img: imgi029,
    type: "veg",
  },
];

// Veg/NonVeg Icons
const VegIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" stroke="#0f9d58" strokeWidth="2" fill="none" />
    <circle cx="12" cy="12" r="6" fill="#0f9d58" />
  </svg>
);

const NonVegIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" stroke="#d32f2f" strokeWidth="2" fill="none" />
    <circle cx="12" cy="12" r="6" fill="#d32f2f" />
  </svg>
);

// Combo Modal Component (for items with id 1, 2, 3)
function ComboModal({ item, onClose }) {
  const [selectedDrink, setSelectedDrink] = useState(item.drinkOptions?.[0]?.name || "");
  const [quantity, setQuantity] = useState(1);

  const drinkPrice = item.drinkOptions?.find(d => d.name === selectedDrink)?.price || 0;
  const totalPrice = (item.price + drinkPrice) * quantity;

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    console.log({
      item: item.title,
      drink: selectedDrink,
      quantity,
      totalPrice,
    });
    alert(`Added ${quantity}x ${item.title} with ${selectedDrink}\nTotal: ₹${totalPrice}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-3 sm:px-4 z-50" onClick={onClose}>
      <div className="bg-white rounded-xl w-full max-w-5xl max-h-[95vh] overflow-y-auto relative shadow-2xl" onClick={(e) => e.stopPropagation()}>
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
              {item.type.toLowerCase() === "veg" ? <VegIcon /> : <NonVegIcon />}
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
                ₹ {item.price + drinkPrice}
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

          {/* Right Section - Combo Options */}
          <div className="md:w-1/2 p-4 sm:p-6 lg:p-8 flex flex-col">
            {/* Comes With Section */}
            {item.comboItems && item.comboItems.length > 0 && (
              <div className="mb-6">
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3">
                  Comes with
                </h3>
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                  {item.comboItems.map((comboItem, idx) => (
                    <p key={idx} className="text-sm sm:text-base text-gray-700">
                      {comboItem}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Drink Options */}
            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-4">
              Choose a Drink
            </h3>

            <div className="space-y-3 sm:space-y-4 flex-grow">
              {item.drinkOptions?.map((drink, idx) => (
                <label
                  key={idx}
                  className={`flex items-center justify-between p-3 sm:p-4 border-2 rounded-lg cursor-pointer transition ${
                    selectedDrink === drink.name
                      ? " bg-red-50"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="drink"
                      value={drink.name}
                      checked={selectedDrink === drink.name}
                      onChange={() => setSelectedDrink(drink.name)}
                      className="w-5 h-5 accent-red-500 cursor-pointer"
                    />
                    <div className="flex items-center gap-2">
                      <VegIcon />
                      <span className="text-xs sm:text-sm lg:text-base font-medium text-gray-800">
                        {drink.name}
                      </span>
                    </div>
                  </div>
                  {drink.price > 0 && (
                    <span className="text-sm sm:text-base lg:text-lg font-bold text-gray-900">
                      + ₹ {drink.price}
                    </span>
                  )}
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
              className="w-full bg-red-500 text-white py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base lg:text-lg transition mt-4 sm:mt-6 shadow-lg hover:shadow-xl"
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
export default function DrinkSection({ filter = "all" }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [itemQuantities, setItemQuantities] = useState({});

  const filteredItems = comboData.filter((item) => {
    if (filter === "all") return true;
    if (filter === "veg") return item.type.toLowerCase() === "veg";
    if (filter === "nonveg") return item.type.toLowerCase() === "nonveg";
    if (filter === "bestseller") return item.bestseller;
    return true;
  });

  const handleAddClick = (item) => {
    // Show modal for combo items (id 1, 2, 3)
    if (item.id <= 3) {
      setSelectedItem(item);
      setShowModal(true);
    } else {
      // For other items, directly add with quantity
      const currentQty = itemQuantities[item.id] || 0;
      setItemQuantities({
        ...itemQuantities,
        [item.id]: currentQty + 1
      });
    }
  };

  const handleQuantityChange = (itemId, delta) => {
    const currentQty = itemQuantities[itemId] || 0;
    const newQty = Math.max(0, currentQty + delta);
    
    if (newQty === 0) {
      const newQuantities = { ...itemQuantities };
      delete newQuantities[itemId];
      setItemQuantities(newQuantities);
    } else {
      setItemQuantities({
        ...itemQuantities,
        [itemId]: newQty
      });
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-4 sm:py-8">
      {/* Header */}
      <div className="mb-5 text-center sm:text-left">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
          Desserts & Drinks
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-1 leading-snug">
          Sweet treats & refreshing drinks.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-sm rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition relative"
          >
            {/* Bestseller Tag */}
            {item.bestseller && (
              <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded z-10">
                Bestseller
              </div>
            )}

            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-40 sm:h-48 object-cover"
            />

            {/* Details */}
            <div className="p-3 sm:p-4 flex flex-col justify-between min-h-[180px]">
              <h3 className="text-gray-800 font-semibold text-sm sm:text-base mb-1 flex items-center gap-2">
                {item.type.toLowerCase() === "veg" ? <VegIcon /> : <NonVegIcon />}
                {item.title}
              </h3>

              <p className="text-gray-500 text-xs sm:text-sm mb-3 leading-snug">
                {item.desc}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-gray-900 font-semibold text-sm sm:text-base">
                  ₹{item.price}
                </span>
                
                {/* Show Add button or Quantity selector */}
                {item.id > 3 && itemQuantities[item.id] > 0 ? (
                  <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="px-2 sm:px-3 py-1 text-base sm:text-lg font-semibold text-gray-600 hover:bg-gray-100 transition"
                    >
                      -
                    </button>
                    <span className="px-3 sm:px-4 py-1 text-sm sm:text-base font-semibold text-gray-900 bg-white min-w-[40px] text-center">
                      {itemQuantities[item.id]}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="px-2 sm:px-3 py-1 text-base sm:text-lg font-semibold text-gray-600 hover:bg-gray-100 transition"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className="bg-red-500 text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-lg hover:bg-red-600 active:bg-red-700 text-xs sm:text-sm font-semibold transition"
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

      {/* Modal for Combo Items (id 1, 2, 3) */}
      {showModal && selectedItem && (
        <ComboModal item={selectedItem} onClose={closeModal} />
      )}
    </div>
  );
}