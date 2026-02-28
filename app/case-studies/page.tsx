import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  HiFire,
  HiHeart,
  HiArrowRight,
  HiTrendingUp,
} from "react-icons/hi";
import { HiDevicePhoneMobile } from "react-icons/hi2";

const caseStudies = [
  {
    slug: "islamorada-fishing",
    title: "Islamorada Sport Fishing",
    subtitle: "Charter Booking Website + Online Reservations",
    description:
      "A Keys fishing charter operation that relied entirely on phone calls and walk-ins. We built a modern booking site with real-time availability — and drove 40% of all bookings online within 90 days.",
    category: "Tourism & Fishing",
    timeline: "2 weeks",
    icon: HiTrendingUp,
    tags: ["Next.js 15", "FareHarbor API", "Photo Gallery", "SEO"],
    metric: "+40% online bookings",
    metricColor: "text-green-700 bg-green-50",
  },
  {
    slug: "marathon-dive-shop",
    title: "Marathon Dive Shop",
    subtitle: "Mobile Redesign + Rental Booking",
    description:
      "A beloved dive shop with a 2016 desktop-only website hemorrhaging mobile traffic. Full mobile-first rebuild with gear rental and course booking. Bounce rate dropped 35% in the first month.",
    category: "Water Sports",
    timeline: "3 weeks",
    icon: HiDevicePhoneMobile,
    tags: ["Mobile-First", "React", "Booking System", "Performance"],
    metric: "−35% bounce rate",
    metricColor: "text-blue-700 bg-blue-50",
  },
  {
    slug: "coastal-bun",
    title: "The Coastal Bun",
    subtitle: "Food Truck Website + Online Ordering",
    description:
      "A full-stack Next.js site with Square payment integration for an Asian fusion bao bun food truck in the Florida Keys. Took the business from zero web presence to a searchable, bookable, payable brand in two weeks.",
    category: "Food & Restaurant",
    timeline: "2 weeks",
    icon: HiFire,
    tags: ["Next.js 15", "Square Payments", "SEO", "Mobile-First"],
    metric: "0 → live in 2 weeks",
    metricColor: "text-orange-700 bg-orange-50",
  },
  {
    slug: "autism-care",
    title: "Compassionate Care",
    subtitle: "Autism Care Practice Website",
    description:
      "An accessibility-first website for a private autism care practice — built to earn trust from insurance providers, families, and case managers searching online. Clean, fast, ARIA-compliant, and SEO-optimized for local care searches.",
    category: "Healthcare",
    timeline: "1 week",
    icon: HiHeart,
    tags: ["HTML5/CSS3", "Accessibility", "SEO", "Lead Capture"],
    metric: "Referral-only → web leads",
    metricColor: "text-purple-700 bg-purple-50",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <div className="flex-1 subpage-top">
        <section className="section-padding bg-gradient-to-br from-white to-navy-50">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <p className="text-sm font-semibold text-navy-500 uppercase tracking-widest mb-3">
                Client Work
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
                Case Studies
              </h1>
              <p className="text-xl text-navy-600 max-w-2xl mx-auto">
                Real projects, real results. See how we help local businesses
                build a strong online presence and grow measurably.
              </p>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
              {[
                { value: "4+", label: "Projects launched" },
                { value: "2 wks", label: "Avg. time to live" },
                { value: "100%", label: "Mobile responsive" },
                { value: "Keys-based", label: "Local expertise" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center bg-white rounded-xl border border-navy-100 shadow-sm py-4 px-3"
                >
                  <p className="text-2xl font-bold text-navy-900">
                    {stat.value}
                  </p>
                  <p className="text-xs text-navy-500 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Case Study Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudies.map((study) => {
                const IconComponent = study.icon;
                return (
                  <Link
                    key={study.slug}
                    href={`/case-studies/${study.slug}`}
                    className="card-ios hover:shadow-ios-lg group transition-all duration-300 flex flex-col"
                  >
                    {/* Icon + Category */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-navy-900" />
                        </div>
                        <span className="text-sm font-medium text-navy-600 bg-navy-50 px-3 py-1 rounded-full">
                          {study.category}
                        </span>
                      </div>
                      <HiArrowRight className="w-5 h-5 text-navy-400 group-hover:text-navy-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>

                    {/* Content */}
                    <h2 className="text-xl font-bold text-navy-900 mb-1">
                      {study.title}
                    </h2>
                    <p className="text-sm text-navy-500 font-medium mb-3">
                      {study.subtitle}
                    </p>
                    <p className="text-navy-600 text-sm leading-relaxed mb-4 flex-grow">
                      {study.description}
                    </p>

                    {/* Tags + Timeline */}
                    <div className="mt-auto">
                      {/* Result metric badge */}
                      <div className="mb-3">
                        <span
                          className={`inline-flex items-center text-xs font-bold px-3 py-1.5 rounded-full ${study.metricColor}`}
                        >
                          {study.metric}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {study.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-medium text-navy-700 bg-navy-100 px-2.5 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="pt-3 border-t border-navy-100 flex items-center justify-between">
                        <span className="text-xs text-navy-500">
                          Timeline:{" "}
                          <strong className="text-navy-700">
                            {study.timeline}
                          </strong>
                        </span>
                        <span className="text-xs font-medium text-navy-900 group-hover:underline">
                          Read case study →
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <p className="text-lg text-navy-600 mb-4">
                Ready to see what we can do for your business?
              </p>
              <Link
                href="/#contact"
                className="btn-ios btn-navy inline-flex items-center gap-2"
              >
                Get Started
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
