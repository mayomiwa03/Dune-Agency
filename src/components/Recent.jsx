import { RecentSection } from "./styles";
import desk1 from "../imgs/uisoupdesktop.png";
import desk2 from "../imgs/goldcrowndesktop.png";
import desk3 from "../imgs/closedesktop.png";
import mob1 from "../imgs/uisoupmobile.png";
import mob2 from "../imgs/goldcrownmobile.png";
import icons from "../imgs/Icons.png";
import bg from "../imgs/recentspan.png";
const Recent = () => {
  return (
    <RecentSection>
      <div className="title">
        <h1>
          <span>Our Recent Work</span> <br />
          By Our Experts
        </h1>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </div>
      <div className="carousel">
        <div className="card">
          <div className="cardImg">
            <img src={desk1} alt="" />
            <img src={mob1} alt="" />
          </div>
          <div className="cardText">
            <h1>UI Soup</h1>
            <button>View Work</button>
          </div>
        </div>
        <div className="card">
          <div className="cardImg">
            <img src={desk2} alt="" />
            <img src={mob2} alt="" />
          </div>
          <div className="cardText">
            <h1>Goldcrown Labs</h1>
            <button>View Work</button>
          </div>
        </div>
        <div className="card">
          <div className="cardImg">
            <img src={desk3} alt="" />
          </div>
          <div className="cardText">
            <h1>Close Concierge</h1>
          </div>
        </div>
      </div>
      <img className="imgg" src={icons} alt="" />
      <span className="span">
        <img src={bg} alt="" />
      </span>
    </RecentSection>
  );
};

export default Recent;
