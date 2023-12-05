import "./Hero.css";

// eslint-disable-next-line react/prop-types
const Hero = ({ cName, heroImg, title, text }) => {
  return (
    <div className={cName}>
      <div className="overlay"></div>
      <img src={heroImg} alt="" />

      <div className="hero-text">
        
        <div className="text-div">
          <h1>{title}</h1>
          <p className="about_sub">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
