import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Platform from "./pages/Platform";
import Music from "./pages/Songs/Music.jsx";
import BonJovi from "./pages/Songs/BonJovi.jsx";
import EdSheeran from "./pages/Songs/edSheeran.jsx";
import Video from "./pages/Videos/Pratical2.jsx";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoutes"; // Importe o PrivateRoute

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Rota para /platform, que agora é protegida */}
        <Route element={<PrivateRoute />}>
          <Route path="/platform" element={<Platform />} />
          <Route path="/platform/music" element={<Music />} />
          <Route path="/platform/music/bonjovi" element={<BonJovi />} />
          <Route path="/platform/music/edsheeran" element={<EdSheeran />} />
          <Route path="/platform/video" element={<Video />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
