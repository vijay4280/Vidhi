import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="navbar main-navbar navbar-expand-lg sticky-top">
      <div className="container-fluid d-flex align-items-center justify-content-between">

        {/* LEFT LOGO */}
        <Link to="/" className="navbar-brand left-logo">
          <img
            src="/img/vidhi_logo-removebg-preview.png"
            className="logo-left"
            alt="Vidhi Logo"
          />
        </Link>

       

        <div className="d-flex align-items-center">

          {/* DESKTOP SEARCH */}
          <form className="navbar-search desktop-search d-none d-lg-flex">
            <input type="search" placeholder="Search products..." />
            <button type="submit"><i className="fa fa-search"></i></button>
          </form>

          {/* MOBILE SEARCH ICON */}
          <button
            className="mobile-search-btn d-lg-none me-2"
            onClick={() => setShowSearch(!showSearch)}
          >
            <i className="fa fa-search"></i>
          </button>

          {/* TOGGLER */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* COLLAPSE MENU */}
        <div className="collapse navbar-collapse" id="navbarCollapse">

          {/* MOBILE SEARCH BAR */}
          {showSearch && (
            <form className="navbar-search mobile-search d-lg-none my-2">
              <input
                type="search"
                placeholder="Search products..."
                autoFocus
              />
              <button type="submit"><i className="fa fa-search"></i></button>
            </form>
          )}

          {/* NAV LINKS */}
          <ul className="navbar-nav mx-auto align-items-lg-center">

            <li className="nav-item">
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>

            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Products
              </span>
              <ul className="dropdown-menu">
                <li> <Link className="dropdown-item" to="/products/drip">Drip Irrigation</Link> </li>
                <li> <Link className="dropdown-item" to="/products/sprinkler">Sprinkler Irrigation</Link> </li>
                <li> <Link className="dropdown-item" to="/products/rain">Rain Sprinkler</Link> </li>
                <li> <Link className="dropdown-item" to="/products/landscape">Landscape Irrigation</Link> </li>
                <li> <Link className="dropdown-item" to="/products/economical">Economical Irrigation</Link> </li>
                <li> <Link className="dropdown-item" to="/products/vidhikit">Vidhi Kit</Link> </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                About Us
              </span>
              <ul className="dropdown-menu">
                <li> <Link className="dropdown-item" to="/company-profile">Company Profile</Link> </li>
                <li> <Link className="dropdown-item" to="/founder-vision">Founder’s Vision</Link> </li>
                <li> <Link className="dropdown-item" to="/products">Our Journey</Link> </li>
                <li> <Link className="dropdown-item" to="/about">Legacy & Leadership</Link> </li>
                <li> <Link className="dropdown-item" to="/about">Manufacturing & Infrastructure</Link> </li>
                <li> <Link className="dropdown-item" to="/about">Quality Policy</Link> </li>
                <li> <Link className="dropdown-item" to="/about">Sustainability Commitment</Link> </li>
                <li> <Link className="dropdown-item" to="/about">Global Presence</Link> </li>
                <li> <Link className="dropdown-item" to="/about">Knowledge Hub</Link> </li>
                <li> <Link className="dropdown-item" to="/about">.Blog</Link> </li>
                <li> <Link className="dropdown-item" to="/about">Careers</Link> </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">Contact</NavLink>
            </li>

          </ul>

          {/* DESKTOP RIGHT LOGO */}
          {/* RIGHT LOGO → HOME */}
          <Link to="/" className="right-logo d-none d-lg-flex">
            <img
              src="/img/logo-olored.png"
              className="logo-right"
              alt="Right Logo"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
