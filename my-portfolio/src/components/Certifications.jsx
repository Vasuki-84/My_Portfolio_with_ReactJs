import React from "react";

function Certifications() {
  const certs = [
    {
      title: "Full Stack Development (MERN) Certification",
      provider: "Entri Elevate",
      year: "2025",
      details: [
        "Built responsive and user-friendly websites using HTML, CSS, JavaScript, React, and Bootstrap.",
        "Developed back-end systems with Node.js, Express.js, MongoDB, and implemented JWT-based authentication for secure user management.",
        "Deployed full-stack applications using GitHub for version control, Postman for API testing, and hosting platforms like Vercel, Netlify, and Render."
      ],
    },
    {
      title: "Full Stack Web Development (MERN)",
      provider: "Illinois Tech, USA (Present)",
      year: "2025",
      details: [],
    },
    {
      title: "NSDC Certification",
      provider: "",
      year: "",
      details: [
        "Built responsive UI and user-friendly layouts.",
        "Worked with modern JavaScript and React fundamentals.",
        "Gained hands-on exposure to real-world frontend and backend workflows."
      ],
    },
  ];

  return (
    <section className="px-6 md:px-20 py-20 bg-gray-50" id="certifications">
      <h2 className="text-4xl font-bold text-center mb-12">
        My <span className="text-blue-600">Certifications</span>
      </h2>

      <div className="max-w-5xl mx-auto space-y-10">
        {certs.map((cert, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition duration-300"
          >
            {/* Title + Year */}
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold">{cert.title}</h3>
              <span className="text-gray-500 font-medium">{cert.year}</span>
            </div>

            {/* Provider */}
            {cert.provider && (
              <p className="text-gray-600 mt-1">Issued by: {cert.provider}</p>
            )}

            {/* Bullet Points */}
            {cert.details.length > 0 && (
              <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-700">
                {cert.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
