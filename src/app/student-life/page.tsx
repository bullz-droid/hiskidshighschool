import React from "react";
import Link from "next/link";
import { 
  Trophy, ShieldCheck, Heart, Sparkles, Utensils, 
  Bus, Moon, Sun, CheckCircle2, ArrowRight, Activity
} from "lucide-react";
import { BarkclothDivider } from "@/components/BarkclothDivider";

export const metadata = {
  title: "Student Life & Boarding — His Kids High School, Kayunga",
  description: "Explore campus life at His Kids High School: modern boarding dormitories, day scholar bus transit, balanced farm-to-table dining, competitive sports, and clubs."
};

export default function StudentLifePage() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-brand-green-deep text-brand-beige-light py-16 sm:py-24 border-b border-brand-maroon/30 relative overflow-hidden">
        {/* Background photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/football-match.jpg"
          alt="Students playing football at His Kids High School"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green-deep via-brand-green-deep/85 to-brand-green-deep/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-0.5 w-8 bg-brand-gold inline-block" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-gold-light">
              Campus Life &amp; Welfare
            </span>
          </div>
          <h1 className="font-serif font-bold text-4xl sm:text-6xl text-brand-beige-light leading-tight">
            Community, Health &amp; <br />
            <span className="italic text-brand-gold">Character Formation</span>
          </h1>
          <p className="text-sm sm:text-base text-brand-beige-border/90 mt-4 max-w-2xl leading-relaxed">
            A vibrant, caring environment where young people build lifelong friendships, stay physically robust, and grow into confident leaders.
          </p>
        </div>
      </section>

      <BarkclothDivider theme="on-cream" height={32} />

      {/* BOARDING SECTION */}
      <section className="py-16 bg-brand-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="font-mono text-xs font-bold text-brand-maroon uppercase tracking-wider">
                Boarding Environment
              </div>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-brand-ink leading-tight">
                A Secure, Nurturing Residential Home
              </h2>
              <p className="text-sm sm:text-base text-brand-ink-muted leading-relaxed">
                Our boarding houses provide a structured, supportive atmosphere. Separate male and female dormitories are supervised 24/7 by dedicated live-in house parents, senior matrons, and wardens.
              </p>

              <div className="space-y-2.5 pt-2 text-xs text-brand-ink">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green-deep flex-shrink-0 mt-0.5" />
                  <span><strong>24/7 Perimeter Security:</strong> Guarded entry gates, perimeter walling, and solar campus floodlighting.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green-deep flex-shrink-0 mt-0.5" />
                  <span><strong>On-Site Health Clinic:</strong> Resident registered nurses and doctor-on-call for immediate healthcare.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green-deep flex-shrink-0 mt-0.5" />
                  <span><strong>Farm-Fresh Dining:</strong> 3 hearty, balanced meals every day prepared with produce from our own 14-acre farm.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green-deep flex-shrink-0 mt-0.5" />
                  <span><strong>Clean Water &amp; Power Security:</strong> Deep borehole clean water system and solar backups for uninterrupted study.</span>
                </div>
              </div>
            </div>

            {/* House System Card */}
            <div className="lg:col-span-6 p-6 sm:p-8 bg-brand-green-deep text-brand-beige-light rounded-3xl border border-brand-gold/30 space-y-4">
              <div className="font-mono text-xs text-brand-gold uppercase tracking-wider font-bold">
                The 4 School Houses
              </div>
              <h3 className="font-serif font-bold text-2xl text-brand-beige-light">
                Companionship &amp; Healthy Competition
              </h3>
              <p className="text-xs sm:text-sm text-brand-beige-border leading-relaxed">
                Upon enrollment, every learner is inducted into one of our four iconic houses, competing in academics, sports galas, clean dorm competitions, and drama festivals:
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-brand-green-dark rounded-xl border border-white/10">
                  <div className="font-mono text-xs font-bold text-brand-gold">Nile House</div>
                  <div className="text-[11px] text-brand-beige-border mt-0.5">Color: Emerald Green</div>
                </div>
                <div className="p-3 bg-brand-green-dark rounded-xl border border-white/10">
                  <div className="font-mono text-xs font-bold text-brand-maroon-light">Victoria House</div>
                  <div className="text-[11px] text-brand-beige-border mt-0.5">Color: Royal Maroon</div>
                </div>
                <div className="p-3 bg-brand-green-dark rounded-xl border border-white/10">
                  <div className="font-mono text-xs font-bold text-brand-gold-light">Elgon House</div>
                  <div className="text-[11px] text-brand-beige-border mt-0.5">Color: Gold &amp; Amber</div>
                </div>
                <div className="p-3 bg-brand-green-dark rounded-xl border border-white/10">
                  <div className="font-mono text-xs font-bold text-brand-brown-light">Rwenzori House</div>
                  <div className="text-[11px] text-brand-beige-border mt-0.5">Color: Warm Timber Bronze</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLUBS & SPORTS */}
      <section className="py-16 bg-brand-beige border-y border-brand-beige-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-brand-ink">
              Clubs, Societies &amp; Athletics
            </h2>
            <p className="text-xs sm:text-sm text-brand-ink-muted mt-2">
              Wednesday afternoon and Saturday morning are dedicated to co-curricular excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-brand-beige-border shadow-subtle overflow-hidden">
              {/* Football photo */}
              <div className="relative h-48">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/football-match.jpg"
                  alt="His Kids High School students competing in a football match"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-green-deep/80 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-maroon/90 text-brand-gold flex items-center justify-center">
                    <Trophy className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="p-5 bg-white space-y-2">
                <h3 className="font-serif font-bold text-lg text-brand-ink">Competitive Sports</h3>
                <p className="text-xs text-brand-ink-muted leading-relaxed">
                  Football teams (boys &amp; girls), netball league, volleyball, athletics sprint squads, table tennis, and basketball.
                </p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-brand-beige-border shadow-subtle space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-green-deep/10 text-brand-green-deep flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-brand-ink">Performing Arts (MDD)</h3>
              <p className="text-xs text-brand-ink-muted leading-relaxed">
                Traditional folk dance troupe, instrumental brass band, school choir, poetry recitals, and annual theatrical drama festivals.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-brand-beige-border shadow-subtle space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-brown/10 text-brand-brown flex items-center justify-center font-bold">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-brand-ink">Clubs &amp; Civic Leadership</h3>
              <p className="text-xs text-brand-ink-muted leading-relaxed">
                Uganda Scouting &amp; Girl Guides, Red Cross First Aid Society, Scripture Union, Debate &amp; Mock Parliament, and Young Farmers Club.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}