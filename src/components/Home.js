import React from 'react'
import "../components/Home.css"
import Hero from './Hero';
import logo from "../images/believe.png"
import "../components/Features.css"
import medicine from "../images/medicine.png"
import orphanage from "../images/orphanage.png"
import truck from "../images/delivery-truck.png"
import earth from "../images/world-humanitarian-day.png"
import { Link } from 'react-router-dom';
import "../components/Hero.css"

function Navbar() {
  return (
    <>
<ul className="nav justify-content-center">
       
        <li className="nav-brand">
        <Link to="/" className="nav-link active">
          <a className="nav-link active" aria-current="page" href="#"><img src={logo} className="logo"/></a>
          </Link>
        </li>
        <li className="nav-item">
       <Link to="/" className="nav-link active">Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/works" className="nav-link ">How it works</Link>
        </li>
        <li className="nav-item">
        <Link to="/organizations" className="nav-link">Organizations</Link>
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
        <Link to="/gallery" className="nav-link">Gallery</Link>
        </li>
        <li className="nav-item">
        <Link to="/ContactUs" className="nav-link">Contact Us</Link>
        </li>
        <li className="nav-item">
        <Link to="/signUp" className="nav-link">Sign Up</Link>
        </li>
      </ul>
      <section className='Main'>
<h1>YOUR HOME <br/>FOR HELP</h1>
<button type="button" class="btnHero btn-outline-primary">Start a Fund</button>

        </section>
        <section id="features">
          <h1 className='heading-small'>What We do <br/></h1>
          <h1 className='heading-main'><strong>We do it</strong> for all people</h1>
  <div class="row">

    <div class="feature-box col-lg-5">
      <h3>Medicine and Treatment<img src={medicine} class="photo1"/></h3>
      <p>we will provide medication around the world</p>
    </div>

    <div class="feature-box col-lg-5 ">
      <h3>We Build and Create<img src={orphanage} class="photo3"/></h3>
      <p>We will build NGO's association and orphanage around the world</p>
    </div>
    <div class="feature-box col-lg-5 ">
      <h3>Water Delivery<img src={truck} class="photo2"/></h3>
      <p>We are helping people in water scarce villages to build sustainable water harvesting systems.</p>
    </div>
    <div class="feature-box col-lg-5 ">
      <h3>We Care About Earth<img src={earth} class="photo1"/></h3>
      <p>Strives to help make the changes necessary to provide a healthier future for our planet by funding our Global Initiatives.</p>
    </div>
  </div>
</section>
      </>
  )
}

export default Navbar