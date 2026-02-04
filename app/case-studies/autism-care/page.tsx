import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { HiHeart, HiChevronLeft } from "react-icons/hi";

const beforeAfter = [
  { before: "No website", after: "Professional, accessible site live" },
  {
    before: "Referral-only growth",
    after: "Web-based inquiry form capturing leads",
  },
  {
    before: "Not findable in search",
    after: "SEO-optimized for local care searches",
  },
  {
    before: "No service clarity online",
    after: "Full service breakdown with descriptions",
  },
  {
    before: "No online trust signals",
    after: "Credentials, testimonials, professional design",
  },
];

export default function AutismCareCaseStudy() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <div className="flex-1">
        <section className="section-padding bg-gradient-to-br from-white to-navy-50">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-sm text-navy-500 hover:text-navy-900 transition-colors mb-8"
            >
              <HiChevronLeft className="w-4 h-4" />
              All Case Studies
            </Link>

            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-navy-50 rounded-xl flex items-center justify-center">
                  <HiHeart className="w-6 h-6 text-navy-900" />
                </div>
                <span className="text-sm font-medium text-navy-600 bg-navy-50 px-3 py-1 rounded-full">
                  Healthcare
                </span>
                <span className="text-sm font-medium text-green-700 bg-green-50 px-3 py-1 rounded-full">
                  1 week
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-3">
                Compassionate Care
              </h1>
              <p className="text-xl text-navy-600">
                Autism Care Practice Website
              </p>
            </div>

            {/* The Client */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-3">
                The Client
              </h2>
              <p className="text-navy-600 leading-relaxed">
                A private practice providing{" "}
                <strong className="text-navy-800">
                  home and community-based care
                </strong>{" "}
                for adolescents and adults with autism, operating in the local
                area. The practice was growing through referrals but had no
                website — a critical gap when insurance providers and families
                research care options online before making contact.
              </p>
            </div>

            {/* The Problem */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-3">
                The Problem
              </h2>
              <ul className="space-y-2">
                {[
                  "No web presence at all — potential clients couldn\'t find or vet the practice online",
                  "Referral-only growth model was limiting capacity",
                  "No way to showcase services, credentials, or approach to care",
                  "Competitors with websites were capturing search traffic first",
                  "Parents and caregivers needed a trustworthy, professional first impression — a bare minimum for this industry",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-navy-900 flex-shrink-0" />
                    <span className="text-navy-600 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What We Built */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-3">
                What We Built
              </h2>
              <p className="text-navy-600 leading-relaxed mb-4">
                A clean, accessible, SEO-optimized website featuring:
              </p>
              <div className="space-y-3">
                {[
                  {
                    label: "Accessibility-first design",
                    desc: "ARIA-compliant, high contrast, keyboard navigable — especially important for a practice serving individuals with disabilities",
                  },
                  {
                    label: "Services showcase",
                    desc: "Clear breakdown of all six service offerings: In-Home Support, Community Integration, Life Skills Training, Communication Support, Social Skills Development, and Family Collaboration",
                  },
                  {
                    label: "Trust signals",
                    desc: "Credentials, approach to care, and testimonial section",
                  },
                  {
                    label: "Contact form",
                    desc: "Integrated lead capture for new client inquiries",
                  },
                  {
                    label: "SEO structure",
                    desc: "Semantic HTML5, meta descriptions, fast load times for local search ranking",
                  },
                  {
                    label: "Mobile responsive",
                    desc: "Parents researching on phones can navigate and contact easily",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg border border-navy-100 p-4"
                  >
                    <p className="font-semibold text-navy-900 text-sm">
                      {item.label}
                    </p>
                    <p className="text-navy-600 text-sm mt-0.5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Before / After */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">
                The Results
              </h2>
              <div className="border border-navy-200 rounded-xl overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="bg-navy-50 px-4 py-3 border-b border-navy-200">
                    <p className="text-xs font-bold text-navy-500 uppercase tracking-wider">
                      Before
                    </p>
                  </div>
                  <div className="bg-green-50 px-4 py-3 border-b border-navy-200 border-l border-navy-200">
                    <p className="text-xs font-bold text-green-600 uppercase tracking-wider">
                      After
                    </p>
                  </div>
                </div>
                {beforeAfter.map((row, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-2 ${i < beforeAfter.length - 1 ? "border-b border-navy-100" : ""}`}
                  >
                    <div className="px-4 py-3">
                      <p className="text-sm text-navy-600">{row.before}</p>
                    </div>
                    <div className="px-4 py-3 border-l border-navy-100 bg-green-50/30">
                      <p className="text-sm text-navy-800 font-medium">
                        {row.after}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why It Matters */}
            <div className="mb-10 bg-navy-900 text-white rounded-xl p-6 sm:p-8">
              <h2 className="text-xl font-bold mb-3">Why It Matters</h2>
              <p className="text-navy-200 leading-relaxed">
                The healthcare and care services industry runs on{" "}
                <strong className="text-white">trust</strong>. A well-designed,
                accessible website isn&apos;t just a nice-to-have — it&apos;s
                table stakes. Insurance providers, case managers, and families
                all do online research before committing. Without a site, this
                practice was losing potential clients at the first step of the
                funnel.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-navy-900 mb-3">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "HTML5 / CSS3",
                  "Vanilla JavaScript",
                  "Formspree",
                  "Zero Dependencies",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-sm font-medium text-navy-700 bg-navy-100 px-3 py-1.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-8 border-t border-navy-200">
              <p className="text-lg text-navy-600 mb-4">
                Want results like this for your business?
              </p>
              <Link href="/#contact" className="btn-ios btn-navy inline-block">
                Get in touch
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
