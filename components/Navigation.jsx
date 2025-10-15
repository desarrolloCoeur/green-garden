"use client";

import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full bg-white/95 border-b border-gray-100 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="transition-all duration-300 hover:scale-105">
            <Image
              src="/assets/logo.png"
              alt="Green Garden"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="relative text-gray-700 hover:text-[#4CAF50] transition-colors font-medium group"
            >
              Nosotros
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#4CAF50] transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a
              href="#servicios"
              className="relative text-gray-700 hover:text-[#4CAF50] transition-colors font-medium group"
            >
              Servicios
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#4CAF50] transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a
              href="tel:6688155193"
              className="flex items-center gap-2 text-gray-700 hover:text-[#4CAF50] transition-colors font-medium group"
            >
              <Phone
                size={16}
                className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
              />
              (668) 815 5193
            </a>

            <a
              href="#contacto"
              className="px-6 py-2.5 bg-[#4CAF50] text-white rounded-full font-medium hover:bg-[#45a049] transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Contacto
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[#4CAF50] transition-all duration-300 hover:scale-110"
            aria-label="Toggle menu"
          >
            <div
              className={`transition-transform duration-300 ${
                mobileMenuOpen ? "rotate-90" : ""
              }`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>

        {/* Mobile menu dropdown */}
        <div
          className={`md:hidden border-t border-gray-100 overflow-hidden transition-all duration-300 ${
            mobileMenuOpen
              ? "max-h-96 opacity-100 py-4"
              : "max-h-0 opacity-0 py-0"
          }`}
        >
          <div className="space-y-2">
            <a
              href="#servicios"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 text-gray-700 hover:text-[#4CAF50] hover:bg-gray-50 transition-all duration-200 font-medium rounded-sm hover:translate-x-1"
              style={{ animationDelay: "50ms" }}
            >
              Servicios
            </a>

            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 text-gray-700 hover:text-[#4CAF50] hover:bg-gray-50 transition-all duration-200 font-medium rounded-sm hover:translate-x-1"
              style={{ animationDelay: "100ms" }}
            >
              Nosotros
            </a>

            <a
              href="tel:6688155193"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-[#4CAF50] hover:bg-gray-50 transition-all duration-200 font-medium rounded-sm hover:translate-x-1 group"
              style={{ animationDelay: "150ms" }}
            >
              <Phone
                size={16}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              (668) 815 5193
            </a>

            <div className="px-4 pt-2">
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center px-6 py-2.5 bg-[#4CAF50] text-white rounded-full font-medium hover:bg-[#45a049] transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ animationDelay: "200ms" }}
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
