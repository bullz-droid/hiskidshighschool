import React from "react";
import Link from "next/link";
import { 
  ShieldCheck, Award, Heart, BookOpen, Users, 
  MapPin, CheckCircle2, ArrowRight, Target, Sparkles
} from "lucide-react";
import { Crest } from "@/components/Crest";
import { BarkclothDivider } from "@/components/BarkclothDivider";
import { schoolLeaders } from "@/data/staffData";

export const metadata = {
  title: "About Us — His Kids High School, Kayunga",
  description: "Learn about the founding vision, mission, core values, leadership team, and 14-acre facilities at His Kids High School in Kayunga District, Uganda."
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-brand-green-deep text-brand-beige-light py-16 sm:py-24 border-b border-brand-maroon/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-0.5 w-8 bg-brand-gold inline-block" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-gold-light">
              About His Kids High School
            </span>
          </div>
          <h1 className="font-serif font-bold text-4xl sm:text-6xl text-brand-beige-light leading-tight">
            Rooted in Soil, <br />
            <span className="italic text-brand-gold">Aiming for the Sky</span>
          </h1>
          <p className="text-sm sm:text-base text-brand-beige-border/90 mt-4 max-w-2xl leading-relaxed">
            Founded in Kayunga District to deliver academic brilliance, certified vocational crafts, and Christ-centered character development.
          </p>
        </div>
      </section>

      <BarkclothDivider theme="on-cream" height={32} />

      {/* SECTION: FOUNDING STORY & VISION */}
      <section className="py-16 sm:py-20 bg-brand-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="font-mono text-xs font-bold text-brand-maroon uppercase tracking-wider">
                Our Genesis &amp; Philosophy
              </div>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-brand-ink leading-tight">
                Born out of a need for education that works in practice
              </h2>
              <p className="text-sm sm:text-base text-brand-ink-muted leading-relaxed">
                His Kids High School was established on open farmland along the Kayunga–Bbaale road with a clear mission: to bridge the historical divide between pure academic theory and practical vocational ability.
              </p>
              <p className="text-sm sm:text-base text-brand-ink-muted leading-relaxed">
                Under the Ministry of Education and Sports&apos; new Lower Secondary Competency-Based Curriculum, our learners are empowered to discover their innate talents, conduct scientific inquiry in modern laboratories, and graduate with tangible hand skills in tailoring, timber carpentry, or commercial agribusiness.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="p-6 bg-brand-beige rounded-2xl border border-brand-beige-border">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-brand-maroon text-brand-gold">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-brand-ink">
                    Our Vision
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-brand-ink-muted leading-relaxed">
                  To be Uganda&apos;s foremost secondary school model combining academic distinction, certified trade craftsmanship, and ethical servant leadership for national transformation.
                </p>
              </div>

              <div className="p-6 bg-brand-green-deep text-brand-beige-light rounded-2xl border border-brand-gold/30">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-brand-maroon text-brand-gold">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-brand-beige-light">
                    Our Mission
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-brand-beige-border leading-relaxed">
                  To nurture intellectual depth, technical skill, and moral integrity in every boy and girl through a holistic, student-centered curriculum rooted in community dignity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-16 bg-brand-beige border-y border-brand-beige-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-serif font-bold text-3xl text-brand-ink">
              Our Core Institutional Values
            </h2>
            <p className="text-xs sm:text-sm text-brand-ink-muted mt-2">
              The foundational pillars that guide every classroom, workshop, and residential house at His Kids High School.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Integrity & Faith",
                desc: "Uncompromising honesty, moral courage, and spiritual groundedness in all student interactions.",
                accent: "border-brand-maroon",
              },
              {
                title: "Industry & Hard Work",
                desc: "Valuing manual labor and intellectual tenacity equally as keys to lasting self-reliance.",
                accent: "border-brand-brown",
              },
              {
                title: "Academic Excellence",
                desc: "Continuous intellectual curiosity, critical inquiry, and top-tier UNEB examination outcomes.",
                accent: "border-brand-green-mid",
              },
              {
                title: "Community Service",
                desc: "Instilling a deep sense of responsibility to uplift Kayunga District and the nation.",
                accent: "border-brand-gold",
              },
            ].map((val, idx) => (
              <div
                key={idx}
                className={"p-6 bg-white rounded-xl border-t-4 " + val.accent + " border border-brand-beige-border shadow-subtle"}
              >
                <div className="font-serif font-bold text-lg text-brand-ink">
                  {val.title}
                </div>
                <p className="text-xs text-brand-ink-muted mt-2 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP TEAM */}
      <section className="py-16 sm:py-24 bg-brand-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="font-mono text-xs font-bold text-brand-maroon uppercase tracking-wider mb-2">
              Executive Administration &amp; Faculty
            </div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-brand-ink">
              Experienced Educators Dedicated to Your Child
            </h2>
            <p className="text-sm text-brand-ink-muted mt-2">
              Our school leadership brings decades of national teaching expertise and pastoral mentorship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schoolLeaders.map((leader, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-2xl border border-brand-beige-border hover:border-brand-maroon/40 shadow-subtle transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-full bg-brand-green-deep text-brand-gold flex items-center justify-center font-serif font-bold text-lg mb-4">
                  {leader.name.split(" ").pop()?.charAt(0) || "H"}
                </div>
                <h3 className="font-serif font-bold text-lg text-brand-ink">
                  {leader.name}
                </h3>
                <div className="font-mono text-xs text-brand-maroon font-semibold mt-0.5">
                  {leader.role}
                </div>
                <div className="text-[11px] font-mono text-brand-ink-light mt-1">
                  {leader.qualification}
                </div>
                <p className="text-xs text-brand-ink-muted mt-3 leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADMISSIONS BANNER */}
      <section className="py-14 bg-brand-maroon text-brand-beige-light text-center px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-brand-beige-light">
            Become Part of Our Inspiring Community
          </h2>
          <p className="text-sm text-brand-beige-border max-w-xl mx-auto leading-relaxed">
            Admissions are open for Senior One, Senior Five, and mid-stream transfers. We look forward to meeting your family.
          </p>
          <div className="pt-2">
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-brand-green-dark font-bold text-xs px-7 py-3 rounded-full shadow-md transition-all"
            >
              <Award className="w-4 h-4" />
              <span>Apply for Admission Today</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}