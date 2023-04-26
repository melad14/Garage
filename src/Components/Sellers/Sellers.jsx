import React, { useEffect } from 'react'
import './Sellers.css'
import toyota from '../../Assets/toyota.png'
import mercedes from '../../Assets/mercedes.png'
import VW from '../../Assets/VW.png'
import hyundai from '../../Assets/hyundai.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Sellers() {

  useEffect(() => {
    Aos.init({
      duration:2000
    })
    
  }, [])

  return <>
  <div className="seller section "id='seller'>
<div className="secContainer container">
  <div data-aos='fade-up' className="secHeading grid">
<h3 className='secTitle'>
  Explore top sellers in town
</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quae.</p>
  </div>
  <div className="sellerContainer grid">
    <div  data-aos='fade-up'  data-aos-duration='2000'  className="singleSeller flex">
      <div className="imgDiv flex">
        <img src={toyota} alt="" className='img'/>
      </div>
      <span className="info">
        <h4 className="name">
          Toyota
        </h4>
        <p> from $40k </p>
      </span>
       
    </div>
    <div  data-aos='fade-up'  data-aos-duration='2000' className="singleSeller flex">
      <div className="imgDiv flex">
        <img src={mercedes} alt="" className='img'/>
      </div>
      <span className="info">
        <h4 className="name">
          Mercedes Bernz
        </h4>
        <p> from $60k </p>
      </span>
       
    </div>
    <div data-aos='fade-up'  data-aos-duration='2500'  className="singleSeller flex">
      <div className="imgDiv flex">
        <img src={VW} alt="" className='img'/>
      </div>
      <span className="info">
        <h4 className="name">
          Volexwagen
        </h4>
        <p> from $45k </p>
      </span>
       
    </div>
    <div  data-aos='fade-up'  data-aos-duration='2500' className="singleSeller flex">
      <div className="imgDiv flex">
        <img src={hyundai} alt="" className='img'/>
      </div>
      <span className="info">
        <h4 className="name">
          Hyundai
        </h4>
        <p> from $35k </p>
      </span>
       
    </div>
  </div>
</div>
  </div>
  </>
}
