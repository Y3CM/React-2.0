import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Productos from "./components/Productos.jsx";
import NavBar from "./components/NavBar.jsx";
import Carousel from "./components/Carrucel.jsx";
import LoginComponent from "./components/Login.jsx";
import HomePage from "./components/HomePage.jsx";

const images = [
  { src: "/imagen_prueba.png", alt: "Imagen 1" },
  { src: "/imagen_prueba.png", alt: "Imagen 2" },
  { src: "/imagen_prueba.png", alt: "Imagen 3" },
];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} />} />
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/productos" />
            ) : (
              <LoginComponent onLoginSuccess={handleLoginSuccess} />
            )
          }
        />
        <Route
          path="/productos"
          element={
            isLoggedIn ? (
              <>
                <NavBar onLogout={handleLogout} />
                <Carousel images={images} />
                <Productos />
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        {/* Agrega más rutas según sea necesario */}
      </Routes>
    </>
  );
}

export default App;
