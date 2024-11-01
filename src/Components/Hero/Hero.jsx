import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'> 
    <img src={profile_img} alt=''/>
    <h1><span>Hi, I'm Bishal Thapa,</span> frontend developer.</h1>
    <p> I am a frontend developer from Toronto, Canada.
    </p>
    <div className="hero-action">
      <div className="hero-connect">Connect with me</div>
      <div className="hero-resume">My Resume</div>
      </div>  
    </div>
  )
}

export default Hero