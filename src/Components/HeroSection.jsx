import React from 'react'
import { SiGmail } from "react-icons/si";
import { FaFacebookF ,FaLinkedinIn } from "react-icons/fa";
import { RiBehanceLine } from "react-icons/ri";
import { IoBasketballOutline } from "react-icons/io5";

function HeroSection() {
  return (
    <>
    <section className="heroSectionWrapper">
      <div className="heroSectionWrapper-coloroverlay">
      
            <span className='heroSectionWrapper-gmailIcon'>
             
              <SiGmail/>

            </span>
         <div className="heroSectionWrapper-content">
          <p role="medium">+977 984-763972</p>
          <p role="medium">amritkhanal4708@gmail.com</p>
        </div>
        <div className="heroSectionWrapper-info">
          <div  className="heroSectionWrapper-info-data">
          <h2>Amrit <span>Khanal.</span></h2>
          <p role="large">Frontend Develover </p>
          <p role="medium">I  have been working since 2024. I am proficient in ui design, digital marketing & web development.</p>
         <div>          <button className=' button button-primary'>Download CV </button>
          </div>
        </div>
        <div className="heroSectionWrapper-info-socialmedia">
          <a href="https://www.facebook.com/amritkhanal4708" target="_blank"><FaFacebookF/></a>
          <a href="https://www.linkedin.com/in/amrit-khanal-51a14a354/" target="_blank"><FaLinkedinIn/></a>
           <a href='###'><IoBasketballOutline/></a>
            <a href='###'><RiBehanceLine/></a>    
        </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default HeroSection
