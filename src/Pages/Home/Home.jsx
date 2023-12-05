import "./Home.css";
import VideoBg from "../../assets/vbg2.mp4";
import { Link } from "react-router-dom";
import Destination from "../../components/Destination/Destination";
import Trip from "../../components/Trips/Trip";
import { useEffect } from "react";
import AboutUs from "../../components/About/AboutUs";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {

  useEffect(() => { window.scrollTo(0,0)},[])

  const upcomingTrips = [
    {
      img: "https://static.toiimg.com/photo/66346364.cms",
      name: "Haflong Hill Station",
      desc: "ndonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea.",
    },
    {
      img: "https://1.bp.blogspot.com/-vgYKwuKH7CE/YMiqR-pwBGI/AAAAAAAAVJA/0MHgBae1rFcONggscd_MrS79uNQzFDujgCLcBGAsYHQ/w1200-h630-p-k-no-nu/Gibbon_wildlife_san.webp",
      name: "Hoollongapar Gibbon Wildlife Sanctuary",
      desc: "ndonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea.",
    },
    {
      img: "https://national-parks.in/wp-content/uploads/2023/07/Screenshot-2023-07-23-104701-min.png",
      name: "Nameri National Park",
      desc: "ndonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea.",
    },
  ];


  return (
    <>
      <div className="main">
        <div className="overlay"></div>
        <video src={VideoBg} autoPlay loop muted></video>
        <div className="content">
          <h1 className="heroHeading">Your Journey Your Story</h1>
          <p className="subHeading">WELCOME TO  MOUPIA - Your Travel Partner</p>
          <Link to='/trips' style={{textDecoration: 'none'}}>
            <div className="btn">Explore Trips</div>
          </Link>
        </div>
      </div>
      <Destination />
      <Trip heading="Upcoming Trips" data={upcomingTrips}/>
      <AboutUs flag={true} img="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Testimonial heading="Our Happy Clients" subHeading="See what our clients have to say" />
    </>
  );
};

export default Home;
