"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Crest } from "./Crest";
import { 
  Menu, X, Phone, MapPin, Sparkles, BookOpen, 
  Award, Users, Compass, ChevronRight, GraduationCap,
  Calendar, Layers, ShieldCheck
} from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Academics", href: "/academics" },
    { name: "Vocational Skills", href: "/vocational-skills" },
    { name: "Student Life", href: "/student-life" },
    { name: "Admissions & Fees", href: "/admissions" },
    { name: "News & Events", href: "/news-events" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Urgent Alert Bar */}
      <aside aria-label="Announcement" className="bg-brand-maroon text-brand-beige-light text-xs py-2 px-4 border-b border-brand-maroon-deep">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-brand-gold text-brand-green-dark tracking-wide uppercase">
              2026 Admissions Open
            </span>
            <span className="hidden sm:inline font-medium">
              Senior 1 & Senior 5 Day & Boarding Intake ongoing · Kayunga District, Uganda
            </span>
            <span className="sm:hidden font-medium">S.1 & S.5 Intake ongoing</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] opacity-90">
            <a href="tel:+256757870025" className="flex items-center gap-1 hover:text-brand-gold transition-colors">
              <Phone className="w-3 h-3" />
              <span>+256 757 870 025 (Airtel)</span>
            </a>
            <a href="tel:+256775623621" className="flex items-center gap-1 hover:text-brand-gold transition-colors">
              <Phone className="w-3 h-3" />
              <span>+256 775 623 621 (MTN)</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Header */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-brand-green-deep/95 backdrop-blur-md py-3 shadow-elevated border-b border-brand-maroon/30"
            : "bg-brand-green-deep py-4 border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          {/* Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="transition-transform group-hover:scale-105 duration-200">
              <Crest className="w-11 h-11 sm:w-12 sm:h-12" />
            </div>
            <div>
              <div className="font-serif font-bold text-lg sm:text-xl text-brand-beige-light leading-tight tracking-tight flex items-center gap-1.5">
                <span>His Kids High School</span>
              </div>
              <div className="font-mono text-[10px] sm:text-[11px] tracking-wider text-brand-gold-light uppercase flex items-center gap-1">
                <span>Kayunga District</span>
                <span className="text-brand-beige-border">·</span>
                <span>Uganda</span>
              </div>
            </div>
          </Link>

          {/* Right side container to group nav and actions */}
          <div className="flex items-center gap-6 xl:gap-8 justify-end flex-1">
            {/* Desktop Nav Links */}
            <nav className="hidden xl:flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-medium transition-colors relative py-1 ${
                      isActive
                        ? "text-brand-gold-light font-semibold"
                        : "text-brand-beige-light/85 hover:text-brand-gold"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center flex-shrink-0">
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 bg-brand-maroon hover:bg-brand-maroon-light text-brand-beige-light text-xs font-semibold px-5 py-2.5 rounded-full border border-brand-maroon-light/40 shadow-sm transition-all duration-200 hover:shadow-md hover:translate-y-[-1px]"
              >
                <GraduationCap className="w-4 h-4 text-brand-gold" />
                <span>Apply Online</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-brand-beige-light hover:bg-brand-green-mid transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold ml-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sliding Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 xl:hidden bg-black/60 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-brand-green-deep border-l border-brand-maroon/40 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-brand-green-mid">
                <div className="flex items-center gap-2.5">
                  <Crest className="w-9 h-9" />
                  <div>
                    <div className="font-serif font-bold text-base text-brand-beige-light">
                      His Kids High School
                    </div>
                    <div className="text-[10px] font-mono text-brand-gold-light">
                      Kayunga, Uganda
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-brand-beige-light/80 hover:text-white rounded-lg hover:bg-brand-green-mid"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-6 flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors ${
                        isActive
                          ? "bg-brand-maroon text-brand-beige-light font-semibold"
                          : "text-brand-beige-light/85 hover:bg-brand-green-mid hover:text-white"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className={`w-4 h-4 ${isActive ? "text-brand-gold" : "opacity-40"}`} />
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-6 border-t border-brand-green-mid space-y-3">
              <Link
                href="/admissions"
                className="w-full flex items-center justify-center gap-2 bg-brand-maroon hover:bg-brand-maroon-light text-brand-beige-light py-3 rounded-xl font-semibold text-sm shadow-md transition-colors"
              >
                <GraduationCap className="w-4 h-4 text-brand-gold" />
                <span>Start Online Application</span>
              </Link>
              <div className="text-center text-[11px] text-brand-beige-light/60 pt-2 font-mono flex flex-col gap-1">
                <span>📞 +256 757 870 025 (Airtel)</span>
                <span>📞 +256 775 623 621 (MTN)</span>
                <span>Kayunga, Uganda</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
