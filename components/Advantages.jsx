"use client"

import Image from "next/image"
import { DollarSign, PawPrint, Droplets, Sun, CloudRain, Sprout, Calendar, Sparkles } from "lucide-react"

export default function Advantages() {
  const advantages = [
    {
      icon: DollarSign,
      text: "Bajo costo de mantenimiento",
    },
    {
      icon: PawPrint,
      text: "Pet friendly",
    },
    {
      icon: Droplets,
      text: "No requiere sistema de riego",
    },
    {
      icon: Sun,
      text: "No requiere luz solar",
    },
    {
      icon: CloudRain,
      text: "Resistente a climas adversos",
    },
    {
      icon: Sprout,
      text: "No requiere pesticidas ni fertilizantes",
    },
    {
      icon: Calendar,
      text: "Aspecto siempre verde los 365 días del año",
    },
    {
      icon: Sparkles,
      text: "Aspecto muy similar al pasto natural",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-[#f8f6f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Title */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Ventajas del Pasto <span className="text-[#7CB342]">Sintético</span>
              </h2>
              <div className="w-16 h-1 bg-[#7CB342] mt-4" />
            </div>

            {/* Advantages List */}
            <div className="space-y-4">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 group transition-transform duration-300 hover:translate-x-2"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#7CB342]/10 flex items-center justify-center group-hover:bg-[#7CB342] transition-colors duration-300">
                      <Icon className="w-5 h-5 text-[#7CB342] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed pt-1.5">{advantage.text}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative h-[400px] md:h-[600px] rounded-sm overflow-hidden group">
            <Image
              src="/assets/advantages.jpg"
              alt="Pasto sintético de alta calidad"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </section>
  )
}
