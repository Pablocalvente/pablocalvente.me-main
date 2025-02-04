"use client";
import Link from "next/link";
import React, { useState } from "react";
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
  const pathname = usePathname(); // Detecta la ruta actual

  // Define la ruta a la que debe ir el botón de Inicio según el idioma actual
  const homePath = "/";

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] !bg-opacity-100 shadow-lg">
      <div className="flex container px-4 lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        {/* Enlace de Inicio */}
        <Link href={homePath} className="text-2xl md:text-2xl text-white font-semibold">
          Inicio
        </Link>

        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {navbarOpen ? (
        <ul className="flex flex-col py-4 items-center">
          {navLinks.map((link, index) => (
            <li key={index}>
              <button onClick={() => setNavbarOpen(false)}>
                <NavLink href={link.path} title={link.title} />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </nav>
  );
};

export default Navbar;
