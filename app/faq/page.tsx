import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQSection {
  title: string;
  items: FAQItem[];
}

const faqSections: FAQSection[] = [
  {
    title: "About the Investment",
    items: [
      {
        question: "How much does a new website cost?",
        answer: (
          <>
            <p className="mb-3">
              Our website builds range from <strong>$2,500 to $7,500</strong>, depending on the scope. A single-page charter captain site with booking integration lands on the lower end, while a multi-page vacation rental site with property listings, photography, and custom integrations sits higher.
            </p>
            <p className="mb-3">
              What drives the price? Mostly the number of pages, whether you need booking platform integration (FareHarbor, Lodgify, etc.), and if we&apos;re coordinating professional photography.
            </p>
            <p>
              Think of it this way: one extra direct booking per month at $300+ pays for the entire site in under a year. This isn&apos;t an expense — it&apos;s the highest-ROI investment most Keys businesses can make.
            </p>
          </>
        ),
      },
      {
        question: "Is there a monthly fee?",
        answer: (
          <>
            <p className="mb-3">
              Yes — our maintenance plans run <strong>$150–$500/month</strong> and cover hosting, security updates, performance monitoring, and ongoing SEO. You get a fast, secure site that stays current without you thinking about it.
            </p>
            <p>
              For context: a single lost booking because your site was down, slow, or didn&apos;t show up on Google costs more than a full year of maintenance. We keep your site working so you can keep your business running.
            </p>
          </>
        ),
      },
      {
        question: "What if I already have a website?",
        answer: (
          <>
            <p className="mb-3">
              Great — that gives us a starting point. We offer a{" "}
              <Link href="/audit" className="text-blue-600 underline hover:text-blue-800 transition-colors">
                free website audit
              </Link>{" "}
              that evaluates your current site on speed, mobile experience, SEO, and conversion.
            </p>
            <p>
              If your site is performing well, we&apos;ll tell you. Honestly. But most Keys businesses we audit are leaving bookings on the table with outdated designs, slow load times, or poor Google visibility. The audit shows you exactly where the gaps are — no obligation.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "About the Process",
    items: [
      {
        question: "How long does it take?",
        answer: (
          <>
            <p className="mb-3">
              Most projects launch in <strong>4–6 weeks</strong>:
            </p>
            <ul className="list-disc pl-6 mb-3 space-y-1 text-navy-600">
              <li><strong>Week 1:</strong> Discovery — we learn your business, competitors, and goals</li>
              <li><strong>Week 2:</strong> Design — you see mockups and give feedback</li>
              <li><strong>Weeks 3–5:</strong> Build — we develop, integrate bookings, and optimize for SEO</li>
              <li><strong>Week 5–6:</strong> Launch — final review, go live, and Google Business setup</li>
            </ul>
            <p>
              Your job during this? Keep running your business. We handle the heavy lifting and check in at clear milestones so you&apos;re never guessing where things stand.
            </p>
          </>
        ),
      },
      {
        question: "What do you need from me?",
        answer: (
          <>
            <p className="mb-3">Not much. Here&apos;s the short list:</p>
            <ul className="list-disc pl-6 mb-3 space-y-1 text-navy-600">
              <li>Your logo and brand colors (if you have them)</li>
              <li>5–10 photos of your business, boats, properties, or team</li>
              <li>Business hours and contact info</li>
              <li>Menu, service list, or rate sheet</li>
              <li>A 30-minute kickoff call to walk us through your business</li>
            </ul>
            <p>
              That&apos;s it. If you don&apos;t have some of these, we&apos;ll work with what you&apos;ve got and fill in the gaps.
            </p>
          </>
        ),
      },
      {
        question: "What if I don't have good photos?",
        answer: (
          <>
            <p className="mb-3">
              Don&apos;t let that stop you. We can start with iPhone photos — you&apos;d be surprised how well modern phone cameras work, especially for that authentic Keys vibe.
            </p>
            <p>
              For businesses that want to level up, we can recommend local Florida Keys photographers who specialize in tourism and hospitality shoots. Professional photos make a real difference in conversion, and they&apos;re an investment that pays off across your website, Google listing, and social media.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "About Results",
    items: [
      {
        question: "How do I know it will work?",
        answer: (
          <>
            <p className="mb-3">
              Results come in stages:
            </p>
            <ul className="list-disc pl-6 mb-3 space-y-1 text-navy-600">
              <li><strong>Immediately:</strong> A professional, fast, mobile-friendly site that converts visitors into inquiries and bookings</li>
              <li><strong>Within weeks:</strong> Optimized Google Business Profile means you show up in Maps searches — this is where most Keys tourists look first</li>
              <li><strong>3–6 months:</strong> SEO gains compound. Your site climbs Google rankings for searches like &quot;fishing charter Islamorada&quot; or &quot;Key West vacation rental&quot;</li>
            </ul>
            <p>
              We track everything — traffic, rankings, booking inquiries — and share monthly reports so you can see the ROI in real numbers, not promises.
            </p>
          </>
        ),
      },
      {
        question: "What makes you different from a generic web agency?",
        answer: (
          <>
            <p className="mb-3">
              Three things:
            </p>
            <ul className="list-disc pl-6 mb-3 space-y-1 text-navy-600">
              <li><strong>Florida Keys focus:</strong> We know the tourism cycle, the seasonal patterns, and what visitors search for. Generic agencies don&apos;t.</li>
              <li><strong>Tourism industry expertise:</strong> We&apos;ve built sites for charter captains, rental managers, restaurants, and watersports operators. We know what converts in this market.</li>
              <li><strong>Ongoing relationship:</strong> We&apos;re not a one-and-done vendor. We maintain, optimize, and grow your site month over month. When something breaks on a Saturday morning before a holiday weekend, we pick up the phone.</li>
            </ul>
          </>
        ),
      },
      {
        question: "Do you work with businesses outside the Keys?",
        answer: (
          <p>
            We specialize in Florida Keys tourism businesses, but we accept select projects across the Keys corridor — Key Largo to Key West — and occasionally partner with businesses in the broader South Florida tourism market. If your business serves visitors to the Keys region, we&apos;re probably a great fit. Reach out and let&apos;s talk.
          </p>
        ),
      },
    ],
  },
  {
    title: "Technical",
    items: [
      {
        question: "Will I be able to update it myself?",
        answer: (
          <>
            <p className="mb-3">
              Yes — for the day-to-day stuff. You&apos;ll get an admin panel where you can update menus, pricing, business hours, photos, and announcements without touching code or calling us.
            </p>
            <p>
              For bigger changes — new pages, design updates, adding integrations — that&apos;s where MCG steps in. It&apos;s included in your maintenance plan, so you&apos;re never stuck waiting or paying surprise fees.
            </p>
          </>
        ),
      },
      {
        question: "What happens if my site goes down?",
        answer: (
          <>
            <p className="mb-3">
              Our maintenance plans include uptime monitoring and a <strong>4-hour response SLA on weekdays</strong>. If your site goes down, we get an alert before you do and start fixing it immediately.
            </p>
            <p>
              We also run daily backups, so even in a worst-case scenario, we can restore your site quickly. Your business doesn&apos;t sleep during peak season, and neither does our monitoring.
            </p>
          </>
        ),
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <div className="flex-1 subpage-top">
        {/* Hero */}
        <section className="section-padding bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              Straight answers to the questions Florida Keys business owners ask before working with us.
            </p>
          </div>
        </section>

        {/* FAQ Sections */}
        {faqSections.map((section) => (
          <section
            key={section.title}
            className={`section-padding ${
              faqSections.indexOf(section) % 2 === 1 ? "bg-navy-50" : "bg-white"
            }`}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 mb-8">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.items.map((item) => (
                  <details
                    key={item.question}
                    className="group bg-white rounded-2xl shadow-ios overflow-hidden"
                  >
                    <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-left font-semibold text-navy-900 hover:bg-navy-50/50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                      <span className="pr-4">{item.question}</span>
                      <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-navy-400 transition-transform duration-300 group-open:rotate-45">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        >
                          <line x1="10" y1="4" x2="10" y2="16" />
                          <line x1="4" y1="10" x2="16" y2="10" />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-navy-600 leading-relaxed">
                      {item.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="section-padding bg-navy-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Still have questions?
            </h2>
            <p className="text-lg text-navy-300 mb-8 max-w-xl mx-auto">
              We&apos;re happy to chat — no pressure, no pitch. Or start with a free audit and see where your site stands.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-ios btn-primary"
              >
                Get in Touch
              </Link>
              <Link
                href="/audit"
                className="btn-ios bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                Free Website Audit
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
