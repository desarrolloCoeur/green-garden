import Image from "next/image"

export default function Hero() {
  return (
    <section id="inicio" className="relative h-[600px] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/assets/hero.jpg" alt="Green Garden Background" fill className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Main text */}
        <h1 className="text-4xl lg:text-6xl font-light text-white leading-tight tracking-wide text-left mt-10">
          Convertimos tu entorno
          <br />
          en un paisaje <br className="display md:hidden"/><span className=" px-2 rounded-2xl font-medium bg-[#48b135]">lleno de vida.</span>
        </h1>

        <div className="mt-6 h-2 rounded-2xl w-32 bg-[#48b135]"></div>
      </div>
    </section>
  )
}
