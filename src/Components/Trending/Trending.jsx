import React, { useEffect } from 'react'
import './Trending.css'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import car1 from '../../Assets/chevrolet.png'
import car2 from '../../Assets/jeep.png'
import car3 from '../../Assets/s4.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Trending() {

  useEffect(() => {
    Aos.init({
      duration: 2000
    })

  }, [])

  return <>
    <div className="trending section"  id='trend'>
      <div className="secContainer container">
        <div data-aos='fade-up' className="secHeading flex">
          <h3 className="secTitle">
            Trending Near You
          </h3>
          <div className="navBtns flex">
            <BsArrowLeftShort className='icon leftIcon' />
            <BsArrowRightShort className='icon RightIcon' />

          </div>
        </div>

        <div className="carContainer grid">
          <div data-aos='fade-up' data-aos-duration='2000' className="singleCar grid">
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
            <div className="price_seller flex">
              <span className="price">
                $41.200
              </span>
              <span className="seller"> Best seller</span>

            </div>
          </div>
          <div data-aos='fade-up' data-aos-duration='3000' className="singleCar grid">
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
            <div className="price_seller flex">
              <span className="price">
                $41.200
              </span>
              <span className="seller"> Best seller</span>
            </div>

          </div>
          <div data-aos='fade-up' data-aos-duration='2500' className="singleCar grid">
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
            <div className="price_seller flex">
              <span className="price">
                $41.200
              </span>
              <span className="seller"> Best seller</span>
            </div>

          </div>


        </div>
      </div>
    </div>
  </>
}
