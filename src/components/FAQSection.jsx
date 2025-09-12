// "use client";
// import React, { useState } from "react";
// import order from "../assets/img/order.png";
// import food from "../assets/img/food.png";
// import online from "../assets/img/online.png";

// const faqs = [
//   "How does Order.UK work?",
//   "What payment methods are accepted?",
//   "Can I track my order in real-time?",
//   "Are there any special discounts or promotions available?",
//   "Is Order.UK available in my area?",
// ];

// const steps = [
//   {
//     title: "Place an Order!",
//     desc: "Place order through our website or Mobile app",
//     image: order,
//   },
//   {
//     title: "Track Progress",
//     desc: "You can track your order status with delivery time",
//     image: food,
//   },
//   {
//     title: "Get your Order!",
//     desc: "Receive your order at a lighting fast speed!",
//     image: online,
//   },
// ];

// export default function FAQSection() {
//   const [active, setActive] = useState(0);

//   return (
//     <div className="bg-gray-50 px-6 py-12 rounded-xl">
//       {/* Header */}
//       <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
//         Know more about us!
//       </h2>

//       {/* Tabs */}
//       <div className="flex flex-wrap justify-center gap-6 mb-10">
//         <button className="px-6 py-2 border rounded-full font-medium text-orange-600 border-orange-600">
//           Frequent Questions
//         </button>
//         <button className="px-6 py-2 border rounded-full font-medium text-gray-600 hover:text-orange-600 hover:border-orange-600">
//           Who we are?
//         </button>
//         <button className="px-6 py-2 border rounded-full font-medium text-gray-600 hover:text-orange-600 hover:border-orange-600">
//           Partner Program
//         </button>
//         <button className="px-6 py-2 border rounded-full font-medium text-gray-600 hover:text-orange-600 hover:border-orange-600">
//           Help & Support
//         </button>
//       </div>

//       <div className="grid md:grid-cols-2 gap-10 items-center">
//         {/* FAQ List */}
//         <div className="space-y-3">
//           {faqs.map((q, i) => (
//             <div
//               key={i}
//               onClick={() => setActive(i)}
//               className={`cursor-pointer px-4 py-3 rounded-lg font-medium ${
//                 active === i
//                   ? "bg-orange-500 text-white"
//                   : "bg-white text-gray-800 hover:bg-gray-100"
//               }`}
//             >
//               {q}
//             </div>
//           ))}
//         </div>

//         {/* Steps */}
//         <div className="flex flex-col md:flex-row gap-4">
//           {steps.map((step, i) => (
//             <div
//               key={i}
//               className="bg-white p-6 rounded-lg shadow flex-1 flex flex-col items-center text-center"
//             >
//               {/* Image instead of icon */}
//               <img
//                 src={step.image}
//                 alt={step.title}
//                 className="h-16 w-16 object-contain mb-3"
//               />
//               <h3 className="font-semibold text-lg">{step.title}</h3>
//               <p className="text-sm text-gray-600 mt-2">{step.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Footer Text */}
//       <p className="text-center text-gray-600 mt-8 max-w-2xl mx-auto">
//         Order.UK simplifies the food ordering process. Browse through our
//         diverse menu, select your favorite dishes, and proceed to checkout. Your
//         delicious meal will be on its way to your doorstep in no time!
//       </p>
//     </div>
//   );
// }


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
    desc: "Receive your order at a lighting fast speed!",
    image: online,
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(0);

  return (
    <div className="bg-gray-50 px-6 py-12 rounded-xl">
      {/* Header + Tabs */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          Know more about us!
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-6 py-2 border rounded-full font-medium text-orange-600 border-orange-600">
            Frequent Questions
          </button>
          <button className="px-6 py-2 border rounded-full font-medium text-gray-600 hover:text-orange-600 hover:border-orange-600">
            Who we are?
          </button>
          <button className="px-6 py-2 border rounded-full font-medium text-gray-600 hover:text-orange-600 hover:border-orange-600">
            Partner Program
          </button>
          <button className="px-6 py-2 border rounded-full font-medium text-gray-600 hover:text-orange-600 hover:border-orange-600">
            Help & Support
          </button>
        </div>
      </div>

      {/* FAQ + Steps */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((q, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className={`cursor-pointer px-4 py-3 rounded-lg font-medium ${
                active === i
                  ? "bg-orange-500 text-white"
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

      {/* Footer Text */}
      <p className="text-center text-gray-600 mt-10 max-w-2xl mx-auto">
        Order.UK simplifies the food ordering process. Browse through our
        diverse menu, select your favorite dishes, and proceed to checkout. Your
        delicious meal will be on its way to your doorstep in no time!
      </p>
    </div>
  );
}
