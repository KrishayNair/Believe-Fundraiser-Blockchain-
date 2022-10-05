import React from 'react'
import "./Navbar.css"
import logo from "../images/believe.png"
function Navbar() {
  return (
<ul className="nav justify-content-center">
        
        <li className="nav-brand">
          <a className="nav-link active" aria-current="page" href="#"><img src={logo} className="logo"/></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">How it works</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Organizations</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Fund raise for 
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link ">Gallery</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ">Contact Us</a>
        </li>
      </ul>
  )
}

export default Navbar