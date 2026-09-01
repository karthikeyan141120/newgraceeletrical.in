"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageSquare, Send, Check } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "Distribution Panel",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          requirement: "Distribution Panel",
          message: "",
        });
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        setError(result.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to submit form. Please check your network connection.");
    } finally {
      setLoading(false);
    }
  };

  const phones = [
    "+91 97869 83972"
  ];

  return (
    <section id="contact" className="py-20 bg-surface-container-low border-b border-outline scroll-mt-20">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[10px] font-sans font-bold tracking-widest text-primary uppercase block mb-2">
            Procurement & Support
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-on-background uppercase tracking-tight">
            Initiate Engineering Review
          </h2>
          <div className="w-16 h-1 bg-primary mt-4 mb-6"></div>
          <p className="font-sans text-base text-secondary">
            Reach out to discuss your single-line diagrams (SLD) or load requirements. Call Mr. A. Thangavel directly, message us on WhatsApp, or fill out the technical enquiry form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Cards & Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            {/* Phone & Email Info Card */}
            <div className="bg-surface border border-outline p-6 tech-shadow flex flex-col gap-6">
              <h3 className="font-display text-sm font-bold text-on-background tracking-wider uppercase border-b border-outline pb-2">
                NGE Direct Lines
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 border border-primary/20 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="text-[10px] font-sans font-bold text-secondary uppercase block mb-1">
                      Direct Calls (Proprietor)
                    </span>
                    {phones.map((phone, i) => (
                      <a
                        key={i}
                        href={`tel:${phone.replace(/\s+/g, "")}`}
                        className="block font-display text-sm font-bold text-on-background hover:text-primary transition-colors mt-0.5"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 border border-primary/20 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="text-[10px] font-sans font-bold text-secondary uppercase block mb-1">
                      WhatsApp Quick Chat
                    </span>
                    <a
                      href="https://wa.me/919786983972"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-display text-sm font-bold text-primary hover:underline mt-0.5"
                    >
                      Click to Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 border border-primary/20 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <span className="text-[10px] font-sans font-bold text-secondary uppercase block mb-1">
                      Email Address
                    </span>
                    <a
                      href="mailto:newgraceeletrical@gmail.com"
                      className="font-display text-sm font-bold text-on-background hover:text-primary transition-colors break-all"
                    >
                      newgraceeletrical@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Address Cards */}
            <div className="bg-surface border border-outline p-6 tech-shadow space-y-6">
              <h3 className="font-display text-sm font-bold text-on-background tracking-wider uppercase border-b border-outline pb-2">
                Manufacturing & Engineering Facility
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display text-xs font-bold text-on-background uppercase tracking-wide">
                      Rajeshwari Layout Facility
                    </h4>
                    <p className="font-sans text-xs text-secondary leading-relaxed mt-1">
                      Sy.No.44/2Q4, Plot No.30, East Plot, Govinda agraharam, Rajeshwari Layout, Hosur - 635 126, Krishnagiri District, Tamil Nadu, India.
                    </p>
                  </div>
                </div>

                <div className="border-t border-outline/50 pt-4 text-xs font-sans text-secondary leading-relaxed">
                  <span className="font-display text-[10px] font-bold text-on-background uppercase tracking-wider block">
                    GSTIN Registration
                  </span>
                  <span className="font-mono font-bold text-on-background mt-1 block">
                    33AFZPT8471Q1ZO
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Enquiry Form & Styled Map Mockup */}
          <div className="lg:col-span-7 space-y-6">
            {/* Technical Enquiry Form */}
            <div className="bg-surface border border-outline p-8 tech-shadow">
              <h3 className="font-display text-base font-bold text-on-background uppercase tracking-tight mb-6 flex items-center gap-2">
                <Send className="w-4 h-4 text-primary" /> Technical Review Form
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-[10px] font-bold text-on-background uppercase tracking-wider mb-1">
                      Company Name / Contact Person *
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sterling Lab / Engineer"
                      className="w-full bg-surface-container border border-outline p-3 font-sans text-xs text-on-background focus:border-on-background focus:ring-0 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-[10px] font-bold text-on-background uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 9876543210"
                      className="w-full bg-surface-container border border-outline p-3 font-sans text-xs text-on-background focus:border-on-background focus:ring-0 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-[10px] font-bold text-on-background uppercase tracking-wider mb-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. procurement@company.com"
                    className="w-full bg-surface-container border border-outline p-3 font-sans text-xs text-on-background focus:border-on-background focus:ring-0 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-sans text-[10px] font-bold text-on-background uppercase tracking-wider mb-1">
                    System Requirement
                  </label>
                  <select
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    className="w-full bg-surface-container border border-outline p-3 font-sans text-xs text-on-background focus:border-on-background focus:ring-0 focus:outline-none transition-colors"
                  >
                    <option value="MV Panel">MV Panel (Medium Voltage)</option>
                    <option value="VCB Panel">VCB Panel (Vacuum Circuit Breaker)</option>
                    <option value="Distribution Panel">Distribution Panel</option>
                    <option value="SSB Switch">SSB Switch (Sub Main Switchboard)</option>
                    <option value="MCC Panel">MCC Panel (Motor Control Center)</option>
                    <option value="Control Panel">PLC / Automation Control Panel</option>
                    <option value="VFD Panel">VFD Panel (Variable Frequency Drive)</option>
                    <option value="Turnkey Project">Turnkey Electrical Contract</option>
                  </select>
                </div>

                <div>
                  <label className="block font-sans text-[10px] font-bold text-on-background uppercase tracking-wider mb-1">
                    Load specs / Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Specify project load voltage (kV), NEMA requirements, or spatial limits."
                    className="w-full bg-surface-container border border-outline p-3 font-sans text-xs text-on-background focus:border-on-background focus:ring-0 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-500 text-xs p-3 font-sans">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading || submitted}
                  className="w-full bg-primary hover:bg-primary-container text-surface font-sans text-xs font-bold tracking-wider uppercase py-4 transition-colors flex items-center justify-center gap-2 border border-transparent cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <>Submitting...</>
                  ) : submitted ? (
                    <>
                      <Check className="w-4 h-4" /> Message Sent Successfully
                    </>
                  ) : (
                    <>Submit For Review</>
                  )}
                </button>
              </form>
            </div>

            {/* Google Map Embed */}
            <div className="bg-surface border border-outline p-2 tech-shadow relative aspect-[21/9] overflow-hidden flex flex-col justify-end min-h-[300px]">
              <iframe
                title="New Grace Electrical Google Map Location"
                src="https://maps.google.com/maps?q=12.774218,77.798890&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full border-0 z-0 opacity-80 hover:opacity-100 transition-opacity duration-300"
                allowFullScreen
                loading="lazy"
              />

              <div className="relative z-10 flex flex-wrap gap-4 items-center justify-between bg-surface-container/95 border border-outline p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-primary animate-ping rounded-full inline-block" />
                  <span className="font-display text-[10px] font-bold text-on-background uppercase tracking-wide">
                    RAJESHWARI LAYOUT FACILITY, HOSUR
                  </span>
                </div>
                <a
                  href="https://www.google.com/maps?q=12.774218,77.798890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[10px] font-bold text-primary hover:underline uppercase"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
