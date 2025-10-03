// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import {
//   MapPin,
//   ShoppingCart,
//   Star,
//   CircleArrowDown,
//   X,
// } from "lucide-react";

// // TopBar Component
// const TopBar = () => {
//   const [showLocationBox, setShowLocationBox] = useState(false);
//   const [showMapPopup, setShowMapPopup] = useState(false);
//   const [locationInput, setLocationInput] = useState("");

//   const dropdownRef = useRef(null);

//   // ✅ Close location dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowLocationBox(false);
//       }
//     };

//     if (showLocationBox) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [showLocationBox]);

//   return (
//     <div className="bg-white border-gray-200 px-4">
//       <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap border-x-2 bg-[#f1f1f1] rounded-xl relative">
//         {/* Left side - Promo */}
//         <div className="flex items-center space-x-2 mr-[10px]">
//           <Star className="h-4 text-red-400" />
//           <span className="text-sm text-gray-700">
//             Get 5% Off your first order,{" "}
//             <span className="text-red-500 font-semibold">Promo: ORDER5</span>
//           </span>
//         </div>

//         {/* Right side - Location and Cart */}
//         <div className="flex items-center space-x-6 mt-2 sm:mt-0 relative">
//           {/* Location */}
//           <div className="flex items-center space-x-2 relative" ref={dropdownRef}>
//             <MapPin className="w-4 h-4 text-gray-600" />
//             <span className="text-sm text-gray-700">
//               Ivy Radiant, A4, Kausar baugh
//             </span>
//             <button
//               className="text-sm text-red-500 hover:text-red-600"
//               aria-label="Change delivery location"
//               onClick={() => setShowLocationBox((prev) => !prev)}
//             >
//               Change location
//             </button>

//             {/* Small dropdown box */}
//             {showLocationBox && (
//               <div className="absolute top-full mt-2 -right-4 bg-red-500 shadow-md rounded-lg p-4 w-50 z-20">
//                 <button
//                   onClick={() => {
//                     setShowMapPopup(true);
//                     setShowLocationBox(false);
//                   }}
//                   className="w-full text-center px-2 py-1 text-sm text-white rounded"
//                 >
//                   Pick from Map
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Cart */}
//           <div className="flex items-center bg-red-600 text-white px-4 py-1 rounded-lg h-[50px]">
//             <ShoppingCart className="w-10 h-5 mr-2 border-r-2 border-white px-2 " />
//             <span className="font-medium border-r-2 border-white px-2">
//               23 Items
//             </span>
//             <span className="border-r-2 border-white px-2">₹ 798</span>
//             <CircleArrowDown className="w-5 h-5 ml-2" />
//           </div>
//         </div>
//       </div>

//       {/* Centered Modal Popup for Map */}
//       {showMapPopup && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//           onClick={() => setShowMapPopup(false)} // ✅ close when background clicked
//         >
//           <div
//             className="bg-white w-[90%] md:w-[600px] rounded-lg shadow-lg p-6 relative"
//             onClick={(e) => e.stopPropagation()} // ❌ prevent closing when clicking inside
//           >
//             {/* ✅ Header with Title and Close Button */}
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-semibold">Pick Location</h2>
//               <button
//                 onClick={() => setShowMapPopup(false)}
//                 className="text-gray-500 hover:text-gray-700"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//             </div>

//             <p className="text-sm text-gray-600 mb-4">
//               Sharing your accurate location enhances precision in search results
//               and delivery estimates, ensures effortless order delivery.
//             </p>

//             {/* ✅ Input Field */}
//             <input
//               type="text"
//               value={locationInput}
//               onChange={(e) => setLocationInput(e.target.value)}
//               placeholder="Enter your address or landmark"
//               className="w-full border rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
//             />

//             {/* ✅ Google Maps Iframe */}
//             <div className="w-full h-64 rounded-md overflow-hidden mb-4">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.180541399477!2d73.89102807501196!3d18.475479582609356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ebb2574aef1d%3A0x23a5cb4234854902!2sRed%20Pizza!5e0!3m2!1sen!2sin!4v1757671189555!5m2!1sen!2sin"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               ></iframe>
//             </div>

//             {/* ✅ Only Save Button */}
//             <div className="flex justify-end">
//               <button
//                 onClick={() => {
//                   console.log("Saved Location:", locationInput);
//                   setShowMapPopup(false);
//                 }}
//                 className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
//               >
//                 Save Location
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TopBar;










"use client";
import React, { useState, useEffect, useRef } from "react";
import { MapPin, ShoppingCart, Star, CircleArrowDown, X } from "lucide-react";

const TopBar = () => {
  const [showLocationBox, setShowLocationBox] = useState(false);
  const [showMapPopup, setShowMapPopup] = useState(false);
  const [locationInput, setLocationInput] = useState("");

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowLocationBox(false);
      }
    };

    if (showLocationBox) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showLocationBox]);

  return (
    <div className="bg-white border-gray-200 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap border-x-2 bg-[#f1f1f1] rounded-xl relative">

        {/* Left side - Promo (Hidden on mobile) */}
        <div className="hidden sm:flex items-center space-x-2 mr-[10px]">
          <Star className="h-4 text-red-400" />
          <span className="text-sm text-gray-700">
            Get 5% Off your first order,{" "}
            <span className="text-red-500 font-semibold">Promo: ORDER5</span>
          </span>
        </div>

        {/* Right side - Location and Cart */}
        <div className="flex items-center space-x-6 mt-2 sm:mt-0 relative">

          {/* Location - Always visible */}
          <div className="flex items-center space-x-2 relative" ref={dropdownRef}>
            <MapPin className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-700">Ivy Radiant, A4, Kausar baugh</span>
            <button
              className="text-sm text-red-500 hover:text-red-600"
              aria-label="Change delivery location"
              onClick={() => setShowLocationBox((prev) => !prev)}
            >
              Change location
            </button>

            {showLocationBox && (
              <div className="absolute top-full mt-2 -right-4 bg-red-500 shadow-md rounded-lg p-4 w-50 z-20">
                <button
                  onClick={() => {
                    setShowMapPopup(true);
                    setShowLocationBox(false);
                  }}
                  className="w-full text-center px-2 py-1 text-sm text-white rounded"
                >
                  Pick from Map
                </button>
              </div>
            )}
          </div>

          {/* Cart - Hidden on mobile */}
          <div className="hidden sm:flex items-center bg-red-600 text-white px-4 py-1 rounded-lg h-[50px]">
            <ShoppingCart className="w-10 h-5 mr-2 border-r-2 border-white px-2 " />
            <span className="font-medium border-r-2 border-white px-2">23 Items</span>
            <span className="border-r-2 border-white px-2">₹ 798</span>
            <CircleArrowDown className="w-5 h-5 ml-2" />
          </div>
        </div>
      </div>

      {/* Map Popup */}
      {showMapPopup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setShowMapPopup(false)}
        >
          <div
            className="bg-white w-[90%] md:w-[600px] rounded-lg shadow-lg p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Pick Location</h2>
              <button
                onClick={() => setShowMapPopup(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-gray-600 mb-4">
              Sharing your accurate location enhances precision in search results
              and delivery estimates, ensures effortless order delivery.
            </p>

            <input
              type="text"
              value={locationInput}
              onChange={(e) => setLocationInput(e.target.value)}
              placeholder="Enter your address or landmark"
              className="w-full border rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <div className="w-full h-64 rounded-md overflow-hidden mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.180541399477!2d73.89102807501196!3d18.475479582609356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ebb2574aef1d%3A0x23a5cb4234854902!2sRed%20Pizza!5e0!3m2!1sen!2sin!4v1757671189555!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => {
                  console.log("Saved Location:", locationInput);
                  setShowMapPopup(false);
                }}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Save Location
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopBar;
