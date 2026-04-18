// import React from "react";
// import { ReactTyped } from "react-typed";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import myImage from "../assets/myImage.jpg";

// function HeroSection() {
//   return (
//     <section
//       id="home"
//       className="h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-8 pt-24
//                  bg-gradient-to-br from-gray-800 via-gray-800 to-black text-white"
//     >
//       {/* Left Side Text */}
//       <div className="text-center md:text-left max-w-xl animate-fadeIn">
//         <h1 className="text-4xl md:text-6xl font-bold mb-4">
//           Hi, I'm <span className="text-blue-400">Vasuki</span>
//         </h1>

//         {/* Typing Animation */}
//         <h2 className="text-xl md:text-3xl font-semibold text-gray-300 mb-4">
//           <ReactTyped
//             strings={[
//               "Front-End Developer",
//               "React JS Developer",
//               "Back-End Developer",
//               "MERN Stack Developer",
//             ]}
//             typeSpeed={50}
//             backSpeed={40}
//             loop
//           />
//         </h2>

//         <p className="text-gray-400 mb-6">
//           I build beautiful, modern, and responsive web applications using
//           React, Tailwind CSS, JavaScript, and creative UI design principles.
//         </p>

//         {/* Buttons */}
//         <div className="flex gap-6 justify-center md:justify-start mb-6">
//           <a
//             href="#projects"
//             className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold text-white transition duration-300"
//           >
//             View Projects
//           </a>

//           <a
//             href="#contact"
//             className="border border-blue-400 hover:bg-blue-400 hover:text-gray-900 px-6 py-3 rounded-lg font-semibold transition duration-300"
//           >
//             Contact Me
//           </a>
//           {/* Download CV */}
//           <a
//             href="https://drive.google.com/file/d/1ffX_p9p42hLdynRQoZLhDxRcoqrs-vZt/view?usp=sharing" target="_blank"
//             download
//             className="border border-green-400 text-green-300 hover:bg-green-400 hover:text-black px-6 py-3 rounded-lg font-semibold transition duration-300"
//           >
//             Download CV
//           </a>
//         </div>

//         {/* Social Media Icons */}
//         <div className="flex gap-6 text-3xl justify-center md:justify-start mt-4">
//           <a
//             href="https://github.com"
//             className="hover:text-blue-400 transition duration-300"
//           >
//             <FaGithub />
//           </a>
//           <a
//             href="https://linkedin.com"
//             className="hover:text-blue-400 transition duration-300"
//           >
//             <FaLinkedin />
//           </a>
//           <a
//             href="mailto:iamvasukithangaraj@example.com"
//             className="hover:text-blue-400 transition duration-300"
//           >
//             <MdEmail />
//           </a>
//         </div>
//       </div>

//       {/* Right Side - */}
//       <div className="relative">
//         <img
//           src={myImage}
//           alt="profile"
//           className="w-56 h-56 md:w-72 md:h-72 rounded-full shadow-xl object-cover border-4 border-blue-400
//                      animate-floating"
//         />
//       </div>
//     </section>
//   );
// }

// export default HeroSection;


 import React from "react"; import { ReactTyped } from "react-typed";
  import { FaGithub, FaLinkedin } from "react-icons/fa"; 
  import { MdEmail } from "react-icons/md";
 import myImage from "../assets/aboutIamge.jpg";
  function HeroSection() { return ( <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden bg-[#111827] text-white" > {/* Background Gradient Orbs for Professional Depth */} 
  <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
   <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px]" />
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 z-10"> {/* Profile Image - Left Side on Desktop with Colorful Hover Effect */} 
      <div className="relative group md:w-1/2 flex justify-center md:justify-end"> {/* Animated Colorful Glow on Hover */} 
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500 group-hover:duration-200 animate-pulse"></div> 
      <div className="relative w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl transition-all duration-500 group-hover:border-blue-400/50">
       <img src={myImage} alt="Vasuki - Profile" className="w-full h-full object-fit transform transition-all duration-500 group-hover:scale-110 group-hover:saturate-150" /> 
       </div>
     
        </div>
         {/* Content Section - Right Side on Desktop */} 
       <div className="text-center md:text-left md:w-1/2 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70"> Hi, I'm <span className="text-blue-400">Vasuki</span> </h1> 
        {/* Typing Animation Area */}
         <div className="h-8 md:h-10 mb-6"> 
          <h2 className="text-xl md:text-3xl font-medium text-gray-400"> 
            <ReactTyped strings={[ "Front-End Developer", "React JS Developer", "Back-End Developer", "MERN Stack Developer", ]} typeSpeed={50} backSpeed={40} loop /> </h2> 
            </div> <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"> I build beautiful, modern, and responsive web applications using React, Tailwind CSS, JavaScript, and creative UI design principles. </p>
             {/* Primary Action Buttons */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10">
                 <a href="#projects" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:-translate-y-1 active:scale-95" > View Projects </a> 
                 <a href="#contact" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold transition-all duration-300 backdrop-blur-sm hover:-translate-y-1 active:scale-95" > Contact Me </a>
                  <a href="https://drive.google.com/file/d/1ffX_p9p42hLdynRQoZLhDxRcoqrs-vZt/view?usp=sharing" target="_blank" rel="noopener noreferrer" download className="px-8 py-4 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 hover:-translate-y-1 active:scale-95" > Download CV <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"> 
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /> </svg> </a>
                   </div> {/* Social Links */}
                    <div className="flex items-center justify-center md:justify-start gap-8"> 
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors duration-300 transform hover:scale-125" >
                       <FaGithub size={28} /> </a> <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors duration-300 transform hover:scale-125" > <FaLinkedin size={28} /> </a> <a href="mailto:iamvasukithangaraj@example.com" className="text-gray-500 hover:text-white transition-colors duration-300 transform hover:scale-125" > <MdEmail size={28} /> </a> </div> </div> </div> {/* Subtle Scroll Indicator */} <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /> </svg>
      </div>
       </section> ); }
      export default HeroSection; 