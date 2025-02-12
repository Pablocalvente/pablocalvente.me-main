"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Habilidades de Desarrollo",
    id: "skills",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Power BI</li>
        <li>Excel avanzado</li>
        <li>Modelado de datos</li>
        <li>SQL</li>
        <li>Visualización de datos</li>
        <li>ETL y Transformación de Datos</li>
        <li>Python para Análisis de Datos</li>
      </ul>
    ),
  },
  {
    title: "Experiencia",
    id: "education",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Analista de Datos en Retail - FIELD AGENT España</li>
        <li>Científico de Datos en Salud - Fundación Síndrome de Dravet</li>
      </ul>
    ),
  },
  {
    title: "Certificaciones",
    id: "certifications",
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <a
            href="https://learn.microsoft.com/es-es/users/pablocalventegmez-8451/credentials/63169f2a782d21cf?ref=https%3A%2F%2Fwww.linkedin.com%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block ml-2 text-[#645CFF] hover:underline"
          >
            Microsoft Certified: Power BI Data Analyst Associate
          </a>
        </li>
        <li>
          <a
            href="https://www.udemy.com/certificate/UC-231cb9b5-ee50-446b-ab05-8a22f0eec226/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block ml-2 text-[#645CFF] hover:underline"
          >
            Data Storytelling and Data Visualization Mastery
          </a>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section
      className="relative overflow-hidden bg-[#0C0E12] text-white py-16 px-4 md:px-8"
      id="about"
    >
      {/* Contenedor principal */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-12">
          Sobre mí
        </h2>

        {/* Sección en dos columnas */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Imagen con opción externa y `unoptimized` activado */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] rounded-lg border-4 border-[#645CFF] shadow-lg overflow-hidden flex items-center justify-center">
              
              <Image
                src="https://pablocalvente.es/images/about-image.png"
                alt="Imagen sobre mí"
                width={500}
                height={500}
                className="object-cover w-full h-full"
                unoptimized={true} // 🔹 Evita error 500 en Next.js
              />
            </div>
          </div>

          {/* Texto y pestañas */}
          <div className="md:w-1/2">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
              Soy Analista de Datos y Consultor BI con certificación PL-300,
              especializado en Power BI, Excel y modelado de datos. Me
              enfoco en transformar datos en información valiosa para generar
              ventajas competitivas en las empresas. Trabajo en investigación 
              de mercado en el sector retail y cuento con amplia experiencia 
              en el campo de la salud.
            </p>

            {/* Botones de pestañas */}
            <div className="flex gap-4 mb-6">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                Habilidades
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                Experiencia
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
              >
                Certificaciones
              </TabButton>
            </div>

            {/* Contenido de la pestaña seleccionada */}
            <div className="text-gray-200 text-sm md:text-base">
              {TAB_DATA.find((t) => t.id === tab)?.content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
