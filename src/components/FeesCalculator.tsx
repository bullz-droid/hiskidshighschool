"use client";
import React, { useState } from "react";
import { Calculator, Check, Info, ShieldCheck, HelpCircle } from "lucide-react";

export const FeesCalculator: React.FC = () => {
  const [level, setLevel] = useState<"O-Level" | "A-Level">("O-Level");
  const [residence, setResidence] = useState<"Boarding" | "Day">("Boarding");
  const [includeUniform, setIncludeUniform] = useState(true);
  const [includeBus, setIncludeBus] = useState(false);
  const [includeDevelopmentFund, setIncludeDevelopmentFund] = useState(true);
  const [currency, setCurrency] = useState<"UGX" | "USD">("UGX");

  const baseTuition = {
    "O-Level": { Boarding: 750000, Day: 350000 },
    "A-Level": { Boarding: 880000, Day: 420000 },
  };

  const uniformCost = 140000;
  const busTransportCost = residence === "Day" && includeBus ? 180000 : 0;
  const devFund = includeDevelopmentFund ? 50000 : 0;
  const vocationalMaterialsCost = 60000;

  const tuition = baseTuition[level][residence];
  const uniform = includeUniform ? uniformCost : 0;
  const totalUGX = tuition + uniform + busTransportCost + devFund + vocationalMaterialsCost;
  const totalUSD = Math.round(totalUGX / 3750);

  const formatMoney = (amount: number) => amount.toLocaleString("en-UG");

  return (
    <div className="bg-brand-beige border border-brand-beige-border rounded-2xl p-6 sm:p-8 shadow-card max-w-xl mx-auto">
      <div className="flex items-center justify-between pb-4 border-b border-brand-beige-border">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-brand-maroon rounded-lg text-white">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-lg text-brand-ink">
              Interactive Term Fee Estimator
            </h4>
            <p className="text-xs text-brand-ink-muted">
              Transparent school billing for His Kids High School
            </p>
          </div>
        </div>

        <div className="inline-flex p-1 bg-white border border-brand-beige-border rounded-lg text-xs font-mono">
          <button
            onClick={() => setCurrency("UGX")}
            className={`px-2 py-0.5 rounded font-bold transition-colors ${
              currency === "UGX" ? "bg-brand-green-deep text-brand-gold" : "text-brand-ink-muted"
            }`}
          >
            UGX
          </button>
          <button
            onClick={() => setCurrency("USD")}
            className={`px-2 py-0.5 rounded font-bold transition-colors ${
              currency === "USD" ? "bg-brand-green-deep text-brand-gold" : "text-brand-ink-muted"
            }`}
          >
            USD
          </button>
        </div>
      </div>

      <div className="space-y-4 my-5 text-xs sm:text-sm">
        <div>
          <label className="block font-mono uppercase text-brand-ink-muted text-xs font-semibold mb-1">
            Academic Level
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setLevel("O-Level")}
              className={`p-2.5 rounded-xl border text-xs font-bold transition-all ${
                level === "O-Level"
                  ? "bg-brand-maroon text-white border-brand-maroon"
                  : "bg-white border-brand-beige-border text-brand-ink"
              }`}
            >
              O-Level (S.1 – S.4)
            </button>
            <button
              type="button"
              onClick={() => setLevel("A-Level")}
              className={`p-2.5 rounded-xl border text-xs font-bold transition-all ${
                level === "A-Level"
                  ? "bg-brand-maroon text-white border-brand-maroon"
                  : "bg-white border-brand-beige-border text-brand-ink"
              }`}
            >
              A-Level (S.5 – S.6)
            </button>
          </div>
        </div>

        <div>
          <label className="block font-mono uppercase text-brand-ink-muted text-xs font-semibold mb-1">
            Enrollment Type
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => {
                setResidence("Boarding");
                setIncludeBus(false);
              }}
              className={`p-2.5 rounded-xl border text-xs font-bold transition-all ${
                residence === "Boarding"
                  ? "bg-brand-green-deep text-brand-gold border-brand-green-deep"
                  : "bg-white border-brand-beige-border text-brand-ink"
              }`}
            >
              Boarding (3 Meals & Dorm)
            </button>
            <button
              type="button"
              onClick={() => setResidence("Day")}
              className={`p-2.5 rounded-xl border text-xs font-bold transition-all ${
                residence === "Day"
                  ? "bg-brand-green-deep text-brand-gold border-brand-green-deep"
                  : "bg-white border-brand-beige-border text-brand-ink"
              }`}
            >
              Day Scholar (Hot Lunch)
            </button>
          </div>
        </div>

        <div className="space-y-2 pt-2 border-t border-brand-beige-border">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={includeUniform}
              onChange={(e) => setIncludeUniform(e.target.checked)}
              className="rounded text-brand-maroon focus:ring-brand-maroon"
            />
            <span className="text-brand-ink">
              Full Uniform Package (2 Day Wear, Sweater, Sports Kit, Badge)
            </span>
          </label>

          {residence === "Day" && (
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={includeBus}
                onChange={(e) => setIncludeBus(e.target.checked)}
                className="rounded text-brand-maroon focus:ring-brand-maroon"
              />
              <span className="text-brand-ink">
                School Van Transit Route (Kayunga, Bbaale, Kangulumira)
              </span>
            </label>
          )}

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={includeDevelopmentFund}
              onChange={(e) => setIncludeDevelopmentFund(e.target.checked)}
              className="rounded text-brand-maroon focus:ring-brand-maroon"
            />
            <span className="text-brand-ink">
              School Infrastructure & Library Development Fund
            </span>
          </label>
        </div>
      </div>

      <div className="p-4 bg-brand-green-deep text-brand-beige-light rounded-xl border border-brand-gold/30">
        <div className="flex items-baseline justify-between">
          <span className="font-mono text-xs text-brand-gold uppercase tracking-wider">
            Estimated Total Per Term:
          </span>
          <div className="text-right">
            <div className="font-serif font-bold text-2xl sm:text-3xl text-brand-gold-light">
              {currency === "UGX" ? `UGX ${formatMoney(totalUGX)}` : `$ ${totalUSD} USD`}
            </div>
            <div className="text-[11px] font-mono text-brand-beige-border/70">
              {currency === "UGX" ? `≈ $${totalUSD} USD` : `≈ UGX ${formatMoney(totalUGX)}`}
            </div>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-white/10 text-[11px] space-y-1 font-mono text-brand-beige-border">
          <div className="flex justify-between">
            <span>Tuition & Accommodation/Lunch:</span>
            <span>UGX {formatMoney(tuition)}</span>
          </div>
          <div className="flex justify-between">
            <span>Vocational Equipment & Materials:</span>
            <span>UGX {formatMoney(vocationalMaterialsCost)}</span>
          </div>
          {includeUniform && (
            <div className="flex justify-between">
              <span>Full Uniform & Sports Kit:</span>
              <span>UGX {formatMoney(uniformCost)}</span>
            </div>
          )}
          {busTransportCost > 0 && (
            <div className="flex justify-between">
              <span>Day Transit Route:</span>
              <span>UGX {formatMoney(busTransportCost)}</span>
            </div>
          )}
          {devFund > 0 && (
            <div className="flex justify-between">
              <span>Development Fund:</span>
              <span>UGX {formatMoney(devFund)}</span>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 text-[11px] text-brand-ink-muted text-center flex items-center justify-center gap-1.5">
        <Info className="w-3.5 h-3.5 text-brand-maroon flex-shrink-0" />
        <span>Flexible termly installment payment plans available through Stanbic & Centenary Bank.</span>
      </div>
    </div>
  );
};