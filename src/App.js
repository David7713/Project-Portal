import React from 'react'
import { useState ,useEffect} from 'react'
import './App.css'

//Component imports//
import './Components/Home/Home.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import CircleLoader from "react-spinners/CircleLoader";
import BackToTop from './Components/BackToTop/BackToTop'



const App = () => {
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
setLoading(false)
    },1000)
 },[])
  return (
   <>
   {
    loading?
    <div className='spinnerContainer'>
    <CircleLoader
    className='spinner'
    color='hsl(199,100%,33%)'
    cssOverride={{}}
    size={160}
    speedMultiplier={1}
  />
  </div>
    :
   <>
    <Navbar></Navbar>
    <BackToTop></BackToTop>
    <Home></Home> 
    <Main></Main>
  {/*  <About></About>  */}
    <Footer></Footer>  
    </>
   }
    </>
  )
}

export default App