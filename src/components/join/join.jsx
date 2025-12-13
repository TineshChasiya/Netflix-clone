import React from 'react'
import "./join.css"
import tv from "./tv.png"
import download from "./download.png"
import watch from "./watch.png"
import kids from "./kids.png"


function Join() {
  return (
    <div className="container">
        <h2 className="heading">More reasons to join</h2>
        <div className="join_wrapper">
            <div className="join_item">
                <h3 className='join_item_title'>Enjoy on your TV</h3>
                <p className='join_item-content'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                <div className="img-wrapper">
                    <img src={tv} alt="" />
                </div>
            </div>
             <div className="join_item">
                <h3 className='join_item_title'>Download your shows to watch offline</h3>
                <p className='join_item-content'>Save your favourites easily and always have something to watch.</p>
                <div className="img-wrapper">
                <img src={download} alt="" />
                </div>
            </div>
             <div className="join_item">
                <h3 className='join_item_title'>Watch everywhere</h3>
                <p className='join_item-content'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                <div className="img-wrapper">
                <img src={watch} alt="" />
                </div>
            </div>
            <div className="join_item">
                <h3 className='join_item_title'>Create profiles for kids</h3>
                <p className='join_item-content'>Send kids on adventures with their favourite characters in a space made just for them — free with your membership.</p>
                <div className="img-wrapper">
                <img src={kids} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Join