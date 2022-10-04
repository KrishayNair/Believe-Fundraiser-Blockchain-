import React from 'react'
import "../components/Features.css"
import medicine from "../images/medicine.png"
import orphanage from "../images/orphanage.png"
import truck from "../images/delivery-truck.png"
import earth from "../images/world-humanitarian-day.png"
function Features() {
  return (
    <div>
         <section id="features">
          <h1 className='heading-small'>What We do</h1>
          <h1 className='heading-main'><strong>We do it</strong> for all people</h1>
  <div class="row">

    <div class="feature-box col-lg-5">
      <h3>Medicine Help<img src={medicine} class="photo1"/></h3>
      <p>we will provide medication around the world</p>
    </div>

    <div class="feature-box col-lg-5 ">
      <h3>We Build and Create<img src={orphanage} class="photo3"/></h3>
      <p>we will build orphanage around the world and help existing orphanage to get better </p>
    </div>
    <div class="feature-box col-lg-5 ">
      <h3>Water Delivery<img src={truck} class="photo2"/></h3>
      <p>Efficient control over content required for student.</p>
    </div>
    <div class="feature-box col-lg-5 ">
      <h3>We Care About Earth<img src={earth} class="photo1"/></h3>
      <p>Reduce, reuse, and recycle. Cut down on what you throw away....</p>
    </div>
  </div>
</section>
    </div>
  )
}

export default Features