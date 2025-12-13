import React from 'react'
import "./footer.css"
import Membership from '../components/membership/membership'
import LangSign from '../components/langSign/langSign'

function Footer() {
  return (
    <footer>
         <Membership/>
         <div className="call">
            <span>Questions? Call <a href="#">000-800-919-1743</a></span>
         </div>
         <div className="links">
            <ul>
                <li>
                    <a href="">FAQ</a>
                    <a href="">Investor Relations</a>
                    <a href="">Privacy</a>
                    <a href="">Speed Test</a>
                </li>
                <li>
                    <a href="">Help Centre</a>
                    <a href="">Jobs</a>
                    <a href="">Cookie Preferences</a>
                    <a href="">Legal Notices</a>
                </li>
                <li>
                    <a href="">Account</a>
                    <a href="">Ways to Watch</a>
                    <a href="">Corporate Information</a>
                    <a href="">Only on Netflix</a>
                </li>
                <li>
                    <a href="">Media Centre</a>
                    <a href="">Terms of Use</a>
                    <a href="">Contact Us</a>
                </li>
            </ul>
         </div>
         <LangSign/>
         <div className="indiatext"><span>Netflix India</span></div>
         <div className="recaptcha">
            <span>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a></span>
         </div>
    </footer>
  )
}

export default Footer