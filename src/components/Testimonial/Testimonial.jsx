import TestimonialCard from "./TestimonialCard";
import "./Testimonial.css";

// eslint-disable-next-line react/prop-types
const Testimonial = ({heading, subHeading}) => {
  const data = [
    {
      name: "Mahesh Kumar",
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      review:
        "One of the best customer services ever had. Assam is an awesome place to visit",
    },
    {
      name: "Radha Singh",
      img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      review:
        "One of the best customer services ever had. Assam is an awesome place to visit",
    },
    {
      name: "Raju Rastogi",
      img: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      review:
        "One of the best customer services ever had. Assam is an awesome place to visit",
    },
  ];

  return (
    <div className="testimonial">
      <h2>{heading}</h2>
      <p>{subHeading}</p>
      <div className="testimonialCard">
        {data.map((item, index) => (
          <TestimonialCard
            key={index}
            title={item.name}
            img={item.img}
            review={item.review}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
