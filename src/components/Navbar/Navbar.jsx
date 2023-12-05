import "./Navbar.css";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FaCircleInfo } from "react-icons/fa6";
import { GiTreasureMap } from "react-icons/gi";
import { RiContactsBookFill } from "react-icons/ri";
import { MdReviews } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [showNav, setShowNav] = useState(false);


  const handleMenuIcons = () => {
    setToggle(!toggle);
    setShowNav(!showNav);
  }

  return (
    <div className="navbarItems">
      <h1 className="navbar-logo">MOUPIA</h1>
      <div onClick={handleMenuIcons} className="menuIcons">
        {toggle ? <IoClose /> : <RxHamburgerMenu />}
      </div>

      <ul className={ showNav ? "nav-menu active" : "nav-menu"}>
        <Link className="nav-links" to="/" onClick={handleMenuIcons}>
          <li>
            <div className="MyMenu">
              <AiFillHome className="icon" />
              Home
            </div>
          </li>
        </Link>

        <Link className="nav-links" to="/about" onClick={handleMenuIcons}>
          <li>
            <div className="MyMenu">
              <FaCircleInfo className="icon" />
              About
            </div>
          </li>
        </Link>

        <Link className="nav-links" to="/trips" onClick={handleMenuIcons}>
          <li>
            <div className="MyMenu">
              <GiTreasureMap className="icon" />
              Trips
            </div>
          </li>
        </Link>

        <Link className="nav-links" to="/contact" onClick={handleMenuIcons}>
          <li>
            <div className="MyMenu">
              <RiContactsBookFill className="icon" />
              Contact
            </div>
          </li>
        </Link>

        <Link className="nav-links" to="/reviews" onClick={handleMenuIcons}>
          <li>
            <div className="MyMenu">
              <MdReviews className="icon" />
              Reviews
            </div>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
