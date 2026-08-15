"use client";

import React from "react";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-on-background text-surface border-t-4 border-primary pb-16 md:pb-8">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Brand details */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
              <Image
                src="/images/nge_logo_official.png"
                alt="New Grace Electrical Logo"
                fill
                className="object-contain filter brightness-100 contrast-125"
              />
            </div>
            <span className="font-display text-base font-bold tracking-wider uppercase text-surface">
              NEW GRACE ELECTRICAL
            </span>
          </div>
          <p className="font-sans text-[11px] text-surface-dim opacity-70 max-w-sm leading-relaxed">
            Industrial panel manufacturers and class A contracting firm based in Hosur, India. Partnering with global leaders to provide robust power grid engineering solutions.
          </p>
          <p className="font-sans text-[10px] text-surface-dim opacity-50">
            © {new Date().getFullYear()} NEW GRACE ELECTRICAL. ALL RIGHTS RESERVED.
          </p>
          <p className="font-mono text-[9px] text-surface-dim opacity-40">
            GSTIN: 33AFZPT8471Q1ZO
          </p>
        </div>

        {/* Links & Quick Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:justify-items-end">
          {/* Quick links */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-bold text-surface uppercase tracking-wider">
              Sitemap
            </h4>
            <ul className="space-y-1.5">
              {[
                { label: "Home", id: "home" },
                { label: "About Us", id: "about" },
                { label: "Core Services", id: "services" },
                { label: "Panel Products", id: "products" },
                { label: "Infrastructure", id: "infrastructure" },
                { label: "Contact Us", id: "contact" },
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className="font-sans text-[11px] text-surface-dim hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick contact info */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-bold text-surface uppercase tracking-wider">
              Support Links
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-[11px] text-surface-dim">
                <span className="hover:text-primary transition-colors cursor-pointer">
                  ISO 9001 Certified
                </span>
              </li>
              <li className="flex items-center gap-2 text-[11px] text-surface-dim">
                <span className="hover:text-primary transition-colors cursor-pointer">
                  Siemens Switchgear Products
                </span>
              </li>
              <li className="flex items-center gap-2 text-[11px] text-surface-dim">
                <span className="hover:text-primary transition-colors cursor-pointer">
                  TANGEDCO CEIG License
                </span>
              </li>
              <li className="flex items-center gap-2 text-[11px] text-surface-dim">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "contact")}
                  className="text-primary hover:underline font-bold"
                >
                  Contact Engineering
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
