"use client";
import React, { useState } from "react";
import { oLevelSubjects, aLevelCombinations, Subject, Combination } from "@/data/curriculumData";
import { BookOpen, Sparkles, Microscope, Compass, CheckCircle2, ArrowRight, Award } from "lucide-react";
import Link from "next/link";

export const CurriculumTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"o-level" | "a-level">("o-level");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedStream, setSelectedStream] = useState<string>("all");
  const [activeSubjectModal, setActiveSubjectModal] = useState<Subject | null>(null);
  const [activeComboModal, setActiveComboModal] = useState<Combination | null>(null);

  const filteredOLevel = oLevelSubjects.filter((s) => {
    if (selectedCategory === "all") return true;
    return s.category === selectedCategory;
  });

  const filteredALevel = aLevelCombinations.filter((c) => {
    if (selectedStream === "all") return true;
    return c.stream === selectedStream;
  });

  return (
    <div className="w-full">
      {/* Level Selector Tabs */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex p-1.5 bg-brand-beige border border-brand-beige-border rounded-full shadow-inner">
          <button
            onClick={() => setActiveTab("o-level")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-mono text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
              activeTab === "o-level"
                ? "bg-brand-maroon text-brand-beige-light shadow-md"
                : "text-brand-ink-muted hover:text-brand-maroon"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>O-Level CBC (S.1 – S.4)</span>
          </button>
          <button
            onClick={() => setActiveTab("a-level")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-mono text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
              activeTab === "a-level"
                ? "bg-brand-green-deep text-brand-gold-light shadow-md"
                : "text-brand-ink-muted hover:text-brand-green-mid"
            }`}
          >
            <Award className="w-4 h-4" />
            <span>A-Level Combinations (S.5 – S.6)</span>
          </button>
        </div>
      </div>

      {/* O-Level Panel */}
      {activeTab === "o-level" && (
        <div className="space-y-6">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: "All Subjects" },
              { id: "sciences", label: "Sciences & Math" },
              { id: "humanities", label: "Humanities & Social" },
              { id: "languages", label: "Languages" },
              { id: "technical", label: "Technical & Arts" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  selectedCategory === tab.id
                    ? "bg-brand-maroon text-white font-semibold shadow-sm"
                    : "bg-brand-beige border border-brand-beige-border text-brand-ink-muted hover:border-brand-maroon/40"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Subjects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-4">
            {filteredOLevel.map((subject) => (
              <div
                key={subject.id}
                onClick={() => setActiveSubjectModal(subject)}
                className="group cursor-pointer bg-white p-5 rounded-xl border border-brand-beige-border hover:border-brand-maroon/50 hover:shadow-card transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-brand-maroon/10 text-brand-maroon">
                      UNEB {subject.code}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-brand-ink-light">
                      {subject.category}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-lg text-brand-ink group-hover:text-brand-maroon transition-colors">
                    {subject.name}
                  </h4>
                  <p className="text-xs text-brand-ink-muted mt-2 line-clamp-2 leading-relaxed">
                    {subject.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-brand-beige-border/60 flex items-center justify-between text-xs text-brand-maroon font-semibold">
                  <span>Explore Syllabus</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* A-Level Panel */}
      {activeTab === "a-level" && (
        <div className="space-y-6">
          {/* Stream Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: "All Combinations" },
              { id: "Science", label: "Science Combinations" },
              { id: "Arts", label: "Arts & Humanities" },
              { id: "Technical", label: "Technical & Visual Arts" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedStream(tab.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  selectedStream === tab.id
                    ? "bg-brand-green-deep text-brand-gold-light font-semibold shadow-sm"
                    : "bg-brand-beige border border-brand-beige-border text-brand-ink-muted hover:border-brand-green-mid"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Combinations Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 pt-4">
            {filteredALevel.map((combo) => (
              <div
                key={combo.code}
                onClick={() => setActiveComboModal(combo)}
                className="group cursor-pointer bg-white p-6 rounded-xl border border-brand-beige-border hover:border-brand-green-mid hover:shadow-card transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-brand-green-deep text-brand-gold-light">
                      {combo.code}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-brand-maroon font-semibold">
                      {combo.stream} Stream
                    </span>
                  </div>

                  <h4 className="font-serif font-bold text-xl text-brand-ink group-hover:text-brand-green-mid transition-colors">
                    {combo.name}
                  </h4>

                  {/* Principal Subjects */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {combo.subjects.map((sub, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-md bg-brand-beige border border-brand-beige-border text-brand-ink font-medium"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs text-brand-ink-muted mt-3 line-clamp-2 leading-relaxed">
                    {combo.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-brand-beige-border/60 flex items-center justify-between text-xs text-brand-green-mid font-semibold">
                  <span>View Career Opportunities</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Subject Detail Modal */}
      {activeSubjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-brand-beige-light border border-brand-maroon/30 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setActiveSubjectModal(null)}
              className="absolute top-4 right-4 text-brand-ink-muted hover:text-brand-maroon text-xl font-bold p-1"
            >
              &times;
            </button>

            <div className="flex items-center gap-2">
              <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-brand-maroon text-white font-bold">
                UNEB Code: {activeSubjectModal.code}
              </span>
              <span className="text-xs font-mono uppercase text-brand-ink-light">
                {activeSubjectModal.category}
              </span>
            </div>

            <h3 className="font-serif font-bold text-2xl text-brand-ink mt-2">
              {activeSubjectModal.name}
            </h3>

            <p className="text-sm text-brand-ink-muted mt-3 leading-relaxed">
              {activeSubjectModal.description}
            </p>

            <div className="mt-4 p-3.5 bg-brand-beige rounded-xl border border-brand-beige-border">
              <div className="text-xs font-mono font-bold text-brand-maroon uppercase tracking-wide">
                Special Learning Highlight:
              </div>
              <div className="text-xs text-brand-ink mt-1 font-medium">
                {activeSubjectModal.highlight}
              </div>
            </div>

            <div className="mt-4">
              <div className="text-xs font-mono font-bold text-brand-green-deep uppercase tracking-wide mb-2">
                Typical Career Pathways:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeSubjectModal.careerPaths.map((cp, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-full bg-white border border-brand-beige-border text-brand-ink-muted"
                  >
                    {cp}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <Link
                href="/admissions"
                className="flex-1 text-center bg-brand-maroon hover:bg-brand-maroon-light text-brand-beige-light font-semibold text-xs py-2.5 rounded-xl transition-colors"
              >
                Apply for this Subject
              </Link>
              <button
                onClick={() => setActiveSubjectModal(null)}
                className="px-5 py-2.5 bg-brand-beige border border-brand-beige-border rounded-xl text-xs font-medium hover:bg-white transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Combination Detail Modal */}
      {activeComboModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-brand-beige-light border border-brand-green-mid/40 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setActiveComboModal(null)}
              className="absolute top-4 right-4 text-brand-ink-muted hover:text-brand-green-mid text-xl font-bold p-1"
            >
              &times;
            </button>

            <div className="flex items-center gap-2">
              <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-brand-green-deep text-brand-gold font-bold">
                {activeComboModal.code}
              </span>
              <span className="text-xs font-mono uppercase text-brand-maroon font-semibold">
                {activeComboModal.stream} Stream
              </span>
            </div>

            <h3 className="font-serif font-bold text-2xl text-brand-ink mt-2">
              {activeComboModal.name}
            </h3>

            <p className="text-sm text-brand-ink-muted mt-3 leading-relaxed">
              {activeComboModal.description}
            </p>

            <div className="mt-4 space-y-2">
              <div className="text-xs font-mono font-bold text-brand-green-deep uppercase tracking-wide">
                Subsidiary Papers Included:
              </div>
              <div className="flex gap-2">
                {activeComboModal.subsidiaries.map((sub, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-0.5 rounded bg-brand-gold/20 border border-brand-gold/40 text-brand-ink font-mono font-medium"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <div className="text-xs font-mono font-bold text-brand-maroon uppercase tracking-wide mb-2">
                Qualifying Degree & Career Tracks:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeComboModal.suitableFor.map((career, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-full bg-white border border-brand-beige-border text-brand-ink-muted"
                  >
                    {career}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <Link
                href="/admissions"
                className="flex-1 text-center bg-brand-green-deep hover:bg-brand-green-mid text-brand-gold-light font-semibold text-xs py-2.5 rounded-xl transition-colors"
              >
                Apply for this Combination
              </Link>
              <button
                onClick={() => setActiveComboModal(null)}
                className="px-5 py-2.5 bg-brand-beige border border-brand-beige-border rounded-xl text-xs font-medium hover:bg-white transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};