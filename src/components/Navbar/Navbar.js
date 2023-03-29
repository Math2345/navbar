import { useState } from "react";

// data
import { MenuItems } from "../../data";

//components
import Button from "../Button/Button";

// styles
import "./Navbar.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">
        React <i className="fab fa-react"></i>
      </h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((menuItem, index) => (
          <li key={index}>
            <a className={menuItem.cName} href={menuItem.url}>
              {menuItem.title}
            </a>
          </li>
        ))}
      </ul>
      <Button>Sign Up</Button>
    </nav>
  );
};

export default Navbar;
