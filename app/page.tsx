import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import SelectedWork from "./components/home/SelectedWork";
import Clients from "./components/home/Clients";
import WhyAtria from "./components/home/WhyAtria";
import AboutPreview from "./components/home/AboutPreview";
import FinalCTA from "./components/home/FinalCTA";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#f4f2ed]">
      <Navbar />

      <Hero />

      <Services />

      <SelectedWork />

      <Clients />

      <WhyAtria />

      <AboutPreview />

      <FinalCTA />

      <Footer />
    </main>
  );
}