import React, { useState } from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiNodedotjs } from "react-icons/si";
import { IoClose } from "react-icons/io5";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Recipe Finder & Organizer App",
      description:
        "A smart app to find recipes, save favorites, and organize ingredients.",
      longDescription:
        "This application has a modern UI with recipe search, filtering, bookmarking, and ingredient management. Built using React and Tailwind CSS.",
      image: "/projects/recipe.png",
      tech: [<FaReact />, <SiTailwindcss />, <FaJs />],
      live: "#",
      github: "https://github.com/Vasuki-84/Recipe-Finder-and-Organizer-App.git",
    },

    {
      title: "E-Commerce Website",
      description:
        "A responsive online shopping UI with cart system and clean UI.",
      longDescription:
        "Users can browse products, view details, add to cart, and navigate smoothly. Built using HTML, CSS, and JavaScript.",
      image: "/projects/ecommerce.png",
      tech: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
      live: "#",
      github: "https://github.com/Vasuki-84/e-Commerce_Website.git",
    },

    {
      title: "Weather Application",
      description:
        "A real-time weather tracking app using OpenWeather API.",
      longDescription:
        "Shows temperature, humidity, wind speed, and weather conditions in real-time with a neat UI.",
      image: "/projects/weather.png",
      tech: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
      live: "#",
      github: "https://github.com/Vasuki-84/weather_Application.git",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-16 bg-white text-black">
      <h2 className="text-4xl font-bold text-center mb-12">
        My <span className="text-blue-600">Projects</span>
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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

                <a
                  href={project.github}
                  className="flex items-center gap-2 px-4 py-2 border border-blue-600 rounded-lg hover:bg-blue-300 transition"
                  target="_blank"
                >
                  <FaGithub /> Code
                </a>
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
            <p className="text-gray-700 mb-4">{selectedProject.longDescription}</p>

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

              <a
                href={selectedProject.github}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
              >
                <FaGithub /> Code
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
