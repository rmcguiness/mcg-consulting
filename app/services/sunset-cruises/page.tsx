import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  HiPhone,
  HiSearch,
  HiUserGroup,
  HiCalendar,
  HiCamera,
  HiShare,
  HiCheck,
  HiTrendingUp,
  HiClock,
  HiGlobe,
} from "react-icons/hi";

export const metadata: Metadata = {
  title: "Sunset Cruise Websites — Florida Keys | MCG Consulting",
  description:
    "We build booking-ready websites for Florida Keys sunset cruise operators. Online ticketing, stunning photo galleries, local SEO for Key West and Key Largo — stand out from dozens of competitors and fill every sailing.",
  keywords: [
    "sunset cruise website",
    "Florida Keys sunset cruise",
    "sunset cruise Key West",
    "sunset cruise Key Largo",
    "sunset cruise web design",
    "sunset cruise online booking",
    "sunset cruise SEO",
    "sunset sail Florida Keys",
  ],
};

const painPoints = [
  {
    icon: HiPhone,
    headline: "No online ticketing — losing after-hours bookings",
    description:
      "Tourists decide on sunset cruises at 9pm from their hotel room. If they can\u2019t book online, they\u2019ll pick the operator with a \u201cReserve Now\u201d button. Phone-only means you\u2019re invisible after 5pm.",
  },
  {
    icon: HiSearch,
    headline: "Low Google visibility in a crowded market",
    description:
      "There are dozens of sunset cruise operators in the Keys. If your site doesn\u2019t rank for \u201csunset cruise Key West\u201d or \u201csunset cruise Key Largo,\u201d tourists don\u2019t even know you exist.",
  },
  {
    icon: HiClock,
    headline: "Seasonal demand swings crush off-season revenue",
    description:
      "Peak season fills itself. Off-season is where most operators bleed money. Without SEO and a booking funnel working year-round, you\u2019re riding the cycle instead of smoothing it.",
  },
  {
    icon: HiUserGroup,
    headline: "Competing with dozens of operators on the same dock",
    description:
      "Key West alone has 40+ sunset cruises. If your website doesn\u2019t differentiate your experience \u2014 private charters, live music, dinner service \u2014 you\u2019re just another boat in the lineup.",
  },
];

const features = [
  {
    icon: HiCalendar,
    title: "Ticket Booking Widget",
    description:
      "FareHarbor, Peek, or Rezdy \u2014 we integrate your booking system so guests pick a date, choose their sailing, and pay a deposit. Works at 11pm, works on mobile, works while you\u2019re on the water.",
  },
  {
    icon: HiCamera,
    title: "Photo Gallery — Sunsets, Couples, Boats",
    description:
      "Golden hour on the water sells itself \u2014 if your site shows it. Optimized galleries of sunsets, couples, boats, and Keys wildlife that load fast and look stunning on every screen.",
  },
  {
    icon: HiSearch,
    title: "SEO for \u2018Sunset Cruise Key West / Key Largo\u2019",
    description:
      "Location-specific pages targeting the searches tourists actually type \u2014 \u201csunset cruise Key West,\u201d \u201csunset sail Key Largo,\u201d \u201cprivate sunset charter Islamorada.\u201d",
  },
  {
    icon: HiShare,
    title: "Social Media Integration",
    description:
      "Instagram feed on your homepage, easy share buttons for guest photos, and review widgets that pull your best TripAdvisor and Google ratings onto every page.",
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
    value: "65%",
    label: "After-hours bookings",
    detail: "captured with online ticketing",
    icon: HiClock,
  },
  {
    value: "Page 1",
    label: "Google ranking",
    detail: "for \u2018sunset cruise [city]\u2019",
    icon: HiGlobe,
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$3,500",
    description: "Get bookable and visible",
    features: [
      "5\u20138 page responsive website",
      "Ticket booking widget (FareHarbor/Peek/Rezdy)",
      "Mobile-first, fast-loading design",
      "Sunset & boat photo gallery (optimized WebP)",
      "Google Business Profile setup",
      "Basic SEO (title tags, meta descriptions, schema)",
      "$250/mo optional maintenance",
    ],
  },
  {
    name: "Pro",
    price: "$6,500",
    popular: true,
    description: "Stand out from every other operator",
    features: [
      "Everything in Starter",
      "Full sunset photo & video gallery with lightbox",
      "90-day local SEO campaign",
      "Instagram feed integration",
      "Google Reviews widget on-site",
      "Post-cruise review email automation",
      "Competitor analysis report",
      "Seasonal promotion landing pages",
      "$250/mo optional maintenance",
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
              Dozens of Sunset Cruises.
              <br />
              One Empty Seat Is Yours to Fill.
            </h1>
            <p className="text-lg sm:text-xl text-navy-200 mb-10 leading-relaxed max-w-2xl">
              We build booking-ready websites for Florida Keys sunset cruise
              operators. Online ticketing, stunning galleries, and SEO that
              puts you above the competition &mdash; from Key West to Key
              Largo.
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
              These are the four things costing Keys sunset cruise operators
              the most bookings.
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
              Everything you need to stand out in a crowded market &mdash;
              and fill every sailing.
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
              Results: Keys Sunset Charter Operator
            </h2>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              A Keys-based sunset cruise operator added online ticketing and
              SEO. Here&apos;s what happened in 90 days.
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
              This operator was running phone-only bookings and competing
              against 30+ sunset cruise listings in their area. Tourists
              couldn&apos;t book after hours, and the site wasn&apos;t
              ranking for any local search terms.
            </p>
            <p className="text-navy-700 leading-relaxed mb-4">
              We rebuilt the site with FareHarbor integration, a sunset photo
              gallery optimized for mobile, and location-specific landing
              pages. Within 90 days: <strong>45% increase in online
              bookings</strong>, <strong>65% of new bookings came after
              business hours</strong>, and the site reached page 1 for
              &ldquo;sunset cruise&rdquo; + their city name.
            </p>
            <p className="text-navy-600 text-sm italic">
              Year 1 conservative estimate: $8,300 in additional revenue from
              after-hours and organic search bookings alone.
            </p>
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
              One-time investment. Built to pay for itself in ticket sales.
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

      {/* CTA Footer Band */}
      <section className="bg-navy-950 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Fill Every Sailing?
          </h2>
          <p className="text-lg text-navy-300 mb-8 max-w-xl mx-auto">
            We&apos;ll audit your current site for free and show you exactly
            what&apos;s costing you ticket sales.
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
