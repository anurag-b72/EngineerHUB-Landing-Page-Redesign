import React from "react";
import "./header.css";
import Animation from "../../assets/Animation-unscreen.gif";
import { image01, image02, image03 } from "./imports.js";
import Article from "../../components/article/Article";

const Header = () => {
  return (
    <div className="ehb__header section__padding" id="home">
      <div className="ehb__header-content">
        <h1 className="gradient__text">engineerHUB</h1>
        <p>For the Students, Industries & Campus.</p>        
        {/* <div className="ehb__header-container"> */}
            {/* <div className="ehb__header-container_groupA">
              <Article imgURL={image03} participants="18+" title="Industries" />
            </div> */}
            <div className="ehb__header-container_groupB">
              <Article imgURL={image01} participants="50K+" title="Students" />
              <Article imgURL={image02} participants="800+" title="Campus" />
              <Article imgURL={image03} participants="18+" title="Industries" />
            </div>
      {/* </div> */}
      </div>
      <div className="ehb__header-image">
        <img src={Animation} alt="Animation" />
      </div>
    </div>
  );
};

export default Header;
