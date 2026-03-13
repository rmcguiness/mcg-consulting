import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  HiPhone,
  HiPhotograph,
  HiCash,
  HiMail,
  HiCalendar,
  HiCamera,
  HiDeviceMobile,
  HiChartBar,
  HiCheck,
  HiTrendingUp,
  HiCurrencyDollar,
  HiUserGroup,
} from "react-icons/hi";

export const metadata: Metadata = {
  title: "Sunset Cruise Websites — Florida Keys | MCG Consulting",
  description:
    "We build direct-booking websites for Florida Keys sunset cruise operators. Online booking, photo galleries, email capture, and a funnel that beats Viator commissions.",
  keywords: [
    "sunset cruise website",
    "Florida Keys sunset cruise",
    "Key West sunset sail",
    "Islamorada sunset cruise",
    "Key Largo sunset cruise",
    "direct booking website",
    "FareHarbor sunset cruise",
    "sunset cruise SEO",
  ],
};

const painPoints = [
  {
    icon: HiPhone,
    headline: "Peak season hits and the phone never stops.",
    description:
      "October through May, every tourist wants a sunset cruise. But if they can\u2019t book online at 11pm from their hotel, they\u2019ll book with whoever lets them. You\u2019re losing bookings every night the phone goes to voicemail.",
  },
  {
    icon: HiPhotograph,
    headline: "Beautiful business. Terrible website photos.",
    description:
      "You sell one of the most photogenic experiences in the Keys. But your site has grainy phone shots from 2019 and no video. First impressions are everything \u2014 and yours isn\u2019t matching the product.",
  },
  {
    icon: HiCash,
    headline: "Viator takes 20\u201330% of every booking.",
    description:
      "You\u2019re paying $10\u2013$15 per customer to OTAs that own the relationship. They collect the email, they send the follow-up, they get the repeat booking. You just drive the boat.",
  },
  {
    icon: HiMail,
    headline: "No email list. No repeat customers.",
    description:
      "Charter groups, anniversary couples, snowbirds who come back every year \u2014 you have no way to reach them. Every season starts from zero because you never captured their info.",
  },
];

const features = [
  {
    icon: HiCalendar,
    title: "Online Booking Calendar",
    description:
      "Real-time availability via FareHarbor or a simple booking form. Customers pick a date, choose a package, and reserve their spot \u2014 24/7, no phone call required.",
  },
  {
    icon: HiMail,
    title: "Email Capture & Follow-Up Sequences",
    description:
      "Automated \u2018Plan Your Next Keys Trip\u2019 email sequences. Capture every guest\u2019s email and bring them back next season without lifting a finger.",
  },
  {
    icon: HiCamera,
    title: "Mobile-Optimized Photo Gallery",
    description:
      "WebP images, lazy loading, full-screen lightbox. Your sunsets look stunning on every device \u2014 because that\u2019s what sells the ticket.",
  },
  {
    icon: HiCurrencyDollar,
    title: "Direct Booking Funnel",
    description:
      "\u2018Book Direct, Save 15%\u2019 messaging that competes head-to-head with Viator and TripAdvisor. Your site, your customer, your margin.",
  },
  {
    icon: HiChartBar,
    title: "Analytics & Heatmaps",
    description:
      "Google Analytics + heatmap tracking so you know exactly which sunset cruise packages get the most interest and where visitors drop off.",
  },
  {
    icon: HiDeviceMobile,
    title: "Mobile-First, Fast-Loading Design",
    description:
      "70% of your visitors are on a phone, planning tonight\u2019s activity from a hotel pool. Your site loads in under 2 seconds and books in under 30.",
  },
];

const stats = [
  {
    value: "$10\u2013$15",
    label: "Saved per booking",
    detail: "by cutting out OTA commissions",
    icon: HiCurrencyDollar,
  },
  {
    value: "24/7",
    label: "Booking availability",
    detail: "no more missed late-night calls",
    icon: HiTrendingUp,
  },
  {
    value: "3\u00d7",
    label: "More repeat customers",
    detail: "with email capture & follow-up",
    icon: HiUserGroup,
  },
];

const pricingTiers = [
  {
    name: "Basic",
    price: "$2,500",
    description: "Get online and start booking direct",
    features: [
      "5-page responsive website",
      "FareHarbor or simple booking form integration",
      "Mobile-optimized photo gallery (WebP, lazy load)",
      "Email capture with basic follow-up sequence",
      "Google Business Profile setup",
      "Basic SEO (title tags, meta, schema)",
      "$150/mo optional maintenance",
    ],
  },
  {
    name: "Premium",
    price: "$5,000",
    popular: true,
    description: "Own your bookings. Beat Viator.",
    features: [
      "Everything in Basic",
      "Direct booking funnel with \u2018Book Direct, Save 15%\u2019 messaging",
      "Advanced email sequences (post-cruise, seasonal, charter groups)",
      "Google Analytics + heatmap setup",
      "Google Ads campaign setup & optimization",
      "90-day local SEO campaign",
      "Competitor analysis report",
      "Video embed integration",
      "$150/mo optional maintenance",
    ],
  },
];

export default function SunsetCruisesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-navy-950 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Stop Giving Viator
              <br />
              30% of Every Sunset.
            </h1>
            <p className="text-lg sm:text-xl text-navy-200 mb-10 leading-relaxed max-w-2xl">
              We build direct-booking websites for Florida Keys sunset cruise
              operators. Your site, your customers, your margin &mdash; from Key
              West to Key Largo.
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
              Sunset cruise operators across Key West, Islamorada, and Key Largo
              are dealing with the same problems.
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
              What We Build for Sunset Cruise Operators
            </h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              Everything you need to book direct, own your customers, and stop
              paying OTA commissions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
              The Direct Booking Difference
            </h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              When you own the booking, you own the customer. Here&apos;s what
              that looks like.
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
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-navy-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Sunset Cruise Packages
            </h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              One-time investment. Year 1 all-in (with maintenance): $4,300
              basic / $6,800 premium.
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
                    "Sunset Cruise " + tier.name + " Package"
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

      {/* Audit CTA */}
      <section className="bg-navy-950 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Want to See a Personalized Audit?
          </h2>
          <p className="text-lg text-navy-300 mb-8 max-w-xl mx-auto">
            We&apos;ll review your current site and show you exactly where
            you&apos;re losing bookings to Viator and OTAs.
          </p>
          <Link href="/audit" className="btn-ios btn-primary text-lg px-8 py-4">
            Get Your Free Audit
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
