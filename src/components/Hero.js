import React, { useState } from "react";
import Drake from "../assets/images/Drake.webp"
import "./Hero.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import unsolid from "../assets/svgs/unsolid.svg";

function Hero() {

const[isBigger, setIsBigger] = useState(false)

const handleSvgClick = () => {
  setIsBigger(true);

  setTimeout(() => {
    setIsBigger(false)
  }, 300)
}

  return (
    <section className="hero">
      <div className="splash-container">
        <div className="splash-img">
          <h1>This is the splash art</h1>
        </div>
      </div>
      <div className="face-container">
      <FontAwesomeIcon className={`fa ${isBigger ? 'bigger': ''} `} icon={faLightbulb} onClick={handleSvgClick}/>
      {/* <img className="fa" src={unsolid}/> */}
        <div className="face-img">
          <img src={Drake}/>
        </div>
      </div>
    </section>
  );
}

export default Hero;
