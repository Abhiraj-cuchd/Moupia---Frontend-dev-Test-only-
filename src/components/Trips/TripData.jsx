import "./Trip.css";
import "../Destination/Destination.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const TripData = ({ img, heading, text, key }) => {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={img} alt="image" />
      </div>
      <h4>{heading}</h4>
      <p>{text}</p>
      <div className="buttons">
        <Link to={`/trip-details/${key}`} style={{ textDecoration: "none" }}>
          <div className="show-details">Show Details</div>
        </Link>
      </div>
    </div>
  );
};

export default TripData;
