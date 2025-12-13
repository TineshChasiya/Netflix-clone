import React from 'react'
import "./membership.css"

function Membership() {
  return (
         <div className="membership">
          <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
          <div className="input-startbtn">
            <form action="#">
              <div className="input-label">
                <input type="email" id='email' required  placeholder=" "/>
                <label htmlFor='email'>Email address</label>
              </div>
              <div className="startbtn">
                <input type="submit" value="Get Started" />
                <i className="fas fa-angle-right hero-right-icon"></i>
              </div>
            </form>
          </div>
        </div>
  )
}

export default Membership