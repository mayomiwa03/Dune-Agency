import React from "react";
import mapImg from "../imgs/map.png";
import { FooterSection } from "./styles";

const Footer = () => {
  return (
    <FooterSection>
      <div className="textSide">
        <h1>Dream Agency</h1>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries.
        </p>
        <a href="">Get in touch</a>
        <div className="mail">
          <input type="email" placeholder="enter your email" />
          <button>Send</button>
        </div>
      </div>
      <div className="imgSide">
        <img src={mapImg} alt="" />
      </div>
    </FooterSection>
  );
};

export default Footer;
