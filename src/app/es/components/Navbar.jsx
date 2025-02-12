"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";

const navLinks = [
  { title: "Sobre mí", path: "#about" },
  { title: "Proyectos", path: "#projects" },
  { title: "Contacto", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname(); // Detecta la ruta actual

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed mx-auto top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolling ? "bg-[#121212] shadow-lg" : "bg-[#121212]"
      }`}
    >
      <div className="flex container px-4 lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        {/* Enlace de Inicio */}
        <Link href="/" className="text-2xl md:text-2xl text-white font-semibold">
          Inicio
        </Link>

        {/* Menú móvil */}
        <div className="mobile-menu block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
          >
            {navbarOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        {/* Menú de escritorio */}
        <div className="hidden md:block md:w-auto">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {navbarOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#121212] shadow-lg">
          <ul className="flex flex-col py-4 items-center">
            {navLinks.map((link, index) => (
              <li key={index}>
                <button onClick={() => setNavbarOpen(false)}>
                  <NavLink href={link.path} title={link.title} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
