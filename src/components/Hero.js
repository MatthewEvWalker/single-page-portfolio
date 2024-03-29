import React, { useState } from "react";
import drake from "../assets/images/Drake.webp";
import "./Hero.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  const [isBigger, setIsBigger] = useState(false);

  const handleSvgClick = () => {
    setIsBigger(true);

    setTimeout(() => {
      setIsBigger(false);
    }, 300);
  };

  return (
    <section id="hero" className="hero">
      <div className="splash-container">
        <div className="splash-img">
            <h1>
              Hi, my <br />
              name is <b className="bold">Matthew</b>
            </h1>
            <h3>React Dev | Advanced Javascript Skills | Python Programmer </h3>
        </div>
      </div>
      <div className="face-container">
        <FontAwesomeIcon
          className={`fa ${isBigger ? "bigger" : ""} `}
          icon={faLightbulb}
          onClick={handleSvgClick}
        />
        {/* <img className="fa" src={unsolid}/> */}
        <div className="face-img">
          <img src={drake} alt=""/>
        </div>
      </div>
    </section>
  );
}

export default Hero;
