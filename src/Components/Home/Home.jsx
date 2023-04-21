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
      <div className='cardDiv'  data-aos="fade-up">
       <div className='counterUpSection'>
            <li className='counterUpIcon'><RiShoppingBag3Fill></RiShoppingBag3Fill></li>
        
          <CountUp className='counterUp' end={15} duration={10} />
          <p className='counterUpText'>Packages</p>
       </div>
       <div className='counterUpSection'>
       <li className='counterUpIcon'><FaUserCheck></FaUserCheck></li>
     
       <CountUp className='counterUp' end={999}  duration={10} />
       <p className='counterUpText'>Customer</p>
       </div>
       <div className='counterUpSection'>
       <li className='counterUpIcon'><AiFillExperiment></AiFillExperiment></li>
       
       <CountUp className='counterUp' end={5} duration={10} />
          <p className='counterUpText'>Experience</p>
       </div>
       <div className='counterUpSection'>
       <li className='counterUpIcon'><GiEarthAmerica></GiEarthAmerica></li>
       <CountUp className='counterUp' end={8} duration={10} />
          <p className='counterUpText'>Countries</p>
       </div>
      
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