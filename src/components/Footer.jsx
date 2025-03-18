import "./Components.css";

import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="container-footer">
      <div className="footer">
        <p className="text-light text-cente py-2 text-center">
          <FaWhatsapp className="react-icons-footer" />
          (19) 97100 6604
        </p>
      </div>
    </footer>
  );
};

export default Footer;
