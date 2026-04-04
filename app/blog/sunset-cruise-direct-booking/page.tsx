import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { HiChevronLeft } from "react-icons/hi";

export const metadata = {
  title:
    "Why Florida Keys Sunset Cruise Operators Are Paying Too Much to Viator (And How to Stop) | MCG Consulting",
  description:
    "Viator and TripAdvisor take 20-30% of every sunset cruise booking. On a $50 ticket, that's $10-$15 per customer lost. Here's how to build a direct booking funnel that keeps that money.",
};

export default function SunsetCruiseDirectBookingPost() {
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
                  Direct Booking Strategy
                </span>
                <span className="text-sm text-navy-400">
                  March 2026 &middot; 5 min read
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4 leading-tight">
                Why Florida Keys Sunset Cruise Operators Are Paying Too Much to
                Viator (And How to Stop)
              </h1>
              <p className="text-lg text-navy-600 leading-relaxed">
                You sell one of the most beautiful experiences in the Florida
                Keys. Viator takes 20&ndash;30% of every ticket for the
                privilege of listing it. Here&apos;s the math on what
                that&apos;s actually costing you &mdash; and a realistic
                alternative.
              </p>
            </div>

            {/* Article Body */}
            <div className="text-navy-700 leading-relaxed space-y-5">
              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                The Commission Math Nobody Talks About
              </h2>
              <p>
                Let&apos;s run the numbers on a typical Keys sunset cruise
                operation.
              </p>
              <p>
                Average ticket price: <strong>$50 per person</strong>. A
                standard evening cruise carries 20&ndash;30 guests. That&apos;s
                $1,000&ndash;$1,500 in revenue per sailing. Sounds healthy.
              </p>
              <p>
                Now subtract the OTA cut. Viator&apos;s commission ranges from{" "}
                <strong>20% to 30%</strong> depending on your arrangement.
                TripAdvisor Experiences is similar. On a $50 ticket, that&apos;s{" "}
                <strong>$10&ndash;$15 per customer</strong> going straight to
                the platform.
              </p>
              <p>
                On a 25-person cruise, that&apos;s{" "}
                <strong>$250&ndash;$375 per sailing</strong>. If you run one
                cruise a night during peak season (October through May &mdash;
                roughly 240 days), that&apos;s{" "}
                <strong>$60,000&ndash;$90,000 per year</strong> in commission
                fees alone.
              </p>
              <p>
                That&apos;s not a marketing expense. That&apos;s a second
                captain&apos;s salary going to a booking platform.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                What You&apos;re Actually Giving Away
              </h2>
              <p>
                The commission isn&apos;t even the worst part. When a customer
                books through Viator, Viator owns that relationship:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>They collect the email address</strong>, not you. You
                  can&apos;t follow up, can&apos;t send a &quot;come back next
                  winter&quot; email, can&apos;t promote your private charter
                  packages.
                </li>
                <li>
                  <strong>They control the review</strong>. The review lives on
                  Viator&apos;s platform, building their SEO, not yours.
                </li>
                <li>
                  <strong>They show competitors on your listing page</strong>.
                  Right next to your cruise, there&apos;s a &quot;Similar
                  Experiences&quot; carousel featuring your direct competition.
                </li>
                <li>
                  <strong>They set the terms</strong>. Cancellation policies,
                  payout schedules, visibility algorithms &mdash; all controlled
                  by the platform, not you.
                </li>
              </ul>
              <p>
                You&apos;re paying $60K+ a year to rent access to customers you
                could own.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                The Alternative: A Direct Booking Funnel on Your Own Site
              </h2>
              <p>
                The solution isn&apos;t to leave Viator entirely &mdash;
                it&apos;s to build a direct booking channel that&apos;s
                competitive enough to shift the ratio. Here&apos;s what that
                looks like in practice:
              </p>

              <h3 className="text-xl font-bold text-navy-900 mt-6">
                1. A Real Booking Widget on Your Website
              </h3>
              <p>
                Not a &quot;Call to book&quot; button. Not a contact form. A
                real calendar that shows availability, lets customers pick a
                date and group size, and collects a deposit. FareHarbor is the
                industry standard for tours and activities &mdash; it integrates
                directly into your site and handles payments, waivers, and
                confirmations.
              </p>
              <p>
                The key move:{" "}
                <strong>&quot;Book Direct &amp; Save 15%&quot;</strong>{" "}
                messaging, prominently displayed. Tourists are price-sensitive.
                If they can save $7.50 per ticket by booking on your site
                instead of Viator, many will. You still make more per booking
                even after the discount.
              </p>

              <h3 className="text-xl font-bold text-navy-900 mt-6">
                2. Email Capture on Every Booking
              </h3>
              <p>
                Every direct booking captures the customer&apos;s email. Now you
                can send a post-cruise thank-you with a review link. A
                &quot;Plan Your Next Keys Trip&quot; email in September. A
                private charter promotion for anniversary couples. A referral
                discount for friends.
              </p>
              <p>
                One repeat customer per week &mdash; someone who books direct
                because you emailed them &mdash; is{" "}
                <strong>$2,500+ in additional annual revenue</strong> with zero
                acquisition cost.
              </p>

              <h3 className="text-xl font-bold text-navy-900 mt-6">
                3. Photos and Video That Actually Sell the Experience
              </h3>
              <p>
                Sunset cruises are inherently visual. Your website should
                reflect that. Mobile-optimized photo galleries (WebP format,
                lazy loading) and a 30-second video embed of an actual sunset
                from your boat will outperform any Viator listing photo. This
                isn&apos;t vanity &mdash; it&apos;s conversion. A stunning hero
                image is the difference between a bounce and a booking.
              </p>

              <h3 className="text-xl font-bold text-navy-900 mt-6">
                4. Google Presence That Brings Organic Traffic
              </h3>
              <p>
                When someone searches &quot;sunset cruise Key West tonight,&quot;
                you want your site showing up &mdash; not just your Viator
                listing. A properly optimized Google Business Profile, local SEO
                targeting your specific harbor, and a fast-loading mobile site
                will get you organic traffic that costs $0 in commissions.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                The Real Math: Direct vs. OTA
              </h2>
              <p>
                Let&apos;s say you shift just <strong>40%</strong> of your
                bookings from Viator to direct. On a 240-day season with 25
                guests per cruise:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Total seasonal bookings: <strong>6,000 guests</strong>
                </li>
                <li>
                  40% shifted to direct: <strong>2,400 guests</strong>
                </li>
                <li>
                  Commission saved per guest (after 15% direct discount):{" "}
                  <strong>~$5&ndash;$8</strong>
                </li>
                <li>
                  Annual savings:{" "}
                  <strong>$12,000&ndash;$19,200 in recovered margin</strong>
                </li>
                <li>
                  Plus: email list growth, repeat bookings, review control,
                  brand ownership
                </li>
              </ul>
              <p>
                The website investment pays for itself in the first season.
                Every season after that is pure upside.
              </p>

              <h2 className="text-2xl font-bold text-navy-900 mt-8">
                You Don&apos;t Have to Leave Viator. You Just Need a Better
                Option.
              </h2>
              <p>
                Keep your Viator listing running &mdash; it&apos;s still
                incremental volume. But build a direct channel that&apos;s
                competitive enough to capture the customers who would book with
                you anyway. The ones searching your business name. The ones who
                found you on Google Maps. The ones who got a recommendation from
                a friend.
              </p>
              <p>
                Those are <em>your</em> customers. You shouldn&apos;t be paying
                30% for them.
              </p>
            </div>

            {/* CTA Block */}
            <div className="bg-navy-900 text-white rounded-xl p-6 sm:p-8 mt-10">
              <h2 className="text-xl font-bold mb-2">
                Ready to Build Your Direct Booking Funnel?
              </h2>
              <p className="text-navy-200 leading-relaxed mb-4">
                MCG Consulting builds direct-booking websites for Florida Keys
                sunset cruise operators. We&apos;ll audit your current site,
                show you exactly how much you&apos;re losing to OTA commissions,
                and build a site that competes.
              </p>
              <Link
                href="/services/sunset-cruises"
                className="btn-ios btn-primary inline-block"
              >
                See Our Sunset Cruise Packages
              </Link>
            </div>

            {/* Related */}
            <div className="mt-12 pt-8 border-t border-navy-200">
              <p className="text-sm font-semibold text-navy-500 uppercase tracking-wider mb-4">
                Related
              </p>
              <Link
                href="/blog/5-things-tourism-website-must-have"
                className="group flex items-start gap-3 hover:bg-navy-50 rounded-xl p-3 -mx-3 transition-colors"
              >
                <div className="flex-1">
                  <p className="font-semibold text-navy-900 group-hover:underline text-sm">
                    The 5 Things Every Florida Keys Tourism Business Website
                    Must Have in 2026
                  </p>
                  <p className="text-xs text-navy-500 mt-0.5">
                    Website Strategy &middot; 4 min read
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
