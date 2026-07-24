import React, {useEffect, useRef} from 'react';
import "./Contact.css";

import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {

  const headingRef = useRef(null);
  const contactItems = useRef(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(contactItems.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className='contact-section' id='contact-section'>
        <h1 ref={headingRef} className="main-heading">Contact Me</h1>

        <div ref={contactItems} className="contact-details-container">
            <a href='tel:+923284525641' className="contact-item">
                <FaPhoneAlt className='contact-icon' />
                <h3>+92 3284525641</h3>
            </a>
            <a href='https://maps.app.goo.gl/jCbgGwopEtxweGSo9' target='_blank' className="contact-item">
                <FaLocationDot className='contact-icon' />
                <h3>Mian Channu, Pakistan</h3>
            </a>
            <a href='mailto:awaissheikh4512@gmail.com' className="contact-item">
                <MdEmail className='contact-icon' />
                <h3>awaissheikh4512@gmail.com</h3>
            </a>
        </div>
    </section>
  )
}

export default Contact