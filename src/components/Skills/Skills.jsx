import React, { useState, useEffect, useRef } from "react";
import "./Skills.css";

import htmlIcon from "../../assets/html.png";
import cssIcon from "../../assets/css.png";
import jsIcon from "../../assets/js.png";
import tailwindIcon from "../../assets/tailwind.png";
import reactIcon from "../../assets/react.png";
import expressIcon from "../../assets/express.png";
import nodeIcon from "../../assets/node.png";
import mongodbIcon from "../../assets/mongodb.png";
import wordpressIcon from "../../assets/wordpress.png";
import elementorIcon from "../../assets/elementor.png";

const skills = [
  {
    name: "HTML5",
  icon: htmlIcon,
  color: "#E44D26",
  description:
  "The foundation of everything I build on the web. Comfortable writing clean, semantic, accessible markup.",
  },
{
  name: "CSS3",
  icon: cssIcon,
  color: "#264DE4",
  description:
    "The base of styling everything on the web. Experienced in writing clean and easy to understand code in CSS.",
},
  {
    name: "JavaScript",
    icon: jsIcon,
    color: "#F0DB4F",
    description:
    "My go-to language for building interactive UIs and handling logic on both the frontend and backend. I've used it daily for the past 2-3 years across personal and client projects.",
  },
  {
    name: "Tailwind CSS",
  icon: tailwindIcon,
  color: "#38BDF8",
  description:
    "My go-to for styling new projects — utility classes keep me moving fast without hopping between files, and it's easy to stay consistent across a whole layout.",
  },
  {
    name: "React",
    icon: reactIcon,
    color: "#61DAFB",
    description:
      "I build most of my frontend projects in React, from small landing pages to full dashboards. Comfortable with hooks, context, and structuring larger component trees.",
    },
    {
      name: "Node.js",
    icon: nodeIcon,
    color: "#8CC84B",
    description:
      "I use Node to build REST APIs and handle backend logic for my full-stack apps. Paired most often with Express and a MongoDB database.",
  },
  {
    name: "Express",
    icon: expressIcon,
    color: "#ffffff",
    description:
      "My default backend framework — quick to set up routes, middleware, and auth flows. I've used it to power several full-stack projects end to end.",
  },
  {
    name: "MongoDB",
    icon: mongodbIcon,
    color: "#47A248",
    description:
      "My preferred database for projects that need flexible, document-based data. I'm comfortable designing schemas with Mongoose.",
  },
  {
    name: "Wordpress",
    icon: wordpressIcon,
    color: "#007399",
    description:
      "I have 1 year of experience in building websites as a freelance Wordpress Website Developer.",
    },
  {
    name: "Elementor",
    icon: elementorIcon,
    color: "#910039",
    description:
      "Elementor is the default page builder i use while building websites in Wordpress. I have expertise in using its pro version as well as its related add-ons.",
  },
];

const AUTOPLAY_MS = 3000;

const Skills = () => {

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

  const [activeIndex, setActiveIndex] = useState(0);
  const active = skills[activeIndex];
  const [rotation, setRotation] = useState(0);

  const angleStep = 360 / skills.length;
  const VISIBLE_ANGLE = 0;

  const normalizeAngle = (deg) => {
    let a = deg % 360;
    if (a > 180) a -= 360;
    if (a <= -180) a += 360;
    return a;
  };

  useEffect(() => {
    const targetForActiveItem = normalizeAngle(
      VISIBLE_ANGLE - activeIndex * angleStep
    );
    setRotation((prev) => {
      const shortestDelta = normalizeAngle(
        targetForActiveItem - normalizeAngle(prev)
      );
      return prev + shortestDelta;
    });
  }, [activeIndex, angleStep]);

  useEffect(() => {
    const id = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % skills.length);
    }, AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [activeIndex]);

  return (
    <section className="skills-section" id="skills-section" style={{ "--active-color": active.color }}>
      <h1 ref={headingRef} className="main-heading">My Skills</h1>

      <div className="skills-container">
        <div className="skills-orbit">
          <div className="orbit-track"  style={{ transform: `rotate(${rotation}deg)` }}>
            {
              skills.map((skill, i) => {
                const angle = angleStep * i;
                const isActive = i === activeIndex;
                return (
                  <div
                    key={skill.name}
                    className="orbit-item"
                    style={{
                      transform: `rotate(${angle}deg) translate(var(--orbit-radius)) rotate(${-angle}deg)`,
                    }}
                  >
                    <div className="orbit-item-inner" style={{ transform: `rotate(${-rotation}deg)` }}>
                      <button
                        type="button"
                        className={`orbit-icon${isActive ? " active" : ""}`}
                        style={{ "--icon-color": skill.color }}
                        onClick={() => setActiveIndex(i)}
                        aria-label={`Show ${skill.name}`}
                      >
                        <img src={skill.icon} alt={skill.name} />
                      </button>
                    </div>
                  </div>
                );
              })
            }
          </div>

          <div className="orbit-center">
            <img src={active.icon} alt={active.name} />
          </div>
        </div>

        <div className="skill-details">
          <div className="skill-details-backdrop" />

          <div key={active.name} className="skill-panel">
            <div className="skill-panel-index">
              <span className="skill-panel-index-current">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <span className="skill-panel-index-sep" />
              <span className="skill-panel-index-total">
                {String(skills.length).padStart(2, "0")}
              </span>
            </div>

            <div className="skill-panel-heading">
              <h2 className="skill-name">{active.name}</h2>
            </div>

            <span className="skill-panel-rule" />

            <p className="skill-description">{active.description}</p>

            {!active.isComponent && (
              <span className="skill-panel-watermark" aria-hidden="true">
                <img src={active.icon} alt="" />
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
