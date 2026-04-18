// import React, { useState } from "react";
// import { navLinks } from "../data";
// import { FiMenu, FiX } from "react-icons/fi";   

// function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="bg-gray-100 px-6 py-4 fixed w-full top-0 shadow-lg z-50">
//       <div className="flex justify-between items-center max-w-6xl mx-auto text-black">

//         {/* Logo */}
//         <h1 className="text-2xl font-bold ">VASUKI T</h1>

//         {/* Desktop Navbar */}
//         <ul className="hidden md:flex gap-8">
//           {navLinks.map((item) => (
//             <li key={item.id}>
//               <a
//                 href={item.link}
//                 className="hover:text-blue-400 duration-300 text-lg font-medium"
//               >
//                 {item.title}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Hamburger Button*/}
//         <button
//           className="md:hidden text-3xl"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? <FiX /> : <FiMenu />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden absolute top-16 left-0 w-full bg-gray-800 text-white
//           flex flex-col gap-6 py-6 text-center text-lg font-medium transition-all duration-300
//           ${open ? "opacity-100 visible" : "opacity-0 invisible"}
//         `}
//       >
//         {navLinks.map((item) => (
//           <a
//             key={item.id}
//             href={item.link}
//             onClick={() => setOpen(false)} 
//             className="hover:text-blue-400 duration-300"
//           >
//             {item.title}
//           </a>
//         ))}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiTerminal } from "react-icons/fi";

const navLinks = [

   { id: 1, title: "Home", link: "#home" },
  { id: 2, title: "About", link: "#about" },
  { id: 3, title: "Skills", link: "#skills" },
  { id: 4, title: "Projects", link: "#projects" },

];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for glassmorphism transition
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-500 px-6 py-4 ${
        scrolled 
          ? " bg-[#111827] backdrop-blur-2xl   py-3" 
          : " bg-[#111827] backdrop-blur-md   py-5"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">

        {/* Branding with Full Stack Developer Accents */}
        <div className="flex items-center gap-2">
          <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
            <FiTerminal size={20} />
          </div>
          <h1 className="text-xl font-black tracking-tighter text-zinc-100 uppercase">
            VASUKI <span className="text-indigo-400">T</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8">
            {navLinks.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="relative text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-indigo-300 transition-colors group font-mono"
                >
                  <span className="text-indigo-500/50 mr-1 opacity-0 group-hover:opacity-100 transition-opacity">./</span>
                  {item.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
          
          <a 
            href="#contact" 
            className="px-6 py-2 bg-indigo-500 text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-indigo-400 transition-all shadow-[0_12px_24px_rgba(79,70,229,0.2)] active:scale-95"
          >
           Hire Me
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-3xl text-zinc-100 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Modern Mobile Menu Overlay with Glassmorphism */}
      <div
        className={`fixed inset-0 bg-zinc-950/90 backdrop-blur-3xl z-40 flex flex-col items-center justify-center gap-12 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <button 
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 text-4xl text-zinc-100"
        >
          <FiX />
        </button>
        
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={item.link}
              onClick={() => setOpen(false)} 
              className="text-5xl font-black tracking-tighter text-zinc-100 hover:text-indigo-400 transition-colors"
            >
              {item.title}
            </a>
          ))}
        </div>
        
        <div className="mt-8">
           <a 
              href="#contact" 
              onClick={() => setOpen(false)}
              className="px-10 py-4 bg-indigo-500 text-white font-black uppercase tracking-widest rounded-2xl shadow-2xl"
            >
              Start a Project
            </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;