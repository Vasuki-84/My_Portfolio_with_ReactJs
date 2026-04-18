import React, { useState } from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress, SiNodedotjs } from "react-icons/si";
import { IoClose } from "react-icons/io5";
import { HiArrowUpRight } from "react-icons/hi2";

import movieImg from "../assets/movie.jpeg";
import ecommerceImg from "../assets/ecommerce.jpg";
import quizImg from "../assets/quiz.jpg";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800;900&family=Outfit:wght@400;500;600;700;800&display=swap');

  .projects-section {
    font-family:'Nunito', sans-serif;
    background: #f8f9ff;
    position: relative;
    overflow: hidden;
  }

  .projects-section::before {
    content: '';
    position: absolute;
    top: -120px;
    right: -120px;
    width: 420px;
    height: 420px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%);
    pointer-events: none;
  }

  .projects-section::after {
    content: '';
    position: absolute;
    bottom: -80px;
    left: -80px;
    width: 320px;
    height: 320px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%);
    pointer-events: none;
  }

  .section-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #3b82f6;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
  }

  .section-label::before {
    content: '';
    display: block;
    width: 28px;
    height: 1.5px;
    background: #3b82f6;
    border-radius: 2px;
  }

  .section-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 800;
    color: #0f172a;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  .section-title span {
    color: #3b82f6;
    position: relative;
    display: inline-block;
  }

  .section-title span::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #3b82f6, #6366f1);
    border-radius: 2px;
    opacity: 0.4;
  }

  .project-card {
    background: #ffffff;
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid rgba(59,130,246,0.1);
    position: relative;
    transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease;
  }

  .project-card::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    background: linear-gradient(135deg, rgba(59,130,246,0.04) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    z-index: 1;
  }

  .project-card:hover {
    transform: translateY(-8px) scale(1.01);
    box-shadow: 0 20px 60px rgba(59,130,246,0.18), 0 4px 16px rgba(0,0,0,0.06);
  }

  .project-card:hover::before {
    opacity: 1;
  }

  .card-img-wrapper {
    position: relative;
    overflow: hidden;
    height: 200px;
  }

  .card-img-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94);
  }

  .project-card:hover .card-img-wrapper img {
    transform: scale(1.07);
  }

  .card-img-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(15,23,42,0.55) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.3s ease;
    display: flex;
    align-items: flex-end;
    padding: 16px;
  }

  .project-card:hover .card-img-overlay {
    opacity: 1;
  }

  .live-badge {
    background: rgba(255,255,255,0.15);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,0.25);
    color: #fff;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 5px 12px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    gap: 5px;
    text-decoration: none;
    transition: background 0.2s;
  }

  .live-badge:hover {
    background: rgba(59,130,246,0.5);
  }

  .card-number {
    position: absolute;
    top: 14px;
    right: 14px;
    width: 32px;
    height: 32px;
    background: rgba(255,255,255,0.92);
    backdrop-filter: blur(6px);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Syne', sans-serif;
    font-size: 12px;
    font-weight: 700;
    color: #3b82f6;
    border: 1px solid rgba(59,130,246,0.2);
    z-index: 2;
  }

  .card-body {
    padding: 20px 22px 22px;
    position: relative;
    z-index: 2;
  }

  .card-title {
    font-family: 'Syne', sans-serif;
    font-size: 1.1rem;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 6px;
    letter-spacing: -0.01em;
  }

  .card-desc {
    font-size: 13px;
    color: #64748b;
    line-height: 1.6;
    margin-bottom: 16px;
  }

  .tech-strip {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    margin-bottom: 18px;
  }

  .tech-pill {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 5px 11px;
    background: #f1f5f9;
    border: 1px solid rgba(59,130,246,0.12);
    border-radius: 100px;
    font-size: 12px;
    font-weight: 500;
    color: #475569;
    transition: all 0.2s ease;
  }

  .tech-pill:hover {
    background: #eff6ff;
    border-color: rgba(59,130,246,0.35);
    color: #3b82f6;
    box-shadow: 0 0 10px rgba(59,130,246,0.2);
    transform: translateY(-1px);
  }

  .card-divider {
    height: 1px;
    background: linear-gradient(90deg, rgba(59,130,246,0.15), transparent);
    margin-bottom: 16px;
  }

  .btn-row {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .btn-primary {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 9px 16px;
    background: #3b82f6;
    color: #fff;
    border: none;
    border-radius: 10px;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.25s ease;
    text-decoration: none;
  }

  .btn-primary:hover {
    background: #1d4ed8;
    box-shadow: 0 0 20px rgba(59,130,246,0.5), 0 4px 12px rgba(59,130,246,0.3);
    transform: translateY(-1px);
  }

  .btn-ghost {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 9px 14px;
    background: transparent;
    color: #475569;
    border: 1px solid rgba(59,130,246,0.2);
    border-radius: 10px;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.25s ease;
    text-decoration: none;
    white-space: nowrap;
  }

  .btn-ghost:hover {
    background: #eff6ff;
    border-color: #3b82f6;
    color: #3b82f6;
    box-shadow: 0 0 12px rgba(59,130,246,0.2);
  }

  .dropdown-wrapper {
    position: relative;
  }

  .dropdown-menu {
    position: absolute;
    bottom: calc(100% + 8px);
    right: 0;
    background: #ffffff;
    border: 1px solid rgba(59,130,246,0.15);
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(15,23,42,0.12);
    overflow: hidden;
    min-width: 130px;
    z-index: 50;
    animation: dropUp 0.18s cubic-bezier(0.34,1.56,0.64,1);
  }

  @keyframes dropUp {
    from { opacity: 0; transform: translateY(6px) scale(0.97); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }

  .dropdown-item {
    display: block;
    padding: 10px 16px;
    font-size: 13px;
    font-weight: 500;
    color: #475569;
    text-decoration: none;
    transition: all 0.15s ease;
    border-bottom: 1px solid rgba(59,130,246,0.06);
  }

  .dropdown-item:last-child { border-bottom: none; }

  .dropdown-item:hover {
    background: #eff6ff;
    color: #3b82f6;
    padding-left: 20px;
  }

  .modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(15,23,42,0.65);
    backdrop-filter: blur(6px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    z-index: 50;
    animation: fadeIn 0.2s ease;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  .modal-box {
    background: #fff;
    border-radius: 24px;
    max-width: 520px;
    width: 100%;
    position: relative;
    max-height: 90vh;
    overflow-y: auto;
    animation: slideUp 0.28s cubic-bezier(0.34,1.56,0.64,1);
    border: 1px solid rgba(59,130,246,0.1);
    box-shadow: 0 32px 80px rgba(15,23,42,0.25);
  }

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(28px) scale(0.96); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }

  .modal-img-wrapper {
    position: relative;
    height: 220px;
    overflow: hidden;
    border-radius: 24px 24px 0 0;
  }

  .modal-img-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .modal-img-wrapper::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(15,23,42,0.45) 0%, transparent 50%);
  }

  .modal-close {
    position: absolute;
    top: 14px;
    right: 14px;
    width: 36px;
    height: 36px;
    background: rgba(255,255,255,0.9);
    backdrop-filter: blur(6px);
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    cursor: pointer;
    color: #0f172a;
    transition: all 0.2s ease;
    z-index: 10;
  }

  .modal-close:hover {
    background: #fff;
    box-shadow: 0 0 14px rgba(239,68,68,0.35);
    color: #ef4444;
  }

  .modal-body {
    padding: 24px 28px 28px;
  }

  .modal-title {
    font-family: 'Syne', sans-serif;
    font-size: 1.6rem;
    font-weight: 800;
    color: #0f172a;
    margin-bottom: 12px;
    letter-spacing: -0.02em;
  }

  .modal-desc {
    font-size: 14px;
    color: #64748b;
    line-height: 1.7;
    margin-bottom: 20px;
  }

  .modal-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .modal-box::-webkit-scrollbar { width: 4px; }
  .modal-box::-webkit-scrollbar-track { background: transparent; }
  .modal-box::-webkit-scrollbar-thumb { background: rgba(59,130,246,0.3); border-radius: 2px; }
`;

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
      tech: [
        { icon: <FaHtml5 />, label: "HTML5" },
        { icon: <FaCss3Alt />, label: "CSS3" },
        { icon: <FaJs />, label: "JS" },
        { icon: <FaReact />, label: "React" },
      ],
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
      tech: [
        { icon: <FaReact />, label: "React" },
        { icon: <SiMongodb />, label: "MongoDB" },
        { icon: <SiExpress />, label: "Express" },
        { icon: <SiNodedotjs />, label: "Node.js" },
      ],
      live: "https://movie-review-and-rating-platform.netlify.app/",
      frontend: "https://github.com/Vasuki-84/Movies_Review_Platform_Frontend",
      backend: "https://github.com/Vasuki-84/Movies_Review_Platform_Backend",
    },
    {
      title: "E-Commerce Website",
      description: "A responsive online shopping UI with cart system and clean design.",
      longDescription: "Built using HTML, CSS, and JavaScript.",
      image: ecommerceImg,
      tech: [
        { icon: <FaHtml5 />, label: "HTML5" },
        { icon: <FaCss3Alt />, label: "CSS3" },
        { icon: <FaJs />, label: "JS" },
      ],
      live: "https://vasuki-84.github.io/e-Commerce_Website/",
      github: "https://github.com/Vasuki-84/e-Commerce_Website.git",
    },
  ];

  const renderCodeButton = (project, index) => {
    if (project.frontend && project.backend) {
      return (
        <div className="dropdown-wrapper">
          <button
            onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
            className="btn-ghost"
          >
            <FaGithub /> Code
          </button>
          {openDropdown === index && (
            <div className="dropdown-menu">
              <a
                href={project.frontend}
                target="_blank"
                rel="noopener noreferrer"
                className="dropdown-item"
              >
                Frontend
              </a>
              <a
                href={project.backend}
                target="_blank"
                rel="noopener noreferrer"
                className="dropdown-item"
              >
                Backend
              </a>
            </div>
          )}
        </div>
      );
    }
    if (project.github) {
      return (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
        >
          <FaGithub /> Code
        </a>
      );
    }
    return null;
  };

  return (
    <>
      <style>{styles}</style>
      <section id="projects" className="projects-section py-20 px-4 sm:px-8 md:px-16">

        {/* Header */}
        <div className="max-w-5xl mx-auto mb-14">
          <p className="section-label">What I've built</p>
          <h2 className="section-title">
            Featured <span>Projects</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="project-card">

              {/* Image */}
              <div className="card-img-wrapper">
                <img src={project.image} alt={project.title} />
                <div className="card-img-overlay">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-badge"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <HiArrowUpRight size={11} /> Live Preview
                  </a>
                </div>
                <div className="card-number">0{index + 1}</div>
              </div>

              {/* Body */}
              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-desc">{project.description}</p>

                <div className="tech-strip">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-pill">
                      {t.icon} {t.label}
                    </span>
                  ))}
                </div>

                <div className="card-divider" />

                <div className="btn-row">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn-primary"
                  >
                    View Details <HiArrowUpRight size={13} />
                  </button>
                  {renderCodeButton(project, index)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div
            className="modal-backdrop"
            onClick={() => setSelectedProject(null)}
          >
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
              <div className="modal-img-wrapper">
                <img src={selectedProject.image} alt={selectedProject.title} />
                <button
                  className="modal-close"
                  onClick={() => setSelectedProject(null)}
                >
                  <IoClose />
                </button>
              </div>

              <div className="modal-body">
                <h2 className="modal-title">{selectedProject.title}</h2>

                <div className="tech-strip" style={{ marginBottom: "14px" }}>
                  {selectedProject.tech.map((t, i) => (
                    <span key={i} className="tech-pill">
                      {t.icon} {t.label}
                    </span>
                  ))}
                </div>

                <p className="modal-desc">{selectedProject.longDescription}</p>

                <div className="card-divider" />

                <div className="modal-actions">
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ flex: "none" }}
                  >
                    Live Demo <HiArrowUpRight size={13} />
                  </a>
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost"
                    >
                      <FaGithub /> View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Projects;