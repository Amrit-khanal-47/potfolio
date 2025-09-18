import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";



function Footer() {
  return (
   <>
    <div className="contact-page">
      {/* Heading */}
      <div className="heading">
        <h1>Contact</h1>
        <p>Get in Touch</p>
      </div>

      {/* Contact Section */}
      <div className="contact-container">
        {/* Left Form */}
        <form className="contact-form">
          <input type="text" placeholder="Subject" />
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your Email Here" />
          <textarea placeholder="Drop Message"></textarea>
          <button type="submit">Send Me</button>
        </form>

        {/* Right Info */}
         <div className="contact-info">
          <div className="info-item">
            <FaEnvelope /> <span>chat@example.com</span>
          </div>
          <div className="info-item">
            <FaPhone /> <span>+123 456 7890</span>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt /> <span>208 Maliha Square, Dubai, UAE</span>
          </div>

          {/* Google Map */}
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.995369019719!2d55.426!3d25.322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE5JzE5LjIiTiA1NcKwMjUnMzMuNiJF!5e0!3m2!1sen!2sae!4v1631879912345!5m2!1sen!2sae"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>All Rights Reserved By Themetum.Com 2025.</p>
        <div className="links">
          <a href="#">Faqs</a> / <a href="#">Privacy Policy</a> / <a href="#">Services</a>
        </div>
        <div className="socials">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </footer>
    </div>
  </>
  )
}

export default Footer


