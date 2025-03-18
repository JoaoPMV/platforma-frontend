import React from "react";
import "./QuemSomos.css";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const QuemSomos = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="container-fluid container-quem-somos m-0 pb-3">
        <p className="title">Quem Somos</p>

        <p className="sobre">
          João é brasileiro. Já morou nos Estados Unidos e viajou para vários
          países de língua inglesa. Clinton é norte-americano e professor de
          inglês para brasileiros.
        </p>

        <p className="title">Sobre as aulas</p>

        <p className="sobre">
          As aulas são online e têm 60 minutos de duração. Podem ser ministradas
          pelo João ou Clinton, a depender do nível e objetivos do aluno.
        </p>

        <p className="title">Plataforma Online</p>

        <p className="sobre">
          Além das aulas, os alunos têm acesso exclusivo a muitos materiais de
          músicas, vídeos, jogos e entretenimento. A plataforma é disponível 24h
          por dia via smartphone, tablet ou laptop.
        </p>

        <p className="title">Material Didático</p>

        <p className="sobre">
          As aulas são norteadas pelo American English File, da Oxfort
          University. Os materiais focam em habilidades de pronúncia,
          vocabulário, leitura gramática e fala.
        </p>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default QuemSomos;
