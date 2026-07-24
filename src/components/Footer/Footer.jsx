import React from 'react';
import "./Footer.css";

import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
        <p>Made by <span>Awais Mazher</span></p>
        <div className='social-icons'>
            <a href="https://www.linkedin.com/in/awais-mazher" target='_blank'><FaLinkedin className='icon linkedin' /></a>
            <a href="https://github.com/Awais-Mazher" target='_blank'><FaGithub className='icon github' /></a>
            <a href="https://www.instagram.com/awais_mazher1?utm_source=qr&igsh=MWtydXA4d2F2cXRjbA%3D%3D" target='_blank'><FaInstagramSquare className='icon instagram' /></a>
        </div>
    </footer>
  )
}

export default Footer