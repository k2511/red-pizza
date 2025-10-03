"use client";
import React from "react";
import apple from "../assets/img/apple.png"; // replace with your App Store badge
import playstore from "../assets/img/playstore.png"; // replace with your Google Play badge
import fr1 from "../assets/img/fr1.png"; // replace with the people image
import uk from "../assets/img/uk.png";

export default function AppPromoBanner() {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-white rounded-xl shadow p-6 md:p-10 flex flex-col md:flex-row items-center justify-between">
      {/* Left Section (Image) */}
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          src={fr1}
          alt="People using Order.uk"
          className="max-h-80 object-contain"
        />
      </div>

      {/* Right Section (Text + Buttons) */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold leading-snug flex items-center gap-2 mb-6">
          <img
            src={uk}
            alt="Order Logo"
            className="h-10 md:h-12 object-contain inline-block"
          />
          <span className="text-indigo-600">.uk</span>ing is more
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold mt-2">
          <span className="bg-indigo-900 text-orange-400 px-3 py-1 rounded-lg">
            Personalised
          </span>{" "}
          & Instant
        </h3>
        <p className="text-gray-600 mt-4 ">
          Download the RedPizza app for faster ordering
        </p>

        {/* App Buttons */}
        <div className="flex items-center gap-4 mt-6 justify-center md:justify-start">
          {/* App Store */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
          >
            <img src={apple} alt="Apple Logo" className="h-6" />
            <div className="leading-tight text-left">
              <span className="text-xs">Download on the</span>
              <p className="text-sm font-semibold">App Store</p>
            </div>
          </a>

          {/* Google Play */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
          >
            <img src={playstore} alt="Google Play Logo" className="h-6" />
            <div className="leading-tight text-left">
              <span className="text-xs">GET IT ON</span>
              <p className="text-sm font-semibold">Google Play</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
