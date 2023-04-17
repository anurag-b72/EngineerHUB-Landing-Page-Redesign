import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/logo.png"

function Menu () {
  return (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#about">About Us</a></p>
  <p><a href="#about">Domains</a></p>
  <p><a href="#about">Courses</a></p>
  <p><a href="#about">Internship</a></p>
  <p><a href="#about">Magazine</a></p>
  </>
  )
}

function alertFunction ()  {
  return (
    alert("Button clicked, alert message displayed!")
  )
}

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="ehb__navbar">
      <div className="ehb__navbar-links">
        <div className="ehb__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="ehb__navbar-links_container">
          <Menu />
        </div> 
      </div>
      <div className="ehb__navbar-sign">
        <button type="button" onClick={alertFunction}>Sign up</button>
      </div>
      <div className="ehb__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="ehb__navbar-menu_container scale-up-center">
            <div className="ehb__navbar-menu_container-links">
              <Menu />
              <div className="ehb__navbar-menu_container-links-sign">
                {/* <p>Sign in</p> */}
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;


