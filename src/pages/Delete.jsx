import React, { useState } from "react";
import { deleteUser } from "../api"; // Agora importando corretamente
import "./Login.css";

const Delete = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      email,
    };

    try {
      const data = await deleteUser(userData); // Chama a função com os dados

      if (data && data.message) {
        // Deletando o token do localStorage quando o usuário for deletado
        localStorage.removeItem("token");
        alert("Usuário deletado com sucesso!");
        // Forçar a navegação para login e recarregar a página
        window.location.href = "/login"; // Navegar para a página de login
        window.location.reload(); // Recarregar a página para limpar o estado
      } else {
        alert("Erro ao deletar usuário");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  return (
    <div className="delete-container">
      <h4>Deletar Aluno</h4>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            className="input-register"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Deletar</button> {/* Adicionando o botão */}
      </form>
    </div>
  );
};

export default Delete;
