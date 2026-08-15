"use client";

import React from "react";
import {
  Cpu,
  FileSpreadsheet,
  Award,
  Zap,
  Layers,
  Wrench,
  Grid,
  Construction,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Electrical Engineering",
      icon: Cpu,
      code: "01 // ENG",
      description:
        "High-performance design and engineering of custom power distribution architectures, single-line diagrams (SLD), and technical calculations for commercial and industrial facilities.",
    },
    {
      title: "A-Grade Contractor (TANGEDCO/CEIG)",
      icon: Award,
      code: "02 // GOVT",
      description:
        "Government-approved Class A electrical contracting services, handling license liaisoning, industrial wiring, high-voltage terminations, and safety certifications.",
    },
    {
      title: "Consulting Services",
      icon: FileSpreadsheet,
      code: "03 // CNSL",
      description:
        "Expert advisory services for power quality optimization, load calculations, power factor correction, harmonized system layouts, and grid connectivity planning.",
    },
    {
      title: "Panel Manufacturing",
      icon: Layers,
      code: "04 // MANF",
      description:
        "State-of-the-art custom manufacturing of MV panels, VCB panels, distribution boards, sub-main boards (SSB), motor control centers (MCC), and custom drive (VFD) enclosures.",
    },
    {
      title: "Siemens Channel Partner",
      icon: Zap,
      code: "05 // PART",
      description:
        "Authorized supplier of premium Siemens Switchgear products. We source, integrate, and test authentic components with native vendor support.",
    },
    {
      title: "Turnkey Projects",
      icon: Wrench,
      code: "06 // TRNK",
      description:
        "End-to-end electrical infrastructure projects from initial site survey and design to cabinet rigging, civil works, transformer installations, and testing.",
    },
    {
      title: "Cable Tray Manufacturing",
      icon: Grid,
      code: "07 // TRAY",
      description:
        "Manufactured in-house from sheet steel and structural sections. Includes perforated and ladder-type trays, hot-dip galvanized for indoor and outdoor installations.",
    },
    {
      title: "Structural Steel & Site Erection",
      icon: Construction,
      code: "08 // SITE",
      description:
        "Crane-assisted erection of heavy steel structures, gantries, mezzanine platforms, and industrial grating, delivered complete from design through execution.",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 border-b border-outline bg-surface-container-low scroll-mt-20"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] font-sans font-bold tracking-widest text-primary uppercase block mb-2">
            Scope of Operations
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-on-background uppercase tracking-tight">
            Our Core Strengths & Services
          </h2>
          <div className="w-16 h-1 bg-primary mt-4 mb-6"></div>
          <p className="font-sans text-base text-secondary">
            NGE delivers a unified suite of services covering engineering, manufacturing, and field execution. As licensed contractors and Siemens partners, we guarantee safety, speed, and strict compliance with local TANGEDCO/CEIG standards.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-surface border border-outline p-8 flex flex-col justify-between group hover:border-primary hover:bg-surface transition-all duration-300 tech-shadow"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-surface-container p-3 border border-outline group-hover:border-primary/20 group-hover:bg-primary/5 transition-colors">
                      <Icon className="w-6 h-6 text-secondary group-hover:text-primary transition-colors" />
                    </div>
                    <span className="font-mono text-[10px] font-bold text-secondary opacity-60">
                      {service.code}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-on-background mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs text-secondary leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
