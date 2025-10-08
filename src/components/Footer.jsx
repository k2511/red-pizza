import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import logo from "../assets/img/logo.jpg";
export default function Footer() {
  return (
    <footer className="bg-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Logo and App Download Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center">
             <img src={logo} alt="logo" />
            </div>
            
            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>
              
              <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
            </div>
            
            <div className="text-xs text-gray-600 text-center md:text-left">
              Company # 490039-445, Registered with<br />House of companies.
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-lg font-semibold text-center md:text-left">
              Get Exclusive Deals in your Inbox
            </h3>
            
            <div className="w-full max-w-md">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="youremail@gmail.com"
                  className="flex-1 px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-600 mt-2">
                we wont spam, read our <a href="#" className="underline">email policy</a>
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-4">
              <a href="https://www.facebook.com/goJazzPizza/" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
                <Facebook className="w-5 h-5 text-white" fill="white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
                <Instagram className="w-5 h-5 text-white" />
              </a>
                   <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
                <Youtube className="w-5 h-5 text-white" />
              </a>

                   <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition">
                <Twitter className="w-5 h-5 text-white" />
              </a>
             
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8 sm:gap-12">
            {/* Legal Pages */}
            <div className="flex flex-col space-y-3">
              <h4 className="font-semibold text-sm mb-1">Legal Pages</h4>
              <a href="#" className="text-sm text-gray-700 hover:text-gray-900 transition">Terms and conditions</a>
              <a href="#" className="text-sm text-gray-700 hover:text-gray-900 transition">Privacy</a>
              <a href="#" className="text-sm text-gray-700 hover:text-gray-900 transition">Cookies</a>
              <a href="#" className="text-sm text-gray-700 hover:text-gray-900 transition">Modern Slavery Statement</a>
            </div>

            {/* Important Links */}
            <div className="flex flex-col space-y-3">
              <h4 className="font-semibold text-sm mb-1">Important Links</h4>
              <a href="#" className="text-sm text-gray-700 hover:text-gray-900 transition">Get help</a>
              <a href="#" className="text-sm text-gray-700 hover:text-gray-900 transition">Add your restaurant</a>
              <a href="#" className="text-sm text-gray-700 hover:text-gray-900 transition">Sign up to deliver</a>
              <a href="#" className="text-sm text-gray-700 hover:text-gray-900 transition">Create a business account</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm">
            <p className="text-center sm:text-left">
              Red Pizza Copyright 2024, All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a href="#" className="hover:text-gray-300 transition">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300 transition">Terms</a>
              <a href="#" className="hover:text-gray-300 transition">Pricing</a>
              <a href="#" className="hover:text-gray-300 transition whitespace-nowrap">Do not sell or share my personal information</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}