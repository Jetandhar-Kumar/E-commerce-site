import React from "react";
import {
  Check,
  Search,
  Info,
  Armchair,
  Heart,
  ShoppingCart,
  User,
  Menu,
} from "lucide-react";
import { Link, NavLink } from "react-router";
import "../../Stylesheets/navbar.css"; // Import External CSS

const Navbar = () => {
  return (
    <div>
      {/* Navbar Top */}
      <div className="navbar_top">
        <p>
          <Check />
          Free on all orders over $50
        </p>
        <div className="navbar_top_right">
          <select defaultValue="ENG">
            <option>ENG</option>
            <option>Urdu</option>
          </select>
          <Link to="/faqs">Faqs</Link>
          <Link to="/help" className="navtophelp">
            <Info /> Need Help
          </Link>
        </div>
      </div>

      {/* Navbar Middle */}
      <div className="navbar_middle">
        {/* Logo */}
        <Link to="/" className="navbar_logo">
          <Armchair size="2rem" color="#029fae" />
          Comforty
        </Link>

        {/* Search Box */}
        <div className="search_box">
          <input type="text" placeholder="Search here..." />
          <button>
            <Search size="22px" color="#272343" />
          </button>
        </div>

        {/* Navbar Right Section */}
        <div className="navbar_right">
          <button className="cart_button">
            <ShoppingCart /> Cart <span className="badge">2</span>
          </button>
          <button className="heart_button">
            <Heart />
          </button>
          <div className="dropdown heart_button">
            <button className="heart_button">
              <User />
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link to="/account">Account</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navbar Bottom */}
      <div className="navbar_bottom">
        <div className="navbar_bottom_left">
          <button className="menu_category">
            <Menu /> All Categories
          </button>
          <nav className="nav_links">
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/product">Product</NavLink>
            <NavLink to="/pages">Pages</NavLink>
            <NavLink to="/about">About</NavLink>
          </nav>
        </div>
        <p className="nav_contact">
          Contact: <span>(808) 555-0111</span>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
