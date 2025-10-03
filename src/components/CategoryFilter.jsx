import React, { useState } from "react";
import veg from "../assets/img/veg.png";
import NV from "../assets/img/NV.png";
import Bestseller from "../assets/img/Bestseller.png";
import Chefs from "../assets/img/Chefs.png";

// ✅ Import your pizza item images
import imgi1 from "../assets/img/imgi1.jpg";
import imgi2 from "../assets/img/imgi2.jpg";
import imgi3 from "../assets/img/imgi3.jpg";
import imgi4 from "../assets/img/imgi4.jpg";
import imgi5 from "../assets/img/imgi5.jpg";
import imgi7 from "../assets/img/imgi7.jpg";

const categories = [
  {
    name: "Veg",
    color: "bg-green-100 text-green-600",
    icon: veg,
    items: [
      { name: "Spicy Jalapeno Pizza", price: 99, img: imgi1 },
      { name: "Golden Corn Pizza", price: 99, img: imgi2 },
      { name: "Spicy Jalapeno Pizza", price: 99, img: imgi3 },
      { name: "Golden Corn Pizza", price: 99, img: imgi4 },
      { name: "Spicy Jalapeno Pizza", price: 99, img: imgi5 },
      { name: "Golden Corn Pizza", price: 99, img: imgi7 },
    ],
  },
  {
    name: "Non Veg",
    color: "bg-red-100 text-red-600",
    icon: NV,
    items: [
      { name: "Chicken Pizza", price: 199, img: imgi1 },
      { name: "Pepperoni Pizza", price: 249, img: imgi2 },
      { name: "Chicken Pizza", price: 199, img: imgi3 },
      { name: "Pepperoni Pizza", price: 249, img: imgi4 },
    ],
  },
  {
    name: "Bestseller",
    color: "bg-yellow-100 text-yellow-600",
    icon: Bestseller,
    items: [
      { name: "Margherita", price: 149, img: imgi1 },
      { name: "Farmhouse Pizza", price: 199, img: imgi2 },
      { name: "Margherita", price: 149, img: imgi3 },
      { name: "Farmhouse Pizza", price: 199, img: imgi4 },
    ],
  },
  {
    name: "Chef's Special",
    color: "bg-blue-100 text-blue-600",
    icon: Chefs,
    items: [
      { name: "Paneer Special", price: 229, img: imgi1 },
      { name: "Deluxe Veggie", price: 259, img: imgi2 },
      { name: "Paneer Special", price: 229, img: imgi3 },
      { name: "Deluxe Veggie", price: 259, img: imgi4 },
    ],
  },
];

export default function CategoryFilter() {
  const [order, setOrder] = useState(categories);

  const handleClick = (clickedCategory) => {
    const newOrder = [
      clickedCategory,
      ...order.filter((c) => c.name !== clickedCategory.name),
    ];
    setOrder(newOrder);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Category Buttons */}
      <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow mb-6 overflow-x-auto">
        {order.map((cat, index) => (
          <button
            key={index}
            onClick={() => handleClick(cat)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition ${cat.color} hover:opacity-80`}
          >
            {cat.icon && (
              <img
                src={cat.icon}
                alt={`${cat.name} icon`}
                className="w-5 h-5 object-contain"
              />
            )}
            {cat.name}
          </button>
        ))}
      </div>

      {/* Show Items of First Category */}
      <h2 className="text-lg font-semibold mb-4">{order[0].name} Items</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {order[0].items.map((item, i) => (
          <div
            key={i}
            className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            {/* Pizza Image */}
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-40 object-cover"
            />

            {/* Pizza Info */}
            <div className="p-3">
              {/* Pizza Name */}
              <h3 className="text-sm font-semibold mb-1">{item.name}</h3>

              {/* Description (static for now, you can add per item later) */}
              <p className="text-gray-500 text-xs mb-2">
                Cheese Burst Base | Onion | Capsicum
              </p>

              {/* Price + Add Button Row */}
              <div className="flex items-center justify-between">
                <p className="text-gray-800 font-medium">₹ {item.price}</p>
                <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm">
                  ADD +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


// import React, { useState } from "react";
// import veg from "../assets/img/veg.png";
// import NV from "../assets/img/NV.png";
// import Bestseller from "../assets/img/Bestseller.png";
// import Chefs from "../assets/img/Chefs.png";

// // ✅ Import your pizza item images
// import imgi1 from "../assets/img/imgi1.jpg";
// import imgi2 from "../assets/img/imgi2.jpg";
// import imgi3 from "../assets/img/imgi3.jpg";
// import imgi4 from "../assets/img/imgi4.jpg";
// import imgi5 from "../assets/img/imgi5.jpg";
// import imgi7 from "../assets/img/imgi7.jpg";

// const categories = [
//   {
//     name: "Veg",
//     color: "bg-green-100 text-green-600",
//     icon: veg,
//     items: [
//       { id: 1, name: "Spicy Jalapeno Pizza", price: 99, img: imgi1 },
//       { id: 2, name: "Golden Corn Pizza", price: 99, img: imgi2 },
//       { id: 3, name: "Spicy Jalapeno Pizza", price: 99, img: imgi3 },
//       { id: 4, name: "Golden Corn Pizza", price: 99, img: imgi4 },
//       { id: 5, name: "Spicy Jalapeno Pizza", price: 99, img: imgi5 },
//       { id: 6, name: "Golden Corn Pizza", price: 99, img: imgi7 },
//     ],
//   },
//   {
//     name: "Non Veg",
//     color: "bg-red-100 text-red-600",
//     icon: NV,
//     items: [
//       { id: 7, name: "Chicken Pizza", price: 199, img: imgi1 },
//       { id: 8, name: "Pepperoni Pizza", price: 249, img: imgi2 },
//       { id: 9, name: "Chicken Pizza", price: 199, img: imgi3 },
//       { id: 10, name: "Pepperoni Pizza", price: 249, img: imgi4 },
//     ],
//   },
//   {
//     name: "Bestseller",
//     color: "bg-yellow-100 text-yellow-600",
//     icon: Bestseller,
//     items: [
//       { id: 11, name: "Margherita", price: 149, img: imgi1 },
//       { id: 12, name: "Farmhouse Pizza", price: 199, img: imgi2 },
//       { id: 13, name: "Margherita", price: 149, img: imgi3 },
//       { id: 14, name: "Farmhouse Pizza", price: 199, img: imgi4 },
//     ],
//   },
//   {
//     name: "Chef's Special",
//     color: "bg-blue-100 text-blue-600",
//     icon: Chefs,
//     items: [
//       { id: 15, name: "Paneer Special", price: 229, img: imgi1 },
//       { id: 16, name: "Deluxe Veggie", price: 259, img: imgi2 },
//       { id: 17, name: "Paneer Special", price: 229, img: imgi3 },
//       { id: 18, name: "Deluxe Veggie", price: 259, img: imgi4 },
//     ],
//   },
// ];

// export default function CategoryFilter() {
//   const [order, setOrder] = useState(categories);
//   const [cart, setCart] = useState({}); // store items as { id: { ...item, qty } }

//   const handleClick = (clickedCategory) => {
//     const newOrder = [
//       clickedCategory,
//       ...order.filter((c) => c.name !== clickedCategory.name),
//     ];
//     setOrder(newOrder);
//   };

//   const addToCart = (item) => {
//     setCart((prev) => {
//       const newCart = { ...prev };
//       if (newCart[item.id]) {
//         newCart[item.id].qty += 1;
//       } else {
//         newCart[item.id] = { ...item, qty: 1 };
//       }
//       return newCart;
//     });
//   };

//   const increaseQty = (id) => {
//     setCart((prev) => {
//       const newCart = { ...prev };
//       newCart[id].qty += 1;
//       return newCart;
//     });
//   };

//   const decreaseQty = (id) => {
//     setCart((prev) => {
//       const newCart = { ...prev };
//       if (newCart[id].qty > 1) {
//         newCart[id].qty -= 1;
//       } else {
//         delete newCart[id]; // remove item if qty = 0
//       }
//       return newCart;
//     });
//   };

//   const totalItems = Object.values(cart).reduce((acc, item) => acc + item.qty, 0);
//   const totalPrice = Object.values(cart).reduce(
//     (acc, item) => acc + item.qty * item.price,
//     0
//   );

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-6">
//       {/* ✅ Cart Summary */}
//       <div className="flex justify-end mb-4">
//         <div className="bg-red-600 text-white px-4 py-2 rounded-lg">
//           {totalItems} Items | ₹ {totalPrice}
//         </div>
//       </div>

//       {/* Category Buttons */}
//       <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow mb-6 overflow-x-auto">
//         {order.map((cat, index) => (
//           <button
//             key={index}
//             onClick={() => handleClick(cat)}
//             className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition ${cat.color} hover:opacity-80`}
//           >
//             {cat.icon && (
//               <img
//                 src={cat.icon}
//                 alt={`${cat.name} icon`}
//                 className="w-5 h-5 object-contain"
//               />
//             )}
//             {cat.name}
//           </button>
//         ))}
//       </div>

//       {/* Show Items of First Category */}
//       <h2 className="text-lg font-semibold mb-4">{order[0].name} Items</h2>
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//         {order[0].items.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition"
//           >
//             {/* Pizza Image */}
//             <img
//               src={item.img}
//               alt={item.name}
//               className="w-full h-40 object-cover"
//             />

//             {/* Pizza Info */}
//             <div className="p-3">
//               <h3 className="text-sm font-semibold mb-1">{item.name}</h3>
//               <p className="text-gray-500 text-xs mb-2">
//                 Cheese Burst Base | Onion | Capsicum
//               </p>

//               {/* Price + Add Button Row */}
//               <div className="flex items-center justify-between">
//                 <p className="text-gray-800 font-medium">₹ {item.price}</p>

//                 {!cart[item.id] ? (
//                   <button
//                     onClick={() => addToCart(item)}
//                     className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm"
//                   >
//                     ADD +
//                   </button>
//                 ) : (
//                   <div className="flex items-center space-x-2">
//                     <button
//                       onClick={() => decreaseQty(item.id)}
//                       className="bg-gray-200 px-2 rounded"
//                     >
//                       -
//                     </button>
//                     <span>{cart[item.id].qty}</span>
//                     <button
//                       onClick={() => increaseQty(item.id)}
//                       className="bg-gray-200 px-2 rounded"
//                     >
//                       +
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
