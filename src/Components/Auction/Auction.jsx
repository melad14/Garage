import React, { useEffect } from 'react'
import './Auction.css'

import{BsArrowLeftShort,BsArrowRightShort} from 'react-icons/bs'
import car1 from '../../Assets/s4.png'
import car2 from '../../Assets/bmw-.png'
import car3 from '../../Assets/Vx-9281.png'
import car4 from '../../Assets/mercedes-26184.png'
import car5 from '../../Assets/honda-car-37335.png'
import car6 from '../../Assets/RangeRovert537690.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Auction() {
  
    useEffect(() => {
    Aos.init({
      duration:2000
    })
    
  }, [])
  return <>
 <div className="auction section" id='auction'>
  <div className="secContainer container">
    <div data-aos='fade-up'  data-aos-duration='2000'className="secHeading flex">
<h3 className="secTitle">
  Active auction 
</h3>
<div className="navBtns flex">
  <BsArrowLeftShort className='icon leftIcon'/>
  <BsArrowRightShort className='icon RightIcon'/>

</div>
    </div>

    <div className="carContainer grid">
      <div data-aos='fade-up'  data-aos-duration='2000' className="singleCar grid">
        <div className="imgDiv">
          <img src={car1} alt="" />
          </div>
          <h5 className='carTitle'>
            Used 2019 Audi S4 Premium Plus
          </h5>
          <span className='miles'>
            11457 Miles
          </span>
          <span className="AWD">
            AWD 4-cylinder Turbo
          </span>
          <div className="price_buyBtn flex">
            <span className="price">
              $41.200 
            </span>
            <span className="buyBtn"> Buy Nowr</span>
          </div>
        </div>
      <div  data-aos='fade-up'  data-aos-duration='2000'className="singleCar grid singleCarActive">
        <div className="imgDiv">
          <img src={car2} alt="" />
          </div>
          <h5 className='carTitle'>
            Used 2019 Audi S4 Premium Plus
          </h5>
          <span className='miles'>
            11457 Miles
          </span>
          <span className="AWD">
            AWD 4-cylinder Turbo
          </span>
          <div className="price_buyBtn flex">
            <span className="price">
              $41.200 
            </span>
            <span className="buyBtn"> Buy Nowr</span>
          </div>
        </div>
      <div data-aos='fade-up'  data-aos-duration='2500' className="singleCar grid">
        <div className="imgDiv">
          <img src={car3} alt="" />
          </div>
          <h5 className='carTitle'>
            Used 2019 Audi S4 Premium Plus
          </h5>
          <span className='miles'>
            11457 Miles
          </span>
          <span className="AWD">
            AWD 4-cylinder Turbo
          </span>
          <div className="price_buyBtn flex">
            <span className="price">
              $41.200 
            </span>
            <span className="buyBtn"> Buy Nowr</span>
          </div>
        </div>
      <div data-aos='fade-up'  data-aos-duration='2500' className="singleCar grid singleCarActive">
        <div className="imgDiv">
          <img src={car4} alt="" />
          </div>
          <h5 className='carTitle'>
            Used 2019 Audi S4 Premium Plus
          </h5>
          <span className='miles'>
            11457 Miles
          </span>
          <span className="AWD">
            AWD 4-cylinder Turbo
          </span>
          <div className="price_buyBtn flex">
            <span className="price">
              $41.200 
            </span>
            <span className="buyBtn"> Buy Nowr</span>
          </div>
        </div>
      <div  data-aos='fade-up'  data-aos-duration='3000' className="singleCar grid">
        <div className="imgDiv">
          <img src={car5} alt="" />
          </div>
          <h5 className='carTitle'>
            Used 2019 Audi S4 Premium Plus
          </h5>
          <span className='miles'>
            11457 Miles
          </span>
          <span className="AWD">
            AWD 4-cylinder Turbo
          </span>
          <div className="price_buyBtn flex">
            <span className="price">
              $41.200 
            </span>
            <span className="buyBtn"> Buy Nowr</span>
          </div>
        </div>
      <div  data-aos='fade-up'  data-aos-duration='3000' className="singleCar grid singleCarActive">
        <div className="imgDiv">
          <img src={car6} alt="" />
          </div>
          <h5 className='carTitle'>
            Used 2019 Audi S4 Premium Plus
          </h5>
          <span className='miles'>
            11457 Miles
          </span>
          <span className="AWD">
            AWD 4-cylinder Turbo
          </span>
          <div className="price_buyBtn flex">
            <span className="price">
              $41.200 
            </span>
            <span className="buyBtn"> Buy Nowr</span>
          </div>
        </div>
  

    
    </div>
  </div>
  </div>
  </>
}
