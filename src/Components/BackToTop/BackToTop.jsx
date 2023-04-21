import React from 'react'
import { useEffect, useState } from 'react'
import './../BackToTop/BackToTop.css'
import {BsChevronUp} from "react-icons/bs"


const BackToTop = () => {
    const [backToTopButton,setBackToTopButton] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll",() =>{
            if(window.scrollY > 100){
                setBackToTopButton(true)
            } else{
                setBackToTopButton(false)
            }
            
        })

    },[])


    const scrollUp = () =>{
            window.scrollTo({
                top:0,
                behavior:"smooth",

            })
    }
  return (
   
      

<div className='BackToTop'>

{backToTopButton && (
    <button className='backtobutton' onClick={scrollUp}>< BsChevronUp className='icon' /></button>
)} 

</div>
  )
}

export default BackToTop