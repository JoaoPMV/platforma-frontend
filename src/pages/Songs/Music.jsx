import { NavLink, Navigate } from "react-router-dom"; // Importando Navigate para redirecionar
import OptionsTop from "../../components/OptionsTop";
import OptionsBottom from "../../components/OptionsBottom";
import "./Songs.css";

const Music = () => {
  return (
    <div>
      <OptionsTop></OptionsTop>
      <div className="container-fluid-music">
        <div className="row container-music">
          <div className="col-6 col-lg-3">
            <p className="col text-center py-2 m-0">Bon Jovi</p>
            <NavLink to="/platform/music/bonjovi">
              <img
                src="/images/bonJovi.png"
                className="images-music rounded-3 img-fluid"
                alt=""
              />
            </NavLink>
          </div>

          <div className="col-6 col-lg-3">
            <p className="col text-center py-2 m-0">Ed Sheeran</p>
            <NavLink to="/platform/music/edsheeran">
              <img
                src="/images/edSheeran.png"
                className="images-music rounded-3 img-fluid"
                alt=""
              />
            </NavLink>
          </div>
          <div className="col-6 col-lg-3">
            <p className="col text-center py-2 m-0">Seven Nation</p>
            <NavLink to="/platform/music/sevennation">
              <img
                src="/images/sevennation.jpg"
                className="images-music rounded-3 img-fluid"
                alt=""
              />
            </NavLink>
          </div>
          <div className="col-6 col-lg-3">
            <p className="col text-center py-2 m-0">Bruno Mars</p>
            <NavLink to="/platform/music/brunomars">
              <img
                src="/images/brunoMars.jpg"
                className="images-music rounded-3 img-fluid"
                alt=""
              />
            </NavLink>
          </div>
          <div className="col-6 col-lg-3">
            <p className="col text-center py-2 m-0">John Lennon</p>
            <NavLink to="/platform/music/johnlennon">
              <img
                src="/images/JohnLennon.jpg"
                className="images-music rounded-3 img-fluid"
                alt=""
              />
            </NavLink>
          </div>
          <div className="col-6 col-lg-3">
            <p className="col text-center py-2 m-0">John Legend</p>
            <NavLink to="/platform/music/johnlegend">
              <img
                src="/images/johnLegend.jpg"
                className="images-music rounded-3 img-fluid"
                alt=""
              />
            </NavLink>
          </div>
        </div>
      </div>
      <OptionsBottom></OptionsBottom>
    </div>
  );
};

export default Music;
