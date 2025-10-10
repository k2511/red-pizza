// import React, { useState } from "react";
// import imgi8 from "../assets/img/imgi8.jpg";
// import imgi9 from "../assets/img/imgi9.jpg";
// import vegIcon from "../assets/img/veg.png"; // ✅ Veg icon

// const comboData = [
//   {
//     id: 1,
//     title: '2 Regular 7" Pizzas @ 119 each',
//     desc: "[Serves 2] Get any 2 Regular 7'' Pizzas at just ₹119 each.",
//     price: 238,
//     oldPrice: 400,
//     img: imgi8,
//   },
//   {
//     id: 2,
//     title: '2 Big 10" Pizzas @ 199 each',
//     desc: "[Serves 4] Get any 2 Big 10'' Pizzas at just ₹199 each.",
//     price: 398,
//     oldPrice: 600,
//     img: imgi9,
//   },
// ];

// export default function ComboSection({filter}) {
//    const filteredItems = categories.filter((item) => {
//     if (filter === "all") return true;
//     if (filter === "veg") return item.type === "veg";
//     if (filter === "nonveg") return item.type === "nonveg";
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
//       <div className="mb-4">
//         <h2 className="text-lg sm:text-xl font-bold text-gray-800">
//           1 PLUS 1 @ ₹119 EACH
//         </h2>
//         <p className="text-gray-600 text-sm sm:text-base">
//           Any 2 Regular 7'' Pizzas @ just ₹119 each. Any 2 Big 10'' Pizzas @ just ₹199 each.
//           No more choosing b/w favourites – get 'em both!
//         </p>
//       </div>

//       {/* Combo Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//         {comboData.map((combo) => (
//           <div
//             key={combo.id}
//             className="bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-lg transition"
//           >
//             {/* Combo Image */}
//             <img
//               src={combo.img}
//               alt={combo.title}
//               className="w-full h-48 object-cover"
//             />

//             {/* Combo Details */}
//             <div className="p-4">
//               {/* Title with Veg Icon */}
//               <h3 className="text-gray-800 font-semibold text-base mb-1 flex items-center gap-2">
//                 <img
//                   src={vegIcon}
//                   alt="veg"
//                   className="w-4 h-4 object-contain"
//                 />
//                 {combo.title}
//               </h3>

//               <p className="text-gray-500 text-sm mb-3">{combo.desc}</p>

//               {/* Price + Add Button Row */}
//               <div className="flex items-center justify-between">
//                 <div className="flex flex-col">
//                   <span className="text-gray-800 font-semibold text-base">
//                     ₹{combo.price}
//                   </span>
//                   <span className="text-gray-400 line-through text-xs">
//                     ₹{combo.oldPrice}
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
//             <h3 className="font-semibold mb-3">
//               First Pizza Crust [Regular 7"]
//             </h3>
//             <div className="space-y-2 mb-6">
//               {[
//                 { name: "Pan Tossed", price: 0 },
//                 { name: "Thin Crust", price: 0 },
//                 { name: "Cheese Blast", price: 50 },
//                 { name: "Thin Crust Cheese Blast", price: 50 },
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
//             <h3 className="font-semibold mb-3">First Pizza [Regular 7"]</h3>
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
import imgi8 from "../assets/img/imgi8.jpg";
import imgi9 from "../assets/img/imgi9.jpg";
import vegIcon from "../assets/img/veg.png";

const comboData = [
  {
    id: 1,
    title: '2 Regular 7" Pizzas @ 119 each',
    desc: "[Serves 2] Get any 2 Regular 7'' Pizzas at just ₹119 each.",
    price: 238,
    oldPrice: 400,
    img: imgi8,
    type: "veg",
    bestseller: true,
  },
  {
    id: 2,
    title: '2 Big 10" Pizzas @ 199 each',
    desc: "[Serves 4] Get any 2 Big 10'' Pizzas at just ₹199 each.",
    price: 398,
    oldPrice: 600,
    img: imgi9,
    type: "veg",
    chefsSpecial: true,
  },
];

const crustOptions = [
  { id: 1, name: "Pan Tossed", desc: "Pan Tossed", price: 0, type: "veg" },
  { id: 2, name: "Thin Crust", desc: "Thin Crust", price: 0, type: "veg" },
  { id: 3, name: "Cheese Blast", desc: "Cheese Blast", price: 50, type: "veg" },
  { id: 4, name: "Thin Crust Cheese Blast", desc: "Cheese Blast", price: 50, type: "veg" },
];

const pizzaOptions = [
  { id: 1, name: "Double Cheese Margherita [Regular 7'']", desc: "Good Ol' Classic", price: 0, type: "veg" },
  { id: 2, name: "Farmer's Market [Regular 7'']", desc: "Capsicum, Onion", price: 0, type: "veg" },
  { id: 3, name: "Corn Cheese & Jalapenos [Regular 7\"]", desc: "Spicy Jalapenos, Golden Corn, Mozzarella Cheese", price: 19, type: "veg" },
  { id: 4, name: "Zesty Veggie Delight [Regular 7\"]", desc: "Tomato, Onion, Spicy Jalapenos", price: 29, type: "veg" },
  { id: 5, name: "Fabulous Three [Regular 7\"]", desc: "Capsicum, Onion, Red Paprika", price: 29, type: "veg" },
  { id: 6, name: "Olive Garden [Regular 7']", desc: "Black Olive, Golden Corn, Capsicum", price: 49, type: "veg" },
  { id: 7, name: "Spicy Mexicano [Regular 7'']", desc: "Red Paprika, Spicy Jalapeno, Golden Corn, Onion", price: 49, type: "veg" },
  { id: 8, name: "Magic Mushrooms [Regular 7'']", desc: "Mushroom, Capsicum, Tomato", price: 49, type: "veg" },
  { id: 9, name: "Paneer Tikka [Regular 7'']", desc: "Paneer Tikka, Onion", price: 49, type: "veg" },
  { id: 10, name: "Veggie Paradise [Regular 7'']", desc: "Black Olive, Red Paprika, Capsicum, Tomato, Onion", price: 69, type: "veg" },
  { id: 11, name: "Italian Fiesta [Regular 7']", desc: "Mushroom, Black Olive, Spicy Jalapeno, Golden Corn", price: 69, type: "veg" },
  { id: 12, name: "Peri Peri Paneer [Regular 7'']", desc: "Peri Peri Paneer, Golden Corn, Red Paprika, Capsicum", price: 69, type: "veg" },
  { id: 13, name: "Paneer Makhni [Regular 7'']", desc: "Paneer Tikka, Capsicum, Tomato, Onion", price: 69, type: "veg" },
  { id: 14, name: "All Veggies Madness [Regular 7'']", desc: "Mushroom, Black Olive, Spicy Jalapeno, Golden Corn, Capsicum, Onion, Tomato", price: 89, type: "veg" },
  { id: 15, name: "Paneer Overload [Regular 7'']", desc: "Peri Peri Paneer, Paneer Tikka, Spicy Jalapeno, Onion, Tomato", price: 89, type: "veg" },
  { id: 16, name: "Crowded House [Regular 7'']", desc: "Extra Cheese, Paneer Cubes, Black Olive, Red Paprika, Golden Corn, Capsicum, Onion", price: 89, type: "veg" },
  { id: 17, name: "Chicken Smokey Joe [Regular 7'']", desc: "Smokey BBQ Chicken, Onion", price: 39, type: "nonveg" },
  { id: 18, name: "Chicken Corn Delight [Regular 7']", desc: "Herb Grilled Chicken, Golden Corn", price: 39, type: "nonveg" },
  { id: 19, name: "Fiery Chicken [Regular 7\"]", desc: "Spicy Chicken, Capsicum, Golden Corn", price: 39, type: "nonveg" },
  { id: 20, name: "BBQ Chicken [Regular 7'']", desc: "BBQ Chicken, Spicy Jalapeno, Golden Corn, Tomato", price: 59, type: "nonveg" },
  { id: 21, name: "Peri Peri Chicken [Regular 7'']", desc: "Peri Peri Chicken, Red Paprika, Golden Corn, Capsicum", price: 59, type: "nonveg" },
  { id: 22, name: "Chicken Mexicano [Regular 7'']", desc: "Herb Grilled Chicken, Spicy Jalapeno, Capsicum, Onion", price: 59, type: "nonveg" },
  { id: 23, name: "Chicken Tikka [Regular 7'']", desc: "Chicken Tikka, Tomato, Onion", price: 59, type: "nonveg" },
  { id: 24, name: "Double Trouble Chicken [Regular 7'']", desc: "Herb Grilled Chicken, Chicken Tikka, Black Olive, Capsicum", price: 79, type: "nonveg" },
  { id: 25, name: "Fire Me Up Chicken [Regular 7'']", desc: "Spicy Peri Peri Chicken, Herb Chicken, Red Paprika, Spicy Jalepeno", price: 79, type: "nonveg" },
  { id: 26, name: "Chicken Italiana [Regular 7'']", desc: "Garlic Roast Chicken, Smokey BBQ Chicken, Mushroom, Tomato", price: 79, type: "nonveg" },
  { id: 27, name: "Butter Chicken [Regular 7'']", desc: "Tandoori Chicken, Capsicum, Onion, Tomato", price: 79, type: "nonveg" },
  { id: 28, name: "Mojo's Chicken Special [Regular 7'']", desc: "BBQ Chicken, Chicken Tikka, Herb Grilled Chicken, Mushroom, Spicy Jalapeno, Golden Corn, Tomato", price: 99, type: "nonveg" },
  { id: 29, name: "Chicken Full Smash [Regular 7'']", desc: "Peri Peri Chicken, Chicken Tikka, Roast Chicken, Black Olive, Red Paprika, Capsicum, Onion", price: 99, type: "nonveg" },
  { id: 30, name: "The Meat Eater [Regular 7'']", desc: "Garlic Roast Chicken, Herb Grilled Chicken, Peri Peri Chicken, Smokey BBQ Chicken", price: 99, type: "nonveg" },
  { id: 31, name: "Mad Over Lamb [Regular 7'']", desc: "Lamb | Onion | Serves 2-3.", price: 99, type: "nonveg" },
];

function ComboModal({ combo, onClose }) {
  const [step, setStep] = useState(1);
  const [pizza1Filter, setPizza1Filter] = useState("both");
  const [pizza2Filter, setPizza2Filter] = useState("both");
  
  const [pizza1Crust, setPizza1Crust] = useState(null);
  const [pizza1Selection, setPizza1Selection] = useState(null);
  
  const [pizza2Crust, setPizza2Crust] = useState(null);
  const [pizza2Selection, setPizza2Selection] = useState(null);

  const itemsAdded = (pizza1Crust && pizza1Selection ? 1 : 0) + (pizza2Crust && pizza2Selection ? 1 : 0);

  const filteredPizzas1 = pizzaOptions.filter(p => {
    if (pizza1Filter === "both") return true;
    if (pizza1Filter === "veg") return p.type === "veg";
    if (pizza1Filter === "nonveg") return p.type === "nonveg";
    return true;
  });

  const filteredPizzas2 = pizzaOptions.filter(p => {
    if (pizza2Filter === "both") return true;
    if (pizza2Filter === "veg") return p.type === "veg";
    if (pizza2Filter === "nonveg") return p.type === "nonveg";
    return true;
  });

  const additionalPrice = 
    (pizza1Crust?.price || 0) + 
    (pizza1Selection?.price || 0) + 
    (pizza2Crust?.price || 0) + 
    (pizza2Selection?.price || 0);

  const totalPrice = combo.price + additionalPrice;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold text-2xl z-10"
        >
          ×
        </button>

        {/* Header */}
        <div className="border-b p-4">
          <h2 className="text-xl font-bold text-gray-800">{combo.title}</h2>
        </div>

        {/* Step Tabs */}
        <div className="flex border-b">
          <button
            className={`flex-1 py-3 text-center font-semibold ${
              step === 1 ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-500"
            }`}
            onClick={() => setStep(1)}
          >
            <div className="flex items-center justify-center gap-2">
              <span className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm">+</span>
              <span>Choose First 7" Pizza</span>
            </div>
          </button>
          <button
            className={`flex-1 py-3 text-center font-semibold ${
              step === 2 ? "text-gray-700 border-b-2 border-gray-300" : "text-gray-400"
            }`}
            onClick={() => setStep(2)}
            disabled={!pizza1Crust || !pizza1Selection}
          >
            <div className="flex items-center justify-center gap-2">
              <span className={`w-6 h-6 rounded-full ${step === 2 ? "bg-gray-400" : "bg-gray-300"} text-white flex items-center justify-center text-sm`}>+</span>
              <span>Choose Second 7" Pizza</span>
            </div>
          </button>
        </div>

        <div className="p-4">
          {step === 1 && (
            <>
              <h3 className="text-lg font-bold text-gray-800 mb-4">First Pizza Crust [Regular 7"]</h3>
              <div className="space-y-3 mb-6">
                {crustOptions.map((crust) => (
                  <label key={crust.id} className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="pizza1-crust"
                        checked={pizza1Crust?.id === crust.id}
                        onChange={() => setPizza1Crust(crust)}
                        className="w-4 h-4"
                      />
                      <img src={vegIcon} alt="veg" className="w-4 h-4" />
                      <div>
                        <div className="font-semibold text-gray-800">{crust.name}</div>
                        <div className="text-sm text-gray-500">{crust.desc}</div>
                      </div>
                    </div>
                    <span className="text-gray-600 font-semibold">+ ₹ {crust.price}</span>
                  </label>
                ))}
              </div>

              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-800">First Pizza [Regular 7"]</h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => setPizza1Filter("both")}
                    className={`px-4 py-1 rounded-full text-sm font-semibold ${
                      pizza1Filter === "both" ? "bg-black text-white" : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    Both
                  </button>
                  <button
                    onClick={() => setPizza1Filter("veg")}
                    className={`px-4 py-1 rounded-full text-sm font-semibold ${
                      pizza1Filter === "veg" ? "bg-black text-white" : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    Veg
                  </button>
                  <button
                    onClick={() => setPizza1Filter("nonveg")}
                    className={`px-4 py-1 rounded-full text-sm font-semibold ${
                      pizza1Filter === "nonveg" ? "bg-black text-white" : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    Non-Veg
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                {filteredPizzas1.map((pizza) => (
                  <label key={pizza.id} className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="pizza1-selection"
                        checked={pizza1Selection?.id === pizza.id}
                        onChange={() => setPizza1Selection(pizza)}
                        className="w-4 h-4"
                      />
                      <img src={vegIcon} alt="veg" className="w-4 h-4" />
                      <div>
                        <div className="font-semibold text-gray-800">{pizza.name}</div>
                        <div className="text-sm text-gray-500">{pizza.desc}</div>
                      </div>
                    </div>
                    <span className="text-gray-600 font-semibold">+ ₹ {pizza.price}</span>
                  </label>
                ))}
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Second Pizza Crust [Regular 7"]</h3>
              <div className="space-y-3 mb-6">
                {crustOptions.map((crust) => (
                  <label key={crust.id} className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="pizza2-crust"
                        checked={pizza2Crust?.id === crust.id}
                        onChange={() => setPizza2Crust(crust)}
                        className="w-4 h-4"
                      />
                      <img src={vegIcon} alt="veg" className="w-4 h-4" />
                      <div>
                        <div className="font-semibold text-gray-800">{crust.name}</div>
                        <div className="text-sm text-gray-500">{crust.desc}</div>
                      </div>
                    </div>
                    <span className="text-gray-600 font-semibold">+ ₹ {crust.price}</span>
                  </label>
                ))}
              </div>

              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-800">Second Pizza [Regular 7"]</h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => setPizza2Filter("both")}
                    className={`px-4 py-1 rounded-full text-sm font-semibold ${
                      pizza2Filter === "both" ? "bg-black text-white" : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    Both
                  </button>
                  <button
                    onClick={() => setPizza2Filter("veg")}
                    className={`px-4 py-1 rounded-full text-sm font-semibold ${
                      pizza2Filter === "veg" ? "bg-black text-white" : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    Veg
                  </button>
                  <button
                    onClick={() => setPizza2Filter("nonveg")}
                    className={`px-4 py-1 rounded-full text-sm font-semibold ${
                      pizza2Filter === "nonveg" ? "bg-black text-white" : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    Non-Veg
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                {filteredPizzas2.map((pizza) => (
                  <label key={pizza.id} className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="pizza2-selection"
                        checked={pizza2Selection?.id === pizza.id}
                        onChange={() => setPizza2Selection(pizza)}
                        className="w-4 h-4"
                      />
                      <img src={vegIcon} alt="veg" className="w-4 h-4" />
                      <div>
                        <div className="font-semibold text-gray-800">{pizza.name}</div>
                        <div className="text-sm text-gray-500">{pizza.desc}</div>
                      </div>
                    </div>
                    <span className="text-gray-600 font-semibold">+ ₹ {pizza.price}</span>
                  </label>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="border-t p-4 flex items-center justify-between bg-gray-50">
          <div className="text-sm font-semibold text-gray-700">
            Items Added<br />
            {itemsAdded}/2
          </div>
          <button
            className={`px-6 py-3 rounded-lg font-semibold text-white ${
              itemsAdded === 2 ? "bg-orange-500 hover:bg-orange-600" : "bg-gray-300 cursor-not-allowed"
            }`}
            disabled={itemsAdded !== 2}
            onClick={() => {
              alert(`Added to cart! Total: ₹${totalPrice}`);
              onClose();
            }}
          >
            Next ▶ ₹{totalPrice}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ComboSection({ filter }) {
  // ✅ Use comboData instead of categories
  const filteredItems = comboData.filter((item) => {
    // Category filter
    const categoryMatch =
      filter === "all" ||
      (filter === "veg" && item.type === "veg") ||
      (filter === "nonveg" && item.type === "nonveg") ||
      (filter === "bestseller" && item.bestseller) ||
      (filter === "chefsSpecial" && item.chefsSpecial);

    // Search filter (case-insensitive)
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
      <div className="mb-4">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">
          1 PLUS 1 @ ₹119 EACH
        </h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Any 2 Regular 7'' Pizzas @ just ₹119 each. Any 2 Big 10'' Pizzas @ just ₹199 each.
          No more choosing b/w favourites – get 'em both!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {filteredItems.map((combo) => (
          <div
            key={combo.id}
            className="bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-lg transition"
          >
            <img src={combo.img} alt={combo.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-gray-800 font-semibold text-base mb-1 flex items-center gap-2">
                <img src={vegIcon} alt="veg" className="w-4 h-4 object-contain" />
                {combo.title}
              </h3>
              <p className="text-gray-500 text-sm mb-3">{combo.desc}</p>

              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-gray-800 font-semibold text-base">
                    ₹{combo.price}
                  </span>
                  <span className="text-gray-400 line-through text-xs">
                    ₹{combo.oldPrice}
                  </span>
                </div>

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

      {showModal && selectedPizza && (
        <ComboModal 
          combo={selectedPizza} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
}