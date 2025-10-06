// import React from "react";
// import CategoryFilter from "../components/CategoryFilter";
// import ComboSection from "../components/ComboSection";
// import HalfSection from "../components/HalfSection";
// import OwnSection from "../components/OwnSection";
// import BigVegSection from "../components/BigVegSection";
// import BigNonSection from "../components/BigNonSection";
// import RegularSection from "../components/RegularSection";
// import RegularNonSection from "../components/RegularNonSection";
// import CheesBrustSection from "../components/CheesBrustSection";
// import CrustSection from "../components/CrustSection";
// import EpicSection from "../components/EpicSection";
// import PastaSection from "../components/PastaSection";
// import GarlicSection from "../components/GarlicSection";
// import StarterSection from "../components/StarterSection";
// import VegStarterSection from "../components/VegStarterSection";
// import DrinkSection from "../components/DrinkSection";
// import IceSection from "../components/IceSection";

// const BrowseMenu = () => {
//   return (
//     <div>
//       <div className="bg-white py-2">
//         <CategoryFilter />
//       </div>
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
// };

// export default BrowseMenu;


import React, { useState } from "react";
import veg from "../assets/img/veg.png";
import NV from "../assets/img/NV.png";
import Bestseller from "../assets/img/Bestseller.png";
import Chefs from "../assets/img/Chefs.png";

import CategoryFilter from "../components/CategoryFilter";
import ComboSection from "../components/ComboSection";
import HalfSection from "../components/HalfSection";
import OwnSection from "../components/OwnSection";
import BigVegSection from "../components/BigVegSection";
import BigNonSection from "../components/BigNonSection";
import RegularSection from "../components/RegularSection";
import RegularNonSection from "../components/RegularNonSection";
import CheesBrustSection from "../components/CheesBrustSection";
import CrustSection from "../components/CrustSection";
import EpicSection from "../components/EpicSection";
import PastaSection from "../components/PastaSection";
import GarlicSection from "../components/GarlicSection";
import StarterSection from "../components/StarterSection";
import VegStarterSection from "../components/VegStarterSection";
import DrinkSection from "../components/DrinkSection";
import IceSection from "../components/IceSection";

const BrowseMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categoryButtons = [
    { key: "all", label: "All", color: "gray" },
    { key: "veg", label: "Veg", icon: veg, color: "green" },
    { key: "nonveg", label: "Non-Veg", icon: NV, color: "red" },
    { key: "bestseller", label: "Bestseller", icon: Bestseller, color: "yellow" },
    { key: "chefsSpecial", label: "Chef’s Special", icon: Chefs, color: "orange" },
  ];

  // Reorder: selected first
  const reorderedButtons = [
    ...categoryButtons.filter((b) => b.key === selectedCategory),
    ...categoryButtons.filter((b) => b.key !== selectedCategory),
  ];

  return (
    <div className="bg-white">
      {/* 🔹 Global Filter Buttons */}
      <div className="flex items-center gap-2 sm:gap-3 bg-white p-3 sm:p-4 rounded-lg shadow mb-6 overflow-x-auto sticky top-0 z-20">
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
            {btn.icon && (
              <img src={btn.icon} alt={btn.label} className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
            {btn.label}
          </button>
        ))}
      </div>

      {/* 🔹 Menu Sections */}
      <div className="bg-white py-2">
        <CategoryFilter filter={selectedCategory} />
      </div>
      <div className="bg-white py-2">
        <ComboSection filter={selectedCategory} />
      </div>
      <div className="bg-white py-2">
        <HalfSection filter={selectedCategory} />
      </div>
      <div className="bg-white py-2">
        <OwnSection filter={selectedCategory} />
      </div>
      <div className="bg-white py-2">
        <BigVegSection filter={selectedCategory} />
      </div>
      <div className="bg-white py-2">
        <BigNonSection filter={selectedCategory} />
      </div>
      <div className="bg-white py-2">
        <RegularSection filter={selectedCategory} />
      </div>
      <div className="bg-white py-2">
        <RegularNonSection filter={selectedCategory} />
      </div>
      <div className="bg-white py-2">
        <CheesBrustSection filter={selectedCategory} />
      </div>
      <div className="bg-white py-2">
        <CrustSection filter={selectedCategory} />
      </div>
      <div className="bg-white py-2">
        <EpicSection filter={selectedCategory} />
      </div>
      <div className="bg-white py-2">
        <PastaSection filter={selectedCategory} />
      </div>
      <div className="bg-white py-2">
        <GarlicSection filter={selectedCategory} />
      </div>
      <div className="bg-white py-2">
        <StarterSection filter={selectedCategory} />
      </div>
      <div className="bg-white py-2">
        <VegStarterSection filter={selectedCategory} />
      </div>
      <div className="bg-white py-2">
        <DrinkSection filter={selectedCategory} />
      </div>
      <div className="bg-white py-2">
        <IceSection filter={selectedCategory} />
      </div>
    </div>
  );
};

export default BrowseMenu;
