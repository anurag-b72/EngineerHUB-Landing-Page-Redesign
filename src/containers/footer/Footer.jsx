import React, { useState } from 'react'
import './footer.css'
import ehbLogo from "../../assets/logo.png"

function alertFunction ()  {
  return (
    alert("Button clicked, alert message displayed!")
  )
}

const Footer = () => {

  const whiteColor = "#fff";
  const greenColor = "#ADE792";

  const [hoverEffect, setHoverEffect] = useState(false);

  function handleMouseOver () {
    setHoverEffect(true);
  }
  function handleMouseOut () {
    setHoverEffect(false);
  }

  return (
    <div className="ehb__footer section__padding">
      <div className="ehb__footer-heading">
        <h1 className="gradient__text">Powered by engineerHUB</h1>
      </div>

      <div className="ehb__footer-btn" onClick={alertFunction}>
        <p>Register Here</p>
      </div>

      <div className="ehb__footer-links">
        <div className="ehb__footer-links_logo">
          <img src={ehbLogo} alt="logo" />
          <p>engineerHUB is INDIA's largest community of engineers where students(alumni) from IITs, NITs, IIITs and state colleges join together to develop and nurture students skills coming from all over India. .</p>
        </div>
        <div className="ehb__footer-links_div">
          <h4>Links</h4>
          <p>Magazines</p>
          <p>Courses</p>
          <p>Events</p>
        </div>
        <div className="ehb__footer-links_div">
          <h4>Contact Us</h4>
          <p><a href="https://www.instagram.com/engineerhub.in/"><box-icon name='instagram' type='logo' color={hoverEffect? greenColor : whiteColor} onMouseEnter={handleMouseOver} onMouseOut={handleMouseOut}></box-icon></a></p>
          <p><a href="https://www.linkedin.com/company/engineersummit/mycompany/"><box-icon name='linkedin-square' type='logo'  color={hoverEffect? greenColor : whiteColor} onMouseEnter={handleMouseOver} onMouseOut={handleMouseOut}></box-icon></a></p>
          <p><a href="https://twitter.com/engineerhub_in"><box-icon name='twitter' type='logo'  color={hoverEffect? greenColor : whiteColor} onMouseEnter={handleMouseOver} onMouseOut={handleMouseOut}></box-icon></a></p>
        </div>
      </div>

      <div className="ehb__footer-copyright">
        <p>© 2023 <a href="#home">engineerHUB</a>. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer

