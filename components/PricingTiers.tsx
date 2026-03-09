import { HiCheck } from "react-icons/hi";

const tiers = [
  {
    name: "Starter",
    price: "$3,500",
    popular: false,
    description: "Get online with a fast, professional site",
    features: [
      "5-page responsive website",
      "Mobile-first design",
      "Contact form with email notifications",
      "Google Business Profile integration",
      "Basic SEO (title tags, meta descriptions)",
      "1 month post-launch support",
    ],
  },
  {
    name: "Pro",
    price: "$5,500",
    popular: true,
    description: "Start taking bookings online — the biggest ROI upgrade",
    features: [
      "Everything in Starter",
      "Online booking integration (FareHarbor / Rezdy)",
      "Google Analytics setup & dashboard",
      "Google Reviews widget on-site",
      "Trip/service pages with real content",
      "Photo gallery (optimized WebP)",
      "3 months post-launch support",
    ],
  },
  {
    name: "Premium",
    price: "$7,500",
    popular: false,
    description: "Full digital presence — rank, convert, and grow",
    features: [
      "Everything in Pro",
      "Local SEO setup (schema, citations, content)",
      "Google Ads campaign setup & optimization",
      "Review management & post-trip email flow",
      "Competitor analysis report",
      "6 months post-launch support",
      "$250/mo ongoing maintenance option",
    ],
  },
];

export default function PricingTiers() {
  return (
    <section id="pricing" className="section-padding bg-navy-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto">
            One-time investment. No monthly fees unless you want ongoing
            maintenance. Every tier is built to pay for itself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier) => (
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
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold text-navy-900 mb-1">
                {tier.name}
              </h3>
              <p className="text-3xl font-bold text-navy-900 mb-2">
                {tier.price}
              </p>
              <p className="text-sm text-navy-600 mb-6">{tier.description}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <HiCheck className="w-5 h-5 text-navy-700 shrink-0 mt-0.5" />
                    <span className="text-navy-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`/contact?subject=${encodeURIComponent(tier.name + " Package Inquiry")}`}
                className={`btn-ios text-center text-sm py-3 ${
                  tier.popular ? "btn-primary" : "btn-secondary"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-navy-500 mt-8">
          Not sure which tier fits? Start with a{" "}
          <a href="/contact?subject=Free+Website+Audit" className="underline font-medium text-navy-700">
            free website audit
          </a>{" "}
          — we&apos;ll recommend exactly what you need.
        </p>
      </div>
    </section>
  );
}
