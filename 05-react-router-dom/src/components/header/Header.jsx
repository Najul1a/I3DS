import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
    <h1>React Router</h1>
    <nav>
      <ul>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/sobre">Sobre</Link> </li>
        <li> <Link to="/contato">Contato</Link> </li>
      
      </ul>
    </nav>
<button className="btn btn-primary">OK</button>
  </div>
  )
}

export default Header