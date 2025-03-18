import "./Components.css";

import { RiArrowGoBackFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const FooterMusic = () => {
  return (
    <footer className="d-flex justify-content-center container-footerMusic">
      <div className="footer-music">
        <NavLink to="/platform/music">
          <RiArrowGoBackFill className="icons-FooterMusic" />
        </NavLink>
      </div>
    </footer>
  );
};

export default FooterMusic;
