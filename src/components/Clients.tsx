"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Building, Factory, Layers } from "lucide-react";

interface ClientData {
  name: string;
  slug: string;
  category: "FMCG & Pharma" | "Manufacturing" | "Heavy Industry & Logistics";
  project: string;
}

export default function Clients() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    { id: "All", name: "All Industries", icon: Layers },
    { id: "FMCG & Pharma", name: "FMCG & Pharma", icon: Building },
    { id: "Manufacturing", name: "Manufacturing", icon: Factory },
    { id: "Heavy Industry & Logistics", name: "Heavy Industry & Infra", icon: Briefcase },
  ];

  const clients: ClientData[] = [
    { name: "Hindustan Unilever", slug: "HUL", category: "FMCG & Pharma", project: "Turnkey Power Panels" },
    { name: "TTK Prestige", slug: "PRESTIGE", category: "Manufacturing", project: "Motor Control Centers" },
    { name: "Nagarjuna Cement", slug: "NAGARJUNA", category: "Heavy Industry & Logistics", project: "High-Voltage VCB Panels" },
    { name: "Sterling Lab", slug: "STERLING", category: "FMCG & Pharma", project: "Cleanroom Control Boards" },
    { name: "MEC Systems", slug: "MEC", category: "Manufacturing", project: "Main Distribution Switchboards" },
    { name: "PG Industries", slug: "PG IND", category: "Manufacturing", project: "Capacitor Banks & APFC" },
    { name: "Alubee Diecaster", slug: "ALUBEE", category: "Manufacturing", project: "Heavy Machinery Distribution" },
    { name: "Indicarb Ltd", slug: "INDICARB", category: "Heavy Industry & Logistics", project: "Furnace Automation Panels" },
    { name: "Total Environment", slug: "TOTAL ENV", category: "Heavy Industry & Logistics", project: "Residential Main Panels" },
    { name: "Delta CNC", slug: "DELTA", category: "Manufacturing", project: "PLC Control Enclosures" },
    { name: "Sree Lakshmi", slug: "LAKSHMI", category: "Manufacturing", project: "Power Distribution Boards" },
    { name: "Allcargo Logistics", slug: "ALLCARGO", category: "Heavy Industry & Logistics", project: "Warehouse Lighting Control" },
    { name: "Bio Plus", slug: "BIOPLUS", category: "FMCG & Pharma", project: "Instrumentation Cabinets" },
    { name: "KMS Moulding", slug: "KMS", category: "Manufacturing", project: "Industrial MCC Panels" },
    { name: "PKM Granites", slug: "PKM", category: "Heavy Industry & Logistics", project: "Crusher Control Panels" },
  ];

  const filteredClients = selectedCategory === "All"
    ? clients
    : clients.filter((client) => client.category === selectedCategory);

  return (
    <section id="clients" className="py-20 border-b border-outline bg-surface scroll-mt-20 overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-[10px] font-sans font-bold tracking-widest text-primary uppercase block mb-2">
            Trusted Partners & Relationships
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-on-background uppercase tracking-tight">
            Trusted By Industry Leaders
          </h2>
          <div className="w-16 h-1 bg-primary mt-4 mb-6"></div>
          <p className="font-sans text-base text-secondary">
            We partner with major manufacturing corporations, construction agencies, and logistics leaders across Hosur and South India. Click the categories below to explore our corporate associations and the specific panel board systems we engineered for them.
          </p>
        </div>

        {/* Industrial Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-10 border-b border-outline pb-6">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-3 border font-sans text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-on-background border-on-background text-surface tech-shadow"
                    : "bg-surface-container border-outline text-secondary hover:border-on-background hover:text-on-background"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Dynamic Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredClients.map((client) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={client.name}
                className="group relative bg-surface-container-low border border-outline hover:border-primary p-6 h-36 flex flex-col justify-between overflow-hidden tech-shadow hover:bg-surface transition-all duration-300 select-none cursor-pointer"
              >
                {/* Visual Accent Corner Bracket */}
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-outline-variant group-hover:border-primary transition-colors" />
                
                <div>
                  <span className="font-display text-base font-black tracking-widest text-secondary group-hover:text-primary transition-colors block uppercase leading-none mb-1">
                    {client.slug}
                  </span>
                  <span className="text-xs font-sans font-bold text-on-background leading-tight block">
                    {client.name}
                  </span>
                </div>

                <div className="border-t border-outline/30 pt-3 flex flex-col justify-end">
                  <span className="text-[9px] font-sans font-bold uppercase tracking-wider text-secondary/60 block">
                    {client.category}
                  </span>
                  
                  {/* Slide Up / Overlay project description */}
                  <div className="absolute inset-x-0 bottom-0 bg-primary px-6 py-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex flex-col justify-center">
                    <span className="text-[9px] font-sans font-bold text-white/70 uppercase tracking-widest mb-1">
                      System Delivered
                    </span>
                    <span className="text-[11px] font-display font-bold text-surface uppercase leading-snug">
                      {client.project}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
