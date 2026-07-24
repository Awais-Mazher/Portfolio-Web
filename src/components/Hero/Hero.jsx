import React, { useRef } from 'react';
import { useEffect, useState } from "react";
import "./Hero.css";

import HeroImg from "../../assets/Hero.png";

const roles = [
  "Website Developer",
  "MERN Stack Developer",
  "WordPress Developer",
];

function Typewriter() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    let speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText(current.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <h2 className="sub-heading">
      <span >A </span>
      <span>{text}</span>
      <span className="cursor animation-text">|</span>
    </h2>
  );
}

const Hero = () => {

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className='hero-section'>
      <div className="left-content">
        <h1 className='heading'>Hi, I am <span className='main-heading'>Awais Mazher</span></h1>
        <Typewriter />
        <a href="/Resume-MERN.pdf" download="Awais_Mazher_Resume.pdf">
          <button>MERN Resume</button>
        </a>
      </div>
      <div className="right-image">
        <img src={HeroImg} alt="" />
      </div>
    </section>
  )
}

export default Hero