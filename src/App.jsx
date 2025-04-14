import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './component/NavBar'
import Inicio from './component/inicio'
import Sobre from './component/sobrenosotros'
import Brave from './component/Brave-together'
import Productos from './component/Productos' // Asegurate de tener este componente

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobrenosotros" element={<Sobre />} />
          <Route path="/brsvetogrther" element={<Brave />} />
          <Route path="/productos" element={<Productos />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

