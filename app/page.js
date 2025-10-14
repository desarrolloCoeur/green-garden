import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import Stats from "@/components/Stats"
import SportsProjects from "@/components/SportsProjects"
import CommercialProjects from "@/components/CommercialProjects"
import ResidentialProjects from "@/components/ResidentialProjects"
import Testimonial from "@/components/Testimonial"
import Footer from "@/components/Footer"
import Navigation from "@/components/Navigation"


export default function Page() {
  return (
    <main className="min-h-screen">
      <Navigation/>
      <Hero />
      <About />
      <Services />
      <Stats />
      {/* <SportsProjects />
      <CommercialProjects />
      <ResidentialProjects />
      <Testimonial /> */}
      <Footer />
    </main>
  )
}
