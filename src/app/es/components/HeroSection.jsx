"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0C0E12] text-white">
      <div className="absolute inset-0">
        <svg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon fill="#161821" points="0,0 100,0 100,50 0,100" className="opacity-70" />
        </svg>
      </div>

      {/* Contenedor principal */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto py-16 px-6 gap-12">
        
        {/* Foto de perfil corregida */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center w-full md:w-1/3"
        >
          <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full border-4 border-[#18BBB5] overflow-hidden shadow-lg">
            <Image
              src="https://pablocalvente.es/images/profilephoto.png"
              alt="Mi foto de perfil"
              layout="fill"  // 🔹 Ocupa todo el espacio del div
              objectFit="cover" // 🔹 Recorta la imagen correctamente
              className="rounded-full"
              unoptimized={true}
            />
          </div>
        </motion.div>

        {/* Texto y botones */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <h1 className="font-bold text-3xl md:text-5xl mb-4 leading-tight font-poppins">
            <span className="text-white mr-2">Hola, soy</span>
            <TypeAnimation
              sequence={[
                "Pablo Calvente",
                2000,
                "Analista de datos",
                2000,
                "Consultor BI",
                2000,
                "Certificado Microsoft",
                2000,
              ]}
              speed={60}
              repeat={Infinity}
              className="text-[#18BBB5]"
              style={{ display: "inline-block" }}
            />
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-xl mb-6 leading-relaxed">
            Impulso negocios con datos. Especialista en Power BI, análisis de datos y optimización de decisiones estratégicas. Convierte tu información en resultados reales.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contact"
              className="bg-[#18BBB5] hover:bg-[#139a95] text-white font-medium px-6 py-3 rounded-full transition-colors duration-300"
            >
              ¡Hablemos!
            </Link>
            <Link
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="border border-[#18BBB5] hover:border-[#139a95] text-white font-medium px-6 py-3 rounded-full transition-colors duration-300"
            >
              Descargar CV
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
