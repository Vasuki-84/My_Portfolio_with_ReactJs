import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-white shadow-lg mt-20 py-10 border-t">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Name */}
        <h2 className="text-2xl font-bold text-gray-900">
          Vasuki <span className="text-blue-500">Thangaraj</span>
        </h2>

        {/* Short Line */}
        <p className="text-gray-500 mt-2">
          MERN Stack Developer | Building modern & user-friendly applications
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-3xl mt-6">
          <a
            href="https://github.com/"
            className="p-3 rounded-xl bg-gray-100 shadow hover:shadow-md hover:text-blue-500 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/"
            className="p-3 rounded-xl bg-gray-100 shadow hover:shadow-md hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:iamvasukithangaraj@example.com"
            className="p-3 rounded-xl bg-gray-100 shadow hover:shadow-md hover:text-blue-500 transition"
          >
            <MdEmail />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t mt-8 pt-4"></div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Vasuki — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
