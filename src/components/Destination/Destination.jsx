import { Link } from "react-router-dom";
import "./Destination.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>
      <div className="first-des">
        <div className="des-text">
          <h2>Kamakhya Temple</h2>
          <p>
            One of the most iconic views in Luzon, Mt. Taal boasts a volcano
            inside a lake inside an island. If you fancy a closer look, the hike
            up to the crater is a mere 45 minutes, and is easy enough for
            beginners. Guides will assist you most of the way, and see the
            peculiar environment found on an active volcano, including volcanic
            rocks and steam vents. The hike can be dusty and hot, so plan for an
            early morning trip, and then unwind with some bulalo before heading
            back home!
          </p>
          <div className="buttons">
            <Link to="/trip-details/2" style={{ textDecoration: "none" }}>
              <div className="show-details">Show Details</div>
            </Link>
          </div>
        </div>
        <div className="image">
          <img
            src="https://www.researchgate.net/publication/332428471/figure/fig1/AS:756754342240256@1557435703110/K-am-akhy-a-temple-Assam-Photo-by-author-June-2017.jpg"
            alt="Kamakhya"
          />
          <img
            src="https://images.news18.com/ibnlive/uploads/2021/06/1624720797_kamakhya-temple.jpg"
            alt="Kamakhya"
          />
        </div>
      </div>
      <div className="second-des">
        <div className="image">
          <img
            src="https://media-cdn.tripadvisor.com/media/photo-s/0f/2a/06/41/barail-hills-haflong.jpg"
            alt="Kamakhya"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBT2PB1COqqQjZOGwj9-A-smEKAFxebJ7DzA&usqp=CAU"
            alt="Kamakhya"
          />
        </div>
        <div className="des-text">
          <h2>Dima Hasao</h2>
          <p>
            If you’re looking for a hike that’s a little more challenging but
            still good for a beginner mountaineer, check out Mt. Daguldul in San
            Juan, Batangas. You’ll start your hike from the beach and pass
            through tropical forest, different rock formations, and small
            streams. There’s a small store halfway up the trail where you can
            take a break and drink buko juice, and though the summit itself may
            not have the best view, the breeze is fantastic. Once you’ve made it
            back down, head straight to the beach for a refreshing,
            well-deserved swim.
          </p>
          <div className="buttons">
            <Link to="/trip-details/1" style={{ textDecoration: "none" }}>
              <div className="show-details">Show Details</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
