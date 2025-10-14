"use client"

import { Facebook, Instagram } from "lucide-react"

export default function Navigation() {
  const navLinks = [
    { href: "#about", label: "Nosotros" },
    { href: "#servicios", label: "Servicios" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <nav className=" w-full">
      <div className="absolute w-full mx-auto px-6 lg:px-16 py-8 z-50">
        {/* Desktop: horizontal layout */}
        <div className=" hidden lg:flex justify-between items-start">
          <div className="flex items-center gap-16 flex-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg font-normal text-white hover:text-[#4CAF50] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons - Desktop */}
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com/greengardenmex"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#4CAF50] transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={22} />
            </a>
            <a
              href="https://instagram.com/greengardenmex"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#4CAF50] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>
          </div>
        </div>

        {/* Mobile: vertical layout on left */}
        <div className="lg:hidden flex justify-between">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-normal text-white hover:text-[#4CAF50] transition-colors uppercase tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons - Mobile */}
          <div className="flex flex-col gap-4">
            <a
              href="https://facebook.com/greengardenmex"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#4CAF50] transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com/greengardenmex"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#4CAF50] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
