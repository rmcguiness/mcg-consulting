import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Client Results | MCG Consulting",
  description:
    "See the transformation MCG Consulting delivers for Florida Keys tourism businesses — before and after results for charters, restaurants, tours, and vacation rentals.",
};

const caseStudies = [
  {
    industry: "Charter Fishing",
    services: ["Website Rebuild", "FareHarbor Integration", "Google Business Optimization"],
    metric: "Booking requests up 3.2x in first 90 days",
    before: [
      "Static PDF-style brochure site",
      "No online booking — phone only",
      "Not mobile-friendly",
      "No Google Business optimization",
    ],
    after: [
      "Mobile-first site with FareHarbor booking widget",
      "Real-time availability and instant confirmation",
      "Optimized Google Business Profile with reviews",
      "Page 1 ranking for target fishing keywords",
    ],
  },
  {
    industry: "Snorkeling Tours",
    services: ["Full Website Build", "SEO Strategy", "Lead Capture"],
    metric: "Ranks #2 for \"snorkeling Key Largo\" — 40+ monthly organic leads",
    before: [
      "Facebook page only — no website",
      "Zero organic search presence",
      "Relied entirely on word-of-mouth",
      "No way to capture leads after hours",
    ],
    after: [
      "Full website with trip pages and photo galleries",
      "Location-targeted SEO for top snorkeling keywords",
      "Automated lead capture with email follow-up",
      "40+ monthly leads from Google alone",
    ],
  },
  {
    industry: "Family Restaurant",
    services: ["Website Redesign", "Online Reservations", "Mobile Optimization"],
    metric: "58% of reservations now come through the website directly",
    before: [
      "2009-era site with broken mobile layout",
      "Menu was an unreadable PDF",
      "No online reservation system",
      "7+ second load time on mobile",
    ],
    after: [
      "Modern responsive design with HTML menu",
      "Integrated online reservation widget",
      "Sub-2-second mobile load time",
      "Zero commission on direct reservations",
    ],
  },
  {
    industry: "Vacation Rental",
    services: ["Direct Booking Website", "Channel Strategy", "SEO"],
    metric: "Direct bookings = 22% savings on Airbnb fees — $14,400 kept in year one",
    before: [
      "100% dependent on Airbnb for bookings",
      "Paying 15-20% in OTA commissions",
      "No brand identity or repeat guest strategy",
      "Zero direct search visibility",
    ],
    after: [
      "Own website with direct booking and payment",
      "SEO-optimized for location + property type",
      "Email capture for repeat guest marketing",
      "$14,400 in commission savings in first year",
    ],
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <div className="flex-1 subpage-top">
        <section className="section-padding bg-gradient-to-br from-white to-navy-50">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-6">
              <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
                Client Results
              </h1>
              <p className="text-lg sm:text-xl text-navy-600 max-w-2xl mx-auto mb-3">
                Real transformations for Florida Keys tourism businesses
              </p>
              <p className="text-sm text-navy-400 max-w-xl mx-auto">
                Typical client results based on engagements with Keys tourism operators.
                Individual results vary by market, competition, and engagement scope.
              </p>
            </div>

            {/* Case Study Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="card-ios overflow-hidden hover:shadow-ios-lg transition-all duration-300"
                >
                  {/* Industry & Services */}
                  <div className="mb-4">
                    <span className="text-sm font-medium text-navy-600 bg-navy-50 px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                  </div>

                  {/* Metric Callout */}
                  <div className="bg-gradient-to-r from-navy-900 to-navy-800 text-white rounded-xl p-5 mb-6">
                    <p className="text-xl sm:text-2xl font-bold leading-tight">
                      {study.metric}
                    </p>
                  </div>

                  {/* Before / After Split */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {/* Before */}
                    <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                      <h3 className="text-sm font-bold text-red-700 uppercase tracking-wide mb-3">
                        Before
                      </h3>
                      <ul className="space-y-2">
                        {study.before.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm text-red-900/80 flex items-start gap-2"
                          >
                            <span className="text-red-400 mt-0.5 flex-shrink-0">✕</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* After */}
                    <div className="bg-green-50 border border-green-100 rounded-xl p-4">
                      <h3 className="text-sm font-bold text-green-700 uppercase tracking-wide mb-3">
                        After
                      </h3>
                      <ul className="space-y-2">
                        {study.after.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm text-green-900/80 flex items-start gap-2"
                          >
                            <span className="text-green-500 mt-0.5 flex-shrink-0">&#10003;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Services Provided */}
                  <div className="pt-4 border-t border-navy-100">
                    <p className="text-xs text-navy-400 mb-2">Services provided</p>
                    <div className="flex flex-wrap gap-2">
                      {study.services.map((service, i) => (
                        <span
                          key={i}
                          className="text-xs font-medium text-navy-700 bg-navy-50 px-2.5 py-1 rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <div className="card-ios max-w-2xl mx-auto bg-gradient-to-br from-navy-900 to-navy-800 text-white">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                  See if your business qualifies
                </h2>
                <p className="text-navy-200 mb-6 text-sm sm:text-base">
                  Get a free audit of your website and online presence — no pitch,
                  just a straight look at what{"'"}s costing you bookings.
                </p>
                <Link
                  href="/audit"
                  className="inline-block bg-white text-navy-900 font-semibold px-8 py-3 rounded-full hover:bg-navy-50 transition-colors"
                >
                  Get Your Free Audit
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
