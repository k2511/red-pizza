import React from 'react';
import { MapPin, Phone, Globe } from 'lucide-react';

export default function LocationMap() {
  return (
    <div className="w-full bg-gray-50 py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Info Card */}
          <div className="order-2 lg:order-1">
            <div className="bg-gray-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Red Pizza</h2>
              <p className="text-orange-500 text-lg sm:text-xl font-semibold mb-6">Pune</p>
              
              <div className="space-y-5">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Address</p>
                    <p className="text-base sm:text-lg leading-relaxed">
                      Shop No.04, Radiant Ivy, opposite to Brahma Exuberance, next to Eisha Loreals, Kausar Baugh, Kondhwa, Pune, Maharashtra 411048
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone number</p>
                    <a 
                      href="tel:+919322433843" 
                      className="text-orange-500 text-base sm:text-lg font-semibold hover:text-orange-400 transition"
                    >
                      +91 93224 33843
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-4">
                  <Globe className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Website</p>
                    <a 
                      href="http://redpizza.in/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-500 text-base sm:text-lg font-semibold hover:text-orange-400 transition break-all"
                    >
                      http://redpizza.in/
                    </a>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <button className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5" />
                Get Directions
              </button>
            </div>
          </div>

          {/* Map */}
          <div className="order-1 lg:order-2 w-full">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl" style={{ paddingBottom: '75%' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.180541015711!2d73.893603!3d18.4754796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ebb2574aef1d%3A0x23a5cb4234854902!2sRed%20Pizza!5e0!3m2!1sen!2sin!4v1759475668796!5m2!1sen!2sin"
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Red Pizza Location Map"
              />
            </div>
            
            {/* Location Badge - appears on mobile */}
            <div className="lg:hidden mt-4 bg-white rounded-lg p-4 shadow-md flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Red Pizza</p>
                <p className="text-sm text-gray-600">Pune, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}