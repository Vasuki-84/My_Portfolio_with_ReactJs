import React, { useState } from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub } from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
} from "react-icons/si";
import { IoClose } from "react-icons/io5";
import crmImg from "../assets/crmImg.jpeg";
import ecommerceImg from "../assets/ecommerce.jpg";
import quizImg from "../assets/quiz.jpg";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [openCodeIndex, setOpenCodeIndex] = useState(null);

  const projects = [
    {
      title: "CRM System Application",
      description:
        "A full-stack CRM application to manage customers, leads, and business workflows.",
      longDescription:
        "This CRM system provides a modern UI with customer management, lead tracking, and dashboard features. Built using React for the frontend, Node.js & Express for the backend, and styled with Tailwind CSS.",
      image: crmImg,
      tech: [
        <FaReact />,
        <FaJs />,
        <SiNodedotjs />,
        <SiMongodb />,
        <SiTailwindcss />,
        <SiExpress />,
      ],
      live: "https://crmapplication.netlify.app/",
      githubFrontend: "https://github.com/Vasuki-84/CRM_System_Frontend.git",
      githubBackend: "https://github.com/Vasuki-84/CRM_System_backend.git",
    },

    {
      title: "E-Commerce Website",
      description:
        "A responsive online shopping UI with cart system and clean UI.",
      longDescription:
        "Users can browse products, view details, add to cart, and navigate smoothly. Built using HTML, CSS, and JavaScript.",
      image: ecommerceImg,
      tech: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
      live: "https://vasuki-84.github.io/e-Commerce_Website/",
      github: "https://github.com/Vasuki-84/e-Commerce_Website.git",
    },

    {
      title: "Quiz Application",
      description: "An interactive quiz app with score tracking and modern UI.",
      longDescription:
        "This quiz application allows users to answer multiple MCQ questions, shows results, tracks score, and provides smooth UI transitions. Built using HTML, CSS, and JavaScript.",
      image: quizImg,
      tech: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaReact />],
      live: "https://vasuki-84.github.io/Quiz_Application/",
      github: "https://github.com/Vasuki-84/React-Quiz-App.git",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-16 bg-white text-black">
      <h2 className="text-4xl font-bold text-center mb-12">
        My <span className="text-blue-600">Projects</span>
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-13">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden 
                       hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <img src={project.image} className="w-full h-48 object-cover" />

            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>

              {/* Tech Icons */}
              <div className="flex gap-3 text-xl ">
                {project.tech.map((icon, i) => (
                  <span
                    key={i}
                    className="p-2 bg-gray-100 rounded-lg border border-gray-200  hover:outline outline-blue-400 hover:shadow-lg"
                  >
                    {icon}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-black transition"
                >
                  View Details
                </button>

                {/* <a
                  href={project.github}
                  className="flex items-center gap-2 px-4 py-2 border border-blue-600 rounded-lg hover:bg-blue-300 transition"
                  target="_blank"
                >
                  <FaGithub /> Code
                </a> */}

                <div className="relative">
                  {/* CRM project (Frontend + Backend) */}
                  {project.githubFrontend || project.githubBackend ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenCodeIndex(
                            openCodeIndex === index ? null : index
                          )
                        }
                        className="flex items-center gap-2 px-4 py-2 border border-blue-600 rounded-lg hover:bg-blue-300 transition"
                      >
                        <FaGithub /> Code
                      </button>

                      {/* Dropdown buttons */}
                      {openCodeIndex === index && (
                        <div className="absolute right-0 bottom-full mb-2 bg-white border rounded-xl shadow-lg p-3 flex flex-col gap-2 z-20">
                          {project.githubFrontend && (
                            <a
                              href={project.githubFrontend}
                              target="_blank"
                              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-100 transition"
                            >
                              <FaGithub /> Frontend
                            </a>
                          )}

                          {project.githubBackend && (
                            <a
                              href={project.githubBackend}
                              target="_blank"
                              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-green-100 transition"
                            >
                              <FaGithub /> Backend
                            </a>
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    /* Normal projects */
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 border border-blue-600 rounded-lg hover:bg-blue-300 transition"
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-lg w-full relative animate-fadeIn">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-2xl hover:text-red-600"
              onClick={() => setSelectedProject(null)}
            >
              <IoClose />
            </button>

            {/* Popup Content */}
            <img
              src={selectedProject.image}
              className="w-full h-52 object-cover rounded-xl mb-4"
            />

            <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
            <p className="text-gray-700 mb-4">
              {selectedProject.longDescription}
            </p>

            <div className="flex gap-3 text-2xl mb-6">
              {selectedProject.tech.map((icon, i) => (
                <span
                  key={i}
                  className="p-2 bg-gray-100 rounded-lg border border-gray-300"
                >
                  {icon}
                </span>
              ))}
            </div>

            <div className="flex justify-between">
              <a
                href={selectedProject.live}
                target="_blank"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Live Demo
              </a>
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
                >
                  <FaGithub /> Code
                </a>
              )}

              {/* CRM Frontend */}
              {selectedProject.githubFrontend && (
                <a
                  href={selectedProject.githubFrontend}
                  target="_blank"
                  className="flex items-center gap-2 px-3 py-2 border border-blue-600 rounded-lg hover:bg-blue-300 transition"
                >
                  <FaGithub /> Frontend
                </a>
              )}

              {/* CRM Backend */}
              {selectedProject.githubBackend && (
                <a
                  href={selectedProject.githubBackend}
                  target="_blank"
                  className="flex items-center gap-2 px-3 py-2 border border-green-600 rounded-lg hover:bg-green-300 transition"
                >
                  <FaGithub /> Backend
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
