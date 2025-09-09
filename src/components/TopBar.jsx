import React from "react";
import {
  MapPin,
  ShoppingCart,
  User,
  Star,
  CircleArrowDown,
} from "lucide-react";

// TopBar Component
const TopBar = () => {
  return (
    <div className="bg-white  border-gray-200 px-4 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap border-x-2  bg-[#f1f1f1] rounded-xl">
        {/* Left side - Promo */}
        <div className="flex items-center space-x-2 mr-[10px]">
          <Star className=" h-4 text-yellow-400" />
          <span className="text-sm text-gray-700">
            Get 5% Off your first order,{" "}
            <span className="text-orange-500 font-semibold">Promo: ORDER5</span>
          </span>
        </div>

        {/* Right side - Location and Cart */}
        <div className="flex items-center space-x-6 mt-2 sm:mt-0">
          {/* Location */}
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-gray-600" />
            <span className="text-sm text-gray-700">
              Ivy Radiant, A4, Kausar baugh
            </span>
            <button
              className="text-sm text-orange-500 hover:text-orange-600"
              aria-label="Change delivery location"
            >
              Change location
            </button>
          </div>

          {/* Cart */}
          <div className="flex items-center bg-green-600 text-white px-4 py-1 rounded-lg h-[50px]">
            <ShoppingCart className="w-10 h-5 mr-2 border-r-2 border-white px-2 " />

            <span className="font-medium border-r-2 border-white px-2">
              23 Items
            </span>

            <span className="border-r-2 border-white px-2">₹ 798</span>

            <CircleArrowDown className="w-5 h-5 ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
