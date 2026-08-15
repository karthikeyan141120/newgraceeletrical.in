import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Products from "@/components/Products";
import Infrastructure from "@/components/Infrastructure";
import Projects from "@/components/Projects";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import StickyCallBar from "@/components/StickyCallBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Services />
        <Process />
        <Products />
        <Infrastructure />
        <Projects />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}

