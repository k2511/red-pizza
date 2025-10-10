// import React, { useState, useRef, useEffect } from "react";
// import veg from "../assets/img/veg.png";
// import NV from "../assets/img/NV.png";
// import Bestseller from "../assets/img/Bestseller.png";
// import Chefs from "../assets/img/Chefs.png";
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
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [activeSection, setActiveSection] = useState("valueFun");
//   const [showMobileMenu, setShowMobileMenu] = useState(false);

//   const sectionRefs = {
//     valueFun: useRef(null),
//     combo: useRef(null),
//     half: useRef(null),
//     own: useRef(null),
//     bigVeg: useRef(null),
//     bigNon: useRef(null),
//     regular: useRef(null),
//     regularNon: useRef(null),
//     cheese: useRef(null),
//     crust: useRef(null),
//     epic: useRef(null),
//     pasta: useRef(null),
//     garlic: useRef(null),
//     starter: useRef(null),
//     vegStarter: useRef(null),
//     drink: useRef(null),
//     ice: useRef(null),
//   };

//   const scrollToSection = (key) => {
//     setShowMobileMenu(false);
//     sectionRefs[key]?.current?.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const offsets = Object.entries(sectionRefs).map(([key, ref]) => ({
//         key,
//         offset: ref.current
//           ? ref.current.getBoundingClientRect().top
//           : Infinity,
//       }));

//       const visible = offsets
//         .filter(
//           (item) => item.offset < window.innerHeight / 3 && item.offset > -400
//         )
//         .sort((a, b) => b.offset - a.offset);

//       if (visible.length > 0 && visible[0].key !== activeSection) {
//         setActiveSection(visible[0].key);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [activeSection]);

//   const categoryButtons = [
//     { key: "all", label: "All", color: "gray" },
//     { key: "veg", label: "Veg", icon: veg, color: "green" },
//     { key: "nonveg", label: "Non-Veg", icon: NV, color: "red" },
//     { key: "bestseller", label: "Bestseller", icon: Bestseller, color: "blue" },
//     {
//       key: "chefsSpecial",
//       label: "Chef's Special",
//       icon: Chefs,
//       color: "orange",
//     },
//   ];

//   const sideMenu = [
//     { key: "valueFun", label: "Value Fun Pizza @ 99" },
//     { key: "combo", label: "1 Plus 1 @ 119 each" },
//     { key: "half", label: 'Half & Half Pizzas [Big 10"]' },
//     { key: "own", label: "Make Your Own Pizza" },
//     { key: "bigVeg", label: 'BIG 10" Pizzas | Veg' },
//     { key: "bigNon", label: 'BIG 10" Pizzas | Non-Veg' },
//     { key: "regular", label: "Regular Pizzas | Veg" },
//     { key: "regularNon", label: "Regular Pizzas | Non-Veg" },
//     { key: "cheese", label: "Cheese Burst" },
//     { key: "crust", label: "Crust" },
//     { key: "epic", label: "Epic Pizzas" },
//     { key: "pasta", label: "Pasta" },
//     { key: "garlic", label: "Garlic Bread" },
//     { key: "starter", label: "Starter" },
//     { key: "vegStarter", label: "Veg Starter" },
//     { key: "drink", label: "Drinks" },
//     { key: "ice", label: "Ice Cream" },
//   ];

//   return (
//     <div className="flex flex-col lg:flex-row bg-white min-h-screen">
//       {/* 🧭 Sidebar for Desktop */}
//       <div className="hidden lg:flex flex-col w-64 border-r border-gray-200 bg-white sticky top-0 h-screen overflow-y-auto hide-scrollbar shadow-sm">
//         {/* Menu Title - Desktop Only */}
//         <div className="hidden lg:block p-4 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-red-50">
//           <h1 className="text-xl font-bold text-gray-800">Browse Menu</h1>
//         </div>

//         <div className="flex-1">
//           {sideMenu.map((item) => (
//             <button
//               key={item.key}
//               onClick={() => scrollToSection(item.key)}
//               className={`w-full text-left px-4 py-3 border-l-4 transition-all duration-300 hover:shadow-inner ${
//                 activeSection === item.key
//                   ? "bg-gradient-to-r from-orange-500 to-red-500 text-white border-orange-500 shadow-md"
//                   : "border-transparent hover:bg-gray-50 text-gray-700 hover:text-gray-900"
//               }`}
//             >
//               <span className="font-medium">{item.label}</span>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* 🍕 Content */}
//       <div className="flex-1 p-2 sm:p-4 lg:p-6">
//         {/* 🔸 Top Filter Bar */}
//         <div className="sticky top-0 bg-white z-40 p-2 sm:p-3 border-b border-gray-200 shadow-sm">
//           <div className="flex flex-col lg:flex-row gap-3 lg:gap-2 items-start lg:items-center justify-between">
//             {/* Category Buttons - Horizontal Scroll for Mobile */}
//             <div className="w-full lg:w-auto overflow-hidden">
//               <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2 lg:pb-0 px-1 lg:px-0">
//                 {categoryButtons.map((btn) => (
//                   <button
//                     key={btn.key}
//                     onClick={() => setSelectedCategory(btn.key)}
//                     className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
//                       selectedCategory === btn.key
//                         ? `${
//                             btn.key === "all" 
//                               ? "bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-md"
//                               : btn.key === "veg"
//                               ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md"
//                               : btn.key === "nonveg"
//                               ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md"
//                               : btn.key === "bestseller"
//                               ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md"
//                               : "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md"
//                           }`
//                         : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
//                     }`}
//                   >
//                     {btn.icon && (
//                       <img
//                         src={btn.icon}
//                         alt={btn.label}
//                         className="w-4 h-4 flex-shrink-0"
//                       />
//                     )}
//                     <span className="text-sm">{btn.label}</span>
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Search Input */}
//             <div className="w-full lg:w-64 mt-2 lg:mt-0">
//               <input
//                 type="text"
//                 placeholder="Search menu..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 hover:bg-white"
//               />
//             </div>
//           </div>
//         </div>

//         {/* 🔹 Menu Sections */}
//         <div ref={sectionRefs.valueFun}>
//           <CategoryFilter filter={selectedCategory} searchTerm={searchQuery} />
//         </div>
//         <div ref={sectionRefs.combo}>
//           <ComboSection filter={selectedCategory} searchTerm={searchQuery} />
//         </div>
//         <div ref={sectionRefs.half}>
//           <HalfSection filter={selectedCategory} searchTerm={searchQuery} />
//         </div>
//         <div ref={sectionRefs.own}>
//           <OwnSection filter={selectedCategory} searchTerm={searchQuery} />
//         </div>
//         <div ref={sectionRefs.bigVeg}>
//           <BigVegSection filter={selectedCategory} searchTerm={searchQuery} />
//         </div>
//         <div ref={sectionRefs.bigNon}>
//           <BigNonSection filter={selectedCategory} searchTerm={searchQuery} />
//         </div>
//         <div ref={sectionRefs.regular}>
//           <RegularSection filter={selectedCategory} searchTerm={searchQuery} />
//         </div>
//         <div ref={sectionRefs.regularNon}>
//           <RegularNonSection
//             filter={selectedCategory}
//             searchTerm={searchQuery}
//           />
//         </div>
//         <div ref={sectionRefs.cheese}>
//           <CheesBrustSection
//             filter={selectedCategory}
//             searchTerm={searchQuery}
//           />
//         </div>
//         <div ref={sectionRefs.crust}>
//           <CrustSection filter={selectedCategory} searchTerm={searchQuery} />
//         </div>
//         <div ref={sectionRefs.epic}>
//           <EpicSection filter={selectedCategory} searchTerm={searchQuery} />
//         </div>
//         <div ref={sectionRefs.pasta}>
//           <PastaSection filter={selectedCategory} searchTerm={searchQuery} />
//         </div>
//         <div ref={sectionRefs.garlic}>
//           <GarlicSection filter={selectedCategory} searchTerm={searchQuery} />
//         </div>
//         <div ref={sectionRefs.starter}>
//           <StarterSection filter={selectedCategory} searchTerm={searchQuery} />
//         </div>
//         <div ref={sectionRefs.vegStarter}>
//           <VegStarterSection
//             filter={selectedCategory}
//             searchTerm={searchQuery}
//           />
//         </div>
//         <div ref={sectionRefs.drink}>
//           <DrinkSection filter={selectedCategory} searchTerm={searchQuery} />
//         </div>
//         <div ref={sectionRefs.ice}>
//           <IceSection filter={selectedCategory} searchTerm={searchQuery} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BrowseMenu;




import React, { useState, useRef, useEffect } from "react";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("valueFun");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const sectionRefs = {
    valueFun: useRef(null),
    combo: useRef(null),
    half: useRef(null),
    own: useRef(null),
    bigVeg: useRef(null),
    bigNon: useRef(null),
    regular: useRef(null),
    regularNon: useRef(null),
    cheese: useRef(null),
    crust: useRef(null),
    epic: useRef(null),
    pasta: useRef(null),
    garlic: useRef(null),
    starter: useRef(null),
    vegStarter: useRef(null),
    drink: useRef(null),
    ice: useRef(null),
  };

  const scrollToSection = (key) => {
    setShowMobileMenu(false);
    sectionRefs[key]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const offsets = Object.entries(sectionRefs).map(([key, ref]) => ({
        key,
        offset: ref.current ? ref.current.getBoundingClientRect().top : Infinity,
      }));

      const visible = offsets
        .filter((item) => item.offset < window.innerHeight / 3 && item.offset > -400)
        .sort((a, b) => b.offset - a.offset);

      if (visible.length > 0 && visible[0].key !== activeSection) {
        setActiveSection(visible[0].key);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const categoryButtons = [
    { key: "all", label: "All", color: "gray" },
    { key: "veg", label: "Veg", icon: veg, color: "green" },
    { key: "nonveg", label: "Non-Veg", icon: NV, color: "red" },
    { key: "bestseller", label: "Bestseller", icon: Bestseller, color: "blue" },
    { key: "chefsSpecial", label: "Chef's Special", icon: Chefs, color: "orange" },
  ];

  const sideMenu = [
    { key: "valueFun", label: "Value Fun Pizza @ 99" },
    { key: "combo", label: "1 Plus 1 @ 119 each" },
    { key: "half", label: 'Half & Half Pizzas [Big 10"]' },
    { key: "own", label: "Make Your Own Pizza" },
    { key: "bigVeg", label: 'BIG 10" Pizzas | Veg' },
    { key: "bigNon", label: 'BIG 10" Pizzas | Non-Veg' },
    { key: "regular", label: "Regular Pizzas | Veg" },
    { key: "regularNon", label: "Regular Pizzas | Non-Veg" },
    { key: "cheese", label: "Cheese Burst" },
    { key: "crust", label: "Crust" },
    { key: "epic", label: "Epic Pizzas" },
    { key: "pasta", label: "Pasta" },
    { key: "garlic", label: "Garlic Bread" },
    { key: "starter", label: "Starter" },
    { key: "vegStarter", label: "Veg Starter" },
    { key: "drink", label: "Drinks" },
    { key: "ice", label: "Ice Cream" },
  ];

  return (
    <div className="flex flex-col lg:flex-row bg-white min-h-screen">
      {/* 🧭 Sidebar for Desktop */}
      <div className="hidden lg:flex flex-col w-64 border-r border-gray-200 bg-white sticky top-0 h-screen overflow-y-auto hide-scrollbar shadow-sm">
        {/* Menu Title - Desktop Only */}
        <div className="hidden lg:block p-4 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-red-50">
          <h1 className="text-xl font-bold text-gray-800">Browse Menu</h1>
        </div>

        <div className="flex-1">
          {sideMenu.map((item) => (
            <button
              key={item.key}
              onClick={() => scrollToSection(item.key)}
              className={`w-full text-left px-4 py-3 border-l-4 transition-all duration-300 hover:shadow-inner ${
                activeSection === item.key
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white border-orange-500 shadow-md"
                  : "border-transparent hover:bg-gray-50 text-gray-700 hover:text-gray-900"
              }`}
            >
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 🍕 Content */}
      <div className="flex-1 p-2 sm:p-4 lg:p-6">
        {/* 🔸 Top Filter Bar */}
        <div className="sticky top-0 bg-white z-40 p-2 sm:p-3 border-b border-gray-200 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-2 items-start lg:items-center justify-between">
            {/* Category Buttons - Horizontal Scroll for Mobile */}
            <div className="w-full lg:w-auto overflow-hidden">
              <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2 lg:pb-0 px-1 lg:px-0">
                {categoryButtons.map((btn) => (
                  <button
                    key={btn.key}
                    onClick={() => setSelectedCategory(btn.key)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                      selectedCategory === btn.key
                        ? `${
                            btn.key === "all"
                              ? "bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-md"
                              : btn.key === "veg"
                              ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-md"
                              : btn.key === "nonveg"
                              ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md"
                              : btn.key === "bestseller"
                              ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md"
                              : "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md"
                          }`
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                    }`}
                  >
                    {btn.icon && (
                      <img
                        src={btn.icon}
                        alt={btn.label}
                        className="w-4 h-4 flex-shrink-0"
                      />
                    )}
                    <span className="text-sm">{btn.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Search Input */}
            <div className="w-full lg:w-64 mt-2 lg:mt-0">
              <input
                type="text"
                placeholder="Search menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all duration-200 bg-gray-50 hover:bg-white"
              />
            </div>
          </div>
        </div>

        {/* 🔹 Menu Sections */}
        <div ref={sectionRefs.valueFun}>
          <CategoryFilter filter={selectedCategory} searchTerm={searchQuery} />
        </div>
        <div ref={sectionRefs.combo}>
          <ComboSection filter={selectedCategory} searchTerm={searchQuery} />
        </div>
        <div ref={sectionRefs.half}>
          <HalfSection filter={selectedCategory} searchTerm={searchQuery} />
        </div>
        <div ref={sectionRefs.own}>
          <OwnSection filter={selectedCategory} searchTerm={searchQuery} />
        </div>
        <div ref={sectionRefs.bigVeg}>
          <BigVegSection filter={selectedCategory} searchTerm={searchQuery} />
        </div>
        <div ref={sectionRefs.bigNon}>
          <BigNonSection filter={selectedCategory} searchTerm={searchQuery} />
        </div>
        <div ref={sectionRefs.regular}>
          <RegularSection filter={selectedCategory} searchTerm={searchQuery} />
        </div>
        <div ref={sectionRefs.regularNon}>
          <RegularNonSection
            filter={selectedCategory}
            searchTerm={searchQuery}
          />
        </div>
        <div ref={sectionRefs.cheese}>
          <CheesBrustSection
            filter={selectedCategory}
            searchTerm={searchQuery}
          />
        </div>
        <div ref={sectionRefs.crust}>
          <CrustSection filter={selectedCategory} searchTerm={searchQuery} />
        </div>
        <div ref={sectionRefs.epic}>
          <EpicSection filter={selectedCategory} searchTerm={searchQuery} />
        </div>
        <div ref={sectionRefs.pasta}>
          <PastaSection filter={selectedCategory} searchTerm={searchQuery} />
        </div>
        <div ref={sectionRefs.garlic}>
          <GarlicSection filter={selectedCategory} searchTerm={searchQuery} />
        </div>
        <div ref={sectionRefs.starter}>
          <StarterSection filter={selectedCategory} searchTerm={searchQuery} />
        </div>
        <div ref={sectionRefs.vegStarter}>
          <VegStarterSection
            filter={selectedCategory}
            searchTerm={searchQuery}
          />
        </div>
        <div ref={sectionRefs.drink}>
          <DrinkSection filter={selectedCategory} searchTerm={searchQuery} />
        </div>
        <div ref={sectionRefs.ice}>
          <IceSection filter={selectedCategory} searchTerm={searchQuery} />
        </div>
      </div>
    </div>
  );
};

export default BrowseMenu;






