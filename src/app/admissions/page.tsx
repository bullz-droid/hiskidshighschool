import React from "react";
import Link from "next/link";
import { 
  GraduationCap, CheckCircle2, FileText, Calculator, 
  HelpCircle, Phone, Mail, ShieldCheck, ArrowRight, Download
} from "lucide-react";
import { BarkclothDivider } from "@/components/BarkclothDivider";
import { AdmissionWizard } from "@/components/AdmissionWizard";
import { FeesCalculator } from "@/components/FeesCalculator";

export const metadata = {
  title: "Admissions & Fees Structure — His Kids High School, Kayunga",
  description: "Apply online for Senior One (S.1), Senior Five (S.5), or mid-stream transfers. View entry requirements, term fee schedules, and interactive fee calculator."
};

export default function AdmissionsPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-brand-maroon text-brand-beige-light py-16 sm:py-24 border-b border-brand-maroon-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-0.5 w-8 bg-brand-gold inline-block" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-gold-light">
              Enrollment &amp; Admissions
            </span>
          </div>
          <h1 className="font-serif font-bold text-4xl sm:text-6xl text-brand-beige-light leading-tight">
            Join the His Kids <br />
            <span className="italic text-brand-gold">Family in 2026</span>
          </h1>
          <p className="text-sm sm:text-base text-brand-beige-border mt-4 max-w-2xl leading-relaxed">
            We welcome applications for Senior One, Senior Five, and mid-stream transfers across both Day and Boarding sections.
          </p>
        </div>
      </section>

      <BarkclothDivider theme="on-cream" height={32} />

      {/* SECTION: INTERACTIVE ONLINE ADMISSION FORM WIZARD */}
      <section className="py-16 sm:py-20 bg-brand-beige-light" id="apply">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-maroon/10 text-brand-maroon font-mono text-xs font-bold uppercase mb-2">
              Online Application Portal
            </div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-brand-ink">
              Step-by-Step Online Admission
            </h2>
            <p className="text-xs sm:text-sm text-brand-ink-muted mt-2">
              Complete the 4 simple steps below to register your learner and generate your official reference code.
            </p>
          </div>

          <AdmissionWizard />
        </div>
      </section>

      {/* SECTION: ENTRY REQUIREMENTS CHECKLIST */}
      <section className="py-16 bg-brand-beige border-y border-brand-beige-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6 space-y-4">
              <div className="font-mono text-xs font-bold text-brand-maroon uppercase tracking-wider">
                Admission Requirements
              </div>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-brand-ink">
                Documents Checklist for Interview Day
              </h3>
              <p className="text-xs sm:text-sm text-brand-ink-muted leading-relaxed">
                Parents/guardians are required to bring original and photocopy sets of the following credentials when reporting to the admissions desk:
              </p>

              <div className="space-y-3 pt-2 text-xs text-brand-ink">
                <div className="p-3 bg-white rounded-xl border border-brand-beige-border flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-maroon flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>For Senior One (S.1):</strong> Primary Leaving Examination (PLE) Result Slip or Testimonial and Primary Leaving Certificate.
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-brand-beige-border flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-maroon flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>For Senior Five (S.5):</strong> Uganda Certificate of Education (UCE) Result Slip with pass marks in chosen combination subjects.
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-brand-beige-border flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-maroon flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Transfers (S.2, S.3, S.6):</strong> Continuous assessment learner progress records, previous term report card, and letter of recommendation.
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-brand-beige-border flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-maroon flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>General Essentials:</strong> 2 recent passport-size photos of learner, 1 passport photo of guardian, and filled medical history form.
                  </div>
                </div>
              </div>
            </div>

            {/* Fees Calculator Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="font-mono text-xs font-bold text-brand-green-deep uppercase tracking-wider">
                Fee Billing Calculator
              </div>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-brand-ink">
                Calculate Total Term Expenses
              </h3>
              <FeesCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* ADMISSION CONTACT BAR */}
      <section className="py-12 bg-brand-green-deep text-brand-beige-light text-center px-4">
        <div className="max-w-2xl mx-auto space-y-3">
          <h3 className="font-serif font-bold text-2xl text-brand-beige-light">
            Need Guidance with Your Application?
          </h3>
          <p className="text-xs text-brand-beige-border">
            Our admissions counselors are available Monday through Saturday to answer questions regarding bursaries, installment plans, and school bus routes.
          </p>
          <div className="pt-2 font-mono text-sm text-brand-gold font-bold">
            📞 +256 700 000 000 · ✉️ admissions@hiskidshighschool.ug
          </div>
        </div>
      </section>
    </div>
  );
}