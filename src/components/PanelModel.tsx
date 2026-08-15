"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Cylinder, Sphere } from "@react-three/drei";
import * as THREE from "three";

export default function PanelModel() {
  const groupRef = useRef<THREE.Group>(null);

  // Slowly rotate the model in the background
  useFrame((state) => {
    if (groupRef.current) {
      // Auto-rotation
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
      
      // Gentle floating up and down
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 1.5) * 0.08;
      
      // Gentle react to mouse movement
      const pointer = state.pointer;
      groupRef.current.rotation.x = pointer.y * 0.15;
      groupRef.current.rotation.y += pointer.x * 0.2;
    }
  });

  return (
    <group ref={groupRef} scale={[0.9, 0.9, 0.9]}>
      {/* Outer Metal Cabinet */}
      <Box args={[2.5, 4.0, 1.2]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#374151" // Steel grey
          roughness={0.2}
          metalness={0.8}
        />
      </Box>

      {/* Outer Cabinet Bezel/Frame Accent */}
      <Box args={[2.6, 4.1, 0.05]} position={[0, 0, 0.6]}>
        <meshStandardMaterial
          color="#1a1d21" // Dark charcoal
          roughness={0.5}
          metalness={0.9}
        />
      </Box>

      {/* Main Door / Panel Face */}
      <Box args={[2.3, 3.8, 0.02]} position={[0, 0, 0.61]}>
        <meshStandardMaterial
          color="#4b5563" // Lighter steel grey
          roughness={0.3}
          metalness={0.7}
        />
      </Box>

      {/* Siemens Partnership Indicator or Tag */}
      <Box args={[0.8, 0.2, 0.01]} position={[0, 1.7, 0.62]}>
        <meshStandardMaterial
          color="#006a38" // NGE Circuit Green
          roughness={0.5}
          metalness={0.5}
        />
      </Box>

      {/* Grid of Indicator Lights (Top section) */}
      {[-0.8, 0, 0.8].map((x, i) => (
        <Sphere
          key={i}
          args={[0.08, 16, 16]}
          position={[x, 1.3, 0.63]}
        >
          <meshStandardMaterial
            color={i === 0 ? "#ba1a1a" : i === 1 ? "#006a38" : "#eab308"} // Red, Green, Yellow
            emissive={i === 0 ? "#ba1a1a" : i === 1 ? "#006a38" : "#eab308"}
            emissiveIntensity={1.5}
            roughness={0.1}
          />
        </Sphere>
      ))}

      {/* Digital Meter Screen */}
      <Box args={[1.2, 0.6, 0.05]} position={[0, 0.7, 0.63]}>
        <meshStandardMaterial
          color="#0f172a" // Deep navy/black
          roughness={0.1}
        />
      </Box>
      
      {/* Glow lines inside screen representing digital readout */}
      <Box args={[1.0, 0.02, 0.01]} position={[0, 0.8, 0.66]}>
        <meshStandardMaterial color="#63de90" emissive="#63de90" emissiveIntensity={2} />
      </Box>
      <Box args={[0.8, 0.02, 0.01]} position={[-0.1, 0.7, 0.66]}>
        <meshStandardMaterial color="#63de90" emissive="#63de90" emissiveIntensity={2} />
      </Box>
      <Box args={[0.6, 0.02, 0.01]} position={[-0.2, 0.6, 0.66]}>
        <meshStandardMaterial color="#ba1a1a" emissive="#ba1a1a" emissiveIntensity={2} />
      </Box>

      {/* Rotary Switches (Middle Section) */}
      {[-0.6, 0.6].map((x, i) => (
        <group key={i} position={[x, 0.1, 0.63]}>
          <Cylinder args={[0.12, 0.12, 0.04, 32]} rotation={[Math.PI / 2, 0, 0]}>
            <meshStandardMaterial color="#1f2937" roughness={0.5} />
          </Cylinder>
          {/* Knob pointer */}
          <Box args={[0.04, 0.16, 0.08]} position={[0, 0, 0.02]} rotation={[0, 0, i === 0 ? 0.5 : -0.8]}>
            <meshStandardMaterial color="#e7e9ec" metalness={0.8} />
          </Box>
        </group>
      ))}

      {/* Heavy Duty Molded Case Circuit Breakers (MCCB) (Bottom Section) */}
      {[0.5, -0.5].map((y, row) => (
        <group key={row} position={[0, -0.6 + y * 0.8, 0.63]}>
          {/* Breaker Chassis */}
          <Box args={[1.8, 0.45, 0.05]}>
            <meshStandardMaterial color="#1f2937" roughness={0.6} />
          </Box>
          {/* Breaker Handles/Switches */}
          {[-0.5, 0, 0.5].map((x, col) => (
            <group key={col} position={[x, 0, 0.03]}>
              <Box args={[0.15, 0.2, 0.04]}>
                <meshStandardMaterial color="#111827" />
              </Box>
              {/* Toggle switch lever */}
              <Box
                args={[0.06, 0.12, 0.08]}
                position={[0, row === 0 ? 0.03 : -0.03, 0.02]}
                rotation={[row === 0 ? 0.3 : -0.3, 0, 0]}
              >
                <meshStandardMaterial color={row === 0 ? "#ba1a1a" : "#006a38"} />
              </Box>
            </group>
          ))}
        </group>
      ))}

      {/* Vent Grilles at bottom */}
      {[-1.3, -1.5, -1.7].map((y, i) => (
        <Box key={i} args={[1.6, 0.04, 0.02]} position={[0, y, 0.62]}>
          <meshStandardMaterial color="#1f2937" roughness={0.9} />
        </Box>
      ))}

      {/* Side Hinge Accents */}
      {[-1.5, 0, 1.5].map((y, i) => (
        <Cylinder
          key={i}
          args={[0.04, 0.04, 0.2, 16]}
          position={[-1.28, y, 0.58]}
          rotation={[0, 0, 0]}
        >
          <meshStandardMaterial color="#111827" metalness={0.9} roughness={0.1} />
        </Cylinder>
      ))}
    </group>
  );
}
