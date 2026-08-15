"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageSquare } from "lucide-react";

export default function StickyCallBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Hide sticky bar when scrolling down, show when scrolling up
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed bottom-0 left-0 w-full z-40 bg-surface border-t border-outline transition-transform duration-300 md:hidden grid grid-cols-2 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href="tel:+919786983972"
        className="flex items-center justify-center gap-2 bg-surface hover:bg-surface-container py-4 text-on-background border-r border-outline font-sans text-xs font-bold tracking-wider uppercase transition-colors"
      >
        <Phone className="w-4 h-4 text-primary" />
        Call Now
      </a>
      <a
        href="https://wa.me/919786983972"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-on-background hover:bg-primary py-4 text-surface font-sans text-xs font-bold tracking-wider uppercase transition-colors"
      >
        <MessageSquare className="w-4 h-4 text-primary" />
        WhatsApp
      </a>
    </div>
  );
}
