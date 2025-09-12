import React, { useState } from "react";
import veg from "../assets/img/veg.png";
import NV from "../assets/img/NV.png";
import Bestseller from "../assets/img/Bestseller.png";
import Chefs from "../assets/img/Chefs.png";

const categories = [
  { 
    name: "Veg", 
    color: "bg-green-100 text-green-600",
    icon: veg, 
    items: [
      { name: "Spicy Jalapeno Pizza", price: 99, img: "https://via.placeholder.com/150?text=Veg+1" },
      { name: "Golden Corn Pizza", price: 99, img: "https://via.placeholder.com/150?text=Veg+2" },
    ]
  },
  { 
    name: "Non Veg", 
    color: "bg-red-100 text-red-600",
    icon: NV, 
    items: [
      { name: "Chicken Pizza", price: 199, img: "https://via.placeholder.com/150?text=NonVeg+1" },
      { name: "Pepperoni Pizza", price: 249, img: "https://via.placeholder.com/150?text=NonVeg+2" },
    ]
  },
  { 
    name: "Bestseller", 
    color: "bg-yellow-100 text-yellow-600",
    icon: Bestseller,
    items: [
      { name: "Margherita", price: 149, img: "https://via.placeholder.com/150?text=Bestseller+1" },
      { name: "Farmhouse Pizza", price: 199, img: "https://via.placeholder.com/150?text=Bestseller+2" },
    ]
  },
  { 
    name: "Chef's Special", 
    color: "bg-blue-100 text-blue-600",
    icon: Chefs,
    items: [
      { name: "Paneer Special", price: 229, img: "https://via.placeholder.com/150?text=Chef+1" },
      { name: "Deluxe Veggie", price: 259, img: "https://via.placeholder.com/150?text=Chef+2" },
    ]
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
    <div className="p-6">
      {/* Category Buttons */}
      <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow mb-6">
        {order.map((cat, index) => (
          <button
            key={index}
            onClick={() => handleClick(cat)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition ${cat.color} hover:opacity-80`}
          >
            {/* Render Icon */}
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {order[0].items.map((item, i) => (
          <div
            key={i}
            className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <img src={item.img} alt={item.name} className="w-full h-32 object-cover" />
            <div className="p-3">
              <h3 className="text-sm font-semibold">{item.name}</h3>
              <p className="text-gray-600 text-sm">₹ {item.price}</p>
              <button className="mt-2 w-full bg-green-500 text-white py-1 rounded hover:bg-green-600 text-sm">
                ADD +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
