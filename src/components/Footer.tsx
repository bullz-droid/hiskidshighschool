import React from "react";
import Link from "next/link";
import { Crest } from "./Crest";
import { BarkclothDivider } from "./BarkclothDivider";
import { 
  MapPin, Phone, Mail, Clock, Award, ShieldCheck, 
  ArrowUpRight, Heart, ExternalLink, Compass 
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-green-dark text-brand-beige-light relative overflow-hidden">
      {/* Top Cultural Divider */}
      <BarkclothDivider theme="on-green" height={32} />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Ministry Registration (2 Cols wide on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <Crest className="w-12 h-12 flex-shrink-0" />
              <div>
                <h3 className="font-serif font-bold text-xl text-brand-beige-light tracking-tight">
                  His Kids High School
                </h3>
                <p className="font-mono text-xs text-brand-gold tracking-wider uppercase">
                  Kayunga District · Central Region · Uganda
                </p>
              </div>
            </div>

            <p className="text-sm text-brand-beige-border leading-relaxed max-w-md">
              A premier mixed day and boarding secondary school rooted in Uganda&apos;s competency-based curriculum, tertiary vocational hand skills, academic rigor, and disciplined character formation.
            </p>

            {/* Ministry Accreditation Badge */}
            <div className="p-3.5 bg-brand-green-deep rounded-xl border border-brand-maroon/40 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
              <div className="text-xs">
                <div className="font-bold text-brand-beige-light">
                  Fully Registered & UNEB Examination Center
                </div>
                <div className="text-brand-beige-border text-[11px] mt-0.5">
                  Reg: PSS/H/284 · Ministry of Education & Sports, Republic of Uganda
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Academic & Skills Quick Links */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-brand-gold font-bold">
              Academics & Trades
            </h4>
            <ul className="space-y-2 text-sm text-brand-beige-border">
              <li>
                <Link href="/academics" className="hover:text-brand-gold transition-colors flex items-center gap-1.5">
                  <span>Lower Secondary (CBC)</span>
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-brand-gold transition-colors flex items-center gap-1.5">
                  <span>A-Level Sciences & Arts</span>
                </Link>
              </li>
              <li>
                <Link href="/vocational-skills" className="hover:text-brand-gold transition-colors flex items-center gap-1.5">
                  <span>Tailoring & Garment Design</span>
                </Link>
              </li>
              <li>
                <Link href="/vocational-skills" className="hover:text-brand-gold transition-colors flex items-center gap-1.5">
                  <span>Carpentry & Joinery Shop</span>
                </Link>
              </li>
              <li>
                <Link href="/vocational-skills" className="hover:text-brand-gold transition-colors flex items-center gap-1.5">
                  <span>14-Acre Agribusiness Farm</span>
                </Link>
              </li>
              <li>
                <Link href="/portal" className="hover:text-brand-gold transition-colors flex items-center gap-1.5 text-brand-gold-light font-mono text-xs">
                  <span>→ Student / Parent Portal</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Student Life & Admissions */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-brand-gold font-bold">
              School Community
            </h4>
            <ul className="space-y-2 text-sm text-brand-beige-border">
              <li>
                <Link href="/about" className="hover:text-brand-gold transition-colors">
                  Our Founding Story
                </Link>
              </li>
              <li>
                <Link href="/student-life" className="hover:text-brand-gold transition-colors">
                  Boarding Facilities & Care
                </Link>
              </li>
              <li>
                <Link href="/student-life" className="hover:text-brand-gold transition-colors">
                  Day Scholar Bus Routes
                </Link>
              </li>
              <li>
                <Link href="/student-life" className="hover:text-brand-gold transition-colors">
                  Championship Athletics & Clubs
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-brand-gold transition-colors">
                  Fees Structure & Schedule
                </Link>
              </li>
              <li>
                <Link href="/news-events" className="hover:text-brand-gold transition-colors">
                  Term Calendar & Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Physical Contact & Office */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-brand-gold font-bold">
              Visit & Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-brand-beige-border">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-maroon-light flex-shrink-0 mt-0.5" />
                <span>Kayunga-Bbaale Road, Kayunga District, Central Region, Uganda</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-maroon-light flex-shrink-0" />
                <span>+256 700 000 000 / +256 772 000 000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-maroon-light flex-shrink-0" />
                <span>info@hiskidshighschool.ug</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-maroon-light flex-shrink-0" />
                <span>Office: Mon – Sat, 7:30 AM – 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-beige-border/70">
          <div>
            &copy; {new Date().getFullYear()} His Kids High School, Kayunga. All rights reserved.
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <Link href="/admissions" className="hover:text-brand-gold">Admissions Policy</Link>
            <span>·</span>
            <Link href="/about" className="hover:text-brand-gold">School Governance</Link>
            <span>·</span>
            <Link href="/contact" className="hover:text-brand-gold">Location Map</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
