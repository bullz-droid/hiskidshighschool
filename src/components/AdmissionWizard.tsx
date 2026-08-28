"use client";
import React, { useState } from "react";
import { 
  CheckCircle2, ChevronRight, ChevronLeft, GraduationCap, 
  User, BookOpen, Award, FileText, Phone, Mail, MapPin, 
  Sparkles, Printer 
} from "lucide-react";
import { Crest } from "./Crest";

interface FormData {
  studentFirstName: string;
  studentLastName: string;
  dob: string;
  gender: string;
  entryClass: string;
  residenceType: string;
  religiousAffiliation: string;
  previousSchool: string;
  examIndex: string;
  examAggregate: string;
  preferredStream: string;
  vocationalChoice: string;
  sportsInterest: string[];
  clubsInterest: string[];
  guardianName: string;
  guardianRelationship: string;
  guardianPhone: string;
  guardianEmail: string;
  guardianDistrict: string;
  guardianAddress: string;
}

const initialFormData: FormData = {
  studentFirstName: "",
  studentLastName: "",
  dob: "",
  gender: "Female",
  entryClass: "Senior One (S.1)",
  residenceType: "Boarding",
  religiousAffiliation: "Christian (Anglican)",
  previousSchool: "",
  examIndex: "",
  examAggregate: "",
  preferredStream: "Pure Sciences",
  vocationalChoice: "Tailoring & Garment Design",
  sportsInterest: ["Football", "Netball"],
  clubsInterest: ["Debate Club", "Science & Robotics"],
  guardianName: "",
  guardianRelationship: "Father",
  guardianPhone: "",
  guardianEmail: "",
  guardianDistrict: "Kayunga",
  guardianAddress: "",
};

export const AdmissionWizard: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckboxToggle = (field: "sportsInterest" | "clubsInterest", item: string) => {
    const list = formData[field];
    if (list.includes(item)) {
      updateField(field, list.filter((i) => i !== item));
    } else {
      updateField(field, [...list, item]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const randomRef = "HKHS-2026-" + Math.floor(100000 + Math.random() * 900000);
      setSubmittedRef(randomRef);
      setIsSubmitting(false);
    }, 900);
  };

  if (submittedRef) {
    return (
      <div className="bg-white border-2 border-brand-green-mid rounded-2xl p-6 sm:p-10 max-w-2xl mx-auto shadow-elevated text-center">
        <div className="inline-flex p-3 rounded-full bg-brand-green-deep text-brand-gold mb-4">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="font-mono text-xs font-bold text-brand-maroon uppercase tracking-wider">
          Application Submitted Successfully
        </div>

        <h3 className="font-serif font-bold text-2xl sm:text-3xl text-brand-ink mt-1">
          Welcome to His Kids High School!
        </h3>

        <p className="text-sm text-brand-ink-muted mt-2 max-w-md mx-auto">
          Thank you for applying for <strong>{formData.studentFirstName} {formData.studentLastName}</strong> for entry into <strong>{formData.entryClass} ({formData.residenceType})</strong>.
        </p>

        <div className="my-6 p-5 bg-brand-beige border border-brand-gold rounded-xl text-left font-mono">
          <div className="flex items-center justify-between pb-3 border-b border-brand-beige-border">
            <span className="text-xs text-brand-ink-muted uppercase">Reference Code:</span>
            <span className="text-base sm:text-lg font-bold text-brand-green-deep">{submittedRef}</span>
          </div>
          <div className="pt-3 grid grid-cols-2 gap-2 text-xs text-brand-ink">
            <div><strong>Learner:</strong> {formData.studentFirstName} {formData.studentLastName}</div>
            <div><strong>Class:</strong> {formData.entryClass}</div>
            <div><strong>Residence:</strong> {formData.residenceType}</div>
            <div><strong>Vocational Trade:</strong> {formData.vocationalChoice}</div>
            <div><strong>Parent Contact:</strong> {formData.guardianPhone}</div>
            <div><strong>Date:</strong> {new Date().toLocaleDateString("en-GB")}</div>
          </div>
        </div>

        <div className="text-left text-xs text-brand-ink-muted space-y-2 bg-brand-beige-light p-4 rounded-xl border border-brand-beige-border">
          <div className="font-bold text-brand-ink font-mono uppercase">Next Steps & Document Submission:</div>
          <p>1. Our admissions secretary will contact <strong>{formData.guardianPhone}</strong> within 24 hours to schedule an interview or assessment.</p>
          <p>2. Please bring a copy of the PLE / UCE Pass Slip, 2 passport photos, and a recommendation letter from the previous school.</p>
          <p>3. Keep your reference code <strong>{submittedRef}</strong> for status tracking.</p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 bg-brand-green-deep hover:bg-brand-green-mid text-brand-gold-light text-xs font-semibold px-5 py-2.5 rounded-xl transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>Print Application Slip</span>
          </button>
          <button
            onClick={() => {
              setSubmittedRef(null);
              setFormData(initialFormData);
              setStep(1);
            }}
            className="px-5 py-2.5 bg-brand-beige border border-brand-beige-border rounded-xl text-xs font-medium text-brand-ink hover:bg-brand-beige-deep transition-colors"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-brand-beige-border rounded-2xl shadow-card overflow-hidden max-w-3xl mx-auto">
      <div className="bg-brand-green-deep text-brand-beige-light p-6 sm:p-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Crest className="w-9 h-9" />
            <div>
              <h3 className="font-serif font-bold text-xl text-brand-beige-light">
                Official Online Admission Form
              </h3>
              <p className="text-xs font-mono text-brand-gold-light">
                His Kids High School · 2026 / 2027 Academic Year
              </p>
            </div>
          </div>
          <span className="font-mono text-xs px-3 py-1 rounded-full bg-brand-maroon text-white font-bold">
            Step {step} of 4
          </span>
        </div>

        <div className="grid grid-cols-4 gap-2 text-center text-[11px] font-mono pt-2">
          {[
            { num: 1, label: "Learner Details" },
            { num: 2, label: "Academics" },
            { num: 3, label: "Vocational Trade" },
            { num: 4, label: "Guardian & Submit" },
          ].map((s) => (
            <div
              key={s.num}
              className={`pb-2 border-b-2 transition-all ${
                step >= s.num
                  ? "border-brand-gold text-brand-gold font-bold"
                  : "border-white/20 text-white/50"
              }`}
            >
              <span className="hidden sm:inline">Step {s.num}: </span>
              {s.label}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
        {step === 1 && (
          <div className="space-y-4">
            <div className="border-b border-brand-beige-border pb-2">
              <h4 className="font-serif font-bold text-lg text-brand-ink">
                Learner Personal Information
              </h4>
              <p className="text-xs text-brand-ink-muted">
                Please enter the student's full legal names as they appear on official primary or secondary school records.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-brand-ink-muted mb-1 font-semibold">
                  First / Given Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.studentFirstName}
                  onChange={(e) => updateField("studentFirstName", e.target.value)}
                  placeholder="e.g. Grace"
                  className="w-full px-3.5 py-2 text-sm bg-brand-beige-light border border-brand-beige-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-maroon"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase text-brand-ink-muted mb-1 font-semibold">
                  Surname / Family Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.studentLastName}
                  onChange={(e) => updateField("studentLastName", e.target.value)}
                  placeholder="e.g. Namagembe"
                  className="w-full px-3.5 py-2 text-sm bg-brand-beige-light border border-brand-beige-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-maroon"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-brand-ink-muted mb-1 font-semibold">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  required
                  value={formData.dob}
                  onChange={(e) => updateField("dob", e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-brand-beige-light border border-brand-beige-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-maroon"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-brand-ink-muted mb-1 font-semibold">
                  Gender *
                </label>
                <select
                  value={formData.gender}
                  onChange={(e) => updateField("gender", e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-brand-beige-light border border-brand-beige-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-maroon"
                >
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-brand-ink-muted mb-1 font-semibold">
                  Religious Affiliation
                </label>
                <select
                  value={formData.religiousAffiliation}
                  onChange={(e) => updateField("religiousAffiliation", e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-brand-beige-light border border-brand-beige-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-maroon"
                >
                  <option value="Christian (Anglican)">Christian (Anglican)</option>
                  <option value="Christian (Catholic)">Christian (Catholic)</option>
                  <option value="Christian (Pentecostal / Born-Again)">Christian (Born-Again)</option>
                  <option value="Christian (SDA)">Christian (SDA)</option>
                  <option value="Muslim">Muslim</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs font-mono uppercase text-brand-ink-muted mb-1 font-semibold">
                  Class of Entry *
                </label>
                <select
                  value={formData.entryClass}
                  onChange={(e) => updateField("entryClass", e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-brand-beige-light border border-brand-beige-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-maroon font-semibold text-brand-maroon"
                >
                  <option value="Senior One (S.1)">Senior One (S.1) – Lower Secondary CBC</option>
                  <option value="Senior Two (S.2)">Senior Two (S.2) – Transfer</option>
                  <option value="Senior Three (S.3)">Senior Three (S.3) – Transfer</option>
                  <option value="Senior Four (S.4)">Senior Four (S.4) – Transfer</option>
                  <option value="Senior Five (S.5)">Senior Five (S.5) – Advanced Level</option>
                  <option value="Senior Six (S.6)">Senior Six (S.6) – Transfer</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-brand-ink-muted mb-1 font-semibold">
                  Residence Mode *
                </label>
                <select
                  value={formData.residenceType}
                  onChange={(e) => updateField("residenceType", e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-brand-beige-light border border-brand-beige-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-maroon font-semibold text-brand-green-deep"
                >
                  <option value="Boarding">Boarding Section (On-Campus Dormitory)</option>
                  <option value="Day Scholar">Day Scholar (With Bus Transport / Lunch)</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div className="border-b border-brand-beige-border pb-2">
              <h4 className="font-serif font-bold text-lg text-brand-ink">
                Academic Background & Previous School
              </h4>
              <p className="text-xs text-brand-ink-muted">
                Provide national exam index or recent school report information.
              </p>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-brand-ink-muted mb-1 font-semibold">
                Previous School Attended *
              </label>
              <input
                type="text"
                required
                value={formData.previousSchool}
                onChange={(e) => updateField("previousSchool", e.target.value)}
                placeholder="e.g. Kayunga Mixed Primary School / St. Jude Junior"
                className="w-full px-3.5 py-2 text-sm bg-brand-beige-light border border-brand-beige-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-maroon"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-brand-ink-muted mb-1 font-semibold">
                  PLE / UCE Index Number (if available)
                </label>
                <input
                  type="text"
                  value={formData.examIndex}
                  onChange={(e) => updateField("examIndex", e.target.value)}
                  placeholder="e.g. 003847/012"
                  className="w-full px-3.5 py-2 text-sm bg-brand-beige-light border border-brand-beige-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-maroon font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-brand-ink-muted mb-1 font-semibold">
                  Exam Aggregate / Division
                </label>
                <input
                  type="text"
                  value={formData.examAggregate}
                  onChange={(e) => updateField("examAggregate", e.target.value)}
                  placeholder="e.g. Aggregate 8 (Division 1) or 18 in 8"
                  className="w-full px-3.5 py-2 text-sm bg-brand-beige-light border border-brand-beige-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-maroon"
                />
              </div>
            </div>

            <div className="pt-2">
              <label className="block text-xs font-mono uppercase text-brand-ink-muted mb-1 font-semibold">
                Academic Stream of Interest
              </label>
              <div className="grid grid-cols-3 gap-3">
                {["Pure Sciences", "Arts & Humanities", "Balanced Mixed Stream"].map((stream) => (
                  <button
                    type="button"
                    key={stream}
                    onClick={() => updateField("preferredStream", stream)}
                    className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                      formData.preferredStream === stream
                        ? "bg-brand-maroon text-white border-brand-maroon shadow-sm"
                        : "bg-brand-beige border-brand-beige-border text-brand-ink hover:border-brand-maroon/40"
                    }`}
                  >
                    {stream}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <div className="border-b border-brand-beige-border pb-2">
              <h4 className="font-serif font-bold text-lg text-brand-ink">
                Vocational Trade & Co-Curricular Passions
              </h4>
              <p className="text-xs text-brand-ink-muted">
                Every student at His Kids High School trains in a practical tertiary craft alongside regular classes.
              </p>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-brand-ink-muted mb-2 font-semibold">
                Select Primary Vocational Trade Track *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    name: "Tailoring & Garment Design",
                    desc: "Pattern drafting, garment stitching, fashion entrepreneurship",
                  },
                  {
                    name: "Carpentry & Timber Joinery",
                    desc: "Woodwork safety, furniture building, structural roofing joinery",
                  },
                  {
                    name: "Agribusiness & Modern Farming",
                    desc: "Horticulture, poultry, dairy cattle, irrigation & value addition",
                  },
                ].map((trade) => (
                  <div
                    key={trade.name}
                    onClick={() => updateField("vocationalChoice", trade.name)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      formData.vocationalChoice === trade.name
                        ? "bg-brand-beige border-brand-maroon shadow-md"
                        : "bg-white border-brand-beige-border hover:border-brand-maroon/30"
                    }`}
                  >
                    <div className="font-serif font-bold text-sm text-brand-ink">
                      {trade.name}
                    </div>
                    <p className="text-[11px] text-brand-ink-muted mt-1 leading-normal">
                      {trade.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <label className="block text-xs font-mono uppercase text-brand-ink-muted mb-1.5 font-semibold">
                Sports & Athletics (Select all of interest)
              </label>
              <div className="flex flex-wrap gap-2">
                {["Football", "Netball", "Basketball", "Athletics / Sprints", "Volleyball", "Table Tennis"].map((sport) => (
                  <button
                    type="button"
                    key={sport}
                    onClick={() => handleCheckboxToggle("sportsInterest", sport)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                      formData.sportsInterest.includes(sport)
                        ? "bg-brand-green-deep text-brand-gold font-semibold"
                        : "bg-brand-beige border border-brand-beige-border text-brand-ink"
                    }`}
                  >
                    {sport}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <label className="block text-xs font-mono uppercase text-brand-ink-muted mb-1.5 font-semibold">
                Clubs & Societies
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  "Debate Club",
                  "Science & Robotics",
                  "Scouts & Girl Guides",
                  "Scripture Union / YCS",
                  "Music, Dance & Drama (MDD)",
                  "Red Cross First Aid",
                  "Young Farmers Club",
                ].map((club) => (
                  <button
                    type="button"
                    key={club}
                    onClick={() => handleCheckboxToggle("clubsInterest", club)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                      formData.clubsInterest.includes(club)
                        ? "bg-brand-maroon text-white font-semibold"
                        : "bg-brand-beige border border-brand-beige-border text-brand-ink"
                    }`}
                  >
                    {club}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <div className="border-b border-brand-beige-border pb-2">
              <h4 className="font-serif font-bold text-lg text-brand-ink">
                Parent / Guardian Contact Information
              </h4>
              <p className="text-xs text-brand-ink-muted">
                Official contact for admission notifications, circulars, and fee billings.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-brand-ink-muted mb-1 font-semibold">
                  Guardian Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.guardianName}
                  onChange={(e) => updateField("guardianName", e.target.value)}
                  placeholder="e.g. John Bosco Mukasa"
                  className="w-full px-3.5 py-2 text-sm bg-brand-beige-light border border-brand-beige-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-maroon"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-brand-ink-muted mb-1 font-semibold">
                  Relationship to Learner *
                </label>
                <select
                  value={formData.guardianRelationship}
                  onChange={(e) => updateField("guardianRelationship", e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-brand-beige-light border border-brand-beige-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-maroon"
                >
                  <option value="Father">Father</option>
                  <option value="Mother">Mother</option>
                  <option value="Guardian / Sponsor">Guardian / Sponsor</option>
                  <option value="Sibling">Elder Sibling</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-brand-ink-muted mb-1 font-semibold">
                  Mobile Phone Number (Uganda / International) *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.guardianPhone}
                  onChange={(e) => updateField("guardianPhone", e.target.value)}
                  placeholder="e.g. +256 772 123 456"
                  className="w-full px-3.5 py-2 text-sm bg-brand-beige-light border border-brand-beige-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-maroon font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-brand-ink-muted mb-1 font-semibold">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  value={formData.guardianEmail}
                  onChange={(e) => updateField("guardianEmail", e.target.value)}
                  placeholder="e.g. guardian@example.ug"
                  className="w-full px-3.5 py-2 text-sm bg-brand-beige-light border border-brand-beige-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-maroon"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-brand-ink-muted mb-1 font-semibold">
                  Home District *
                </label>
                <input
                  type="text"
                  required
                  value={formData.guardianDistrict}
                  onChange={(e) => updateField("guardianDistrict", e.target.value)}
                  placeholder="e.g. Kayunga / Mukono / Kampala"
                  className="w-full px-3.5 py-2 text-sm bg-brand-beige-light border border-brand-beige-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-maroon"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-brand-ink-muted mb-1 font-semibold">
                  Town / Village / Parish
                </label>
                <input
                  type="text"
                  value={formData.guardianAddress}
                  onChange={(e) => updateField("guardianAddress", e.target.value)}
                  placeholder="e.g. Bbaale Town Council"
                  className="w-full px-3.5 py-2 text-sm bg-brand-beige-light border border-brand-beige-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-maroon"
                />
              </div>
            </div>

            <div className="p-4 bg-brand-beige rounded-xl border border-brand-beige-border text-xs space-y-1">
              <div className="font-bold text-brand-maroon font-mono uppercase">
                Application Summary Confirmation:
              </div>
              <div className="text-brand-ink">
                Applying for: <strong>{formData.studentFirstName || "Student"} {formData.studentLastName}</strong> for <strong>{formData.entryClass}</strong> ({formData.residenceType}) with Trade Track in <strong>{formData.vocationalChoice}</strong>.
              </div>
            </div>
          </div>
        )}

        <div className="pt-4 border-t border-brand-beige-border flex items-center justify-between">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-brand-beige-border text-xs font-semibold text-brand-ink hover:bg-brand-beige transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
          ) : <div />}

          {step < 4 ? (
            <button
              type="button"
              onClick={() => {
                if (step === 1 && (!formData.studentFirstName || !formData.studentLastName)) {
                  alert("Please fill in the student's first name and surname.");
                  return;
                }
                setStep(step + 1);
              }}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-brand-maroon hover:bg-brand-maroon-light text-brand-beige-light text-xs font-semibold shadow-md transition-colors"
            >
              <span>Continue</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-brand-green-deep hover:bg-brand-green-mid text-brand-gold font-bold text-xs shadow-lg transition-all disabled:opacity-50"
            >
              <Sparkles className="w-4 h-4 text-brand-gold" />
              <span>{isSubmitting ? "Processing Application..." : "Submit Official Application"}</span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
};