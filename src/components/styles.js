import styled from "styled-components";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    font-family: "Hind Vadodara", sans-serif;
    overflow-x: none;
  
  }
   
`;

export default GlobalStyle;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1250px;
  margin: 1rem auto;

  #toggle,
  .hamb {
    display: none;
  }
  .navItems {
    display: flex;
    align-items: center;
    gap: 2rem;

    a {
      text-decoration: none;
      text-transform: capitalize;
      color: #000;
    }
    a:hover {
      font-weight: 700;
      border-bottom: 2px solid;
    }
  }

  h1 {
    font-size: 1.5rem;
    font-family: "Playfair Display", serif;
  }
  .navIcons {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  span {
    border: 1px solid;
    padding: 0.4rem;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3rem 1rem;
  }
  @media (min-width: 260px) and (max-width: 500px) {
    padding: 0 0.5rem;

    .lSide {
      display: none;
      backdrop-filter: blur(20px);
      opacity: 0.9;
      width: 30%;
      left: 0;
      top: 4.5rem;
      padding: 0.5rem 1.2rem;
      position: absolute;

      z-index: 2;
      gap: 1rem;
      .navItems {
        flex-direction: column;
        a {
          font-weight: 500;
        }
      }
    }
    .hamb {
      display: block;
      font-size: 1rem;
    }
    .navIcons {
      gap: 0.7rem;
      span {
        padding: 2px;
        width: 18px;
        height: 18px;
        svg {
          width: 10px;
        }
      }
    }
    #toggle:checked + .lSide {
      display: block;
    }
    h1 {
      font-size: 1rem;
    }
  }
`;
export const HeroSection = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
  max-width: 1250px;
  margin: 5rem auto;

  .Textside {
    flex: 4;
    h1 {
      font-size: 4.5rem;
      width: 90%;
      font-weight: 400;

      span {
        font-weight: 800;
      }
    }
    p {
      font-size: 1.2rem;
    }
    button {
      text-transform: uppercase;
      padding: 1rem 3rem;
      background-color: #331b3b;
      color: #fff;
      border-radius: 10px;
    }
  }
  .Imgside {
    position: relative;
    flex: 6;

    img {
      width: 100%;
    }
    .span1 {
      position: absolute;
      top: -60px;
      right: 100px;
      z-index: -1;
      img {
        width: 450px;
      }
    }

    .span2 {
      position: absolute;
      top: 30px;
      right: 130px;
      z-index: -2;
      img {
        width: 600px;
        height: 500px;
      }
    }
  }
  .headerSpan {
    position: absolute;
    top: -10px;
    right: 250px;
    z-index: -3;
  }
  @media (min-width: 260px) and (max-width: 500px) {
    flex-direction: column;
    .Textside {
      padding-inline: 1.5rem;
      h1 {
        font-size: 2.5rem;
        line-height: 1;
        word-spacing: 1;
      }
      p {
        margin-bottom: 2rem;
      }
    }
    .Imgside {
      margin: 3rem 1rem;
      .span1 {
        top: -90px;
        right: 20px;
        img {
          width: 260px;
        }
      }

      .span2 {
        top: 15px;
        right: 70px;
        img {
          width: 290px;
          height: 250px;
        }
      }
    }
    .headerSpan {
      top: 320px;
      right: 0px;
      img {
        width: 300px;
      }
    }
  }
`;
export const ServiceSection = styled.div`
  max-width: 1250px;
  margin: 20rem auto 1rem;
  position: relative;

  .textSide {
    h1 {
      font-weight: 300;
      font-size: 3rem;
      text-align: center;
      span {
        font-weight: 800;
      }
    }
  }
  .cardWrapper {
    display: flex;
    gap: 3rem;
    align-items: end;
    justify-content: end;
    margin: 5rem 0 5rem 10rem;
    .icons {
      width: 100px;
      height: 40px;
    }
    .cardholder {
      width: 250px;
      display: flex;
      flex-direction: column;
      padding: 1rem;
      border-radius: 10px;
      background-color: #fff;
      h1 {
        font-size: 1.3rem;
      }
      p {
        font-size: 1.2rem;
        font-weight: 300;
      }
      .imggg {
        img {
          width: 25px;
          padding: 0.5rem;
          background-color: #ffded4;
          border-radius: 10px;
        }
      }
    }
    .cardholder:nth-child(3) .imggg img {
      background-color: #ffeed4;
    }
    .cardholder:nth-child(4) .imggg img {
      background-color: #d4f0ff;
    }
    .cardholder:nth-child(5) .imggg img {
      background-color: #ffd4d4;
    }
  }
  .bckg {
    position: absolute;
    top: -90px;
    left: 0;
    z-index: -1;
    img {
      height: 550px;

      width: 1200px;
    }
  }
  @media (min-width: 260px) and (max-width: 500px) {
    margin: 5rem auto 1rem;

    .cardWrapper {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      gap: 1rem;
      .icons {
        display: none;
      }
      .cardholder {
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
      }
    }
    .bckg {
      display: none;
    }
  }
`;
export const AboutSection = styled.div`
  max-width: 1250px;
  margin: 1rem auto;

  display: flex;
  align-items: center;
  gap: 3rem;
  .imgSide {
    position: relative;
    img {
      width: 100%;
    }
    .span1 {
      position: absolute;
      top: 210px;
      left: 45px;
      z-index: -1;
      img {
        width: 95%;
      }
    }
    .span2 {
      position: absolute;
      top: 230px;
      left: 40px;
      z-index: -2;
      img {
        width: 620px;
        height: 570px;
      }
    }
  }
  .textSide {
    gap: 1.5rem;

    width: 400px;
    h1 {
      font-size: 2.5rem;
      font-weight: 300;
      span {
        font-weight: 800;
      }
    }
    p {
      font-size: 1.2rem;
    }
    button {
      background-color: #331b3b;
      color: #fff;
      border-radius: 10px;
      padding: 1rem 3rem;
      text-transform: uppercase;
    }
  }
  @media (min-width: 260px) and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    .textSide {
      width: 90%;
      padding-inline: 3rem;
      p {
        margin-bottom: 3rem;
      }
      button {
        font-size: 0.9rem;
        padding: 0.8rem 2rem;
      }
    }
    .imgSide {
      .span1 {
        position: absolute;
        top: 100px;
        left: 20px;
        z-index: -1;
        img {
          width: 80%;
        }
      }
      .span2 {
        top: 90px;
        left: 10px;
        img {
          width: 290px;
          height: 270px;
        }
      }
    }
  }
`;
export const RecentSection = styled.div`
  max-width: 1250px;
  margin: 1rem auto;
  position: relative;

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-weight: 300;
      font-size: 3rem;
      text-align: center;
    }
    /* .underline {
      border-bottom: 1px solid #fdc021;
      font-weight: 300;
    } */
    h1 span {
      font-weight: 800;
    }

    p {
      font-size: 1.3rem;
      width: 450px;
    }
  }

  .carousel {
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: end;
    margin: 3rem 0;
  }
  .card {
    background-color: #fff;
    padding: 1rem;
    border-radius: 10px;
  }
  .cardImg {
    display: flex;
  }
  .cardText {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 1rem;

    h1 {
      font-size: 1.5rem;
    }
    button {
      font-size: 0.8rem;
      padding: 0.1rem 1rem;
      height: 2rem;
      border-radius: 100px;
      border: 0.5px solid;
    }
  }
  .imgg {
    padding-left: 5rem;
  }
  .span {
    position: absolute;
    top: -100px;
    right: 0;
    z-index: -1;
    img {
      width: 1150px;
    }
  }
  @media (min-width: 260px) and (max-width: 500px) {
    .title {
      flex-direction: column;
      h1 {
        font-size: 2.5rem;
      }
      p {
        text-align: center;
        width: 90%;
      }
    }
    .carousel {
      flex-direction: column;

      .card {
        .cardImg {
          img {
            width: 70%;
          }
        }
      }
    }
    .imgg {
      display: none;
    }
    .span {
      display: none;
    }
  }
`;
export const TestimonialSection = styled.div`
  max-width: 950px;
  margin: 6rem auto;

  .title {
    h1 {
      font-weight: 300;
      font-size: 3rem;
      text-align: center;
    }
    h1 span {
      font-weight: 800;
    }
  }
  .cardHolder {
    display: flex;
    align-items: center;
    gap: 5rem;
    .card {
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
      padding: 2rem;

      p {
        font-size: 1.3rem;
        width: 95%;
      }
      .user {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 1.3rem;
      }
    }
  }

  @media (min-width: 260px) and (max-width: 500px) {
    .title {
      h1 {
        font-size: 2.5rem;
      }
    }
    .cardHolder {
      flex-direction: column;
      padding: 1.5rem;
    }
  }
`;

export const FooterSection = styled.footer`
  background-color: #000000;
  color: #fff;
  display: flex;
  align-items: center;
  border-top-right-radius: 150px;
  padding: 4rem 3rem;
  max-width: 1250px;
  margin: 1rem auto;

  .textSide {
    h1 {
      font-family: "Playfair Display", serif;
      font-size: 3rem;
      font-weight: 700;
      text-transform: capitalize;
    }
    p {
      width: 70%;
      font-weight: 400;
      font-size: 16px;
    }
    a {
      color: #fff;
      font-weight: 600;
      font-size: 16px;
      text-transform: uppercase;
      text-decoration: none;
    }
    .mail {
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 1px solid #fff;
      margin-top: 2rem;

      input {
        background: transparent;
        border: none;
        outline: none;
        padding-left: 1rem;
        font-size: 16px;
        text-transform: uppercase;
      }
      input:hover,
      input:active {
        color: #fff;
      }
      input::placeholder {
        color: #fff;
      }
      button {
        background-color: #fff;
        color: #000000;
        border: none;
        padding: 1rem 2rem;
        font-size: 16px;
        text-transform: uppercase;
        font-weight: 600;
      }
      button:hover {
        background: transparent;
        color: #fff;
      }
    }
  }
  .imgSide {
    padding-right: 7rem;
    img {
      width: 450px;
    }
  }
  @media (min-width: 260px) and (max-width: 500px) {
    flex-direction: column;
    margin: 0;
    padding: 1.5rem;
    align-items: start;

    .textSide {
      h1 {
        font-size: 2.5rem;
      }
      p,
      a,
      input,
      input::placeholder {
        font-size: 12px;
      }
      .mail {
        width: 70%;
        justify-content: space-around;
        button {
          font-size: 12px;
        }
      }
    }
    .imgSide {
      margin-top: 2rem;
      img {
        width: 110%;
      }
    }
  }
`;
