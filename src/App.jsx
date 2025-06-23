import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './component/NavBar'
import Inicio from './component/Inicio'
import Sobre from './component/sobrenosotros'
import Brave from './component/Brave-together'
import Productos from './component/Productos'
import Autocuidado from './component/Auto_cuidado'
import ItemDetailContainer from './component/ItemDetailContainer'

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobrenosotros" element={<Sobre />} />
          <Route path="/bravetogrther" element={<Brave />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/autocuidado" element={<Autocuidado />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

