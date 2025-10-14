export default function SportsProjects() {
  const featuredProjects = [
    {
      title: "Club Cañeros de Los Mochis",
      location: "Los Mochis, Sinaloa",
      description: "Instalación profesional de campo de béisbol con pasto sintético de alta calidad.",
      image: "/sports-field-synthetic-turf-soccer.jpg",
    },
    {
      title: "Estadio Gilberto Varela",
      location: "San Ignacio Rio Muerto, Sonora",
      description: "Campo de fútbol profesional con sistema de drenaje avanzado.",
      image: "/sports-field-synthetic-turf-soccer.jpg",
    },
    {
      title: "Parque Valle Verde",
      location: "Cd. Obregón, Sonora",
      description: "Cancha de fútbol 7 para uso comunitario y recreativo.",
      image: "/sports-field-synthetic-turf-soccer.jpg",
    },
  ]

  const allProjects = [
    "Cancha Fútbol Rápido Parque Hernando Villafañe - Guasave, Sinaloa",
    "Cancha Fútbol Rápido Parque El Manglito - La Paz, Baja California Sur",
    "Cancha Fútbol 7 y Pádel - Cd. Guzmán, Jalisco",
    "Campos Béisbol Infantil Deportiva Vaqueritos - Agua Prieta, Sonora",
    "Cancha de Fútbol 7 Parque Mochicahui - Los Mochis, Sinaloa",
  ]

  const sports = ["Fútbol", "Béisbol", "Pádel", "Fútbol Américano"]

  return (
    <section id="deportivos" className="py-32 lg:py-40" style={{ backgroundColor: "#0a3d2c" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <p className="text-xs uppercase tracking-[0.2em] mb-6 font-medium" style={{ color: "#7a9b8e" }}>
            Nuestro Trabajo
          </p>
          <h2 className="font-serif text-5xl lg:text-6xl font-bold text-white mb-8">
            Descubre Nuestros Proyectos Deportivos
          </h2>
          <div className="flex flex-wrap gap-3">
            {sports.map((sport, index) => (
              <span
                key={index}
                className="px-4 py-2 text-sm font-medium tracking-wide border border-white/30 text-white hover:bg-white hover:text-[#0a3d2c] transition-all duration-300"
              >
                {sport}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {featuredProjects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-[4/5] bg-gray-800">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-8 flex flex-col justify-end">
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/80 text-sm mb-3">{project.description}</p>
                  <p className="text-white/60 text-xs uppercase tracking-wider">{project.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-16">
          <h3 className="font-serif text-3xl font-bold text-white mb-12">Proyectos Adicionales</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {allProjects.map((project, index) => (
              <div key={index} className="flex items-start gap-4 text-white/80 hover:text-white transition-colors">
                <span className="text-sm font-medium text-white/40 mt-1">{String(index + 1).padStart(2, "0")}</span>
                <p className="leading-relaxed">{project}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
