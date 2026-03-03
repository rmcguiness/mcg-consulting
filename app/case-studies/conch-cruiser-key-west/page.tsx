import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { HiChevronLeft, HiStar } from "react-icons/hi";

const beforeAfter = [
  {
    before: "All bookings by phone — none online",
    after: "55% of all bookings now completed online via FareHarbor",
  },
  {
    before: "7.4 second mobile load time",
    after: "1.6 second load time — 78% faster",
  },
  {
    before: "340 Google reviews invisible to website visitors",
    after: "Live review widget on homepage; 518 reviews after 6 months",
  },
  {
    before: "2.1% booking conversion rate",
    after: "6.8% booking conversion rate — 3.2× improvement",
  },
  {
    before: "Site last updated 2018; footer read '© 2018'",
    after: "Modern mobile-first site reflecting the quality of the actual tours",
  },
];

const metrics = [
  { value: "3.2×", label: "Booking conversions", color: "text-green-700 bg-green-50" },
  { value: "78%", label: "Faster on mobile", color: "text-blue-700 bg-blue-50" },
  { value: "+47%", label: "Mobile traffic", color: "text-navy-700 bg-navy-50" },
  { value: "$71K", label: "Added revenue (6 mo)", color: "text-orange-700 bg-orange-50" },
];

export default function ConchCruiserCaseStudy() {
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
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center">
                  <HiStar className="w-6 h-6 text-navy-900" />
                </div>
                <span className="text-sm font-medium text-navy-600 bg-navy-50 px-3 py-1 rounded-full">
                  Tourism &amp; Boat Tours
                </span>
                <span className="text-sm font-medium text-green-700 bg-green-50 px-3 py-1 rounded-full">
                  3 weeks
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-3">
                Conch Cruiser Boat Tours
              </h1>
              <p className="text-xl text-navy-600">
                Full Rebuild + FareHarbor Integration + Mobile Optimization
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
              <h2 className="text-2xl font-bold text-navy-900 mb-3">The Client</h2>
              <p className="text-navy-600 leading-relaxed">
                Conch Cruiser Boat Tours is a Key West boat tour operator running{" "}
                <strong className="text-navy-800">
                  sunset cruises, snorkel adventures, and private charters
                </strong>{" "}
                out of the Historic Seaport. They&apos;ve been operating for 11 years — a genuinely great product with strong word-of-mouth, 340+ Google reviews, and a loyal base of return customers. The problem: their website was built in 2018, hadn&apos;t been touched since, required a phone call to book, and was getting outcompeted on search by operators who had invested in modern digital infrastructure.
              </p>
            </div>

            {/* The Problem */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-3">The Problem</h2>
              <ul className="space-y-2">
                {[
                  "No online booking — every reservation required a phone call during business hours; tourists planning ahead at night or on weekends went elsewhere",
                  "Outdated site from 2018 — not mobile-optimized, 7.4 second load time on mobile, footer still read '© 2018'",
                  "Invisible on mobile search — competing Key West operators with FareHarbor integration were ranking above them for 'Key West boat tour' and 'Key West snorkel trip'",
                  "340+ Google reviews (4.8 stars) with none of that social proof on their own website — a massive missed conversion opportunity",
                  "No analytics — no way to know where traffic was coming from or which pages drove bookings",
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
              <h2 className="text-2xl font-bold text-navy-900 mb-3">What We Built</h2>
              <p className="text-navy-600 leading-relaxed mb-4">
                A full-stack rebuild using Next.js 15 and Tailwind CSS, mobile-first from day one:
              </p>
              <div className="space-y-3">
                {[
                  {
                    label: "FareHarbor booking integration",
                    desc: "Real-time availability calendar embedded directly in the site — customers select tour type, date, group size, and pay a deposit in under 3 minutes. No phone call required.",
                  },
                  {
                    label: "Tour catalog with clear pricing",
                    desc: "Dedicated pages for each product: Sunset Cruise, Reef Snorkel Adventure, Private Charter — each with full descriptions, inclusions, what to bring, and a direct booking CTA.",
                  },
                  {
                    label: "Live Google Reviews widget",
                    desc: "Pulling their top Google reviews directly onto the homepage. Auto-updates as new reviews come in — the 4.8-star average is the first thing visitors see.",
                  },
                  {
                    label: "Post-tour review request flow",
                    desc: "Automated email sent 24 hours after tour completion asking for a Google review, with a direct link. Review count went from 340 to 518 in 6 months.",
                  },
                  {
                    label: "Mobile performance overhaul",
                    desc: "WebP image optimization, lazy loading, and Next.js static generation cut load time from 7.4 seconds to 1.6 seconds — a 78% improvement.",
                  },
                  {
                    label: "Local SEO structure",
                    desc: "Title tags, meta descriptions, structured data, and content optimized for 'Key West boat tour,' 'Key West sunset cruise,' and 'Key West snorkel trip.'",
                  },
                  {
                    label: "Google Analytics 4 + conversion tracking",
                    desc: "Full funnel visibility from organic search click to FareHarbor booking confirmation — so they know exactly what's working.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg border border-navy-100 p-4"
                  >
                    <p className="font-semibold text-navy-900 text-sm">{item.label}</p>
                    <p className="text-navy-600 text-sm mt-0.5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Before / After */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">The Results</h2>
              <div className="border border-navy-200 rounded-xl overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="bg-navy-50 px-4 py-3 border-b border-navy-200">
                    <p className="text-xs font-bold text-navy-500 uppercase tracking-wider">Before</p>
                  </div>
                  <div className="bg-green-50 px-4 py-3 border-b border-navy-200 border-l border-navy-200">
                    <p className="text-xs font-bold text-green-600 uppercase tracking-wider">After</p>
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
                      <p className="text-sm text-navy-800 font-medium">{row.after}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Revenue note */}
              <p className="text-xs text-navy-400 mt-3 leading-relaxed">
                Revenue figure based on average booking value of $94/person and tracked FareHarbor conversion volume over 6 months post-launch. Does not include estimated secondary bookings from referrals attributable to improved review count.
              </p>
            </div>

            {/* Why It Matters */}
            <div className="mb-10 bg-navy-900 text-white rounded-xl p-6 sm:p-8">
              <h2 className="text-xl font-bold mb-3">Why It Matters</h2>
              <p className="text-navy-200 leading-relaxed">
                Key West tourists book the same way every other traveler does: they search on their phone, compare two or three options, and book the one with the cleanest experience and most visible social proof. Conch Cruiser already had the product. They just weren&apos;t surfacing where decisions were being made.
              </p>
              <p className="text-navy-200 leading-relaxed mt-3">
                By building a fast, mobile-first site with FareHarbor wired in and{" "}
                <strong className="text-white">340 five-star reviews finally visible on their own homepage</strong>, we turned what was already a great operation into one that could be found, trusted, and booked without a single phone call.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy-900 mb-3">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Next.js 15",
                  "TypeScript",
                  "Tailwind CSS",
                  "FareHarbor API",
                  "Google Reviews API",
                  "Google Analytics 4",
                  "Vercel",
                  "WebP / Image Optimization",
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
                Running tours, charters, or experiences in the Keys?
              </p>
              <Link href="/#contact" className="btn-ios btn-navy inline-block">
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
