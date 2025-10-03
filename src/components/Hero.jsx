import React from "react";
import { Search } from "lucide-react";
import b1 from "../assets/img/b1.png";
import hero1 from "../assets/img/hero1.png";
import DealsSection from "./DealsSection";
import PopularCategories from "./PopularCategories";
import PopularRestaurants from "./PopularRestaurants";
import AppPromoBanner from "./AppPromoBanner";
import PartnerCards from "./PartnerCards";
import FAQSection from "./FAQSection";
import StatsSection from "./StatsSection";
import CategoryFilter from "./CategoryFilter";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl my-6 overflow-hidden w-[1280px] m-auto ">
      <div className="max-w-7xl relative mx-auto px-6 py-12 h-[510px]">
        <div className=" ">
          <img
            className="min-w-[36rem] h-[30rem] absolute right-[15%] bottom-0 z-40"
            src={b1}
            alt=""
          />
        </div>

        {/* <div>
          <img
          className="w-[15rem] h-[25rem] border-t-rounded-md absolute right-[15%] bottom-0 z-40"
           src={hero1}
            alt="" />
        </div> */}

        <div
          className="absolute h-[30rem] right-0 bottom-0 z-0"
          style={{
            width: "500px",
            backgroundColor: "#E3010F",
            borderTopLeftRadius: "282.5px",
            borderBottomRightRadius: "12px",
            right: "-80px",
          }}
        >
          {/* Right Content */}
          <div className="flex-1 relative ml-10 z-10 ">
            {/* Notification Cards */}
            <div className="absolute -right-15 top-8 bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <span className="font-semibold text-sm">Order!</span>
              </div>
              <p className="text-xs text-gray-600">
                We've Received your order!
              </p>
              <p className="text-xs text-gray-500">
                Awaiting Restaurant acceptance
              </p>
            </div>

            <div className="absolute right-24 top-40 bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="font-semibold text-sm">
                  Order Accepted! ✅
                </span>
              </div>
              <p className="text-xs text-gray-600">
                Order will be delivered shortly
              </p>
            </div>

            <div className="absolute right-15 top-72 bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <div className="flex items-center mb-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span className="font-semibold text-sm">Order!</span>
              </div>
              <p className="text-xs text-gray-600">Your rider's nearby 🎉</p>
              <p className="text-xs text-gray-500">
                They're almost there - get ready!
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between relative ">
          {/* Left Content */}
          <div className="absolute top-24 flex-1 max-w-lg  w-fit">
            <p className="text-gray-600 mb-3">
              Order Restaurant food, takeaway and groceries.
            </p>

            <h1 className="text-5xl font-bold text-gray-900 mb-2">
              Feast Your Senses,
            </h1>
            <h1 className="text-5xl font-bold text-red-500 mb-8">
              Fast and Fresh
            </h1>

            <p className="text-gray-600 mb-8">
              Enter a postcode to see what we deliver
            </p>

            {/* Search Bar */}
            <div className="flex space-x-0">
              <input
                type="text"
                placeholder="e.g. EC4R 3TE"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <button className="bg-red-500 text-white px-8 py-3 rounded-r-full hover:bg-red-600 transition-colors flex items-center">
                <Search className="w-5 h-5 mr-2" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-5">
        <DealsSection />
      </div>

      <div className="bg-white py-2">
        <PopularCategories />
      </div>

      <div className="bg-white py-2">
        <PopularRestaurants />
      </div>

      <div className="bg-white py-2">
        <PartnerCards />
      </div>

      <div className="bg-white py-2">
        <FAQSection />
      </div>

      <div className="bg-white py-2">
        <StatsSection />
      </div>

         <div className="bg-white py-2">
        <AppPromoBanner />
      </div>
    </div>
  );
};

export default Hero;
