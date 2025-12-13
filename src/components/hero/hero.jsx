import React from 'react'
import "./hero.css";
import heroImg from "./hero-img.jpg"
import Logo from "./logo.svg"
import Membership from '../membership/membership';
import LangSign from '../langSign/langSign';


function Hero() {
  return (
    <>
    <section className='hero-section'  style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        padding: '0 20px',
      }}>
      <header> 
        <div className="logo">
          <img src={Logo} alt="Hero" />
        </div>
        <div className='langSign'>
          <LangSign/>
        <a href="" className="signIn">Sign In</a>

        </div>

      </header>
      <div className="hero-content">
        <h4 className='heading'>
          Unlimited movies,<br /> shows, and more
        </h4>
        <span className="small-content">
          Starts at ₹149. Cancel at any time.
        </span>
       <Membership/>
      </div>

        
        <svg  preserveAspectRatio="none" width="100%" height="380" viewBox="0 0 500 120">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="">
            <stop offset="0%" stopColor="rgba(255,0,150,0)" />
            <stop offset="100%" stopColor="rgba(255,0,150,1)" />
          </linearGradient>
        </defs>

        <path
          d="M 0 21 Q250 0 500 21"
          stroke="url(#grad)"
          strokeWidth="1"
          fill="none"
        />
      </svg>
        <div className="blureffectcontainer">
          <div className="blueeffect"></div>
          <div className="blueeffect2"></div>

        </div>
    </section>
   
    </>
    
  )
}

export default Hero