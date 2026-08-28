import React from "react";
import Link from "next/link";
import { 
  Calendar, Clock, MapPin, Tag, ArrowRight, 
  Sparkles, Award, Newspaper, Camera
} from "lucide-react";
import { BarkclothDivider } from "@/components/BarkclothDivider";
import { schoolArticles, upcomingEvents } from "@/data/newsData";

export const metadata = {
  title: "News, Events & Gallery — His Kids High School, Kayunga",
  description: "Stay up to date with official school announcements, sports gala updates, academic achievements, term calendar dates, and campus gallery."
};

export default function NewsEventsPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-brand-green-deep text-brand-beige-light py-16 sm:py-24 border-b border-brand-maroon/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-0.5 w-8 bg-brand-gold inline-block" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-brand-gold-light">
              Gazette &amp; Calendar
            </span>
          </div>
          <h1 className="font-serif font-bold text-4xl sm:text-6xl text-brand-beige-light leading-tight">
            News, Milestones &amp; <br />
            <span className="italic text-brand-gold">Upcoming Events</span>
          </h1>
          <p className="text-sm sm:text-base text-brand-beige-border/90 mt-4 max-w-2xl leading-relaxed">
            Follow the latest stories, achievements, tournament victories, and key term calendar dates from our bustling campus.
          </p>
        </div>
      </section>

      <BarkclothDivider theme="on-cream" height={32} />

      {/* ARTICLES & EVENTS GRID */}
      <section className="py-16 bg-brand-beige-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Col: School Articles (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              <div className="flex items-center justify-between border-b border-brand-beige-border pb-3">
                <h2 className="font-serif font-bold text-2xl text-brand-ink flex items-center gap-2">
                  <Newspaper className="w-5 h-5 text-brand-maroon" />
                  <span>Latest News &amp; Bulletins</span>
                </h2>
                <span className="font-mono text-xs text-brand-ink-light">Showing 5 Updates</span>
              </div>

              <div className="space-y-6">
                {schoolArticles.map((article) => (
                  <article
                    key={article.id}
                    className="p-6 bg-white rounded-2xl border border-brand-beige-border hover:border-brand-maroon/40 shadow-subtle transition-all duration-200"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-brand-maroon/10 text-brand-maroon font-mono text-[10px] font-bold uppercase">
                        {article.category}
                      </span>
                      <span className="text-[11px] font-mono text-brand-ink-light flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.date} · {article.readTime}</span>
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-xl text-brand-ink hover:text-brand-maroon transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-brand-ink-muted mt-2 leading-relaxed">
                      {article.summary}
                    </p>

                    <div className="mt-4 pt-3 border-t border-brand-beige-border flex items-center justify-between text-xs">
                      <span className="font-mono text-brand-ink-light">By: {article.author}</span>
                      <span className="text-brand-maroon font-semibold flex items-center gap-1 cursor-pointer hover:underline">
                        <span>Read Full Gazette</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Right Col: Events Calendar (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="border-b border-brand-beige-border pb-3">
                <h2 className="font-serif font-bold text-2xl text-brand-ink flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-brand-green-deep" />
                  <span>Term Events</span>
                </h2>
              </div>

              <div className="space-y-4">
                {upcomingEvents.map((evt) => (
                  <div
                    key={evt.id}
                    className="p-5 bg-brand-beige rounded-xl border border-brand-beige-border space-y-2"
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="px-2 py-0.5 rounded bg-brand-green-deep text-brand-gold font-bold">
                        {evt.category}
                      </span>
                      <span className="text-brand-maroon font-bold">{evt.date}</span>
                    </div>

                    <h4 className="font-serif font-bold text-base text-brand-ink">
                      {evt.title}
                    </h4>

                    <p className="text-xs text-brand-ink-muted leading-relaxed">
                      {evt.description}
                    </p>

                    <div className="pt-2 text-[11px] font-mono text-brand-ink-light flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-brand-maroon" />
                      <span>{evt.location} ({evt.time})</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Newsletter Subscription Box */}
              <div className="p-6 bg-brand-maroon text-brand-beige-light rounded-2xl border border-brand-maroon-dark space-y-3">
                <div className="font-serif font-bold text-lg text-brand-beige-light">
                  Subscribe to School Circulars
                </div>
                <p className="text-xs text-brand-beige-border leading-relaxed">
                  Receive term circulars, sports schedules, and UNEB announcement alerts directly to your phone or email.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="w-full px-3 py-2 text-xs bg-brand-beige-light text-brand-ink rounded-lg focus:outline-none"
                  />
                  <button className="px-4 py-2 bg-brand-gold text-brand-green-dark font-bold text-xs rounded-lg flex-shrink-0">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}