// import React from "react";
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaReact,
//   FaNodeJs,
//   FaGithub,
// } from "react-icons/fa";
// import {
//   SiRedux,
//   SiTailwindcss,
//   SiBootstrap,
//   SiExpress,
//   SiMongodb,
//   SiPostman,
//   SiNpm,
//   SiNextdotjs 
// } from "react-icons/si";
// import { FaCogs } from "react-icons/fa";               
// import { MdSettingsSuggest } from "react-icons/md";  
// import { AiOutlineCluster } from "react-icons/ai";    
// import { RiShieldCheckFill } from "react-icons/ri";
// import { VscVscode } from "react-icons/vsc";

// const Skills = () => {
//   return (
//     <section
//       id="skills"
//       className="py-16 px-6 md:px-16 
//       bg-gradient-to-br from-gray-900 via-gray-700 to-gray-800 
//       text-white"
//     >
//       <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-blue-300 ">
//         <SkillCard title="Frontend">
//           <SkillItem icon={<FaHtml5 />} label="HTML" />
//           <SkillItem icon={<FaCss3Alt />} label="CSS" />
//           <SkillItem icon={<FaJs />} label="JavaScript" />
//           <SkillItem icon={<FaReact />} label="React.js" />
//           <SkillItem icon={<SiNextdotjs />} label="Next.js" />
//           <SkillItem icon={<SiRedux />} label="Redux / Context API" />
//           <SkillItem icon={<SiTailwindcss />} label="Tailwind CSS" />
//           <SkillItem icon={<SiBootstrap />} label="Bootstrap" />
//         </SkillCard>

//         <SkillCard title="Backend">
//           <SkillItem icon={<FaNodeJs />} label="Node.js" />
//           <SkillItem icon={<SiExpress />} label="Express.js" />

//           {/* Additional Backend Concepts */}
//           <SkillItem icon={<FaCogs />} label="RESTful API Creation" />
//           <SkillItem icon={<MdSettingsSuggest />} label="Middleware" />
//           <SkillItem icon={<AiOutlineCluster />} label="Routing" />
//           <SkillItem icon={<RiShieldCheckFill />} label="Auth & JWT" />
//         </SkillCard>

//         <SkillCard title="Database">
//           <SkillItem icon={<SiMongodb />} label="MongoDB" />
//         </SkillCard>

//         <SkillCard title="Tools">
//           <SkillItem icon={<FaGithub />} label="Git & GitHub" />
//           <SkillItem icon={<VscVscode />} label="VS Code" />
//           <SkillItem icon={<SiPostman />} label="Postman" />
//           <SkillItem icon={<SiNpm />} label="npm" />
//         </SkillCard>
//       </div>
//     </section>
//   );
// };

// const SkillCard = ({ title, children }) => (
//   <div
//     className="
//       backdrop-blur-xl bg-white/5 border border-white/10
//       rounded-2xl p-6 shadow-md 
//       transition-all duration-500 
//       hover:bg-white/10 
//       hover:border-blue-400/40
//       hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]
//       hover:scale-[1.01]
//     "
//   >
//     <h3 className="text-2xl font-semibold mb-4">{title}</h3>
//     <div className="space-y-3">{children}</div>
//   </div>
// );

// const SkillItem = ({ icon, label }) => (
//   <div
//     className="
//       flex items-center gap-3 p-3 
//       rounded-xl border border-white/10 
//       bg-white/5 backdrop-blur-md 
//       shadow-sm transition-all duration-300 
//       hover:bg-white/10 
//       hover:border-blue-400/40
//       hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]
//       hover:scale-[1.01]
//     "
//   >
//     <span className="text-2xl">{icon}</span>
//     <p className="text-lg">{label}</p>
//   </div>
// );

// export default Skills;

import React, { useState } from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaNodeJs, FaGithub, FaCogs,
} from "react-icons/fa";
import {
  SiRedux, SiTailwindcss, SiBootstrap,
  SiExpress, SiMongodb, SiPostman,
  SiNpm, SiNextdotjs,
} from "react-icons/si";
import { MdSettingsSuggest } from "react-icons/md";
import { AiOutlineCluster } from "react-icons/ai";
import { RiShieldCheckFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Nunito:wght@400;500;600;700;800&display=swap');

  .skills-section {
    font-family: 'Nunito', sans-serif;
    background: linear-gradient(135deg, #0d1117 0%, #111827 50%, #0d1117 100%);
    position: relative;
    overflow: hidden;
  }

  .skills-section::before {
    content: '';
    position: absolute;
    top: -160px;
    right: -160px;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 65%);
    pointer-events: none;
  }

  .skills-section::after {
    content: '';
    position: absolute;
    bottom: -120px;
    left: -120px;
    width: 420px;
    height: 420px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 65%);
    pointer-events: none;
  }

  /* Header */
  .skills-eyebrow {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 12px;
  }

  .skills-eyebrow-line {
    width: 28px;
    height: 1.5px;
    background: #6366f1;
    border-radius: 2px;
  }

  .skills-eyebrow span {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #818cf8;
  }

  .skills-title {
    font-family: 'Outfit', sans-serif;
    font-size: clamp(1.9rem, 5vw, 3rem);
    font-weight: 800;
    color: #f1f5f9;
    letter-spacing: -0.03em;
    text-align: center;
    margin-bottom: 16px;
  }

  .skills-title span {
    color: #818cf8;
    position: relative;
    display: inline-block;
  }

  .skills-title span::after {
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

  .skills-subtitle {
    text-align: center;
    font-size: 14px;
    color: #64748b;
    font-weight: 500;
    margin-bottom: 52px;
  }

  /* Tab bar */
  .skills-tabs {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 44px;
  }

  .skills-tab {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 9px 20px;
    border-radius: 100px;
    font-size: 12.5px;
    font-weight: 700;
    letter-spacing: 0.06em;
    cursor: pointer;
    border: 1px solid rgba(99,102,241,0.18);
    background: transparent;
    color: #64748b;
    transition: all 0.22s ease;
    font-family: 'Nunito', sans-serif;
  }

  .skills-tab:hover {
    border-color: rgba(99,102,241,0.4);
    color: #c7d2fe;
    background: rgba(99,102,241,0.06);
  }

  .skills-tab.active {
    background: #6366f1;
    border-color: #6366f1;
    color: #fff;
    box-shadow: 0 0 20px rgba(99,102,241,0.4);
  }

  .skills-tab .tab-icon {
    font-size: 14px;
    display: flex;
    align-items: center;
  }

  /* Skills panel */
  .skills-panel {
    max-width: 860px;
    margin: 0 auto;
    animation: fadeUp 0.3s ease;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* Category label */
  .panel-label {
    font-family: 'Outfit', sans-serif;
    font-size: 1.3rem;
    font-weight: 700;
    color: #e2e8f0;
    margin-bottom: 6px;
    letter-spacing: -0.01em;
  }

  .panel-desc {
    font-size: 13px;
    color: #475569;
    margin-bottom: 28px;
    font-weight: 500;
  }

  /* Skills grid */
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  @media (min-width: 480px) {
    .skills-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 768px) {
    .skills-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  /* Skill chip */
  .skill-chip {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 20px 12px;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(99,102,241,0.12);
    border-radius: 18px;
    transition: all 0.28s cubic-bezier(0.34,1.56,0.64,1);
    position: relative;
    overflow: hidden;
    cursor: default;
  }

  .skill-chip::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(99,102,241,0.07) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.25s ease;
    pointer-events: none;
  }

  .skill-chip:hover {
    transform: translateY(-5px) scale(1.03);
    border-color: rgba(99,102,241,0.4);
    background: rgba(99,102,241,0.08);
    box-shadow: 0 12px 32px rgba(99,102,241,0.2), 0 0 0 1px rgba(99,102,241,0.1);
  }

  .skill-chip:hover::before {
    opacity: 1;
  }

  .skill-icon-wrap {
    width: 44px;
    height: 44px;
    border-radius: 13px;
    background: rgba(99,102,241,0.1);
    border: 1px solid rgba(99,102,241,0.18);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    color: #818cf8;
    transition: all 0.25s ease;
    flex-shrink: 0;
  }

  .skill-chip:hover .skill-icon-wrap {
    background: rgba(99,102,241,0.2);
    box-shadow: 0 0 16px rgba(99,102,241,0.4);
    color: #c7d2fe;
  }

  .skill-label {
    font-size: 12px;
    font-weight: 700;
    color: #94a3b8;
    text-align: center;
    line-height: 1.3;
    transition: color 0.2s ease;
  }

  .skill-chip:hover .skill-label {
    color: #c7d2fe;
  }

  /* Stats row */
  .skills-stats {
    max-width: 860px;
    margin: 48px auto 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  @media (min-width: 640px) {
    .skills-stats {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .stat-card {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(99,102,241,0.12);
    border-radius: 16px;
    padding: 20px 16px;
    text-align: center;
    transition: all 0.25s ease;
  }

  .stat-card:hover {
    border-color: rgba(99,102,241,0.3);
    background: rgba(99,102,241,0.06);
    box-shadow: 0 8px 24px rgba(99,102,241,0.15);
  }

  .stat-number {
    font-family: 'Outfit', sans-serif;
    font-size: 1.9rem;
    font-weight: 800;
    color: #818cf8;
    letter-spacing: -0.04em;
    line-height: 1;
    margin-bottom: 4px;
  }

  .stat-label {
    font-size: 11.5px;
    font-weight: 600;
    color: #475569;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
`;

const categories = [
  {
    id: "frontend",
    label: "Frontend",
    desc: "Building responsive, modern UIs",
    icon: <FaReact />,
    skills: [
      { icon: <FaHtml5 />, label: "HTML5" },
      { icon: <FaCss3Alt />, label: "CSS3" },
      { icon: <FaJs />, label: "JavaScript" },
      { icon: <FaReact />, label: "React.js" },
      { icon: <SiNextdotjs />, label: "Next.js" },
      { icon: <SiRedux />, label: "Redux" },
      { icon: <SiTailwindcss />, label: "Tailwind CSS" },
      { icon: <SiBootstrap />, label: "Bootstrap" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    desc: "Scalable APIs and server logic",
    icon: <FaNodeJs />,
    skills: [
      { icon: <FaNodeJs />, label: "Node.js" },
      { icon: <SiExpress />, label: "Express.js" },
      { icon: <FaCogs />, label: "REST APIs" },
      { icon: <MdSettingsSuggest />, label: "Middleware" },
      { icon: <AiOutlineCluster />, label: "Routing" },
      { icon: <RiShieldCheckFill />, label: "JWT Auth" },
    ],
  },
  {
    id: "database",
    label: "Database",
    desc: "Data modelling and storage",
    icon: <SiMongodb />,
    skills: [
      { icon: <SiMongodb />, label: "MongoDB" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    desc: "Dev workflow and productivity",
    icon: <VscVscode />,
    skills: [
      { icon: <FaGithub />, label: "Git & GitHub" },
      { icon: <VscVscode />, label: "VS Code" },
      { icon: <SiPostman />, label: "Postman" },
      { icon: <SiNpm />, label: "npm" },
    ],
  },
];

const stats = [
  { number: "8+", label: "Frontend Skills" },
  { number: "6+", label: "Backend Skills" },
  { number: "4+", label: "Dev Tools" },
  { number: "3+", label: "Projects Built" },
];

const Skills = () => {
  const [active, setActive] = useState("frontend");
  const current = categories.find((c) => c.id === active);

  return (
    <>
      <style>{styles}</style>
      <section id="skills" className="skills-section py-20 px-4 sm:px-8 md:px-16">

        {/* Header */}
        <div className="skills-eyebrow">
          <div className="skills-eyebrow-line" />
          <span>What I Work With</span>
          <div className="skills-eyebrow-line" />
        </div>
        <h2 className="skills-title">
          Technical <span>Skills</span>
        </h2>
        <p className="skills-subtitle">
          Technologies and tools I use to build full-stack applications
        </p>

        {/* Tab bar */}
        <div className="skills-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`skills-tab ${active === cat.id ? "active" : ""}`}
              onClick={() => setActive(cat.id)}
            >
              <span className="tab-icon">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div key={active} className="skills-panel">
          <p className="panel-label">{current.label}</p>
          <p className="panel-desc">{current.desc}</p>

          <div className="skills-grid">
            {current.skills.map((skill, i) => (
              <div key={i} className="skill-chip">
                <div className="skill-icon-wrap">{skill.icon}</div>
                <span className="skill-label">{skill.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="skills-stats">
          {stats.map((s, i) => (
            <div key={i} className="stat-card">
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

      </section>
    </>
  );
};

export default Skills;
