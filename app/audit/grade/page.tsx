"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import {
  HiCheckCircle,
  HiXCircle,
  HiExclamationCircle,
  HiArrowRight,
} from "react-icons/hi";
import Link from "next/link";

interface CheckResult {
  name: string;
  passed: boolean;
  score: number;
  detail: string;
  tip: string;
}

interface GradeResult {
  url: string;
  checks: CheckResult[];
  totalScore: number;
  grade: string;
  partial: boolean;
  error?: string;
}

const BUSINESS_TYPES = [
  { value: "", label: "Select your business type" },
  { value: "restaurant", label: "Restaurant" },
  { value: "fishing-charter", label: "Fishing Charter" },
  { value: "watersports", label: "Watersports" },
  { value: "vacation-rental", label: "Vacation Rental" },
  { value: "sunset-cruise", label: "Sunset Cruise" },
  { value: "snorkeling-tour", label: "Snorkeling Tour" },
  { value: "parasailing", label: "Parasailing" },
  { value: "other", label: "Other" },
];

function gradeColor(grade: string) {
  switch (grade) {
    case "A":
      return "text-green-500";
    case "B":
      return "text-blue-500";
    case "C":
      return "text-yellow-500";
    case "D":
      return "text-orange-500";
    default:
      return "text-red-500";
  }
}

function gradeBg(grade: string) {
  switch (grade) {
    case "A":
      return "bg-green-50 border-green-200";
    case "B":
      return "bg-blue-50 border-blue-200";
    case "C":
      return "bg-yellow-50 border-yellow-200";
    case "D":
      return "bg-orange-50 border-orange-200";
    default:
      return "bg-red-50 border-red-200";
  }
}

export default function WebsiteGraderPage() {
  const [url, setUrl] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "done" | "error"
  >("idle");
  const [result, setResult] = useState<GradeResult | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    setResult(null);

    try {
      const res = await fetch("/api/audit/grade", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, businessType }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong.");
        return;
      }

      setResult(data);
      setStatus("done");
    } catch {
      setStatus("error");
      setErrorMessage("Could not connect to the grading service. Please try again.");
    }
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-xl border border-navy-200 text-navy-900 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:border-transparent transition-all text-sm";

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <div className="flex-1 subpage-top">
        {/* Hero */}
        <section className="section-padding bg-gradient-to-br from-navy-900 to-navy-800 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Website Grader
            </h1>
            <p className="text-xl text-navy-200 mb-2">
              Get your website&apos;s report card in seconds &mdash; free, instant, no signup
            </p>
            <p className="text-navy-300">
              We check speed, mobile-friendliness, SEO basics, and booking readiness
            </p>
          </div>
        </section>

        {/* Form */}
        <section className="section-padding bg-gradient-to-br from-white to-navy-50">
          <div className="max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="card-ios space-y-5">
              <div>
                <label
                  htmlFor="url"
                  className="block text-sm font-medium text-navy-900 mb-1.5"
                >
                  Website URL *
                </label>
                <input
                  type="text"
                  id="url"
                  required
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className={inputClasses}
                  placeholder="e.g. yourwebsite.com"
                />
              </div>

              <div>
                <label
                  htmlFor="businessType"
                  className="block text-sm font-medium text-navy-900 mb-1.5"
                >
                  Business Type *
                </label>
                <select
                  id="businessType"
                  required
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                  className={`${inputClasses} bg-white`}
                >
                  {BUSINESS_TYPES.map((t) => (
                    <option key={t.value} value={t.value}>
                      {t.label}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-ios btn-navy w-full text-center disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Analyzing...
                  </>
                ) : (
                  "Grade My Website"
                )}
              </button>
            </form>

            {status === "error" && (
              <div className="mt-6 card-ios bg-red-50 border border-red-200">
                <div className="flex items-start gap-3">
                  <HiExclamationCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-red-800">
                      Something went wrong
                    </p>
                    <p className="text-sm text-red-700 mt-1">{errorMessage}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Results */}
        {status === "done" && result && (
          <section className="section-padding bg-white">
            <div className="max-w-3xl mx-auto">
              {result.partial && result.error && (
                <div className="card-ios bg-yellow-50 border border-yellow-200 mb-8">
                  <div className="flex items-start gap-3">
                    <HiExclamationCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-yellow-800">
                        Partial results
                      </p>
                      <p className="text-sm text-yellow-700 mt-1">
                        {result.error} Some checks could not be completed.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Grade Card */}
              <div
                className={`card-ios border-2 text-center mb-10 ${gradeBg(result.grade)}`}
              >
                <p className="text-sm font-semibold text-navy-500 uppercase tracking-widest mb-2">
                  Your Website Grade
                </p>
                <div
                  className={`text-8xl sm:text-9xl font-black ${gradeColor(result.grade)} leading-none mb-3`}
                >
                  {result.grade}
                </div>
                <p className="text-3xl font-bold text-navy-900">
                  {result.totalScore}
                  <span className="text-lg text-navy-500 font-normal">
                    {" "}
                    / 100
                  </span>
                </p>
                <p className="text-sm text-navy-500 mt-2 break-all">
                  {result.url}
                </p>
              </div>

              {/* Checks Breakdown */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-navy-900 mb-6">
                  Detailed Breakdown
                </h2>
                <div className="space-y-3">
                  {result.checks.map((check, i) => (
                    <div
                      key={i}
                      className={`card-ios border ${
                        check.passed
                          ? "border-navy-100"
                          : "border-red-200 bg-red-50/50"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 mt-0.5">
                          {check.passed ? (
                            <HiCheckCircle className="w-6 h-6 text-green-500" />
                          ) : (
                            <HiXCircle className="w-6 h-6 text-red-500" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <h3 className="font-semibold text-navy-900">
                              {check.name}
                            </h3>
                            <span
                              className={`text-sm font-bold ${
                                check.passed
                                  ? "text-green-600"
                                  : "text-red-600"
                              }`}
                            >
                              {check.score}/10
                            </span>
                          </div>
                          <p className="text-sm text-navy-600 mt-0.5">
                            {check.detail}
                          </p>
                          {!check.passed && (
                            <p className="text-xs text-red-700 mt-1.5 bg-red-50 rounded-lg px-3 py-2">
                              {check.tip}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="card-ios bg-gradient-to-br from-navy-900 to-navy-800 text-white text-center">
                <h2 className="text-2xl font-bold mb-3">
                  MCG Can Fix These Issues
                </h2>
                <p className="text-navy-200 mb-6">
                  We specialize in Florida Keys tourism businesses. Let us turn
                  your website into a booking machine.
                </p>
                <Link
                  href="/contact"
                  className="btn-ios bg-white text-navy-900 hover:bg-navy-50 inline-flex items-center gap-2"
                >
                  Get a Free Consultation
                  <HiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* How it works - shown when no results */}
        {status !== "done" && (
          <section className="section-padding bg-white">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-sm font-semibold text-navy-500 uppercase tracking-widest mb-3">
                  How It Works
                </p>
                <h2 className="text-3xl font-bold text-navy-900">
                  Instant Website Analysis
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    step: "1",
                    title: "Enter Your URL",
                    desc: "Paste your website address and select your business type",
                  },
                  {
                    step: "2",
                    title: "We Scan Your Site",
                    desc: "Our tool checks speed, mobile readiness, SEO, and booking flow",
                  },
                  {
                    step: "3",
                    title: "Get Your Grade",
                    desc: "See exactly what's working and what's costing you bookings",
                  },
                ].map((item) => (
                  <div key={item.step} className="card-ios text-center">
                    <div className="w-10 h-10 bg-navy-900 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-navy-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-navy-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
      <Footer />
    </main>
  );
}
