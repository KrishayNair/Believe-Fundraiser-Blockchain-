import React from 'react'
import gallery1 from "../images/Gallery1.webp"
import "../components/Gallery.css"
import { Link } from 'react-router-dom';
import logo from "../images/believe.png"
import gal1 from "../images/gal1.jpeg"
import gal2 from "../images/gal2.jpeg"
import gal3 from "../images/gal3.jpeg"
import gal4 from "../images/gal4.jpeg"
import gal5 from "../images/gal5.jpeg"
import gal6 from "../images/gal6.jpeg"
function Gallery() {
  return (
    <div>
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
         <li><a class="dropdown-item" href="#">Medical Treatment</a></li>
            <li><a class="dropdown-item" href="#">Society Welfare</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Animal Welfare</a></li>
         </ul>
       </li>
       <li className="nav-item">
       <Link to="/gallery" className="nav-link">Gallery</Link>
       </li>
       <li className="nav-item">
       <Link to="/signUp" className="nav-link">Sign Up</Link>
       </li>
     </ul>
     <h1>OUR GALLERY</h1>
        <section className='Content'>
        <div className="row">
            <div className="column">
            {/* <img src={post1} className="FeedImage" alt="..." /> */}
            <img className="FeedImage" src={gallery1}></img> 
           
            </div>
            <div className="column">
           
            <img className="FeedImage" src={gal1}></img> 
            {/* <img src={post2} className="FeedImage" alt="..." /> */}
            
            </div>
            <div className="column">
          
            <img className="FeedImage" src={gal2}></img> 
            {/* <img src={post3} className="FeedImage" alt="..." /> */}
            
            </div>
        </div>
        <div className="row">
            <div className="column">
            {/* <img src={post4} className="FeedImage" alt="..." /> */}
            <img className="FeedImage" src={gal3}></img> 
        
            </div>
            <div className="column">
           
            <img className="FeedImage" src={gal4}></img> 
            {/* <img src={post5} className="FeedImage" alt="..." /> */}
        
            </div>
            <div className="column">
          
            <img className="FeedImage" src={gal5}></img>  
            {/* <img src={post6} className="FeedImage" alt="..." /> */}
        
            </div>
        </div>
        </section>
    </div>
  )
}

export default Gallery