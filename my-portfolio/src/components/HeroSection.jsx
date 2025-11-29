import React from "react";
import { ReactTyped } from "react-typed";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import myImage from "../assets/myImage.jpg";

function HeroSection() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-8 pt-24
                 bg-gradient-to-br from-gray-800 via-gray-800 to-black text-white"
    >
      {/* Left Side Text */}
      <div className="text-center md:text-left max-w-xl animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-blue-400">Vasuki</span>
        </h1>

        {/* Typing Animation */}
        <h2 className="text-xl md:text-3xl font-semibold text-gray-300 mb-4">
          <ReactTyped
            strings={[
              "Front-End Developer",
              "React JS Developer",
              "Back-End Developer",
              "MERN Stack Developer",
              
            ]}
            typeSpeed={50}
            backSpeed={40}
            loop
          />
        </h2>

        <p className="text-gray-400 mb-6">
          I build beautiful, modern, and responsive web applications using
          React, Tailwind CSS, JavaScript, and creative UI design principles.
        </p>

        {/* Buttons */}
        <div className="flex gap-6 justify-center md:justify-start mb-6">
          <a
            href="#projects"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold text-white transition duration-300"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-blue-400 hover:bg-blue-400 hover:text-gray-900 px-6 py-3 rounded-lg font-semibold transition duration-300"
          >
            Contact Me
          </a>
             {/* Download CV */}
          <a
            href="/Vasuki-CV.pdf"
            download
            className="border border-green-400 text-green-300 hover:bg-green-400 hover:text-black px-6 py-3 rounded-lg font-semibold transition duration-300"
          >
            Download CV
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-6 text-3xl justify-center md:justify-start mt-4">
          <a
            href="https://github.com"
            className="hover:text-blue-400 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            className="hover:text-blue-400 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:iamvasukithangaraj@example.com"
            className="hover:text-blue-400 transition duration-300"
          >
            <MdEmail />
          </a>
        </div>
      </div>

      {/* Right Side - */}
      <div className="relative">
        <img
          src={myImage}
          alt="profile"
          className="w-56 h-56 md:w-72 md:h-72 rounded-full shadow-xl object-cover border-4 border-blue-400
                     animate-floating"
        />
      </div>
    </section>
  );
}

export default HeroSection;
