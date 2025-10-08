
import React, { useState } from "react";
import DealCard from "./DealCard";
import food1 from "../assets/img/food1.png";
import food2 from "../assets/img/food2.png";
import food from "../assets/img/food.png";

const DealsSection = () => {
  const [selectedFilter, setSelectedFilter] = useState("Vegan");

  const deals = {
    Vegan: [
      { image: food1, discount: "-40%", title: "Chef Burgers RedPizza" },
      { image: food2, discount: "-20%", title: "Grand Ai Cafe RedPizza" },
      { image: food1, discount: "-17%", title: "Butterbrot Cafe RedPizza" },
    ],
    Sushi: [
      { image: food1, discount: "-30%", title: "Sushi House" },
      { image: food2, discount: "-10%", title: "Ocean Sushi Bar" },
      { image: food1, discount: "-40%", title: "Chef Burgers RedPizza" },
      { image: food2, discount: "-20%", title: "Grand Ai Cafe RedPizza" },
    ],
    "Pizza & Fast food": [
      { image: food1, discount: "-40%", title: "Chef Burgers RedPizza" },
      { image: food2, discount: "-20%", title: "Grand Ai Cafe RedPizza" },
    ],
    Others: [
      { image: food2, discount: "-17%", title: "Butterbrot Cafe RedPizza" },
    ],
  };

  const filters = ["Vegan", "Sushi", "Pizza & Fast food", "Others"];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Title + Filter Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4 sm:gap-0">
        <h2 className="text-2xl font-bold">
          Up to -40% 🎉 Red Pizza exclusive deals
        </h2>

        <div className="flex flex-wrap sm:flex-nowrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                selectedFilter === filter
                  ? "bg-red-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-red-500 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-4  sm:w-[90%] overflow-x-auto hide-scrollbar  rounded-xl">
        {deals[selectedFilter].map((deal, index) => (
          <DealCard
            key={index}
            image={deal.image}
            discount={deal.discount}
            title={deal.title}
          />
        ))}
      </div>
    </div>
  );
};

export default DealsSection;




