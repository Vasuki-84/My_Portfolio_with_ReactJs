// import React from "react";

// function Certifications() {
//   const certs = [
//     {
//       title: "Full Stack Development (MERN) Certification",
//       provider: "Entri Elevate",
//       year: "2026",
//       details: [
//         "Built responsive and user-friendly websites using HTML, CSS, JavaScript, React, and Bootstrap.",
//         "Developed back-end systems with Node.js, Express.js, MongoDB, and implemented JWT-based authentication for secure user management.",
//         "Deployed full-stack applications using GitHub for version control, Postman for API testing, and hosting platforms like Vercel, Netlify, and Render."
//       ],
//     },
//     {
//       title: "Full Stack Web Development (MERN)",
//       provider: "Illinois Tech, USA (Present)",
//       year: "2026",
//       details: [],
//     },
//     {
//       title: "NSDC Certification",
//       provider: "",
//       year: "2026",
//       details: [
//         "Built responsive UI and user-friendly layouts.",
//         "Worked with modern JavaScript and React fundamentals.",
//         "Gained hands-on exposure to real-world frontend and backend workflows."
//       ],
//     },
//   ];

//   return (
//     <section className="px-6 md:px-20 py-20 bg-gray-50" id="certifications">
//       <h2 className="text-4xl font-bold text-center mb-12">
//         My <span className="text-blue-600">Certifications</span>
//       </h2>

//       <div className="max-w-5xl mx-auto space-y-10">
//         {certs.map((cert, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition duration-300"
//           >
//             {/* Title + Year */}
//             <div className="flex justify-between items-center">
//               <h3 className="text-2xl font-semibold">{cert.title}</h3>
//               <span className="text-gray-500 font-medium">{cert.year}</span>
//             </div>

//             {/* Provider */}
//             {cert.provider && (
//               <p className="text-gray-600 mt-1">Issued by: {cert.provider}</p>
//             )}

//             {/* Bullet Points */}
//             {cert.details.length > 0 && (
//               <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-700">
//                 {cert.details.map((point, i) => (
//                   <li key={i}>{point}</li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Certifications;

import React, { useState } from "react";
import { HiArrowUpRight, HiMiniCheckBadge  } from "react-icons/hi2";
import { HiChevronDown } from "react-icons/hi";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Nunito:wght@400;500;600;700;800&display=swap');

  .cert-section {
    font-family: 'Nunito', sans-serif;
    background: #f8f9ff;
    position: relative;
    overflow: hidden;
  }

  .cert-section::before {
    content: '';
    position: absolute;
    top: -120px;
    right: -120px;
    width: 420px;
    height: 420px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%);
    pointer-events: none;
  }

  .cert-section::after {
    content: '';
    position: absolute;
    bottom: -100px;
    left: -100px;
    width: 360px;
    height: 360px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%);
    pointer-events: none;
  }

  /* Header */
  .cert-eyebrow {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 12px;
  }

  .cert-eyebrow-line {
    width: 28px;
    height: 1.5px;
    background: #3b82f6;
    border-radius: 2px;
  }

  .cert-eyebrow span {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #3b82f6;
  }

  .cert-title {
    font-family: 'Outfit', sans-serif;
    font-size: clamp(1.9rem, 5vw, 3rem);
    font-weight: 800;
    color: #0f172a;
    letter-spacing: -0.03em;
    text-align: center;
    margin-bottom: 56px;
  }

  .cert-title span {
    color: #3b82f6;
    position: relative;
    display: inline-block;
  }

  .cert-title span::after {
    content: '';
    position: absolute;
    bottom: 3px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #3b82f6, #6366f1);
    border-radius: 2px;
    opacity: 0.4;
  }

  /* Grid */
  .cert-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    max-width: 900px;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    .cert-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .cert-grid .cert-card:first-child {
      grid-column: 1 / -1;
    }
  }

  /* Card */
  .cert-card {
    background: #ffffff;
    border: 1px solid rgba(59,130,246,0.1);
    border-radius: 22px;
    padding: 28px;
    position: relative;
    overflow: hidden;
    transition: all 0.32s cubic-bezier(0.34,1.56,0.64,1);
    cursor: default;
  }

  .cert-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #3b82f6, #6366f1);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .cert-card:hover {
    transform: translateY(-5px);
    border-color: rgba(59,130,246,0.25);
    box-shadow: 0 20px 56px rgba(59,130,246,0.13), 0 4px 16px rgba(0,0,0,0.05);
  }

  .cert-card:hover::before {
    opacity: 1;
  }

  /* Badge icon top-right */
  .cert-badge-icon {
    position: absolute;
    top: 22px;
    right: 22px;
    width: 40px;
    height: 40px;
    background: #eff6ff;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #3b82f6;
    border: 1px solid rgba(59,130,246,0.15);
    transition: all 0.25s ease;
    flex-shrink: 0;
  }

  .cert-card:hover .cert-badge-icon {
    background: #dbeafe;
    box-shadow: 0 0 16px rgba(59,130,246,0.3);
  }

  /* Year pill */
  .cert-year {
    display: inline-block;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: #3b82f6;
    background: #eff6ff;
    border: 1px solid rgba(59,130,246,0.2);
    padding: 3px 11px;
    border-radius: 100px;
    margin-bottom: 14px;
  }

  .cert-card-title {
    font-family: 'Outfit', sans-serif;
    font-size: 1.05rem;
    font-weight: 700;
    color: #0f172a;
    letter-spacing: -0.01em;
    line-height: 1.35;
    margin-bottom: 6px;
    padding-right: 50px;
  }

  .cert-provider {
    font-size: 12.5px;
    font-weight: 600;
    color: #64748b;
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 0;
  }

  .cert-provider-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #3b82f6;
    flex-shrink: 0;
  }

  /* Expandable details */
  .cert-divider {
    height: 1px;
    background: linear-gradient(90deg, rgba(59,130,246,0.15), transparent);
    margin: 18px 0;
  }

  .cert-toggle {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    font-weight: 700;
    color: #3b82f6;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: gap 0.2s ease;
  }

  .cert-toggle:hover {
    gap: 10px;
  }

  .cert-toggle svg {
    transition: transform 0.28s ease;
  }

  .cert-toggle.open svg {
    transform: rotate(180deg);
  }

  .cert-details {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease;
    opacity: 0;
  }

  .cert-details.open {
    max-height: 400px;
    opacity: 1;
  }

  .cert-details ul {
    list-style: none;
    padding: 0;
    margin: 14px 0 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .cert-details li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 13.5px;
    color: #475569;
    line-height: 1.6;
  }

  .cert-details li .bullet {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #3b82f6;
    margin-top: 7px;
    flex-shrink: 0;
  }

  /* Present badge */
  .present-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 11px;
    font-weight: 700;
    color: #16a34a;
    background: #f0fdf4;
    border: 1px solid rgba(22,163,74,0.2);
    padding: 4px 10px;
    border-radius: 100px;
    margin-left: 8px;
  }

  .present-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #16a34a;
    animation: presping 1.4s ease infinite;
  }

  @keyframes presping {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.8); }
  }

  /* Bottom count strip */
  .cert-count-strip {
    max-width: 900px;
    margin: 36px auto 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 13px;
    font-weight: 600;
    color: #94a3b8;
  }

  .cert-count-strip span {
    font-family: 'Outfit', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    color: #3b82f6;
  }
`;

function Certifications() {
  const [openIndex, setOpenIndex] = useState(null);

  const certs = [
    {
      title: "Full Stack Development (MERN) Certification",
      provider: "Entri Elevate",
      year: "2026",
      isPresent: false,
      details: [
        "Built responsive and user-friendly websites using HTML, CSS, JavaScript, React, and Bootstrap.",
        "Developed back-end systems with Node.js, Express.js, MongoDB, and implemented JWT-based authentication for secure user management.",
        "Deployed full-stack applications using GitHub for version control, Postman for API testing, and hosting platforms like Vercel, Netlify, and Render.",
      ],
    },
    {
      title: "Full Stack Web Development (MERN)",
      provider: "Illinois Tech, USA",
      year: "2026",
      isPresent: false,
      details: [],
    },
    {
      title: "NSDC Certification",
      provider: "NSDC",
      year: "2026",
      isPresent: false,
      details: [
        "Built responsive UI and user-friendly layouts.",
        "Worked with modern JavaScript and React fundamentals.",
        "Gained hands-on exposure to real-world frontend and backend workflows.",
      ],
    },
  ];

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <>
      <style>{styles}</style>
      <section id="certifications" className="cert-section py-20 px-4 sm:px-8 md:px-16">

        {/* Header */}
        <div className="cert-eyebrow">
          <div className="cert-eyebrow-line" />
          <span>Achievements</span>
          <div className="cert-eyebrow-line" />
        </div>
        <h2 className="cert-title">
          My <span>Certifications</span>
        </h2>

        {/* Cards Grid */}
        <div className="cert-grid">
          {certs.map((cert, index) => (
            <div key={index} className="cert-card">

              {/* Badge icon */}
              <div className="cert-badge-icon">
                <HiMiniCheckBadge  size={20} />
              </div>

              {/* Year */}
              <span className="cert-year">{cert.year}</span>

              {/* Title */}
              <h3 className="cert-card-title">{cert.title}</h3>

              {/* Provider */}
              {cert.provider && (
                <p className="cert-provider">
                  <span className="cert-provider-dot" />
                  {cert.provider}
                  {cert.isPresent && (
                    <span className="present-badge">
                      <span className="present-dot" /> In Progress
                    </span>
                  )}
                </p>
              )}

              {/* Expandable details */}
              {cert.details.length > 0 && (
                <>
                  <div className="cert-divider" />
                  <button
                    className={`cert-toggle ${openIndex === index ? "open" : ""}`}
                    onClick={() => toggle(index)}
                  >
                    {openIndex === index ? "Hide Details" : "View Details"}
                    <HiChevronDown size={15} />
                  </button>
                  <div className={`cert-details ${openIndex === index ? "open" : ""}`}>
                    <ul>
                      {cert.details.map((point, i) => (
                        <li key={i}>
                          <span className="bullet" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Count strip */}
        {/* <div className="cert-count-strip">
          <span>{certs.length}</span> Certifications Earned & Counting
        </div> */}

      </section>
    </>
  );
}

export default Certifications;
