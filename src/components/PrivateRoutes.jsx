// src/components/PrivateRoute.jsx
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const token = localStorage.getItem("token");

  // Se o token não estiver presente, redireciona para a página de login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Se o token estiver presente, renderiza as rotas internas
  return <Outlet />;
};

export default PrivateRoute;
