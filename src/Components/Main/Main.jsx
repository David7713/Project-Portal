import React ,{useEffect}from 'react'
import './Main.css'
import Data from './Data'
//ICONS//
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {TbBrandBooking} from 'react-icons/tb'
//AOS TRANSITION//
import Aos, { init } from "aos"
import 'aos/dist/aos.css'



const Main = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
    // {
  return (
   <section className='main container section'  id='Packages'>

    <div className="secTitle">
      <h3 className="title" data-aos="fade-right">
        Most visited destinations
      </h3>
    </div>

    <div className="secContent grid">
    {/* Array Map Method for display all DATA  */}
    {
    Data.map(function(item){
        return(
          <div key={item.id}
          data-aos="fade-up"
     
           className='singleDestination'>
           <div className='imageDiv'>
            <img src={item.imgSrc} alt={item.destTitle}></img>
          
          </div>
          <div className="cardInfo">
            <h4 className="destTitle">
              {item.destTitle}
            </h4>
          <span className='continent flex'>
          <HiOutlineLocationMarker className='icon'/>
          <span className="name">{item.location}</span>
          </span>
            <div className="fees flex">
              <div className="grade">
                <span>{item.grade}<small>+1</small></span>
              </div>
              <div className="price">
                <h5>{item.fees}</h5>
              </div>
            </div>
              <div className="desc">
                <p>{item.descritpion}</p>
              </div>
             <a href='#Footer'> <button className='btn flex'>
                BOOK NOW <TbBrandBooking  className='icon' />
              </button>
              </a>
            </div>
          </div>
        )
    })
             
      }
    


    </div>
   </section>
  )
}

export default Main