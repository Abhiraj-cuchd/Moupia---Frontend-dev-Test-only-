import './Testimonial.css'
import "../Destination/Destination.css";

// eslint-disable-next-line react/prop-types
const TestimonialCard = ({ img, title, review }) => {
  return (
    <div className="t-card2">
      <div className="t-image2">
        <img src={img} alt="image" />
      </div>
      <h4>{title}</h4>
      <p>{review}</p>
    </div>
  );
};

export default TestimonialCard;
