import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Moupia</h1>
          <p>Choose your Favourite Destination</p>
        </div>
        <div>
          <a href="/" className="iconsss">
            <FaFacebook />
          </a>
          <a href="/" className="iconsss">
            <FaInstagram />
          </a>
          <a href="/" className="iconsss">
            <FaXTwitter />
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
            <h4>Trips</h4>
            <a href="/">Changelog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">Al version</a>
        </div>
        <div>
            <h4>Services</h4>
            <a href="/">Changelog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">Al version</a>
        </div>
        <div>
            <h4>Support</h4>
            <a href="/">Changelog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">Al version</a>
        </div>
        <div>
            <h4>Contact</h4>
            <a href="/">Changelog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">Al version</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
