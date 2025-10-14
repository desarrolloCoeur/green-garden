export default function ResidentialProjects() {
  const projects = [
    "Residencial El Pedregal - Los Mochis, Sinaloa",
    "Residencial Portal de Hierro - Los Mochis, Sinaloa",
    "Residencial La Primavera - Culiacán, Sinaloa",
    "Residencial Monterosa - Hermosillo, Sonora",
    "Residencial Alcázar del Country - Los Mochis, Sinaloa",
    "Residencial Las Villas - Los Mochis, Sinaloa",
    "Residencial Las Haciendas - Los Mochis, Sinaloa",
  ]

  return (
    <section id="residenciales" className="py-32 lg:py-40" style={{ backgroundColor: "#f8f6f3" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <p className="text-xs uppercase tracking-[0.2em] mb-6 font-medium" style={{ color: "#7a9b8e" }}>
            Proyectos Residenciales
          </p>
          <h2 className="font-serif text-5xl lg:text-6xl font-bold" style={{ color: "#0a3d2c" }}>
            Espacios Verdes para el Hogar
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-8 bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#0a3d2c]"
            >
              <div className="flex items-start gap-4">
                <span className="text-sm font-medium text-[#7a9b8e] mt-1">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-gray-700 leading-relaxed">{project}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
