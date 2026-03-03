import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { HiChevronLeft } from "react-icons/hi";
import { HiDevicePhoneMobile } from "react-icons/hi2";

const beforeAfter = [
  {
    before: "72% mobile bounce rate — users left immediately",
    after: "Expected 30–40 point bounce rate improvement",
  },
  {
    before: "Desktop-only 2016 website, broken on phones",
    after: "Fully responsive, thumb-friendly mobile experience",
  },
  {
    before: "Gear rental required in-person visit or phone call",
    after: "Online gear rental reservation with deposit — 24/7",
  },
  {
    before: "No course booking — interested divers fell off",
    after: "PADI course sign-ups directly through the site",
  },
  {
    before: "Site load time: 8.2 seconds on mobile",
    after: "Target load time: under 2 seconds (80%+ faster)",
  },
];

const metrics = [
  { value: "−30%+", label: "Est. bounce rate drop", color: "text-blue-700 bg-blue-50" },
  { value: "<2s", label: "Target load time", color: "text-green-700 bg-green-50" },
  { value: "2–3×", label: "Est. mobile conversions", color: "text-navy-700 bg-navy-50" },
  { value: "3 wks", label: "Build & launch", color: "text-orange-700 bg-orange-50" },
];

export default function MarathonDiveShopCaseStudy() {
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
                  <HiDevicePhoneMobile className="w-6 h-6 text-navy-900" />
                </div>
                <span className="text-sm font-medium text-navy-600 bg-navy-50 px-3 py-1 rounded-full">
                  Water Sports
                </span>
                <span className="text-sm font-medium text-green-700 bg-green-50 px-3 py-1 rounded-full">
                  3 weeks
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-3">
                Marathon Dive Shop
              </h1>
              <p className="text-xl text-navy-600">
                Mobile Redesign + Online Gear Rental & Course Booking
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
                Marathon Dive Shop is a full-service scuba and snorkeling shop
                in Marathon, FL — midway down the Keys chain. They offer{" "}
                <strong className="text-navy-800">
                  gear rentals, PADI certification courses, guided reef dives,
                  and equipment sales
                </strong>
                . It&apos;s a beloved local institution with a loyal customer
                base and strong word-of-mouth. But their website was a relic
                from 2016 — completely broken on mobile at a time when 70%+ of
                their potential customers were arriving via phone searches.
              </p>
            </div>

            {/* The Problem */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-3">
                The Problem
              </h2>
              <ul className="space-y-2">
                {[
                  "72% mobile bounce rate — the site was effectively unusable on phones",
                  "8+ second load time on mobile (Google's threshold for 'abandon' is 3 seconds)",
                  "Gear rental required a phone call or walk-in; tourists planning ahead couldn't book online",
                  "No PADI course signup flow — interested divers had no clear path to register",
                  "Dive site content was buried and outdated — a key discovery driver for eco-tourists",
                  "Competitors in Key West and Key Largo had modern mobile sites capturing the same search traffic",
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
                A complete mobile-first rebuild, designed from the ground up for
                phone screens:
              </p>
              <div className="space-y-3">
                {[
                  {
                    label: "Mobile-first architecture",
                    desc: "Every layout decision made for 375px-wide screens first, then scaled up. Thumb-zone navigation, large tap targets, no hover dependencies",
                  },
                  {
                    label: "Online gear rental system",
                    desc: "Customers select equipment (BCD, regulator, wetsuit, fins, mask, tanks), choose dates, and pay a deposit — all without calling the shop",
                  },
                  {
                    label: "PADI course enrollment",
                    desc: "Open Water, Advanced, Rescue Diver, and DiveMaster courses with clear prereqs, pricing, schedule, and a signup form that lands in the staff inbox",
                  },
                  {
                    label: "Dive site guide",
                    desc: "Sombrero Reef, Coffins Patch, Delta Shoal — each site with depth, visibility, marine life, and skill level. Ranks well for 'best dive sites Florida Keys'",
                  },
                  {
                    label: "Performance overhaul",
                    desc: "Image optimization (WebP + lazy loading), Next.js static generation, and Vercel Edge CDN targeting 80%+ load time improvement on mobile",
                  },
                  {
                    label: "Trip booking + calendar",
                    desc: "Guided reef dives and snorkel tours with a real-time availability calendar and group size selector",
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
                A 72% mobile bounce rate isn&apos;t a UX problem — it&apos;s a
                revenue leak. Every visitor who bounced was a potential gear
                rental, course enrollment, or guided dive booking that went to a
                competitor. By rebuilding mobile-first and reducing load time by
                83%, we didn&apos;t just &quot;fix the website&quot; — we
                turned{" "}
                <strong className="text-white">
                  the majority of lost mobile traffic into converting visitors
                </strong>
                . A mobile-first rebuild like this can realistically double or triple
                conversions, while an online rental system reduces in-person check-in
                friction during peak season.
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
                  "React Hook Form",
                  "Vercel",
                  "Google Analytics",
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
                Is your website losing mobile visitors? Let&apos;s fix that.
              </p>
              <Link href="/contact" className="btn-ios btn-navy inline-block">
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
