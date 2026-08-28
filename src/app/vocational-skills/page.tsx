import React from "react";
import Link from "next/link";
import { 
  Scissors, Hammer, Sprout, CheckCircle2, Award, 
  ArrowRight, ShieldCheck, Sparkles, ShoppingBag
} from "lucide-react";
import { BarkclothDivider } from "@/components/BarkclothDivider";
import { vocationalTrades } from "@/data/vocationalData";

export const metadata = {
  title: "Vocational Skills & Hands-On Trades — His Kids High School",
  description: "Learn about our signature tertiary vocational crafts: Tailoring & Garment Design, Carpentry & Timber Joinery, and 14-Acre Commercial Agribusiness."
};

export default function VocationalSkillsPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-brand-brown-dark text-brand-beige-light py-16 sm:py-24 border-b border-brand-maroon/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-0.5 w-8 bg-brand-gold inline-block" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-gold-light">
              Tertiary Hand Skills &amp; Enterprise
            </span>
          </div>
          <h1 className="font-serif font-bold text-4xl sm:text-6xl text-brand-beige-light leading-tight">
            Hands That Build, <br />
            <span className="italic text-brand-gold">Skills That Last</span>
          </h1>
          <p className="text-sm sm:text-base text-brand-beige-border/90 mt-4 max-w-2xl leading-relaxed">
            Every learner trains in a certified vocational trade — graduating with an accredited craft in their hands alongside their UCE / UACE national examination certificates.
          </p>
        </div>
      </section>

      <BarkclothDivider theme="on-cream" height={32} />

      {/* DETAILED TRADES SHOWCASE */}
      <section className="py-16 sm:py-20 bg-brand-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {vocationalTrades.map((trade, index) => (
            <div
              key={trade.id}
              id={trade.id}
              className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-brand-beige-border shadow-card scroll-mt-24"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-beige text-brand-maroon font-mono text-xs font-bold uppercase">
                    Trade Track 0{index + 1}
                  </div>
                  <h2 className="font-serif font-bold text-3xl sm:text-4xl text-brand-ink">
                    {trade.title}
                  </h2>
                  <p className="text-sm font-medium text-brand-maroon italic">
                    &ldquo;{trade.tagline}&rdquo;
                  </p>
                  <p className="text-sm sm:text-base text-brand-ink-muted leading-relaxed">
                    {trade.description}
                  </p>

                  {/* Modules */}
                  <div className="pt-2">
                    <h4 className="font-mono text-xs font-bold text-brand-green-deep uppercase tracking-wider mb-2">
                      Core Practical Modules Covered:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-brand-ink">
                      {trade.modules.map((mod, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-maroon flex-shrink-0 mt-0.5" />
                          <span>{mod}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Equipment & Student Project Impact Box */}
                <div className="lg:col-span-5 space-y-4 bg-brand-beige p-6 rounded-2xl border border-brand-beige-border">
                  <h4 className="font-mono text-xs font-bold text-brand-brown uppercase tracking-wider">
                    Workshop Equipment &amp; Machinery:
                  </h4>
                  <ul className="text-xs text-brand-ink-muted space-y-1.5 list-disc list-inside">
                    {trade.equipment.map((eq, i) => (
                      <li key={i}>{eq}</li>
                    ))}
                  </ul>

                  <div className="pt-3 border-t border-brand-beige-border">
                    <h4 className="font-mono text-xs font-bold text-brand-maroon uppercase tracking-wider mb-2">
                      Featured Student Production:
                    </h4>
                    {trade.studentProjects.map((proj, i) => (
                      <div key={i} className="p-3 bg-white rounded-xl border border-brand-beige-border mb-2 text-xs">
                        <div className="font-bold text-brand-ink">{proj.title}</div>
                        <p className="text-brand-ink-muted mt-0.5">{proj.description}</p>
                        <div className="text-[11px] text-brand-green-deep font-semibold mt-1">
                          ✓ Impact: {proj.impact}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <div className="text-[11px] font-mono font-bold text-brand-ink-light uppercase">
                      Direct Career Paths:
                    </div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {trade.careerOutcomes.map((co, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-white border border-brand-beige-border text-brand-ink">
                          {co}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-14 bg-brand-green-deep text-brand-beige-light text-center px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-brand-beige-light">
            Give Your Child Skills for a Lifetime
          </h2>
          <p className="text-sm text-brand-beige-border max-w-xl mx-auto leading-relaxed">
            Select your learner&apos;s preferred vocational trade track during online admission.
          </p>
          <div className="pt-2">
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 bg-brand-maroon hover:bg-brand-maroon-light text-brand-beige-light font-bold text-xs px-7 py-3 rounded-full shadow-md transition-all"
            >
              <span>Apply Online with Vocational Choice</span>
              <ArrowRight className="w-4 h-4 text-brand-gold" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}