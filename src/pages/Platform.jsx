import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
        <p className="userName-description">
          Olá, <span className="userName">{userName || "Usuário"}</span>.
        </p>
        <p className="platform-description">
          Seja bem-vindo(a) à plataforma de inglês, com acesso a conteúdos
          exclusivos. <span className="userName">Bons estudos.</span>
        </p>
      </div>
      <OptionsBottom></OptionsBottom>
    </div>
  );
};

export default Platform;
