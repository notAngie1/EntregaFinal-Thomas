import React from 'react';
import { Link } from "react-router-dom";
import '../App.css'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <img src="../public/tekyarp2.png" alt="" className='iconLogo'/>
        <Link className="navbar-brand" to="/Home">TekyaRP</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item">
              <Link className="nav-link" to="/Home">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/normativas">Normativas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Shop">Tienda</Link>
            </li>
          </ul>
        </div>
        <button className='carritoButton'>
            <span className='carritoIcon'></span>
        </button>
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
      </div>
    </nav>
  );
};

export default NavBar;