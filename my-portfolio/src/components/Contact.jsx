import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-b from-[#0a0f1f] to-[#0f172a] text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Contact <span className="text-blue-400">Me</span>
      </h2>

      <div className="max-w-3xl mx-auto">
        {/* Glassmorphism Card */}
        <div className="
          bg-white/5 
          backdrop-blur-xl 
          border border-white/10 
          rounded-2xl 
          p-10 
          shadow-lg 
          transition 
          hover:shadow-[0_0_25px_5px_rgba(0,123,255,0.4)]
        ">
          
          <form className="space-y-5">
            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-blue-400 outline-none"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-blue-400 outline-none"
            />

            {/* Message */}
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-blue-400 outline-none"
            ></textarea>

            {/* Submit Button */}
            <button className="
              w-full 
              py-3 
              rounded-lg 
              bg-blue-500 
              hover:bg-blue-600 
              font-semibold 
              transition
            ">
              Send Message
            </button>
          </form>

          {/* Download CV Button */}
          <div className="text-center mt-8">
            <a
              href="/Vasuki-CV.pdf"
              download
              className="
                inline-block 
                bg-blue-600 
                hover:bg-blue-700 
                px-6 
                py-3 
                rounded-lg 
                font-semibold 
                transition 
                shadow-md 
                hover:shadow-[0_0_20px_3px_rgba(0,123,255,0.5)]
              "
            >
              Download My CV
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-8 text-3xl mt-8">
            <a className="hover:text-blue-400 transition">
              <FaGithub />
            </a>
            <a className="hover:text-blue-400 transition">
              <FaLinkedin />
            </a>
            <a className="hover:text-blue-400 transition">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
