import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  HiExclamationCircle,
  HiDeviceMobile,
  HiShieldCheck,
  HiCalendar,
  HiSearch,
  HiLightningBolt,
  HiCheck,
  HiTrendingUp,
  HiClock,
  HiGlobe,
} from "react-icons/hi";

export const metadata: Metadata = {
  title: "Vacation Rental Websites — Florida Keys | MCG Consulting",
  description:
    "Modern websites for Florida Keys vacation rental managers. Booking widget integration, mobile-first design, SEO for direct bookings. Replace your outdated platform before it costs you another season.",
  keywords: [
    "vacation rental website",
    "Florida Keys vacation rental",
    "vacation rental web design",
    "Lodgify integration",
    "Guesty website",
    "OwnerRez integration",
    "direct booking website",
    "vacation rental SEO",
    "Drupal 7 migration",
    "vacation rental management website",
  ],
};

const painPoints = [
  {
    icon: HiExclamationCircle,
    headline: "Outdated platforms losing bookings",
    description:
      "Still on Drupal 7, LiveRez, or a 2015-era CMS? Legacy platforms stopped getting security patches — and guests don\u2019t trust sites that look like they haven\u2019t been updated in a decade.",
  },
  {
    icon: HiDeviceMobile,
    headline: "No mobile optimization — 60%+ of renters book on phone",
    description:
      "Most vacation rental searches happen on mobile. If your property listings break on a phone screen, guests bounce to VRBO before they ever see your waterfront view.",
  },
  {
    icon: HiShieldCheck,
    headline: "Missing trust signals — reviews, SSL, speed",
    description:
      "No visible guest reviews, expired SSL certificates, 8-second load times. Every missing trust signal pushes guests toward platforms they already know and trust.",
  },
];

const features = [
  {
    icon: HiCalendar,
    title: "Booking Widget Integration",
    description:
      "Lodgify, Guesty, or OwnerRez — we integrate your property management system so guests check availability and book directly. No phone tag, no platform fees.",
  },
  {
    icon: HiDeviceMobile,
    title: "Mobile-First Redesign",
    description:
      "Property galleries, search filters, and booking flows built for thumbs first. Fast, clean, and tested on every screen size tourists actually use.",
  },
  {
    icon: HiSearch,
    title: "SEO for \u2018Vacation Rentals [City]\u2019 Searches",
    description:
      "Location-specific pages optimized for the searches guests actually type — \u201cvacation rental Islamorada,\u201d \u201cKeys waterfront house rental,\u201d \u201cMarathon condo rental.\u201d",
  },
  {
    icon: HiLightningBolt,
    title: "Fast Load Times",
    description:
      "Sub-2-second page loads on mobile. Optimized images, modern code, no bloated frameworks. Speed is a ranking factor — and a booking factor.",
  },
];

const stats = [
  {
    value: "35%",
    label: "More online bookings",
    detail: "in the first 90 days",
    icon: HiTrendingUp,
  },
  {
    value: "2.1s",
    label: "Mobile load time",
    detail: "down from 9+ seconds",
    icon: HiClock,
  },
  {
    value: "Page 1",
    label: "Google ranking",
    detail: "for \u2018vacation rental [city]\u2019",
    icon: HiGlobe,
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$3,500",
    description: "Get bookable and modern",
    features: [
      "5\u20138 page responsive website",
      "Booking widget integration (Lodgify/Guesty/OwnerRez)",
      "Mobile-first, fast-loading design",
      "Property gallery with optimized images",
      "Google Business Profile setup",
      "Basic SEO (title tags, meta descriptions, schema)",
      "$250/mo optional maintenance",
    ],
  },
  {
    name: "Pro",
    price: "$7,500",
    popular: true,
    description: "Compete with the platforms",
    features: [
      "Everything in Starter",
      "Full legacy platform migration (Drupal, LiveRez, etc.)",
      "Individual property landing pages",
      "90-day local SEO campaign",
      "Google Reviews widget on-site",
      "Guest review email automation",
      "Competitor analysis report",
      "Direct booking vs. platform ROI dashboard",
      "$250/mo optional maintenance",
    ],
  },
];

export default function VacationRentalsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-navy-950 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your Platform Is End-of-Life.
              <br />
              Your Bookings Don&apos;t Have to Be.
            </h1>
            <p className="text-lg sm:text-xl text-navy-200 mb-10 leading-relaxed max-w-2xl">
              We build modern, booking-ready websites for Florida Keys vacation
              rental managers. Migrate off legacy platforms, capture direct
              bookings, and stop losing guests to VRBO and Airbnb commissions.
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
              These are the three things costing Keys vacation rental managers
              the most bookings.
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

      {/* What We Deliver */}
      <section className="section-padding bg-navy-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              What We Deliver for Rental Managers
            </h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              Everything you need to compete with the platforms &mdash; on your
              own terms.
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

      {/* Case Study / Results */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Results: Coastal Property Management
            </h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              A Keys-based property management company migrated off a legacy
              platform. Here&apos;s what happened in 90 days.
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
              This coastal property management company was running 40+ rental
              listings on a legacy platform with 9-second mobile load times and
              no direct booking capability. Guests were finding the properties on
              Google but bouncing to VRBO to actually book.
            </p>
            <p className="text-navy-700 leading-relaxed mb-4">
              We rebuilt the site mobile-first with Lodgify integration,
              individual property pages optimized for local search, and a Google
              Reviews widget. Within 90 days: <strong>35% increase in
              online bookings</strong>, <strong>mobile load time dropped from 9.2s
              to 2.1s</strong>, and the site ranked on page 1 for three
              &ldquo;vacation rental [city]&rdquo; terms.
            </p>
            <p className="text-navy-600 text-sm italic">
              The shift to direct bookings saved an estimated $14,000 in
              platform commissions over the first year.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-navy-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Vacation Rental Packages
            </h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              One-time investment. Built to pay for itself in direct bookings.
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
                    "Vacation Rental " + tier.name + " Package"
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
            Ready to Stop Losing Bookings to Outdated Tech?
          </h2>
          <p className="text-lg text-navy-300 mb-8 max-w-xl mx-auto">
            We&apos;ll audit your current site for free and show you exactly
            what&apos;s costing you direct bookings.
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
