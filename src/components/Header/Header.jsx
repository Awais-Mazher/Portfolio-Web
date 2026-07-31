import React, { useState } from 'react';
import "./Header.css";

import Logo from "../../assets/Logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header>
      <img src={Logo} alt="Logo Image" className='logo' />

      <button className="hamburger-btn" onClick={() => setIsMenuOpen(true)} aria-label="Open menu">
        <FaBars />
      </button>

      {/* ------ Overlay ------ */}

      <div className={`nav-overlay${isMenuOpen ? " active" : ""}`} onClick={closeMenu}></div>

      <ul className={isMenuOpen ? "active" : ""}>
        <button className="close-btn" onClick={closeMenu} aria-label="Close menu">
          <FaTimes />
        </button>

        <li><a href="#" className='active' onClick={closeMenu}>Home</a></li>
        <li><a href="#about-section" onClick={closeMenu}>About</a></li>
        <li><a href="#skills-section" onClick={closeMenu}>Skills</a></li>
        <li><a href="#projects-section" onClick={closeMenu}>Projects</a></li>
        <li><a href="#contact-section" onClick={closeMenu}>Contact</a></li>

        <hr className="menu-divider" />

        <a href="/Resume-Wordpress.pdf" download="Awais_Mazher_Resume.pdf" className="mobile-resume-link" onClick={closeMenu}>
          <button>Wordpress Resume</button>
        </a>
      </ul>

      <a href="/Resume-Wordpress.pdf" download="Awais_Mazher_Resume.pdf" className="desktop-resume-link">
        <button>Wordpress Resume</button>
      </a>
      
    </header>
  )
}

export default Header