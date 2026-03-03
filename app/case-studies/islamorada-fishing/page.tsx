import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { HiChevronLeft, HiTrendingUp } from "react-icons/hi";

const beforeAfter = [
  {
    before: "Bookings only by phone or walk-in",
    after: "Estimated 30–40% of bookings shifted online",
  },
  {
    before: "No website — invisible to search",
    after: "Targeting Page 1 for 'Islamorada fishing charter'",
  },
  {
    before: "No way to show trip options online",
    after: "Full trip catalog: half-day, full-day, private & group charters",
  },
  {
    before: "Zero photo presence online",
    after: "High-resolution gallery showcasing catches and experiences",
  },
  {
    before: "Seasonal call volume overwhelming staff",
    after: "Self-serve booking with real-time availability — reducing staff load",
  },
];

const metrics = [
  { value: "~40%", label: "Est. online bookings", color: "text-green-700 bg-green-50" },
  { value: "3 mo", label: "Expected time to impact", color: "text-navy-700 bg-navy-50" },
  { value: "Top 5", label: "Target search rank", color: "text-blue-700 bg-blue-50" },
  { value: "2 wks", label: "Build & launch time", color: "text-orange-700 bg-orange-50" },
];

export default function IslamoradaFishingCaseStudy() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <div className="flex-1 subpage-top">
        <section className="section-padding bg-gradient-to-br from-white to-navy-50">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 text-sm text-navy-500 hover:text-navy-900 transition-colors mb-8"
            >
              <HiChevronLeft className="w-4 h-4" />
              Back to Insights
            </Link>

            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center">
                  <HiTrendingUp className="w-6 h-6 text-navy-900" />
                </div>
                <span className="text-sm font-medium text-navy-600 bg-navy-50 px-3 py-1 rounded-full">
                  Tourism & Fishing
                </span>
                <span className="text-sm font-medium text-green-700 bg-green-50 px-3 py-1 rounded-full">
                  2 weeks
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-3">
                Islamorada Sport Fishing
              </h1>
              <p className="text-xl text-navy-600">
                Charter Booking Website + Online Reservations
              </p>
            </div>

            {/* Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className={`rounded-xl px-4 py-4 text-center ${m.color}`}
                >
                  <p className="text-2xl font-bold">{m.value}</p>
                  <p className="text-xs mt-0.5 opacity-80">{m.label}</p>
                </div>
              ))}
            </div>

            {/* The Client */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-3">
                The Client
              </h2>
              <p className="text-navy-600 leading-relaxed">
                A family-owned sport fishing charter operating out of Islamorada
                — the self-proclaimed{" "}
                <strong className="text-navy-800">
                  &ldquo;Sport Fishing Capital of the World&rdquo;
                </strong>
                . With decades of local knowledge, a fleet of fully rigged
                offshore boats, and a loyal base of repeat customers, the
                business was thriving in peak season. The problem: every booking
                still happened by phone or in person at the marina, and the
                owner had no web presence to capture the thousands of tourists
                researching Keys fishing trips months in advance.
              </p>
            </div>

            {/* The Problem */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-3">
                The Problem
              </h2>
              <ul className="space-y-2">
                {[
                  "No website — the charter was completely invisible to online search",
                  "All bookings required a phone call or showing up at the dock, creating friction for out-of-state tourists planning ahead",
                  "Competitors with booking sites were capturing the high-value 'advance planner' segment first",
                  "No way to showcase trip types, pricing, gear, or catch history online",
                  "Peak season overwhelmed staff with booking calls that could be self-served",
                  "No Google Business profile, no reviews platform, no social proof",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-navy-900 flex-shrink-0" />
                    <span className="text-navy-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What We Built */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-3">
                What We Built
              </h2>
              <p className="text-navy-600 leading-relaxed mb-4">
                A conversion-focused charter booking website with:
              </p>
              <div className="space-y-3">
                {[
                  {
                    label: "FareHarbor booking integration",
                    desc: "Industry-standard charter booking platform wired directly into the site — customers select date, trip type, group size, and pay a deposit in under 3 minutes",
                  },
                  {
                    label: "Trip catalog with clear pricing",
                    desc: "Half-day inshore, full-day offshore, private and shared charters — each with gear lists, what's included, and captain bios",
                  },
                  {
                    label: "Catch gallery",
                    desc: "High-resolution photo gallery showcasing real catches: mahi, sailfish, tarpon, snook — the social proof that converts first-time visitors",
                  },
                  {
                    label: "Local SEO structure",
                    desc: "Optimized for 'Islamorada fishing charter', 'Keys offshore fishing', and 'Florida Keys sport fishing' — the queries tourists actually use",
                  },
                  {
                    label: "Mobile-first design",
                    desc: "Over 65% of fishing charter searches happen on mobile; the booking flow is fully optimized for thumb-only navigation",
                  },
                  {
                    label: "Google Business integration",
                    desc: "Coordinated site launch with Google Business Profile setup and review request flow",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg border border-navy-100 p-4"
                  >
                    <p className="font-semibold text-navy-900 text-sm">
                      {item.label}
                    </p>
                    <p className="text-navy-600 text-sm mt-0.5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Before / After */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                Projected Outcomes
              </h2>
              <div className="border border-navy-200 rounded-xl overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="bg-navy-50 px-4 py-3 border-b border-navy-200">
                    <p className="text-xs font-bold text-navy-500 uppercase tracking-wider">
                      Before
                    </p>
                  </div>
                  <div className="bg-green-50 px-4 py-3 border-b border-navy-200 border-l border-navy-200">
                    <p className="text-xs font-bold text-green-600 uppercase tracking-wider">
                      Expected After
                    </p>
                  </div>
                </div>
                {beforeAfter.map((row, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-2 ${i < beforeAfter.length - 1 ? "border-b border-navy-100" : ""}`}
                  >
                    <div className="px-4 py-3">
                      <p className="text-sm text-navy-600">{row.before}</p>
                    </div>
                    <div className="px-4 py-3 border-l border-navy-100 bg-green-50/30">
                      <p className="text-sm text-navy-800 font-medium">
                        {row.after}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-navy-400 mt-3 italic">
                Projections based on similar clients in the Keys tourism market. This is a prospective case study.
              </p>
            </div>

            {/* Why It Matters */}
            <div className="mb-10 bg-navy-900 text-white rounded-xl p-6 sm:p-8">
              <h2 className="text-xl font-bold mb-3">Why It Matters</h2>
              <p className="text-navy-200 leading-relaxed">
                The Florida Keys tourism economy runs on advance planning.
                Families and groups visiting from out of state book their
                activities weeks or months before arrival — and they book online.
                A charter with no website doesn&apos;t exist to this segment.
                With a{" "}
                <strong className="text-white">
                  frictionless online booking flow
                </strong>{" "}
                and first-page search visibility, a charter like this could shift 30–40% of
                booking volume to self-serve within a single season — reducing
                phone load on staff while capturing higher-value tourists who
                plan ahead.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy-900 mb-3">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js 15",
                  "TypeScript",
                  "Tailwind CSS",
                  "FareHarbor API",
                  "Vercel",
                  "Google Analytics",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-sm font-medium text-navy-700 bg-navy-100 px-3 py-1.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-8 border-t border-navy-200">
              <p className="text-lg text-navy-600 mb-4">
                Own a charter, tour, or experience business in the Keys?
              </p>
              <Link href="/contact" className="btn-ios btn-navy inline-block">
                Let&apos;s talk
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
