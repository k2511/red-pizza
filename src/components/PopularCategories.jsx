"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import cat1 from "../assets/img/cat1.png";
import cat2 from "../assets/img/cat2.png";
import cat3 from "../assets/img/cat3.png";
import cat4 from "../assets/img/cat4.png";
import cat5 from "../assets/img/cat5.png";
import cat6 from "../assets/img/cat6.png";

const categories = [
  { name: "Burgers & Fast food", image: cat1 },
  { name: "Salads", image: cat2 },
  { name: "Pasta & Casuals", image: cat3 },
  { name: "Pizza", image: cat4 },
  { name: "Breakfast", image: cat5 },
  { name: "Soups", image: cat6 },
];

export default function PopularCategories() {
  return (
    <div className="px-6 py-2 relative">
      {/* Heading + Arrows in the same row */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">
          Order.uk Popular Categories <span className="ml-1">🤩</span>
        </h2>

        {/* Navigation Buttons */}
        <div className="flex gap-3">
          <button className="prev-btn bg-white shadow p-2 rounded-full hover:bg-gray-100">
            <FaArrowLeft />
          </button>
          <button className="next-btn bg-white shadow p-2 rounded-full hover:bg-gray-100">
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        loop={true}
        className="pb-10"
      >
        {categories.map((cat, i) => (
          <SwiperSlide key={i}>
            <div className="rounded-lg overflow-hidden shadow hover:shadow-lg transition bg-gray-100 cursor-pointer">
              {/* Image Section */}
              {cat.image ? (
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-40 w-full object-cover"
                />
              ) : (
                <div className="h-40 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Image</span>
                </div>
              )}

              {/* Text Section */}
              <div className="p-3 text-center">
                <h3 className="font-semibold text-gray-800 text-sm">
                  {cat.name}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
