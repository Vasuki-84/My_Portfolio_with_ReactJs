import React from "react";
import codingGirl from "../assets/girl.png"; // your image file

function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-20 py-20 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={codingGirl}
            alt="Coding Girl"
            className="w-72 md:w-96 rounded-xl shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Hi, I'm <span className="font-semibold text-gray-900">Vasuki</span>, a passionate <strong>MERN Stack Developer</strong> fresher who loves building clean, responsive, and user-friendly web applications.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            I work with MongoDB, Express.js, React.js and Node.js to create full-stack applications, always focusing on writing efficient and modern code.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            I am actively looking for opportunities to learn, grow, and contribute to real-world projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
