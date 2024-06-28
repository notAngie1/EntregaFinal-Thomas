import React from 'react';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { ThemeContext } from "../contexts/ThemeContext";
import '../App.css';
import "../LightTheme.css"

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <img src="../public/tekyarp2.png" alt="" className='iconLogo' />
        <Link className="navbar-brand" to="/Home">TekyaRP</Link>
        <a className='themeButton' onClick={() => {
          toggleTheme();
          document.body.classList.toggle('light');
        }}>
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rules">Normativas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">Tienda</Link>
            </li>
          </ul>
        </div>
        <button className='carritoButton'>
          <span className='carritoIcon'></span>
        </button>

      </div>
    </nav>
  );
};

export default NavBar;