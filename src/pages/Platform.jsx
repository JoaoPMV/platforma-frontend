import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { fetchPlatformData } from "../api";
import OptionsTop from "../components/OptionsTop";
import OptionsBottom from "../components/OptionsBottom";
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
    <div>
      <OptionsTop></OptionsTop>
      <div className="container-fluid container-platform">
        <p className="platform">Plataforma</p>
        <p className="platform-description">
          Olá, <span className="userName">{userName || "Usuário"}</span>. Seja
          bem-vindo(a). Aqui você tem acesso exclusivo a conteúdos para
          aprimorar o inglês. <span className="userName">Bons estudos.</span>
        </p>
      </div>
      <OptionsBottom></OptionsBottom>
    </div>
  );
};

export default Platform;
