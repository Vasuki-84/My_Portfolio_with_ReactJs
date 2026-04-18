// import React from "react";
// import codingGirl from "../assets/aboutIamge.jpg";

// function About() {
//   return (
//     <section id="about" className="px-6 md:px-20 py-20 bg-gray-50">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
//         {/* Left Image */}
//         <div className="w-full md:w-1/2 flex justify-center">
//           <div className="relative w-72 md:w-96 aspect-square p-2">
          

//             {/* Image */}
//             <img
//               src={codingGirl}
//               alt="Coding Girl"
//               className="w-full h-full object-fit rounded-full border border-4 relative z-10"
//             />
//           </div>
//         </div>

//         {/* Right Content */}
//         <div className="w-full md:w-1/2">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>

//           <p className="text-lg text-gray-700 leading-relaxed mb-4">
//             Hi, I'm <span className="font-semibold text-gray-900">Vasuki</span>,
//             a passionate <strong>MERN Stack Developer</strong> fresher who loves
//             building clean, responsive, and user-friendly web applications.
//           </p>

//           <p className="text-lg text-gray-700 leading-relaxed mb-4">
//             I work with MongoDB, Express.js, React.js and Node.js to create
//             full-stack applications, always focusing on writing efficient and
//             modern code.
//           </p>

//           <p className="text-lg text-gray-700 leading-relaxed">
//             I am actively looking for opportunities to learn, grow, and
//             contribute to real-world projects.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;


import React from "react";

import codingGirl from "../assets/vasuki.png"

function About() {
  return (
    <section id="about" className="px-6 md:px-20 py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Image with Fantasy.co Inspired Hover Effect */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative group w-72 md:w-96 aspect-square">
            
            {/* Background Atmosphere - Premium Glow Effect on Hover */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-400/20 via-transparent to-indigo-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            {/* Image Container with Fluid Motion (Scale and Tilt) */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/20 shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105 group-hover:rotate-2 group-hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] z-10">
              <img
                src={codingGirl}
                alt="Vasuki Character"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />
              
              {/* Cinematic Overlay gradient that appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>

            {/* Floating "Available" Badge with Pulse Animation */}
            <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-md border border-gray-100 px-6 py-2 rounded-2xl shadow-xl z-20 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
               <div className="flex items-center gap-2">
                 <span className="relative flex h-3 w-3">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                 </span>
                 <span className="text-sm font-bold text-gray-800 uppercase tracking-wider">Available for Hire</span>
               </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-[2px] w-12 bg-blue-400"></div>
            <span className="text-blue-400 font-bold tracking-widest uppercase text-xs">About Me</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tighter">Developer's Story</h2>

          <div className="space-y-6">
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              Hi, I'm <span className="text-blue-400 font-extrabold">Vasuki</span>,
              a passionate <strong className="text-blue-400">MERN Stack Developer</strong> fresher with a relentless drive for building scalable and high-impact digital solutions.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              I specialize in crafting full-stack applications using MongoDB, Express.js, React.js, and Node.js. My focus is always on writing clean, efficient, and modern code that provides seamless user experiences.
            </p>

            {/* Skill Mini-Cards for Visual Interest */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="p-6 bg-white rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="p-3 bg-blue-50 rounded-2xl text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Frontend</h4>
                  <p className="text-sm text-gray-500">React, Tailwind, Next js</p>
                </div>
              </div>
              
              <div className="p-6 bg-white rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="p-3 bg-blue-50 rounded-2xl text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Backend</h4>
                  <p className="text-sm text-gray-500">Node, Express, MongoDB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Call-to-Action */}
          <div className="mt-12">
            <a href="#contact" className="inline-flex items-center gap-2 text-gray-900 font-bold uppercase tracking-widest text-sm group">
              Get in touch
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
    
    </section>
  );
}

export default About;