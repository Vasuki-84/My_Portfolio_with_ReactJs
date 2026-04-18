// import React from "react";

// import codingGirl from "../assets/vasuki.png"

// const styles = `
//   @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

//   .projects-section {
//     font-family:'Nunito', sans-serif;
   
//   }
// `
// function About() {
//   return (
//     <>
//        <style>{styles}</style>
//     <section id="about" className="projects-section px-6 md:px-20 py-20 bg-gray-50 overflow-hidden">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
      
//         <div className="w-full md:w-1/2 flex justify-center">
//           <div className="relative group w-72 md:w-96 aspect-square">
            
//             {/* Background Atmosphere - Premium Glow Effect on Hover */}
//             <div className="absolute -inset-4 bg-gradient-to-tr from-blue-400/20 via-transparent to-indigo-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
//             {/* Image Container with Fluid Motion (Scale and Tilt) */}
//             <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/20 shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105 group-hover:rotate-2 group-hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] z-10">
//               <img
//                 src={codingGirl}
//                 alt="Vasuki Character"
//                 className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
//               />
              
//               {/* Cinematic Overlay gradient that appears on hover */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
//             </div>

//             {/* Floating "Available" Badge with Pulse Animation */}
//             <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-md border border-gray-100 px-6 py-2 rounded-2xl shadow-xl z-20 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
//                <div className="flex items-center gap-2">
//                  <span className="relative flex h-3 w-3">
//                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
//                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
//                  </span>
//                  <span className="text-sm font-bold text-gray-800 uppercase tracking-wider">Available for Hire</span>
//                </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Content */}
//         <div className="w-full md:w-1/2">
//           <div className="mb-6 flex items-center gap-4">
//             <div className="h-[2px] w-12 bg-blue-400"></div>
//             <span className="text-blue-400 font-bold tracking-widest uppercase text-xs">About Me</span>
//           </div>
          
//           <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tighter">Developer's Story</h2>

//           <div className="space-y-6">
//             <p className="text-xl text-gray-700 leading-relaxed font-medium">
//               Hi, I'm <span className="text-blue-400 font-extrabold">Vasuki</span>,
//               a passionate <strong className="text-blue-400">MERN Stack Developer</strong> fresher with a relentless drive for building scalable and high-impact digital solutions.
//             </p>

//             <p className="text-lg text-gray-600 leading-relaxed">
//               I specialize in crafting full-stack applications using MongoDB, Express.js, React.js, and Node.js. My focus is always on writing clean, efficient, and modern code that provides seamless user experiences.
//             </p>

//             {/* Skill Mini-Cards for Visual Interest */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
//               <div className="p-6 bg-white rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
//                 <div className="p-3 bg-blue-50 rounded-2xl text-blue-500">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-gray-900">Frontend</h4>
//                   <p className="text-sm text-gray-500">React, Tailwind, Next js</p>
//                 </div>
//               </div>
              
//               <div className="p-6 bg-white rounded-3xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow">
//                 <div className="p-3 bg-blue-50 rounded-2xl text-blue-500">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h4 className="font-bold text-gray-900">Backend</h4>
//                   <p className="text-sm text-gray-500">Node, Express,MongoDB</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Call-to-Action */}
//           <div className="mt-12">
//             <a href="#contact" className="inline-flex items-center gap-2 text-gray-900 font-bold uppercase tracking-widest text-sm group">
//               Get in touch
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//               </svg>
//             </a>
//           </div>
//         </div>
//       </div>
      
    
//     </section>
//     </>
//   );
// }

// export default About;

import React from "react";
import codingGirl from "../assets/vasuki.png";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800;900&family=Outfit:wght@400;500;600;700;800&display=swap');

  .about-section {
    font-family: 'Nunito', sans-serif;
    background: #f8f9ff;
    position: relative;
    overflow: hidden;
  }

  .about-section::before {
    content: '';
    position: absolute;
    top: -100px;
    right: -100px;
    width: 380px;
    height: 380px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%);
    pointer-events: none;
  }

  .about-section::after {
    content: '';
    position: absolute;
    bottom: -80px;
    left: -80px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%);
    pointer-events: none;
  }

  .about-eyebrow {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 14px;
  }

  .about-eyebrow::before {
    content: '';
    display: block;
    width: 28px;
    height: 2px;
    background: #3b82f6;
    border-radius: 2px;
  }

  .about-eyebrow span {
    font-family: 'Nunito', sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #3b82f6;
  }

  .about-title {
    font-family: 'Outfit', sans-serif;
    font-size: clamp(2.2rem, 6vw, 3.8rem);
    font-weight: 800;
    color: #0f172a;
    line-height: 1.08;
    letter-spacing: -0.03em;
    margin-bottom: 28px;
  }

  .about-title .highlight {
    color: #3b82f6;
    position: relative;
    display: inline-block;
  }

  .about-title .highlight::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #3b82f6, #6366f1);
    border-radius: 2px;
    opacity: 0.4;
  }

  .about-lead {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1e293b;
    line-height: 1.7;
    margin-bottom: 16px;
  }

  .about-lead .name {
    color: #3b82f6;
    font-weight: 800;
  }

  .about-lead .role {
    color: #3b82f6;
    font-weight: 700;
  }

  .about-body {
    font-size: 1rem;
    font-weight: 400;
    color: #64748b;
    line-height: 1.8;
    margin-bottom: 24px;
  }

  /* Skill cards */
  .skill-card {
    background: #ffffff;
    border: 1px solid rgba(59,130,246,0.1);
    border-radius: 20px;
    padding: 20px;
    display: flex;
    align-items: flex-start;
    gap: 14px;
    transition: all 0.28s cubic-bezier(0.34,1.56,0.64,1);
  }

  .skill-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(59,130,246,0.14);
    border-color: rgba(59,130,246,0.25);
  }

  .skill-icon {
    padding: 10px;
    background: #eff6ff;
    border-radius: 14px;
    color: #3b82f6;
    flex-shrink: 0;
    transition: background 0.2s ease;
  }

  .skill-card:hover .skill-icon {
    background: #dbeafe;
  }

  .skill-card h4 {
    font-family: 'Outfit', sans-serif;
    font-weight: 700;
    font-size: 0.95rem;
    color: #0f172a;
    margin-bottom: 3px;
  }

  .skill-card p {
    font-size: 0.8rem;
    color: #94a3b8;
    font-weight: 500;
  }

  /* CTA link */
  .cta-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: 'Nunito', sans-serif;
    font-size: 0.85rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: #0f172a;
    text-decoration: none;
    transition: gap 0.2s ease;
    margin-top: 36px;
  }

  .cta-link:hover {
    gap: 14px;
  }

  .cta-link svg {
    color: #3b82f6;
    transition: transform 0.25s ease;
  }

  .cta-link:hover svg {
    transform: translateX(4px);
  }

  /* Image section */
  .img-outer {
    position: relative;
    width: 100%;
    max-width: 360px;
    aspect-ratio: 1;
  }

  .img-glow {
    position: absolute;
    inset: -16px;
    background: radial-gradient(ellipse at center, rgba(59,130,246,0.18) 0%, transparent 70%);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.8s ease;
    pointer-events: none;
  }

  .img-outer:hover .img-glow {
    opacity: 1;
  }

  .img-frame {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 28px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,0.2);
    box-shadow: 0 24px 64px rgba(15,23,42,0.12);
    transition: transform 0.7s cubic-bezier(0.23,1,0.32,1), box-shadow 0.7s ease;
    z-index: 2;
  }

  .img-outer:hover .img-frame {
    transform: scale(1.04) rotate(1.5deg);
    box-shadow: 0 40px 80px rgba(15,23,42,0.2);
  }

  .img-frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.9s ease;
  }

  .img-outer:hover .img-frame img {
    transform: scale(1.08);
  }

  .img-frame .cinematic-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(15,23,42,0.18) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .img-outer:hover .img-frame .cinematic-overlay {
    opacity: 1;
  }

  /* Available badge */
  .available-badge {
    position: absolute;
    bottom: -16px;
    right: -16px;
    background: rgba(255,255,255,0.95);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(59,130,246,0.12);
    padding: 10px 18px;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(15,23,42,0.1);
    z-index: 10;
    transition: transform 0.5s cubic-bezier(0.34,1.56,0.64,1);
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .img-outer:hover .available-badge {
    transform: translateY(-8px);
  }

  .available-badge span.label {
    font-family: 'Outfit', sans-serif;
    font-size: 12px;
    font-weight: 700;
    color: #0f172a;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .ping-dot {
    position: relative;
    display: flex;
    width: 12px;
    height: 12px;
    flex-shrink: 0;
  }

  .ping-dot span.ping {
    position: absolute;
    display: inline-flex;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #3b82f6;
    opacity: 0.6;
    animation: ping 1.4s cubic-bezier(0,0,0.2,1) infinite;
  }

  .ping-dot span.dot {
    position: relative;
    display: inline-flex;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #3b82f6;
  }

  @keyframes ping {
    75%, 100% { transform: scale(2); opacity: 0; }
  }
`;

function About() {
  return (
    <>
      <style>{styles}</style>
      <section id="about" className="about-section px-6 md:px-20 py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">

          {/* Left — Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="img-outer">
              <div className="img-glow" />

              <div className="img-frame">
                <img src={codingGirl} alt="Vasuki" />
                <div className="cinematic-overlay" />
              </div>

              <div className="available-badge">
                <div className="ping-dot">
                  <span className="ping" />
                  <span className="dot" />
                </div>
                <span className="label">Available for Hire</span>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div className="w-full md:w-1/2">
            <div className="about-eyebrow">
              <span>About Me</span>
            </div>

            <h2 className="about-title">
              Developer's <span className="highlight">Story</span>
            </h2>

            <p className="about-lead">
              Hi, I'm <span className="name">Vasuki</span>, a passionate{" "}
              <span className="role">MERN Stack Developer</span> fresher with a
              relentless drive for building scalable and high-impact digital
              solutions.
            </p>

            <p className="about-body">
              I specialize in crafting full-stack applications using MongoDB,
              Express.js, React.js, and Node.js. My focus is always on writing
              clean, efficient, and modern code that provides seamless user
              experiences.
            </p>

            {/* Skill Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="skill-card">
                <div className="skill-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h4>Frontend</h4>
                  <p>React, Tailwind, Next.js</p>
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <div>
                  <h4>Backend</h4>
                  <p>Node, Express, MongoDB</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a href="#contact" className="cta-link">
              Get in touch
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

        </div>
      </section>
    </>
  );
}

export default About;