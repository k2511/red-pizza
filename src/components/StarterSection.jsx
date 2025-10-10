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
//     title: 'Garlic Herb Chicken Wings',
//     desc: "Doused in chef's special garlic & herb glaze, these chicken wings are abolutely worth a try.",
//     price: 229,
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
    
//   },
//   {
//     id: 8,
//     title: "Smoky BBQ Chicken [Boneless]",
//     desc: "Crispy and juicy, this BBQ grilled chicken is a lip-smacking combination of smoky flavours.",
//     img: imgi08,
//     type: "NonVeg",

//   },
// ];

// export default function StarterSection({filter}) {
//     const filteredItems = categories.filter((item) => {
//     if (filter === "all") return true;
//     if (filter === "veg") return item.type === "veg";
//     if (filter === "nonveg") return item.type === "nonveg";
//     if (filter === "bestseller") return item.bestseller;
//     if (filter === "chefsSpecial") return item.chefsSpecial;
//     return true;
//   });
//   const [selectedPizza, setSelectedPizza] = useState(null);
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
//         {comboData.map((combo) => (
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

//             {/* Details */}
//             <div className="p-4 flex flex-col justify-between h-[180px]">
//               <h3 className="text-gray-800 font-semibold text-base mb-1 flex items-center gap-2">
//                 <img
//                   src={combo.type === "veg" ? vegIcon : nonVegIcon}
//                   alt={combo.type}
//                   className="w-4 h-4 object-contain"
//                 />
//                 {combo.title}
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

//       {/* Modal (unchanged) */}
//       {showModal && selectedPizza && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 w-11/12 sm:w-3/4 md:w-1/2 max-h-[90vh] overflow-y-auto relative">
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
  },
  {
    id: 2,
    title: "Peri Peri Chicken Wings",
    desc: "Tender & juicy chicken wings rubbed with the supremely popular Peri Peri sauce. We're sure you'll love it peri much!",
    img: imgi02,
    type: "NonVeg",
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
  },
  {
    id: 4,
    title: "Americano BBQ Chicken Wings",
    desc: "Let's get the party started with the dad of all chicken wings, glazed & grilled in the timeless BBQ Sauce.",
    img: imgi04,
    type: "NonVeg",
  },
  {
    id: 5,
    title: "Spicy Chicken Tikka [Boneless]",
    desc: "Tender chunks of chicken coated in marinade of curd and spices and grilled perfectly.",
    img: imgi05,
    type: "NonVeg",
    bestseller: true,
  },
  {
    id: 6,
    title: "Peri Peri Chicken [Boneless]",
    desc: "Tender and juicy chicken marinated in a peri peri marinade, and skewed on grill.",
    img: imgi06,
    type: "NonVeg",
    bestseller: true,
  },
  {
    id: 7,
    title: "Black Pepper Chicken [Boneless]",
    desc: "Juicy chicken cubes marinated in a creamy marinade, crushed black pepper & herbs.",
    img: imgi07,
    type: "NonVeg",
  },
  {
    id: 8,
    title: "Smoky BBQ Chicken [Boneless]",
    desc: "Crispy and juicy, this BBQ grilled chicken is a lip-smacking combination of smoky flavours.",
    img: imgi08,
    type: "NonVeg",
  },
];

export default function StarterSection({ filter }) {
  // Fix filter: use comboData instead of undefined categories
  const filteredItems = comboData.filter((item) => {
    if (filter === "all") return true;
    if (filter === "veg") return item.type.toLowerCase() === "veg";
    if (filter === "nonveg") return item.type.toLowerCase() === "nonveg";
    if (filter === "bestseller") return item.bestseller;
    if (filter === "chefsSpecial") return item.chefsSpecial;
    return true;
  });

  const [selectedPizza, setSelectedPizza] = useState(null);
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
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-6 text-center sm:text-left">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">
          Chicken Starters
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-1">
          Chicken wings & tikkas to satiate your meat cravings. Can't wait to get started?
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {comboData.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-xl shadow hover:shadow-lg transition overflow-hidden relative"
          >
            {/* Bestseller Tag */}
            {combo.bestseller && (
              <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
                Bestseller
              </div>
            )}

            {/* Chef’s Special Tag */}
            {combo.chefsSpecial && (
              <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
                Chef’s Special
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
