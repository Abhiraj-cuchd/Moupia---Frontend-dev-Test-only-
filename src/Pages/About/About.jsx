import Hero from "../../components/Hero/Hero";
import "./About.css";
import AboutUs from "../../components/About/AboutUs";
import Testimonial from '../../components/Testimonial/Testimonial'
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero
        cName="hero"
        heroImg="https://images.pexels.com/photos/4993107/pexels-photo-4993107.jpeg?auto=compress&cs=tinysrgb&w=1600"
        title="About Us"
        text="Your Adventures , Our Service"
      />
      <AboutUs
        flag={false}
        img="https://images.pexels.com/photos/5064679/pexels-photo-5064679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <Testimonial heading="Meet Out Team" subHeading="Servicing your Adventure" />
    </div>
  );
};

export default About;
