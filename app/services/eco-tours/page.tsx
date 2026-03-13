import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  HiPhone,
  HiPhotograph,
  HiCalendar,
  HiSearch,
  HiDeviceMobile,
  HiLightningBolt,
  HiCheck,
  HiTrendingUp,
  HiClock,
  HiGlobe,
} from "react-icons/hi";

export const metadata: Metadata = {
  title: "Eco-Tour & Sunset Cruise Websites — Florida Keys | MCG Consulting",
  description:
    "We build booking-ready websites for Florida Keys eco-tour, sunset cruise, and boat tour operators. FareHarbor integration, real photography, local SEO. More bookings, less phone tag.",
  keywords: [
    "eco-tour website",
    "sunset cruise website",
    "boat tour website",
    "Florida Keys eco-tour",
    "Key West sunset cruise",
    "nature tour website",
    "FareHarbor integration",
    "eco-tour SEO",
    "kayak tour website",
    "snorkel tour website",
    "Florida Keys tour operator",
  ],
};

const painPoints = [
  {
    icon: HiCalendar,
    headline: "No online booking — every reservation requires a phone call",
    description:
      "Tourists plan activities from their hotel at 10pm. If your only option is \u201Ccall during business hours,\u201D they\u2019ll book the sunset cruise operator who lets them reserve online right now.",
  },
  {
    icon: HiPhone,
    headline: "6\u20138 hours a week on booking calls you shouldn\u2019t need",
    description:
      "Availability questions, \u201Cdoes the tour run if it rains,\u201D group size confirmations. A booking widget with clear tour info handles all of this automatically.",
  },
  {
    icon: HiPhotograph,
    headline: "Dated photography doesn\u2019t sell the experience",
    description:
      "Stock beach photos from 2014 and low-resolution galleries don\u2019t convey what it actually feels like on your boat at sunset. Tourists buy with their eyes \u2014 your site needs to show what they\u2019re getting.",
  },
  {
    icon: HiDeviceMobile,
    headline: "Your Elementor or HTML site isn\u2019t cutting it on mobile",
    description:
      "Outdated page builders, broken contact forms, right-click protection scripts that annoy users. 60\u201370% of your visitors are on phones \u2014 and they\u2019re bouncing.",
  },
];

const features = [
  {
    icon: HiCalendar,
    title: "FareHarbor / Booking Widget Integration",
    description:
      "Every tour page gets a live availability calendar. Visitors pick a tour, choose a date, select group size, and pay a deposit. From landing to confirmed booking: under four minutes. No phone call required.",
  },
  {
    icon: HiDeviceMobile,
    title: "Mobile-First Design",
    description:
      "Tour galleries, booking flows, and pricing built for thumbs first. Sub-2-second load times on any phone. Tested on every screen size tourists actually use.",
  },
  {
    icon: HiSearch,
    title: "Local SEO for Tour Searches",
    description:
      "Structured data, optimized content, and Google Business Profile sync \u2014 targeting the phrases tourists type: \u201Csunset cruise Islamorada,\u201D \u201Ckayak tour Key West,\u201D \u201Ceco-tour Florida Keys.\u201D",
  },
  {
    icon: HiLightningBolt,
    title: "Real Photography & Fast Performance",
    description:
      "Your actual tour photos \u2014 mangrove tunnels, sunset silhouettes, dolphins off the bow \u2014 optimized to WebP and lazy-loaded. Beautiful imagery that doesn\u2019t slow down the page.",
  },
];

const stats = [
  {
    value: "2x",
    label: "Online bookings",
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
    detail: "for \u2018kayak tours Key West\u2019",
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
      "FareHarbor or booking widget integration",
      "Mobile-first, fast-loading design",
      "Dedicated tour pages with real photos & pricing",
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
      "Professional photo optimization & gallery",
      "Google Ads campaign setup & optimization",
      "90-day local SEO campaign",
      "Google/TripAdvisor Reviews widget on-site",
      "Post-trip review email automation",
      "Seasonal tour pages with availability notes",
      "Competitor analysis report",
      "$150/mo optional maintenance",
    ],
  },
];

export default function EcoToursPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-navy-950 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your Sunset Sells Itself.
              <br />
              Your Website Should Too.
            </h1>
            <p className="text-lg sm:text-xl text-navy-200 mb-10 leading-relaxed max-w-2xl">
              We build booking-ready websites for Florida Keys eco-tour, sunset
              cruise, and boat tour operators. Tourists find you on Google, see
              what the experience looks like, and book online &mdash; without
              picking up the phone.
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
              These are the issues costing Keys tour operators the most bookings
              right now.
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
              What We Build for Tour Operators
            </h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              Everything you need to get found and get booked &mdash; nothing
              you don&apos;t.
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
              Results: Coastal Drift Kayak Tours
            </h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              A Key West eco-tour operator went from zero online bookings to
              doubling their monthly total in 90 days.
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
              Coastal Drift Kayak Tours was running half-day kayak excursions,
              sunset paddleboard tours, and guided snorkel trips out of Key West
              &mdash; on a hand-coded HTML site from 2018 with a broken contact
              form and zero online booking. Mobile bounce rate was 76%.
            </p>
            <p className="text-navy-700 leading-relaxed mb-4">
              We rebuilt the site mobile-first with FareHarbor integration,
              dedicated tour pages, transparent pricing, and a live Google
              Reviews widget. Within 90 days:{" "}
              <strong>monthly bookings doubled from 41 to 83</strong>,{" "}
              <strong>mobile load time dropped from 9.4s to 2.1s</strong>, and
              the site ranked position 6 for &ldquo;kayak tours Key West.&rdquo;
            </p>
            <p className="text-navy-600 text-sm italic">
              The 42-booking-per-month increase represented ~$6,636 in
              additional monthly revenue. Dana broke even on the site build in
              under 45 days.
            </p>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/insights/case-study-coastal-drift-kayak-tours"
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
              Eco-Tour & Sunset Cruise Packages
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
                    "Eco-Tour " + tier.name + " Package"
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
            Ready to Fill Every Seat on Every Tour?
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
