import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  HiExclamationCircle,
  HiDeviceMobile,
  HiShieldCheck,
  HiPhone,
  HiCalendar,
  HiSearch,
  HiLightningBolt,
  HiCheck,
  HiTrendingUp,
  HiClock,
  HiGlobe,
} from "react-icons/hi";

export const metadata: Metadata = {
  title: "Watersports Websites — Florida Keys | MCG Consulting",
  description:
    "We build booking-ready websites for Florida Keys jet ski, parasailing, and kayak operators. FareHarbor integration, mobile-first design, USCG credentials front and center. More bookings, less phone time.",
  keywords: [
    "watersports website",
    "jet ski rental website",
    "parasailing website",
    "Florida Keys watersports",
    "jet ski website design",
    "parasailing web design",
    "kayak rental website",
    "FareHarbor integration",
    "watersports SEO",
    "Marathon watersports",
    "Key Largo parasailing",
  ],
};

const painPoints = [
  {
    icon: HiExclamationCircle,
    headline: "Your site is down — or you don\u2019t have one at all",
    description:
      "Tourists searching \u201Cjet ski rental Marathon\u201D or \u201Cparasailing Key Largo\u201D are landing on competitors because your site returns an error, looks broken on mobile, or simply doesn\u2019t exist.",
  },
  {
    icon: HiPhone,
    headline: "Phone-only booking is losing you after-hours revenue",
    description:
      "Tourists plan from their hotel at 10pm. If they can\u2019t book online right now, they\u2019ll find an operator who lets them. You\u2019re losing 8\u201312 bookings a week you never even know about.",
  },
  {
    icon: HiDeviceMobile,
    headline: "Mobile-broken layouts kill trust instantly",
    description:
      "Absolute positioning from 2010, menus overlapping hero images, pricing tables running off-screen. On a phone, your site looks like the business closed down.",
  },
  {
    icon: HiShieldCheck,
    headline: "Your USCG certifications are buried or invisible",
    description:
      "Coast Guard certification is your biggest trust signal \u2014 especially for parasailing. If families can\u2019t find it in two seconds, they\u2019ll pick the operator whose site shows it front and center.",
  },
];

const features = [
  {
    icon: HiCalendar,
    title: "FareHarbor Booking Integration",
    description:
      "Every activity page gets a live availability calendar. Tourists pick their activity, select a date, and pay a deposit \u2014 even at midnight. After-hours bookings captured automatically.",
  },
  {
    icon: HiShieldCheck,
    title: "Safety Credentials Front & Center",
    description:
      "USCG certification, commercial vessel inspection, and insurance documentation displayed prominently on every page. The trust signal that converts browsers into bookers.",
  },
  {
    icon: HiDeviceMobile,
    title: "Mobile-First Design",
    description:
      "Watersports are impulse purchases. Your site loads in under 2 seconds on any phone, with activity photos, transparent pricing, and a Book Now button that actually works.",
  },
  {
    icon: HiSearch,
    title: "Local SEO for \u2018[Activity] + [City]\u2019 Searches",
    description:
      "Structured data, optimized content, and Google Business Profile sync \u2014 built around the exact phrases tourists type: \u201Cjet ski rental Marathon FL,\u201D \u201Cparasailing Key Largo.\u201D",
  },
];

const stats = [
  {
    value: "60%",
    label: "More online bookings",
    detail: "in the first 90 days",
    icon: HiTrendingUp,
  },
  {
    value: "2.0s",
    label: "Mobile load time",
    detail: "from broken / 11+ seconds",
    icon: HiClock,
  },
  {
    value: "Page 1",
    label: "Google ranking",
    detail: "for \u2018jet ski rental [city]\u2019",
    icon: HiGlobe,
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$2,500",
    description: "Get online and bookable",
    features: [
      "5-page responsive website",
      "FareHarbor booking integration",
      "Mobile-first, fast-loading design",
      "Activity pages with real photos & pricing",
      "USCG / safety credentials section",
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
      "Photo & video gallery by activity",
      "Google Ads campaign setup & optimization",
      "90-day local SEO campaign",
      "Google/TripAdvisor Reviews widget on-site",
      "Post-trip review email automation",
      "Competitor analysis report",
      "$150/mo optional maintenance",
    ],
  },
];

export default function WatersportsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-navy-950 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Tourists Can&apos;t Book
              <br />
              What They Can&apos;t Find.
            </h1>
            <p className="text-lg sm:text-xl text-navy-200 mb-10 leading-relaxed max-w-2xl">
              We build booking-ready websites for Florida Keys jet ski,
              parasailing, and kayak operators. Your customers find you on
              Google, trust your safety record, and book online &mdash; even at
              midnight from their hotel room.
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
              These are the issues costing Keys watersports operators the most
              bookings right now.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              What We Build for Watersports Operators
            </h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              Everything you need to get found, get trusted, and get booked
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

      {/* Case Study / Results */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Results: Keys Aqua Sports
            </h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              A Marathon jet ski and parasailing operator went from a dead
              website to 60% more bookings in 90 days.
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
              Keys Aqua Sports was running jet ski rentals, parasailing, and
              paddleboard rentals out of Marathon &mdash; but their website had
              been down for weeks. Every booking required a phone call. Mobile
              visitors saw a broken layout. Their USCG certifications and 210+
              five-star reviews were invisible online.
            </p>
            <p className="text-navy-700 leading-relaxed mb-4">
              We rebuilt the site mobile-first with FareHarbor integration,
              dedicated activity pages, and safety credentials front and center.
              Within 90 days: <strong>60% more online bookings</strong>,{" "}
              <strong>19 after-hours bookings per month captured
              automatically</strong>, and the site ranked on page 1 for
              &ldquo;jet ski rental Marathon.&rdquo;
            </p>
            <p className="text-navy-600 text-sm italic">
              The 20-booking-per-month increase represented ~$11,100 in
              additional monthly revenue. The site paid for itself in under 30
              days.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-navy-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Watersports Packages
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
                    "Watersports " + tier.name + " Package"
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
            Ready to Stop Losing Bookings to a Broken Website?
          </h2>
          <p className="text-lg text-navy-300 mb-8 max-w-xl mx-auto">
            We&apos;ll audit your current site for free and show you exactly
            what&apos;s costing you rentals and bookings.
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
