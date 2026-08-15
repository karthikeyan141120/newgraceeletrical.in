"use client";

import React from "react";

export default function Clients() {
  const clients = [
    { name: "Hindustan Unilever", slug: "HUL" },
    { name: "TTK Prestige", slug: "PRESTIGE" },
    { name: "Nagarjuna Cement", slug: "NAGARJUNA" },
    { name: "Sterling Lab", slug: "STERLING" },
    { name: "MEC Systems", slug: "MEC" },
    { name: "PG Industries", slug: "PG IND" },
    { name: "Alubee Diecaster", slug: "ALUBEE" },
    { name: "Indicarb Ltd", slug: "INDICARB" },
    { name: "Total Environment", slug: "TOTAL ENV" },
    { name: "Delta CNC", slug: "DELTA" },
    { name: "Sree Lakshmi", slug: "LAKSHMI" },
    { name: "Allcargo Logistics", slug: "ALLCARGO" },
    { name: "Bio Plus", slug: "BIOPLUS" },
    { name: "KMS Moulding", slug: "KMS" },
    { name: "PKM Granites", slug: "PKM" },
  ];

  // Double list to create seamless infinite scroll effect
  const marqueeList = [...clients, ...clients];

  return (
    <section id="clients" className="py-20 border-b border-outline bg-surface scroll-mt-20 overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-[10px] font-sans font-bold tracking-widest text-primary uppercase block mb-2">
            Trusted Partners & Relationships
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-on-background uppercase tracking-tight">
            Trusted By Industry Leaders
          </h2>
          <div className="w-16 h-1 bg-primary mt-4 mb-6"></div>
          <p className="font-sans text-base text-secondary">
            We partner with major manufacturing corporations, construction agencies, and logistics leaders across Hosur and South India. Our client roster includes global FMCG brands, public infrastructure projects, and precision automotive companies.
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="relative w-full border-y border-outline bg-surface-container py-8 overflow-hidden select-none">
        <div className="flex w-max animate-marquee gap-8">
          {marqueeList.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center border border-outline bg-surface px-8 py-5 min-w-[200px] h-16 transition-all duration-300 group hover:border-primary hover:bg-primary/5 cursor-pointer tech-shadow"
            >
              <div className="flex flex-col items-center justify-center">
                <span className="font-display text-xs font-bold tracking-[0.15em] text-secondary group-hover:text-primary transition-colors text-center uppercase leading-none">
                  {client.slug}
                </span>
                <span className="text-[8px] font-sans font-bold tracking-wider text-secondary/60 group-hover:text-primary/70 transition-colors text-center uppercase mt-1 leading-none">
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Shadow overlays for smooth edge fading */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-surface to-transparent pointer-events-none z-10 hidden sm:block" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-surface to-transparent pointer-events-none z-10 hidden sm:block" />
      </div>
    </section>
  );
}
