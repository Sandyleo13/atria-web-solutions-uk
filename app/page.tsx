import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import SelectedWork from "./components/home/SelectedWork";
import Clients from "./components/home/Clients";
import WhyAtria from "./components/home/WhyAtria";
import AboutPreview from "./components/home/AboutPreview";
import FinalCTA from "./components/home/FinalCTA";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#f4f2ed]">

      <Hero />

      <Services />

      <SelectedWork />

      <Clients />

      <WhyAtria />

      <AboutPreview />

      <FinalCTA />

    </main>
  );
}