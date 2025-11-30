

import React, { useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatusMessage("Sending...");

    emailjs.sendForm(
      "service_3h629ww",       // service ID
      "template_lpdwgfx",      // template ID
      form.current,
      "hBXeUroOdPgSEMIkv"     // public key

    ).then(
      (result) => {
        setStatusMessage("✅ Message sent successfully!");
        e.target.reset();
        setTimeout(() => setStatusMessage(""), 5000); // hide message after 5s
      },
      (error) => {
        setStatusMessage("❌ Oops! Something went wrong.");
        console.error("EmailJS error:", error.text);
        setTimeout(() => setStatusMessage(""), 5000); // hide message after 5s
      }
    );
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-b from-[#0a0f1f] to-[#0f172a] text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        Contact <span className="text-blue-400">Me</span>
      </h2>

      <div className="max-w-3xl mx-auto">
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
          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <input
              type="text"
              name="from_name"        // match EmailJS template variable
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-blue-400 outline-none"
              required
            />

            <input
              type="email"
              name="from_email"       // match EmailJS template variable
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-blue-400 outline-none"
              required
            />

            <textarea
              name="message"          // already matches template
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-blue-400 outline-none"
              required
            ></textarea>

            <button
              type="submit"
              className="
                w-full 
                py-3 
                rounded-lg 
                bg-blue-500 
                hover:bg-blue-600 
                font-semibold 
                transition
              "
            >
              Send Message
            </button>
          </form>

          {/* Status message */}
          {statusMessage && (
            <p className="mt-4 text-center text-white">{statusMessage}</p>
          )}

          {/* Download CV Button */}
          <div className="text-center mt-8">
            <a
              href="/Vasuki_T_FullStackDeveloper.pdf"
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

// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";

// export default function TestEmail() {
//   const form = useRef();
//   const send = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await emailjs.sendForm("service_3h629ww","template_lpdwgfx",form.current,"hBXeUroOdPgSEMIkv");
//       console.log("Success:", res);
//       alert("sent");
//     } catch (err) {
//       console.error("EmailJS error full object:", err);
//       alert("Error: " + (err?.text || JSON.stringify(err)));
//     }
//   };

//   return (
//     <form ref={form} onSubmit={send}>
//       <input name="from_name" placeholder="Name" />
//       <input name="from_email" placeholder="Email" />
//       <textarea name="message" placeholder="Message" />
//       <button type="submit">Send</button>
//     </form>
//   );
// }


