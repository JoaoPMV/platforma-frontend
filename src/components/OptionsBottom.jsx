import React from "react";
import { NavLink } from "react-router-dom"; // Use navigate para redirecionar
import { MdMenuBook } from "react-icons/md";
import { GrAssistListening } from "react-icons/gr";
import { BiNews } from "react-icons/bi";
import "./Components.css";

const Options = () => {
  return (
    <div className="container-fluid">
      <div className="row row-options">
        <div className="col col-music">
          <NavLink to="">
            <MdMenuBook className="icons-options" />
          </NavLink>
          <p className="options-word">reading</p>
        </div>
        <div className="col col-music">
          <NavLink to="">
            <GrAssistListening className="icons-options" />
          </NavLink>
          <p className="options-word">listening</p>
        </div>

        <div className="col col-music">
          <NavLink to="">
            <BiNews className="icons-options" />
          </NavLink>
          <p className="options-word">news</p>
        </div>
      </div>
    </div>
  );
};

export default Options;
