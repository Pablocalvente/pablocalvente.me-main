"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
// Importa el componente
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0C0E12] text-white">
      {/* Fondo con forma geométrica */}
      <div className="absolute inset-0">
        <svg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            fill="#161821"
            points="0,0 100,0 100,50 0,100"
            className="opacity-70"
          />
        </svg>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto py-16 px-6 gap-12">
        
        {/* Foto de perfil - Ajuste del diseño */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center w-full md:w-1/3"
        >
          <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full border-4 border-[#18BBB5] shadow-lg flex items-center justify-center">
            
            {/* Opción 1: Imagen local en `public/images/` */}
            <Image
            src="https://pablocalvente.es/images/profilephoto.png"
            alt="Mi foto de perfil"
            width={250}
            height={250}
            className="object-cover rounded-full"
            unoptimized={true} // 🔹 Desactiva la optimización de Next.js para evitar error 500
          />


            {/* Opción 2: Imagen externa con `unoptimized` */}
            {/* 
            <Image
              src="https://pablocalvente.es/images/profilephoto.png"
              alt="Mi foto de perfil"
              width={250}
              height={250}
              className="object-cover rounded-full"
              unoptimized={true}
            />
            */}

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
            {/* Texto estático + animado */}
            <span className="text-white mr-2">Hola, soy</span>
            {/* Aquí se hace el ciclo de textos */}
            <TypeAnimation
              sequence={[
                "Pablo Calvente",        // Primero
                2000,                    // Espera 2s
                "Analista de datos",     // Segundo
                2000,
                "Consultor BI",          // Tercero
                2000,
                "Certificado Microsoft", // Cuarto
                2000,
              ]}
              speed={60}          // Velocidad de tipeo
              repeat={Infinity}   // Repetir para siempre
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
