import image from "../imgs/aboutimg.png";
import dotted from "../imgs/dottedspan.png";
import spanimg from "../imgs/aboutspan.png";
import { AboutSection } from "./styles";

const About = () => {
  return (
    <AboutSection>
      <div className="imgSide">
        <img src={image} alt="" />
        <span className="span1">
          <img src={spanimg} alt="" />
        </span>
        <span className="span2">
          <img src={dotted} alt="" />
        </span>
      </div>
      <div className="textSide">
        <h1>
          <span>About Us</span> <br /> Fake or Real
        </h1>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. <br />
          <br />
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <button>Explore More</button>
      </div>
    </AboutSection>
  );
};

export default About;
