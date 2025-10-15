import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import SportsProjects from "@/components/SportsProjects";
import ResidentialProjects from "@/components/ResidentialProjects";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Distributor from "@/components/Distributor";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />

      <Gallery />

      <Services />
      <Stats />
      {/* <Contact/> */}
      {/* <SportsProjects />
      <CommercialProjects />
      <ResidentialProjects />*/}
      <Testimonial /> 
      <Distributor />
      <Footer />
    </main>
  );
}
