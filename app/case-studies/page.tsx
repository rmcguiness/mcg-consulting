import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { HiFire, HiHeart, HiArrowRight } from "react-icons/hi";

const caseStudies = [
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
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <div className="flex-1">
        <section className="section-padding bg-gradient-to-br from-white to-navy-50">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
                Case Studies
              </h1>
              <p className="text-xl text-navy-600 max-w-2xl mx-auto">
                Real projects, real results. See how we help local businesses
                build a strong online presence.
              </p>
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
                      <div className="pt-3 border-t border-navy-100">
                        <span className="text-xs text-navy-500">
                          Timeline:{" "}
                          <strong className="text-navy-700">
                            {study.timeline}
                          </strong>
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
