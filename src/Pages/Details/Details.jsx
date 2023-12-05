import "react-image-gallery/styles/css/image-gallery.css";
import Slider from "../../components/Slider/Slider";
import "./Details.css";
import { useEffect } from "react";
import Desc from "../../components/Description/Desc";
import Trip from "../../components/Trips/Trip";

const Details = () => {

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

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  return (
    <div className="detailsPage">
      <Slider />
      <Desc />
      <Trip heading="Upcoming Trips" data={upcomingTrips} />
    </div>
  );
};

export default Details;
