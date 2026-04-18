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


// import React, { useState, useEffect } from "react";
// import { FiMenu, FiX, FiTerminal } from "react-icons/fi";

// const navLinks = [

//    { id: 1, title: "Home", link: "#home" },
//   { id: 2, title: "About", link: "#about" },
//   { id: 3, title: "Skills", link: "#skills" },
//   { id: 4, title: "Projects", link: "#projects" },

// ];

// function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // Handle scroll effect for glassmorphism transition
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav 
//       className={`fixed w-full top-0 z-50 transition-all duration-500 px-6 py-4 ${
//         scrolled 
//           ? " bg-[#111827] backdrop-blur-2xl   py-3" 
//           : " bg-[#111827] backdrop-blur-md   py-5"
//       }`}
//     >
//       <div className="flex justify-between items-center max-w-7xl mx-auto">

//         {/* Branding with Full Stack Developer Accents */}
//         <div className="flex items-center gap-2">
//           <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
//             <FiTerminal size={20} />
//           </div>
//           <h1 className="text-xl font-black tracking-tighter text-zinc-100 uppercase">
//             VASUKI <span className="text-indigo-400">T</span>
//           </h1>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center gap-10">
//           <ul className="flex gap-8">
//             {navLinks.map((item) => (
//               <li key={item.id}>
//                 <a
//                   href={item.link}
//                   className="relative text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-indigo-300 transition-colors group font-mono"
//                 >
//                   <span className="text-indigo-500/50 mr-1 opacity-0 group-hover:opacity-100 transition-opacity">./</span>
//                   {item.title}
//                   <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
//                 </a>
//               </li>
//             ))}
//           </ul>
          
//           <a 
//             href="#contact" 
//             className="px-6 py-2 bg-indigo-500 text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-indigo-400 transition-all shadow-[0_12px_24px_rgba(79,70,229,0.2)] active:scale-95"
//           >
//            Hire Me
//           </a>
//         </div>

//         {/* Mobile Toggle Button */}
//         <button
//           className="md:hidden text-3xl text-zinc-100 focus:outline-none"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? <FiX /> : <FiMenu />}
//         </button>
//       </div>

//       {/* Modern Mobile Menu Overlay with Glassmorphism */}
//       <div
//         className={`fixed inset-0 bg-zinc-950/90 backdrop-blur-3xl z-40 flex flex-col items-center justify-center gap-12 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
//           open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
//         }`}
//       >
//         <button 
//           onClick={() => setOpen(false)}
//           className="absolute top-6 right-6 text-4xl text-zinc-100"
//         >
//           <FiX />
//         </button>
        
//         <div className="flex flex-col items-center gap-8">
//           {navLinks.map((item) => (
//             <a
//               key={item.id}
//               href={item.link}
//               onClick={() => setOpen(false)} 
//               className="text-5xl font-black tracking-tighter text-zinc-100 hover:text-indigo-400 transition-colors"
//             >
//               {item.title}
//             </a>
//           ))}
//         </div>
        
//         <div className="mt-8">
//            <a 
//               href="#contact" 
//               onClick={() => setOpen(false)}
//               className="px-10 py-4 bg-indigo-500 text-white font-black uppercase tracking-widest rounded-2xl shadow-2xl"
//             >
//               Start a Project
//             </a>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiTerminal } from "react-icons/fi";
import { HiArrowUpRight } from "react-icons/hi2";

const navLinks = [
  { id: 1, title: "Home", link: "#home" },
  { id: 2, title: "About", link: "#about" },
  { id: 3, title: "Skills", link: "#skills" },
  { id: 4, title: "Projects", link: "#projects" },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Nunito:wght@400;500;600;700;800&display=swap');

  .navbar-root {
    font-family: 'Outfit', sans-serif;
  }

  /* Logo */
  .nav-logo-box {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
  }

  .nav-logo-icon {
    width: 38px;
    height: 38px;
    background: rgba(99,102,241,0.12);
    border: 1px solid rgba(99,102,241,0.25);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #818cf8;
    flex-shrink: 0;
    transition: all 0.25s ease;
  }

  .nav-logo-box:hover .nav-logo-icon {
    background: rgba(99,102,241,0.22);
    box-shadow: 0 0 16px rgba(99,102,241,0.35);
  }

  .nav-logo-text {
    font-size: 1.1rem;
    font-weight: 900;
    letter-spacing: -0.02em;
    color: #f1f5f9;
    text-transform: uppercase;
  }

  .nav-logo-text span {
    color: #818cf8;
  }

  /* Desktop links */
  .nav-link {
    position: relative;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: #94a3b8;
    text-decoration: none;
    transition: color 0.2s ease;
    padding-bottom: 2px;
  }

  .nav-link::before {
    content: './';
    color: rgba(99,102,241,0.45);
    margin-right: 2px;
    opacity: 0;
    transition: opacity 0.2s ease;
    font-family: monospace;
  }

  .nav-link:hover {
    color: #c7d2fe;
  }

  .nav-link:hover::before {
    opacity: 1;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1.5px;
    background: linear-gradient(90deg, #818cf8, #6366f1);
    border-radius: 2px;
    transition: width 0.28s ease;
  }

  .nav-link:hover::after {
    width: 100%;
  }

  /* Hire Me button */
  .hire-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 9px 20px;
    background: #6366f1;
    color: #fff;
    font-size: 11px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    border-radius: 12px;
    text-decoration: none;
    transition: all 0.25s ease;
    border: 1px solid rgba(255,255,255,0.1);
    white-space: nowrap;
  }

  .hire-btn:hover {
    background: #4f46e5;
    box-shadow: 0 0 24px rgba(99,102,241,0.5), 0 4px 12px rgba(99,102,241,0.3);
    transform: translateY(-1px);
  }

  .hire-btn:active {
    transform: scale(0.97);
  }

  /* Hamburger */
  .hamburger {
    width: 40px;
    height: 40px;
    background: rgba(99,102,241,0.1);
    border: 1px solid rgba(99,102,241,0.2);
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    color: #c7d2fe;
    cursor: pointer;
    transition: all 0.2s ease;
    flex-shrink: 0;
  }

  .hamburger:hover {
    background: rgba(99,102,241,0.2);
    box-shadow: 0 0 12px rgba(99,102,241,0.3);
  }

  /* Mobile overlay */
  .mobile-overlay {
    position: fixed;
    inset: 0;
    background: rgba(9,11,17,0.97);
    backdrop-filter: blur(20px);
    z-index: 40;
    display: flex;
    flex-direction: column;
    transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1);
  }

  .mobile-overlay.open {
    opacity: 1;
    transform: translateY(0);
    pointer-events: all;
  }

  .mobile-overlay.closed {
    opacity: 0;
    transform: translateY(-12px);
    pointer-events: none;
  }

  /* Mobile header row inside overlay */
  .mobile-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px;
    border-bottom: 1px solid rgba(99,102,241,0.1);
    flex-shrink: 0;
  }

  /* Mobile nav links */
  .mobile-links {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 32px 24px;
    gap: 4px;
  }

  .mobile-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 20px;
    border-radius: 16px;
    text-decoration: none;
    color: #cbd5e1;
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    transition: all 0.22s ease;
    border: 1px solid transparent;
  }

  .mobile-link:hover {
    background: rgba(99,102,241,0.08);
    border-color: rgba(99,102,241,0.18);
    color: #c7d2fe;
    padding-left: 28px;
  }

  .mobile-link .link-num {
    font-size: 11px;
    font-weight: 700;
    color: rgba(99,102,241,0.45);
    font-family: monospace;
    letter-spacing: 0.08em;
  }

  .mobile-link .arrow-icon {
    width: 32px;
    height: 32px;
    background: rgba(99,102,241,0.1);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #818cf8;
    opacity: 0;
    transition: opacity 0.2s ease;
    flex-shrink: 0;
  }

  .mobile-link:hover .arrow-icon {
    opacity: 1;
  }

  /* Mobile footer */
  .mobile-footer {
    padding: 24px;
    border-top: 1px solid rgba(99,102,241,0.1);
    flex-shrink: 0;
  }

  .mobile-hire-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    padding: 16px;
    background: #6366f1;
    color: #fff;
    font-size: 13px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    border-radius: 16px;
    text-decoration: none;
    transition: all 0.25s ease;
    border: 1px solid rgba(255,255,255,0.12);
  }

  .mobile-hire-btn:hover {
    background: #4f46e5;
    box-shadow: 0 0 32px rgba(99,102,241,0.5);
  }

  /* Scrolled state */
  .navbar-scrolled {
    box-shadow: 0 1px 0 rgba(99,102,241,0.1), 0 8px 32px rgba(9,11,17,0.4);
  }

  /* Divider dot */
  .nav-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(99,102,241,0.35);
    flex-shrink: 0;
  }
`;

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <style>{styles}</style>

      <nav
        className={`navbar-root fixed w-full top-0 z-50 transition-all duration-500 ${
          scrolled ? "navbar-scrolled py-3" : "py-4"
        }`}
        style={{ background: scrolled ? "rgba(9,11,17,0.95)" : "#0b0f1a", backdropFilter: "blur(20px)" }}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto px-5 sm:px-8">

          {/* Logo */}
          <a href="#home" className="nav-logo-box">
            <div className="nav-logo-icon">
              <FiTerminal size={18} />
            </div>
            <span className="nav-logo-text">
              Vasuki <span>T</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-7">
              {navLinks.map((item, i) => (
                <React.Fragment key={item.id}>
                  <li>
                    <a href={item.link} className="nav-link">
                      {item.title}
                    </a>
                  </li>
                  {i < navLinks.length - 1 && <div className="nav-dot" />}
                </React.Fragment>
              ))}
            </ul>

            <a href="#contact" className="hire-btn">
              Hire Me <HiArrowUpRight size={12} />
            </a>
          </div>

          {/* Hamburger — mobile only */}
          <button
            className="flex md:hidden hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Overlay */}
      <div className={`mobile-overlay md:hidden ${open ? "open" : "closed"}`}>

        {/* Overlay Header */}
        <div className="mobile-header">
          <a href="#home" className="nav-logo-box" onClick={() => setOpen(false)}>
            <div className="nav-logo-icon">
              <FiTerminal size={18} />
            </div>
            <span className="nav-logo-text">
              Vasuki <span>T</span>
            </span>
          </a>
          <button
            className="hamburger"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Nav Links */}
        <div className="mobile-links">
          {navLinks.map((item, i) => (
            <a
              key={item.id}
              href={item.link}
              className="mobile-link"
              onClick={() => setOpen(false)}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <span className="link-num">0{i + 1}</span>
                {item.title}
              </div>
              <div className="arrow-icon">
                <HiArrowUpRight size={14} />
              </div>
            </a>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mobile-footer">
          <a
            href="#contact"
            className="mobile-hire-btn"
            onClick={() => setOpen(false)}
          >
            Let's Work Together <HiArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;