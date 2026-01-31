import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <Services showViewMore />
      <Portfolio showViewMore />
      <About showViewMore />
      <Contact />
      <Footer />
    </main>
  );
}
