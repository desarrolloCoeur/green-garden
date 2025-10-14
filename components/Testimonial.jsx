export default function Testimonial() {
  return (
    <section className="py-32 lg:py-40 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center">
          <svg
            className="w-16 h-16 mb-8 opacity-20"
            fill="currentColor"
            viewBox="0 0 24 24"
            style={{ color: "#0a3d2c" }}
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>

          <blockquote className="mb-8">
            <p className="font-serif text-2xl lg:text-3xl leading-relaxed text-gray-800 mb-8">
              "Green Garden ha transformado nuestros espacios exteriores de manera excepcional. Su profesionalismo,
              atención al detalle y compromiso con la calidad son incomparables. Trabajamos muy de cerca con el equipo y
              los consideramos una organización mentora."
            </p>
          </blockquote>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
              <img src="/placeholder.svg?height=64&width=64" alt="Cliente" className="w-full h-full object-cover" />
            </div>
            <div className="text-left">
              <p className="font-semibold text-lg" style={{ color: "#0a3d2c" }}>
                María González
              </p>
              <p className="text-gray-600">Directora, Country Club Los Mochis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
