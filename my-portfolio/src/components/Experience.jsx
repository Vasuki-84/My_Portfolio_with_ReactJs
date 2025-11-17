import ctsLogo from "../assets/cts.jpg";
import { FaCheckCircle } from "react-icons/fa";

const Experience = () => {
  return (
    <section
      className="
      py-16 px-6 md:px-16 
      bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 
      text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Professional Experience
      </h2>

      {/* MAIN CARD */}
      <div
        className="
        max-w-4xl mx-auto 
        p-10 
        rounded-3xl 
        bg-white/10 
        border border-white/20 
        backdrop-blur-xl
        shadow-[0_0_30px_rgba(0,123,255,0.15)]
        transition-all duration-300 
        hover:shadow-[0_0_50px_rgba(0,132,255,0.4)]
        hover:-translate-y-2
        animate-slideUp"
      >
        {/* Company Row */}
        <div className="flex items-center gap-5 mb-6">
          <img
            src={ctsLogo}
            alt="Cognizant"
            className="w-16 h-16 object-contain rounded-xl shadow-md bg-white/20 p-2 backdrop-blur-lg"
          />

          <div>
            <h3 className="text-2xl font-semibold text-blue-300">
              Cognizant Technology Solutions (CTS)
            </h3>
            <p className="text-gray-300 text-sm">Programmer Trainee</p>
            <p className="text-gray-300 text-xs">Dec 2022 - May 2023</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-6 leading-relaxed">
          Worked on foundational programming, debugging, and technical tasks
          that helped me build strong analytical thinking, clean coding habits,
          and a solid foundation for MERN stack development.
        </p>

        {/* SKILLS   */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "API Handling Basics",
            "Git & GitHub",
            "Clean Code Practices",
            "Error handling",
            "Fast Learning Ability",
          ].map((skill, index) => (
            <div
              key={index}
              className="
              flex items-center gap-3 
              p-4 
              bg-white/10 
              border border-white/20 
              rounded-xl 
              backdrop-blur-xl
              shadow-md
              transition-all duration-300 
              hover:bg-white/20 
              hover:shadow-[0_0_20px_rgba(0,132,255,0.4)]"
            >
              <FaCheckCircle className="text-blue-400" />
              <p className="text-gray-300">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
