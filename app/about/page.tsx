import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Navigation />
      <div className="flex-1 subpage-top">
        <About />
      </div>
      <Footer />
    </main>
  );
}
