import React, {useRef, useEffect} from 'react';
import "./About.css";

import AboutImage from "../../assets/about.jpg";
import { FaCode, FaReact, FaLaptopCode } from "react-icons/fa";

const About = () => {

  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section" id='about-section'>
        <div ref={containerRef} className="about-container">
            <div className="about-left">
                <img src={AboutImage} alt="" />
            </div>
            <div className="about-right">
              <h1 className="main-heading">About Me</h1>
              <p>I'm Awais, a passionate Website Developer specializing in MERN Stack and WordPress development. I create modern, responsive, and user-friendly web applications that combine clean design with efficient functionality.</p>
            </div>
        </div>

        <FaReact className="about-floating-icon icon-top-1" />
        <FaCode className="about-floating-icon icon-top-2" />
        <FaLaptopCode className="about-floating-icon icon-bottom-1" />
    </section>
  )
}

export default About