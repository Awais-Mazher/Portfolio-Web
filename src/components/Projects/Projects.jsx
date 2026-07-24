import React, {useEffect, useRef} from "react";
import "./Projects.css";

import project1 from "../../assets/Project-1.jpg";
import project2 from "../../assets/Project-2.jpg";
import project3 from "../../assets/Project-3.jpg";
import project4 from "../../assets/Project-4.jpg";
import project5 from "../../assets/Project-5.jpg";

const projects = [
  {
    index: "01",
    category: "My Final Year Project",
    title: "CodeEmerge",
    description:
      "A full-stack coding platform inspired by LeetCode, featuring coding challenges, real-time code execution, AI-powered code analysis, user authentication, and progress tracking.",
    tags: ["Monaco", "Judge0 API", "Responsive UI"],
    image: project1,
    link: "https://code-emerge-fe.vercel.app",
  },
  {
    index: "02",
    category: "Full-stack project",
    title: "Background Removal Site",
    description:
      "An AI-powered web application that removes image backgrounds instantly using external API, allowing users to create professional-quality transparent images with just a few clicks through a fast and intuitive interface.",
    tags: ["React", "Clipdrop", "Clerk"],
    image: project2,
    link: "https://ai-background-removal-web-app.vercel.app",
  },
  {
    index: "03",
    category: "Client Website",
    title: "EcomsGrowths",
    description:
      "A modern, high-converting WordPress website built for an Amazon agency, featuring custom landing pages, responsive design, interactive animations, and optimized user experience to showcase the agency's services and expertise.",
    tags: ["Wordpress", "Elementor", "Metform"],
    image: project4,
    link: "https://ecomsgrowths.com",
  },
  {
    index: "04",
    category: "Full-stack project",
    title: "LMS Website",
    description:
      "A full-stack Learning Management System that enables instructors to create and manage courses while allowing students to enroll, track progress, and access learning materials through an intuitive dashboard.",
    tags: ["Express", "Stripe", "MongoDB"],
    image: project3,
    link: "https://lms-frontend-jade-two.vercel.app",
  },
  {
    index: "05",
    category: "Client Website",
    title: "Bitto",
    description:
      "Bitto is a custom eCommerce website developed for a grocery store, designed with simplicity and ease of use in mind. Its clean interface allows customers to browse and purchase products effortlessly.",
    tags: ["Wordpress", "Elementor", "WooCommerce"],
    image: project5,
    link: "https://bitto.ca",
  }
];

const Projects = () => {

  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects-section" id="projects-section">
      <div className="projects-intro">
        <h1 ref={headingRef} className="main-heading">My Projects</h1>
      </div>

      <div className="projects-list">
        {
          projects.map((project, i) => (
            <div key={i} className="project-sticky" style={{ top: `calc(var(--sticky-base, 90px) + ${i * 24}px)`, zIndex: i + 1 }}>
              <article className="project-card">
                <div className="project-card-media">
                  {
                    project.image ? (
                      <img src={project.image} alt={project.title} />
                    ) : (
                      <div className="project-card-placeholder">
                        <span>{project.index}</span>
                      </div>
                    )}
                </div>

                <div className="project-card-body">
                  <span className="project-card-index">{project.index}</span>
                  <span className="project-card-category">
                    {project.category}
                  </span>

                  <h2 className="project-card-title">{project.title}</h2>
                  <p className="project-card-description">
                    {project.description}
                  </p>

                  <ul className="project-card-tags">
                    {
                      project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))
                    }
                  </ul>

                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card-link">
                    See Project
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default Projects;