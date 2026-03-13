"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";
import {
  HiArrowRight,
  HiCurrencyDollar,
  HiTrendingUp,
  HiRefresh,
  HiCheck,
} from "react-icons/hi";
import {
  GiBoatFishing,
  GiKnifeFork,
  GiWaveSurfer,
  GiHouseKeys,
  GiDivingHelmet,
  GiParachute,
  GiSailboat,
  GiPuzzle,
} from "react-icons/gi";

/* ── Data ────────────────────────────────────────────────────────── */

const BUSINESS_TYPES = [
  { value: "fishing", label: "Fishing Charter", icon: GiBoatFishing },
  { value: "restaurant", label: "Restaurant", icon: GiKnifeFork },
  { value: "watersports", label: "Watersports / Eco-Tour", icon: GiWaveSurfer },
  { value: "vacation", label: "Vacation Rental", icon: GiHouseKeys },
  { value: "snorkeling", label: "Snorkeling / Dive Tour", icon: GiDivingHelmet },
  { value: "parasailing", label: "Parasailing", icon: GiParachute },
  { value: "sunset", label: "Sunset Cruise", icon: GiSailboat },
  { value: "other", label: "Other", icon: GiPuzzle },
] as const;

type BusinessType = (typeof BUSINESS_TYPES)[number]["value"];

const BASE_COST: Record<BusinessType, number> = {
  fishing: 3000,
  restaurant: 2500,
  watersports: 2500,
  vacation: 3000,
  snorkeling: 2500,
  parasailing: 2000,
  sunset: 2000,
  other: 2500,
};

const ROI_RANGES: Record<BusinessType, [number, number]> = {
  fishing: [30000, 60000],
  restaurant: [25000, 50000],
  watersports: [20000, 45000],
  vacation: [35000, 70000],
  snorkeling: [20000, 40000],
  parasailing: [15000, 35000],
  sunset: [20000, 40000],
  other: [15000, 35000],
};

const SITUATION_OPTIONS = [
  { id: "no-site", label: "No website at all", costAdd: 500 },
  { id: "old-site", label: "Website over 5 years old", costAdd: 0 },
  { id: "not-mobile", label: "Not mobile-friendly", costAdd: 0 },
  { id: "no-booking", label: "No online booking / reservations", costAdd: 0 },
  { id: "no-gbp", label: "No Google Business profile", costAdd: 0 },
  { id: "poor-seo", label: "Poor Google rankings (not showing in Maps)", costAdd: 0 },
  { id: "no-photos", label: "No professional photos", costAdd: 0 },
];

const SERVICE_OPTIONS = [
  { id: "website", label: "New website design & build", costAdd: 0, monthlyAdd: 0 },
  { id: "booking", label: "Online booking integration (FareHarbor / OpenTable / etc)", costAdd: 1500, monthlyAdd: 0 },
  { id: "seo", label: "SEO optimization", costAdd: 1000, monthlyAdd: 0 },
  { id: "gbp", label: "Google Business setup", costAdd: 0, monthlyAdd: 0 },
  { id: "maintenance", label: "Monthly maintenance", costAdd: 0, monthlyAdd: 1 },
  { id: "social", label: "Social media setup", costAdd: 0, monthlyAdd: 0 },
];

/* ── Helpers ──────────────────────────────────────────────────────── */

function fmt(n: number) {
  return "$" + n.toLocaleString("en-US");
}

/* ── Component ───────────────────────────────────────────────────── */

export default function PricingCalculatorPage() {
  const [businessType, setBusinessType] = useState<BusinessType | "">("");
  const [situation, setSituation] = useState<Set<string>>(new Set());
  const [services, setServices] = useState<Set<string>>(new Set());

  const toggle = (set: Set<string>, id: string, setter: (s: Set<string>) => void) => {
    const next = new Set(set);
    next.has(id) ? next.delete(id) : next.add(id);
    setter(next);
  };

  /* ── Pricing logic ──────────────────────────────────────────── */
  const hasSelections = businessType !== "";

  const base = businessType ? BASE_COST[businessType] : 0;

  const situationCost = SITUATION_OPTIONS.reduce(
    (sum, opt) => sum + (situation.has(opt.id) ? opt.costAdd : 0),
    0,
  );

  const serviceCost = SERVICE_OPTIONS.reduce(
    (sum, opt) => sum + (services.has(opt.id) ? opt.costAdd : 0),
    0,
  );

  const projectLow = base + situationCost + serviceCost;
  const projectHigh = Math.round(projectLow * 1.4);

  const wantsMaintenance = services.has("maintenance");
  const monthlyLow = wantsMaintenance ? 150 : 0;
  const monthlyHigh = wantsMaintenance ? 500 : 0;

  const roiRange = businessType ? ROI_RANGES[businessType] : [0, 0];

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <div className="flex-1 subpage-top">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-br from-navy-900 to-navy-800 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Pricing Calculator
            </h1>
            <p className="text-xl text-navy-200 mb-2">
              Estimate your project cost &amp; first-year ROI in 60 seconds
            </p>
            <p className="text-navy-300">
              No signup required &mdash; adjust the options and see results instantly
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section className="section-padding bg-gradient-to-br from-white to-navy-50">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Left column — inputs */}
              <div className="lg:col-span-3 space-y-8">
                {/* Step 1 — Business type */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-7 h-7 bg-navy-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </span>
                    <h2 className="text-lg font-bold text-navy-900">
                      What type of business do you run?
                    </h2>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {BUSINESS_TYPES.map((bt) => {
                      const Icon = bt.icon;
                      const selected = businessType === bt.value;
                      return (
                        <button
                          key={bt.value}
                          type="button"
                          onClick={() => setBusinessType(bt.value)}
                          className={`rounded-xl border-2 p-4 text-center transition-all ${
                            selected
                              ? "border-navy-700 bg-navy-50 shadow-ios"
                              : "border-navy-100 bg-white hover:border-navy-300"
                          }`}
                        >
                          <Icon
                            className={`w-7 h-7 mx-auto mb-2 ${
                              selected ? "text-navy-900" : "text-navy-400"
                            }`}
                          />
                          <span
                            className={`text-xs font-semibold leading-tight block ${
                              selected ? "text-navy-900" : "text-navy-600"
                            }`}
                          >
                            {bt.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2 — Current situation */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-7 h-7 bg-navy-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </span>
                    <h2 className="text-lg font-bold text-navy-900">
                      Your current website situation
                    </h2>
                  </div>
                  <div className="space-y-2">
                    {SITUATION_OPTIONS.map((opt) => {
                      const checked = situation.has(opt.id);
                      return (
                        <label
                          key={opt.id}
                          className={`flex items-center gap-3 rounded-xl border-2 px-4 py-3 cursor-pointer transition-all ${
                            checked
                              ? "border-navy-700 bg-navy-50"
                              : "border-navy-100 bg-white hover:border-navy-300"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggle(situation, opt.id, setSituation)}
                            className="sr-only"
                          />
                          <span
                            className={`w-5 h-5 rounded flex items-center justify-center border-2 flex-shrink-0 ${
                              checked
                                ? "bg-navy-700 border-navy-700"
                                : "border-navy-300 bg-white"
                            }`}
                          >
                            {checked && (
                              <HiCheck className="w-3.5 h-3.5 text-white" />
                            )}
                          </span>
                          <span className="text-sm text-navy-800">{opt.label}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Step 3 — Services wanted */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-7 h-7 bg-navy-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </span>
                    <h2 className="text-lg font-bold text-navy-900">
                      Which services do you need?
                    </h2>
                  </div>
                  <div className="space-y-2">
                    {SERVICE_OPTIONS.map((opt) => {
                      const checked = services.has(opt.id);
                      return (
                        <label
                          key={opt.id}
                          className={`flex items-center gap-3 rounded-xl border-2 px-4 py-3 cursor-pointer transition-all ${
                            checked
                              ? "border-navy-700 bg-navy-50"
                              : "border-navy-100 bg-white hover:border-navy-300"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggle(services, opt.id, setServices)}
                            className="sr-only"
                          />
                          <span
                            className={`w-5 h-5 rounded flex items-center justify-center border-2 flex-shrink-0 ${
                              checked
                                ? "bg-navy-700 border-navy-700"
                                : "border-navy-300 bg-white"
                            }`}
                          >
                            {checked && (
                              <HiCheck className="w-3.5 h-3.5 text-white" />
                            )}
                          </span>
                          <span className="text-sm text-navy-800">{opt.label}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right column — results panel (sticky) */}
              <div className="lg:col-span-2">
                <div className="lg:sticky lg:top-28">
                  <div className="card-ios bg-gradient-to-br from-navy-900 to-navy-800 text-white">
                    <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                      <HiCurrencyDollar className="w-5 h-5 text-navy-300" />
                      Your Estimate
                    </h3>

                    {!hasSelections ? (
                      <p className="text-navy-300 text-sm">
                        Select your business type to see a live estimate.
                      </p>
                    ) : (
                      <div className="space-y-6">
                        {/* Project cost */}
                        <div>
                          <p className="text-xs font-semibold text-navy-400 uppercase tracking-widest mb-1">
                            Estimated Project Cost
                          </p>
                          <p className="text-3xl font-bold">
                            {fmt(projectLow)}{" "}
                            <span className="text-navy-400 text-lg font-normal">
                              &ndash;
                            </span>{" "}
                            {fmt(projectHigh)}
                          </p>
                        </div>

                        {/* Monthly maintenance */}
                        <div>
                          <p className="text-xs font-semibold text-navy-400 uppercase tracking-widest mb-1">
                            Monthly Maintenance
                          </p>
                          <p className="text-2xl font-bold">
                            {wantsMaintenance ? (
                              <>
                                {fmt(monthlyLow)}{" "}
                                <span className="text-navy-400 text-lg font-normal">
                                  &ndash;
                                </span>{" "}
                                {fmt(monthlyHigh)}
                                <span className="text-navy-400 text-base font-normal">
                                  /mo
                                </span>
                              </>
                            ) : (
                              <span className="text-navy-400 text-lg font-normal">
                                Not selected
                              </span>
                            )}
                          </p>
                        </div>

                        {/* ROI */}
                        <div className="pt-4 border-t border-navy-700">
                          <p className="text-xs font-semibold text-navy-400 uppercase tracking-widest mb-1 flex items-center gap-1">
                            <HiTrendingUp className="w-4 h-4" />
                            Estimated Year 1 ROI
                          </p>
                          <p className="text-3xl font-bold text-green-400">
                            {fmt(roiRange[0])}{" "}
                            <span className="text-navy-400 text-lg font-normal">
                              &ndash;
                            </span>{" "}
                            <span className="text-green-400">
                              {fmt(roiRange[1])}
                            </span>
                          </p>
                          <p className="text-xs text-navy-400 mt-1">
                            Based on typical results for{" "}
                            {BUSINESS_TYPES.find((b) => b.value === businessType)
                              ?.label.toLowerCase()}{" "}
                            businesses in the Florida Keys
                          </p>
                        </div>

                        {/* CTA */}
                        <Link
                          href="/contact"
                          className="btn-ios bg-white text-navy-900 hover:bg-navy-50 w-full text-center flex items-center justify-center gap-2 text-sm"
                        >
                          Get Your Free Detailed Quote
                          <HiArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    )}
                  </div>

                  {hasSelections && (
                    <button
                      type="button"
                      onClick={() => {
                        setBusinessType("");
                        setSituation(new Set());
                        setServices(new Set());
                      }}
                      className="mt-3 text-sm text-navy-500 hover:text-navy-700 transition-colors flex items-center gap-1 mx-auto"
                    >
                      <HiRefresh className="w-4 h-4" />
                      Reset calculator
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust band */}
        <section className="section-padding bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              Why Florida Keys Businesses Choose MCG
            </h2>
            <p className="text-lg text-navy-600 mb-10">
              We specialize in tourism businesses in the Keys &mdash; fishing
              charters, restaurants, watersports, vacation rentals, and more.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  stat: "40%",
                  label: "Average booking increase in 90 days",
                },
                {
                  stat: "Page 1",
                  label: "Google ranking within 60 days",
                },
                {
                  stat: "24hr",
                  label: "Booking availability for your customers",
                },
              ].map((item) => (
                <div key={item.stat} className="card-ios">
                  <p className="text-3xl font-bold text-navy-900 mb-1">
                    {item.stat}
                  </p>
                  <p className="text-sm text-navy-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-navy-950 py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Invest in Your Business?
            </h2>
            <p className="text-lg text-navy-300 mb-8 max-w-xl mx-auto">
              Get a free, no-obligation audit of your current website and a
              detailed proposal tailored to your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/audit"
                className="btn-ios btn-primary text-lg px-8 py-4"
              >
                Free Website Audit
              </Link>
              <Link
                href="/contact"
                className="btn-ios btn-secondary text-lg px-8 py-4 bg-transparent text-white border-navy-600 hover:bg-navy-800"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
