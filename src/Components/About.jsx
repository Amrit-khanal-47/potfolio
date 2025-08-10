import React from 'react'
import Image from '../Assets/sidebar.jpg'
import { BsPersonFill } from "react-icons/bs";
import { IoLogoSkype,IoIosGlobe } from "react-icons/io";
import { CgMail } from "react-icons/cg";
import { FaLocationDot ,FaCakeCandles} from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { TbBulb } from "react-icons/tb";
import { BsEmojiSunglasses } from "react-icons/bs";


function About() {
  return (
    <>
   
    <section   className='aboutwrapper'>
        <div className="aboutwrapper-me">
            <div className="aboutwrapper-me-image">  <img src={Image}/></div>
           
 <div className="aboutwrapper-me-info">
                <h2>About Me</h2>
                <h3>Creative Designer</h3>
                <p>I am dedicated his life to learning what makes humans tick. He studies, researches and reads everything hecan, and shares his findings with his clients. His philosophy is to learn, test, analyse, improve and re-test. His motto is stay agile. I'm a Freelancer Front-end Developer with over 3 years of experience. I'm from San Francisco.<br></br>
                I code and create web elements for amazing people around the world. I like work with new people. New people new Experiences.</p>
                <div className="aboutwrapper-me-info-contact">
                    <ul>
                        <li><BsPersonFill/>Amrit Khanal</li>
                        <li><IoLogoSkype/>Amrit@khanal</li>
                        <li><CgMail/>Amritkhanal@gmail.com</li>
                    </ul>
                    <ul>
                        <li><FaLocationDot/>Tilottama-3,Rupendehi Nepal</li>
                        <li><FaCakeCandles/>15 Oct,2002</li>
                        <li><FaWhatsapp/>9840763972</li>

                    </ul>
                    
                    </div>
            </div>

        </div>
        <div className="aboutwrapper-counter">

            <div className="aboutwrapper-counter-item">
              <SlCalender/>
                <div className="aboutwrapper-counter-item-number">
                    <h5>2500</h5>
                    <p>Working Hours</p>
                </div>
            </div>
             <div className="aboutwrapper-counter-item">
              <IoIosGlobe/>
                <div className="aboutwrapper-counter-item-number">
                    <h5>150</h5>
                    <p>TOtal Projects</p>
                </div>
            </div>
             <div className="aboutwrapper-counter-item">
                <TbBulb/>
                <div className="aboutwrapper-counter-item-number">
                    <h5>12</h5>
                    <p>Years Journey</p>
                </div>
            </div>
             <div className="aboutwrapper-counter-item">
                <BsEmojiSunglasses/>
                <div className="aboutwrapper-counter-item-number">
                    <h5>2500</h5>
                    <p>Working Hours</p>
                </div>
            </div>


        </div>







    </section>
     
    
    
    
    
    </>
   
  )
}

export default About
