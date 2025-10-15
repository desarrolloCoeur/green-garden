"use client"

import { Facebook, Instagram } from "lucide-react"
import Image from "next/image"

export default function Navigation() {
  const navLinks = [
    { href: "#about", label: "Nosotros" },
    { href: "#servicios", label: "Servicios" },    
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <nav className=" top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 py-3">
        {/* Desktop: horizontal layout */}
        <div className="hidden lg:flex justify-between items-center">
          <a href="#" className="flex items-center transition-opacity hover:opacity-80">
            <Image src="/assets/logo.png" alt="Green Garden" width={400} height={270} className="h-18 w-auto" />
          </a>

          <div className="flex items-center gap-12 flex-1 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-gray-700 hover:text-[#4CAF50] transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4CAF50] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://facebook.com/greengardenmex"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#4CAF50] transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook size={20} strokeWidth={1.5} />
            </a>
            <a
              href="https://instagram.com/greengardenmex"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#4CAF50] transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Mobile: vertical layout on left */}
        <div className="lg:hidden">
          {/* Logo at top */}
          <div className="mb-8">
            <a href="#" className="inline-block transition-opacity hover:opacity-80">
              <Image src="/assets/logo.png" alt="Green Garden" width={180} height={60} className="h-14 w-auto" />
            </a>
          </div>

          {/* Navigation links and social icons in two columns */}
          <div className="flex justify-between items-start">
            {/* Left: Navigation links */}
            <div className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-gray-800 hover:text-[#4CAF50] transition-all duration-300 relative group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="relative">
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4CAF50] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              ))}
            </div>

            {/* Right: Social icons */}
            <div className="flex flex-col gap-6 pt-1">
              <a
                href="https://facebook.com/greengardenmex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#4CAF50] transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={22} strokeWidth={1.5} />
              </a>
              <a
                href="https://instagram.com/greengardenmex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#4CAF50] transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={22} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
