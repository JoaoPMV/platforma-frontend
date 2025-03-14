import { NavLink, Navigate } from "react-router-dom"; // Importando Navigate para redirecionar
import OptionsTop from "../../components/OptionsTop";
import OptionsBottom from "../../components/OptionsBottom";
import "./Songs.css";

const Music = () => {
  return (
    <div>
      <OptionsTop></OptionsTop>
      <div className="container-fluid container-music pt-5">
        <div className="row pb-5 p-3">
          <div className="col-6 col-lg-3">
            <p className="col text-center pb-2 m-0">Bom Jovi</p>
            <NavLink to="/platform/music/bonjovi">
              <img
                src="/images/bonJovi.png"
                className="images-music rounded-3 img-fluid"
                alt=""
              />
            </NavLink>
          </div>

          <div className="col-6 col-lg-3">
            <p className="col text-center pb-2 m-0">Ed Sheeran</p>
            <NavLink to="/platform/music/edsheeran">
              <img
                src="/images/edSheeran.png"
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
