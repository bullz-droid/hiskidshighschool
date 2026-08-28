"use client";
import React, { useState } from "react";
import { MapPin, Compass, X } from "lucide-react";

export const CampusMapModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState<string>("main-gate");

  const facilities = [
    {
      id: "main-gate",
      name: "Main Entrance & Security Hub",
      category: "Administration",
      desc: "24/7 guarded security perimeter on the Kayunga-Bbaale highway with visitor verification.",
    },
    {
      id: "admin-block",
      name: "Headteacher & Administration Complex",
      category: "Administration",
      desc: "Admissions office, Bursar, staff room, and Board of Governors boardroom.",
    },
    {
      id: "academic-wings",
      name: "O-Level & A-Level Classroom Blocks",
      category: "Academics",
      desc: "Spacious, well-ventilated classrooms with modern dual-seater mahogany desks.",
    },
    {
      id: "science-labs",
      name: "Advanced Science & ICT Pavilion",
      category: "Academics",
      desc: "Dedicated Physics, Chemistry, Biology labs and a 40-seat solar-powered computer center.",
    },
    {
      id: "vocational-hub",
      name: "Vocational Workshops (Carpentry & Tailoring)",
      category: "Trades",
      desc: "Heavy-duty industrial sewing machines, timber joinery machinery, and storage bays.",
    },
    {
      id: "school-farm",
      name: "14-Acre Demonstration Farm & Brooder",
      category: "Trades",
      desc: "Horticulture beds, commercial banana plantation, poultry brooding units, and cattle zero-grazing.",
    },
    {
      id: "dormitories",
      name: "Nile & Victoria Dormitory Houses",
      category: "Boarding",
      desc: "Separate high-security boys' and girls' residential blocks with on-site house parents.",
    },
    {
      id: "dining-hall",
      name: "Multi-Purpose Dining & Assembly Pavilion",
      category: "Student Life",
      desc: "Nutritious farm-to-table meals served 3 times daily, chapel services, and school debates.",
    },
    {
      id: "sports-arena",
      name: "Main Football Pitch & Basketball Arena",
      category: "Sports",
      desc: "Full regulation football stadium, netball court, and outdoor basketball facility.",
    },
  ];

  const current = facilities.find((f) => f.id === selectedFacility) || facilities[0];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 bg-brand-green-deep hover:bg-brand-green-mid text-brand-gold font-semibold text-xs px-5 py-2.5 rounded-full border border-brand-gold/40 shadow-sm transition-all"
      >
        <Compass className="w-4 h-4 text-brand-gold" />
        <span>Explore Interactive Campus Map</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-brand-beige-light border border-brand-green-mid rounded-2xl max-w-4xl w-full p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 text-brand-ink-muted hover:text-brand-maroon rounded-lg text-lg"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-brand-maroon text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                Kayunga District Campus (14 Acres)
              </span>
            </div>

            <h3 className="font-serif font-bold text-2xl text-brand-ink">
              His Kids High School Grounds & Masterplan
            </h3>
            <p className="text-xs text-brand-ink-muted mt-1">
              Select a facility below to view campus location and infrastructure details.
            </p>

            <div className="my-5 p-4 bg-brand-green-dark rounded-xl border border-brand-gold/30 text-white relative overflow-hidden">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {facilities.map((fac) => {
                  const isSelected = fac.id === selectedFacility;
                  return (
                    <button
                      key={fac.id}
                      onClick={() => setSelectedFacility(fac.id)}
                      className={`p-3 rounded-lg text-left transition-all border ${
                        isSelected
                          ? "bg-brand-maroon text-brand-beige-light border-brand-gold shadow-md"
                          : "bg-brand-green-deep/80 hover:bg-brand-green-mid border-white/10 text-brand-beige-border"
                      }`}
                    >
                      <div className="font-mono text-[10px] font-bold uppercase text-brand-gold-light">
                        {fac.category}
                      </div>
                      <div className="font-serif text-xs font-semibold mt-0.5">
                        {fac.name}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="p-4 bg-brand-beige rounded-xl border border-brand-beige-border flex items-start gap-4">
              <div className="p-3 bg-brand-maroon rounded-xl text-white flex-shrink-0">
                <MapPin className="w-6 h-6 text-brand-gold" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] uppercase font-bold text-brand-maroon">
                    {current.category}
                  </span>
                  <span className="text-brand-ink-muted">·</span>
                  <span className="font-bold text-sm text-brand-ink">
                    {current.name}
                  </span>
                </div>
                <p className="text-xs text-brand-ink-muted mt-1 leading-relaxed">
                  {current.desc}
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="px-6 py-2 bg-brand-green-deep text-brand-gold rounded-xl font-semibold text-xs"
              >
                Done Viewing
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};