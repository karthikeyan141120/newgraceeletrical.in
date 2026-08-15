"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Distribution Panel Commissioning",
      category: "Commissioned",
      desc: "Custom low-tension power distribution board commissioned successfully at a major manufacturing plant.",
      image: "/images/slide8_13.jpg",
    },
    {
      title: "Switchgear Panel Handover",
      category: "Panel Handover",
      desc: "Erected, tested, and handed over high-voltage control cabinets to the client's engineering team.",
      image: "/images/slide8_14.jpg",
    },
    {
      title: "Cable Tray Bulk Dispatch",
      category: "Material Dispatch",
      desc: "Bulk shipment of hot-dip galvanized ladder-type cable trays dispatched for outdoor industrial runs.",
      image: "/images/slide8_15.jpg",
    },
  ];

  return (
    <section id="projects" className="py-20 border-b border-outline bg-surface-container-low scroll-mt-20">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] font-sans font-bold tracking-widest text-primary uppercase block mb-2">
            Proven Track Record
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-on-background uppercase tracking-tight">
            Completed Projects & Dispatches
          </h2>
          <div className="w-16 h-1 bg-primary mt-4 mb-6"></div>
          <p className="font-sans text-base text-secondary">
            NGE executes electrical panel deliveries and structural installations continuously. Below are snapshot updates of recent commissionings, handovers, and bulk dispatches from our Hosur facility.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-surface border border-outline overflow-hidden flex flex-col justify-between group hover:border-on-background transition-colors tech-shadow"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] w-full overflow-hidden relative border-b border-outline bg-surface-container-high">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 contrast-110"
                />
                <div className="absolute top-3 left-3 bg-primary text-surface text-[9px] font-sans font-bold tracking-wider px-2.5 py-1 uppercase border border-outline/20">
                  {project.category}
                </div>
              </div>

              {/* Copy */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                  <h3 className="font-display text-sm font-bold text-on-background uppercase tracking-wide group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="font-sans text-xs text-secondary leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
