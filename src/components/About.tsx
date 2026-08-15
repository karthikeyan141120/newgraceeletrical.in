"use client";

import React from "react";
import Image from "next/image";
import { Award, Briefcase, Users, Calendar } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Years Experience", value: "23+", icon: Calendar },
    { label: "Major Clients", value: "15+", icon: Users },
    { label: "Panel Product Lines", value: "7", icon: Award },
  ];

  const timeline = [
    {
      role: "Operations Director & Partner",
      period: "2015 - 2023",
      company: "MERCY ELECTRICAL",
      description:
        "Oversaw manufacturing of industrial distribution boards, leading custom switchgear testing operations, and managing CEIG compliance for A-Grade contracts.",
    },
    {
      role: "Senior Consultant & Engineer",
      period: "2008 - 2015",
      company: "KAVERY ELECTRICAL",
      description:
        "Designed and implemented high-voltage control panels, handled electrical consultancy for major manufacturing plants, and streamlined grid integrations.",
    },
    {
      role: "Senior Technical lead",
      period: "2001 - 2008",
      company: "EASWARY ELECTRICAL",
      description:
        "Foundational career in switchgear assembly, layout planning, drafting single-line diagrams, and conducting insulation diagnostics.",
    },
  ];

  return (
    <section id="about" className="py-20 border-b border-outline bg-surface scroll-mt-20">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] font-sans font-bold tracking-widest text-primary uppercase block mb-2">
            Company Leadership & Legacy
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-on-background uppercase tracking-tight">
            23 Years of Industrial Engineering Excellence
          </h2>
          <div className="w-16 h-1 bg-primary mt-4 mb-6"></div>
          <p className="font-sans text-base text-secondary">
            New Grace Electrical (NGE) was founded exclusively for high-reliability Panel Board Manufacturing. Under the leadership of Mr. A. Thangavel, we combine robust design methodologies with state-of-the-art facilities to deliver custom switchgear and panels built to handle extreme industrial loads.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Founder Profile Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-surface-container border border-outline p-6 tech-shadow flex flex-col gap-6">
              {/* Profile Image Frame */}
              <div className="aspect-[4/3] w-full overflow-hidden border border-outline bg-surface-container-high relative group">
                <Image
                  src="/images/slide8_13.jpg"
                  alt="A. Thangavel, Proprietor"
                  fill
                  className="object-cover filter grayscale transition-all duration-500 group-hover:grayscale-0"
                />
                <div className="absolute bottom-0 left-0 w-full bg-on-background/90 text-surface p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="font-sans text-[10px] font-bold tracking-[0.25em] block mb-1 text-primary">
                    EST. 2024
                  </span>
                  <span className="font-display text-xs font-bold uppercase">
                    NEW GRACE ELECTRICAL
                  </span>
                </div>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-on-background mb-1">
                  Mr. A. Thangavel
                </h3>
                <div className="font-sans text-[10px] font-bold text-primary tracking-widest uppercase mb-4">
                  Proprietor & Chief Engineer
                </div>
                <p className="font-sans text-xs text-secondary leading-relaxed border-l-4 border-primary pl-4 py-1 bg-surface-container-low">
                  "Our commitment is total customer satisfaction, absolute reliability, and safety compliance. We build panels that power India's industrial growth with precision."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Stats & Professional Tenure Timeline */}
          <div className="lg:col-span-7 space-y-12">
            {/* Impact Metrics */}
            <div>
              <h4 className="font-display text-sm font-bold text-on-background tracking-wider uppercase mb-6 border-b border-outline pb-2 flex items-center gap-2">
                <Award className="w-4 h-4 text-primary" /> Key Impact Metrics
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className={`p-6 border ${
                      i === 0
                        ? "bg-on-background text-surface border-transparent border-l-4 border-l-primary"
                        : "bg-surface-container-lowest border-outline hover:border-on-background transition-colors"
                    }`}
                  >
                    <div className="font-display text-3xl font-bold mb-2">{stat.value}</div>
                    <div
                      className={`font-sans text-[10px] font-bold tracking-wider uppercase ${
                        i === 0 ? "text-primary" : "text-secondary"
                      }`}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Timeline */}
            <div>
              <h4 className="font-display text-sm font-bold text-on-background tracking-wider uppercase mb-8 border-b border-outline pb-2 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-primary" /> Professional Tenure & Heritage
              </h4>
              <div className="relative pl-4 space-y-8 border-l border-outline-variant">
                {timeline.map((item, i) => (
                  <div key={i} className="relative group">
                    {/* Timeline Node dot */}
                    <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 bg-outline group-hover:bg-primary border-4 border-surface z-10 transition-colors" />

                    <div className="bg-surface-container-lowest border border-outline p-6 hover:shadow-[4px_4px_0px_rgba(26,28,26,0.1)] transition-all">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-2">
                        <h5 className="font-display text-base font-bold text-on-background">
                          {item.role}
                        </h5>
                        <span className="font-mono text-[11px] font-bold bg-surface-container px-3 py-1 text-secondary uppercase tracking-wider">
                          {item.period}
                        </span>
                      </div>
                      <div className="font-sans text-[10px] font-bold text-primary tracking-widest uppercase mb-3">
                        {item.company}
                      </div>
                      <p className="font-sans text-xs text-secondary leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
