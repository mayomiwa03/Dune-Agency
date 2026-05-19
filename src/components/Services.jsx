import icons from "../imgs/Icons.png";
import web from "../imgs/web.png";
import dev from "../imgs/dev.png";
import mobile from "../imgs/mobile.png";
import rocket from "../imgs/rocket.png";
import { ServiceSection } from "./styles";

const Services = () => {
  return (
    <ServiceSection ServiceSection>
      <div className="textSide">
        <h1>
          <span>What We Do</span> <br />
          For Your Business
        </h1>
      </div>
      <div className="cardWrapper">
        <img className="icons" src={icons} alt="" />
        <div className="cardholder">
          <div className="imggg">
            <img src={web} alt="" />
          </div>
          <h1>Website Design</h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s.
          </p>
        </div>
        <div className="cardholder">
          <div className="imggg">
            <img src={dev} alt="" />
          </div>
          <h1>Web Development</h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s.
          </p>
        </div>
        <div className="cardholder">
          <div className="imggg">
            <img src={mobile} alt="" />
          </div>
          <h1>Mobile APP Development</h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s.
          </p>
        </div>
        <div className="cardholder">
          <div className="imggg">
            <img src={rocket} alt="" />
          </div>
          <h1>Marketing</h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s.
          </p>
        </div>
      </div>
    </ServiceSection>
  );
};

export default Services;
