import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import PricingTiers from "@/components/PricingTiers";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <div className="flex-1 subpage-top">
        <Services />
        <PricingTiers />
      </div>
      <Footer />
    </main>
  );
}
