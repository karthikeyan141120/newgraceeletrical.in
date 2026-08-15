"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ChevronRight, Shield } from "lucide-react";

interface Product {
  id: string;
  name: string;
  shortDesc: string;
  specs: string[];
  features: string[];
  rating: string;
  chassis: string;
  voltage: string;
  image: string;
}

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: "mv-panel",
      name: "MV Panel",
      shortDesc: "Medium Voltage Panel boards for utility routing.",
      voltage: "11 kV to 33 kV",
      chassis: "NEMA 3R / IP55",
      rating: "Up to 3150A",
      image: "/images/slide4_panel_row.png",
      specs: [
        "Rated Voltage: 11 kV - 33 kV",
        "Short Time Current: 26.3 kA for 3 sec",
        "Busbar Material: Electrolytic Grade Copper / Aluminum",
        "Degree of Protection: IP54 / IP55",
        "Standards: IEC 62271-200 / IS 3427",
      ],
      features: [
        "Fully compartmentalized metal-clad construction",
        "Integral safety interlocking to prevent mal-operation",
        "Equipped with multi-function numerical relays",
        "Dedicated low-voltage chamber for control wiring",
      ],
    },
    {
      id: "vcb-panel",
      name: "VCB Panel",
      shortDesc: "Vacuum Circuit Breaker panels for high-tension lines.",
      voltage: "12 kV to 36 kV",
      chassis: "IP42 / Indoor",
      rating: "630A to 2000A",
      image: "/images/slide4_panel_row.png",
      specs: [
        "Rated Voltage: 12 kV - 36 kV",
        "Impulse Withstand: 75 kV / 170 kV",
        "Breaking Capacity: 25 kA / 40 kA",
        "Chamber Division: Air insulated, VCB draw-out",
        "Interlocking: Mechanical and Electrical",
      ],
      features: [
        "Maintenance-free vacuum interrupters",
        "Cassette-type draw-out breaker mechanism",
        "Earth switch with quick-make mechanism",
        "Integrated surge suppressors",
      ],
    },
    {
      id: "dist-panel",
      name: "Distribution Panel",
      shortDesc: "Main distribution boards for plant power subdivision.",
      voltage: "415 V to 690 V",
      chassis: "Form 4b / IP54",
      rating: "Up to 6300A",
      image: "/images/slide4_panel_row.png",
      specs: [
        "Rated Voltage: 415 V - 690 V AC",
        "Busbar System: Tinned Copper / Aluminum busbars",
        "Short Circuit Rating: 50 kA / 85 kA for 1 sec",
        "Sheet Steel Thickness: 2.0 mm structural chassis",
        "Cable Entry: Top or Bottom (Customizable)",
      ],
      features: [
        "Modular construction with customizable expansion slots",
        "Separate cable alleys for safe maintenance access",
        "High mechanical strength to withstand electro-dynamic forces",
        "Air Circuit Breakers (ACB) integration",
      ],
    },
    {
      id: "ssb-switch",
      name: "SSB Switch",
      shortDesc: "Sub Main Switch Boards for mid-tier facility feeders.",
      voltage: "415 V AC",
      chassis: "Form 2b / IP42",
      rating: "400A to 1600A",
      image: "/images/slide3_1.jpg",
      specs: [
        "Rated Voltage: 415 V",
        "Insulation Voltage: 1000 V",
        "Short Circuit: 35 kA for 1 sec",
        "Mounting: Floor or Wall mount options",
        "Paint Finish: Siemens Grey structure (RAL 7032 / 7035)",
      ],
      features: [
        "Compact footprint optimizing spatial constraints",
        "Clear technical labeling for easy operations",
        "Equipped with molded case circuit breakers (MCCB)",
        "Pre-wired terminal blocks for quick site integration",
      ],
    },
    {
      id: "mcc-panel",
      name: "MCC Panel",
      shortDesc: "Motor Control Centers with DOL/Star-Delta feeds.",
      voltage: "415 V AC",
      chassis: "Form 3b / IP54",
      rating: "Draw-out & Fixed",
      image: "/images/slide4_panel_row.png",
      specs: [
        "Rated Voltage: 415 V",
        "Feeder Types: DOL / Star-Delta / Reversing",
        "Starters Capacity: Up to 250 kW motors",
        "Communication Protocols: Modbus RTU / Profibus DP",
        "Thermal Protection: Electronic Overload Relays",
      ],
      features: [
        "Draw-out design allowing unit swap without shutdown",
        "Fully shrouded busbars preventing accidental contact",
        "Smart motor monitoring diagnostics",
        "Ample cable room with separate control/power routing",
      ],
    },
    {
      id: "control-panel",
      name: "Control Panel",
      shortDesc: "Automation and relay desks housing PLCs and controllers.",
      voltage: "24V DC / 230V AC",
      chassis: "Rittal Type / IP52",
      rating: "Custom Control Load",
      image: "/images/slide3_1.jpg",
      specs: [
        "Control Voltage: 24 V DC / 110 V AC / 230 V AC",
        "Wiring Standard: PVC insulated multi-strand copper wires",
        "PLC Brands: Siemens / Schneider / Rockwell Integration",
        "HMI Screen Sizes: 7-inch to 15-inch Touch Panels",
        "Terminals: DIN Rail mounted clip-on type",
      ],
      features: [
        "Detailed wire ferrule numbering matching electrical drawings",
        "Isolated signal lines preventing electromagnetic noise",
        "Integrated cooling fans with washable filter media",
        "Emergency stop relays and safety overrides",
      ],
    },
    {
      id: "vfd-panel",
      name: "VFD Panel",
      shortDesc: "Variable Frequency Drive boards for pump/fan controls.",
      voltage: "415 V AC",
      chassis: "IP54 / Forced Air",
      rating: "1.5 kW to 500 kW",
      image: "/images/slide3_1.jpg",
      specs: [
        "Drive Power: 1.5 kW - 500 kW",
        "Harmonics Level: Meets IEEE 519 standards",
        "Chassis Layout: Enclosed with external bypass controls",
        "Reactors: Line & Load reactors integrated",
        "Cooling System: Temperature-controlled exhaust fans",
      ],
      features: [
        "Soft-start and dynamic acceleration/deceleration control",
        "Harmonic distortion filtration protecting upstream lines",
        "Manual bypass switch allowing offline drive maintenance",
        "Energy savings readout display integration",
      ],
    },
  ];

  return (
    <section id="products" className="py-20 border-b border-outline bg-surface scroll-mt-20">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] font-sans font-bold tracking-widest text-primary uppercase block mb-2">
            Industrial Hardware Catalog
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-on-background uppercase tracking-tight">
            Our Custom Panel Products
          </h2>
          <div className="w-16 h-1 bg-primary mt-4 mb-6"></div>
          <p className="font-sans text-base text-secondary">
            Every New Grace Electrical panel is custom-engineered to meet specific spatial constraints, environmental conditions, and load characteristics. Browse our baseline product lines below.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-surface-container border border-outline overflow-hidden flex flex-col justify-between group hover:border-on-background cursor-pointer tech-shadow"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedProduct(product)}
            >
              {/* Product Image Frame */}
              <div className="aspect-[16/10] w-full overflow-hidden relative border-b border-outline bg-surface-container-high">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover grayscale contrast-125 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-on-background text-surface text-[10px] font-sans font-bold tracking-wider px-2.5 py-1 uppercase">
                  {product.voltage}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-display text-lg font-bold text-on-background group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="font-sans text-xs text-secondary leading-relaxed mt-2">
                    {product.shortDesc}
                  </p>
                </div>

                {/* Brief Spec Sheet */}
                <div className="border-t border-outline/50 pt-4 grid grid-cols-2 gap-2 text-[10px] font-sans font-bold text-secondary">
                  <div>
                    <span className="text-secondary/60 uppercase block">RATING</span>
                    <span className="text-on-background uppercase">{product.rating}</span>
                  </div>
                  <div>
                    <span className="text-secondary/60 uppercase block">ENCLOSURE</span>
                    <span className="text-on-background uppercase">{product.chassis}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[10px] font-sans font-bold text-primary tracking-wider uppercase pt-2">
                  View Details <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-on-background/60 backdrop-blur-sm"
              onClick={() => setSelectedProduct(null)}
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-surface border border-outline shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row max-h-[90vh] md:max-h-none overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-on-background text-surface hover:bg-primary transition-colors border border-on-background"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Left Column: Image */}
              <div className="flex-1 min-h-[250px] md:min-h-none relative bg-surface-container-high border-b md:border-b-0 md:border-r border-outline">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover grayscale contrast-125"
                />
                <div className="absolute bottom-4 left-4 bg-on-background/90 text-surface text-xs font-sans font-bold tracking-wider px-3.5 py-1.5 uppercase border border-outline">
                  {selectedProduct.voltage}
                </div>
              </div>

              {/* Modal Right Column: Technical Details */}
              <div className="flex-1 p-8 md:p-10 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <Shield className="w-4 h-4 text-primary" />
                    <span className="font-sans text-[10px] font-bold tracking-widest text-primary uppercase">
                      Industrial Specification
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-on-background uppercase tracking-tight">
                    {selectedProduct.name}
                  </h3>
                  <div className="w-12 h-1 bg-primary mt-3"></div>
                </div>

                {/* Technical Specifications */}
                <div>
                  <h4 className="font-sans text-[10px] font-bold text-secondary uppercase tracking-wider mb-3">
                    Technical Specifications
                  </h4>
                  <ul className="space-y-1.5 font-mono text-[11px] text-secondary bg-surface-container border border-outline p-4">
                    {selectedProduct.specs.map((spec, i) => (
                      <li key={i} className="flex justify-between">
                        <span>{spec.split(":")[0]}</span>
                        <span className="font-bold text-on-background">{spec.split(":")[1]}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-sans text-[10px] font-bold text-secondary uppercase tracking-wider mb-3">
                    Design Features
                  </h4>
                  <ul className="space-y-2">
                    {selectedProduct.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-secondary leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-outline/50 flex gap-4">
                  <a
                    href="#contact"
                    onClick={() => setSelectedProduct(null)}
                    className="flex-1 text-center bg-on-background hover:bg-primary text-surface font-sans text-xs font-bold tracking-wider uppercase py-3.5 transition-colors border border-on-background"
                  >
                    Initiate Engineering Review
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
