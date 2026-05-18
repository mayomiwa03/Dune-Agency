import styled from "styled-components";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    font-family: "Hind Vadodara", sans-serif;
  }
`;

export default GlobalStyle;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1250px;
  margin: 1rem auto;

  .navItems {
    display: flex;
    align-items: center;
    gap: 2rem;

    a {
      text-decoration: none;
      text-transform: capitalize;
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
`;
export const HeroSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: 1250px;
  margin: 1rem auto;

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
    span {
      position: absolute;
    }
    span:first-child {
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
    span {
      position: absolute;
    }
  }
  .textSide {
    width: 400px;
    h1 {
      font-size: 3rem;
      font-weight: 300;
      span {
        font-weight: 800;
      }
    }
    p {
      font-size: 1.3rem;
    }
    button {
      background-color: #331b3b;
      color: #fff;
      border-radius: 10px;
      padding: 1rem 3rem;
      text-transform: uppercase;
    }
  }
`;
export const RecentSection = styled.div`
  max-width: 1250px;
  margin: 1rem auto;

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-weight: 300;
      font-size: 3rem;
      text-align: center;
    }
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
`;
export const TestimonialSection = styled.div`
  max-width: 950px;
  margin: 6rem auto;

  .title h1 {
    font-weight: 300;
    font-size: 3rem;
    text-align: center;
  }
  .title h1 span {
    font-weight: 800;
  }
  .cardHolder {
    display: flex;
    align-items: center;
    gap: 5rem;
  }
  .card {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    padding: 2rem;

    p {
      font-size: 1.3rem;
      width: 95%;
    }
  }
  .user {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.3rem;
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
`;
