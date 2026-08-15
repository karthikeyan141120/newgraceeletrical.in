"use client";

import React from "react";
import { FileSearch, Scissors, Layers, Rocket, ArrowRight } from "lucide-react";

export default function Process() {
  const steps = [
    {
      step: "01",
      title: "Design & Consultancy",
      icon: FileSearch,
      desc: "Initial engineering review, load calculation, and single-line diagram (SLD) finalization with the client.",
    },
    {
      step: "02",
      title: "Cutting & Fabrication",
      icon: Scissors,
      desc: "In-house shearing, turret press punching, press-brake bending, and structural TIG/MIG welding.",
    },
    {
      step: "03",
      title: "Assembly & Panel Building",
      icon: Layers,
      desc: "Busbar fabrication, switchgear integration, control wiring, and rigorous multi-stage quality control checks.",
    },
    {
      step: "04",
      title: "Site Installation & Testing",
      icon: Rocket,
      desc: "Crane-assisted erection of enclosures and structures, commissioning, safety checks, and formal handover.",
    },
  ];

  return (
    <section id="process" className="py-20 border-b border-outline bg-surface scroll-mt-20">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] font-sans font-bold tracking-widest text-primary uppercase block mb-2">
            Execution Strategy
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-on-background uppercase tracking-tight">
            Our Work Process
          </h2>
          <div className="w-16 h-1 bg-primary mt-4 mb-6"></div>
          <p className="font-sans text-base text-secondary">
            From design to commissioning, our work process ensures absolute compliance with international standards and strict local guidelines, offering a transparent timeline for industrial buyers.
          </p>
        </div>

        {/* Process Steps Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative flex flex-col items-center text-center p-6 bg-surface-container border border-outline hover:border-primary transition-all duration-300 tech-shadow group">
                {/* Step indicator top right */}
                <span className="absolute top-4 right-4 font-mono text-xs font-bold text-secondary/40 group-hover:text-primary/40 transition-colors">
                  {step.step}
                </span>

                {/* Icon Container */}
                <div className="w-14 h-14 bg-surface border border-outline flex items-center justify-center mb-6 group-hover:border-primary/20 group-hover:bg-primary/5 transition-all">
                  <Icon className="w-6 h-6 text-secondary group-hover:text-primary transition-colors" />
                </div>

                <h3 className="font-display text-base font-bold text-on-background uppercase mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-xs text-secondary leading-relaxed max-w-xs">
                  {step.desc}
                </p>

                {/* Arrow indicator (hidden on last step & desktop) */}
                {index < 3 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-6 -translate-y-1/2 z-10 text-outline-variant pointer-events-none">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
