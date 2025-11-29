import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiNpm,
} from "react-icons/si";
import { FaCogs } from "react-icons/fa";               
import { MdSettingsSuggest } from "react-icons/md";  
import { AiOutlineCluster } from "react-icons/ai";    
import { RiShieldCheckFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 px-6 md:px-16 
      bg-gradient-to-br from-gray-900 via-gray-700 to-gray-800 
      text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-blue-300 ">
        <SkillCard title="Frontend">
          <SkillItem icon={<FaHtml5 />} label="HTML" />
          <SkillItem icon={<FaCss3Alt />} label="CSS" />
          <SkillItem icon={<FaJs />} label="JavaScript" />
          <SkillItem icon={<FaReact />} label="React.js" />
          <SkillItem icon={<SiRedux />} label="Redux / Context API" />
          <SkillItem icon={<SiTailwindcss />} label="Tailwind CSS" />
          <SkillItem icon={<SiBootstrap />} label="Bootstrap" />
        </SkillCard>

        <SkillCard title="Backend">
          <SkillItem icon={<FaNodeJs />} label="Node.js" />
          <SkillItem icon={<SiExpress />} label="Express.js" />

          {/* Additional Backend Concepts */}
          <SkillItem icon={<FaCogs />} label="RESTful API Creation" />
          <SkillItem icon={<MdSettingsSuggest />} label="Middleware" />
          <SkillItem icon={<AiOutlineCluster />} label="Routing" />
          <SkillItem icon={<RiShieldCheckFill />} label="Auth & JWT" />
        </SkillCard>

        <SkillCard title="Database">
          <SkillItem icon={<SiMongodb />} label="MongoDB" />
        </SkillCard>

        <SkillCard title="Tools">
          <SkillItem icon={<FaGithub />} label="Git & GitHub" />
          <SkillItem icon={<VscVscode />} label="VS Code" />
          <SkillItem icon={<SiPostman />} label="Postman" />
          <SkillItem icon={<SiNpm />} label="npm" />
        </SkillCard>
      </div>
    </section>
  );
};

const SkillCard = ({ title, children }) => (
  <div
    className="
      backdrop-blur-xl bg-white/5 border border-white/10
      rounded-2xl p-6 shadow-md 
      transition-all duration-500 
      hover:bg-white/10 
      hover:border-blue-400/40
      hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]
      hover:scale-[1.01]
    "
  >
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <div className="space-y-3">{children}</div>
  </div>
);

const SkillItem = ({ icon, label }) => (
  <div
    className="
      flex items-center gap-3 p-3 
      rounded-xl border border-white/10 
      bg-white/5 backdrop-blur-md 
      shadow-sm transition-all duration-300 
      hover:bg-white/10 
      hover:border-blue-400/40
      hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]
      hover:scale-[1.01]
    "
  >
    <span className="text-2xl">{icon}</span>
    <p className="text-lg">{label}</p>
  </div>
);

export default Skills;
