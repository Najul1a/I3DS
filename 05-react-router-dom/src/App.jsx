
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './App.css'

import { BrowserRouter, Link, Route, Routes } from 'react-router'
import Header from "./components/header/Header"
import Contato from "./components/pages/Contato"
import Home from "./components/pages/Home"
import NaoEncontrado from "./components/pages/NaoEncontrado"
import Sobre from "./components/pages/Sobre"



function App() {
 


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sobre" element={<Sobre/>} /> 
        <Route path="/contato" element={<Contato />} />
         <Route path="*" element={<NaoEncontrado />} /> 
      </Routes>
      
    </BrowserRouter>
       
     
    </>
  )
}

export default App
