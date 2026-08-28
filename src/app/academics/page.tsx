import React from "react";
import Link from "next/link";
import { 
  BookOpen, Award, CheckCircle2, FileText, ArrowRight, 
  GraduationCap, Sparkles, Clock, HelpCircle, Layers
} from "lucide-react";
import { BarkclothDivider } from "@/components/BarkclothDivider";
import { CurriculumTabs } from "@/components/CurriculumTabs";

export const metadata = {
  title: "Academics & Curriculum — His Kids High School, Kayunga",
  description: "Comprehensive guide to Uganda's New Lower Secondary Competency-Based Curriculum (CBC) and A-Level Science and Arts Combinations at His Kids High School."
};

export default function AcademicsPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-brand-green-deep text-brand-beige-light py-16 sm:py-24 border-b border-brand-maroon/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-0.5 w-8 bg-brand-gold inline-block" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-gold-light">
              Academic Excellence
            </span>
          </div>
          <h1 className="font-serif font-bold text-4xl sm:text-6xl text-brand-beige-light leading-tight">
            Curriculum &amp; <br />
            <span className="italic text-brand-gold">Learning Pathways</span>
          </h1>
          <p className="text-sm sm:text-base text-brand-beige-border/90 mt-4 max-w-2xl leading-relaxed">
            Full compliance with Uganda&apos;s New Lower Secondary Competency-Based Curriculum (CBC) and advanced secondary combinations under the Uganda National Examinations Board (UNEB).
          </p>
        </div>
      </section>

      <BarkclothDivider theme="on-cream" height={32} />

      {/* CBC INTRODUCTION */}
      <section className="py-16 bg-brand-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="font-mono text-xs font-bold text-brand-maroon uppercase tracking-wider">
                Lower Secondary Framework (Senior 1 – Senior 4)
              </div>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-brand-ink leading-tight">
                How Uganda&apos;s New Competency-Based Curriculum Works at His Kids
              </h2>
              <p className="text-sm sm:text-base text-brand-ink-muted leading-relaxed">
                The new curriculum focuses on what learners <strong>can do</strong> rather than merely what they can memorize. Classroom learning is organized around hands-on activities, real-world project portfolios, critical thinking, and continuous formative assessment.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white rounded-xl border border-brand-beige-border">
                  <div className="font-mono text-xs font-bold text-brand-maroon uppercase">
                    20% Continuous Assessment
                  </div>
                  <p className="text-xs text-brand-ink-muted mt-1">
                    Student project work, practical laboratory records, and activity scores submitted directly to UNEB throughout S.1–S.4.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-brand-beige-border">
                  <div className="font-mono text-xs font-bold text-brand-green-deep uppercase">
                    80% Summative UCE Exam
                  </div>
                  <p className="text-xs text-brand-ink-muted mt-1">
                    End of cycle national examinations assessing applied knowledge, problem-solving, and synthesis.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 bg-brand-beige rounded-2xl border border-brand-beige-border space-y-4">
              <div className="font-serif font-bold text-xl text-brand-ink">
                Our 5 Academic Pillars
              </div>
              <ul className="space-y-2.5 text-xs text-brand-ink">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-maroon flex-shrink-0 mt-0.5" />
                  <span><strong>Learner-Centered Inquiry:</strong> Discussion-led workshops rather than rote copying.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-maroon flex-shrink-0 mt-0.5" />
                  <span><strong>Integrated ICT:</strong> Computer simulations and data recording integrated into sciences and arts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-maroon flex-shrink-0 mt-0.5" />
                  <span><strong>Practical Project Portfolios:</strong> Every student builds real commercial or community solutions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-maroon flex-shrink-0 mt-0.5" />
                  <span><strong>Tertiary Hand Skills:</strong> Vocational certification in tailoring, carpentry, or farming.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-maroon flex-shrink-0 mt-0.5" />
                  <span><strong>Remedial Clinics:</strong> Dedicated afternoon tutorials for learners needing extra math and science support.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE SUBJECTS & COMBINATIONS */}
      <section className="py-16 bg-white border-y border-brand-beige-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-brand-ink">
              Explore All Subjects &amp; Combinations
            </h2>
            <p className="text-xs sm:text-sm text-brand-ink-muted mt-2">
              Browse through our O-Level CBC subject catalog and A-Level combination matrix.
            </p>
          </div>

          <CurriculumTabs />
        </div>
      </section>

      {/* DAILY TIMETABLE & CALENDAR OVERVIEW */}
      <section className="py-16 bg-brand-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Daily Routine */}
            <div className="p-6 sm:p-8 bg-brand-beige rounded-2xl border border-brand-beige-border space-y-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand-maroon" />
                <h3 className="font-serif font-bold text-xl text-brand-ink">
                  A Day at His Kids High School
                </h3>
              </div>
              <div className="space-y-2 text-xs font-mono text-brand-ink divide-y divide-brand-beige-border">
                <div className="flex justify-between pt-2"><span>05:30 AM – 06:15 AM</span><span className="text-brand-maroon font-bold">Dawn Devotions &amp; Personal Hygiene</span></div>
                <div className="flex justify-between pt-2"><span>06:30 AM – 07:30 AM</span><span>Morning Prep &amp; Remedial Clinics</span></div>
                <div className="flex justify-between pt-2"><span>07:30 AM – 08:00 AM</span><span>Breakfast &amp; Assembly Parade</span></div>
                <div className="flex justify-between pt-2"><span>08:00 AM – 01:00 PM</span><span className="text-brand-green-deep font-bold">Morning Academic Block (Lessons 1–5)</span></div>
                <div className="flex justify-between pt-2"><span>01:00 PM – 02:00 PM</span><span>Lunch &amp; Mid-Day Break</span></div>
                <div className="flex justify-between pt-2"><span>02:00 PM – 04:30 PM</span><span className="text-brand-brown font-bold">Vocational Trade Workshops / Science Labs</span></div>
                <div className="flex justify-between pt-2"><span>04:30 PM – 06:00 PM</span><span className="text-brand-gold-dark font-bold">Sports Leagues, Athletics &amp; Clubs</span></div>
                <div className="flex justify-between pt-2"><span>07:30 PM – 09:45 PM</span><span>Evening Supervised Prep</span></div>
              </div>
            </div>

            {/* UNEB Results Milestone */}
            <div className="p-6 sm:p-8 bg-brand-green-deep text-brand-beige-light rounded-2xl border border-brand-gold/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-brand-gold" />
                  <h3 className="font-serif font-bold text-xl text-brand-beige-light">
                    UNEB Examination Track Record
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-brand-beige-border leading-relaxed mt-3">
                  His Kids High School consistently ranks among the top-performing secondary schools in Kayunga District, maintaining a 96% distinction rate across science practicals, mathematics, and humanities.
                </p>
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="p-3.5 bg-brand-green-dark rounded-xl border border-white/10 text-center">
                    <div className="font-mono text-2xl font-bold text-brand-gold">96%</div>
                    <div className="text-[11px] text-brand-beige-border mt-1">Div 1 &amp; 2 Pass Rate</div>
                  </div>
                  <div className="p-3.5 bg-brand-green-dark rounded-xl border border-white/10 text-center">
                    <div className="font-mono text-2xl font-bold text-brand-gold">100%</div>
                    <div className="text-[11px] text-brand-beige-border mt-1">Vocational Trade Certification</div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  href="/admissions"
                  className="w-full text-center block bg-brand-gold hover:bg-brand-gold-light text-brand-green-dark font-bold text-xs py-3 rounded-xl transition-colors"
                >
                  Apply for Admission
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}