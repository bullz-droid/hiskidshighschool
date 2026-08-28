"use client";
import React, { useState } from "react";
import Link from "next/link";
import { 
  ShieldCheck, User, BookOpen, CreditCard, Calendar, 
  Award, CheckCircle2, Bell, Download, Lock, FileText, Sparkles
} from "lucide-react";
import { Crest } from "@/components/Crest";
import { BarkclothDivider } from "@/components/BarkclothDivider";

export default function PortalPage() {
  const [activeTab, setActiveTab] = useState<"grades" | "fees" | "timetable" | "notices">("grades");

  return (
    <div className="w-full">
      {/* Portal Header */}
      <section className="bg-brand-green-dark text-brand-beige-light py-10 border-b border-brand-maroon/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Crest className="w-12 h-12" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-brand-gold text-brand-green-dark font-bold uppercase">
                  Active Student Demo
                </span>
                <span className="text-xs font-mono text-brand-gold-light">
                  Term 1, 2026 Academic Session
                </span>
              </div>
              <h1 className="font-serif font-bold text-xl sm:text-2xl text-brand-beige-light">
                Grace Namagembe · Senior Three (S.3 East)
              </h1>
              <div className="text-xs text-brand-beige-border flex items-center gap-3 mt-0.5 font-mono">
                <span>ID: HKHS-2024-0382</span>
                <span>·</span>
                <span>House: Nile House</span>
                <span>·</span>
                <span className="text-brand-gold-light">Boarding Section</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono bg-brand-green-deep border border-brand-gold/30 px-3 py-1.5 rounded-xl flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span>Attendance: 98.4%</span>
            </span>
          </div>
        </div>
      </section>

      <BarkclothDivider theme="on-cream" height={24} />

      {/* Main Portal Dashboard */}
      <section className="py-10 bg-brand-beige-light min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation Tab Bar */}
          <div className="flex border-b border-brand-beige-border gap-2 sm:gap-4 overflow-x-auto pb-1 mb-8">
            {[
              { id: "grades", label: "Continuous Assessment (CBC)", icon: Award },
              { id: "fees", label: "Fee Ledger & Payments", icon: CreditCard },
              { id: "timetable", label: "Term Timetable", icon: Calendar },
              { id: "notices", label: "School Circulars & Memos", icon: Bell },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={"flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap " + (
                    activeTab === tab.id
                      ? "bg-brand-maroon text-brand-beige-light shadow-sm"
                      : "bg-brand-beige text-brand-ink-muted hover:text-brand-ink"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* TAB 1: GRADES & CBC PORTFOLIO */}
          {activeTab === "grades" && (
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-2xl border border-brand-beige-border shadow-subtle flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif font-bold text-xl text-brand-ink">
                    Term 1 Formative Assessment Progress Report
                  </h3>
                  <p className="text-xs text-brand-ink-muted mt-1">
                    Continuous competency-based marks submitted for UNEB Lower Secondary Record.
                  </p>
                </div>
                <button
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand-green-deep text-brand-gold rounded-xl font-mono text-xs font-bold"
                >
                  <Download className="w-4 h-4" />
                  <span>Download UNEB Slip (PDF)</span>
                </button>
              </div>

              <div className="bg-white rounded-2xl border border-brand-beige-border shadow-subtle overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-brand-green-deep text-brand-gold-light font-mono uppercase text-[11px]">
                      <tr>
                        <th className="p-4">Subject</th>
                        <th className="p-4">Teacher</th>
                        <th className="p-4">Activity Score (3.0)</th>
                        <th className="p-4">Practical Project (20%)</th>
                        <th className="p-4">Descriptor</th>
                        <th className="p-4">Remarks</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-beige-border text-brand-ink">
                      <tr>
                        <td className="p-4 font-bold">Mathematics</td>
                        <td className="p-4 text-brand-ink-muted">Mr. G. Byaruhanga</td>
                        <td className="p-4 font-mono font-bold text-brand-green-deep">2.9 / 3.0</td>
                        <td className="p-4 font-mono font-bold">18.5 / 20</td>
                        <td className="p-4"><span className="px-2 py-0.5 rounded bg-green-100 text-green-800 font-semibold text-[10px]">Outstanding</span></td>
                        <td className="p-4 text-brand-ink-muted">Exceptional data modeling and geometric proofs.</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold">Physics</td>
                        <td className="p-4 text-brand-ink-muted">Mr. K. Ronald</td>
                        <td className="p-4 font-mono font-bold text-brand-green-deep">2.7 / 3.0</td>
                        <td className="p-4 font-mono font-bold">17.0 / 20</td>
                        <td className="p-4"><span className="px-2 py-0.5 rounded bg-green-100 text-green-800 font-semibold text-[10px]">Proficient</span></td>
                        <td className="p-4 text-brand-ink-muted">Mastered electrical circuit design and safety laws.</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold">Chemistry</td>
                        <td className="p-4 text-brand-ink-muted">Mrs. S. Nalubega</td>
                        <td className="p-4 font-mono font-bold text-brand-green-deep">2.8 / 3.0</td>
                        <td className="p-4 font-mono font-bold">18.0 / 20</td>
                        <td className="p-4"><span className="px-2 py-0.5 rounded bg-green-100 text-green-800 font-semibold text-[10px]">Outstanding</span></td>
                        <td className="p-4 text-brand-ink-muted">Active participant in soap-making school enterprise.</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold">Tailoring &amp; Fashion (Vocational)</td>
                        <td className="p-4 text-brand-ink-muted">Eng. S. Kisakye</td>
                        <td className="p-4 font-mono font-bold text-brand-maroon">3.0 / 3.0</td>
                        <td className="p-4 font-mono font-bold text-brand-maroon">19.5 / 20</td>
                        <td className="p-4"><span className="px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-semibold text-[10px]">Mastery</span></td>
                        <td className="p-4 text-brand-ink-muted">Completed 3 full sports house jerseys with precision.</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-bold">English Language</td>
                        <td className="p-4 text-brand-ink-muted">Ms. E. Nabirye</td>
                        <td className="p-4 font-mono font-bold text-brand-green-deep">2.8 / 3.0</td>
                        <td className="p-4 font-mono font-bold">17.5 / 20</td>
                        <td className="p-4"><span className="px-2 py-0.5 rounded bg-green-100 text-green-800 font-semibold text-[10px]">Outstanding</span></td>
                        <td className="p-4 text-brand-ink-muted">Strong debater and creative writer in the gazette.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: FEES LEDGER */}
          {activeTab === "fees" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 bg-white rounded-2xl border border-brand-beige-border">
                  <div className="text-xs font-mono uppercase text-brand-ink-muted">Term Invoiced Fees</div>
                  <div className="text-2xl font-bold font-mono text-brand-ink mt-1">UGX 810,000</div>
                  <div className="text-[11px] text-brand-ink-light mt-1">Tuition, Boarding &amp; Materials</div>
                </div>

                <div className="p-5 bg-white rounded-2xl border border-brand-beige-border">
                  <div className="text-xs font-mono uppercase text-brand-ink-muted">Amount Paid to Date</div>
                  <div className="text-2xl font-bold font-mono text-brand-green-deep mt-1">UGX 810,000</div>
                  <div className="text-[11px] text-green-700 font-semibold mt-1">✓ Fully Paid (Zero Arrears)</div>
                </div>

                <div className="p-5 bg-brand-green-deep text-brand-beige-light rounded-2xl border border-brand-gold/30">
                  <div className="text-xs font-mono uppercase text-brand-gold">Current Balance</div>
                  <div className="text-2xl font-bold font-mono text-brand-gold-light mt-1">UGX 0.00</div>
                  <div className="text-[11px] text-brand-beige-border mt-1">Cleared for Term 1 Final Exams</div>
                </div>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-brand-beige-border space-y-4">
                <h4 className="font-serif font-bold text-lg text-brand-ink">
                  Recent Bank &amp; Mobile Money Receipts
                </h4>
                <div className="space-y-2 text-xs font-mono divide-y divide-brand-beige-border">
                  <div className="flex justify-between pt-2">
                    <div><span>Stanbic SchoolPay: RCPT-948291</span><div className="text-[11px] text-brand-ink-muted">Paid by John Bosco Mukasa (Guardian)</div></div>
                    <div className="text-right"><div className="font-bold text-brand-green-deep">UGX 500,000</div><div className="text-[10px] text-brand-ink-light">Jan 28, 2026</div></div>
                  </div>
                  <div className="flex justify-between pt-2">
                    <div><span>Centenary Bank Pay: RCPT-847290</span><div className="text-[11px] text-brand-ink-muted">Paid by John Bosco Mukasa (Guardian)</div></div>
                    <div className="text-right"><div className="font-bold text-brand-green-deep">UGX 310,000</div><div className="text-[10px] text-brand-ink-light">Feb 10, 2026</div></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: TIMETABLE */}
          {activeTab === "timetable" && (
            <div className="p-6 bg-white rounded-2xl border border-brand-beige-border space-y-4">
              <h3 className="font-serif font-bold text-xl text-brand-ink">
                Senior 3 East Weekly Schedule
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-xs">
                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day, idx) => (
                  <div key={idx} className="p-3 bg-brand-beige rounded-xl border border-brand-beige-border space-y-2">
                    <div className="font-mono font-bold text-brand-maroon uppercase text-[11px] border-b border-brand-beige-border pb-1">
                      {day}
                    </div>
                    <div className="p-2 bg-white rounded-lg border border-brand-beige-border">
                      <div className="font-bold">08:00 - 09:30</div>
                      <div className="text-brand-ink-muted">Mathematics</div>
                    </div>
                    <div className="p-2 bg-white rounded-lg border border-brand-beige-border">
                      <div className="font-bold">09:30 - 11:00</div>
                      <div className="text-brand-ink-muted">Physics Lab</div>
                    </div>
                    <div className="p-2 bg-white rounded-lg border border-brand-beige-border">
                      <div className="font-bold">11:30 - 01:00</div>
                      <div className="text-brand-ink-muted">Chemistry / Bio</div>
                    </div>
                    <div className="p-2 bg-brand-maroon/10 rounded-lg border border-brand-maroon/30 text-brand-maroon">
                      <div className="font-bold">02:00 - 04:30</div>
                      <div>Tailoring Trade</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: NOTICES */}
          {activeTab === "notices" && (
            <div className="space-y-4">
              <div className="p-5 bg-white rounded-2xl border border-brand-beige-border">
                <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                  <span className="text-brand-maroon font-bold">Academic Office</span>
                  <span className="text-brand-ink-light">Feb 20, 2026</span>
                </div>
                <h4 className="font-serif font-bold text-base text-brand-ink">
                  Mid-Term Assessment &amp; Parent Visitation Day
                </h4>
                <p className="text-xs text-brand-ink-muted mt-1 leading-relaxed">
                  Parents and guardians of all boarders are invited to campus on Saturday, March 14, 2026 from 9:00 AM to 3:00 PM to review mid-term project portfolios with subject teachers.
                </p>
              </div>

              <div className="p-5 bg-white rounded-2xl border border-brand-beige-border">
                <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                  <span className="text-brand-green-deep font-bold">Vocational Department</span>
                  <span className="text-brand-ink-light">Feb 15, 2026</span>
                </div>
                <h4 className="font-serif font-bold text-base text-brand-ink">
                  Annual Crafts &amp; Harvest Exhibition Notice
                </h4>
                <p className="text-xs text-brand-ink-muted mt-1 leading-relaxed">
                  Students should ensure all garment pieces, timber joints, and passion fruit nursery beds are registered with trade masters for exhibition grading before the end of the month.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}