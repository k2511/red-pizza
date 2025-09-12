import React from "react";
import DealCard from "./DealCard";
import food1 from "../assets/img/food1.png";
import food2 from "../assets/img/food2.png";

const DealsSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Title + Filter Buttons */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">
          Up to -40% 🎉 Order.uk exclusive deals
        </h2>

        {/* Filter Buttons */}
        <div className="flex space-x-6">
          <button className="text-gray-600 px-6 py-2 rounded-full font-medium hover:bg-red-500 hover:text-white transition-colors">
            Vegan
          </button>
          <button className="text-gray-600 px-6 py-2 rounded-full font-medium hover:bg-red-500 hover:text-white transition-colors">
            Sushi
          </button>
          <button className="text-gray-600 px-6 py-2 rounded-full font-medium hover:bg-red-500 hover:text-white transition-colors">
            Pizza & Fast food
          </button>
          <button className="text-gray-600 px-6 py-2 rounded-full font-medium hover:bg-red-500 hover:text-white transition-colors">
            Others
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="flex gap-2 max-w-7xl mx-auto justify-between  ">
        {/* With image */}
        <DealCard image={food1} discount="-40%" title="Chef Burgers London" />
        <DealCard image={food2} discount="-20%" title="Grand Ai Cafe London" />
        <DealCard image={food1} discount="-17%" title="Butterbrot Cafe London" />
      </div>
    </div>
  );
};

export default DealsSection;
