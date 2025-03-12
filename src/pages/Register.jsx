import React, { useState } from "react";
import { registerUser } from "../api"; // Agora importando corretamente

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
    };

    try {
      const data = await registerUser(userData); // Chama a função com os dados

      if (data && data.message) {
        alert("Usuário registrado com sucesso!");
      } else {
        alert("Erro ao registrar usuário");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  return (
    <div className="register-container">
      <h1>Registrar Usuário</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default Register;
