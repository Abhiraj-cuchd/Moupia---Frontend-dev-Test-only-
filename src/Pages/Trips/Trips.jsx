import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Trip from "../../components/Trips/Trip";
import "./Trips.css";

const Trips = () => {
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

  const popularTrips = [
    {
      img: "https://liamtra.com/blog/wp-content/uploads/2022/06/Island-1024x585.jpg",
      name: "Majuli Island",
      desc: "ndonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea.",
    },
    {
      img: "https://iorahotels.com/iora-the-retreat-kaziranga/assets/images/jeep-744x495.jpg",
      name: "Kaziranga National Park",
      desc: "ndonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea.",
    },
    {
      img: "https://media-cdn.tripadvisor.com/media/photo-p/21/e3/1d/6a/waterfall.jpg",
      name: "Kakochang Waterfalls",
      desc: "ndonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea.",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero
        cName="hero"
        heroImg="https://images.pexels.com/photos/2409681/pexels-photo-2409681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Explore Trips"
        text="Select your Adventures"
      />
      <Trip heading="Upcoming Trips" data = {upcomingTrips} />
      <Trip heading="Popular Trips" data = {popularTrips} />
    </div>
  );
};

export default Trips;
