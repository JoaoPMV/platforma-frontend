import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Delete from "./pages/Delete";
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos";
import Platform from "./pages/Platform";
import Music from "./pages/Songs/Music";
import BonJovi from "./pages/Songs/BonJovi";
import EdSheeran from "./pages/Songs/EdSheeran";
import SevenNation from "./pages/Songs/SevenNation";
import BrunoMars from "./pages/Songs/BrunoMars";
import JohnLennon from "./pages/Songs/JohnLennon";
import JohnLegend from "./pages/Songs/JohnLegend";
import Video from "./pages/Videos/Pratical2";
import Model from "./pages/Songs/Model";

import PrivateRoute from "./components/PrivateRoute"; // Certifique-se de que o caminho está correto

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<QuemSomos />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/deletar" element={<Delete />} />

        {/* Rota para /platform, que agora é protegida */}
        <Route
          path="/platform"
          element={
            <PrivateRoute>
              <Platform />
            </PrivateRoute>
          }
        />
        <Route
          path="/platform/music"
          element={
            <PrivateRoute>
              <Music />
            </PrivateRoute>
          }
        />
        <Route
          path="/platform/music/bonjovi"
          element={
            <PrivateRoute>
              <BonJovi />
            </PrivateRoute>
          }
        />
        <Route
          path="/platform/music/model"
          element={
            <PrivateRoute>
              <Model />
            </PrivateRoute>
          }
        />
        <Route
          path="/platform/music/edsheeran"
          element={
            <PrivateRoute>
              <EdSheeran />
            </PrivateRoute>
          }
        />
        <Route
          path="/platform/music/sevennation"
          element={
            <PrivateRoute>
              <SevenNation />
            </PrivateRoute>
          }
        />
        <Route
          path="/platform/music/brunomars"
          element={
            <PrivateRoute>
              <BrunoMars />
            </PrivateRoute>
          }
        />
        <Route
          path="/platform/music/johnlennon"
          element={
            <PrivateRoute>
              <JohnLennon />
            </PrivateRoute>
          }
        />
        <Route
          path="/platform/music/johnlegend"
          element={
            <PrivateRoute>
              <JohnLegend />
            </PrivateRoute>
          }
        />
        <Route
          path="/platform/video"
          element={
            <PrivateRoute>
              <Video />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
