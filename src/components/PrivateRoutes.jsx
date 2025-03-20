import React from "react";
import { Navigate, Route } from "react-router-dom";

const PrivateRoute = ({ element, ...rest }) => {
  const token = localStorage.getItem("token");

  // Se não houver token, redireciona para a página de login
  if (!token) {
    return <Navigate to="/login" />;
  }

  // Aqui, o "element" será o componente a ser renderizado
  return <Route {...rest} element={element} />;
};

export default PrivateRoute;
