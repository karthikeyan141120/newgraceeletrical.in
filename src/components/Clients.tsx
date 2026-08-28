"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Factory, ShieldCheck, Cpu, Activity, Database, LayoutGrid } from "lucide-react";

interface ClientRecord {
  id: string;
  name: string;
  slug: string;
  category: "FMCG & Pharma" | "Manufacturing" | "Heavy Industry & Infra";
  project: string;
  voltage: string;
  capacity: string;
  status: "COMMISSIONED" | "OPERATIONAL" | "OPTIMIZED";
  frequency: string;
}

export default function Clients() {
  const [selectedId, setSelectedId] = useState<string>("NGE-01");
  const [activeTab, setActiveTab] = useState<string>("All");

  const clients: ClientRecord[] = [
    { id: "NGE-01", name: "Hindustan Unilever", slug: "HUL", category: "FMCG & Pharma", project: "Turnkey Power Panels", voltage: "11 kV", capacity: "3.2 MW", status: "COMMISSIONED", frequency: "50 Hz" },
    { id: "NGE-02", name: "TTK Prestige", slug: "PRESTIGE", category: "Manufacturing", project: "Motor Control Centers", voltage: "415 V", capacity: "1.8 MW", status: "OPERATIONAL", frequency: "50 Hz" },
    { id: "NGE-03", name: "Nagarjuna Cement", slug: "NAGARJUNA", category: "Heavy Industry & Infra", project: "High-Voltage VCB Panels", voltage: "33 kV", capacity: "8.5 MW", status: "COMMISSIONED", frequency: "50 Hz" },
    { id: "NGE-04", name: "Sterling Lab", slug: "STERLING", category: "FMCG & Pharma", project: "Cleanroom Control Boards", voltage: "415 V", capacity: "500 kW", status: "OPTIMIZED", frequency: "50 Hz" },
    { id: "NGE-05", name: "MEC Systems", slug: "MEC", category: "Manufacturing", project: "Main Distribution Boards", voltage: "415 V", capacity: "1.5 MW", status: "OPERATIONAL", frequency: "50 Hz" },
    { id: "NGE-06", name: "PG Industries", slug: "PG IND", category: "Manufacturing", project: "Capacitor Banks & APFC", voltage: "415 V", capacity: "1.2 MVAR", status: "OPTIMIZED", frequency: "50 Hz" },
    { id: "NGE-07", name: "Alubee Diecaster", slug: "ALUBEE", category: "Manufacturing", project: "Machinery Distribution Panels", voltage: "415 V", capacity: "2.2 MW", status: "OPERATIONAL", frequency: "50 Hz" },
    { id: "NGE-08", name: "Indicarb Ltd", slug: "INDICARB", category: "Heavy Industry & Infra", project: "Furnace Automation Control", voltage: "415 V", capacity: "3.0 MW", status: "COMMISSIONED", frequency: "50 Hz" },
    { id: "NGE-09", name: "Total Environment", slug: "Heavy Industry & Infra", category: "Heavy Industry & Infra", project: "Residential Main Switchboards", voltage: "11 kV", capacity: "4.5 MW", status: "COMMISSIONED", frequency: "50 Hz" },
    { id: "NGE-10", name: "Delta CNC", slug: "DELTA", category: "Manufacturing", project: "PLC Automation Cabinets", voltage: "230 V", capacity: "150 kW", status: "OPERATIONAL", frequency: "50 Hz" },
    { id: "NGE-11", name: "Sree Lakshmi", slug: "LAKSHMI", category: "Manufacturing", project: "Power Distribution Boards", voltage: "415 V", capacity: "800 kW", status: "OPERATIONAL", frequency: "50 Hz" },
    { id: "NGE-12", name: "Allcargo Logistics", slug: "ALLCARGO", category: "Heavy Industry & Infra", project: "Warehouse Lighting Control", voltage: "415 V", capacity: "400 kW", status: "OPTIMIZED", frequency: "50 Hz" },
    { id: "NGE-13", name: "Bio Plus", slug: "BIOPLUS", category: "FMCG & Pharma", project: "Instrumentation Enclosures", voltage: "230 V", capacity: "80 kW", status: "OPTIMIZED", frequency: "50 Hz" },
    { id: "NGE-14", name: "KMS Moulding", slug: "KMS", category: "Manufacturing", project: "Industrial MCC Assemblies", voltage: "415 V", capacity: "1.1 MW", status: "OPERATIONAL", frequency: "50 Hz" },
    { id: "NGE-15", name: "PKM Granites", slug: "PKM", category: "Heavy Industry & Infra", project: "Crusher Control Panels", voltage: "415 V", capacity: "2.5 MW", status: "COMMISSIONED", frequency: "50 Hz" },
  ];

  const categories = ["All", "FMCG & Pharma", "Manufacturing", "Heavy Industry & Infra"];

  const filteredClients = activeTab === "All"
    ? clients
    : clients.filter((c) => c.category === activeTab);

  // Automatically select first record of filtered list if current selection is excluded
  useEffect(() => {
    const isSelectedVisible = filteredClients.some((c) => c.id === selectedId);
    if (!isSelectedVisible && filteredClients.length > 0) {
      setSelectedId(filteredClients[0].id);
    }
  }, [activeTab, filteredClients, selectedId]);

  const activeClient = clients.find((c) => c.id === selectedId) || clients[0];

  return (
    <section id="clients" className="py-20 border-b border-outline bg-surface-container-low scroll-mt-20">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-[10px] font-sans font-bold tracking-widest text-primary uppercase block mb-2">
              Corporate Associations & Telemetry
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-on-background uppercase tracking-tight">
              Trusted By Industry Leaders
            </h2>
            <div className="w-16 h-1 bg-primary mt-4 mb-6"></div>
            <p className="font-sans text-xs text-secondary leading-relaxed">
              We design, test, and manufacture switchgear panels for leading enterprise partners across South India. Interact with the SCADA-inspired system console below to view technical project specs and parameters.
            </p>
          </div>

          {/* Industry Type Selector */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-3 py-1.5 border text-[10px] font-sans font-bold uppercase tracking-wider transition-all duration-150 cursor-pointer ${
                  activeTab === cat
                    ? "bg-primary border-primary text-surface"
                    : "bg-surface border-outline text-secondary hover:border-on-background hover:text-on-background"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* SCADA Console Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Systems Datatable (Telemetry Matrix) */}
          <div className="lg:col-span-7 bg-surface border border-outline tech-shadow overflow-hidden flex flex-col justify-between">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-outline bg-surface-container/60 font-mono text-[9px] font-bold text-secondary uppercase tracking-wider">
                    <th className="py-4 px-4 text-center w-16 border-r border-outline">SYSTEM ID</th>
                    <th className="py-4 px-4">PARTNER CORPORATION</th>
                    <th className="py-4 px-4 hidden sm:table-cell">SECTOR</th>
                    <th className="py-4 px-4 text-right border-l border-outline w-32">VOLTAGE CLASS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline/30 font-sans text-xs">
                  {filteredClients.map((client) => {
                    const isSelected = client.id === selectedId;
                    return (
                      <tr
                        key={client.id}
                        onMouseEnter={() => setSelectedId(client.id)}
                        onClick={() => setSelectedId(client.id)}
                        className={`transition-colors duration-150 cursor-pointer group ${
                          isSelected
                            ? "bg-primary/5 text-primary font-bold"
                            : "hover:bg-surface-container/30 text-on-background"
                        }`}
                      >
                        <td className="py-3.5 px-4 text-center font-mono text-[10px] border-r border-outline text-secondary group-hover:text-primary">
                          {client.id}
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[10px] font-bold bg-surface-container px-1.5 py-0.5 border border-outline group-hover:border-primary/20">
                              {client.slug}
                            </span>
                            <span className="truncate group-hover:text-primary transition-colors">
                              {client.name}
                            </span>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 hidden sm:table-cell text-[10px] text-secondary">
                          {client.category}
                        </td>
                        <td className="py-3.5 px-4 text-right border-l border-outline font-mono font-bold text-[10px]">
                          {client.voltage}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Bottom Status bar */}
            <div className="bg-surface-container/50 border-t border-outline px-4 py-3 flex items-center justify-between font-mono text-[9px] text-secondary">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-ping inline-block" />
                SYSTEMS COUNT: {filteredClients.length} UNITS
              </span>
              <span className="uppercase">STATUS: SYSTEM OK // 50 HZ</span>
            </div>
          </div>

          {/* Right Column: Spec Inspector Terminal */}
          <div className="lg:col-span-5 bg-on-background text-surface border border-on-background p-6 tech-shadow flex flex-col justify-between relative min-h-[350px]">
            {/* Grid Pattern Backdrop */}
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(var(--color-surface) 1px, transparent 1px)",
                backgroundSize: "16px 16px",
              }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeClient.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="relative z-10 flex flex-col justify-between h-full space-y-6"
              >
                {/* Inspector Header */}
                <div className="flex justify-between items-start border-b border-surface/20 pb-4">
                  <div>
                    <span className="font-mono text-[9px] font-bold text-primary tracking-widest uppercase block mb-1">
                      ACTIVE SPEC INSPECTOR
                    </span>
                    <h3 className="font-display text-lg font-black tracking-wide text-surface uppercase">
                      {activeClient.name}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] font-bold border border-primary/40 bg-primary/10 text-primary px-2 py-0.5 rounded-sm">
                    {activeClient.id}
                  </span>
                </div>

                {/* Technical Specifications Matrix */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-surface/5 border border-surface/10 p-3">
                    <span className="font-mono text-[8px] text-surface/50 block uppercase tracking-wider">
                      SYSTEM VOLTAGE
                    </span>
                    <span className="font-mono text-sm font-black text-primary mt-1 block">
                      {activeClient.voltage}
                    </span>
                  </div>
                  <div className="bg-surface/5 border border-surface/10 p-3">
                    <span className="font-mono text-[8px] text-surface/50 block uppercase tracking-wider">
                      LOAD CAPACITY
                    </span>
                    <span className="font-mono text-sm font-black text-primary mt-1 block">
                      {activeClient.capacity}
                    </span>
                  </div>
                  <div className="bg-surface/5 border border-surface/10 p-3">
                    <span className="font-mono text-[8px] text-surface/50 block uppercase tracking-wider">
                      FREQUENCY
                    </span>
                    <span className="font-mono text-xs font-bold text-surface mt-1 block">
                      {activeClient.frequency}
                    </span>
                  </div>
                  <div className="bg-surface/5 border border-surface/10 p-3">
                    <span className="font-mono text-[8px] text-surface/50 block uppercase tracking-wider">
                      OPERATION STATUS
                    </span>
                    <span className="font-mono text-xs font-bold text-emerald-400 mt-1 block flex items-center gap-1">
                      <span className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse" />
                      {activeClient.status}
                    </span>
                  </div>
                </div>

                {/* Subsystem description */}
                <div className="bg-surface/5 border border-surface/10 p-4 rounded-sm flex items-start gap-3">
                  <Cpu className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-[8px] text-surface/50 block uppercase tracking-wider">
                      DEPLOYED HARDWARE SYSTEM
                    </span>
                    <p className="font-display text-xs font-bold text-surface uppercase mt-1 leading-snug">
                      {activeClient.project}
                    </p>
                  </div>
                </div>

                {/* Blueprint Line Graphic */}
                <div className="border-t border-surface/10 pt-4 flex flex-col justify-end">
                  <svg className="w-full h-8 stroke-primary/30 stroke-[1.5] fill-none">
                    <path d="M 0,16 L 80,16 L 100,5 L 200,5 L 220,27 L 320,27 L 340,16 L 500,16" />
                    <motion.circle
                      cx="0"
                      cy="16"
                      r="3"
                      fill="var(--color-primary)"
                      animate={{
                        cx: [0, 80, 100, 200, 220, 320, 340, 400],
                        cy: [16, 16, 5, 5, 27, 27, 16, 16]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </svg>
                  <div className="flex justify-between items-center font-mono text-[8px] text-surface/40 mt-1 uppercase">
                    <span>GRID CAPABILITY</span>
                    <span>TANGEDCO COMPLIANT</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
