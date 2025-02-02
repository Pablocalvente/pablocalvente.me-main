"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import githubIcon from "../../../../public/github-icon.svg";
import linkedinIcon from "../../../../public/linkedin-icon.svg";



const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Mensaje enviado.");
      setEmailSubmitted(true);
    }
  };

  return (
    /**
     * Sección de contacto:
     * - Fondo oscuro #0C0E12 y texto blanco.
     * - Grid de 2 columnas en desktop, 1 en mobile.
     * - Relleno vertical y horizontal.
     */
    <section
      id="contact"
      className="relative bg-[#0C0E12] text-white py-16 px-6 md:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Columna izquierda: texto / redes */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            ¡Conectemos!
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-6 max-w-xl leading-relaxed">
            Los datos cuentan historias, y me encanta descifrarlas. 
            Si tienes una idea, un proyecto o simplemente quieres 
            compartir perspectivas, estaré encantado de conectar.
            ¡Hablemos!
          </p>

          {/* Redes sociales */}
          <div className="flex flex-row items-center gap-4">
            <Link
              href="https://www.linkedin.com/in/pablo-calvente//"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <Image src={LinkedinIcon} alt="Icono de Linkedin" />
            </Link>
            {/* Si tuvieras GitHub u otra red, podrías añadir más iconos aquí */}
          </div>
        </div>

        {/* Columna derecha: Formulario */}
        <div>
          {emailSubmitted ? (
            <p className="text-green-500 text-sm mt-2">
              ¡Correo enviado con éxito!
            </p>
          ) : (
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-medium"
                >
                  Tu correo
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="w-full rounded-lg bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm p-2.5 focus:outline-none focus:ring-2 focus:ring-[#645CFF]"
                  placeholder="ejemplo@google.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block mb-1 text-sm font-medium"
                >
                  Asunto
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  className="w-full rounded-lg bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm p-2.5 focus:outline-none focus:ring-2 focus:ring-[#645CFF]"
                  placeholder="¡Te escribo para saludar!"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-1 text-sm font-medium"
                >
                  Mensaje
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="w-full rounded-lg bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm p-2.5 focus:outline-none focus:ring-2 focus:ring-[#645CFF]"
                  placeholder="Conversemos sobre..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#645CFF] hover:bg-[#5545d6] text-white font-medium py-2.5 px-5 rounded-lg transition-colors duration-300"
              >
                Enviar mensaje
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
