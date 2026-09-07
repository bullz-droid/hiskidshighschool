import React from "react";
import type { Metadata } from "next";
import { v2 as cloudinary } from "cloudinary";

import Link from "next/link";

export const metadata: Metadata = {
  title: "Photo Gallery | His Kids High School",
  description: "View photos of our campus, student life, vocational workshops, and championship athletics.",
};

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export const revalidate = 60; // Revalidate the gallery every 60 seconds

export default async function GalleryPage() {
  let images: any[] = [];
  let error: string | null = null;

  if (!process.env.CLOUDINARY_API_KEY) {
    error = "Awaiting Cloudinary API Key to connect to the gallery.";
  } else {
    try {
      // Fetch images from the 'hiskids-gallery' folder (excludes default samples)
      const results = await cloudinary.search
        .expression("folder=hiskids-gallery")
        .sort_by("created_at", "desc")
        .max_results(50)
        .execute();
      
      images = results.resources;
    } catch (e: any) {
      error = "Failed to connect to Cloudinary. Please check your API Key and Secret.";
      console.error("Cloudinary fetch error:", e);
    }
  }

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

      {/* Gallery Section */}
      <section className="py-16 sm:py-24 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {error && (
            <div className="bg-white border-2 border-dashed border-brand-beige-border rounded-2xl p-10 sm:p-16 text-center max-w-3xl mx-auto shadow-sm mb-10">
              <div className="w-16 h-16 bg-brand-beige rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-maroon w-8 h-8">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                  <circle cx="9" cy="9" r="2"/>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                </svg>
              </div>
              <h2 className="font-serif font-bold text-2xl text-brand-ink mb-3">
                Gallery Setup in Progress
              </h2>
              <p className="text-brand-ink-muted text-sm leading-relaxed max-w-lg mx-auto mb-6">
                {error}
              </p>
              <div className="inline-flex bg-brand-green-deep/5 text-brand-green-dark text-xs font-mono px-4 py-2 rounded border border-brand-green-deep/10">
                Please provide your numeric Cloudinary API Key.
              </div>
            </div>
          )}

          {!error && images.length === 0 && (
             <div className="bg-white border border-brand-beige-border rounded-2xl p-10 text-center max-w-2xl mx-auto shadow-sm">
               <h3 className="font-serif font-bold text-xl text-brand-ink mb-2">No Images Found</h3>
               <p className="text-sm text-brand-ink-muted">
                 Please log into Cloudinary, create a folder named <strong>hiskids-gallery</strong>, and upload your photos there!
               </p>
             </div>
          )}

          {images.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image) => (
                <div key={image.public_id} className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-brand-beige shadow-sm border border-brand-beige-border group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cloudinary.url(image.public_id, {
                      width: 800,
                      height: 600,
                      crop: "fill",
                      quality: "auto",
                      fetch_format: "auto"
                    })}
                    alt="His Kids High School Gallery Photo"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-brand-green-deep/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
