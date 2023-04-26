import React, { useEffect } from 'react'
import './Review.css'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'
import car1 from '../../Assets/Untitled.jpg'
import user1 from '../../Assets/women.jpeg'
import car2 from '../../Assets/car2.jpeg'
import user2 from '../../Assets/user2.jpeg'
import car3 from '../../Assets/car3.jpeg'
import user3 from '../../Assets/user3.jpeg'

import Aos from 'aos'
import 'aos/dist/aos.css'
export default function Review() {
  useEffect(() => {
    Aos.init({
      duration:2000
    })
    
  }, [])

  return <>
    <div className="review section"  id='review'>

      <div className="secContainer container">
        <div data-aos='fade-up'  className="secHeading flex">
          <h3 className="secTitle">
            Recent Reviews
          </h3>

          <div className="navBtns flex">
            <BsArrowLeftShort className='icon leftIcon' />
            <BsArrowRightShort className='icon RightIcon' />

          </div>
        </div>

        <div className="revContainer grid">

          <div data-aos='fade-up'  data-aos-duration='2000'className="singleReview grid">
            <div className="imgDiv">
              <img src={car1} alt="car" />
            </div>
            <h5 className='ReviewTitle'>
              2023 cadiallac
            </h5>

            <span className='desc'>
              Good cars are safe ,fast,affordable to purchase,economical to
              operate,reliable ,capacious ,comfortable, and attractive
            </span>
            <div className="revrDiv flex">
              <div className="leftDiv flex">
                <div className="revrImage">
                  <img src={user1} alt="review" />
                </div>
                <div className="aboutReviewer">
                  <span className="name">
                    Jakline Nelson
                  </span>
                  <p>Cheif Editor</p>
                </div>
              </div>

              <div className="rightDiv flex">
                <AiFillStar className="icon" />
                <blockquote>4.48</blockquote>
              </div>


            </div>
          </div>
          <div data-aos='fade-up'  data-aos-duration='2000'className="singleReview grid">
            <div className="imgDiv">
              <img src={car2} alt="car" />
            </div>
            <h5 className='ReviewTitle'>
              2023 cadiallac
            </h5>

            <span className='desc'>
              Good cars are safe ,fast,affordable to purchase,economical to
              operate,reliable ,capacious ,comfortable, and attractive
            </span>
            <div className="revrDiv flex">
              <div className="leftDiv flex">
                <div className="revrImage">
                  <img src={user2} alt="review" />
                </div>
                <div className="aboutReviewer">
                  <span className="name">
                    Monica Nelson
                  </span>
                  <p>VT admin</p>
                </div>
              </div>

              <div className="rightDiv flex">
                <AiFillStar className="icon" />
                <blockquote>4.48</blockquote>
              </div>


            </div>
          </div>
          <div data-aos='fade-up'  data-aos-duration='2000'className="singleReview grid">
            <div className="imgDiv">
              <img src={car3} alt="car" />
            </div>
            <h5 className='ReviewTitle'>
              2023 cadiallac
            </h5>

            <span className='desc'>
              Good cars are safe ,fast,affordable to purchase,economical to
              operate,reliable ,capacious ,comfortable, and attractive
            </span>
            <div className="revrDiv flex">
              <div className="leftDiv flex">
                <div className="revrImage">
                  <img src={user3} alt="review" />
                </div>
                <div className="aboutReviewer">
                  <span className="name">
                    Nicole webb
                  </span>
                  <p>Manager Atlantis</p>
                </div>
              </div>

              <div className="rightDiv flex">
                <AiFillStar className="icon" />
                <blockquote>4.48</blockquote>
              </div>


            </div>
          </div>

        </div>

      </div>
    </div>
  </>
}
