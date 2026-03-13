import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  HiSearch,
  HiDeviceMobile,
  HiPhone,
  HiCalendar,
  HiPhotograph,
  HiLocationMarker,
  HiStar,
  HiCheck,
  HiTrendingUp,
  HiClock,
  HiGlobe,
} from "react-icons/hi";

export const metadata: Metadata = {
  title: "Snorkeling Tour Websites — Florida Keys | MCG Consulting",
  description:
    "We build booking-ready websites for Florida Keys snorkeling tour operators. FareHarbor integration, local SEO for 'snorkeling Key Largo,' mobile-first design. More bookings, less phone tag.",
  keywords: [
    "snorkeling tour website",
    "snorkeling Key Largo",
    "snorkeling Key West",
    "Florida Keys snorkeling tours",
    "John Pennekamp snorkeling",
    "snorkeling website design",
    "FareHarbor integration",
    "snorkeling tour SEO",
    "Molasses Reef snorkeling",
  ],
};

const painPoints = [
  {
    icon: HiSearch,
    headline: "You're invisible for 'snorkeling Key Largo' on mobile",
    description:
      "Tourists search from their hotel room the night before. If your site doesn't rank for the exact phrases they type — 'snorkeling Key Largo,' 'best snorkeling Florida Keys' — they book with whoever does.",
  },
  {
    icon: HiPhone,
    headline: "No online booking means no after-hours revenue",
    description:
      "Families plan snorkeling trips at 10pm. If they can't pick a date, choose a boat, and pay a deposit right now, they'll find an operator who lets them. You're losing 8–15 bookings a week you never hear about.",
  },
  {
    icon: HiDeviceMobile,
    headline: "Your site looks broken on every phone that matters",
    description:
      "Pinch-to-zoom layouts, slow-loading hero images, a Book Now button that goes nowhere. On mobile, your site looks like the business shut down — and 70% of your traffic is on mobile.",
  },
];

const features = [
  {
    icon: HiCalendar,
    title: "FareHarbor / Checkfront Booking Integration",
    description:
      "Live availability for every trip — morning reef tour, afternoon Pennekamp snorkel, sunset trip. Tourists pick a date, select headcount, and pay a deposit while you're on the water.",
  },
  {
    icon: HiPhotograph,
    title: "Underwater Photo Gallery & Trip Pages",
    description:
      "Dedicated pages for each tour — John Pennekamp, Molasses Reef, Christ of the Abyss. Real underwater photos in optimized WebP, not stock images. Visual proof that converts browsers into bookers.",
  },
  {
    icon: HiDeviceMobile,
    title: "Mobile-First Design",
    description:
      "70% of Keys tourist traffic is on phones. Your site loads in under 2 seconds, scrolls smoothly, and makes booking dead-simple on every device.",
  },
  {
    icon: HiLocationMarker,
    title: "Local SEO for Snorkeling Searches",
    description:
      "Structured data, optimized content, and Google Business Profile sync — built around the phrases tourists actually type: 'snorkeling Key Largo,' 'best snorkeling Florida Keys,' 'Pennekamp snorkel tour.'",
  },
];

const stats = [
  {
    value: "45%",
    label: "More online bookings",
    detail: "in the first 90 days",
    icon: HiTrendingUp,
  },
  {
    value: "2.1s",
    label: "Mobile load time",
    detail: "from 8+ seconds",
    icon: HiClock,
  },
  {
    value: "Page 1",
    label: "Google ranking",
    detail: "for 'snorkeling Key Largo'",
    icon: HiGlobe,
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$2,800",
    description: "Get online and bookable",
    features: [
      "5-page responsive website",
      "FareHarbor booking integration",
      "Mobile-first, fast-loading design",
      "Trip pages with real photos & descriptions",
      "Underwater photo gallery (optimized WebP)",
      "Google Business Profile setup",
      "Basic SEO (title tags, meta descriptions, schema)",
      "$150/mo optional maintenance",
    ],
  },
  {
    name: "Pro",
    price: "$5,000",
    popular: true,
    description: "Rank, book, and grow",
    features: [
      "Everything in Starter",
      "90-day local SEO campaign ($1,200 value)",
      "Google Ads campaign setup & optimization",
      "Google/TripAdvisor Reviews widget on-site",
      "Post-trip review email automation",
      "Competitor analysis report",
      "Seasonal content (lobster mini-season, spring break)",
      "$150/mo optional maintenance",
    ],
  },
];

export default function SnorkelingToursPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-navy-950 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Tourists Are Searching.
              <br />
              Are They Finding You?
            </h1>
            <p className="text-lg sm:text-xl text-navy-200 mb-10 leading-relaxed max-w-2xl">
              We build booking-ready websites for Florida Keys snorkeling tour
              operators. Your customers find you on Google, see your best reef
              photos, and book online &mdash; even at midnight from their hotel
              room.
            </p>
            <Link href="/audit" className="btn-ios btn-primary text-lg px-8 py-4">
              Get a Free Website Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Sound Familiar?
            </h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              These are the issues costing Keys snorkeling operators the most
              bookings right now.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {painPoints.map((point, i) => {
              const Icon = point.icon;
              return (
                <div key={i} className="card-ios">
                  <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-navy-900" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">
                    {point.headline}
                  </h3>
                  <p className="text-navy-600 leading-relaxed text-sm">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="section-padding bg-navy-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              What We Build for Snorkeling Operators
            </h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              Everything you need to get found, showcase your reefs, and get
              booked &mdash; nothing you don&apos;t.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-ios">
                  <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-navy-900" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-navy-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              What a Modern Snorkeling Site Delivers
            </h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              Based on results from Keys tour operators we&apos;ve rebuilt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="bg-navy-950 rounded-2xl p-8 text-center shadow-ios-lg"
                >
                  <Icon className="w-8 h-8 text-navy-300 mx-auto mb-3" />
                  <p className="text-4xl sm:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </p>
                  <p className="text-lg font-semibold text-navy-200 mb-1">
                    {stat.label}
                  </p>
                  <p className="text-sm text-navy-400">{stat.detail}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-navy-50 rounded-2xl p-8 sm:p-10 max-w-3xl mx-auto">
            <p className="text-navy-700 leading-relaxed mb-4">
              <strong>Year 1 conservative estimate:</strong> $2,800 site build +
              $150/mo maintenance + $1,200 SEO campaign = <strong>$5,800 Year 1
              all-in</strong>. A typical Keys snorkeling tour books at $65–$95
              per person. Just 2–3 extra bookings per week covers the entire
              investment &mdash; and most operators see significantly more than
              that within 90 days.
            </p>
            <p className="text-navy-600 text-sm italic">
              John Pennekamp and Molasses Reef operators consistently report that
              online booking captures 30–40% of revenue they were previously
              missing from after-hours and mobile visitors.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-navy-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Snorkeling Tour Packages
            </h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              One-time investment. Built to pay for itself in bookings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative bg-white rounded-2xl p-8 flex flex-col ${
                  tier.popular
                    ? "ring-2 ring-navy-700 shadow-ios-lg"
                    : "shadow-ios"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-navy-700 text-white text-xs font-semibold px-4 py-1 rounded-full">
                      Best Value
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-bold text-navy-900 mb-1">
                  {tier.name}
                </h3>
                <p className="text-3xl font-bold text-navy-900 mb-2">
                  {tier.price}
                </p>
                <p className="text-sm text-navy-600 mb-6">
                  {tier.description}
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <HiCheck className="w-5 h-5 text-navy-700 shrink-0 mt-0.5" />
                      <span className="text-navy-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`/contact?subject=${encodeURIComponent(
                    "Snorkeling Tour " + tier.name + " Package"
                  )}`}
                  className={`btn-ios text-center text-sm py-3 ${
                    tier.popular ? "btn-primary" : "btn-secondary"
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Band */}
      <section className="bg-navy-950 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Fill Every Boat?
          </h2>
          <p className="text-lg text-navy-300 mb-8 max-w-xl mx-auto">
            We&apos;ll audit your current site for free and show you exactly
            what&apos;s costing you bookings.
          </p>
          <Link href="/audit" className="btn-ios btn-primary text-lg px-8 py-4">
            Free Website Audit
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
