import React, { useEffect } from 'react'
import './Home.css'
import homeImage from '../../Assets/homeImage.png'

//animaaate
import Aos from 'aos'
import 'aos/dist/aos.css'


export default function Home() {

useEffect(() => {
  Aos.init({
    duration:2000
  })
  
}, [])


  return <>
  <div className="home" id='home'>
<div className="secContainer">

  <div data-aos='fade-up' className="homeText">
    <span  className="homeSpan">
      Meet Your car
    </span>
    <h1 className='homeTitle'>Honda Civic Type R </h1>

    <div className="btns flex">
      <button  data-aos='fade-right' className="btn">More Details</button>
      <button  data-aos='fade-left' className="btn primaryBtn">Test Driver </button>
    </div>
  </div>
  <div  data-aos='fade-down-right' className="homeImage">
    <img src={homeImage} alt="home img" />
  </div>
</div>
  </div>
  </>
}
