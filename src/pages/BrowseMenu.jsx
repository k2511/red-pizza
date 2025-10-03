import React from "react";
import CategoryFilter from "../components/CategoryFilter";

const BrowseMenu = () => {
  return (
    <div className="text-center mt-20">
      <h1>Browse menu page</h1>

      <div className="bg-white py-2">
        <CategoryFilter />
      </div>
    </div>
  );
};

export default BrowseMenu;
