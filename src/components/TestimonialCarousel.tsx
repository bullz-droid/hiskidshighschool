"use client";
import React, { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

export const TestimonialCarousel: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote: "My daughter came home from Senior Two able to cut and sew her own school dress before she sat her first national exam. That told me His Kids High School truly means what it says.",
      author: "Mrs. Justine Nakitto",
      role: "Parent, Day Scholar Section (Bbaale Sub-county)",
      stars: 5,
    },
    {
      id: 2,
      quote: "I left for Makerere University with a certified timber carpentry certificate in my bag alongside my UACE 19-point science results. I have never once needed to choose between practical trades and intellectual pursuit.",
      author: "Arthur Ssenyonga",
      role: "Alumnus, Class of 2024 (Now Studying Civil Engineering)",
      stars: 5,
    },
    {
      id: 3,
      quote: "This is exactly the school our sub-county needed — rigorous academics, modern farming, and disciplined sports under one roof, with a boarding environment our children are completely safe in.",
      author: "Hajji Moses Kibirige",
      role: "Kayunga District Community Elder & Education Patron",
      stars: 5,
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 7000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <div className="bg-brand-beige border border-brand-beige-border rounded-2xl p-6 sm:p-10 shadow-card relative overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-1 text-brand-gold">
          {[...Array(current.stars)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-brand-gold" />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-white border border-brand-beige-border hover:bg-brand-maroon hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-white border border-brand-beige-border hover:bg-brand-maroon hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <Quote className="w-10 h-10 text-brand-maroon/20 mb-3" />

      <p className="font-serif text-lg sm:text-xl text-brand-ink leading-relaxed italic">
        &ldquo;{current.quote}&rdquo;
      </p>

      <div className="mt-6 pt-4 border-t border-brand-beige-border flex items-center justify-between">
        <div>
          <div className="font-bold text-sm text-brand-ink">
            {current.author}
          </div>
          <div className="font-mono text-xs text-brand-maroon font-medium mt-0.5">
            {current.role}
          </div>
        </div>
        <div className="font-mono text-xs text-brand-ink-light">
          {currentIndex + 1} / {testimonials.length}
        </div>
      </div>
    </div>
  );
};