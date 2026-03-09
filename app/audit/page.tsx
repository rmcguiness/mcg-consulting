"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import {
  HiDeviceMobile,
  HiCursorClick,
  HiSearchCircle,
  HiCheckCircle,
} from "react-icons/hi";

export default function AuditPage() {
  const [formData, setFormData] = useState({
    businessName: "",
    websiteUrl: "",
    businessType: "",
    name: "",
    email: "",
    phone: "",
    frustration: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
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
              Get Your Free Florida Keys Business Website Audit
            </h1>
            <p className="text-xl text-navy-200 mb-8">
              In 24 hours, we&apos;ll tell you exactly what&apos;s costing you
              bookings &mdash; and how to fix it
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <div className="flex items-center gap-2 text-navy-200">
                <HiCheckCircle className="w-5 h-5 text-green-400" />
                <span>47 Keys businesses analyzed</span>
              </div>
              <div className="flex items-center gap-2 text-navy-200">
                <HiCheckCircle className="w-5 h-5 text-green-400" />
                <span>100% free, no obligation</span>
              </div>
            </div>
          </div>
        </section>

        {/* Audit Form */}
        <section className="section-padding bg-gradient-to-br from-white to-navy-50">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-sm font-semibold text-navy-500 uppercase tracking-widest mb-3">
                Request Your Audit
              </p>
              <h2 className="text-3xl font-bold text-navy-900">
                Tell Us About Your Business
              </h2>
            </div>

            {status === "success" ? (
              <div className="card-ios text-center py-16">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HiCheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-navy-900 mb-2">
                  Audit Request Received!
                </h2>
                <p className="text-navy-600">
                  We&apos;ll have your audit ready within 24 hours. Check your
                  inbox for updates.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-ios space-y-5">
                {status === "error" && (
                  <div className="bg-red-50 text-red-700 text-sm rounded-xl px-4 py-3">
                    {errorMessage}
                  </div>
                )}

                <div>
                  <label
                    htmlFor="businessName"
                    className="block text-sm font-medium text-navy-900 mb-1.5"
                  >
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="e.g. Keys Adventure Charters"
                  />
                </div>

                <div>
                  <label
                    htmlFor="websiteUrl"
                    className="block text-sm font-medium text-navy-900 mb-1.5"
                  >
                    Website URL *
                  </label>
                  <input
                    type="url"
                    id="websiteUrl"
                    name="websiteUrl"
                    required
                    value={formData.websiteUrl}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="https://yourwebsite.com"
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
                    name="businessType"
                    required
                    value={formData.businessType}
                    onChange={handleChange}
                    className={`${inputClasses} bg-white`}
                  >
                    <option value="">Select your business type</option>
                    <option value="Fishing Charter">Fishing Charter</option>
                    <option value="Dive Shop">Dive Shop</option>
                    <option value="Tour Operator">Tour Operator</option>
                    <option value="Restaurant">Restaurant</option>
                    <option value="Hotel">Hotel</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-navy-900 mb-1.5"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-navy-900 mb-1.5"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-navy-900 mb-1.5"
                  >
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="(305) 555-1234"
                  />
                </div>

                <div>
                  <label
                    htmlFor="frustration"
                    className="block text-sm font-medium text-navy-900 mb-1.5"
                  >
                    What&apos;s your biggest frustration with your current
                    website? (optional)
                  </label>
                  <textarea
                    id="frustration"
                    name="frustration"
                    rows={3}
                    maxLength={300}
                    value={formData.frustration}
                    onChange={handleChange}
                    className={`${inputClasses} resize-none`}
                    placeholder="e.g. People visit but never book, my site looks outdated on phones..."
                  />
                  <p className="text-xs text-navy-400 mt-1 text-right">
                    {formData.frustration.length}/300
                  </p>
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
                      Submitting...
                    </>
                  ) : (
                    "Get My Free Audit"
                  )}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* What You Get */}
        <section className="section-padding bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-navy-500 uppercase tracking-widest mb-3">
                What You Get
              </p>
              <h2 className="text-3xl font-bold text-navy-900">
                A Complete Picture of Your Website&apos;s Performance
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card-ios text-center">
                <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <HiDeviceMobile className="w-6 h-6 text-navy-900" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  Mobile Performance
                </h3>
                <p className="text-sm text-navy-600">
                  We test your site on the same phones your customers use
                </p>
              </div>

              <div className="card-ios text-center">
                <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <HiCursorClick className="w-6 h-6 text-navy-900" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  Booking Flow
                </h3>
                <p className="text-sm text-navy-600">
                  Every click from Google &rarr; booking confirmation, mapped and
                  graded
                </p>
              </div>

              <div className="card-ios text-center">
                <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <HiSearchCircle className="w-6 h-6 text-navy-900" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">
                  SEO &amp; Visibility
                </h3>
                <p className="text-sm text-navy-600">
                  What searches you&apos;re ranking for (and which ones
                  you&apos;re missing)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="section-padding bg-gradient-to-br from-white to-navy-50">
          <div className="max-w-3xl mx-auto">
            <div className="card-ios">
              <blockquote className="text-navy-700 text-lg leading-relaxed mb-4">
                &ldquo;The audit found that my &lsquo;Book Now&rsquo; button
                wasn&apos;t even working on iPhones. I had no idea &mdash; who
                knows how many charters I lost. They fixed it the same
                week.&rdquo;
              </blockquote>
              <p className="text-sm font-semibold text-navy-900">
                Captain Mike
              </p>
              <p className="text-sm text-navy-500">Marathon, FL</p>
            </div>

            <div className="mt-8 text-center">
              <p className="text-navy-600 text-lg">
                <span className="font-bold text-navy-900">
                  3 of our first 5 audit clients
                </span>{" "}
                became paying customers
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
