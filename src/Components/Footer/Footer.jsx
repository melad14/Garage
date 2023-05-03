import React, { useEffect } from 'react'
import './Footer.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
export default function Footer() {

  useEffect(() => {
    Aos.init({
      duration:2000
    })
    
  }, [])
  return <>
  <div className="footer" id='footer'>
    <div className="footerContainer container">
      <div className="footerMenuDiv grid">
{/* ///////////////////////////////////////////////////////////////////////// */}
        <div data-aos='fade-up' className="singleGrid">
          <span className="footerTitle">
            About
       </span>
       <ul className='footerUl grid'>
        <li className="footerLi">
          How it works
        </li>
        <li className="footerLi">
          Careers
        </li>
        <li className="footerLi">
          Affliates
        </li>
        <li className="footerLi">
         Media
        </li>
       </ul>
        </div>
{/* /////////////////////////////////////////////////////////////////////        */}
    
        <div data-aos='fade-up'className="singleGrid">
          <span className="footerTitle">
           Become Seller
       </span>
       <ul className='footerUl grid'>
        <li className="footerLi">
          Add vehicles
        </li>
        <li className="footerLi">
        Resource center 
        </li>
        <li className="footerLi">
          Bonds
        </li>
        <li className="footerLi">
         Release data
        </li>
       </ul>
        </div>
{/* /////////////////////////////////////////////////////////////////////        */}
    
        <div data-aos='fade-up'className="singleGrid">
          <span className="footerTitle">
            Community
       </span>
       <ul className='footerUl grid'>
        <li className="footerLi">
          Recommendations
        </li>
        <li className="footerLi">
          Gift Cards
        </li>
        <li className="footerLi">
          Top ups
        </li>
        <li className="footerLi">
         Selling
        </li>
       </ul>
        </div>
{/* /////////////////////////////////////////////////////////////////////        */}
    
        <div data-aos='fade-up'className="singleGrid">
          <span className="footerTitle">
            Booking support
       </span>
       <ul className='footerUl grid'>
        <li className="footerLi">
         Updates for Covid-19
        </li>
        <li className="footerLi">
          Help Center
        </li>
        <li className="footerLi">
          Garages
        </li>
        <li className="footerLi">
         Trust & SAfty
        </li>
       </ul>
        </div>
{/* /////////////////////////////////////////////////////////////////////        */}
    
      </div>
         {/* lower Footer  */}
         <div  className="lowerSection grid">
          <p >2023 All right reserved </p>
          <blockquote >  melad Shehata</blockquote>

         </div>
    </div>
  </div>
  </>
}
