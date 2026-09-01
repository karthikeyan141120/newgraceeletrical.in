"use client";

import React from "react";
import Image from "next/image";

interface FacilityItem {
  title: string;
  category: string;
  image: string;
  desc: string;
  gridSpan: string;
}

export default function Infrastructure() {
  const facilityItems: FacilityItem[] = [
    {
      title: "Muratec Turret Punch Press",
      category: "CNC Punching",
      image: "/images/slide6_7.jpg",
      desc: "High-speed precision turret punching for structural cabinet panels.",
      gridSpan: "md:col-span-2 md:row-span-2",
    },
    {
      title: "CNC Bending & Press Brake",
      category: "CNC Bending",
      image: "/images/slide6_8.jpg",
      desc: "Precise metal folding for high-integrity enclosure chassis construction.",
      gridSpan: "md:col-span-1 md:row-span-1",
    },
    {
      title: "CNC Shearing M/C",
      category: "Precision Cutting",
      image: "/images/slide6_9.jpg",
      desc: "Clean sheet metal cropping minimizing edge deformation.",
      gridSpan: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Mechanical Press Station",
      category: "Metal Stamping",
      image: "/images/slide4_2.jpg",
      desc: "High-capacity press for stamping panel knockouts and ventilation gills.",
      gridSpan: "md:col-span-1 md:row-span-2",
    },
    {
      title: "CO2 & MIG Welding Station",
      category: "Welding & Fabrication",
      image: "/images/slide5_4.jpg",
      desc: "Heavy-duty structural seam welding ensuring rigid enclosure sealing.",
      gridSpan: "md:col-span-2 md:row-span-1",
    },
    {
      title: "Pillar Drilling Machine",
      category: "Machining",
      image: "/images/slide4_3.jpg",
      desc: "Heavy-gauge drilling for structural frame connections and hinges.",
      gridSpan: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Arc Welding & Tooling Station",
      category: "Welding & Assembly",
      image: "/images/slide5_5.jpg",
      desc: "Precision manual arc welding for panel frame reinforcement.",
      gridSpan: "md:col-span-2 md:row-span-1",
    },
    {
      title: "Assembly & Testing Bay",
      category: "In-house QC",
      image: "/images/slide5_6.jpg",
      desc: "Final busbar fitment, mechanical alignment, and control wiring diagnostics area.",
      gridSpan: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Turret Punch Machine View",
      category: "Fabrication Facility",
      image: "/images/slide6_10.jpg",
      desc: "Secondary heavy-duty punching machinery optimized for high-volume layouts.",
      gridSpan: "md:col-span-1 md:row-span-1",
    },
    {
      title: "CNC Bending Work Station",
      category: "Enclosure Construction",
      image: "/images/slide6_11.jpg",
      desc: "Multi-axis press-brake bending station for complex cabinet angles.",
      gridSpan: "md:col-span-1 md:row-span-1",
    },
    {
      title: "CNC Shearing Station",
      category: "Precision Cutting",
      image: "/images/slide6_12.jpg",
      desc: "High-accuracy hydraulic shearing workstation for sheet steel blank preparation.",
      gridSpan: "md:col-span-1 md:row-span-1",
    },
  ];

  return (
    <section
      id="infrastructure"
      className="py-20 border-b border-outline bg-surface-container-low scroll-mt-20"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] font-sans font-bold tracking-widest text-primary uppercase block mb-2">
            In-House Manufacturing Assets
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-on-background uppercase tracking-tight">
            Precision-Built In-House
          </h2>
          <div className="w-16 h-1 bg-primary mt-4 mb-6"></div>
          <p className="font-sans text-base text-secondary">
            NGE operates a robust sheet metal fabrication facility. By conducting shearing, punching, bending, and structural welding in-house, we retain 100% control over dimensional precision, panel thickness, and safety integrity.
          </p>
        </div>

        {/* Two Column Layout: Slide 3 image checklist + Masonry Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Infrastructure Facility Showcase (Merge & Merge1) */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="bg-surface border border-outline p-6 tech-shadow space-y-6">
              <div>
                <span className="text-[10px] font-sans font-bold tracking-widest text-primary uppercase block mb-1">
                  In-House Infrastructure List
                </span>
                <h3 className="font-display text-sm font-bold text-on-background uppercase tracking-wide">
                  Facility Equipment Overview
                </h3>
              </div>

              {/* Merge Photo 1 */}
              <div className="space-y-2">
                <div className="aspect-[4/3] w-full overflow-hidden relative border border-outline bg-surface-container-high group">
                  <Image
                    src="/images/imageprocess/merge.jpeg"
                    alt="Muratec Vectrum 2048 48 Station Turret Punching Machine"
                    fill
                    className="object-cover contrast-110 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-on-background/90 text-surface text-[9px] font-sans font-bold tracking-wider px-2 py-0.5 uppercase max-w-[90%] truncate">
                    Muratec Vectrum 2048
                  </div>
                </div>
                <h4 className="font-display text-xs font-bold text-on-background uppercase tracking-wide leading-tight">
                  Muratec Vectrum 2048 48 Station Turret Punching Machine
                </h4>
              </div>

              {/* Merge Photo 2 */}
              <div className="space-y-2">
                <div className="aspect-[4/3] w-full overflow-hidden relative border border-outline bg-surface-container-high group">
                  <Image
                    src="/images/imageprocess/merge1.jpeg"
                    alt="Hydraulic Press Brake Machine"
                    fill
                    className="object-cover contrast-110 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-on-background/90 text-surface text-[9px] font-sans font-bold tracking-wider px-2 py-0.5 uppercase">
                    Hydraulic Press Brake
                  </div>
                </div>
                <h4 className="font-display text-xs font-bold text-on-background uppercase tracking-wide leading-tight">
                  Hydraulic Press Brake Machine
                </h4>
              </div>

              <p className="font-sans text-xs text-secondary leading-relaxed pt-2 border-t border-outline/50">
                NGE's certified in-house tooling line-up ensures that every enclosure fabrication, press-bend operation, and welding task is verified to strict tolerances in our Hosur facility.
              </p>
            </div>
          </div>

          {/* Right Column: Masonry Tiled Photo Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 auto-rows-[280px]">
            {facilityItems.map((item, index) => (
              <div
                key={index}
                className={`group bg-surface-container-high border border-outline relative overflow-hidden tech-shadow flex flex-col justify-end ${item.gridSpan}`}
              >
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 contrast-110"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-on-background/90 via-on-background/40 to-transparent z-10" />

                {/* Info Overlay */}
                <div className="relative z-20 p-6 space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="bg-primary text-surface text-[9px] font-sans font-bold tracking-widest px-2 py-0.5 uppercase inline-block">
                    {item.category}
                  </span>
                  <h3 className="font-display text-base font-bold text-surface uppercase">
                    {item.title}
                  </h3>
                  <p className="font-sans text-[11px] text-surface-dim opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed max-w-md">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
