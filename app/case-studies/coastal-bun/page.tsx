import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { HiFire, HiExternalLink, HiChevronLeft } from "react-icons/hi";

const beforeAfter = [
  { before: "No website", after: "Full Next.js site live on custom domain" },
  { before: "No online ordering", after: "Square-integrated checkout" },
  { before: "Not findable online", after: "SEO-optimized for local search" },
  {
    before: "Schedule shared verbally",
    after: "Live location + schedule page",
  },
  { before: "No data on customers", after: "Analytics + pixel tracking ready" },
];

export default function CoastalBunCaseStudy() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <div className="flex-1 subpage-top">
        <section className="section-padding bg-gradient-to-br from-white to-navy-50">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-sm text-navy-500 hover:text-navy-900 transition-colors mb-8"
            >
              <HiChevronLeft className="w-4 h-4" />
              All Case Studies
            </Link>

            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center">
                  <HiFire className="w-6 h-6 text-navy-900" />
                </div>
                <span className="text-sm font-medium text-navy-600 bg-navy-50 px-3 py-1 rounded-full">
                  Food & Restaurant
                </span>
                <span className="text-sm font-medium text-green-700 bg-green-50 px-3 py-1 rounded-full">
                  2 weeks
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-3">
                The Coastal Bun
              </h1>
              <p className="text-xl text-navy-600">
                Food Truck Website + Online Ordering
              </p>
            </div>

            {/* The Client */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-3">
                The Client
              </h2>
              <p className="text-navy-600 leading-relaxed">
                <strong className="text-navy-800">The Coastal Bun</strong> is an
                Asian fusion bao bun food truck operating in the Florida Keys —
                one of the highest-traffic tourism corridors in the Southeast
                US. The business is run by a single owner who needed a
                professional online presence to compete with established
                restaurants in the area, but had no website or digital marketing
                footprint.
              </p>
            </div>

            {/* The Problem */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-3">
                The Problem
              </h2>
              <ul className="space-y-2">
                {[
                  "No website or online ordering capability",
                  "Zero visibility in local search results",
                  "Customers had no way to find the truck\'s schedule or location",
                  "No way to accept payments online — cash/card only at the truck",
                  "Competing against restaurants with full websites, Google listings, and social media",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-navy-900 flex-shrink-0" />
                    <span className="text-navy-600 leading-relaxed">
                      {item}
                    </span>
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
                A full-stack Next.js 15 website with:
              </p>
              <div className="space-y-3">
                {[
                  {
                    label: "Mobile-first design",
                    desc: "60%+ of Keys tourism traffic comes from phones",
                  },
                  {
                    label: "Square payment integration",
                    desc: "Online ordering built in, zero extra fees beyond Square\'s standard rate",
                  },
                  {
                    label: "Location & schedule tracker",
                    desc: "Customers know exactly where and when to find the truck",
                  },
                  {
                    label: "SEO-optimized structure",
                    desc: "Structured data, sitemap, meta tags for local search ranking",
                  },
                  {
                    label: "Analytics-ready",
                    desc: "Google Analytics + Facebook Pixel wired up and ready to activate",
                  },
                  {
                    label: "Menu showcase",
                    desc: "High-quality food photography with clear pricing",
                  },
                  {
                    label: "Contact & booking forms",
                    desc: "Catering inquiries and event bookings",
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
                The Results
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
                      After
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
            </div>

            {/* Why It Matters */}
            <div className="mb-10 bg-navy-900 text-white rounded-xl p-6 sm:p-8">
              <h2 className="text-xl font-bold mb-3">Why It Matters</h2>
              <p className="text-navy-200 leading-relaxed">
                The Florida Keys tourism market is worth billions annually, but
                most small food & beverage businesses have weak or nonexistent
                web presence. A single well-built site with online ordering can
                capture customers who are planning trips in advance — the
                highest-value segment. The Coastal Bun went from invisible to a
                searchable, bookable, payable business in under two weeks.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-3">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js 15",
                  "TypeScript",
                  "Tailwind CSS",
                  "Square Payments API",
                  "Vercel",
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

            {/* Live Site Link */}
            <div className="mb-12 pt-6 border-t border-navy-100">
              <a
                href="https://pink-palm.shop/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-navy-500 hover:text-navy-900 transition-colors text-sm font-medium"
              >
                View the live site
                <HiExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* CTA */}
            <div className="text-center pt-8 border-t border-navy-200">
              <p className="text-lg text-navy-600 mb-4">
                Want results like this for your business?
              </p>
              <Link href="/#contact" className="btn-ios btn-navy inline-block">
                Get in touch
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
