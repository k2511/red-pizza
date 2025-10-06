import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
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
  { id: 1, title: "Spicy Jalapeno Pizza [Regular 7'']", desc: "Tangy, Spicy Jalapenos with Mozzarella & Molten Cheese. 100% Dairy Cheese | 0% Mayonnaise", price: 99, img: imgi1, type: "veg" },
  { id: 2, title: "Golden Corn Pizza [Regular 7'']", desc: "Golden Corn with Mozzarella & Molten Cheese. 100% Dairy Cheese | 0% Mayonnaise", price: 99, img: imgi2, type: "veg" },
  { id: 3, title: 'Capsicum Pizza [Regular 7"]', desc: "Roasted Capsicum with Mozzarella & Molten Cheese. 100% Dairy Cheese | 0% Mayonnaise", price: 99, img: imgi3, type: "veg" },
  { id: 4, title: 'Onion Pizza [Regular 7"]', desc: "Onions with Mozzarella & Molten Cheese. 100% Dairy Cheese | 0% Mayonnaise", price: 99, img: imgi4, type: "veg", bestseller: true },
  { id: 5, title: 'Tomato Pizza [Regular 7"]', desc: "Juicy Tomatoes with Mozzarella & Molten Cheese. 100% Dairy Cheese | 0% Mayonnaise", price: 99, img: imgi5, type: "veg" },
  { id: 6, title: 'Chicken & Onion Pizza [Regular 7"]', desc: "Herb Chicken, Onion with Mozzarella & Molten Cheese. 100% Dairy Cheese | 0% Mayonnaise", price: 129, img: imgi1, type: "nonveg", chefsSpecial: true },
  { id: 7, title: "Any Value Pizza + Garlic Breadsticks", desc: "Any Value Pizza & Classic Garlic Breadsticks. The perfect pair!", price: 179, img: imgi7, type: "veg", bestseller: true },
  { id: 8, title: 'Any Value Pizza + Choco Lava Cake', desc: "Any Value Pizza & Choco Lava Cake. End the treat on a sweet note!", price: 149, img: imgi2, type: "veg" },
  { id: 9, title: "Any Value Pizza + Coke", desc: "Any Value Pizza & Coke. Enjoy refreshing sips with every bite!", price: 139, img: imgi3, type: "veg" },
  { id: 10, title: "Pack of 2 Pizzas", desc: "Pick any 2 Value Pizzas at a steal deal. Irresistible in every way!", price: 189, img: imgi4, type: "veg", bestseller: true },
  { id: 11, title: 'Pack of 3 Pizzas', desc: "Pick any 3 Value Pizzas. Irresistible in every way!", price: 289, img: imgi5, type: "veg" },
  { id: 12, title: 'Pack of 4 Pizzas', desc: "Pick any 4 Value Pizzas. Irresistible in every way!", price: 389, imgi7, type: "veg" },
];

const ValueVegPizzas = ({ items, onAdd }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
    {items.map((item) => (
      <div key={item.id} className="relative bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition">
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
        <img src={item.img} alt={item.title} className="w-full h-32 sm:h-40 object-cover" />
        <div className="p-3 sm:p-4">
          <div className="flex items-center gap-2 mb-1">
            <img src={veg} alt={item.type} className="w-4 h-4 sm:w-5 sm:h-5" />
            <h3 className="text-sm sm:text-base font-semibold">{item.title}</h3>
          </div>
          <p className="text-gray-500 text-xs sm:text-sm mb-2">{item.desc}</p>
          <div className="flex items-center justify-between">
            <p className="text-gray-800 font-medium text-sm sm:text-base">₹ {item.price}</p>
            <button className="bg-red-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded hover:bg-red-600 text-xs sm:text-sm" onClick={() => onAdd(item)}>
              + Add
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const ValueNonVegPizzas = ({ items, onAdd }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
    {items.map((item) => (
      <div key={item.id} className="relative bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition">
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
        <img src={item.img} alt={item.title} className="w-full h-32 sm:h-40 object-cover" />
        <div className="p-3 sm:p-4">
          <div className="flex items-center gap-2 mb-1">
            <img src={NV} alt={item.type} className="w-4 h-4 sm:w-5 sm:h-5" />
            <h3 className="text-sm sm:text-base font-semibold">{item.title}</h3>
          </div>
          <p className="text-gray-500 text-xs sm:text-sm mb-2">{item.desc}</p>
          <div className="flex items-center justify-between">
            <p className="text-gray-800 font-medium text-sm sm:text-base">₹ {item.price}</p>
            <button className="bg-red-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded hover:bg-red-600 text-xs sm:text-sm" onClick={() => onAdd(item)}>
              + Add
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const ValueBestsellerPizzas = ({ items, onAdd }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
    {items.map((item) => (
      <div key={item.id} className="relative bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition">
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
        <img src={item.img} alt={item.title} className="w-full h-32 sm:h-40 object-cover" />
        <div className="p-3 sm:p-4">
          <div className="flex items-center gap-2 mb-1">
            <img src={item.type === "veg" ? veg : NV} alt={item.type} className="w-4 h-4 sm:w-5 sm:h-5" />
            <h3 className="text-sm sm:text-base font-semibold">{item.title}</h3>
          </div>
          <p className="text-gray-500 text-xs sm:text-sm mb-2">{item.desc}</p>
          <div className="flex items-center justify-between">
            <p className="text-gray-800 font-medium text-sm sm:text-base">₹ {item.price}</p>
            <button className="bg-red-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded hover:bg-red-600 text-xs sm:text-sm" onClick={() => onAdd(item)}>
              + Add
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const ValueChefsSpecialPizzas = ({ items, onAdd }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
    {items.map((item) => (
      <div key={item.id} className="relative bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition">
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
        <img src={item.img} alt={item.title} className="w-full h-32 sm:h-40 object-cover" />
        <div className="p-3 sm:p-4">
          <div className="flex items-center gap-2 mb-1">
            <img src={item.type === "veg" ? veg : NV} alt={item.type} className="w-4 h-4 sm:w-5 sm:h-5" />
            <h3 className="text-sm sm:text-base font-semibold">{item.title}</h3>
          </div>
          <p className="text-gray-500 text-xs sm:text-sm mb-2">{item.desc}</p>
          <div className="flex items-center justify-between">
            <p className="text-gray-800 font-medium text-sm sm:text-base">₹ {item.price}</p>
            <button className="bg-red-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded hover:bg-red-600 text-xs sm:text-sm" onClick={() => onAdd(item)}>
              + Add
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default function CategoryFilter() {
  const [selectedCategory, setSelectedCategory] = useState("veg");
  const [searchTerm, setSearchTerm] = useState("");

  const categoryButtons = [
    { key: "veg", label: "Veg", icon: veg, color: "green" },
    { key: "nonveg", label: "Non-Veg", icon: NV, color: "red" },
    { key: "bestseller", label: "Bestseller", icon: Bestseller, color: "yellow" },
    { key: "chefsSpecial", label: "Chef’s Special", icon: Chefs, color: "orange" },
  ];

  const reorderedButtons = [
    ...categoryButtons.filter((b) => b.key === selectedCategory),
    ...categoryButtons.filter((b) => b.key !== selectedCategory),
  ];

  let filteredItems = categories.filter((item) => {
    if (selectedCategory === "veg") return item.type === "veg";
    if (selectedCategory === "nonveg") return item.type === "nonveg";
    if (selectedCategory === "bestseller") return !!item.bestseller;
    if (selectedCategory === "chefsSpecial") return !!item.chefsSpecial;
    return true;
  });

  if (searchTerm) {
    filteredItems = filteredItems.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  const handleAdd = (item) => {
    // Handle add logic here, e.g., add to cart
    console.log("Added to cart:", item);
  };

  const renderValueSection = () => {
    switch (selectedCategory) {
      case "veg":
        return <ValueVegPizzas items={filteredItems} onAdd={handleAdd} />;
      case "nonveg":
        return <ValueNonVegPizzas items={filteredItems} onAdd={handleAdd} />;
      case "bestseller":
        return <ValueBestsellerPizzas items={filteredItems} onAdd={handleAdd} />;
      case "chefsSpecial":
        return <ValueChefsSpecialPizzas items={filteredItems} onAdd={handleAdd} />;
      default:
        return <ValueVegPizzas items={filteredItems} onAdd={handleAdd} />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4">
      {/* Category Buttons and Search */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between bg-white p-3 sm:p-4 rounded-lg shadow mb-6 gap-4">
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto flex-1 min-w-0">
          {reorderedButtons.map((btn) => (
            <button
              key={btn.key}
              onClick={() => setSelectedCategory(btn.key)}
              className={`flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition flex-shrink-0 ${
                selectedCategory === btn.key
                  ? `bg-${btn.color}-500 text-white shadow-lg shadow-${btn.color}-300`
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              <img src={btn.icon} alt={btn.label} className="w-4 h-4 sm:w-5 sm:h-5" />
              {btn.label}
            </button>
          ))}
        </div>
<div className="flex items-center w-full max-w-md px-3 py-2 bg-white border border-gray-300 rounded-full shadow-sm focus-within:border-gray-500 transition">
  <CiSearch className="text-gray-500 text-xl mr-2" />
  <input
    type="text"
    placeholder="Search pizzas..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
  />
</div>


      </div>

      {/* Header */}
      <div className="mb-6 text-center sm:text-left">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">Value Fun Pizza @ 99</h2>
        <p className="text-gray-600 text-sm sm:text-base mt-1">
          Made with 100% real dairy cheese. 0% Mayonnaise. Pocket friendly pizzas, at just ₹99.
        </p>
      </div>

      {/* Render Selected Value Section */}
      {renderValueSection()}

      {/* Other Sections - These are not filtered by category, as per screenshot */}
      <div className="mt-8"><ComboSection /></div>
      <div className="mt-8"><HalfSection /></div>
      <div className="mt-8"><OwnSection /></div>
      <div className="mt-8"><BigVegSection /></div>
      <div className="mt-8"><BigNonSection /></div>
      <div className="mt-8"><RegularSection /></div>
      <div className="mt-8"><RegularNonSection /></div>
      <div className="mt-8"><CheesBrustSection /></div>
      <div className="mt-8"><CrustSection /></div>
      <div className="mt-8"><EpicSection /></div>
      <div className="mt-8"><PastaSection /></div>
      <div className="mt-8"><GarlicSection /></div>
      <div className="mt-8"><StarterSection /></div>
      <div className="mt-8"><VegStarterSection /></div>
      <div className="mt-8"><DrinkSection /></div>
      <div className="mt-8"><IceSection /></div>
    </div>
  );
}






