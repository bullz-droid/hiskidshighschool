"use client";
import React from "react";
import Link from "next/link";
import { 
  MapPin, Phone, Mail, Clock, Send, 
  HelpCircle, CheckCircle2, MessageSquare, Compass
} from "lucide-react";
import { BarkclothDivider } from "@/components/BarkclothDivider";
import { CampusMapModal } from "@/components/CampusMapModal";


export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-brand-green-deep text-brand-beige-light py-16 sm:py-24 border-b border-brand-maroon/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-0.5 w-8 bg-brand-gold inline-block" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-gold-light">
              Get in Touch
            </span>
          </div>
          <h1 className="font-serif font-bold text-4xl sm:text-6xl text-brand-beige-light leading-tight">
            Visit Our Campus &amp; <br />
            <span className="italic text-brand-gold">Reach Our Team</span>
          </h1>
          <p className="text-sm sm:text-base text-brand-beige-border/90 mt-4 max-w-2xl leading-relaxed">
            We are located in Kayunga District, Central Region, Uganda. Reach out for admissions, student welfare inquiries, or partnerships.
          </p>
        </div>
      </section>

      <BarkclothDivider theme="on-cream" height={32} />

      {/* CONTACT & DIRECTORY GRID */}
      <section className="py-16 sm:py-20 bg-brand-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Information & Directory (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border-b border-brand-beige-border pb-3">
                <h2 className="font-serif font-bold text-2xl text-brand-ink">
                  Office Directory &amp; Location
                </h2>
                <p className="text-xs text-brand-ink-muted mt-1">
                  Direct phone lines and physical address.
                </p>
              </div>

              <div className="space-y-4 text-xs">
                <div className="p-4 bg-white rounded-xl border border-brand-beige-border flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-maroon flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-brand-ink font-mono uppercase">Campus Location:</div>
                    <p className="text-brand-ink-muted mt-0.5">
                      On the Kayunga–Bbaale Road, Kayunga District, Central Region, Uganda (Approx. 1.5 hrs from Kampala via Mukono or Gayaza).
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-brand-beige-border flex items-start gap-3">
                  <Phone className="w-5 h-5 text-brand-maroon flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-brand-ink font-mono uppercase">Telephone Lines:</div>
                    <p className="text-brand-ink-muted mt-0.5 font-mono">
                      General Desk: +256 757 870 025 (Airtel) <br />
                      Admissions Officer: +256 775 623 621 (MTN) <br />
                      Headteacher: +256 757 870 025
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-brand-beige-border flex items-start gap-3">
                  <Mail className="w-5 h-5 text-brand-maroon flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-brand-ink font-mono uppercase">Email Addresses:</div>
                    <p className="text-brand-ink-muted mt-0.5 font-mono">
                      Admissions: hiskidsuganda7@gmail.com <br />
                      Administration: hiskidsuganda7@gmail.com
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-brand-beige-border flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brand-maroon flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-brand-ink font-mono uppercase">Office Visiting Hours:</div>
                    <p className="text-brand-ink-muted mt-0.5">
                      Monday to Friday: 8:00 AM – 5:00 PM <br />
                      Saturday: 8:30 AM – 2:00 PM (Admissions &amp; Guided Tours)
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <CampusMapModal />
              </div>
            </div>

            {/* Right: Interactive Inquiry Form (7 cols) */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-brand-beige-border shadow-card">
              <div className="border-b border-brand-beige-border pb-3 mb-6">
                <h3 className="font-serif font-bold text-2xl text-brand-ink flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-brand-green-deep" />
                  <span>Send an Official Inquiry</span>
                </h3>
                <p className="text-xs text-brand-ink-muted mt-1">
                  Have a question about admissions, school bus routes, or bursary support? Fill out the form below.
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-brand-ink-muted mb-1 font-semibold">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Juliet Nabukeera"
                      className="w-full px-3.5 py-2 text-sm bg-brand-beige-light border border-brand-beige-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-maroon"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-brand-ink-muted mb-1 font-semibold">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +256 775 623 621 (MTN)"
                      className="w-full px-3.5 py-2 text-sm bg-brand-beige-light border border-brand-beige-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-maroon font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-brand-ink-muted mb-1 font-semibold">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. name@example.com"
                      className="w-full px-3.5 py-2 text-sm bg-brand-beige-light border border-brand-beige-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-maroon"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-brand-ink-muted mb-1 font-semibold">
                      Subject / Department
                    </label>
                    <select className="w-full px-3.5 py-2 text-sm bg-brand-beige-light border border-brand-beige-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-maroon">
                      <option>Admissions &amp; Enrollment</option>
                      <option>Fees &amp; Billing Inquiries</option>
                      <option>Academic Curriculum (CBC)</option>
                      <option>Vocational Trade Workshops</option>
                      <option>Boarding Welfare</option>
                      <option>General Inquiries</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-brand-ink-muted mb-1 font-semibold">
                    Your Message / Question *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Please provide details about your learner's age, target class, or specific question..."
                    className="w-full px-3.5 py-2 text-sm bg-brand-beige-light border border-brand-beige-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-maroon"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => alert("Thank you for your message! Our admissions desk in Kayunga will get back to you shortly.")}
                  className="inline-flex items-center gap-2 bg-brand-maroon hover:bg-brand-maroon-light text-brand-beige-light font-bold text-xs px-6 py-3 rounded-xl shadow-md transition-colors"
                >
                  <Send className="w-4 h-4 text-brand-gold" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}