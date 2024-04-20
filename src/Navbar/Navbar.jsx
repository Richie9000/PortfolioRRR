import React, { useState } from 'react'
import "./Navbar.css"
import { Breakpoint } from 'react-socks'
import { Link } from 'react-router-dom';

const Navbar = ({ language, toggleLanguage }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen)
  }



  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">Portfolio 3D3R</a>
      <Breakpoint small down>

       <button className="btn btn-link" onClick={toggleLanguage}>
            {language === 'english' ? 'ES' : 'EN'}
          </button>
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
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/360">360°</Link>
        </li>
        <li className="nav-item dropdown">
         <Link className="nav-link" to="/house">House</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact</Link>
        </li>
      </ul>
      
    </div>
      </Breakpoint>
      <Breakpoint large up>
      <div className="collapse navbar-collapse desktop">
          <ul className="navbar-nav">
          <li className="nav-item active">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/360">360°</Link>
        </li>
        <li className="nav-item dropdown">
        <Link className="nav-link" to="/house">House</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact</Link>
        </li>
          </ul>
          <button className="btn btn-link" onClick={toggleLanguage}>
            {language === 'english' ? 'ES' : 'EN'}
          </button>
        </div>
        
      </Breakpoint>
  
  </nav>
  )
}

export default Navbar