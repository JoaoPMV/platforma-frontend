import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import "./Components.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <FaBarsStaggered size={30} color="white" />
        </button>
        <div
          className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/" onClick={closeMenu}>
              Home
            </NavLink>
            <NavLink className="nav-link" to="/platform" onClick={closeMenu}>
              Plataforma
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
