import React from "react";
import "./Home.css";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="container-fluid container-home">
        <div className="abesha">
          <p className="teste">Inglês com professores nativos</p>
          <p className="teste">Plataforma online repleta de materiais extras</p>
        </div>
        <hr />
      </div>

      <section className="container-fluid m-0 p-0">
        <h4 className="team-home">Nossa Equipe</h4>
        <div className="text-center">
          <img src="./images/Clinton.jpg" className="images-home" alt="" />
          <img src="./images/Joao.jpg" className="images-home" alt="" />
        </div>
      </section>

      <hr />

      <div className="container-fluid container-home">
        <div className="abesha2">
          <p className="teste">English with native teachers</p>
          <p className="teste">Online platform full of extra materials</p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
