import React from "react";
import { NavLink } from "react-router-dom"; // Use navigate para redirecionar
import { SiApplemusic } from "react-icons/si";
import { SiGrammarly } from "react-icons/si";
import { FaVideoSlash } from "react-icons/fa6";
import "./Components.css";

const Options = () => {
  return (
    <div className="container-fluid">
      <div className="row row-options">
        <div className="col col-music">
          <NavLink to="/platform/music">
            <SiApplemusic className="icons-options" />
          </NavLink>
          <p className="options-word">music</p>
        </div>
        <div className="col col-music">
          <NavLink to="/platform/video">
            <FaVideoSlash className="icons-options" />
          </NavLink>
          <p className="options-word">video</p>
        </div>

        <div className="col col-music">
          <NavLink to="">
            <SiGrammarly className="icons-options" />
          </NavLink>
          <p className="options-word">grammar</p>
        </div>
      </div>
    </div>
  );
};

export default Options;
