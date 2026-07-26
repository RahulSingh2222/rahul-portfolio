"use client";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-blue-500/20 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-4">

        {/* Logo */}
        <a
          href="#top"
          className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition"
        >
          Rahul Singh
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">

          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="hover:text-blue-400 transition duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}

        </ul>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-blue-400"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

      </div>

      {/* Mobile Navigation */}

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >

        <ul className="bg-[#0f172a] border-t border-blue-500/20 flex flex-col">

          {navLinks.map((item) => (

            <li key={item.name}>

              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block px-6 py-4 border-b border-blue-500/10 hover:bg-blue-500/10 transition"
              >
                {item.name}
              </a>

            </li>

          ))}

        </ul>

      </div>

    </nav>
  );
}