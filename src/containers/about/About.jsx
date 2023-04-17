import React from 'react'
import './about.css'

import aboutImage from '../../assets/about-image.svg'

const About = () => {
  return (
    <div className='ehb__about-container'>
      <h1 className="gradient__text">About Us</h1>
      <div className='ehb__about section__padding' id='about'>
        <div className="ehb__about-image">
          <img src={aboutImage} alt="about" />
        </div>
        <div className="ehb__about-content">
          <h4>engineerHUB is INDIA's leading community of engineers where students or alumni from IITs, NITs, IIITs and state colleges unite together to develop and nurture the skills of students all over India.
              Our goal is to counsel beginners in the field by providing them with basic guidelines about how and where to start their learning.</h4>
          <ul>
            <li><p>Providing students valuable content and personal assistance.</p></li>
            <li><p>Conducting regular webinars by our leading industriallists & mentors who map out the basic blueprint expanding from their learning to placement experience.</p></li>
            <li><p>Special attention is given to the students that help them enhance their programming skills, manage projects and provide them with internship opportunities.</p></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About

