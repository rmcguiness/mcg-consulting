import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  HiDeviceMobile,
  HiSearch,
  HiPhotograph,
  HiDocumentText,
  HiCalendar,
  HiStar,
  HiLocationMarker,
  HiCheck,
  HiTrendingUp,
  HiClock,
  HiGlobe,
  HiCurrencyDollar,
} from "react-icons/hi";

export const metadata: Metadata = {
  title: "Restaurant Websites — Florida Keys | MCG Consulting",
  description:
    "We build mobile-first websites for Florida Keys restaurants. Online reservations, Google Business optimization, menu pages that actually work on phones. More covers, fewer empty tables.",
  keywords: [
    "restaurant website Florida Keys",
    "Key Largo restaurant website",
    "Islamorada restaurant web design",
    "restaurant online reservations",
    "restaurant SEO Florida Keys",
    "seafood restaurant website",
    "Keys restaurant Google Business",
    "restaurant menu website",
  ],
};

const painPoints = [
  {
    icon: HiSearch,
    headline: "Tourists Google 'best seafood Key Largo' and you're invisible",
    description:
      "Visitors plan dinner on their phones from the hotel. If your site is a 2009-era homepage with a broken map and no hours, you're not even in the running — the restaurant with a modern Google listing gets the table.",
  },
  {
    icon: HiCalendar,
    headline: "No online reservations means empty tables at 7pm",
    description:
      "Tourists won't call to book a table — they'll tap OpenTable or Resy. If you're phone-only, you're losing covers to the restaurant down the road that lets them book in two taps.",
  },
  {
    icon: HiDocumentText,
    headline: "Your menu PDF doesn't load on anyone's phone",
    description:
      "A 4MB scanned PDF that requires pinch-and-zoom on mobile is not a menu — it's a reason to pick somewhere else. Tourists want to see your catch-of-the-day in seconds, not fight with their browser.",
  },
];

const features = [
  {
    icon: HiDeviceMobile,
    title: "Mobile-First Menu Pages",
    description:
      "Clean, fast-loading menu pages that look great on every phone. Organized by category, easy to scan, with daily specials you can update yourself. No more PDFs that tourists can't read.",
  },
  {
    icon: HiCalendar,
    title: "OpenTable / Resy Integration Readiness",
    description:
      "Your site built to plug directly into OpenTable, Resy, or Yelp Reservations. Embedded booking widget, real-time availability, and confirmation flow — tourists book a table without leaving your page.",
  },
  {
    icon: HiLocationMarker,
    title: "Google Business Profile Optimization",
    description:
      "Hours, location, menu link, and photos synced and optimized. Structured data so Google shows your restaurant in the local 3-pack when tourists search 'seafood near me' or 'best restaurant Islamorada.'",
  },
  {
    icon: HiPhotograph,
    title: "Food Photography Guidance",
    description:
      "We provide a shot list, lighting tips, and composition guidance so you or your staff can capture dishes that make tourists hungry. Professional-looking gallery without the $3K photo shoot.",
  },
];

const stats = [
  {
    value: "35%",
    label: "More online reservations",
    detail: "in the first 90 days",
    icon: HiTrendingUp,
  },
  {
    value: "2x",
    label: "Google Maps impressions",
    detail: "with optimized Business Profile",
    icon: HiGlobe,
  },
  {
    value: "Page 1",
    label: "Google ranking",
    detail: "for 'restaurant [city] FL Keys'",
    icon: HiClock,
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$2,500",
    description: "Get found and get booked",
    features: [
      "5-page responsive website",
      "Mobile-first menu pages (no PDFs)",
      "OpenTable / Resy embed-ready",
      "Google Business Profile setup & optimization",
      "Basic SEO (title tags, meta descriptions, schema)",
      "Photo gallery (optimized WebP)",
      "Hours, location, and contact prominent on every page",
      "$150/mo optional maintenance",
    ],
  },
  {
    name: "Pro",
    price: "$4,500",
    popular: true,
    description: "Rank, reserve, and grow",
    features: [
      "Everything in Starter",
      "Google Ads campaign setup & optimization",
      "90-day local SEO campaign",
      "Google/TripAdvisor/Yelp Reviews widget on-site",
      "Daily specials CMS (update your own menu)",
      "Food photography shot list & guidance",
      "Competitor analysis report",
      "Sysco/US Foods invoice parsing add-on available ($200/mo)",
      "$150/mo optional maintenance",
    ],
  },
];

export default function RestaurantsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="relative bg-navy-950 pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Tourists Are Hungry.
              <br />
              Can They Find You?
            </h1>
            <p className="text-lg sm:text-xl text-navy-200 mb-10 leading-relaxed max-w-2xl">
              We build mobile-first websites for Florida Keys restaurants.
              Online reservations, menus that work on every phone, and Google
              visibility that fills tables &mdash; not just on weekends.
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
              These are the three things costing Keys restaurants the most
              covers.
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
              What We Build for Keys Restaurants
            </h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              Everything a Keys restaurant needs to get found, get booked, and
              keep tables full &mdash; nothing you don&apos;t.
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
              What a Modern Restaurant Site Delivers
            </h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              Based on results from Keys restaurants we&apos;ve worked with.
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
              <strong>Year 1 estimate with Pro package:</strong> $4,500 site
              build + $150/mo maintenance = <strong>$6,300 Year 1
              all-in</strong>. A single busy Friday night of extra covers pays
              for months of the investment. Restaurants like Islamorada Fish
              Company, Keys Fisheries, and Island Grill show what&apos;s possible
              when Keys seafood has a real online presence.
            </p>
            <p className="text-navy-600 text-sm italic">
              These are examples of the market we serve &mdash; not current
              clients. The point: tourists are searching for exactly this kind of
              restaurant, and the ones with modern websites win the table.
            </p>
          </div>
        </div>
      </section>

      {/* Invoice Automation Upsell */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-14 h-14 bg-navy-50 rounded-xl flex items-center justify-center mx-auto mb-5">
            <HiCurrencyDollar className="w-7 h-7 text-navy-900" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-4">
            Restaurant Invoice Automation
          </h2>
          <p className="text-lg text-navy-600 leading-relaxed mb-4">
            Tired of manually entering Sysco and US Foods invoices? Our $200/mo
            add-on parses your supplier invoices automatically &mdash; line items,
            prices, and totals extracted and organized so you can track food costs
            without the data entry.
          </p>
          <p className="text-navy-500 text-sm">
            Available as an add-on to any restaurant website package.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-navy-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Restaurant Packages
            </h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              One-time investment. Built to pay for itself in covers.
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
                    "Restaurant " + tier.name + " Package"
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
            Ready to Fill More Tables?
          </h2>
          <p className="text-lg text-navy-300 mb-8 max-w-xl mx-auto">
            We&apos;ll audit your current site for free and show you exactly
            what&apos;s costing you covers.
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
