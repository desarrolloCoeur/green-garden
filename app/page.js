import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Stats from "@/components/Stats";

import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Distributor from "@/components/Distributor";

import Advantages from "@/components/Advantages";
import WhastappButton from "@/components/WhatsappButton";
import Places from "@/components/Places";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Advantages />      
      <Stats />
      <Places/>
      <Testimonial />
      <Distributor />
      <Footer />
      <WhastappButton />
    </main>
  );
}
