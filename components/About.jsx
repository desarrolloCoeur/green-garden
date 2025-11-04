import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="w-full bg-[#f8f6f3]">
      <div className="max-w-7xl mx-auto px-8 py-24">
        {/* Section header */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
            Somos <br className="md:hidden" />
            <span className="font-bold text-[#4c9d2a]">Green Garden</span>
          </h2>
          <div className="w-24 h-0.5 bg-[#4c9d2a]"></div>
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left column - Text content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-md uppercase tracking-widest text-[#4c9d2a] font-black mb-4">
                Nosotros
              </h3>
              <p className="text-lg leading-relaxed text-black/80">
                Empresa dedicada a la distribución, planeación, diseño y
                ejecución de proyectos de jardinería y proyectos deportivos
                fundada en el año 2015, buscando transformar paisajes, creando
                vida en espacios naturales, siempre con diseños creativos,
                innovadores y funcionales para nuestros clientes.
              </p>
            </div>

            {/* Image 1 */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                src="/assets/about/1.jpg"
                alt="Green Garden Project"
                width={600}
                height={450}
              />
            </div>
          </div>

          {/* Right column - Image and mission */}
          <div className="space-y-8">
            {/* Image 2 */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                src="/assets/about/2.jpg"
                alt="Green Garden Installation"
                width={600}
                height={450}
              />
            </div>

            <div>
              <h3 className="text-md uppercase tracking-widest text-[#4c9d2a] font-black mb-4">
                Nuestra Misión
              </h3>
              <p className="text-lg leading-relaxed text-black/80 mb-8">
                Crear espacios verdes con valor, promover la cultura de la
                conservación de las áreas verdes y del uso inteligente del agua.
              </p>

              <a
                href="#contact"
                className="inline-block rounded-2xl bg-[#4c9d2a] text-white px-8 py-4 text-sm uppercase tracking-wider hover:scale-110 duration-300"
              >
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
