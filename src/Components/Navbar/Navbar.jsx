import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../Assets/logo.png'
import {IoIosCloseCircle} from 'react-icons/io'
import {TbGridDots} from 'react-icons/tb'

export default function   Navbar() {

  const [navbar, setNavbar] = useState('navbar')

  const showNavbar=()=>{
    setNavbar('navbar showNavbar')
  }
  const removeNavbar=()=>{
    setNavbar('navbar ')
  }

  //naaaav background 
const [header, setHeader] = useState('header')
const addBg=()=>{
  if(window.scrollY>= 20){
    setHeader('header addBg')
  }
}
window.addEventListener('scroll',addBg)
  return <>
  <div className={header}>
    <div className="logoDiv">
      <a href="#" className='text-decoration-none'>

      <img src={logo }alt="Logo" className='logo' />
      </a>
 
  </div>
  <div className={navbar}>
 <ul className="menu">
  <li onClick={removeNavbar} className="listItem">
    <a href="#trend" className="link">Used Cars</a>
  </li>
  <li onClick={removeNavbar} className="listItem">
    <a href="#auction" className="link">Auction</a>
  </li>
  <li onClick={removeNavbar} className="listItem">
    <a href="#review" className="link">reviews</a>
  </li>
  <li onClick={removeNavbar} className="listItem">
    <a href="#seller" className="link">Seller</a>
  </li>
 </ul>
 <IoIosCloseCircle className='icon closeIcon'onClick={removeNavbar}/>
  </div>
  <div className="signUp flex">
<div className="text">Sign Up</div>
<TbGridDots className='icon toggleNavbarIcon'onClick={showNavbar}/>

  </div>
  </div>
  </>
}
