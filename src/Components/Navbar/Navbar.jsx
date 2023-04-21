import React from 'react'
import './Navbar.css'
import { useState } from 'react'

  //ICONS
import {GiPortal} from "react-icons/gi"
import {AiFillCloseCircle} from "react-icons/ai"
import {AiOutlineMenu} from "react-icons/ai"




const Navbar = () => {
  const [active ,setActive] = useState("navBar")


  //Function to toggle navBar

  const showNav = function (){
      setActive("navBar activeNavbar")
  }
  //Function to remove navBar

  const removeNavbar = function (){
      setActive("navBar")
  }




  return (
   
      <section className='navBarSection'>
    <header className="header flex">
    <div className="logoDiv">
    <a href="#Home" className="logo">
        <h1><GiPortal className="icon"/>Portal.</h1>
         </a>
  </div>
      <div className={active}>
  <ul className="navLists flex">
    <li className="navItem">
        <a href="#Home" className="navLink">Home</a>
    </li>

    <li className="navItem">
        <a href="#Packages" className="navLink">Packages</a>
    </li>

    <li className="navItem">
        <a href="#Footer" className="navLink">About</a>
    </li>

    <li className="navItem">
        <a href="#Footer" className="navLink">Contact</a>
    </li>

      <button className='btn'><a href="#Footer">Book Now</a></button> 
   </ul>

    <div className="closeNavbar" onClick={removeNavbar}>
      <AiFillCloseCircle className="icon"/>
  </div>
        </div>
        <div className="toggleNavbar" onClick={showNav}>
          <AiOutlineMenu className="icon"/>
        </div>
            </header>
                </section>
  
  )
}

export default Navbar