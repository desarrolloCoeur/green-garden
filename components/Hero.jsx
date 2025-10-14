import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero.jpg"
          alt="Green Garden Background"
          fill
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 text-center">
        <Image
          src={"/assets/logo.png"}
          alt="logo green garden hero"
          width={1000}
          height={1000}
          className="w-[80vw] md:w-[50vw]"
        />
      </div>
    </section>
  );
}
