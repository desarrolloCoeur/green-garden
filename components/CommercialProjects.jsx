export default function CommercialProjects() {
  const projects = [
    {
      name: "Agencia Ford",
      location: "Los Mochis, Sinaloa",
      category: "Automotriz",
    },
    {
      name: "Agencia VW",
      location: "Los Mochis, Sinaloa",
      category: "Automotriz",
    },
    {
      name: "Agencia Nissan",
      location: "Los Mochis, Sinaloa",
      category: "Automotriz",
    },
    {
      name: "Plaza Paseo Los Mochis",
      location: "Los Mochis, Sinaloa",
      category: "Comercial",
    },
    {
      name: "Country Club de Los Mochis",
      location: "Los Mochis, Sinaloa",
      category: "Recreativo",
    },
    {
      name: "Grupo Pilarica",
      location: "Los Mochis, Sinaloa",
      category: "Corporativo",
    },
    {
      name: "Instituto Piaget",
      location: "Los Mochis, Sinaloa",
      category: "Educativo",
    },
  ]

  return (
    <section id="comerciales" className="py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <p className="text-xs uppercase tracking-[0.2em] mb-6 font-medium" style={{ color: "#7a9b8e" }}>
            Proyectos Comerciales
          </p>
          <h2 className="font-serif text-5xl lg:text-6xl font-bold" style={{ color: "#0a3d2c" }}>
            Soluciones para Empresas
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-8 border border-gray-200 hover:border-[#0a3d2c] transition-all duration-300 hover:shadow-lg"
            >
              <div className="mb-4">
                <span className="text-xs uppercase tracking-[0.2em] font-medium" style={{ color: "#7a9b8e" }}>
                  {project.category}
                </span>
              </div>
              <h3
                className="font-serif text-2xl font-bold mb-2 group-hover:text-[#7a9b8e] transition-colors"
                style={{ color: "#0a3d2c" }}
              >
                {project.name}
              </h3>
              <p className="text-gray-600">{project.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
