import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photo Gallery | His Kids High School",
  description: "View photos of our campus, student life, vocational workshops, and championship athletics.",
};

export default function GalleryPage() {
  return (
    <div className="w-full flex flex-col min-h-screen bg-brand-beige-light">
      {/* Header Section */}
      <section className="bg-brand-green-deep text-brand-beige-light py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid-light opacity-60 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-maroon/80 border border-brand-maroon-light/40 text-brand-gold-light text-xs font-mono uppercase tracking-wider mb-4">
            Campus Life in Pictures
          </div>
          <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-brand-beige-light mb-6">
            School Photo Gallery
          </h1>
          <p className="text-sm sm:text-base text-brand-beige-border max-w-2xl mx-auto leading-relaxed">
            Take a visual tour of His Kids High School. From our active classrooms and vocational workshops to championship sports and boarding life.
          </p>
        </div>
      </section>

      {/* Cloudinary Integration Placeholder Section */}
      <section className="py-16 sm:py-24 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Temporary State Box until Cloudinary is ready */}
          <div className="bg-white border-2 border-dashed border-brand-beige-border rounded-2xl p-10 sm:p-16 text-center max-w-3xl mx-auto shadow-sm">
            <div className="w-16 h-16 bg-brand-beige rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-maroon w-8 h-8">
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                <circle cx="9" cy="9" r="2"/>
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
              </svg>
            </div>
            <h2 className="font-serif font-bold text-2xl text-brand-ink mb-3">
              Cloudinary Gallery Setup in Progress
            </h2>
            <p className="text-brand-ink-muted text-sm leading-relaxed max-w-lg mx-auto mb-6">
              We are currently integrating this gallery directly with Cloudinary for lightning-fast image retrieval and optimization. 
            </p>
            <div className="inline-flex bg-brand-green-deep/5 text-brand-green-dark text-xs font-mono px-4 py-2 rounded border border-brand-green-deep/10">
              Awaiting Cloudinary API Keys & Cloud Name
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
