import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  HiDeviceMobile,
  HiGlobeAlt,
  HiShieldCheck,
  HiCalendar,
  HiPhotograph,
  HiLocationMarker,
  HiSun,
  HiCheck,
  HiTrendingUp,
  HiClock,
  HiGlobe,
} from "react-icons/hi";

export const metadata: Metadata = {
  title: "Watersports & Eco-Tour Websites — Florida Keys | MCG Consulting",
  description:
    "We build booking-ready websites for Florida Keys watersports and eco-tour operators. Kayak rentals, paddleboard tours, jet ski rentals, dolphin watch, sunset sails, mangrove tours. Online booking, waivers, mobile-first.",
  keywords: [
    "watersports website Florida Keys",
    "kayak rental website",
    "paddleboard tour website",
    "jet ski rental website",
    "eco-tour website Florida Keys",
    "dolphin watch website",
    "sunset sail website",
    "mangrove kayak tour website",
    "FareHarbor watersports",
    "Keys watersports booking",
  ],
};

const painPoints = [
  {
    icon: HiGlobeAlt,
    headline: "A Facebook page is not a website",
    description:
      "Kayak rentals, paddleboard tours, jet ski operators — many run their entire business from a Facebook page. Tourists searching Google won't find you there. No SSL certificate, no booking widget, no credibility with visitors who don't use Facebook.",
  },
  {
    icon: HiCalendar,
    headline: "No online booking means you're losing walk-ups to competitors",
    description:
      "Tourists want to reserve a kayak or jet ski right now — from the beach, from the hotel pool. If they have to call or message on Facebook and wait for a reply, the operator with an instant booking calendar gets the rental.",
  },
  {
    icon: HiDeviceMobile,
    headline: "Your site doesn't work on the phones tourists are holding",
    description:
      "80% of watersports searches happen on mobile. A slow site, broken images, or a booking flow that doesn't work on a phone means you're invisible to the people standing 100 yards from your dock.",
  },
  {
    icon: HiSun,
    headline: "Seasonal demand swings and your site can't communicate it",
    description:
      "Dolphin watch tours, sunset sails, kayak mangrove tours — demand spikes November through April then drops off. Your site needs seasonal landing pages, updated availability, and messaging that matches what tourists are searching for right now.",
  },
];

const features = [
  {
    icon: HiCalendar,
    title: "Online Booking Calendar",
    description:
      "FareHarbor or Checkfront integration with live availability. Tourists pick an activity, choose a time slot, and pay a deposit — all from their phone. After-hours bookings captured automatically, no phone tag required.",
  },
  {
    icon: HiShieldCheck,
    title: "Digital Waiver Collection",
    description:
      "Waivers signed online before arrival. Customers acknowledge risks, provide emergency contacts, and sign digitally — so check-in is fast and your liability paperwork is handled before anyone steps on a dock.",
  },
  {
    icon: HiPhotograph,
    title: "Gear & Activity Photo Gallery",
    description:
      "High-quality photo gallery showcasing your kayaks, paddleboards, jet skis, and tour highlights. Optimized WebP images that load fast on mobile and make tourists want to book immediately.",
  },
  {
    icon: HiLocationMarker,
    title: "Local SEO & Seasonal Content",
    description:
      "Google Business Profile optimization, structured data, and seasonal landing pages built around what tourists actually search: 'kayak rental Key Largo,' 'sunset sail Islamorada,' 'jet ski rental Marathon.'",
  },
];

const stats = [
  {
    value: "50%",
    label: "More online bookings",
    detail: "in the first season",
    icon: HiTrendingUp,
  },
  {
    value: "4 hrs/week",
    label: "Less phone & DM time",
    detail: "booking happens automatically",
    icon: HiClock,
  },
  {
    value: "Page 1",
    label: "Google ranking",
    detail: "for '[activity] + [city]' searches",
    icon: HiGlobe,
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$3,000",
    description: "Get off Facebook and get bookable",
    features: [
      "5-page responsive website",
      "FareHarbor or Checkfront booking integration",
      "Real-time availability calendar",
      "Digital waiver collection",
      "Gear & activity photo gallery",
      "Google Business Profile setup",
      "Basic SEO (title tags, meta descriptions, schema)",
      "Mobile-first, fast-loading design",
      "$175/mo optional maintenance",
    ],
  },
  {
    name: "Pro",
    price: "$5,500",
    popular: true,
    description: "Rank for every season, book every activity",
    features: [
      "Everything in Starter",
      "Google Ads campaign setup & optimization",
      "90-day local SEO campaign",
      "Seasonal landing pages (winter eco-tours, summer rentals)",
      "Google/TripAdvisor Reviews widget on-site",
      "Post-activity review email automation",
      "Multi-activity pages with separate booking flows",
      "Competitor analysis report",
      "$175/mo optional maintenance",
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
              They&apos;re on the Beach.
              <br />
              Can They Book You?
            </h1>
            <p className="text-lg sm:text-xl text-navy-200 mb-10 leading-relaxed max-w-2xl">
              We build booking-ready websites for Florida Keys watersports
              operators and eco-tour guides. Kayak rentals, paddleboard tours,
              jet skis, dolphin watch, sunset sails, mangrove kayak tours
              &mdash; if it&apos;s on the water, we get it booked online.
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
              bookings.
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
              What We Build for Watersports &amp; Eco-Tour Operators
            </h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              Everything you need to get found and get booked &mdash; for every
              activity, every season.
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
              What a Modern Watersports Site Delivers
            </h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              Based on results from Keys watersports operators we&apos;ve worked
              with.
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
              <strong>Year 1 estimate with Pro package:</strong> $5,500 site
              build + $175/mo maintenance = <strong>$7,600 Year 1
              all-in</strong>. A typical Keys kayak rental runs $45&ndash;$65,
              jet ski rentals $80&ndash;$150/hour, eco-tours $55&ndash;$95 per
              person. Just a handful of extra bookings per week covers the entire
              investment.
            </p>
            <p className="text-navy-600 text-sm italic">
              Eco-tours like dolphin watch, sunset sails, and kayak mangrove
              tours see major seasonal demand shifts. A well-built site with
              seasonal landing pages captures bookings year-round instead of
              going dark in the off-season.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-navy-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Watersports &amp; Eco-Tour Packages
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
            Ready to Book More Adventures?
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
