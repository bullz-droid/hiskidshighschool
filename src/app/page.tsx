import React from "react";
import Link from "next/link";
import { 
  GraduationCap, BookOpen, Hammer, Scissors, Sprout, 
  Trophy, ShieldCheck, ArrowRight, CheckCircle2, 
  Calendar, MapPin, Sparkles, Star, Users, Phone, FileText
} from "lucide-react";
import { Crest } from "@/components/Crest";
import { BarkclothDivider } from "@/components/BarkclothDivider";
import { StatCounter } from "@/components/StatCounter";
import { CurriculumTabs } from "@/components/CurriculumTabs";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { CampusMapModal } from "@/components/CampusMapModal";
import { FeesCalculator } from "@/components/FeesCalculator";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-brand-green-deep via-brand-green-deep to-brand-green-dark text-brand-beige-light pt-20 sm:pt-28 pb-0 overflow-hidden border-b border-brand-maroon/30">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-maroon/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-brand-green-emerald/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-maroon/80 border border-brand-maroon-light/60 text-brand-gold-light text-xs font-mono tracking-wider uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
            <span>Kayunga District, Uganda · Est. For Learners Who Build Things</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-6">
              <h1 className="font-serif font-bold text-4xl sm:text-6xl lg:text-7xl text-brand-beige-light leading-[1.08] tracking-tight">
                His Kids <br />
                <span className="italic font-medium text-brand-gold">High School</span>
              </h1>

              <p className="text-base sm:text-lg text-brand-beige-light/90 font-normal max-w-2xl leading-relaxed">
                Mixed day &amp; boarding · O-Level and A-Level · Uganda&apos;s new competency-based curriculum, taught in full — Arts and Sciences given equal weight and equal excellence.
              </p>

              <p className="text-xs sm:text-sm text-brand-beige-border/80 max-w-xl leading-relaxed">
                Every learner leaves with more than an exam certificate: a certified tertiary trade in their hands, an athletic team behind them, and a curriculum built on what the Ministry of Education and Sports asks of Uganda&apos;s next generation.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-2.5 bg-brand-maroon hover:bg-brand-maroon-light text-brand-beige-light font-semibold text-sm px-6 py-3.5 rounded-full shadow-elevated border border-brand-maroon-light/40 transition-all duration-200 hover:translate-y-[-2px]"
                >
                  <GraduationCap className="w-5 h-5 text-brand-gold" />
                  <span>Apply for 2026 Intake</span>
                </Link>
                <Link
                  href="/academics"
                  className="inline-flex items-center gap-2 bg-brand-beige/10 hover:bg-brand-beige/20 text-brand-beige-light font-semibold text-sm px-6 py-3.5 rounded-full border border-brand-beige-border/40 transition-all duration-200 hover:translate-y-[-2px]"
                >
                  <BookOpen className="w-4 h-4 text-brand-gold-light" />
                  <span>Explore Curriculum</span>
                </Link>
                <CampusMapModal />
              </div>
            </div>

            <div className="hidden lg:flex lg:col-span-4 justify-center items-center">
              <div className="relative w-full">
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative rounded-2xl overflow-hidden h-64 shadow-elevated border border-brand-maroon/30">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/smiling-student.jpg"
                      alt="A joyful His Kids High School student holding textbooks"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-green-deep/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="font-mono text-[10px] text-brand-gold uppercase tracking-wider">Ready to Learn</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="relative rounded-2xl overflow-hidden h-36 shadow-elevated border border-brand-gold/20">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/classroom-hands.jpg"
                        alt="Students raising hands eagerly in class"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/70 via-transparent to-transparent" />
                      <div className="absolute bottom-2 left-2 right-2">
                        <span className="font-mono text-[10px] text-brand-gold-light uppercase tracking-wider">Active Classrooms</span>
                      </div>
                    </div>
                    <div className="p-4 rounded-2xl bg-brand-green-dark/90 border border-brand-maroon/40 text-center shadow-card flex-1">
                      <div className="w-12 h-12 mx-auto mb-2 drop-shadow-lg">
                        <Crest className="w-full h-full" />
                      </div>
                      <div className="font-mono text-[10px] text-brand-gold-light italic leading-snug">
                        &ldquo;Minds, Hands &amp; Hearts&rdquo;
                      </div>
                      <div className="flex items-center justify-center gap-1.5 mt-2 text-[10px] font-mono text-brand-beige-border">
                        <ShieldCheck className="w-3 h-3 text-brand-gold" />
                        <span>UNEB Accredited</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-24 sm:h-32 mt-12 relative overflow-hidden" aria-hidden="true">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-full">
            <rect x="0" y="95" width="1200" height="25" fill="#0b2016" />
            <g fill="#1c5236">
              <g className="blade"><path d="M40 120 Q30 70 48 40 Q60 70 52 120 Z" /></g>
              <g className="blade"><path d="M90 120 Q78 60 100 25 Q114 65 104 120 Z" /></g>
              <g className="blade"><path d="M140 120 Q130 75 150 45 Q162 78 154 120 Z" /></g>
              <g className="blade"><path d="M230 120 Q218 65 240 30 Q254 70 244 120 Z" /></g>
              <g className="blade"><path d="M280 120 Q270 70 288 40 Q300 70 292 120 Z" /></g>
              <g className="blade"><path d="M330 120 Q320 78 342 48 Q354 80 346 120 Z" /></g>
              <g className="blade"><path d="M420 120 Q408 62 430 35 Q444 66 434 120 Z" /></g>
              <g className="blade"><path d="M470 120 Q460 70 478 42 Q490 70 482 120 Z" /></g>
              <g className="blade"><path d="M520 120 Q510 76 532 46 Q544 78 536 120 Z" /></g>
              <g className="blade"><path d="M610 120 Q598 62 620 38 Q634 68 624 120 Z" /></g>
              <g className="blade"><path d="M660 120 Q650 70 668 42 Q680 70 672 120 Z" /></g>
              <g className="blade"><path d="M710 120 Q700 76 722 46 Q734 78 726 120 Z" /></g>
              <g className="blade"><path d="M800 120 Q788 62 810 38 Q824 68 814 120 Z" /></g>
              <g className="blade"><path d="M850 120 Q840 70 858 42 Q870 70 862 120 Z" /></g>
              <g className="blade"><path d="M900 120 Q890 76 912 46 Q924 78 916 120 Z" /></g>
              <g className="blade"><path d="M990 120 Q978 62 1000 38 Q1014 68 1004 120 Z" /></g>
              <g className="blade"><path d="M1040 120 Q1030 70 1048 42 Q1060 70 1052 120 Z" /></g>
              <g className="blade"><path d="M1090 120 Q1080 76 1102 46 Q1114 78 1106 120 Z" /></g>
              <g className="blade"><path d="M1150 120 Q1138 62 1160 38 Q1174 68 1164 120 Z" /></g>
            </g>
          </svg>
        </div>
      </section>

      <BarkclothDivider theme="on-cream" height={34} />

      {/* ABOUT & METRICS */}
      <section className="py-16 sm:py-24 bg-brand-beige-light" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-0.5 w-8 bg-brand-maroon inline-block" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-maroon">
              Our Vision &amp; Story
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-5">
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-brand-ink leading-tight">
                Educating the whole child, from Kayunga to the world
              </h2>

              <p className="font-serif text-lg sm:text-xl text-brand-ink leading-relaxed text-brand-maroon/90 font-medium">
                We built His Kids High School around one conviction — that a truly good education should leave a learner able to think deeply, to make with their hands, and to belong to a team.
              </p>

              <p className="text-sm sm:text-base text-brand-ink-muted leading-relaxed">
                Set on 14 acres of open land in Kayunga District, we run a full mixed day and boarding secondary programme for boys and girls. We teach Ordinary and Advanced Level under Uganda&apos;s new competency-based curriculum exactly as set out by the Ministry of Education and Sports — Arts and Sciences given equal weight, modern facilities, and dedicated mentorship.
              </p>

              <p className="text-sm sm:text-base text-brand-ink-muted leading-relaxed">
                Alongside regular academic lessons, every learner masters a certified tertiary hand trade — tailoring, timber carpentry, or modern agribusiness — and competes in school sport weekly.
              </p>

              {/* Student writing image */}
              <div className="relative rounded-2xl overflow-hidden h-48 shadow-card border border-brand-beige-border mt-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/student-writing.jpg"
                  alt="A dedicated student studying and writing notes"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-green-deep/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="font-mono text-[10px] text-brand-beige-light uppercase tracking-wider bg-brand-green-deep/80 px-2 py-1 rounded-full">Focused. Determined. Excellent.</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-maroon hover:text-brand-maroon-dark group"
                >
                  <span>Read full founding history &amp; leadership message</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <StatCounter
                target={620}
                suffix="+"
                label="Enrolled Learners"
                subtext="Boys & girls in mixed day & boarding streams"
                accentColor="maroon"
              />
              <StatCounter
                target={96}
                suffix="%"
                label="UNEB Pass Rate"
                subtext="UCE & UACE first and second division distinctions"
                accentColor="green"
              />
              <StatCounter
                target={14}
                suffix=" Acres"
                label="School & Farm"
                subtext="Spacious campus with sports fields & demonstration farm"
                accentColor="brown"
              />
              <StatCounter
                target={3}
                suffix=" Trades"
                label="Certified Crafts"
                subtext="Tailoring, timber carpentry, commercial agribusiness"
                accentColor="gold"
              />
            </div>
          </div>
        </div>
      </section>

      <BarkclothDivider theme="on-green" height={34} />

      {/* CURRICULUM SECTION */}
      <section className="py-16 sm:py-24 bg-brand-green-deep text-brand-beige-light" id="curriculum">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-maroon/80 border border-brand-maroon-light/40 text-brand-gold-light text-xs font-mono uppercase tracking-wider mb-3">
              Competency-Based Academics
            </div>
            <h2 className="font-serif font-bold text-3xl sm:text-5xl text-brand-beige-light">
              One school, every subject, both levels
            </h2>
            <p className="text-sm sm:text-base text-brand-beige-border/90 mt-4 leading-relaxed">
              We teach the full Lower Secondary Competency-Based Curriculum through O-Level (S.1–S.4), followed by both Science and Arts combinations at A-Level (S.5–S.6).
            </p>
          </div>

          <div className="bg-brand-beige-light text-brand-ink p-6 sm:p-10 rounded-3xl shadow-elevated border border-brand-maroon/20">
            <CurriculumTabs />
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/academics"
              className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-brand-green-dark font-bold text-xs px-6 py-3 rounded-full shadow-md transition-colors"
            >
              <span>View Full Examination &amp; Assessment Guide</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <BarkclothDivider theme="on-cream" height={34} />

      {/* VOCATIONAL TRADES */}
      <section className="py-16 sm:py-24 bg-brand-beige-light" id="skills">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-0.5 w-8 bg-brand-brown inline-block" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-brown">
              Hands That Build · Skills That Last
            </span>
          </div>

          <div className="max-w-3xl mb-12">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-brand-ink">
              Tertiary craftsmanship alongside classroom theory
            </h2>
            <p className="text-sm sm:text-base text-brand-ink-muted mt-3 leading-relaxed">
              Every learner trains in a certified vocational trade — a craft they can stand on the day they leave school, regardless of exam results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-7 border-2 border-brand-maroon/30 shadow-subtle hover:shadow-elevated transition-all duration-300 hover:translate-y-[-4px] flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-brand-maroon/10 text-brand-maroon flex items-center justify-center mb-5">
                  <Scissors className="w-7 h-7" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-brand-ink">
                  Tailoring &amp; Garment Design
                </h3>
                <p className="text-xs sm:text-sm text-brand-ink-muted mt-3 leading-relaxed">
                  Precision pattern drafting, garment cutting, and sewing on industrial machines. Learners design and manufacture uniforms, formal wear, and traditional African garments.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-brand-beige-border">
                <Link
                  href="/vocational-skills"
                  className="text-xs font-bold text-brand-maroon hover:underline flex items-center justify-between"
                >
                  <span>Explore Tailoring Syllabus</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-7 border-2 border-brand-brown/30 shadow-subtle hover:shadow-elevated transition-all duration-300 hover:translate-y-[-4px] flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-brand-brown/10 text-brand-brown flex items-center justify-center mb-5">
                  <Hammer className="w-7 h-7" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-brand-ink">
                  Carpentry &amp; Timber Joinery
                </h3>
                <p className="text-xs sm:text-sm text-brand-ink-muted mt-3 leading-relaxed">
                  Timber seasoning, jointing, framing, and fine furniture manufacturing in a fully equipped woodwork shop. Students build actual classroom desks, cabinets, and apiary hives.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-brand-beige-border">
                <Link
                  href="/vocational-skills"
                  className="text-xs font-bold text-brand-brown hover:underline flex items-center justify-between"
                >
                  <span>Explore Carpentry Syllabus</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-7 border-2 border-brand-green-mid/30 shadow-subtle hover:shadow-elevated transition-all duration-300 hover:translate-y-[-4px] flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-brand-green-mid/10 text-brand-green-mid flex items-center justify-center mb-5">
                  <Sprout className="w-7 h-7" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-brand-ink">
                  Agribusiness &amp; Modern Farming
                </h3>
                <p className="text-xs sm:text-sm text-brand-ink-muted mt-3 leading-relaxed">
                  Commercial crop science, poultry brooding, zero-grazing cattle, and solar drip irrigation across 14 campus acres — from seed germination to market financial accounting.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-brand-beige-border">
                <Link
                  href="/vocational-skills"
                  className="text-xs font-bold text-brand-green-mid hover:underline flex items-center justify-between"
                >
                  <span>Explore Farm Agribusiness</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BarkclothDivider theme="on-maroon" height={34} />

      {/* CO-CURRICULAR */}
      <section className="py-16 sm:py-24 bg-brand-maroon-deep text-brand-beige-light" id="co-curricular">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green-deep border border-brand-gold/40 text-brand-gold-light text-xs font-mono uppercase tracking-wider mb-3">
              Play &amp; Team Spirit
            </div>
            <h2 className="font-serif font-bold text-3xl sm:text-5xl text-brand-beige-light">
              Champions on the field, leaders for life
            </h2>
            <p className="text-sm sm:text-base text-brand-beige-border mt-3 leading-relaxed">
              Sport and creative arts run every single week for all learners across our 4 competitive houses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-gradient-to-br from-brand-green-deep to-brand-green-dark border border-brand-gold/30 shadow-card flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="flex justify-between items-start">
                  <div className="font-mono text-xs text-brand-gold uppercase tracking-wider font-bold">
                    Soccer Arena
                  </div>
                  <Trophy className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-brand-beige-light mt-4">
                  Football
                </h3>
                <p className="text-xs sm:text-sm text-brand-beige-border/90 mt-2">
                  Boys&apos; and girls&apos; teams, termly inter-house league, and regional Kayunga championship fixtures.
                </p>
              </div>
              <div className="text-[11px] font-mono text-brand-gold-light pt-4">
                4 Championship Pitches
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-gradient-to-br from-brand-maroon to-brand-maroon-deep border border-brand-maroon-light/40 shadow-card flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="flex justify-between items-start">
                  <div className="font-mono text-xs text-brand-gold uppercase tracking-wider font-bold">
                    Court Sports
                  </div>
                  <Trophy className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-brand-beige-light mt-4">
                  Netball
                </h3>
                <p className="text-xs sm:text-sm text-brand-beige-border/90 mt-2">
                  A high-performing girls&apos; programme with daily drill coaching and a celebrated district trophy cabinet.
                </p>
              </div>
              <div className="text-[11px] font-mono text-brand-gold-light pt-4">
                District Champions 2024 &amp; 2025
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-gradient-to-br from-brand-brown-dark to-brand-green-dark border border-brand-brown-light/40 shadow-card flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="flex justify-between items-start">
                  <div className="font-mono text-xs text-brand-gold uppercase tracking-wider font-bold">
                    Athletics &amp; Arts
                  </div>
                  <Sparkles className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-brand-beige-light mt-4">
                  Basketball &amp; Clubs
                </h3>
                <p className="text-xs sm:text-sm text-brand-beige-border/90 mt-2">
                  Standard outdoor court, music dance and drama (MDD), championship debate, and scouting expeditions.
                </p>
              </div>
              <div className="text-[11px] font-mono text-brand-gold-light pt-4">
                Weekly House Tournaments
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOARDING VS DAY */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b border-brand-maroon/20" id="boarding">
        <div className="p-8 sm:p-14 lg:p-20 bg-brand-beige text-brand-ink flex flex-col justify-between">
          <div>
            <div className="font-mono text-xs font-bold text-brand-maroon uppercase tracking-widest mb-3">
              Day Scholars Programme
            </div>
            <h3 className="font-serif font-bold text-2xl sm:text-4xl text-brand-ink leading-tight">
              Learn locally, return home every evening
            </h3>
            <p className="text-sm sm:text-base text-brand-ink-muted mt-4 leading-relaxed max-w-lg">
              For families residing in and around Kayunga, our day scholar system runs the exact same academic and vocational trade timetable with supervised evening study and hot lunches on campus.
            </p>
            <ul className="mt-6 space-y-3 text-xs sm:text-sm text-brand-ink">
              <li className="flex items-start gap-2.5">
                <span className="font-bold text-brand-maroon">—</span>
                <span>Supervised afternoon prep and remedial mentoring before daily pick-up</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-bold text-brand-maroon">—</span>
                <span>Reliable transit routes across Bbaale, Kangulumira, and Kayunga Town</span>
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 text-xs font-bold text-brand-maroon hover:underline"
            >
              <span>View Day Scholar Fee Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="p-8 sm:p-14 lg:p-20 bg-brand-green-deep text-brand-beige-light flex flex-col justify-between">
          <div>
            <div className="font-mono text-xs font-bold text-brand-gold uppercase tracking-widest mb-3">
              Boarding Community
            </div>
            <h3 className="font-serif font-bold text-2xl sm:text-4xl text-brand-beige-light leading-tight">
              A secure home away from home
            </h3>
            <p className="text-sm sm:text-base text-brand-beige-border mt-4 leading-relaxed max-w-lg">
              Separate boys&apos; and girls&apos; dormitories, resident house parents, perimeter security, and a balanced routine carrying learners smoothly from dawn devotion to evening study.
            </p>
            <ul className="mt-6 space-y-3 text-xs sm:text-sm text-brand-beige-border">
              <li className="flex items-start gap-2.5">
                <span className="font-bold text-brand-gold">—</span>
                <span>Live-in registered nurses, matrons, and resident house masters</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-bold text-brand-gold">—</span>
                <span>Three balanced farm-supplied meals daily (posho, beans, matooke, greens &amp; milk)</span>
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <Link
              href="/student-life"
              className="inline-flex items-center gap-2 text-xs font-bold text-brand-gold hover:underline"
            >
              <span>Explore Boarding Life &amp; Facilities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY STRIP */}
      <section className="py-12 bg-brand-green-deep overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-gold-light">Life at His Kids High School</span>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-brand-beige-light mt-1">Real students. Real learning. Real community.</h2>
        </div>
        <div className="flex gap-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-x-auto pb-2 scrollbar-hide">
          {[
            { src: "/images/smiling-student.jpg", label: "Joy of Learning", sub: "Students arrive eager every morning" },
            { src: "/images/classroom-hands.jpg", label: "Engaged Classrooms", sub: "Curiosity drives every lesson" },
            { src: "/images/student-writing.jpg", label: "Academic Excellence", sub: "Serious focus, serious results" },
            { src: "/images/classroom-uniforms.jpg", label: "Smart Uniform Pride", sub: "Identity, discipline & belonging" },
            { src: "/images/football-match.jpg", label: "Sports & Athletics", sub: "Champions on the pitch too" },
          ].map(({ src, label, sub }) => (
            <div
              key={label}
              className="relative flex-shrink-0 w-64 sm:w-72 rounded-2xl overflow-hidden border border-brand-maroon/30 shadow-card group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={label}
                className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green-deep/90 via-brand-green-deep/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="font-mono text-[10px] text-brand-gold uppercase tracking-wider">{label}</div>
                <div className="text-xs text-brand-beige-border/90 mt-0.5">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 sm:py-24 bg-brand-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <span className="h-0.5 w-8 bg-brand-maroon inline-block" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-maroon">
                  What Families Say
                </span>
              </div>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-brand-ink leading-tight">
                Trusted by parents, celebrated by alumni
              </h2>
              <p className="text-sm text-brand-ink-muted leading-relaxed">
                Discover why families across Central Uganda and East Africa choose His Kids High School for their children&apos;s holistic formation.
              </p>
            </div>
            <div className="lg:col-span-7">
              <TestimonialCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* FEES PREVIEW */}
      <section className="py-16 sm:py-20 bg-brand-beige border-t border-brand-beige-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-maroon text-white text-xs font-mono uppercase tracking-wider">
                Transparent School Fees
              </div>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-brand-ink">
                Affordable, high-value education for every family
              </h2>
              <p className="text-sm text-brand-ink-muted leading-relaxed">
                Use our real-time fee calculator to estimate total term expenses for tuition, uniform kits, boarding, and vocational trade materials.
              </p>
              <div className="pt-2">
                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-2 bg-brand-maroon hover:bg-brand-maroon-light text-brand-beige-light text-xs font-semibold px-6 py-3 rounded-xl transition-colors shadow-md"
                >
                  <FileText className="w-4 h-4 text-brand-gold" />
                  <span>Start Full Online Application</span>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6">
              <FeesCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* ADMISSIONS CALL TO ACTION */}
      <section className="bg-brand-gold text-brand-green-dark py-14 sm:py-20 text-center px-4">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="font-serif font-bold text-3xl sm:text-5xl text-brand-green-dark tracking-tight">
            Admissions are open for Senior One, Senior Five &amp; Transfers
          </h2>
          <p className="text-sm sm:text-base text-brand-green-dark/85 max-w-2xl mx-auto leading-relaxed">
            Applications are reviewed on a rolling basis for both day and boarding places. Submit your form online or visit our admissions office in Kayunga.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 bg-brand-green-deep hover:bg-brand-green-dark text-brand-beige-light font-bold text-sm px-8 py-3.5 rounded-full shadow-lg transition-transform hover:scale-105"
            >
              <GraduationCap className="w-5 h-5 text-brand-gold" />
              <span>Apply Online Now</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-maroon hover:bg-brand-maroon-dark text-brand-beige-light font-semibold text-sm px-6 py-3.5 rounded-full shadow-md transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-gold" />
              <span>Call Admissions Desk</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}