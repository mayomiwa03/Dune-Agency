import React from "react";
import { HeroSection } from "./styles";
import heroImg from "../imgs/HeroImg.png";
import heroSpan from "../imgs/Herospan.png";
import dotted from "../imgs/dottedspan.png";
import bg from "../imgs/Headerspan.png";

const Hero = () => {
  return (
    <HeroSection>
      <div className="Textside">
        <h1>
          <span>We Help you</span> <br /> to grow your Business
        </h1>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <button>Get started</button>
      </div>
      <div className="Imgside">
        <img src={heroImg} alt="" />
        <span className="span span1">
          <img src={heroSpan} alt="" />
        </span>
        <span className="span span2">
          <img src={dotted} alt="" />
        </span>
      </div>
      <span className="headerSpan">
        <img src={bg} alt="" />
      </span>
    </HeroSection>
  );
};

export default Hero;
