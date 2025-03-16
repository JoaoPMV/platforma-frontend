import React from "react";
import { NavLink } from "react-router-dom"; // Use navigate para redirecionar
import { SiApplemusic } from "react-icons/si";
import { SiGrammarly } from "react-icons/si";
import { FaVideoSlash } from "react-icons/fa6";
import { MdMenuBook } from "react-icons/md";
import "./Components.css";

const Options = () => {
  return (
    <div className="container-fluid container-options">
      <div className="row row-options-top">
        <div className="col col-music-top">
          <NavLink to="/platform/music">
            <SiApplemusic className="icons-options" />
          </NavLink>
          <p className="options-word">music</p>
        </div>
        <div className="col col-music-top">
          <NavLink to="">
            <SiGrammarly className="icons-options" />
          </NavLink>
          <p className="options-word">grammar</p>
        </div>

        <div className="col col-music-top">
          <NavLink to="">
            <MdMenuBook className="icons-options" />
          </NavLink>
          <p className="options-word">reading</p>
        </div>
        <div className="col col-music-top">
          <NavLink to="">
            <FaVideoSlash className="icons-options" />
          </NavLink>
          <p className="options-word">video</p>
        </div>
      </div>
    </div>
  );
};

export default Options;
