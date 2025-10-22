import React from 'react'
import './navbar.css'
import { Link, NavLink } from 'react-router-dom'
import About from '../about/About'

export default function Navbar() {
  return <>
  <nav className="navbar navbar-expand-lg navbar-light fixed-top py-4">
  <div className="container">
    <NavLink className="navbar-brand text-white text-uppercase fw-bolder fs-2" to={''} >Start Framework </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2" to={'about'}  >About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2" to={'portfolio'} >portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2" to={'contact'} >contact</NavLink>
        </li>
       
      </ul>
     
    </div>
  </div>
  </nav>

  </>
}
