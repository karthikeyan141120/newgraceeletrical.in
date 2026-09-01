"use client";

import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import PanelModel from "./PanelModel";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen pt-24 pb-16 flex items-center bg-surface-container-low overflow-hidden border-b border-outline"
    >
      {/* Background industrial grid pattern */}
      <div
        className="absolute inset-0 z-0 opacity-15"
        style={{
          backgroundImage: "radial-gradient(var(--color-outline) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      
      {/* Visual steel structure backdrop */}
      <div className="absolute right-0 top-0 h-full w-1/2 bg-surface-container border-l border-outline transform skew-x-12 translate-x-32 z-0 hidden lg:block" />

      <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left copy column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-surface-dim px-3 py-1 border border-outline">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="font-sans text-[10px] font-bold tracking-widest text-on-background uppercase">
              ISO 9001:2015 Certified Manufacturing
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-on-background leading-[1.15] uppercase tracking-tight">
            Engineering the <br />
            <span className="inline-block mt-3">
              <span className="inline-flex items-center gap-3 bg-primary text-white px-5 py-2 border-2 border-on-background shadow-[4px_4px_0px_#1a1c1a]">
                <span className="font-black tracking-wider">Power Grid</span>
                <span className="w-2.5 h-2.5 rounded-full bg-accent border border-on-background" />
              </span>
            </span>
          </h1>

          <p className="font-sans text-base md:text-lg text-secondary max-w-xl leading-relaxed">
            High-voltage precision panel board manufacturing. We design, manufacture, and commission custom switchgear and control panel infrastructure for heavy industrial applications requiring absolute reliability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-on-background hover:bg-primary text-surface font-sans text-xs font-bold tracking-wider uppercase px-8 py-4 transition-all duration-200 tech-shadow-hover border border-transparent"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a
              href="tel:+919786983972"
              className="inline-flex items-center justify-center bg-surface hover:bg-surface-container-highest text-on-background font-sans text-xs font-bold tracking-wider uppercase px-8 py-4 border border-on-background transition-colors duration-200"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call 97869 83972
            </a>
          </div>

          {/* Siemens Channel Partner Badge */}
          <div className="pt-6 border-t border-outline/50 flex items-center gap-4">
            <div className="bg-surface border border-outline px-3 py-1.5 flex items-center justify-center">
              <span className="font-display text-xs font-bold tracking-wide text-primary">SIEMENS</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-sans font-bold tracking-wider text-secondary uppercase">
                Authorized Channel Partner
              </span>
              <span className="text-xs font-sans text-on-background font-bold">
                Siemens Switchgear Products
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right 3D Model Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full max-w-[500px] lg:max-w-none aspect-[4/5] lg:h-[600px] border border-outline bg-surface-container-high relative overflow-hidden tech-shadow flex items-center justify-center"
        >
          {mounted ? (
            <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
              <Canvas
                camera={{ position: [0, 0, 5.5], fov: 45 }}
                gl={{ antialias: true }}
              >
                <ambientLight intensity={0.6} />
                <directionalLight position={[5, 10, 5]} intensity={1.0} />
                <directionalLight position={[-5, 5, -5]} intensity={0.3} />
                <pointLight position={[0, 0, 2]} intensity={0.5} />
                
                <Stage environment="city" intensity={0.5}>
                  <PanelModel />
                </Stage>
                
                <OrbitControls
                  enableZoom={false}
                  minPolarAngle={Math.PI / 3}
                  maxPolarAngle={Math.PI / 1.8}
                />
              </Canvas>

              {/* Live technical info overlays */}
              <div className="absolute bottom-4 left-4 right-4 bg-surface/90 border border-outline p-4 backdrop-blur-sm pointer-events-none select-none">
                <div className="flex justify-between items-center border-b border-outline pb-2 mb-2">
                  <span className="font-sans text-[10px] font-bold tracking-wider text-secondary uppercase">
                    SYS_MONITOR
                  </span>
                  <span className="text-[10px] font-sans font-bold text-primary flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-primary rounded-full inline-block animate-pulse"></span>
                    ACTIVE RENDERING
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[9px] font-sans font-bold tracking-wider text-secondary uppercase block">
                      LOAD CAPACITY
                    </span>
                    <span className="font-display text-base font-bold text-on-background">
                      12.5 MW
                    </span>
                  </div>
                  <div>
                    <span className="text-[9px] font-sans font-bold tracking-wider text-secondary uppercase block">
                      VOLTAGE RATING
                    </span>
                    <span className="font-display text-base font-bold text-on-background">
                      35 kV Max
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
              <p className="font-sans text-xs text-secondary tracking-wider uppercase font-bold">
                Initializing 3D Switchgear Model...
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
