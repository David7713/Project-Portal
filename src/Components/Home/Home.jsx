import React,{useEffect} from 'react'
import './Home.css'

//Countup NPM//
import CountUp from 'react-countup';

//VIDEO AND ICONS//
import video from "../../Assets/video.mp4"
import {RiShoppingBag3Fill} from "react-icons/ri"
import {FaUserCheck} from "react-icons/fa"
import {AiFillExperiment} from "react-icons/ai"
import {GiEarthAmerica} from "react-icons/gi"
import {FiFacebook} from "react-icons/fi"
import {AiOutlineInstagram} from "react-icons/ai"
import {SiTripadvisor} from "react-icons/si"
//AOS TRANSITION//
import Aos, { init } from "aos"
import 'aos/dist/aos.css'




const Home = () => {

useEffect(()=>{
  Aos.init({duration:2000})
},[])


  return (
   <section className='home' id='Home'>

    <div className="overlay"></div>
    <video src={video} muted autoPlay loop type='video/mp4' ></video>

    <div className="homeContent container">
      <div className="textDiv">

  

        <h1 className='homeTitle' data-aos="fade-up">Discover new horizons with portal.
        </h1>
      </div>
    
      <div className="homeFooterIcons"  data-aos="fade-up">
        <a href='#'><FiFacebook></FiFacebook></a>
        <a href='#'> <AiOutlineInstagram></AiOutlineInstagram></a>
        <a href='#'> <SiTripadvisor></SiTripadvisor></a>
      </div>
    </div>

   </section>
  )
}

export default Home