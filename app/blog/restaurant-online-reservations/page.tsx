import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { HiChevronLeft } from "react-icons/hi";

export const metadata = {
  title: "Why Your Florida Keys Restaurant Needs Online Reservations (Even If You Think You Don't) | MCG Consulting",
  description:
    "Tourists plan Keys trips like hotel stays — online, at 11pm. If your restaurant can't take reservations digitally, you're losing covers to competitors who can.",
};

export default function RestaurantOnlineReservationsPost() {
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
                  Restaurant Strategy
                </span>
                <span className="text-sm text-navy-400">March 2026 · 4 min read</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4 leading-tight">
                Why Your Florida Keys Restaurant Needs Online Reservations (Even If You Think You Don&apos;t)
              </h1>
              <div className="flex flex-wrap gap-2">
                {["online reservations", "restaurant bookings", "OpenTable", "Florida Keys dining"].map((tag) => (
                  <span key={tag} className="text-xs font-medium text-navy-700 bg-navy-100 px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Body */}
            <div className="prose-navy max-w-none space-y-6 text-navy-700 leading-relaxed">
              <p>
                A couple in Atlanta is planning their Keys road trip. It&apos;s 11pm on a Tuesday. They&apos;ve booked the hotel, the snorkel tour, and the sunset cruise. Now they&apos;re picking restaurants for each night &mdash; the same way they booked everything else: online, on their phone, without calling anyone.
              </p>
              <p>
                They find your restaurant. Great reviews, beautiful photos. They look for a reservation button. There isn&apos;t one. Just a phone number and &ldquo;Call for reservations.&rdquo;
              </p>
              <p>
                It&apos;s 11pm. They&apos;re not calling. They book the place next door that has an OpenTable widget.
              </p>
              <p>
                This is happening to Keys restaurants every single night. And most owners have no idea.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-2">How Tourists Actually Book Restaurants</h2>
              <p>
                The Florida Keys are a road trip destination. Most visitors are driving down from Miami, Fort Lauderdale, or Tampa. They&apos;re planning their trip days or weeks in advance, and they&apos;re booking activities and restaurants in the same session &mdash; usually at night, from their couch.
              </p>
              <p>
                This isn&apos;t the walk-in crowd. These are planners. They want to lock in dinner at 7:30 on Friday before they even leave home. And they expect the same frictionless booking experience they get from hotels and tours: tap, select a time, confirm, done.
              </p>
              <p>
                If your restaurant requires a phone call to reserve &mdash; especially when you&apos;re closed &mdash; you&apos;re losing these customers to every competitor with a booking widget on their site.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-2">OpenTable vs. a Direct Booking Widget</h2>
              <p>
                Most restaurant owners who think about online reservations immediately think OpenTable. And OpenTable works &mdash; it&apos;s the biggest name in the space, tourists know and trust it, and setup is straightforward.
              </p>
              <p>
                But OpenTable takes a cut. Network reservations (where a diner finds you through OpenTable&apos;s own platform) cost $2.50&ndash;$3.50 per cover. Even reservations through your own website widget cost $0.25&ndash;$1.00 per cover. For a restaurant doing 100 covers a night, that adds up to $7,500&ndash;$10,500 per month in fees on the high end.
              </p>
              <p>
                The alternative: a direct booking form on your own website. Tools like Resy, Tock, or even a well-built custom form with email confirmation can handle reservations at a fraction of the cost. Some charge a flat monthly fee ($200&ndash;$500/month) regardless of volume. Others are free if you&apos;re willing to manage confirmations manually.
              </p>

              <div className="bg-navy-50 rounded-lg px-4 py-3 text-sm text-navy-700">
                <span className="font-semibold">The math: </span>
                A restaurant doing 80 covers/night on OpenTable network reservations at $3/cover pays roughly $7,200/month. A direct booking widget at $300/month flat saves $6,900/month &mdash; or $82,800/year.
              </div>

              <p>
                That doesn&apos;t mean OpenTable is always wrong. If you&apos;re a new restaurant that needs discovery, OpenTable&apos;s network effect brings diners who wouldn&apos;t have found you otherwise. But if you already have strong foot traffic and a good Google presence, you&apos;re paying OpenTable to process bookings that would have come directly to you anyway.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-2">Why a Direct Booking Form Pays for Itself</h2>
              <p>
                The real value of a direct reservation system isn&apos;t just saving on per-cover fees. It&apos;s capturing customers you&apos;re currently losing entirely &mdash; the ones browsing at 11pm, the ones comparing three restaurants on their phone, the ones who won&apos;t call but will tap a button.
              </p>
              <p>
                A Keys waterfront restaurant we analyzed was phone-only for reservations. Their Google Business Profile showed &ldquo;Reservations: Call.&rdquo; After adding a reservation widget to their website (a simple form with date, time, party size, and email confirmation), they saw a 25% increase in weeknight covers within the first month. The widget caught the tourists who were planning ahead &mdash; the exact diners most likely to order appetizers, drinks, and dessert because they&apos;re on vacation and already committed to the meal.
              </p>
              <p>
                The cost of the booking form was $300/month. The additional revenue from those weeknight covers was over $4,000/month. The ROI was immediate.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-2">The Tourist Booking Pattern You&apos;re Missing</h2>
              <p>
                Here&apos;s what the data shows for Keys restaurant searches:
              </p>

              <div className="space-y-3 mt-4">
                <div className="bg-white rounded-lg border border-navy-100 p-4">
                  <p className="font-semibold text-navy-900 mb-1">2&ndash;3 weeks before arrival</p>
                  <p className="text-sm">Tourists research restaurants, read reviews, and bookmark options. This is when they first discover you.</p>
                </div>
                <div className="bg-white rounded-lg border border-navy-100 p-4">
                  <p className="font-semibold text-navy-900 mb-1">3&ndash;7 days before arrival</p>
                  <p className="text-sm">They start making reservations for specific nights. If you can&apos;t take a reservation online, they book your competitor and move on.</p>
                </div>
                <div className="bg-white rounded-lg border border-navy-100 p-4">
                  <p className="font-semibold text-navy-900 mb-1">Day-of (5&ndash;7pm)</p>
                  <p className="text-sm">Walk-in searches spike. This is Google Maps territory. If you&apos;re in the top 3, you get the traffic. But these diners also check for wait times and reservations online first.</p>
                </div>
              </div>

              <p>
                If you&apos;re only capturing day-of walk-ins, you&apos;re missing the planners &mdash; who tend to be higher-spend, more reliable, and more likely to leave a positive review.
              </p>
            </div>

            {/* CTA Block */}
            <div className="mt-12 bg-navy-900 text-white rounded-xl p-6 sm:p-8">
              <h2 className="text-xl font-bold mb-2">Ready to Stop Losing Covers?</h2>
              <p className="text-navy-200 leading-relaxed mb-4">
                MCG Consulting helps Florida Keys restaurants set up direct booking systems that pay for themselves in the first month. We&apos;ll show you exactly what you&apos;re losing and how to fix it &mdash; no commitment required.
              </p>
              <Link href="/contact" className="btn-ios btn-primary inline-block">
                Let&apos;s talk
              </Link>
            </div>

            {/* Related */}
            <div className="mt-12 pt-8 border-t border-navy-200">
              <p className="text-sm font-semibold text-navy-500 uppercase tracking-wider mb-4">Related</p>
              <Link
                href="/blog/restaurant-google-visibility"
                className="group flex items-start gap-3 hover:bg-navy-50 rounded-xl p-3 -mx-3 transition-colors"
              >
                <div className="flex-1">
                  <p className="font-semibold text-navy-900 group-hover:underline text-sm">
                    How Florida Keys Restaurants Are Losing Google Visibility (And What to Do)
                  </p>
                  <p className="text-xs text-navy-500 mt-0.5">Restaurant SEO · 6 min read</p>
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
