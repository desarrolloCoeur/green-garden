import Contact from "./Contact"
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <section id="footer" className="relative py-22 lg:py-26 overflow-hidden" style={{ backgroundColor: "#4c9d2a" }}>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <h2 className=" text-[20vw] lg:text-[15vw] font-bold text-white/5 whitespace-nowrap">Green Garden</h2>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.2em] mb-6 font-medium text-white">Contáctanos</p>
          <h2 className=" text-5xl lg:text-6xl font-bold text-white mb-8">Creemos Espacios Verdes Juntos</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">Para personas y el planeta</p>
        </div>

        <Contact />

        <div className="grid md:grid-cols-3 gap-12 mb-20 max-w-5xl mx-auto">
          <a
            href="https://maps.app.goo.gl/z44EZ9fdrsp5aD8n8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center group cursor-pointer transition-all duration-300 hover:scale-105"
          >
            <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300 relative">
              <MapPin className="w-6 h-6 text-white group-hover:text-[#4c9d2a] transition-colors duration-300" />             
            </div>
            <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-white/90 transition-colors">
              Dirección
            </h3>
            <p className="text-white/70 leading-relaxed text-sm group-hover:text-white transition-colors">
              Blvd. Canuto Ibarra, Col. Francisco Villa,
              <br />
              Local 7, Plaza Máxima, C.P. 81278,
              <br />
              Los Mochis, Sinaloa; México
            </p>
          </a>

          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">Teléfonos</h3>
            <p className="text-white/70 leading-relaxed">
              (668) 815 5193
              <br />
              (668) 168 6000
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-3">Email</h3>
            <p className="text-white/70 leading-relaxed break-all">greengardenlm@gmail.com</p>
          </div>
        </div>

        <div className="text-center border-t border-white/10 pt-16">
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://instagram.com/greengardenmex"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#0a3d2c] transition-all duration-300 text-white"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com/greengarden"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#0a3d2c] transition-all duration-300 text-white"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
          <div className="space-y-2">
            <p className="text-white/70">@greengardenmex</p>
            <p className="text-white font-semibold">Green Garden</p>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-white/10">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Green Garden. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </section>
  )
}
