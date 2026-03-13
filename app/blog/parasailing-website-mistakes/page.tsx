import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { HiChevronLeft } from "react-icons/hi";

export const metadata = {
  title:
    "Why Your Parasailing Website Is Killing Your Summer Season | MCG Consulting",
  description:
    "Florida Keys parasailing operators lose peak-season bookings to bad mobile UX, missing waivers, and no real-time availability. Here's what to fix before summer.",
  keywords: [
    "parasailing website",
    "parasailing Key West",
    "parasailing Key Largo",
    "Florida Keys parasailing",
    "parasailing booking",
    "parasailing mobile website",
  ],
};

export default function ParasailingWebsiteMistakesPost() {
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
                  Mobile UX
                </span>
                <span className="text-sm text-navy-400">
                  March 2026 &middot; 4 min read
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4 leading-tight">
                Why Your Parasailing Website Is Killing Your Summer Season
              </h1>
              <div className="flex flex-wrap gap-2">
                {[
                  "parasailing Key West",
                  "parasailing Key Largo",
                  "Florida Keys parasailing",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-navy-700 bg-navy-100 px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Body */}
            <div className="prose-navy max-w-none space-y-6 text-navy-700 leading-relaxed">
              <p>
                Parasailing in the Florida Keys is one of the most seasonal
                businesses there is. Summer is everything &mdash; June through
                August can represent 60&ndash;70% of your annual revenue. Which
                means every booking you lose to a bad website hits harder than in
                any other industry.
              </p>
              <p>
                We&apos;ve audited parasailing operator websites across Key West,
                Key Largo, Marathon, and Islamorada. Here&apos;s what&apos;s
                actually costing you flights.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-2">
                Your Mobile Experience Is a Dealbreaker
              </h2>
              <p>
                Parasailing is the ultimate impulse purchase. A family sees a
                chute in the sky from their hotel balcony, grabs a phone, and
                searches &ldquo;parasailing near me.&rdquo; You have about 5
                seconds to win or lose that booking.
              </p>
              <p>
                If your site takes 6 seconds to load, has text that requires
                pinching to read, or hides the booking button behind three menu
                taps, they&apos;re gone. They didn&apos;t leave a voicemail. They
                didn&apos;t bookmark your site for later. They booked the next
                operator whose site loaded fast and had a &ldquo;Book Now&rdquo;
                button above the fold.
              </p>
              <p>
                <strong>Fix it:</strong> Mobile-first design, not mobile-friendly
                as an afterthought. Load time under 2 seconds. Book Now button
                visible without scrolling. One-tap phone call as a backup.
                Compress every image to WebP. Strip out anything that doesn&apos;t
                directly help someone book a flight.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-2">
                Weight Limits and Weather Policies Are Hidden or Missing
              </h2>
              <p>
                Parasailing has real restrictions that other watersports
                don&apos;t. Combined weight limits for tandem and triple flights.
                Wind speed cancellation thresholds. Age minimums. These
                aren&apos;t fine print &mdash; they&apos;re operational
                requirements that affect every single booking.
              </p>
              <p>
                When these policies aren&apos;t clearly displayed on your
                website, you get walk-ups who don&apos;t meet the requirements,
                angry customers demanding refunds, and one-star reviews from
                people who feel blindsided. All preventable.
              </p>
              <p>
                <strong>Fix it:</strong> Put weight limits, weather policies, and
                age requirements on every booking page &mdash; not buried in a
                FAQ or terms-of-service PDF. Display them clearly before the
                customer enters payment information. Use a pre-booking weight
                input field so customers self-screen before arriving at the dock.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-2">
                No Digital Waiver = Dock Delays and Lost Flights
              </h2>
              <p>
                Paper waivers at the dock slow everything down. Every minute
                spent on clipboards is a minute you&apos;re not flying. During
                peak season, those delays compound &mdash; you lose one flight
                slot per day, that&apos;s 90 flights over the summer at $75+ per
                rider.
              </p>
              <p>
                <strong>Fix it:</strong> Collect waivers digitally during the
                online booking process. Customers sign on their phone before they
                arrive. When they show up at the dock, they&apos;re ready to fly.
                Platforms like FareHarbor support built-in waiver collection that
                integrates directly with the booking flow.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-2">
                No Real-Time Availability = Double Bookings and Dead Slots
              </h2>
              <p>
                If your website says &ldquo;Call for availability,&rdquo;
                you&apos;re creating two problems. First, tourists who
                won&apos;t call &mdash; they just book elsewhere. Second, the
                ones who do call create manual scheduling headaches: double
                bookings, forgotten time slots, and dead gaps in your flight
                schedule that could have been filled.
              </p>
              <p>
                <strong>Fix it:</strong> Real-time availability calendar synced
                with your actual flight schedule. Customers see open slots, book
                them, and the calendar updates instantly. No phone calls needed.
                No double bookings. Your dock crew knows exactly who&apos;s
                showing up and when.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-10 mb-2">
                Summer Won&apos;t Wait for Your Website
              </h2>
              <p>
                The math is simple. A parasailing flight in the Keys runs
                $75&ndash;$95 per rider. If a better website captures just 3 more
                bookings per week during a 14-week summer season, that&apos;s
                $3,150&ndash;$3,990 in additional revenue &mdash; more than
                enough to pay for the site itself. And most operators see
                significantly more than that once they add online booking.
              </p>
              <p>
                The operators who win summer aren&apos;t necessarily running
                better flights. They just make it easier to book one.
              </p>
            </div>

            {/* CTA Block */}
            <div className="mt-12 bg-navy-900 text-white rounded-xl p-6 sm:p-8">
              <h2 className="text-xl font-bold mb-2">
                Fix Your Site Before Summer Starts
              </h2>
              <p className="text-navy-200 leading-relaxed mb-4">
                MCG Consulting builds booking-ready websites for Florida Keys
                parasailing operators. We&apos;ll audit your site for free and
                show you what&apos;s costing you flights.
              </p>
              <Link href="/audit" className="btn-ios btn-primary inline-block">
                Get a free site audit
              </Link>
            </div>

            {/* Related */}
            <div className="mt-12 pt-8 border-t border-navy-200">
              <p className="text-sm font-semibold text-navy-500 uppercase tracking-wider mb-4">
                Related
              </p>
              <Link
                href="/blog/snorkeling-seo-guide"
                className="group flex items-start gap-3 hover:bg-navy-50 rounded-xl p-3 -mx-3 transition-colors"
              >
                <div className="flex-1">
                  <p className="font-semibold text-navy-900 group-hover:underline text-sm">
                    5 Ways Snorkeling Tour Operators Lose Bookings Online (And
                    How to Fix Them)
                  </p>
                  <p className="text-xs text-navy-500 mt-0.5">
                    SEO &amp; Bookings &middot; 6 min read
                  </p>
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
