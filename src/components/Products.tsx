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
      id: "mv-panel-board",
      name: "MV Panel Board",
      shortDesc: "Medium Voltage Panel boards custom-engineered for utility routing.",
      voltage: "11 kV to 33 kV",
      chassis: "IP55 / Compartmentalized",
      rating: "Up to 3150A",
      image: "/images/imageprocess/MV Panel board.jpeg",
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
      id: "mcc-panel",
      name: "Motor Control Center (MCC)",
      shortDesc: "Heavy-duty Motor Control Centers with draw-out & fixed starter feeds.",
      voltage: "415 V AC",
      chassis: "Form 3b / IP54",
      rating: "Draw-out & Fixed",
      image: "/images/imageprocess/Motor control center MCC.jpeg",
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
      id: "power-grid-66kv",
      name: "66kV Power Grid & Pump House",
      shortDesc: "Substation power grid erection, commissioning, and high-voltage pump house infrastructure.",
      voltage: "66 kV High Voltage",
      chassis: "Heavy Industrial Outdoor",
      rating: "Grid Capacity",
      image: "/images/imageprocess/Power grid Erection and commissioning 66kv Pump House.jpeg",
      specs: [
        "System Voltage: Up to 66 kV",
        "Execution Scope: Erection, Testing, and Commissioning",
        "Application: Heavy Industrial Pump Stations & Utility Substations",
        "Compliance: TANGEDCO / CEIG Guidelines",
      ],
      features: [
        "Turnkey engineering review and single-line diagram implementation",
        "High-voltage safety interlocking and surge protection",
        "Comprehensive site testing and handover documentation",
      ],
    },
    {
      id: "solar-acdb",
      name: "Solar AC Distribution Box (ACDB)",
      shortDesc: "Specialized solar AC distribution boxes for renewable energy power collection.",
      voltage: "415 V AC",
      chassis: "Outdoor IP65",
      rating: "Up to 1000A",
      image: "/images/imageprocess/Solar Alternating Current Distribution Box (ACDB).jpeg",
      specs: [
        "Rated Voltage: 415 V AC",
        "Protection Degree: IP65 Outdoor Weatherproof",
        "Components: MCCB / ACB, Surge Protection Devices (SPD)",
        "Enclosure: Powder Coated Sheet Steel / FRP",
      ],
      features: [
        "Integrated Type 2 SPD for solar surge suppression",
        "Clear metering window for energy generation inspection",
        "High UV resistance and thermal dissipation design",
      ],
    },
    {
      id: "solar-dc-jb",
      name: "Solar DC Power Junction Box (JB)",
      shortDesc: "High-reliability DC combiner and junction boxes for solar PV arrays.",
      voltage: "1000V / 1500V DC",
      chassis: "IP65 Weatherproof",
      rating: "Multi-string Input",
      image: "/images/imageprocess/Solar DC power JB.jpeg",
      specs: [
        "Max Operating Voltage: 1000 V / 1500 V DC",
        "Protection: DC Fuses, DC Disconnector, DC SPD",
        "String Count: Custom multi-in multi-out array options",
        "Enclosure Material: Polycarbonate / Powder-coated mild steel",
      ],
      features: [
        "High-density DC fuse protection for array strings",
        "Integrated load break DC isolator switch",
        "Hermetically sealed cable glands preventing ingress",
      ],
    },
    {
      id: "ssb-board",
      name: "Sub Switch Board (SSB)",
      shortDesc: "Sub Main Switch Boards for mid-tier industrial and commercial feeder networks.",
      voltage: "415 V AC",
      chassis: "Form 2b / IP42",
      rating: "400A to 1600A",
      image: "/images/imageprocess/Sub Switch Board SSB.jpeg",
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
      id: "transformer-vcb",
      name: "Transformer & VCB Panel",
      shortDesc: "Vacuum Circuit Breaker panels and power transformer integration systems.",
      voltage: "11 kV to 33 kV",
      chassis: "Metal-Clad IP54",
      rating: "630A to 2000A",
      image: "/images/imageprocess/Transformer and VCB.jpeg",
      specs: [
        "Rated Voltage: 11 kV - 33 kV",
        "Impulse Withstand: 75 kV / 170 kV",
        "Breaking Capacity: 25 kA / 40 kA",
        "Breaker Type: Cassette draw-out VCB mechanism",
      ],
      features: [
        "Maintenance-free vacuum interrupters",
        "Direct integration with step-down power transformers",
        "Integrated surge suppressors and numerical relay protection",
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
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
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
                  className="object-cover contrast-110"
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
