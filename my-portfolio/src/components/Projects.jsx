import React, { useState } from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiNodedotjs,
} from "react-icons/si";
import { IoClose } from "react-icons/io5";

import movieImg from "../assets/movie.jpeg";
import ecommerceImg from "../assets/ecommerce.jpg";
import quizImg from "../assets/quiz.jpg";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);

  const projects = [
    {
      title: "Quiz Master",
      description: "An interactive quiz app with score tracking and modern UI.",
      longDescription:
        "This quiz application allows users to answer multiple MCQ questions, shows results, tracks score, and provides smooth UI transitions.",
      image: quizImg,
      tech: [<FaHtml5 />, <FaCss3Alt />, <FaJs />, <FaReact />],
      live: "https://quizmastery-flame.vercel.app/",
      github: "https://github.com/Vasuki-84/QuizMaster-Backend.git",
    },

    {
      title: "Movie Review & Rating Platform",
      description:
        "A full-stack platform where users can explore movies, post reviews, and rate films.",
      longDescription:
        "Built with React, Node.js, Express, and MongoDB. Users can browse movies, submit ratings, write reviews, and manage authentication.",
      image: movieImg,
      tech: [<FaReact />, <SiMongodb />, <SiExpress />, <SiNodedotjs />],
      live: "https://movie-review-and-rating-platform.netlify.app/",
      frontend:
        "https://github.com/Vasuki-84/Movies_Review_Platform_Frontend",
      backend:
        "https://github.com/Vasuki-84/Movies_Review_Platform_Backend",
    },

    {
      title: "E-Commerce Website",
      description:
        "A responsive online shopping UI with cart system and clean UI.",
      longDescription:
        "Built using HTML, CSS, and JavaScript.",
      image: ecommerceImg,
      tech: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
      live: "https://vasuki-84.github.io/e-Commerce_Website/",
      github: "https://github.com/Vasuki-84/e-Commerce_Website.git",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-16 bg-white text-black">
      <h2 className="text-4xl font-bold text-center mb-12">
        My <span className="text-blue-600">Projects</span>
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <img src={project.image} className="w-full h-48 object-cover" />

            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>

              {/* TECH */}
              <div className="flex gap-3 text-xl">
                {project.tech.map((icon, i) => (
                  <span
                    key={i}
                    className="p-2 bg-gray-100 rounded-lg border hover:shadow"
                  >
                    {icon}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-3 mt-4 items-center justify-between">

                {/* View Details */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-black transition"
                >
                  View Details
                </button>

                {/* Code button OR dropdown */}
                {project.frontend && project.backend ? (
                  <div className="relative">
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === index ? null : index
                        )
                      }
                      className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100"
                    >
                      <FaGithub /> Code
                    </button>

                   {openDropdown === index && (
  <div
    className="
      absolute z-50 bg-white  rounded-xl shadow-xl overflow-hidden
      w-40
      right-0
      md:right-0
      sm:right-0
      left-0 sm:left-auto
      bottom-full mb-2
    "
  >
    <a
      href={project.frontend}
      target="_blank"
      rel="noopener noreferrer"
      className="block px-4 py-3 text-sm hover:bg-blue-50 hover:text-blue-600 transition"
    >
      Frontend
    </a>

    <a
      href={project.backend}
      target="_blank"
      rel="noopener noreferrer"
      className="block px-4 py-3 text-sm hover:bg-blue-50 hover:text-blue-600 transition"
    >
      Backend
    </a>
  </div>
)}
                  </div>
                ) : (
                  project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100"
                    >
                      <FaGithub /> Code
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full relative">

            <button
              className="absolute top-4 right-4 text-2xl"
              onClick={() => setSelectedProject(null)}
            >
              <IoClose />
            </button>

            <img
              src={selectedProject.image}
              className="w-full h-52 object-cover rounded-lg mb-4"
            />

            <h2 className="text-3xl font-bold mb-2">
              {selectedProject.title}
            </h2>

            <p className="text-gray-700 mb-4">
              {selectedProject.longDescription}
            </p>

            <div className="flex justify-between">
              <a
                href={selectedProject.live}
                target="_blank"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Live Demo
              </a>

              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  className="px-4 py-2 border rounded-lg hover:bg-gray-100"
                >
                  <FaGithub /> Code
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