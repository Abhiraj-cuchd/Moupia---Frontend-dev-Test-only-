/* eslint-disable react/prop-types */
import "./Trip.css";
import TripData from "./TripData";

// eslint-disable-next-line react/prop-types
const Trip = ({ heading, data}) => {
  return (
    <div className="trip">
      <h1>{heading}</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        {data.map((trip, index) => (
          <TripData
            key={index}
            img={trip.img}
            heading={trip.name}
            text={trip.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Trip;
