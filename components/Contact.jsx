"use client"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",    
    estado: "",
    ciudad: "",
    email: "",
    telefono: "",
    m2: "",
    comentario: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Handle form submission here
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" className="py-20 lg:py-32">
      <div className="w-full mx-auto px-6 lg:px-12">        

        <form onSubmit={handleSubmit} className="space-y-12 text-white">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="nombre" className="block text-xs uppercase tracking-wider font-medium text-white mb-3">
                NOMBRE <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full pb-2 border-0 border-b border-gray-300 focus:border-[#a6ff7d] focus:outline-none transition-colors bg-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="apellidos"
                className="block text-xs uppercase tracking-wider font-medium text-white mb-3"
              >
                APELLIDOS <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="apellidos"
                name="apellidos"
                value={formData.apellidos}
                onChange={handleChange}
                required
                className="w-full pb-2 border-0 border-b border-gray-300 focus:border-[#a6ff7d] focus:outline-none transition-colors bg-transparent"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <label htmlFor="estado" className="block text-xs uppercase tracking-wider font-medium text-white mb-3">
                ESTADO <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="estado"
                name="estado"
                value={formData.estado}
                onChange={handleChange}
                required
                className="w-full pb-2 border-0 border-b border-gray-300 focus:border-[#a6ff7d] focus:outline-none transition-colors bg-transparent"
              />
            </div>

            <div>
              <label htmlFor="ciudad" className="block text-xs uppercase tracking-wider font-medium text-white mb-3">
                CIUDAD
              </label>
              <input
                type="text"
                id="ciudad"
                name="ciudad"
                value={formData.ciudad}
                onChange={handleChange}
                className="w-full pb-2 border-0 border-b border-gray-300 focus:border-[#a6ff7d] focus:outline-none transition-colors bg-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-wider font-medium text-white mb-3">
                EMAIL <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pb-2 border-0 border-b border-gray-300 focus:border-[#a6ff7d] focus:outline-none transition-colors bg-transparent"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label
                htmlFor="telefono"
                className="block text-xs uppercase tracking-wider font-medium text-white mb-3"
              >
                TELÉFONO <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
                className="w-full pb-2 border-0 border-b border-gray-300 focus:border-[#a6ff7d] focus:outline-none transition-colors bg-transparent"
              />
            </div>

            <div>
              <label htmlFor="m2" className="block text-xs uppercase tracking-wider font-medium text-white mb-3">
                m² DE TU ESPACIO
              </label>
              <input
                type="text"
                id="m2"
                name="m2"
                value={formData.m2}
                onChange={handleChange}
                className="w-full pb-2 border-0 border-b border-gray-300 focus:border-[#a6ff7d] focus:outline-none transition-colors bg-transparent"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="comentario"
              className="block text-xs uppercase tracking-wider font-medium text-white mb-3"
            >
              COMENTARIO <span className="text-red-500">*</span>
            </label>
            <textarea
              id="comentario"
              name="comentario"
              value={formData.comentario}
              onChange={handleChange}
              required
              rows={4}
              className="w-full pb-2 border-0 border-b border-gray-300 focus:border-[#a6ff7d] focus:outline-none transition-colors resize-none bg-transparent"
            />
          </div>

          <div className="pt-8">
            <button
              type="submit"
              className="rounded-2xl inline-block bg-white text-black px-8 py-4 text-sm uppercase tracking-wider hover:bg-[#4c9d2a] transition-colors duration-300"              
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
