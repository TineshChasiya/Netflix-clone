import React, { useEffect, useRef, useState } from "react";
import "./trendingslider.css";

import dude from "./dude.jpg";
import strangerThing from "./strangerThing.jpeg";
import jollyllb_3 from "./jolly_llb_3.jpg";
import the_girlfriend from "./the_girlfriend.jpg";
import delhiCrime from "./delhi_crime.jpg";
import idliKadai from "./idli_kadai.jpg";
import sunnySankariTulsiKumari from "./sunnySanskariTulsiKumari.jpg";
import mahaavatar_narsimha from "./mahaavatar_narsimha.jpg";
import saiyaara from "./saiyaara.jpg";
import bison from "./bison.jpg";


function Trendingslider() {

  const sliderRef = useRef();
  const [hideIcon,setHideIcon] = useState(false);
  const [hideleft,setHideLeft] = useState(true);

  const handleRightClick = () => {
    if(sliderRef.current){
      sliderRef.current.scrollLeft = sliderRef.current.scrollWidth;
      setHideIcon(true);
      setHideLeft(false);
    }
  }

  const handleLeftClick = () => {
    if(sliderRef.current){
      sliderRef.current.scrollLeft = 0;
      setHideLeft(true);
      setHideIcon(false);
    }
  }
  
  return (
    <div className="container" >
      <h2 className="heading">Trending Now</h2>

      <div className="slider-wrapper">
        <div className="slider" ref={sliderRef}>
          <div className="box">
            <img src={strangerThing} alt="" />
            <span className="number">1</span>
          </div>
          <div className="box">
            <img src={dude} alt="" />
            <span className="number">2</span>
          </div>
          <div className="box">
            <img src={jollyllb_3} alt="" />
            <span className="number">3</span>
          </div>
          <div className="box">
            <img src={the_girlfriend} alt="" />
            <span className="number">4</span>
          </div>
          <div className="box">
            <img src={delhiCrime} alt="" />
            <span className="number">5</span>
          </div>
          <div className="box">
            <img src={idliKadai} alt="" />
            <span className="number">6</span>
          </div>
          <div className="box">
            <img src={sunnySankariTulsiKumari} alt="" />
            <span className="number">7</span>
          </div>
          <div className="box">
            <img src={mahaavatar_narsimha} alt="" />
            <span className="number">8</span>
          </div>
          <div className="box">
            <img src={saiyaara} alt="" />
            <span className="number">9</span>
          </div>
          <div className="box">
            <img src={bison} alt="" />
            <span className="number">10</span>
          </div>
        </div>
        {
          !hideIcon && (
          <div className="icon slide" onClick={handleRightClick}>
            <i class="fa-solid fa-angle-right right_icon"></i>
        </div>
          )
        }
        {
          !hideleft && (
             <div className="icon left" onClick={handleLeftClick}> 
            <i class="fa-solid fa-angle-left left_icon"></i>
        </div>
          )
        }
      </div> 

    </div>
  );
}

export default Trendingslider;
