import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Productos from './components/Productos.jsx';
import NavBar from './components/NavBar.jsx';
import Carousel from './components/Carrucel.jsx';


const images = [
  { src: '/imagen_prueba.png', alt: 'Imagen 1' },
  { src: '/imagen_prueba.png', alt: 'Imagen 2' },
  { src: '/imagen_prueba.png', alt: 'Imagen 3' },
];

function App() {

  return (
    <>
    <NavBar/>
    
    <Carousel
    images={images}
    />
     <Productos></Productos>
    </>
  )
}

export default App
