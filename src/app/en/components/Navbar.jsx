"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  { title: "Sobre mí", path: "#about" },
  { title: "Proyectos", path: "#projects" },
  { title: "Contacto", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-[#121212]/95 backdrop-blur-sm shadow-xl" : "bg-[#121212]"
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-xl font-bold text-white hover:text-gray-300 transition-colors duration-200"
            >
              Inicio
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.title} href={link.path} title={link.title} />
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="p-2 rounded text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-200"
            >
              {navbarOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {navbarOpen && (
        <div className="md:hidden bg-[#121212] border-t border-gray-800/50 px-6 pb-4">
          <ul className="flex flex-col space-y-3 mt-2">
            {navLinks.map((link) => (
              <li key={link.title}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  onClick={() => setNavbarOpen(false)}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;