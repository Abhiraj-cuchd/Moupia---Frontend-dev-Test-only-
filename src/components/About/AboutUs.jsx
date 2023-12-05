import "./AboutUs.css";
import "../Destination/Destination.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AboutUs = ({ flag, img }) => {
  return (
    <>
      <h2 className={flag ? "aboutHeading" : "hiddenHeading"}>About Us</h2>
      <div className="about">
        <div className="left">
          <p>
            TripNaari is a women-oriented travels and tours company, specialized
            in providing handcrafted travel services, covering various domestic
            and international destinations. Being a customer-centric company, we
            offer more than just a travel service. We are for women from all
            spheres of life – be it a housewife, a mother, a student, a
            professional and even a grandmother. TripNaari is all about an
            experience where you become the centre of this vast universe and
            take away with you beautiful memories which will last forever. With
            our services, we promise to dissolve all the diversities such as,
            age, ethnicity, race, caste, country, economic status, and personal
            life, and bring everyone together in one common platform. To see you
            smile, share, proceed, progress and enjoy every moment of this
            amazing and gifted life, we ensure to do it all it takes in the few
            hours you spend with us.
          </p>
          <Link to="/about" style={{ textDecoration: "none" }}>
            {flag ? (
              <div className="show-enq" style={{ backgroundColor: "coral" }}>
                Read More
              </div>
            ) : (
              ""
            )}
          </Link>
        </div>
        <div className="right">
          <img
            src={img}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;


//https://images.pexels.com/photos/3290072/pexels-photo-3290072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1