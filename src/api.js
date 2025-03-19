const API_URL = import.meta.env.VITE_APP_URL;

// Função para login do usuário
export async function loginUser(userData) {
  try {
    const response = await fetch(`${API_URL}/api/students/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
      credentials: "include", // Adicionando o envio de credenciais
    });

    const data = await response.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
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
      credentials: "include", // Adicionando o envio de credenciais
    });
    return await response.json();
  } catch (error) {
    console.error("Erro ao registrar usuário:", error);
    return null;
  }
}

// Função para acessar a plataforma
export async function fetchPlatformData() {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Token não encontrado. Usuário não autenticado.");
      return null;
    }

    const response = await fetch(`${API_URL}/api/students/platform`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include", // Adicionando o envio de credenciais
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      console.error("Erro ao acessar a plataforma:", errorMessage);
      throw new Error(`Erro ao acessar a plataforma: ${errorMessage}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Erro ao acessar a plataforma:", error.message);
    return null;
  }
}

export async function deleteUser(userData) {
  try {
    const response = await fetch(`${API_URL}/api/students/deletar`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      credentials: "include", // Adicionando o envio de credenciais
    });
    return await response.json();
  } catch (error) {
    console.error("Erro ao deletar usuário:", error);
    return null;
  }
}
