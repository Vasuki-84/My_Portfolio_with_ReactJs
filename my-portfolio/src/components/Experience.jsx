// import ctsLogo from "../assets/cts.jpg";
// import tetroLogo from "../assets/tetro.jpeg";
// import entriLogo from "../assets/entri.png";
// import { FaCheckCircle } from "react-icons/fa";

// const experiences = [
//   {
//     company: "Cognizant Technology Solutions (CTS)",
//     role: "Programmer Trainee",
//     duration: "Dec 2022 - May 2023",
//     logo: ctsLogo,
//     description:
//       "Worked on foundational programming, debugging, and technical tasks that strengthened analytical thinking, clean coding habits, and software development practices.",
//     skills: [
//       "Understanding of Web Applications",
//       "API Handling Basics",
//       "Git & GitHub",
//       "SDLC Understanding",
//       "Error Handling",
//       "HTML, CSS, JavaScript (Basics)",
//     ],
//   },
//   {
//     company: "Tetro Infotech Private Limited",
//     role: "Full Stack Developer Intern",
//     duration: "Mar 2026 - Present",
//     logo: tetroLogo,
//     description:
//       "Built responsive MERN stack applications and developed scalable backend APIs while collaborating on real-time full stack projects.",
//     skills: [
//       "React.js",
//       "Node.js",
//       "Express.js",
//       "MongoDB",
//       "REST APIs",
//       "JWT Authentication",
//     ],
//   },
//   {
//     company: "Entri Elevate",
//     role: "Backend Developer Intern",
//     duration: "Mar 2026 - Apr 2026",
//      logo: entriLogo,
//     description:
//       "Developed secure backend services with authentication, API testing, and database integration for production-ready applications.",
//     skills: [
//       "Node.js",
//       "Express.js",
//       "MongoDB",
//       "JWT Authentication",
//       "API Testing",
//       "Backend Development",
//     ],
//   },
// ];

// const Experience = () => {
//   return (
//     <section className="py-16 px-6 md:px-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
//       <h2 className="text-4xl font-bold text-center mb-12">
//         Professional Experience
//       </h2>

//       <div className="space-y-10 max-w-5xl mx-auto">
//         {experiences.map((exp, index) => (
//           <div
//             key={index}
//             className="p-10 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-[0_0_30px_rgba(0,123,255,0.15)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(0,132,255,0.4)] hover:-translate-y-2"
//           >
//             <div className="flex items-center gap-5 mb-6">
//               <img
//                 src={exp.logo}
//                 alt={exp.company}
//                 className="w-16 h-16 object-contain rounded-4xl shadow-md bg-white/20 p-2"
//               />

//               <div>
//                 <h3 className="text-2xl font-semibold text-blue-300">
//                   {exp.company}
//                 </h3>
//                 <p className="text-gray-300 text-sm">{exp.role}</p>
//                 <p className="text-gray-400 text-xs">{exp.duration}</p>
//               </div>
//             </div>

//             <p className="text-gray-300 mb-6 leading-relaxed">
//               {exp.description}
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {exp.skills.map((skill, skillIndex) => (
//                 <div
//                   key={skillIndex}
//                   className="flex items-center gap-3 p-4 bg-white/10 border border-white/20 rounded-xl backdrop-blur-xl shadow-md transition-all duration-300 hover:bg-white/20 hover:shadow-[0_0_20px_rgba(0,132,255,0.4)]"
//                 >
//                   <FaCheckCircle className="text-blue-400" />
//                   <p className="text-gray-300">{skill}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Experience;

import ctsLogo from "../assets/cts.jpg";
import tetroLogo from "../assets/tetro.jpeg";
import entriLogo from "../assets/entri.png";

const experiences = [
  {
    company: "Cognizant Technology Solutions (CTS)",
    role: "Programmer Trainee",
    duration: "Dec 2022 – May 2023",
    logo: ctsLogo,
    description:
      "Worked on foundational programming, debugging, and technical tasks that strengthened analytical thinking, clean coding habits, and software development practices.",
    skills: [
      "Web Applications",
      "API Handling Basics",
      "Git & GitHub",
      "SDLC",
      "Error Handling",
      "HTML, CSS, JS",
    ],
  },
  {
    company: "Tetro Infotech Private Limited",
    role: "Full Stack Developer Intern",
    duration: "Mar 2026 – Present",
    logo: tetroLogo,
    description:
      "Built responsive MERN stack applications and developed scalable backend APIs while collaborating on real-time full stack projects.",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT Authentication",
    ],
  },
  {
    company: "Entri Elevate",
    role: "Backend Developer Intern",
    duration: "Mar 2026 – Apr 2026",
    logo: entriLogo,
    description:
      "Developed secure backend services with authentication, API testing, and database integration for production-ready applications.",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Auth",
      "API Testing",
      "Backend Dev",
    ],
  },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Nunito:wght@400;500;600;700&display=swap');

  .exp-section {
    font-family: 'Nunito', sans-serif;
    background: linear-gradient(135deg, #0d1117 0%, #111827 50%, #0d1117 100%);
    position: relative;
    overflow: hidden;
  }

  .exp-section::before {
    content: '';
    position: absolute;
    top: -200px;
    right: -200px;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 65%);
    pointer-events: none;
  }

  .exp-section::after {
    content: '';
    position: absolute;
    bottom: -150px;
    left: -150px;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 65%);
    pointer-events: none;
  }

  /* Section header */
  .exp-eyebrow {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 12px;
  }

  .exp-eyebrow-line {
    width: 28px;
    height: 1.5px;
    background: #6366f1;
    border-radius: 2px;
  }

  .exp-eyebrow span {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #818cf8;
  }

  .exp-title {
    font-family: 'Outfit', sans-serif;
    font-size: clamp(1.9rem, 5vw, 3rem);
    font-weight: 800;
    color: #f1f5f9;
    letter-spacing: -0.03em;
    text-align: center;
    margin-bottom: 64px;
  }

  .exp-title span {
    color: #818cf8;
    position: relative;
    display: inline-block;
  }

  .exp-title span::after {
    content: '';
    position: absolute;
    bottom: 3px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #6366f1, #3b82f6);
    border-radius: 2px;
    opacity: 0.45;
  }

  /* Timeline wrapper */
  .timeline {
    position: relative;
    max-width: 860px;
    margin: 0 auto;
  }

  /* Vertical line — hidden on mobile, shown md+ */
  .timeline-line {
    display: none;
  }

  @media (min-width: 768px) {
    .timeline-line {
      display: block;
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 1.5px;
      background: linear-gradient(to bottom, transparent, rgba(63, 141, 242, 0.35) 8%, rgba(99,102,241,0.35) 92%, transparent);
      transform: translateX(-50%);
    }
  }

  /* Each timeline item */
  .timeline-item {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 48px;
  }

  @media (min-width: 768px) {
    .timeline-item {
      flex-direction: row;
      align-items: flex-start;
      margin-bottom: 56px;
    }

    /* Odd items: card on left, dot center, date on right */
    .timeline-item:nth-child(odd) {
      flex-direction: row;
    }

    .timeline-item:nth-child(odd) .tl-card-side {
      order: 1;
      padding-right: 40px;
      align-items: flex-end;
      text-align: right;
    }

    .timeline-item:nth-child(odd) .tl-dot-side {
      order: 2;
    }

    .timeline-item:nth-child(odd) .tl-date-side {
      order: 3;
      padding-left: 40px;
      align-items: flex-start;
    }

    /* Even items: date on left, dot center, card on right */
    .timeline-item:nth-child(even) {
      flex-direction: row;
    }

    .timeline-item:nth-child(even) .tl-date-side {
      order: 1;
      padding-right: 40px;
      align-items: flex-end;
    }

    .timeline-item:nth-child(even) .tl-dot-side {
      order: 2;
    }

    .timeline-item:nth-child(even) .tl-card-side {
      order: 3;
      padding-left: 40px;
      align-items: flex-start;
      text-align: left;
    }
  }

  /* Card side */
  .tl-card-side {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  /* Dot side */
  .tl-dot-side {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    padding-top: 16px;
  }

  /* On mobile, show dot side as a row with line */
  @media (max-width: 767px) {
    .tl-dot-side {
      flex-direction: row;
      padding-top: 0;
      margin-bottom: 14px;
      gap: 12px;
    }

    .tl-dot-side .mobile-line {
      flex: 1;
      height: 1.5px;
      background: rgba(99,102,241,0.3);
    }

    .tl-date-side {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .tl-dot-side .mobile-line {
      display: none;
    }
  }

  /* Dot */
  .tl-dot {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #1e2333;
    border: 2px solid rgba(99,102,241,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    transition: all 0.3s ease;
    flex-shrink: 0;
  }

  .timeline-item:hover .tl-dot {
    border-color: #71a2f7;
    box-shadow: 0 0 20px rgba(84, 146, 233, 0.5);
  }

  .tl-dot img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    object-fit: cover;
  }

  /* Date side */
  .tl-date-side {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
  }

  .tl-duration {
    font-size: 12px;
    font-weight: 700;
    color: #60a7ef;
    letter-spacing: 0.08em;
    background: rgba(99,102,241,0.1);
    border: 1px solid rgba(99,102,241,0.2);
    padding: 5px 12px;
    border-radius: 100px;
    display: inline-block;
    white-space: nowrap;
  }

  /* Card */
  .tl-card {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(99,102,241,0.15);
    border-radius: 20px;
    padding: 24px;
    backdrop-filter: blur(12px);
    transition: all 0.32s cubic-bezier(0.34,1.56,0.64,1);
    position: relative;
    overflow: hidden;
  }

  .tl-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    background: linear-gradient(135deg, rgba(99,102,241,0.05) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  .tl-card:hover {
    transform: translateY(-4px);
    border-color: rgba(99,102,241,0.35);
    box-shadow: 0 16px 48px rgba(99,102,241,0.18), 0 0 0 1px rgba(99,102,241,0.08);
  }

  .tl-card:hover::before {
    opacity: 1;
  }

  /* Mobile duration inside card */
  .tl-mobile-duration {
    display: none;
  }

  @media (max-width: 767px) {
    .tl-mobile-duration {
      display: inline-block;
      font-size: 11px;
      font-weight: 700;
      color: #588bfb;
      background: rgba(99,102,241,0.1);
      border: 1px solid rgba(99,102,241,0.2);
      padding: 4px 10px;
      border-radius: 100px;
      margin-bottom: 12px;
      letter-spacing: 0.07em;
    }
  }

  .tl-company-row {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 6px;
  }

  .tl-logo {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    object-fit: contain;
    background: rgba(255,255,255,0.08);
    padding: 5px;
    border: 1px solid rgba(255,255,255,0.1);
    flex-shrink: 0;
  }

  .tl-company {
    font-family: 'Outfit', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: #c7d2fe;
    letter-spacing: -0.01em;
    line-height: 1.2;
  }

  .tl-role {
    font-size: 12px;
    font-weight: 600;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 12px;
  }

  .tl-desc {
    font-size: 13.5px;
    color: #94a3b8;
    line-height: 1.7;
    margin-bottom: 16px;
  }

  /* Skills */
  .tl-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
  }

  .tl-skill {
    font-size: 11.5px;
    font-weight: 600;
    color: #94a3b8;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.08);
    padding: 4px 11px;
    border-radius: 100px;
    transition: all 0.2s ease;
  }

  .tl-card:hover .tl-skill {
    border-color: rgba(99,102,241,0.25);
    color: #c7d2fe;
  }

  .tl-skill:hover {
    background: rgba(99,102,241,0.12) !important;
    border-color: rgba(99,102,241,0.4) !important;
    color: #a5b4fc !important;
    transform: translateY(-1px);
  }
`;

const Experience = () => {
  return (
    <>
      <style>{styles}</style>
      <section id="experience" className="exp-section py-20 px-4 sm:px-8 md:px-16">

        {/* Header */}
        <div className="exp-eyebrow">
          <div className="exp-eyebrow-line" />
          <span>Career Journey</span>
          <div className="exp-eyebrow-line" />
        </div>
        <h2 className="exp-title">
          Professional <span>Experience</span>
        </h2>

        {/* Timeline */}
        <div className="timeline">
          <div className="timeline-line" />

          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">

              {/* Card side */}
              <div className="tl-card-side">
                <div className="tl-card">
                  {/* Mobile duration */}
                  <span className="tl-mobile-duration">{exp.duration}</span>

                  <div className="tl-company-row">
                    <img src={exp.logo} alt={exp.company} className="tl-logo" />
                    <div>
                      <div className="tl-company">{exp.company}</div>
                    </div>
                  </div>

                  <div className="tl-role">{exp.role}</div>
                  <p className="tl-desc">{exp.description}</p>

                  <div className="tl-skills">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="tl-skill">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Dot side */}
              <div className="tl-dot-side">
                <div className="mobile-line" />
                <div className="tl-dot">
                  <img src={exp.logo} alt={exp.company} />
                </div>
                <div className="mobile-line" />
              </div>

              {/* Date side */}
              <div className="tl-date-side">
                <span className="tl-duration">{exp.duration}</span>
              </div>

            </div>
          ))}
        </div>

      </section>
    </>
  );
};

export default Experience;