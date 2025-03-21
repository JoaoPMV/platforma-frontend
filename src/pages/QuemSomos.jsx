import React from "react";
import "./QuemSomos.css";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const QuemSomos = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="container-fluid container-quem-somos">
        <div className="caixa-quem-somos my-2">
          <p className="title">Quem Somos</p>

          <p className="sobre">
            João é brasileiro. Já morou nos Estados Unidos e viajou para vários
            países de língua inglesa. Clinton é norte-americano e professor de
            inglês para brasileiros.
          </p>
        </div>

        <div className="caixa-quem-somos2 my-2">
          <p className="title">Sobre as Aulas</p>

          <p className="sobre">
            Aulas online com duração de 60 minutos. Podem ser ministradas pelo
            João ou Clinton, a depender do nível e objetivos do aluno.
          </p>
        </div>

        <div className="caixa-quem-somos my-2">
          <p className="title">Plataforma Online</p>
          <p className="sobre">
            Acesso exclusivo a muitos materiais de músicas, vídeos, jogos e
            entretenimento. Plataforma disponível 24h por dia.
          </p>
        </div>

        <div className="caixa-quem-somos2 my-2">
          <p className="title">Materiais Didáticos</p>
          <p className="sobre">
            As aulas são norteadas pelo American English File, da Oxfort
            University. Os materiais focam em habilidades de pronúncia,
            vocabulário, leitura, gramática e fala.
          </p>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default QuemSomos;
