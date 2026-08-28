"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, ShieldCheck, Zap, Activity, Radio, AlertCircle } from "lucide-react";

interface SubstationNode {
  id: string;
  name: string;
  slug: string;
  category: "FMCG & Pharma" | "Manufacturing" | "Heavy Industry & Infra";
  project: string;
  voltage: string;
  load: string;
  efficiency: string;
  thermal: string;
  status: "ONLINE // SECURE" | "ACTIVE // UNRESTRICTED" | "OPTIMIZED // REGULATED";
}

export default function Clients() {
  const [selectedId, setSelectedId] = useState<string>("NODE-01");

  const nodes: SubstationNode[] = [
    { id: "NODE-01", name: "Hindustan Unilever", slug: "HUL", category: "FMCG & Pharma", project: "Turnkey Power Panels", voltage: "11 kV // HT", load: "3.2 MW", efficiency: "98.8%", thermal: "34°C", status: "ONLINE // SECURE" },
    { id: "NODE-02", name: "TTK Prestige", slug: "PRESTIGE", category: "Manufacturing", project: "Motor Control Centers", voltage: "415 V // LT", load: "1.8 MW", efficiency: "97.4%", thermal: "38°C", status: "ACTIVE // UNRESTRICTED" },
    { id: "NODE-03", name: "Nagarjuna Cement", slug: "NAGARJUNA", category: "Heavy Industry & Infra", project: "High-Voltage VCB Panels", voltage: "33 kV // HT", load: "8.5 MW", efficiency: "99.1%", thermal: "31°C", status: "ONLINE // SECURE" },
    { id: "NODE-04", name: "Sterling Lab", slug: "STERLING", category: "FMCG & Pharma", project: "Cleanroom Control Boards", voltage: "415 V // LT", load: "500 kW", efficiency: "98.2%", thermal: "29°C", status: "OPTIMIZED // REGULATED" },
    { id: "NODE-05", name: "MEC Systems", slug: "MEC", category: "Manufacturing", project: "Main Distribution Switchboards", voltage: "415 V // LT", load: "1.5 MW", efficiency: "97.9%", thermal: "36°C", status: "ACTIVE // UNRESTRICTED" },
    { id: "NODE-06", name: "PG Industries", slug: "PG IND", category: "Manufacturing", project: "Capacitor Banks & APFC", voltage: "415 V // LT", load: "1.2 MVAR", efficiency: "99.0%", thermal: "32°C", status: "OPTIMIZED // REGULATED" },
    { id: "NODE-07", name: "Alubee Diecaster", slug: "ALUBEE", category: "Manufacturing", project: "Machinery Distribution Boards", voltage: "415 V // LT", load: "2.2 MW", efficiency: "98.0%", thermal: "41°C", status: "ACTIVE // UNRESTRICTED" },
    { id: "NODE-08", name: "Indicarb Ltd", slug: "INDICARB", category: "Heavy Industry & Infra", project: "Furnace Automation Panels", voltage: "415 V // LT", load: "3.0 MW", efficiency: "97.6%", thermal: "44°C", status: "ONLINE // SECURE" },
    { id: "NODE-09", name: "Total Environment", slug: "TOTAL ENV", category: "Heavy Industry & Infra", project: "Residential Main Switchboards", voltage: "11 kV // HT", load: "4.5 MW", efficiency: "99.3%", thermal: "33°C", status: "ONLINE // SECURE" },
    { id: "NODE-10", name: "Delta CNC", slug: "DELTA", category: "Manufacturing", project: "PLC Control Cabinets", voltage: "230 V // LT", load: "150 kW", efficiency: "96.8%", thermal: "35°C", status: "ACTIVE // UNRESTRICTED" },
    { id: "NODE-11", name: "Sree Lakshmi", slug: "LAKSHMI", category: "Manufacturing", project: "Power Distribution Switchboards", voltage: "415 V // LT", load: "800 kW", efficiency: "97.2%", thermal: "37°C", status: "ACTIVE // UNRESTRICTED" },
    { id: "NODE-12", name: "Allcargo Logistics", slug: "ALLCARGO", category: "Heavy Industry & Infra", project: "Warehouse Lighting Control", voltage: "415 V // LT", load: "400 kW", efficiency: "98.4%", thermal: "28°C", status: "OPTIMIZED // REGULATED" },
    { id: "NODE-13", name: "Bio Plus", slug: "BIOPLUS", category: "FMCG & Pharma", project: "Instrumentation Cabinets", voltage: "230 V // LT", load: "80 kW", efficiency: "97.5%", thermal: "27°C", status: "OPTIMIZED // REGULATED" },
    { id: "NODE-14", name: "KMS Moulding", slug: "KMS", category: "Manufacturing", project: "Industrial MCC Assemblies", voltage: "415 V // LT", load: "1.1 MW", efficiency: "98.1%", thermal: "39°C", status: "ACTIVE // UNRESTRICTED" },
    { id: "NODE-15", name: "PKM Granites", slug: "PKM", category: "Heavy Industry & Infra", project: "Crusher Control Panels", voltage: "415 V // LT", load: "2.5 MW", efficiency: "98.5%", thermal: "42°C", status: "ONLINE // SECURE" },
  ];

  const activeNode = nodes.find((n) => n.id === selectedId) || nodes[0];

  return (
    <section id="clients" className="py-24 border-b border-[#1A1D21] bg-[#080A0C] text-[#E2E8F0] relative overflow-hidden scroll-mt-20">
      {/* Sci-Fi Grid overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #6d7a6e 1px, transparent 1px),
            linear-gradient(to bottom, #6d7a6e 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px"
        }}
      />
      
      {/* Glowing blur effects */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full filter blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#e5a93b]/5 rounded-full filter blur-[100px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Telemetry Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping shadow-[0_0_8px_#10b981]" />
              <span className="font-mono text-[9px] tracking-widest text-primary uppercase font-bold">
                GRID SYSTEM FEEDBACK // LIVE STATUS OK
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
              Trusted By Industry Leaders
            </h2>
            <div className="w-16 h-1 bg-primary mt-4 mb-6"></div>
            <p className="font-sans text-xs text-secondary max-w-xl leading-relaxed">
              New Grace Electrical manufactures customized, heavy-duty switchgears and panels for multinational brands and heavy infrastructure projects. Select a node to query live parameters.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-6 font-mono text-[9px] text-[#bdcabc]/50 border border-white/5 bg-white/[0.01] px-4 py-3 rounded-sm">
            <div>
              <span className="block text-[#e5a93b] font-bold">GRID FREQ</span>
              <span className="text-white font-bold">50.02 HZ</span>
            </div>
            <div className="border-l border-white/10 pl-6">
              <span className="block text-primary font-bold">ACTIVE NODES</span>
              <span className="text-white font-bold">{nodes.length} SECURE</span>
            </div>
          </div>
        </div>

        {/* Interactive SCADA Substation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Panel: Circuit Node Cards */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {nodes.map((node) => {
              const isSelected = node.id === selectedId;
              return (
                <div
                  key={node.id}
                  onMouseEnter={() => setSelectedId(node.id)}
                  onClick={() => setSelectedId(node.id)}
                  className={`relative p-4 border transition-all duration-300 flex flex-col justify-between h-28 cursor-pointer group rounded-sm select-none ${
                    isSelected
                      ? "bg-primary/10 border-primary shadow-[0_0_15px_rgba(0,106,56,0.15)] text-white"
                      : "bg-white/[0.01] border-white/10 hover:border-white/30 text-[#bdcabc]"
                  }`}
                >
                  {/* Status Indicator Led */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[8px] font-bold tracking-wider text-secondary/60 group-hover:text-primary transition-colors">
                      {node.id}
                    </span>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      node.status.includes("ONLINE")
                        ? "bg-emerald-500 shadow-[0_0_6px_#10b981]"
                        : node.status.includes("ACTIVE")
                        ? "bg-cyan-400 shadow-[0_0_6px_#22d3ee]"
                        : "bg-amber-400 shadow-[0_0_6px_#facc15]"
                    }`} />
                  </div>

                  <div>
                    <span className="font-display text-sm font-black tracking-widest block uppercase truncate leading-none mb-1 group-hover:text-white">
                      {node.slug}
                    </span>
                    <span className="text-[10px] font-sans font-bold block truncate opacity-70 group-hover:opacity-100">
                      {node.name}
                    </span>
                  </div>

                  {/* Corner Accent Brackets */}
                  <div className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r transition-colors ${
                    isSelected ? "border-primary" : "border-transparent group-hover:border-white/30"
                  }`} />
                </div>
              );
            })}
          </div>

          {/* Right Panel: Telemetry Substation Inspector */}
          <div className="lg:col-span-4 bg-[#0B0D0F]/90 border border-white/10 p-6 flex flex-col justify-between relative rounded-sm min-h-[380px] shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            
            {/* Blueprint Grid Overlay */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(var(--color-surface) 1px, transparent 1px)",
                backgroundSize: "12px 12px",
              }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="relative z-10 flex flex-col justify-between h-full space-y-6"
              >
                {/* Header */}
                <div className="border-b border-white/10 pb-4">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Radio className="w-3.5 h-3.5 text-primary animate-pulse" />
                    <span className="font-mono text-[9px] text-[#bdcabc]/50 tracking-widest uppercase">
                      GRID DIAGNOSTICS NODE // {activeNode.id}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-black tracking-wide text-white uppercase truncate">
                    {activeNode.name}
                  </h3>
                  <span className="font-mono text-[8px] text-[#bdcabc]/40 block uppercase tracking-wider mt-1">
                    Industry Class: {activeNode.category}
                  </span>
                </div>

                {/* Core Parameters Monitor */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/[0.02] border border-white/5 p-3 rounded-sm">
                    <span className="font-mono text-[8px] text-[#bdcabc]/40 block uppercase tracking-wider">
                      LOAD BANDWIDTH
                    </span>
                    <span className="font-mono text-base font-black text-primary mt-1 block">
                      {activeNode.load}
                    </span>
                  </div>
                  <div className="bg-white/[0.02] border border-white/5 p-3 rounded-sm">
                    <span className="font-mono text-[8px] text-[#bdcabc]/40 block uppercase tracking-wider">
                      SYSTEM VOLTAGE
                    </span>
                    <span className="font-mono text-base font-black text-[#e5a93b] mt-1 block">
                      {activeNode.voltage}
                    </span>
                  </div>
                  <div className="bg-white/[0.02] border border-white/5 p-3 rounded-sm">
                    <span className="font-mono text-[8px] text-[#bdcabc]/40 block uppercase tracking-wider">
                      EFFICIENCY INDEX
                    </span>
                    <span className="font-mono text-xs font-bold text-emerald-400 mt-1 block">
                      {activeNode.efficiency}
                    </span>
                  </div>
                  <div className="bg-white/[0.02] border border-white/5 p-3 rounded-sm">
                    <span className="font-mono text-[8px] text-[#bdcabc]/40 block uppercase tracking-wider">
                      THERMAL TELEMETRY
                    </span>
                    <span className="font-mono text-xs font-bold text-white mt-1 block">
                      {activeNode.thermal}
                    </span>
                  </div>
                </div>

                {/* Active Subsystem */}
                <div className="bg-white/[0.02] border border-white/5 p-4 rounded-sm">
                  <span className="font-mono text-[8px] text-[#bdcabc]/40 block uppercase tracking-wider mb-1">
                    INTEGRATED SYSTEM HARDWARE
                  </span>
                  <div className="flex gap-2.5 items-start">
                    <Cpu className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="font-display text-xs font-bold text-white uppercase leading-snug">
                      {activeNode.project}
                    </span>
                  </div>
                </div>

                {/* Animated Telemetry Path Diagram */}
                <div className="border-t border-white/10 pt-4">
                  <svg className="w-full h-8 stroke-primary/30 stroke-[1.5] fill-none">
                    <path d="M 0,16 L 60,16 L 80,5 L 180,5 L 200,27 L 280,27 L 300,16 L 400,16" />
                    <motion.circle
                      cx="0"
                      cy="16"
                      r="3.5"
                      fill="var(--color-primary)"
                      className="shadow-[0_0_8px_var(--color-primary)]"
                      animate={{
                        cx: [0, 60, 80, 180, 200, 280, 300, 400],
                        cy: [16, 16, 5, 5, 27, 27, 16, 16]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </svg>
                  <div className="flex justify-between items-center font-mono text-[8px] text-[#bdcabc]/30 mt-1 uppercase">
                    <span className="flex items-center gap-1">
                      <AlertCircle className="w-2.5 h-2.5 text-[#e5a93b]" />
                      NODE STATE: {activeNode.status}
                    </span>
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
