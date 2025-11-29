import React, { useState } from "react";
import { navLinks } from "../data";
import { FiMenu, FiX } from "react-icons/fi";   

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-100 px-6 py-4 fixed w-full top-0 shadow-lg z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto text-black">

        {/* Logo */}
        <h1 className="text-2xl font-bold ">VASUKI T</h1>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className="hover:text-blue-400 duration-300 text-lg font-medium"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Button*/}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-gray-800 text-white
          flex flex-col gap-6 py-6 text-center text-lg font-medium transition-all duration-300
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        {navLinks.map((item) => (
          <a
            key={item.id}
            href={item.link}
            onClick={() => setOpen(false)} 
            className="hover:text-blue-400 duration-300"
          >
            {item.title}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
