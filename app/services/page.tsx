import Link from "next/link";
import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import PricingTiers from "@/components/PricingTiers";
import { HiArrowRight } from "react-icons/hi";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <div className="flex-1 subpage-top">
        <Services />

        {/* Industry-Specific Services */}
        <section className="section-padding bg-navy-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
                Industry Solutions
              </h2>
              <p className="text-lg text-navy-600 max-w-2xl mx-auto">
                Specialized packages built for specific industries we know inside and out.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Link
                href="/services/fishing-charters"
                className="bg-white rounded-2xl p-8 shadow-ios hover:shadow-ios-lg transition-shadow block group"
              >
                <h3 className="text-xl font-bold text-navy-900 mb-2 flex items-center gap-2">
                  Fishing Charter Websites
                  <HiArrowRight className="w-5 h-5 text-navy-400 group-hover:text-navy-900 transition-colors" />
                </h3>
                <p className="text-navy-600 text-sm leading-relaxed">
                  Booking-ready websites for Florida Keys charter captains. FareHarbor integration, local SEO, mobile-first design — built to fill your calendar.
                </p>
              </Link>
              <Link
                href="/services/vacation-rentals"
                className="bg-white rounded-2xl p-8 shadow-ios hover:shadow-ios-lg transition-shadow block group"
              >
                <h3 className="text-xl font-bold text-navy-900 mb-2 flex items-center gap-2">
                  Vacation Rental Websites
                  <HiArrowRight className="w-5 h-5 text-navy-400 group-hover:text-navy-900 transition-colors" />
                </h3>
                <p className="text-navy-600 text-sm leading-relaxed">
                  Modern websites for vacation rental managers. Lodgify/Guesty integration, legacy platform migration, direct booking SEO — stop losing guests to VRBO commissions.
                </p>
              </Link>
              <Link
                href="/services/snorkeling-tours"
                className="bg-white rounded-2xl p-8 shadow-ios hover:shadow-ios-lg transition-shadow block group"
              >
                <h3 className="text-xl font-bold text-navy-900 mb-2 flex items-center gap-2">
                  Snorkeling Tour Websites
                  <HiArrowRight className="w-5 h-5 text-navy-400 group-hover:text-navy-900 transition-colors" />
                </h3>
                <p className="text-navy-600 text-sm leading-relaxed">
                  Booking-ready websites for Florida Keys snorkeling tour operators. Local SEO for &ldquo;snorkeling Key Largo,&rdquo; underwater photo galleries, FareHarbor integration.
                </p>
              </Link>
              <Link
                href="/services/parasailing"
                className="bg-white rounded-2xl p-8 shadow-ios hover:shadow-ios-lg transition-shadow block group"
              >
                <h3 className="text-xl font-bold text-navy-900 mb-2 flex items-center gap-2">
                  Parasailing Websites
                  <HiArrowRight className="w-5 h-5 text-navy-400 group-hover:text-navy-900 transition-colors" />
                </h3>
                <p className="text-navy-600 text-sm leading-relaxed">
                  Booking-ready websites for Florida Keys parasailing operators. Real-time availability, weight/weather disclaimers, mobile-first booking — capture every summer flight.
                </p>
              </Link>
            </div>
          </div>
        </section>

        <PricingTiers />
      </div>
      <Footer />
    </main>
  );
}
