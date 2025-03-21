import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Delete from "./pages/Delete.jsx";
import Home from "./pages/Home";
import QuemSomos from "./pages/QuemSomos.jsx";
import Platform from "./pages/Platform";
import Music from "./pages/Songs/Music.jsx";
import BonJovi from "./pages/Songs/BonJovi.jsx";
import EdSheeran from "./pages/Songs/edSheeran.jsx";
import SevenNation from "./pages/Songs/SevenNation.jsx";
import BrunoMars from "./pages/Songs/BrunoMars.jsx";
import JohnLennon from "./pages/Songs/JohnLennon.jsx";
import JohnLegend from "./pages/Songs/JohnLegend.jsx";
import Video from "./pages/Videos/Pratical2.jsx";
import Model from "./pages/Songs/Model.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<QuemSomos />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/deletar" element={<Delete />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/platform/music" element={<Music />} />
        <Route path="/platform/music/bonjovi" element={<BonJovi />} />
        <Route path="/platform/music/model" element={<Model />} />
        <Route path="/platform/music/edsheeran" element={<EdSheeran />} />
        <Route path="/platform/music/sevennation" element={<SevenNation />} />
        <Route path="/platform/music/brunomars" element={<BrunoMars />} />
        <Route path="/platform/music/johnlennon" element={<JohnLennon />} />
        <Route path="/platform/music/johnlegend" element={<JohnLegend />} />
        <Route path="/platform/video" element={<Video />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
