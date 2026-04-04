import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { HiChevronLeft } from "react-icons/hi";

export const metadata = {
  title: "How Florida Keys Restaurants Are Losing Google Visibility (And What to Do) | MCG Consulting",
  description:
    "Most Florida Keys restaurants are invisible on Google Maps when tourists search on their phones. Here are the 5 signs your restaurant is losing diners — and how to fix it.",
};

export default function RestaurantGoogleVisibilityPost() {
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
                  Restaurant SEO
                </span>
                <span className="text-sm text-navy-400">March 2026 · 6 min read</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4 leading-tight">
                How Florida Keys Restaurants Are Losing Google Visibility (And What to Do)
              </h1>
              <div className="flex flex-wrap gap-2">
                {["Florida Keys restaurants", "Google Maps SEO", "restaurant website", "local search"].map((tag) => (
                  <span key={tag} className="text-xs font-medium text-navy-700 bg-navy-100 px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Body */}
            <div className="prose-navy max-w-none space-y-6 text-navy-700 leading-relaxed">
              <p>
                It&apos;s 7pm on a Saturday in Key Largo. A family of four just checked into their hotel after six hours in the car. The kids are hungry. Dad pulls out his phone and types &ldquo;best seafood restaurant Key Largo.&rdquo;
              </p>
              <p>
                Google shows three restaurants in the Maps pack at the top of the screen. One has 400 reviews, current hours, a menu link, and photos of blackened mahi on a waterfront deck. The family taps it, checks the wait time, and drives over.
              </p>
              <p>
                Your restaurant &mdash; the one with better food, a better view, and a chef who actually catches his own fish &mdash; isn&apos;t on that screen. It&apos;s buried on page three. The family will never know it exists.
              </p>
              <p>
                This happens hundreds of times a week in the Florida Keys. And it&apos;s almost always fixable.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-2">Why Google Maps Rank Matters More Than Your Website</h2>
              <p>
                Here&apos;s what most restaurant owners don&apos;t realize: for dining decisions, Google Maps has replaced websites almost entirely. When someone searches for a restaurant on their phone, Google shows the Maps &ldquo;3-pack&rdquo; &mdash; three local results with reviews, hours, and a directions button &mdash; before any website link appears.
              </p>
              <p>
                The data backs this up. Over 70% of dining decisions made by tourists happen on mobile devices, and the vast majority of those start and end in Google Maps. The tourist isn&apos;t browsing your website at their leisure. They&apos;re standing in a parking lot, hungry, comparing three options that Google chose for them.
              </p>
              <p>
                If you&apos;re not in that top three, you&apos;re not in the conversation. A beautiful website doesn&apos;t matter if nobody sees it.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-2">5 Signs Your Restaurant Is Invisible Online</h2>
              <p>
                We&apos;ve audited dozens of Florida Keys restaurant websites. The same problems show up over and over:
              </p>

              <div className="space-y-5 mt-4">
                <div className="bg-white rounded-lg border border-navy-100 p-4">
                  <p className="font-semibold text-navy-900 mb-1">1. Your Google Business Profile has no photos</p>
                  <p className="text-sm">
                    Restaurants with 100+ photos on their Google Business Profile get 520% more calls and 2,717% more direction requests than those with fewer than 10. That&apos;s not a typo. Google rewards profiles with rich, recent photos &mdash; and tourists scroll through them before deciding where to eat. If your profile shows a blurry exterior shot from 2019, you&apos;re invisible.
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-navy-100 p-4">
                  <p className="font-semibold text-navy-900 mb-1">2. Your hours are wrong (or missing)</p>
                  <p className="text-sm">
                    Nothing kills trust faster than driving to a restaurant that Google says is open &mdash; and finding it closed. Google penalizes businesses with inaccurate hours by deprioritizing them in search results. Seasonal hours are especially tricky in the Keys, and most restaurants never update them. If your Google listing says you close at 9 but you actually close at 10 during high season, you&apos;re losing late-night diners.
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-navy-100 p-4">
                  <p className="font-semibold text-navy-900 mb-1">3. There&apos;s no menu link anywhere</p>
                  <p className="text-sm">
                    Google Business lets you add a direct link to your menu. Most Keys restaurants leave this blank. Tourists who can&apos;t preview the menu move on to a restaurant where they can. It&apos;s that simple. And if your menu is a PDF or a JPEG of a printed page, Google can&apos;t read it, which means it won&apos;t help your search ranking either.
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-navy-100 p-4">
                  <p className="font-semibold text-navy-900 mb-1">4. Your website takes forever to load on mobile</p>
                  <p className="text-sm">
                    A tourist on their phone, standing outside trying to decide between two restaurants, will wait about 3 seconds for your site to load. After that, they&apos;re gone. We regularly see Keys restaurant websites that take 8&ndash;12 seconds to load on mobile because of uncompressed images, outdated WordPress themes, and bloated plugins. Google tracks this and pushes slow sites down in rankings.
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-navy-100 p-4">
                  <p className="font-semibold text-navy-900 mb-1">5. You have no reviews strategy</p>
                  <p className="text-sm">
                    Reviews are the single biggest factor in Google Maps rankings for restaurants. Not just the star rating &mdash; the recency, volume, and whether you respond to them. A restaurant with 50 reviews from 2024 will be outranked by a restaurant with 50 reviews from the last 3 months. And unanswered negative reviews tell Google (and tourists) that you don&apos;t care.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-2">What a Modern Restaurant Website Actually Needs</h2>
              <p>
                Your website and your Google Business Profile work together. One feeds the other. Here&apos;s what the restaurants winning in Google Maps all have in common:
              </p>

              <div className="space-y-5 mt-4">
                <div className="bg-white rounded-lg border border-navy-100 p-4">
                  <p className="font-semibold text-navy-900 mb-1">A mobile-first menu that loads instantly</p>
                  <p className="text-sm">
                    Not a PDF. Not a photo of your printed menu. A text-based, mobile-optimized menu page that Google can read and index. When someone searches &ldquo;lobster Key West,&rdquo; the restaurants with lobster on a crawlable menu page show up. The ones with a JPEG don&apos;t.
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-navy-100 p-4">
                  <p className="font-semibold text-navy-900 mb-1">A direct link to Google Maps</p>
                  <p className="text-sm">
                    Make it effortless for someone to get directions. A &ldquo;Get Directions&rdquo; button that opens Google Maps on their phone. This seems obvious, but half the restaurant websites we audit don&apos;t have one.
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-navy-100 p-4">
                  <p className="font-semibold text-navy-900 mb-1">A reservation widget (not just a phone number)</p>
                  <p className="text-sm">
                    The tourist planning dinner from their hotel room at 11pm isn&apos;t going to call. They want to tap a button, pick a time, enter their party size, and be done. OpenTable, Resy, or even a simple embedded form &mdash; it doesn&apos;t matter which. What matters is that it works on mobile and takes under 30 seconds.
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-navy-100 p-4">
                  <p className="font-semibold text-navy-900 mb-1">Food photos that load in under 2 seconds</p>
                  <p className="text-sm">
                    Great food photography sells tables. But a 4MB photo of your stone crab claws that takes 8 seconds to load on a phone does more harm than good. Modern image formats (WebP, AVIF) and lazy loading mean you can have stunning photos that load instantly. The restaurants in the Google Maps top 3 have figured this out.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-2">What Happens When You Fix This</h2>
              <p>
                A waterfront restaurant in the Keys came to us ranking on page 3 of Google Maps for their primary search term. Their Google Business Profile had 12 photos, no menu link, and hours that hadn&apos;t been updated in two years. Their website loaded in 9 seconds on mobile.
              </p>
              <p>
                In 6 weeks, we rebuilt their site for mobile, added a text-based menu page, optimized their Google Business Profile with 40+ new photos, fixed their hours and seasonal schedule, and set up a review request system that emailed diners after their visit.
              </p>
              <p>
                The result: they went from page 3 to the #2 position in Google Maps. Online reservation requests increased 35%. The owner told us he noticed more out-of-state license plates in the parking lot &mdash; tourists who found them on Google instead of driving past.
              </p>
              <p>
                The food didn&apos;t change. The service didn&apos;t change. The only thing that changed was whether Google showed them to the people already looking.
              </p>
            </div>

            {/* CTA Block */}
            <div className="mt-12 bg-navy-900 text-white rounded-xl p-6 sm:p-8">
              <h2 className="text-xl font-bold mb-2">Not Sure Where Your Restaurant Stands?</h2>
              <p className="text-navy-200 leading-relaxed mb-4">
                MCG Consulting builds websites for Florida Keys restaurants, from waterfront seafood spots to tiki bars. We&apos;ll audit your Google Business Profile, your website, and your review presence &mdash; free, no commitment.
              </p>
              <Link href="/audit" className="btn-ios btn-primary inline-block">
                Get a free restaurant audit
              </Link>
            </div>

            {/* Related */}
            <div className="mt-12 pt-8 border-t border-navy-200">
              <p className="text-sm font-semibold text-navy-500 uppercase tracking-wider mb-4">Related</p>
              <Link
                href="/blog/restaurant-online-reservations"
                className="group flex items-start gap-3 hover:bg-navy-50 rounded-xl p-3 -mx-3 transition-colors"
              >
                <div className="flex-1">
                  <p className="font-semibold text-navy-900 group-hover:underline text-sm">
                    Why Your Florida Keys Restaurant Needs Online Reservations (Even If You Think You Don&apos;t)
                  </p>
                  <p className="text-xs text-navy-500 mt-0.5">Restaurant Strategy · 4 min read</p>
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
