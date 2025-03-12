import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api"; // Agora importa corretamente a função de login

import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { email, password };

    try {
      const response = await loginUser(userData);

      if (response && response.token) {
        localStorage.setItem("token", response.token); // Salva o token no localStorage
        alert("Login realizado com sucesso!");
        navigate("/platform"); // Redireciona para a página Home
      } else {
        alert(response?.message || "Erro ao fazer login");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Erro ao conectar com o servidor");
    }
  };

  return (
    <div>
      <div className="login-container">
        <p className="paragraph-login">
          Acesso exclusivo aos alunos. Faça seu login.
        </p>
        <hr className="line-login" />
        <form onSubmit={handleSubmit} className="form-login">
          <div>
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Entrar</button>
        </form>
        <p className="paragraph-login-bottom">
          Caso não tenha login, visite nossos outros materiais. Clique aqui.
        </p>
      </div>
    </div>
  );
}

export default Login;
