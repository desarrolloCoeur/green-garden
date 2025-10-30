

export default function Stats() {
  const stats = [
    { number: "10", label: "Años de Experiencia" },
    { number: "800+", label: "Proyectos Completados" },
    { number: "800+", label: "Clientes Satisfechos" },
    { number: "20+", label: "Ciudades Atendidas" },
  ]

  return (
    <section className="py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20 text-center">
          <p className="text-xs uppercase tracking-[0.2em] mb-6 font-medium text-[#4c9d2a]">Nuestro Impacto</p>
          <h2 className="text-5xl lg:text-6xl font-bold max-w-4xl mx-auto leading-tight text-[#4c9d2a]">
            Green Garden Trabaja en Toda la Región
          </h2>
        </div>  
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mt-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className=" text-6xl lg:text-7xl font-bold mb-4 text-[#4c9d2a]">{stat.number}</div>
              <div className="text-base lg:text-lg text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
