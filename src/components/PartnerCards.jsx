"use client";
import React from "react";
import partnerImg from "../assets/img/partnerImg.png"; // replace with your chef image
import riderImg from "../assets/img/riderImg.png";     // replace with your rider image

const cards = [
  {
    title: "Partner with us",
    subtitle: "Signup as a business",
    badge: "Earn more with lower fees",
    button: "Get Started",
    image: partnerImg,
  },
  {
    title: "Ride with us",
    subtitle: "Signup as a rider",
    badge: "Avail exclusive perks",
    button: "Get Started",
    image: riderImg,
  },
];

export default function PartnerCards() {
  return (
    <div className="grid md:grid-cols-2 gap-6 px-6 py-10">
      {cards.map((card, i) => (
        <div
          key={i}
          className="relative rounded-xl overflow-hidden shadow-lg group"
        >
          {/* Background Image */}
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-72 object-cover group-hover:scale-105 transition-transform"
          />

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

          {/* Badge */}
          <div className="absolute top-4 left-4 bg-white text-black text-sm font-medium px-4 py-1 rounded-tl-lg rounded-br-lg shadow">
            {card.badge}
          </div>

          {/* Content */}
          <div className="absolute bottom-6 left-6 text-white">
            <p className="text-sm">{card.subtitle}</p>
            <h3 className="text-2xl font-bold">{card.title}</h3>
            <button className="mt-3 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-medium">
              {card.button}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
