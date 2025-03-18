import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Platform from "./pages/Platform";
import Music from "./pages/Songs/Music.jsx";
import BonJovi from "./pages/Songs/BonJovi.jsx";
import EdSheeran from "./pages/Songs/edSheeran.jsx";
import SevenNation from "./pages/Songs/SevenNation.jsx";
import BrunoMars from "./pages/Songs/BrunoMars.jsx";
import JohnLennon from "./pages/Songs/JohnLennon.jsx";
import Video from "./pages/Videos/Pratical2.jsx";
import Model from "./pages/Songs/Model.jsx";

import PrivateRoute from "./components/PrivateRoutes"; // Importe o PrivateRoute

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Rota para /platform, que agora é protegida */}
        <Route element={<PrivateRoute />}>
          <Route path="/platform" element={<Platform />} />
          <Route path="/platform/music" element={<Music />} />
          <Route path="/platform/music/bonjovi" element={<BonJovi />} />
          <Route path="/platform/music/model" element={<Model />} />
          <Route path="/platform/music/edsheeran" element={<EdSheeran />} />
          <Route path="/platform/music/sevennation" element={<SevenNation />} />
          <Route path="/platform/music/brunomars" element={<BrunoMars />} />
          <Route path="/platform/music/johnlennon" element={<JohnLennon />} />
          <Route path="/platform/video" element={<Video />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
