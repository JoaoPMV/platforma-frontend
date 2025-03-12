import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SiApplemusic } from "react-icons/si";
import { SiGrammarly } from "react-icons/si";
import { MdMenuBook } from "react-icons/md";
import { GrAssistListening } from "react-icons/gr";
import { FaVideoSlash } from "react-icons/fa6";
import { BiNews } from "react-icons/bi";
import { fetchPlatformData } from "../api";
import "./Platform.css";

const Platform = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      fetchPlatformData(token)
        .then((data) => {
          console.log(data); // Verifique o conteúdo da resposta
          if (data && data.user) {
            setUserName(data.user.name);
          }
        })
        .catch((error) => console.error("Erro ao buscar usuário:", error));
    }
  }, [navigate]);

  return (
    <div className="container-fluid container-platform">
      <p className="platform">Plataforma</p>
      <p className="platform-description">
        Olá, <span className="userName">{userName || "Usuário"}</span>. Seja
        bem-vindo(a). Aqui você tem acesso exclusivo a conteúdos para aprimorar
        o inglês. <span className="userName">Bons estudos.</span>
      </p>

      <div className="container-fluid  py-3">
        <div class="row row-platform">
          <div className="col col-md-2 col-lg-2 col-platform">
            <NavLink to="/platform/music">
              <SiApplemusic className="icons-platform" />
            </NavLink>
            <p className="options-word">music</p>
          </div>
          <div className="col col-md-2 col-lg-2 col-platform">
            <NavLink to="/platform/video">
              <FaVideoSlash className="icons-platform" />
            </NavLink>
            <p className="options-word">video</p>
          </div>
          <div className="col col-md-2 col-lg-2 col-platform">
            <NavLink to="/platform/book">
              <SiGrammarly className="icons-platform" />
            </NavLink>
            <p className="options-word">grammar</p>
          </div>
        </div>
        <div className="row row-platform">
          <div className="col col-md-2 col-lg-2 col-platform">
            <NavLink to="/platform/music">
              <MdMenuBook className="icons-platform" />
            </NavLink>
            <p className="options-word">reading</p>
          </div>
          <div className="col col-md-2 col-lg-2 col-platform">
            <NavLink to="/platform/grammar">
              <GrAssistListening className="icons-platform" />
            </NavLink>
            <p className="options-word">listening</p>
          </div>

          <div className="col col-md-2 col-lg-2 col-platform">
            <NavLink to="/platform/book">
              <BiNews className="icons-platform" />
            </NavLink>
            <p className="options-word">news</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
