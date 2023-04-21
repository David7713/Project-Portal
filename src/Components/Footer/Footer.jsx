import React,{useEffect } from 'react'
import './Footer.css'

//VIDEOS AND ICONS//
import video from "../../Assets/video.mp4"
import {FiSend} from "react-icons/fi"
import {GiPortal} from "react-icons/gi"
import {AiOutlineTwitter} from "react-icons/ai"
import {AiOutlineYoutube} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"
import {FaTripadvisor} from "react-icons/fa"
import {FiChevronRight} from "react-icons/fi"
import {AiFillPhone} from "react-icons/ai"
import {GoLocation} from "react-icons/go"

//AOS TRANSITION//
import Aos, { init } from "aos"
import 'aos/dist/aos.css'



const Footer = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className="footer" id='Footer'>
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type="video/mp4"></video>
      </div>

        <div className="secContent container">
          <div className="contactDiv flex">
              <div className="text" data-aos="fade-up">
                <small>KEEP IN TOUCH</small>
                <h2>Travel with us</h2>
                
              </div>
              <div className="inputDiv flex" >
                <input type="text" placeholder="Enter Email Address" data-aos="fade-up"/>
                <button className='btn flex' type='submit' data-aos="fade-up">
                  SEND<FiSend  className='icon' />
                </button>
              </div>

          </div>
          <div className="footerCard flex">
            <div className="footerIntro flex">
              <div className="logoDiv">
                <a href='#' className='logo flex'>
                <GiPortal />Portal. 
                </a>
              </div>
              <div className="footerParagraph" data-aos="fade-up">
               Portal is a leading tourism agency that has been operating for five years, providing unparalleled travel experiences to our clients.
               We offer a wide range of tours that cater to different travel styles, preferences, and budgets. Whether you're looking for a cultural immersion, an adventure trip, or a relaxing getaway, we have something for everyone.
               Our team of experienced and passionate travel experts is dedicated to curating unique and personalized itineraries that meet our clients' expectations and exceed their imaginations.
             
              </div>
              <div data-aos="fade-up" className="footerSocials flex">
                <AiOutlineTwitter className="icon" />
                <AiOutlineYoutube className="icon" />
                <AiOutlineInstagram className="icon" />
                <FaTripadvisor className="icon" />

              </div>
            </div>

            <div className="footerLinks grid">
          
              {/* Group One */}
                <div className="linkGroup" data-aos="fade-up">
                  <span className="groupTitle">
                    PORTAL
                  </span>
                  <li className='footerList flex'>
                    <FiChevronRight className='icon'/>
                    <a href='#Home'>    Home </a>
                  </li>

                  <li className='footerList flex'>
                    <FiChevronRight className='icon'/>
                    <a href='#Packages'>   Packages </a>
                  </li>

                  <li className='footerList flex'>
                    <FiChevronRight className='icon'/>
                    <a href='#Footer'>   About </a>
                  </li>

                  <li className='footerList flex'>
                    <FiChevronRight className='icon'/>
                    <a href='#Footer'>       Contact </a>
                  </li>
                  <li className='footerList flex'>
                    <FiChevronRight className='icon'/>
                    <a href='#Footer'>   Booking </a>
                  </li>
                </div>
              {/* Group Two */}
              <div className="linkGroup" data-aos="fade-up" >
                  <span className="groupTitle">
                    NEW LINES
                  </span>
                  <li className='footerList flex'>
                    <FiChevronRight className='icon'/>
                 <a href='#Packages'> Greece </a>
                  </li>

                  <li className='footerList flex'>
                  <a href='#Packages'> <FiChevronRight className='icon'/>
                    Indonesia </a>
                  </li>

                  <li className='footerList flex'>
                  <a href='#Packages'><FiChevronRight className='icon'/>
                   Italy </a>
                  </li>

                  <li className='footerList flex'>
                  <a href='#Packages'><FiChevronRight className='icon'/>
                    Jordan </a>
                  </li>
                  <li className='footerList flex'>
                  <a href='#Packages'> <FiChevronRight className='icon'/>
                    Japan </a>
                  </li>
                </div>
                <div className="linkGroup" data-aos="fade-up" >
                  <span className="groupTitle">
                  CONTACTS
                  </span>
                  <li className='footerList flex'>
                    <AiFillPhone className='icon'/>
                    +731 313 129 39
                      
                  </li>
                  <li className='footerList flex'>
                    <GoLocation className='icon'/> 
                    &nbsp;Boston,MA
                  </li>
                  
                  <span className="groupTitle">
                  HERE WE ARE
                  </span>
                  <li className='footerList flex'>
                  <div><iframe width="150" height="100" src="https://maps.google.com/maps?width=50&amp;height=50&amp;hl=en&amp;q=Boston%20MA+(Title)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed"></iframe></div>
                      
                  </li>
                  
      </div>
              
            </div>
            <div className='footerDiv flex' >
              <small class >© Copyright 2023 Portal Incorporated. All Rights Reserved.</small>

              
            </div>
          </div>
        </div>
    </section>
  )
}

export default Footer