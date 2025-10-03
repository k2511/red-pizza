"use client";
import React, { useState } from "react";
import order from "../assets/img/order.png";
import food from "../assets/img/food.png";
import online from "../assets/img/online.png";

const faqs = [
  "How does Order.UK work?",
  "What payment methods are accepted?",
  "Can I track my order in real-time?",
  "Are there any special discounts or promotions available?",
  "Is Order.UK available in my area?",
];

const steps = [
  {
    title: "Place an Order!",
    desc: "Place order through our website or Mobile app",
    image: order,
  },
  {
    title: "Track Progress",
    desc: "You can track your order status with delivery time",
    image: food,
  },
  {
    title: "Get your Order!",
    desc: "Receive your order at a lightning-fast speed!",
    image: online,
  },
];

export default function FAQSection() {
  const [activeFaq, setActiveFaq] = useState(0);
  const [activeTab, setActiveTab] = useState("faq"); // default tab

  return (
    <div className="bg-gray-50 px-6 py-12 rounded-xl">
      {/* Header + Tabs */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-6">
        <h2 className="text-2xl md:text-3xl font-bold">Know more about us!</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setActiveTab("faq")}
            className={`px-6 py-2 border rounded-full font-medium ${
              activeTab === "faq"
                ? "text-white bg-red-600 border-red-600"
                : "text-gray-600 border-gray-400 hover:text-red-600 hover:border-red-600"
            }`}
          >
            Frequent Questions
          </button>
          <button
            onClick={() => setActiveTab("who")}
            className={`px-6 py-2 border rounded-full font-medium ${
              activeTab === "who"
                ? "text-white bg-red-600 border-red-600"
                : "text-gray-600 border-gray-400 hover:text-red-600 hover:border-red-600"
            }`}
          >
            Who we are?
          </button>
          <button
            onClick={() => setActiveTab("partner")}
            className={`px-6 py-2 border rounded-full font-medium ${
              activeTab === "partner"
                ? "text-white bg-red-600 border-red-600"
                : "text-gray-600 border-gray-400 hover:text-red-600 hover:border-red-600"
            }`}
          >
            Partner Program
          </button>
          <button
            onClick={() => setActiveTab("support")}
            className={`px-6 py-2 border rounded-full font-medium ${
              activeTab === "support"
                ? "text-white bg-red-600 border-red-600"
                : "text-gray-600 border-gray-400 hover:text-red-600 hover:border-red-600"
            }`}
          >
            Help & Support
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === "faq" && (
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* FAQ List */}
          <div className="space-y-3">
            {faqs.map((q, i) => (
              <div
                key={i}
                onClick={() => setActiveFaq(i)}
                className={`cursor-pointer px-4 py-3 rounded-lg font-medium ${
                  activeFaq === i
                    ? "bg-red-500 text-white"
                    : "bg-white text-gray-800 hover:bg-gray-100"
                }`}
              >
                {q}
              </div>
            ))}
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {steps.map((step, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow flex flex-col items-center text-center"
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="h-16 w-16 object-contain mb-3"
                />
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "who" && (
        <div className="text-center text-gray-700 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-4">Who we are?</h3>
          <p>
            We are Order.UK, a passionate team dedicated to making food ordering
            simple, fast, and enjoyable for everyone.
          </p>
        </div>
      )}

      {activeTab === "partner" && (
        <div className="text-center text-gray-700 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-4">Partner Program</h3>
          <p>
            Join our Partner Program and grow your business by reaching more
            hungry customers every day!
          </p>
        </div>
      )}

      {activeTab === "support" && (
        <div className="text-center text-gray-700 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-4">Help & Support</h3>
          <p>
            Need help? Contact our 24/7 support team via chat, email, or phone —
            we are always here to assist you.
          </p>
        </div>
      )}

      {/* Footer Text */}
      <p className="text-center text-gray-600 mt-10 max-w-2xl mx-auto">
        Order.UK simplifies the food ordering process. Browse through our
        diverse menu, select your favorite dishes, and proceed to checkout. Your
        delicious meal will be on its way to your doorstep in no time!
      </p>
    </div>
  );
}
