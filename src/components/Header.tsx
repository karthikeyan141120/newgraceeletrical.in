"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "about", "services", "products", "infrastructure", "clients", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.offsetTop - 80; // offset for sticky header
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Products", id: "products" },
    { label: "Infrastructure", id: "infrastructure" },
    { label: "Clients", id: "clients" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-surface/95 backdrop-blur-md py-3 shadow-sm border-outline"
            : "bg-surface py-5 border-outline"
        }`}
      >
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
              <Image
                src="/images/nge_logo.png"
                alt="New Grace Electrical Logo"
                fill
                className="object-contain filter brightness-100 contrast-125"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold tracking-tight text-on-background leading-none">
                NEW GRACE
              </span>
              <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-secondary leading-none uppercase mt-0.5">
                ELECTRICAL
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`font-sans text-xs font-bold tracking-wider uppercase transition-colors py-1 border-b-2 ${
                    activeSection === link.id
                      ? "text-primary border-primary"
                      : "text-secondary border-transparent hover:text-on-background"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="bg-on-background hover:bg-primary text-surface font-sans text-xs font-bold tracking-wider uppercase px-6 py-3 transition-colors border border-on-background"
            >
              Request Quote
            </a>
          </nav>

          {/* Mobile Hamburguer Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-on-background hover:text-primary transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-on-background/50 z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-surface z-40 border-l border-outline shadow-2xl transition-transform duration-300 lg:hidden flex flex-col p-6 pt-24 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="font-display text-sm font-bold text-on-background tracking-wider uppercase border-b border-outline pb-4 mb-6">
          Navigation Menu
        </div>
        <nav className="flex flex-col gap-1 flex-1 overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`flex items-center justify-between p-3 transition-colors ${
                activeSection === link.id
                  ? "bg-primary/10 text-primary font-bold border-l-4 border-primary"
                  : "text-on-background hover:bg-surface-container font-medium"
              }`}
            >
              <span className="font-sans text-xs font-bold tracking-wider uppercase">
                {link.label}
              </span>
            </a>
          ))}
        </nav>
        <div className="pt-6 border-t border-outline mt-auto">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="block text-center bg-on-background hover:bg-primary text-surface font-sans text-xs font-bold tracking-wider uppercase py-4 transition-colors border border-on-background"
          >
            Request Quote
          </a>
        </div>
      </div>
    </>
  );
}
