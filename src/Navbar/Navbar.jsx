import React, { useState } from 'react'
import "./Navbar.css"
import { Breakpoint } from 'react-socks'

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">Portfolio 3D3R</a>
      <Breakpoint small down>

       <button 
         className="navbar-toggler" 
         type="button" 
         onClick={toggleNavbar}
         aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
       </button>

    <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">360°</a>
        </li>
        <li className="nav-item dropdown">
        <a className="nav-link" href="#">House</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Contact</a>
        </li>
      </ul>
    
    </div>
      </Breakpoint>
      <Breakpoint large up>
      <div className="collapse navbar-collapse desktop">
          <ul className="navbar-nav">
          <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">360°</a>
        </li>
        <li className="nav-item dropdown">
        <a className="nav-link" href="#">House</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">Contact</a>
        </li>
          </ul>
        </div>
      </Breakpoint>
  
  </nav>
  )
}

export default Navbar