import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { HiChevronLeft, HiCheckCircle, HiXCircle } from "react-icons/hi";

export const metadata = {
  title: "5 Things Every Florida Keys Tourism Business Website Must Have in 2026 | MCG Consulting",
  description:
    "A practical checklist for charter boats, restaurants, dive shops, and watersports operators in the Florida Keys. Mobile speed, online booking, Google Maps, reviews, and SSL.",
};

const checks = [
  {
    number: "01",
    title: "Mobile Speed Under 3 Seconds",
    good: "Your site loads fully on a phone in 2 seconds or less — even on a mediocre connection.",
    bad: "A homepage that loads six large images before showing anything. A user waits 7 seconds, sees nothing useful, and hits back.",
    detail:
      "This is the single most important factor. Over 65% of Keys tourism searches happen on mobile. Google penalizes slow sites in rankings. And real users abandon pages that take more than 3 seconds to load — consistently, measurably, every time.",
    tip: "Go to PageSpeed Insights (pagespeed.web.dev) and run your URL. If your mobile score is below 70, you have a problem.",
  },
  {
    number: "02",
    title: "Online Booking or Reservation System",
    good: "A \"Book Now\" button that opens a real calendar, lets the customer select a date and group size, and collects a deposit — without anyone picking up a phone.",
    bad: "\"Call us to reserve!\" in bold text. Or a contact form with no date fields.",
    detail:
      "Tourists planning a Keys trip — especially from out of state — are booking activities months in advance, often at night or on weekends when your phone isn't answered. If you can't capture that booking digitally, you don't get it. For charter boats and water tours: FareHarbor is the industry standard. For restaurants: OpenTable, Resy, or Tock beats a phone number.",
    tip: null,
  },
  {
    number: "03",
    title: "Google Maps Integration",
    good: "An embedded Google Map on your contact/location page, plus a fully claimed and optimized Google Business Profile with current photos, hours, and responses to recent reviews.",
    bad: "A text address with no map. Or a Business Profile that hasn't been updated since 2022.",
    detail:
      "When someone Googles your business name, Google Business is often the first thing they see — before your actual website. An unclaimed or abandoned profile costs you trust, clicks, and search rank simultaneously.",
    tip: null,
  },
  {
    number: "04",
    title: "Social Proof (Reviews, Front and Center)",
    good: "Your best Google or TripAdvisor reviews displayed prominently on the homepage. A live review count. A system that emails customers after a trip to request a review.",
    bad: "Glowing Yelp reviews that no website visitor ever sees. Or testimonials that were copy-pasted in 2019 and never updated.",
    detail:
      "Tourists are risk-averse. They're spending real money on an experience they can't preview. Reviews are the thing that tips a \"maybe\" into a \"book now.\" Show them early, show them often.",
    tip: null,
  },
  {
    number: "05",
    title: "SSL Certificate + Basic Security",
    good: "Your URL starts with https://. The padlock is there. The site feels professional and safe.",
    bad: "A browser warning that says \"Not Secure\" — which Chrome now shows prominently for any HTTP site.",
    detail:
      "This is table stakes in 2026. Every serious hosting provider offers SSL for free. There's no excuse for running without it, and it actively hurts your Google ranking.",
    tip: null,
  },
];

export default function FiveThingsPost() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <div className="flex-1 subpage-top">
        <section className="section-padding bg-gradient-to-br from-white to-navy-50">
          <div className="max-w-3xl mx-auto">
            {/* Back */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-navy-500 hover:text-navy-900 transition-colors mb-8"
            >
              <HiChevronLeft className="w-4 h-4" />
              All Posts
            </Link>

            {/* Header */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="text-sm font-medium text-navy-600 bg-navy-50 px-3 py-1 rounded-full">
                  Website Strategy
                </span>
                <span className="text-sm text-navy-400">March 2026 · 4 min read</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4 leading-tight">
                The 5 Things Every Florida Keys Tourism Business Website Must Have in 2026
              </h1>
              <p className="text-lg text-navy-600 leading-relaxed">
                A practical checklist for charter boats, restaurants, dive shops, and watersports operators. Run your site against this list — most businesses fail at least two.
              </p>
            </div>

            {/* Intro */}
            <div className="text-navy-700 leading-relaxed space-y-4 mb-10">
              <p>
                If you run a charter boat, restaurant, dive shop, or rental business in the Florida Keys, your website has one job: turn a curious tourist into a paying customer before they close the tab.
              </p>
              <p>
                Most sites fail at this. Not because they look bad — but because they&apos;re missing the basics that actually drive bookings in 2026.
              </p>
              <p>Here&apos;s the checklist. Run your own site against it.</p>
            </div>

            {/* Checklist Items */}
            <div className="space-y-6 mb-12">
              {checks.map((check) => (
                <div key={check.number} className="bg-white rounded-xl border border-navy-100 overflow-hidden">
                  <div className="bg-navy-900 px-5 py-4 flex items-center gap-3">
                    <span className="text-3xl font-bold text-navy-600 font-mono leading-none">{check.number}</span>
                    <h2 className="text-lg font-bold text-white">{check.title}</h2>
                  </div>
                  <div className="p-5 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex items-start gap-2">
                        <HiCheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold text-green-700 uppercase tracking-wider mb-1">Good</p>
                          <p className="text-sm text-navy-700">{check.good}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <HiXCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold text-red-600 uppercase tracking-wider mb-1">Bad</p>
                          <p className="text-sm text-navy-700">{check.bad}</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-navy-600 leading-relaxed border-t border-navy-100 pt-4">
                      {check.detail}
                    </p>
                    {check.tip && (
                      <div className="bg-navy-50 rounded-lg px-4 py-3 text-sm text-navy-700">
                        <span className="font-semibold">How to check: </span>
                        {check.tip}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Audit Table */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Quick Self-Audit</h2>
              <div className="border border-navy-200 rounded-xl overflow-hidden">
                <div className="grid grid-cols-3 bg-navy-50 border-b border-navy-200">
                  <div className="col-span-2 px-4 py-3 text-xs font-bold text-navy-500 uppercase tracking-wider">Check</div>
                  <div className="px-4 py-3 text-xs font-bold text-navy-500 uppercase tracking-wider border-l border-navy-200">Your Site</div>
                </div>
                {[
                  "Mobile loads in under 3 seconds",
                  "Online booking system exists",
                  "Google Business Profile is claimed and updated",
                  "Reviews displayed on homepage",
                  "Site runs HTTPS (padlock visible)",
                ].map((check, i) => (
                  <div key={i} className={`grid grid-cols-3 ${i < 4 ? "border-b border-navy-100" : ""}`}>
                    <div className="col-span-2 px-4 py-3">
                      <p className="text-sm text-navy-700">{check}</p>
                    </div>
                    <div className="px-4 py-3 border-l border-navy-100">
                      <p className="text-sm text-navy-400">✓ / ✗</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-navy-500 mt-3">
                If you failed more than two of these, your site is costing you bookings right now.
              </p>
            </div>

            {/* CTA Block */}
            <div className="bg-navy-900 text-white rounded-xl p-6 sm:p-8">
              <h2 className="text-xl font-bold mb-2">We&apos;ll Fix It in 2–3 Weeks</h2>
              <p className="text-navy-200 leading-relaxed mb-4">
                MCG Consulting helps Florida Keys tourism businesses fix exactly these problems. If you want a free audit of your current site, get in touch — no commitment required.
              </p>
              <Link href="/contact" className="btn-ios btn-primary inline-block">
                Get a free site audit
              </Link>
            </div>

            {/* Related */}
            <div className="mt-12 pt-8 border-t border-navy-200">
              <p className="text-sm font-semibold text-navy-500 uppercase tracking-wider mb-4">Related</p>
              <Link
                href="/blog/losing-customers-to-google"
                className="group flex items-start gap-3 hover:bg-navy-50 rounded-xl p-3 -mx-3 transition-colors"
              >
                <div className="flex-1">
                  <p className="font-semibold text-navy-900 group-hover:underline text-sm">
                    Why Florida Keys Businesses Are Losing Customers to Google Before They Even Know It
                  </p>
                  <p className="text-xs text-navy-500 mt-0.5">SEO &amp; Visibility · 5 min read</p>
                </div>
                <HiChevronLeft className="w-4 h-4 text-navy-400 rotate-180 flex-shrink-0 mt-1" />
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
