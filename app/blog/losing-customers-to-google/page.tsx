import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { HiChevronLeft } from "react-icons/hi";

export const metadata = {
  title: "Why Florida Keys Businesses Are Losing Customers to Google | MCG Consulting",
  description:
    "Local Florida Keys businesses with poor SEO are invisible on mobile search. Outdated copyright, no SSL, menus as images — here's what's actually costing you bookings.",
};

export default function LosingCustomersPost() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <div className="flex-1 subpage-top">
        <section className="section-padding bg-gradient-to-br from-white to-navy-50">
          <div className="max-w-3xl mx-auto">
            {/* Back */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-navy-500 hover:text-navy-900 transition-colors mb-8"
            >
              <HiChevronLeft className="w-4 h-4" />
              All Posts
            </Link>

            {/* Header */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="text-sm font-medium text-navy-600 bg-navy-50 px-3 py-1 rounded-full">
                  SEO &amp; Visibility
                </span>
                <span className="text-sm text-navy-400">March 2026 · 5 min read</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4 leading-tight">
                Why Florida Keys Businesses Are Losing Customers to Google Before They Even Know It
              </h1>
              <div className="flex flex-wrap gap-2">
                {["Florida Keys web design", "Florida Keys small business website", "local SEO"].map((tag) => (
                  <span key={tag} className="text-xs font-medium text-navy-700 bg-navy-100 px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Body */}
            <div className="prose-navy max-w-none space-y-6 text-navy-700 leading-relaxed">
              <p>
                You&apos;re doing everything right. You show up every day, you cook great food, run great trips, keep the boat clean. But somewhere between a tourist opening Google on their phone and walking through your door, you&apos;re losing them — and you probably don&apos;t know it.
              </p>
              <p>Here&apos;s what&apos;s actually happening.</p>

              <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-2">Google Decides Before You Do</h2>
              <p>
                When someone visiting the Keys searches &ldquo;best fishing charter Islamorada&rdquo; or &ldquo;Key West sunset cruise,&rdquo; Google doesn&apos;t just return a list of businesses. It ranks them. The ones at the top get bookings. The ones buried on page two might as well not exist.
              </p>
              <p>
                Most small businesses in the Keys are invisible to that search. Not because they&apos;re bad businesses — they&apos;re often excellent — but because their websites don&apos;t signal relevance, credibility, or speed to Google&apos;s algorithm.
              </p>
              <p>
                And by the time you find out? The booking already went to someone else.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-2">The Patterns We See Over and Over</h2>
              <p>We&apos;ve audited dozens of Florida Keys small business websites. The same problems show up constantly:</p>

              <div className="space-y-5 mt-4">
                <div className="bg-white rounded-lg border border-navy-100 p-4">
                  <p className="font-semibold text-navy-900 mb-1">1. No HTTPS (the padlock icon)</p>
                  <p className="text-sm">
                    If your site&apos;s URL starts with <code className="bg-navy-50 px-1 rounded text-navy-800">http://</code> instead of <code className="bg-navy-50 px-1 rounded text-navy-800">https://</code>, Google actively downgrades it in rankings and modern browsers show a &ldquo;Not Secure&rdquo; warning. Tourists see that and leave. This is fixable in an afternoon — but we still see it on restaurant and charter sites opened years ago.
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-navy-100 p-4">
                  <p className="font-semibold text-navy-900 mb-1">2. Copyright dates from three years ago</p>
                  <p className="text-sm">
                    A footer that reads &ldquo;© 2021&rdquo; tells Google — and your visitors — that this site hasn&apos;t been touched in years. Search engines weigh recency. So does consumer trust. We&apos;ve seen sites with literally &ldquo;© 2004&rdquo; still live and indexed.
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-navy-100 p-4">
                  <p className="font-semibold text-navy-900 mb-1">3. The menu is a JPEG</p>
                  <p className="text-sm">
                    This is more common than you&apos;d think: a restaurant takes a photo of their printed menu and uploads it to the website. The problem? Google can&apos;t read an image. A text-based menu shows up in search results. A JPEG doesn&apos;t. The same goes for fishing charter rate cards posted as PDFs.
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-navy-100 p-4">
                  <p className="font-semibold text-navy-900 mb-1">4. The site breaks on mobile</p>
                  <p className="text-sm">
                    More than 65% of Keys tourism searches happen on phones. If your site is pinch-to-zoom, has tiny tap targets, or takes more than 3 seconds to load on mobile, those visitors bounce immediately. Google tracks bounce rates. High bounce = lower ranking = fewer visitors. It&apos;s a spiral.
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-navy-100 p-4">
                  <p className="font-semibold text-navy-900 mb-1">5. No way to book online</p>
                  <p className="text-sm">
                    Sites with booking integrations have lower bounce rates, longer session times, and more engagement — all things Google rewards. More importantly: tourists planning from out of state don&apos;t want to call. They want to click, select a date, pay a deposit, and be done. If you can&apos;t offer that, they book with someone who can.
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-navy-100 p-4">
                  <p className="font-semibold text-navy-900 mb-1">6. The Google Business Profile is incomplete or abandoned</p>
                  <p className="text-sm">
                    Your website and your Google Business Profile work together. An incomplete profile — no photos, no hours, unanswered reviews — drags your local search ranking down. We&apos;ve seen businesses with 600+ Yelp reviews that never claimed their Google listing.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-2">What Good Looks Like</h2>
              <p>
                A well-built Florida Keys small business website loads in under 2 seconds on mobile, uses HTTPS, has readable text-based menus or trip listings, integrates an online booking or reservation system, and sends signals to Google constantly through updated content and a linked Business Profile.
              </p>
              <p>
                That combination is what puts you at the top of search results when someone types &ldquo;things to do in Marathon&rdquo; or &ldquo;best waterfront restaurant Islamorada.&rdquo;
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-2">The Honest Truth</h2>
              <p>
                We&apos;re not going to tell you that a bad website means your business is failing. Plenty of Keys businesses thrive on word-of-mouth and repeat visitors alone. But if you&apos;re not capturing the tourist who found you on Google — or worse, if they found your competitors instead — you&apos;re leaving real money on the table every single week.
              </p>
              <p>
                We&apos;ve seen it fix itself in a matter of weeks when the underlying problems get addressed.
              </p>
            </div>

            {/* CTA Block */}
            <div className="mt-12 bg-navy-900 text-white rounded-xl p-6 sm:p-8">
              <h2 className="text-xl font-bold mb-2">Not Sure Where You Stand?</h2>
              <p className="text-navy-200 leading-relaxed mb-4">
                MCG Consulting builds websites for Florida Keys small businesses — fishing charters, restaurants, dive shops, watersports operators, and marinas. If you&apos;re not sure what your site is actually doing for you, reach out and we&apos;ll take a look.
              </p>
              <Link href="/#contact" className="btn-ios btn-primary inline-block">
                Get a free site audit
              </Link>
            </div>

            {/* Related */}
            <div className="mt-12 pt-8 border-t border-navy-200">
              <p className="text-sm font-semibold text-navy-500 uppercase tracking-wider mb-4">Related</p>
              <Link
                href="/blog/5-things-tourism-website-must-have"
                className="group flex items-start gap-3 hover:bg-navy-50 rounded-xl p-3 -mx-3 transition-colors"
              >
                <div className="flex-1">
                  <p className="font-semibold text-navy-900 group-hover:underline text-sm">
                    The 5 Things Every Florida Keys Tourism Business Website Must Have in 2026
                  </p>
                  <p className="text-xs text-navy-500 mt-0.5">Checklist · 4 min read</p>
                </div>
                <HiChevronLeft className="w-4 h-4 text-navy-400 rotate-180 flex-shrink-0 mt-1" />
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
