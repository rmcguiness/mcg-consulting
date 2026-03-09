import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  HiPhone,
  HiSearch,
  HiCursorClick,
  HiCalendar,
  HiStar,
  HiDeviceMobile,
  HiLocationMarker,
  HiCheck,
  HiTrendingUp,
  HiClock,
  HiGlobe,
} from "react-icons/hi";

export const metadata: Metadata = {
  title: "Fishing Charter Websites — Florida Keys | MCG Consulting",
  description:
    "We build booking-ready websites for Florida Keys fishing charter captains. FareHarbor integration, local SEO, mobile-first design. More bookings, less phone tag.",
  keywords: [
    "fishing charter website",
    "Florida Keys charter captain",
    "FareHarbor integration",
    "charter booking website",
    "fishing charter SEO",
    "Marathon fishing charter",
    "Keys charter website design",
  ],
};

const painPoints = [
  {
    icon: HiPhone,
    headline: "Tourists book at 11pm. Your phone isn\u2019t.",
    description:
      "If customers can\u2019t book online, they\u2019ll find a captain who lets them. You\u2019re losing trips every night you\u2019re not answering.",
  },
  {
    icon: HiSearch,
    headline: "Your competitor shows up first on Google. You don\u2019t.",
    description:
      "Captains with modern sites and proper SEO are outranking you for the searches tourists actually type.",
  },
  {
    icon: HiCursorClick,
    headline: "That broken Book Now button is costing you trips.",
    description:
      "A button that doesn\u2019t connect to a booking system isn\u2019t a button \u2014 it\u2019s a dead end. Every click is a lost customer.",
  },
];

const features = [
  {
    icon: HiCalendar,
    title: "FareHarbor / Checkfront Booking Integration",
    description:
      "Real-time availability calendar. Customers pick a trip, choose a date, and pay a deposit \u2014 all while you\u2019re on the water.",
  },
  {
    icon: HiStar,
    title: "Google Review Showcase Widget",
    description:
      "Your 5-star reviews pulled live onto your site. Social proof visible the moment someone lands on your page.",
  },
  {
    icon: HiDeviceMobile,
    title: "Mobile-First Design",
    description:
      "60\u201370% of Keys tourist traffic is on mobile. Your site loads fast and books easy on every phone and tablet.",
  },
  {
    icon: HiLocationMarker,
    title: "Local SEO Setup",
    description:
      "Google Business Profile optimization, structured data, and content built around the terms tourists actually search.",
  },
];

const stats = [
  {
    value: "40%",
    label: "More online bookings",
    detail: "in the first 90 days",
    icon: HiTrendingUp,
  },
  {
    value: "3 hrs/week",
    label: "Less phone time",
    detail: "no more phone tag with tourists",
    icon: HiClock,
  },
  {
    value: "Page 1",
    label: "Google ranking",
    detail: "within 60 days of launch",
    icon: HiGlobe,
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$2,500",
    description: "Get bookable fast",
    features: [
      "5-page responsive website",
      "FareHarbor or Checkfront booking integration",
      "Mobile-first, fast-loading design",
      "Google Business Profile setup",
      "Basic SEO (title tags, meta descriptions, schema)",
      "Photo gallery (optimized WebP)",
      "$150/mo optional maintenance",
    ],
  },
  {
    name: "Pro",
    price: "$4,500",
    popular: true,
    description: "Rank, book, and grow",
    features: [
      "Everything in Starter",
      "Google Ads campaign setup & optimization",
      "90-day local SEO campaign",
      "Google Reviews widget on-site",
      "Post-trip review email flow",
      "Competitor analysis report",
      "Trip pages with real content & seasonal notes",
      "$150/mo optional maintenance",
    ],
  },
];

export default function FishingChartersPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-navy-950 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              More Bookings.
              <br />
              Less Phone Tag.
            </h1>
            <p className="text-lg sm:text-xl text-navy-200 mb-10 leading-relaxed max-w-2xl">
              We build booking-ready websites for Florida Keys fishing charter
              captains. Your customers can find you, trust you, and book you
              &mdash; without picking up the phone.
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
              These are the three things costing Keys charter captains the most
              bookings.
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
              What We Build for Charter Captains
            </h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              Everything a working captain needs to get found and get booked
              &mdash; nothing you don&apos;t.
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
              Real Results from a Real Captain
            </h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              We rebuilt a Marathon charter captain&apos;s website. Here&apos;s
              what happened in 90 days.
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

          <div className="text-center">
            <Link
              href="/insights/case-study-backcountry-keys-charters"
              className="btn-ios btn-secondary inline-flex items-center gap-2"
            >
              Read the Full Case Study
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-navy-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Charter Captain Packages
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
                    "Fishing Charter " + tier.name + " Package"
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
            Ready to Fill Your Calendar?
          </h2>
          <p className="text-lg text-navy-300 mb-8 max-w-xl mx-auto">
            We&apos;ll audit your current site for free and show you exactly
            what&apos;s costing you trips.
          </p>
          <Link href="/audit" className="btn-ios btn-primary text-lg px-8 py-4">
            Get Free Audit
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
