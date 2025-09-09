import React from 'react';
import { Search } from 'lucide-react';
import b1 from "../assets/img/b1.png";
const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl  my-6 overflow-hidden w-[1280px] m-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between">
          {/* Left Content */}
          <div className="flex-1 max-w-lg">
            <p className="text-gray-600 mb-3">
              Order Restaurant food, takeaway and groceries.
            </p>
            
            <h1 className="text-5xl font-bold text-gray-900 mb-2">
              Feast Your Senses,
            </h1>
            <h1 className="text-5xl font-bold text-orange-500 mb-8">
              Fast and Fresh
            </h1>
            
            <p className="text-gray-600 mb-8">
              Enter a postcode to see what we deliver
            </p>
            
            {/* Search Bar */}
            <div className="flex">
              <input
                type="text"
                placeholder="e.g. EC4R 3TE"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button className="bg-orange-500 text-white px-8 py-3 rounded-r-full hover:bg-orange-600 transition-colors flex items-center">
                <Search className="w-5 h-5 mr-2" />
                Search
              </button>
            </div>
          </div>
          
          {/* Right Content - Image and Notifications */}
          <div className="flex-1 relative ml-12">
            {/* Main Image Placeholder */}
            <div className="relative">
              <div className="w-96 h-80 flex justify-center items-center">
                 <div>
                  <img src={b1} alt="" style={{height: '332px', width: '100%'}} />
                </div>
              
              </div>
              
              {/* Notification Cards */}
              <div className="absolute -right-8 top-8 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                  <span className="font-semibold text-sm">Order!</span>
                </div>
                <p className="text-xs text-gray-600">
                  We've Received your order!
                </p>
                <p className="text-xs text-gray-500">
                  Awaiting Restaurant acceptance
                </p>
              </div>
              
              <div className="absolute -right-4 top-32 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="font-semibold text-sm">Order Accepted! ✅</span>
                </div>
                <p className="text-xs text-gray-600">
                  Order will be delivered shortly
                </p>
              </div>
              
              <div className="absolute -right-12 top-56 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="font-semibold text-sm">Order!</span>
                </div>
                <p className="text-xs text-gray-600">
                  Your rider's nearby 🎉
                </p>
                <p className="text-xs text-gray-500">
                  They're almost there - get ready!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;





