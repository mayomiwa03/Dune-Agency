import { TestimonialSection } from "./styles";
import Quotation from "../imgs/quotationimg.png";
import Dash from "../imgs/dash.png";

const Testimonial = () => {
  return (
    <TestimonialSection>
      <div className="title">
        <h1>
          <span>Our Testimonials</span> <br /> What Our Clients are saying
        </h1>
      </div>
      <div className="cardHolder">
        <div className="card">
          <img src={Quotation} alt="" />
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries.
          </p>
          <div className="user">
            <img src={Dash} alt="" />
            <h5> UI Soup</h5>
          </div>
        </div>
        <div className="card">
          <img src={Quotation} alt="" />
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries.
          </p>
          <div className="user">
            <img src={Dash} alt="" />
            <h5> UI Soup</h5>
          </div>
        </div>
      </div>
    </TestimonialSection>
  );
};

export default Testimonial;
