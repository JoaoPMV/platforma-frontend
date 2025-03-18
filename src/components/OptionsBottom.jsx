import React from "react";
import { NavLink } from "react-router-dom"; // Use navigate para redirecionar
import { GrAssistListening } from "react-icons/gr";
import { BiNews } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { RiSpeakFill } from "react-icons/ri";
import "./Components.css";

const Options = () => {
  return (
    <div className="container-fluid container-options-bottom">
      <div className="row row-options-bottom">
        <div className="col col-music-bottom">
          <NavLink to="">
            <RiSpeakFill className="icons-options" />
          </NavLink>
          <p className="options-word">speaking</p>
        </div>
        <div className="col col-music-bottom">
          <NavLink to="">
            <GrAssistListening className="icons-options" />
          </NavLink>
          <p className="options-word">listening</p>
        </div>

        <div className="col col-music-bottom">
          <NavLink to="">
            <BiNews className="icons-options" />
          </NavLink>
          <p className="options-word">news</p>
        </div>
        <div className="col col-music-bottom">
          <NavLink to="/">
            <FaHome className="icons-options" />
          </NavLink>
          <p className="options-word">home</p>
        </div>
      </div>
    </div>
  );
};

export default Options;
