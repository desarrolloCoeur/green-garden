import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full flex justify-center bg-[#4c9d2a]">
      <div className=" py-10 text-white  w-[90%] align-center flex max-xl:hidden">
        <div className=" mr-10 w-[30%]">
          <h1 className="text-7xl uppercase mb-10">Nostros</h1>
          <Image
            className="w-full h-[700px] object-cover select-none overflow-hidden rounded-2xl"
            src="/assets/grass-about.jpg"
            alt="about-img"
            width={1000}
            height={1000}
          />
        </div>
        <div
          className="border-t-[1px] border-slate-200 w-[40%] 
        py-[5%] px-[5%]"
        >
          <h2 className="text-7xl uppercase">GREEN</h2>
          <h2 className="text-7xl uppercase text-right text-[#00642b]">GARDEN</h2>
          <p>
            Empresa dedicada a la distribución, planeación, diseño y ejecución
            de proyectos de jardinería y proyectos deportivos fundada en el año
            2002, buscando transformar paisajes, creando vida en espacios
            naturales, siempre con diseños creativos, innovadores y funcionales
            para nuestros clientes.
          </p>
          <div className="w-full flex justify-center">
            <Image
              className="align-center mt-10 w-full h-[320px] object-cover select-none overflow-hidden rounded-2xl"
              src="/assets/more-grass.jpg"
              alt="hero-img"
              width={400}
              height={400}
            />
          </div>
        </div>
        <div className="w-[30%] relative text-white">
          <h1 className="text-7xl uppercase text-right">somos</h1>
          <a href="/contact">
            <div
              className="flex text-black absolute top-[40%] translate-y-[-50%] right-0 text-xl  bg-white p-3
            hover:invert ease-in-out duration-200 rounded-2xl"
            >
              Contáctanos
            </div>
          </a>{" "}
          <div className="w-full absolute bottom-0 left-0">
            <p>
              Somos una empresa dedicada a la distribución, planeación, diseño y
              ejecución de proyectos de jardinería y proyectos deportivos con
              pasto sintético.
            </p>
          </div>
        </div>
      </div>
      <div className="hidden py-10 text-white  w-[90%] align-center max-xl:block mr">
        <div className=" w-full">
          <h1 className="text-5xl md:text-7xl uppercase mb-10">Nostros somos</h1>
          <h2 className="text-5xl md:text-7xl uppercase">GREEN</h2>
          <h2 className="text-5xl md:text-7xl uppercase mb-10 text-[#00642b] text-right">GARDEN</h2>
          <div className="w-full h-[300px]">
            <Image
              className="w-full h-full object-cover select-none overflow-hidden rounded-2xl"
              src="/assets/grass-about.jpg"
              alt="about-img"
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div
          className=" w-full 
        py-[5%]"
        >           
          <p>
            Empresa dedicada a la distribución, planeación, diseño y ejecución
            de proyectos de jardinería y proyectos deportivos fundada en el año
            2002, buscando transformar paisajes, creando vida en espacios
            naturales, siempre con diseños creativos, innovadores y funcionales
            para nuestros clientes.
          </p>
          <br />
          <br />
          <p>
            Somos una empresa dedicada a la distribución, planeación, diseño y
            ejecución de proyectos de jardinería y proyectos deportivos con
            pasto sintético.
          </p>
          <div className="w-full flex justify-center py-10">
            <div className="flex align-center  text-black  text-xl  bg-white p-3 rounded-2xl">
              Contáctanos
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
