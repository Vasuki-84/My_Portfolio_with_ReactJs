import ctsLogo from "../assets/cts.jpg";
import tetroLogo from "../assets/tetro.jpeg";
import entriLogo from "../assets/entri.png";
import { FaCheckCircle } from "react-icons/fa";

const experiences = [
  {
    company: "Cognizant Technology Solutions (CTS)",
    role: "Programmer Trainee",
    duration: "Dec 2022 - May 2023",
    logo: ctsLogo,
    description:
      "Worked on foundational programming, debugging, and technical tasks that strengthened analytical thinking, clean coding habits, and software development practices.",
    skills: [
      "Understanding of Web Applications",
      "API Handling Basics",
      "Git & GitHub",
      "SDLC Understanding",
      "Error Handling",
      "HTML, CSS, JavaScript (Basics)",
    ],
  },
  {
    company: "Tetro Infotech Private Limited",
    role: "Full Stack Developer Intern",
    duration: "Mar 2026 - Present",
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
    duration: "Mar 2026 - Apr 2026",
     logo: entriLogo,
    description:
      "Developed secure backend services with authentication, API testing, and database integration for production-ready applications.",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "API Testing",
      "Backend Development",
    ],
  },
];

const Experience = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        Professional Experience
      </h2>

      <div className="space-y-10 max-w-5xl mx-auto">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-10 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-[0_0_30px_rgba(0,123,255,0.15)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(0,132,255,0.4)] hover:-translate-y-2"
          >
            <div className="flex items-center gap-5 mb-6">
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-16 h-16 object-contain rounded-4xl shadow-md bg-white/20 p-2"
              />

              <div>
                <h3 className="text-2xl font-semibold text-blue-300">
                  {exp.company}
                </h3>
                <p className="text-gray-300 text-sm">{exp.role}</p>
                <p className="text-gray-400 text-xs">{exp.duration}</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              {exp.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {exp.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="flex items-center gap-3 p-4 bg-white/10 border border-white/20 rounded-xl backdrop-blur-xl shadow-md transition-all duration-300 hover:bg-white/20 hover:shadow-[0_0_20px_rgba(0,132,255,0.4)]"
                >
                  <FaCheckCircle className="text-blue-400" />
                  <p className="text-gray-300">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;