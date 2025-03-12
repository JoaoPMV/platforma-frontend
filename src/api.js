const API_URL = "http://localhost:3003";

// Função para login do usuário
export async function loginUser(userData) {
  try {
    const response = await fetch(`${API_URL}/api/students/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (data.token) {
      localStorage.setItem("token", data.token); // Salva o token no localStorage
    } else {
      console.error("Erro: Token não recebido no login.");
      return null;
    }

    return data;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    return null;
  }
}

// Função de registro de usuário
export async function registerUser(userData) {
  try {
    const response = await fetch(`${API_URL}/api/students/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    return await response.json(); // Retorna a resposta do servidor
  } catch (error) {
    console.error("Erro ao registrar usuário:", error);
    return null; // Retorna null em caso de erro
  }
}

// Função para acessar a plataforma
export async function fetchPlatformData() {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Token não encontrado. Usuário não autenticado.");
      return null; // Retorna null se não encontrar o token
    }

    const response = await fetch(`${API_URL}/api/students/platform`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Envia o token no cabeçalho
      },
    });

    if (!response.ok) {
      const errorMessage = await response.text(); // Captura a mensagem de erro detalhada
      console.error("Erro ao acessar a plataforma:", errorMessage); // Mostra o erro detalhado no console
      throw new Error(`Erro ao acessar a plataforma: ${errorMessage}`); // Lança o erro
    }

    const data = await response.json(); // Retorna os dados da resposta
    return data;
  } catch (error) {
    console.error("Erro ao acessar a plataforma:", error.message);
    return null; // Retorna null em caso de erro
  }
}
